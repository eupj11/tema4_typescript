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

// Los métodos
avanzar(numeroDeMetros: number) {
this._kilometraje += numeroDeMetros;
}
retroceder(numeroDeMetros: number) {
this._kilometraje += numeroDeMetros; //Aunque el coche retroceda, aumenta su kilometraje
}
}

// Declaración de un nuevo coche
let miCoche = new Coche(180000, "CapitanFlam", "Rojo");
console.log("kilometraje al principio: " + miCoche.kilometraje);
console.log("Avanzo ...");
miCoche.avanzar(100);
console.log("Retrocedo...");
miCoche.retroceder (50);
console.log("kilometraje al final: " + miCoche.kilometraje);
console.log("Si cuando yo avanzo, tu retrocedes, ...")