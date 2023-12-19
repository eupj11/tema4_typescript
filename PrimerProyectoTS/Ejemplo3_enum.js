var puntosCardinales;
(function (puntosCardinales) {
    puntosCardinales[puntosCardinales["N"] = 0] = "N";
    puntosCardinales[puntosCardinales["S"] = 1] = "S";
    puntosCardinales[puntosCardinales["E"] = 2] = "E";
    puntosCardinales[puntosCardinales["O"] = 3] = "O";
})(puntosCardinales || (puntosCardinales = {}));
// Declaración
var unaDireccion;
// Uso
unaDireccion = puntosCardinales.N; // unaDireccion = 0
unaDireccion = puntosCardinales.S; // unaDireccion = 1
unaDireccion = puntosCardinales.E; // unaDireccion = 2
unaDireccion = puntosCardinales.O; // unaDireccion = 3
