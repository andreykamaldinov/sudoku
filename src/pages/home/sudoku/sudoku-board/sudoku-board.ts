import { createCell } from '../sudoku-cell/sudoku-cell.ts';
import type { SudokuLevel } from '@/pages/home/sudoku/sudoku-header/level/level.enum.ts';
import type { CellType } from '../sudoku-cell/sudoku-cell.types.ts';
import { sudokuVisibleRanges } from './sudoku-board.consts.ts';

export function createSudokuBoard(rank: SudokuLevel): CellType[][] {
    const size = 9;
    const rowFilters: Set<number>[] = Array.from({ length: size }, () => new Set());
    const colFilters: Set<number>[] = Array.from({ length: size }, () => new Set());
    const quadrantFilters: Set<number>[] = Array.from({ length: size }, () => new Set());
    let cells: CellType[][] = [];

    const initializeBoard = (): void => {
        resetFilters();
        cells = Array.from({ length: size }, (_, row) =>
            Array.from({ length: size }, (_, col) =>
                createCell(getRandomNumber(row, col), row, col, Math.random() >= 0.5),
            ),
        );
    };

    const resetFilters = (): void => {
        for (let i = 0; i < size; i++) {
            rowFilters[i].clear();
            colFilters[i].clear();
            quadrantFilters[i].clear();
        }
    };

    const getRandomNumber = (row: number, col: number): number => {
        const nums = Array.from({ length: size }, (_, i) => i + 1);
        const quadrant = getQuadrant(row, col);

        const availableNumbers = nums.filter(
            (num) => !rowFilters[row].has(num) && !colFilters[col].has(num) && !quadrantFilters[quadrant].has(num),
        );

        const num = availableNumbers[Math.floor(Math.random() * availableNumbers.length)];

        rowFilters[row].add(num);
        colFilters[col].add(num);
        quadrantFilters[quadrant].add(num);

        return num;
    };

    const getQuadrant = (row: number, col: number): number => {
        const rowGroup = Math.floor(row / 3);
        const colGroup = Math.floor(col / 3);
        return rowGroup * 3 + colGroup;
    };

    const hasUndefinedCells = (): boolean => {
        return cells.some((row) => row.some((cell) => !cell.value));
    };

    const applyRankVisibility = (): void => {
        const [minVisible, maxVisible] = sudokuVisibleRanges[rank];
        const totalVisible = Math.floor(Math.random() * (maxVisible - minVisible + 1)) + minVisible;

        const allCells = cells.flat();
        const shuffledCells = shuffleArray(allCells);

        shuffledCells.forEach((cell, index) => {
            cell.isVisible = index < totalVisible;
            cell.guess = cell.isVisible ? cell.value : null;
        });
    };

    const shuffleArray = <T>(array: T[]): T[] => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const generateValidBoard = (): void => {
        do {
            initializeBoard();
        } while (hasUndefinedCells());
    };

    generateValidBoard();
    applyRankVisibility();

    return cells;
}
