import type { AvailableDigits } from './available-digits.types.ts';

export const initialAvailableDigits: AvailableDigits[] = Array(9)
    .fill(null)
    .map((_, index) => ({
        digit: index + 1,
        disabled: false,
    }));
