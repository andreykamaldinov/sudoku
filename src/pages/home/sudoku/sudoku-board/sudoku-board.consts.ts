import { SudokuLevel } from '@/pages/home/sudoku/sudoku-header/level/level.enum.ts'

export const sudokuVisibleRanges: Record<SudokuLevel, [number, number]> = {
  [SudokuLevel.BEGINNER]: [36, 40],
  [SudokuLevel.INTERMEDIATE]: [32, 36],
  [SudokuLevel.HARD]: [28, 32],
  [SudokuLevel.EXPERT]: [24, 28],
}
