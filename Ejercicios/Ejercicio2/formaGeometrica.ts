class FormaGeometrica{
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



let formaGeometrica = new FormaGeometrica("Verde", 0.5, "Genérico");
formaGeometrica.mostrar();
