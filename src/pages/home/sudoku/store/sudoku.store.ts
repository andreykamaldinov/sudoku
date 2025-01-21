import { defineStore } from 'pinia'
import { SudokuLevel } from '@/pages/home/sudoku/sudoku-header/level/level.enum'
import type { CellType, SudokuStore } from '@/pages/home/sudoku/utils/sudoku.types.ts'
import { initialAvailableDigits } from '@/pages/home/sudoku/utils/sudoku.consts'
import { SudokuScore } from '@/pages/home/sudoku/sudoku-header/score/score.enum'
import { createSudokuBoard } from '@/pages/home/sudoku/utils/sudoku-board.ts'

const initialSudokuState: SudokuStore = {
  hints: 10,
  sudokuLevel: SudokuLevel.BEGINNER,
  sudokuBlock: [],
  score: SudokuScore.TOTAL_POINTS,
  availableDigits: initialAvailableDigits,
  isStarted: false,
  isFinished: false,
  timeSpent: 0,
  isPaused: false,
  hintCell: null,
  isHintVisible: false,
}

export const useSudokuStore = defineStore('sudoku', {
  state: (): SudokuStore => initialSudokuState,
  getters: {
    isCompleted: (state): boolean =>
      state.sudokuBlock.every((row) => row.every((cell) => !cell.isError && cell.guess)),
    isDigitDisabled:
      (state) =>
      (digit: number): boolean => {
        return state.sudokuBlock.every((row) => row.some((cell) => cell.guess === digit))
      },
    hint: (state): CellType | null => {
      return (
        state.sudokuBlock
          .flat()
          .filter((cell) => !cell.isVisible && cell.guess !== cell.value)[0] || null
      )
    },
  },
  actions: {
    changeSudokuLevel(level: SudokuLevel) {
      this.sudokuLevel = level
    },

    useHint(minusPoint: number) {
      if (this.hints && !this.isHintVisible && this.hint) {
        this.hints -= 1
        this.score -= minusPoint
        this.hintCell = this.hint
        this.isHintVisible = true
      }
    },

    hideHint() {
      this.isHintVisible = false
    },

    scorePenalty() {
      this.score = this.score - SudokuScore.ERROR_PENALTY
    },

    scoreSuccess() {
      this.score = this.score + SudokuScore.CORRECT_CELL_POINTS
    },

    startGame() {
      this.sudokuBlock = createSudokuBoard(this.sudokuLevel)
      this.timeSpent = 0
      this.hints = 10
      this.isFinished = false
      this.isStarted = true
      this.isPaused = false
      this.score = SudokuScore.TOTAL_POINTS
    },

    resetGame() {
      this.isStarted = false
    },

    finishGame() {
      this.isFinished = true
      this.isPaused = true
      this.score = this.score - this.timeSpent
    },

    setPause() {
      this.isPaused = !this.isPaused
    },
  },
})
