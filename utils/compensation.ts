export function calCompensation(T: number, M: number, E: number, I: number) {
  return Math.floor(
    (500 * T + 300 * Math.sqrt(M) + 1500 * E * E + 2000 * I) * (1 + 0.05 * T)
  );
}
