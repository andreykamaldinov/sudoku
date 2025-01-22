export type CellType = {
    value: number;
    guess: number | null;
    row: number;
    col: number;
    isVisible: boolean;
    isError: boolean;
};
