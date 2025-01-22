import type { SudokuLevel } from '@/pages/home/sudoku/sudoku-header/level/level.enum.ts';
import type { CellType } from '@/pages/home/sudoku/sudoku-cell/sudoku-cell.types.ts';
import type { AvailableDigits } from '@/pages/home/sudoku/available-digits/available-digits.types.ts';

type LeaderBoard = {
    [key in SudokuLevel]: number[];
};

type MoveHistory = {
    cell: CellType;
    previousValue: number | null;
    previousState: boolean;
    newValue: number | null;
};

export type Store = {
    hints: number;
    sudokuLevel: SudokuLevel;
    sudokuBlock: CellType[][];
    score: number;
    availableDigits: AvailableDigits[];
    isStarted: boolean;
    isFinished: boolean;
    timeSpent: number;
    isPaused: boolean;
    leaderBoards: LeaderBoard;
    moveHistory: MoveHistory[];
    currentMoveIndex: number;
};
