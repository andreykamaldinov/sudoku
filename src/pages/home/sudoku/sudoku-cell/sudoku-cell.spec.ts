import { describe, it, expect } from 'vitest'
import { createCell, makeGuess, isCellRight } from './sudoku-cell'

describe('Sudoku Cell Functions', () => {
  it('should create a cell with the correct properties', () => {
    const cell = createCell(5, 0, 0, true)

    expect(cell).toEqual({
      value: 5,
      guess: null,
      row: 0,
      col: 0,
      isVisible: true,
      isError: false,
    })
  })

  it('should allow different initial values for createCell', () => {
    const cell = createCell(9, 8, 7, false)

    expect(cell).toEqual({
      value: 9,
      guess: null,
      row: 8,
      col: 7,
      isVisible: false,
      isError: false,
    })
  })

  it('should set the guess and isError correctly when the guess is correct', () => {
    const cell = createCell(5, 0, 0, true)

    makeGuess(cell, 5)

    expect(cell.guess).toBe(5)
    expect(cell.isError).toBe(false)
  })

  it('should set the guess and isError correctly when the guess is incorrect', () => {
    const cell = createCell(5, 0, 0, true)

    makeGuess(cell, 3)

    expect(cell.guess).toBe(3)
    expect(cell.isError).toBe(true)
  })

  it('should return true if the cell is not visible and the guess matches the value', () => {
    const cell = createCell(5, 0, 0, false)
    cell.guess = 5

    expect(isCellRight(cell)).toBe(true)
  })

  it('should return false if the cell is visible, even if the guess matches the value', () => {
    const cell = createCell(5, 0, 0, true)
    cell.guess = 5

    expect(isCellRight(cell)).toBe(false)
  })

  it('should return false if the guess does not match the value', () => {
    const cell = createCell(5, 0, 0, false)
    cell.guess = 3

    expect(isCellRight(cell)).toBe(false)
  })

  it('should return false if the guess is null', () => {
    const cell = createCell(5, 0, 0, false)
    cell.guess = null

    expect(isCellRight(cell)).toBe(false)
  })
})
