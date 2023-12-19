// Definición de la clase Coche
class Coche {
    // Atributos
    private _kilometraje: number;
    private _propietario: string;
    private _color: string;
    
    // Getters
    get kilometraje() {
    return this._kilometraje;
    }
    get propietario() {
    return this._propietario;
    }
    get color() {
    return this._color; 
}

// Setters
set kilometraje(km: number) {
this._kilometraje = km;
}
set propietario(nombre: string) {
this._propietario = nombre;
}
 set color(color: string) {
this._color = color;
}

// El constructor
constructor(kilometraje: number, propietario: string, color: string) {
this._kilometraje = kilometraje;
this._propietario = propietario;
this._color = color;
}
}

// Declaración de un nuevo coche
let miCoche = new Coche(180000, "CapitanFlam", "Rojo");
// Mostrar el coche gracias a los getters
console.log("Mi coche : " + miCoche.propietario + " - " + miCoche.kilometraje + "km - " + miCoche.color); 