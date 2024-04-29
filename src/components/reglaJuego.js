const matriz = [];
for (let i = 0; i < 8; i++) {
  matriz[i] = [];
  for (let j = 0; j < 8; j++) {
    matriz[i][j] = 0;
  }
}
function heuristica(inicio, final) {
  let d1 = Math.abs(final[0] - inicio[0]);
  let d2 = Math.abs(final[1] - inicio[1]);
  return d1 + d2;
}
export default { matriz, heuristica};
