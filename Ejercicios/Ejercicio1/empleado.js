var Empleado = /** @class */ (function () {
    function Empleado(nombre, apellidos, edad) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
    }
    Object.defineProperty(Empleado.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Empleado.prototype, "apellidos", {
        get: function () {
            return this._apellidos;
        },
        set: function (apellidos) {
            this._apellidos = apellidos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Empleado.prototype, "edad", {
        get: function () {
            return this._edad;
        },
        set: function (edad) {
            this._edad = edad;
        },
        enumerable: false,
        configurable: true
    });
    return Empleado;
}());
var empleado1 = new Empleado("María José", "Martínez Navas", 22);
console.log("El empleado " + empleado1.nombre + " " + empleado1.apellidos + "tiene " + empleado1.edad + " años de edad.");
