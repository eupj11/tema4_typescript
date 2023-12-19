var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Cuadrado = /** @class */ (function (_super) {
    __extends(Cuadrado, _super);
    function Cuadrado(color, grosorBorde, tipo, lado) {
        var _this = _super.call(this, color, grosorBorde, tipo) || this;
        _this._lado = lado;
        return _this;
    }
    Object.defineProperty(Cuadrado.prototype, "lado", {
        get: function () {
            return this._lado;
        },
        set: function (lado) {
            this._lado = lado;
        },
        enumerable: false,
        configurable: true
    });
    Cuadrado.prototype.mostrarCuadrado = function () {
        this.mostrar();
        console.log("Lado: ".concat(this._lado));
    };
    return Cuadrado;
}(FormaGeometrica));
var Circulo = /** @class */ (function (_super) {
    __extends(Circulo, _super);
    function Circulo(color, grosorBorde, tipo, radio, diametro) {
        var _this = _super.call(this, color, grosorBorde, tipo) || this;
        _this._radio = radio;
        _this._diametro = diametro;
        return _this;
    }
    Object.defineProperty(Circulo.prototype, "radio", {
        get: function () {
            return this._radio;
        },
        set: function (radio) {
            this._radio = radio;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Circulo.prototype, "diametro", {
        get: function () {
            return this._diametro;
        },
        set: function (diametro) {
            this._diametro = diametro;
        },
        enumerable: false,
        configurable: true
    });
    Circulo.prototype.mostrarCirculo = function () {
        this.mostrar();
        console.log("Radio: ".concat(this._radio));
        console.log("Diametro: ".concat(this._diametro));
    };
    return Circulo;
}(FormaGeometrica));
var Triangulo = /** @class */ (function (_super) {
    __extends(Triangulo, _super);
    function Triangulo(color, grosorBorde, tipo, base, altura) {
        var _this = _super.call(this, color, grosorBorde, tipo) || this;
        _this._base = base;
        _this._altura = altura;
        return _this;
    }
    Object.defineProperty(Triangulo.prototype, "base", {
        get: function () {
            return this._base;
        },
        set: function (base) {
            this._base = base;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangulo.prototype, "altura", {
        get: function () {
            return this._altura;
        },
        set: function (altura) {
            this._altura = altura;
        },
        enumerable: false,
        configurable: true
    });
    Triangulo.prototype.mostrarTriangulo = function () {
        this.mostrar();
        console.log("Base: ".concat(this._base));
        console.log("Altura: ".concat(this._altura));
    };
    return Triangulo;
}(FormaGeometrica));
var cuadrado = new Cuadrado("Rojo", 0.3, "Cuadrado", 12);
cuadrado.mostrarCuadrado();
var circulo = new Circulo("Amarillo", 0.1, "Círculo", 10, 20);
circulo.mostrarCirculo();
var triangulo = new Triangulo("Naranja", 0.5, "Triángulo", 3, 5.5);
triangulo.mostrarTriangulo();
