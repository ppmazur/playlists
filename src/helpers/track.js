export const parseDuration = s => (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s;
