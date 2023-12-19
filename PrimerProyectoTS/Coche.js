var Coche = /** @class */ (function () {
    function Coche() {
    }
    Object.defineProperty(Coche.prototype, "kilometraje", {
        // Getters
        get: function () {
            return this._kilometraje;
        },
        // Setters
        set: function (km) {
            this._kilometraje = km;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coche.prototype, "propietario", {
        get: function () {
            return this._propietario;
        },
        set: function (nombre) {
            this._propietario = nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coche.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            this._color = color;
        },
        enumerable: false,
        configurable: true
    });
    return Coche;
}());
// Declaración de un nuevo coche
var miCoche = new Coche();
// Uso de los setters
miCoche.propietario = "Actarus";
miCoche.kilometraje = 120000;
miCoche.color = "gris";
// Mostrar el coche gracias a los getters
console.log("Mi coche : " + miCoche.propietario + " - " + miCoche.kilometraje + " km  - " + miCoche.color);
