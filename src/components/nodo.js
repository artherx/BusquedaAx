class Nodo {
    X;
    Y;
    F;
    G;
    H;
    constructor(x,y,F,G,H){
        this.X=x;
        this.Y=y;
        this.F=F;
        this.G=G;
        this.H=H;
    }

    getID() {
        return [this.X,this.Y]
    }
    getF(){
        return this.F
    }
    getG(){
        return this.G
    }
    getH(){
        return this.H
    }

    setID(x,y) {
        this.ID = [x,y]
    }
    setF(F){
        this.F = F
    }
    setG(G){
        this.G = G
    }
    setH(H){
        this.H = H
    }
}
export default {Nodo}