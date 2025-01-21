import { defineStore } from 'pinia'
import { SudokuLevel } from '@/pages/home/sudoku/sudoku-header/level/level.enum'
import type { Store } from './store.types.ts'
import { SudokuScore } from '@/pages/home/sudoku/sudoku-header/score/score.enum'
import { createSudokuBoard } from '@/pages/home/sudoku/sudoku-board/sudoku-board.ts'
import { initialAvailableDigits } from '@/pages/home/sudoku/available-digits/available-digits.consts.ts'
import type { CellType } from '@/pages/home/sudoku/sudoku-cell/sudoku-cell.types.ts'

const initialState: Store = {
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

export const useStore = defineStore('sudoku', {
  state: (): Store => initialState,
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
    minusHintScore: (state): number => {
      const usedHintsCount = 10 - state.hints
      return SudokuScore.HINT_PENALTY + usedHintsCount
    },
  },
  actions: {
    changeSudokuLevel(level: SudokuLevel) {
      this.sudokuLevel = level
    },

    showHint() {
      if (this.hints && !this.isHintVisible && this.hint) {
        this.score -= this.minusHintScore
        this.hints -= 1
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
