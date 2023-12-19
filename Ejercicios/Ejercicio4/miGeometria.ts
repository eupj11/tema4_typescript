module MiGeometria {
    export class FormaGeometrica{
        private _color: string;
        private _grosorBorde: number;
        private _tipo: string;
    
        constructor(color:string, grosorBorde: number, tipo: string){
            this._color = color;
            this._grosorBorde = grosorBorde;
            this._tipo = tipo;
        }
    
        get color():string{
            return this._color;
        }
        
        get grosorBorde():number{
            return this._grosorBorde;
        }
    
        get tipo():string{
            return this._tipo;
        }
    
        set color(color:string){
            this._color = color;
        }
    
        set grosorBorde(grosorBorde:number){
            this._grosorBorde = grosorBorde;
        }
    
        set tipo(tipo:string){
            this._tipo = tipo;
        }
    
        mostrar() {
            console.log(`Soy una forma de tipo ${this._tipo}, color ${this._color} y grosor de
            borde ${this._grosorBorde}`);
            }
            
    
    }
    
    
    export class Cuadrado extends FormaGeometrica{
        private _lado: number;
    
        constructor(color:string, grosorBorde: number, tipo: string, lado: number){
            super(color, grosorBorde, tipo);
            this._lado = lado;
        }
    
        get lado():number{
            return this._lado;
        }
    
        set lado(lado:number){
            this._lado = lado;
        }
    
        mostrarCuadrado(){
            this.mostrar();
            console.log(`Lado: ${this._lado}`);
            
        }
    
    }
    
    
    export class Circulo extends FormaGeometrica{
        private _radio: number;
        private _diametro: number;
    
        constructor(color:string, grosorBorde: number, tipo: string, radio: number, diametro: number){
            super(color, grosorBorde, tipo);
            this._radio = radio;
            this._diametro = diametro;
        }
    
        get radio():number{
            return this._radio;
        }
    
        get diametro():number{
            return this._diametro;
        }
    
        set radio(radio:number){
            this._radio = radio;
        }
    
        set diametro(diametro:number){
            this._diametro = diametro;
        }
    
        mostrarCirculo(){
            this.mostrar();
            console.log(`Radio: ${this._radio}`);
            console.log(`Diametro: ${this._diametro}`);
            
        }
    
    }
    
    
    export class Triangulo extends FormaGeometrica{
        private _base: number;
        private _altura: number;
    
        constructor(color:string, grosorBorde: number, tipo: string, base: number, altura: number){
            super(color, grosorBorde, tipo);
            this._base = base;
            this._altura = altura;
        }
    
        get base():number{
            return this._base;
        }
    
        get altura():number{
            return this._altura;
        }
    
        set base(base:number){
            this._base = base;
        }
    
        set altura(altura:number){
            this._altura = altura;
        }
    
        mostrarTriangulo(){
            this.mostrar();
            console.log(`Base: ${this._base}`);
            console.log(`Altura: ${this._altura}`);
            
        }
    }
}



let cuadrado = new MiGeometria.Cuadrado("Rojo", 0.3, "Cuadrado", 12);
cuadrado.mostrarCuadrado();
let circulo = new MiGeometria.Circulo("Amarillo", 0.1, "Círculo", 10,20);
circulo.mostrarCirculo();
let triangulo = new MiGeometria.Triangulo("Naranja", 0.5, "Triángulo", 3, 5.5);
triangulo.mostrarTriangulo();