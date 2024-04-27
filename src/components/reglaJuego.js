/* import Nodo from "./nodo"; */
const matriz = [];
for (let i = 0; i < 8; i++) {
  matriz[i] = [];
  for (let j = 0; j < 8; j++) {
    matriz[i][j] = 0;
  }
}
/* function heuristica(inicio, final) {
  let d1 = Math.abs(final.x - inicio.x);
  let d2 = Math.abs(final.y - inicio.y);
  return d1 + d2;
}
function vencindario(x,y, matriz) {
  let veci = [];

  for (let i = 0; i < 3; i++) {
    veci[i] = [];
    for (let j = 0; j < 3; j++) {
      veci[i][j] = new Nodo();
    }
  }
  veci[1][1]
  if(y+1<8){
    if(matriz[x][y+1]==0){
      veci[1][y]
    }
  }
} */
export default { matriz };
