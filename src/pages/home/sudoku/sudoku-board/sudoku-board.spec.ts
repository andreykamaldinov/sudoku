import { describe, it, expect } from 'vitest';
import { createSudokuBoard } from './sudoku-board';
import { SudokuLevel } from '@/pages/home/sudoku/sudoku-header/level/level.enum.ts';
import { sudokuVisibleRanges } from '@/pages/home/sudoku/sudoku-board/sudoku-board.consts.ts';

describe('createSudokuBoard', () => {
    const levels = Object.values(SudokuLevel);

    it('should support all 4 Sudoku levels', () => {
        levels.forEach((level: SudokuLevel) => {
            const board = createSudokuBoard(level);
            expect(board).toHaveLength(9);
            board.forEach((row) => {
                expect(row).toHaveLength(9);
            });
        });
    });

    it('should have a valid number of visible cells for each level', () => {
        levels.forEach((level: SudokuLevel) => {
            const [minVisible, maxVisible] = sudokuVisibleRanges[level];
            const board = createSudokuBoard(level);
            const visibleCellsCount = board.flat().filter((cell) => cell.isVisible).length;

            expect(visibleCellsCount).toBeGreaterThanOrEqual(minVisible);
            expect(visibleCellsCount).toBeLessThanOrEqual(maxVisible);
        });
    });

    it('should generate a valid Sudoku board', () => {
        levels.forEach((level) => {
            const board = createSudokuBoard(level);

            // Validate rows
            board.forEach((row) => {
                const values = row.map((cell) => cell.value);
                expect(new Set(values).size).toBe(9);
            });

            // Validate columns
            for (let col = 0; col < 9; col++) {
                const values = board.map((row) => row[col].value);
                expect(new Set(values).size).toBe(9);
            }

            // Validate quadrants
            for (let quadrant = 0; quadrant < 9; quadrant++) {
                const rowStart = Math.floor(quadrant / 3) * 3;
                const colStart = (quadrant % 3) * 3;
                const values = [];
                for (let r = rowStart; r < rowStart + 3; r++) {
                    for (let c = colStart; c < colStart + 3; c++) {
                        values.push(board[r][c].value);
                    }
                }
                expect(new Set(values).size).toBe(9);
            }
        });
    });

    it('should generate unique boards for the same level', () => {
        const board1 = createSudokuBoard(SudokuLevel.BEGINNER);
        const board2 = createSudokuBoard(SudokuLevel.BEGINNER);

        const board1Values = board1.flat().map((cell) => cell.value);
        const board2Values = board2.flat().map((cell) => cell.value);

        expect(board1Values).not.toEqual(board2Values);
    });

    levels.forEach((level) => {
        it(`should generate unique boards for the ${level} level`, () => {
            const board1 = createSudokuBoard(level);
            const board2 = createSudokuBoard(level);

            const board1Values = board1.flat().map((cell) => cell.value);
            const board2Values = board2.flat().map((cell) => cell.value);

            expect(board1Values).not.toEqual(board2Values);
        });
    });
});
