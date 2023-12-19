// Definición de la clase Vehículo
class Vehiculo {
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
    this._kilometraje += numeroDeMetros;
    }
    }
    