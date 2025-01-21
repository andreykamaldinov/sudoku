import type { AvailableDigits } from '@/pages/home/sudoku/utils/sudoku.types.ts'
import { SudokuLevel } from '@/pages/home/sudoku/sudoku-header/level/level.enum.ts'

export const initialAvailableDigits: AvailableDigits[] = Array(9)
  .fill(null)
  .map((_, index) => ({
    digit: index + 1,
    disabled: false,
  }))

export const sudokuVisibleRanges: Record<SudokuLevel, [number, number]> = {
  [SudokuLevel.BEGINNER]: [36, 40],
  [SudokuLevel.INTERMEDIATE]: [32, 36],
  [SudokuLevel.HARD]: [28, 32],
  [SudokuLevel.EXPERT]: [24, 28],
}

export const sudokuLevels: SudokuLevel[] = [
  SudokuLevel.BEGINNER,
  SudokuLevel.INTERMEDIATE,
  SudokuLevel.HARD,
  SudokuLevel.EXPERT,
]
