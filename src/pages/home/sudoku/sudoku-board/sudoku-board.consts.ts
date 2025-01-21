import { SudokuLevel } from '@/pages/home/sudoku/sudoku-header/level/level.enum.ts'

export const sudokuVisibleRanges: Record<SudokuLevel, [number, number]> = {
  [SudokuLevel.BEGINNER]: [80, 80],
  [SudokuLevel.INTERMEDIATE]: [80, 80],
  [SudokuLevel.HARD]: [80, 80],
  [SudokuLevel.EXPERT]: [80, 80],
}
