// import { defineStore } from 'pinia'
// import { SudokuLevel } from '@/pages/home/sudoku/sudoku-header/level/level.enum.ts'
//
// type SudokuCell = {
//   value: number | null
//   isEditable: boolean
// }
//
// type SudokuBlock = SudokuCell[][]
//
// type SudokuState = {
//   blocks: SudokuBlock
//   level: SudokuLevel | null
// }
//
// function generateSudoku(level: SudokuLevel): SudokuBlock {
//   const blocks: SudokuBlock = Array.from({ length: 9 }, () =>
//     Array.from({ length: 9 }, () => ({ value: null, isEditable: true })),
//   )
//
//   // Случайное количество видимых ячеек в зависимости от уровня сложности
//   const visibleRanges: Record<SudokuLevel, [number, number]> = {
//     [SudokuLevel.BEGINNER]: [36, 40],
//     [SudokuLevel.INTERMEDIATE]: [32, 36],
//     [SudokuLevel.HARD]: [28, 32],
//     [SudokuLevel.EXPERT]: [24, 28],
//   }
//
//   const [minVisible, maxVisible] = visibleRanges[level]
//   const visibleCells = Math.floor(Math.random() * (maxVisible - minVisible + 1)) + minVisible
//
//   // Генерация значений
//   const randomizeCells = () => {
//     // Пример алгоритма генерации Sudoku (можно улучшить)
//     const numbers = Array.from({ length: 9 }, (_, i) => i + 1)
//     for (let row = 0; row < 9; row++) {
//       for (let col = 0; col < 9; col++) {
//         if (Math.random() < visibleCells / 81) {
//           const value = numbers[Math.floor(Math.random() * numbers.length)]
//           blocks[row][col] = { value, isEditable: false } // Занятые ячейки не редактируются
//         }
//       }
//     }
//   }
//
//   randomizeCells()
//
//   return blocks
// }
//
// export const useSudokuStore = defineStore('sudoku', {
//   state: (): SudokuState => ({
//     blocks: Array.from({ length: 9 }, () =>
//       Array.from({ length: 9 }, () => ({ value: null, isEditable: true })),
//     ),
//     level: null,
//   }),
//   actions: {
//     startGame(level: SudokuLevel) {
//       this.level = level
//       console.log('@@', generateSudoku(level))
//       this.blocks = generateSudoku(level)
//     },
//     resetGame() {
//       this.level = null
//       this.blocks = Array.from({ length: 9 }, () =>
//         Array.from({ length: 9 }, () => ({ value: null, isEditable: true })),
//       )
//     },
//   },
// })
//
//
//
//
//
//
//
//
//
//
//
//
//
// // import { defineStore } from 'pinia'
// // import { SudokuLevel } from '@/pages/home/sudoku/sudoku-header/level/level.enum.ts'
// //
// // type SudokuCell = {
// //   value: number | null
// //   isEditable: boolean
// //   isError: boolean
// // }
// //
// // type SudokuBlock = SudokuCell[][]
// //
// // type SudokuState = {
// //   blocks: SudokuBlock
// //   level: SudokuLevel | null
// // }
// //
// // function isValidPlacement(grid: number[][], row: number, col: number, num: number): boolean {
// //   // Проверяем строку
// //   for (let x = 0; x < 9; x++) {
// //     if (grid[row][x] === num) return false
// //   }
// //
// //   // Проверяем столбец
// //   for (let x = 0; x < 9; x++) {
// //     if (grid[x][col] === num) return false
// //   }
// //
// //   // Проверяем блок 3x3
// //   const startRow = Math.floor(row / 3) * 3
// //   const startCol = Math.floor(col / 3) * 3
// //   for (let i = 0; i < 3; i++) {
// //     for (let j = 0; j < 3; j++) {
// //       if (grid[startRow + i][startCol + j] === num) return false
// //     }
// //   }
// //
// //   return true
// // }
// //
// // function generateFullSudoku(): number[][] {
// //   const grid: number[][] = Array.from({ length: 9 }, () => Array(9).fill(0))
// //
// //   const fillGrid = (row = 0, col = 0): boolean => {
// //     if (row === 9) return true
// //     if (col === 9) return fillGrid(row + 1, 0)
// //
// //     const numbers = Array.from({ length: 9 }, (_, i) => i + 1).sort(() => Math.random() - 0.5)
// //
// //     for (const num of numbers) {
// //       if (isValidPlacement(grid, row, col, num)) {
// //         grid[row][col] = num
// //         if (fillGrid(row, col + 1)) return true
// //         grid[row][col] = 0
// //       }
// //     }
// //
// //     return false
// //   }
// //
// //   fillGrid()
// //   return grid
// // }
// //
// // function removeCells(grid: number[][], level: SudokuLevel): SudokuBlock {
// //   const visibleRanges: Record<SudokuLevel, [number, number]> = {
// //     [SudokuLevel.BEGINNER]: [36, 40],
// //     [SudokuLevel.INTERMEDIATE]: [32, 36],
// //     [SudokuLevel.HARD]: [28, 32],
// //     [SudokuLevel.EXPERT]: [24, 28],
// //   }
// //
// //   const [minVisible, maxVisible] = visibleRanges[level]
// //   const visibleCells = Math.floor(Math.random() * (maxVisible - minVisible + 1)) + minVisible
// //
// //   // Создаем копию для удаления ячеек
// //   const result: SudokuBlock = grid.map((row) =>
// //     row.map((value) => ({
// //       value,
// //       isEditable: false,
// //       isError: false,
// //     })),
// //   )
// //
// //   let cellsToHide = 81 - visibleCells
// //
// //   while (cellsToHide > 0) {
// //     const row = Math.floor(Math.random() * 9)
// //     const col = Math.floor(Math.random() * 9)
// //
// //     if (result[row][col].value !== null) {
// //       result[row][col].value = null
// //       result[row][col].isEditable = true
// //       cellsToHide--
// //     }
// //   }
// //
// //   return result
// // }
// //
// // // export const useSudokuStore = defineStore('sudoku', {
// // //   state: (): SudokuState => ({
// // //     blocks: Array.from({ length: 9 }, () =>
// // //       Array.from({ length: 9 }, () => ({ value: null, isEditable: true })),
// // //     ),
// // //     level: null,
// // //   }),
// // //   actions: {
// // //     startGame(level: SudokuLevel) {
// // //       this.level = level
// // //
// // //       // Генерация полной решенной судоку
// // //       const fullGrid = generateFullSudoku()
// // //
// // //       // Удаление ячеек на основе уровня сложности
// // //       this.blocks = removeCells(fullGrid, level)
// // //     },
// // //     resetGame() {
// // //       this.level = null
// // //       this.blocks = Array.from({ length: 9 }, () =>
// // //         Array.from({ length: 9 }, () => ({ value: null, isEditable: true })),
// // //       )
// // //     },
// // //   },
// // // })
// //
// // export const useSudokuStore = defineStore('sudoku', {
// //   state: (): SudokuState => ({
// //     blocks: Array.from({ length: 9 }, () =>
// //       Array.from({ length: 9 }, () => ({ value: null, isEditable: true, isError: false })),
// //     ),
// //     level: null,
// //   }),
// //   actions: {
// //     startGame(level: SudokuLevel) {
// //       this.level = level
// //
// //       const fullGrid = generateFullSudoku()
// //       this.blocks = removeCells(fullGrid, level)
// //     },
// //     resetGame() {
// //       this.level = null
// //       this.blocks = Array.from({ length: 9 }, () =>
// //         Array.from({ length: 9 }, () => ({ value: null, isEditable: true, isError: false })),
// //       )
// //     },
// //     isCellValid(row: number, col: number, value: number): boolean {
// //       const grid = this.blocks.map((block) => block.map((cell) => cell.value || 0))
// //
// //       // Проверяем строку
// //       for (let x = 0; x < 9; x++) {
// //         if (grid[row][x] === value && x !== col) return false
// //       }
// //
// //       // Проверяем столбец
// //       for (let x = 0; x < 9; x++) {
// //         if (grid[x][col] === value && x !== row) return false
// //       }
// //
// //       // Проверяем блок 3x3
// //       const startRow = Math.floor(row / 3) * 3
// //       const startCol = Math.floor(col / 3) * 3
// //       for (let i = 0; i < 3; i++) {
// //         for (let j = 0; j < 3; j++) {
// //           if (
// //             grid[startRow + i][startCol + j] === value &&
// //             (startRow + i !== row || startCol + j !== col)
// //           )
// //             return false
// //         }
// //       }
// //
// //       return true
// //     },
// //     updateCell(row: number, col: number, value: number | null) {
// //       if (this.blocks[row][col].isEditable) {
// //         const isValid = value === null || this.isCellValid(row, col, value)
// //
// //         this.blocks[row][col] = {
// //           value,
// //           isEditable: true,
// //           isError: !isValid, // Добавляем флаг ошибки
// //         }
// //       }
// //     },
// //   },
// // })
