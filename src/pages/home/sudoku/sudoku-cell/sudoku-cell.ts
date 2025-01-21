import type { CellType } from './sudoku-cell.types.ts'

export function createCell(value: number, row: number, col: number, isVisible: boolean): CellType {
  return {
    value,
    guess: null,
    row,
    col,
    isVisible,
    isError: false,
  }
}

export function makeGuess(cell: CellType, guess: number): void {
  cell.guess = guess
  cell.isError = guess !== cell.value
}

export function isCellRight(cell: CellType): boolean {
  return !cell.isVisible && cell.guess === cell.value
}
