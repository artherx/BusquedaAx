class Nodo {
    ID=[];
    F;
    G;
    H;
    constructor(){
        this.ID=[0,0]
        this.F=0;
        this.G=0;
        this.H=0;
    }
    constructor(x,y){
        this.ID=[x,y];
        this.F=0;
        this.G=0;
        this.H=0;
    }
    constructor(x,y,F,G,H){
        this.ID=[x,y];
        this.F=F;
        this.G=G;
        this.H=H;
    }

    getID() {
        return this.ID
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
export default Nodo