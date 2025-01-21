import type { SudokuLevel } from '@/pages/home/sudoku/sudoku-header/level/level.enum.ts'

export type AvailableDigits = {
  digit: number
  disabled: boolean
}
export type CellType = {
  value: number
  guess: number | null
  row: number
  col: number
  isVisible: boolean
  isError: boolean
}

export type SudokuStore = {
  hints: number
  sudokuLevel: SudokuLevel
  sudokuBlock: CellType[][]
  score: number
  availableDigits: AvailableDigits[]
  isStarted: boolean
  isFinished: boolean
  timeSpent: number
  isPaused: boolean
  hintCell: CellType | null
  isHintVisible: boolean
}
