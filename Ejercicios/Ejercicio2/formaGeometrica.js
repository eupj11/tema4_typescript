var FormaGeometrica = /** @class */ (function () {
    function FormaGeometrica(color, grosorBorde, tipo) {
        this._color = color;
        this._grosorBorde = grosorBorde;
        this._tipo = tipo;
    }
    Object.defineProperty(FormaGeometrica.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            this._color = color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormaGeometrica.prototype, "grosorBorde", {
        get: function () {
            return this._grosorBorde;
        },
        set: function (grosorBorde) {
            this._grosorBorde = grosorBorde;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormaGeometrica.prototype, "tipo", {
        get: function () {
            return this._tipo;
        },
        set: function (tipo) {
            this._tipo = tipo;
        },
        enumerable: false,
        configurable: true
    });
    FormaGeometrica.prototype.mostrar = function () {
        console.log("Soy una forma de tipo ".concat(this._tipo, ", color ").concat(this._color, " y grosor de\n        borde ").concat(this._grosorBorde));
    };
    return FormaGeometrica;
}());
var formaGeometrica = new FormaGeometrica("Verde", 0.5, "Genérico");
formaGeometrica.mostrar();
