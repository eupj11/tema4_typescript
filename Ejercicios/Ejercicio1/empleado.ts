class Empleado {
    private _nombre: string;
    private _apellidos: string;
    private _edad: number;

    constructor(nombre: string, apellidos: string, edad: number) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
    }


     get nombre(): string {
        return this._nombre;
    }

    get apellidos(): string {
        return this._apellidos;
    }

    get edad(): number {
        return this._edad;
    }

    set nombre(nombre: string) {
        this._nombre = nombre;
    }

    set apellidos(apellidos: string) {
        this._apellidos = apellidos;
    }

    set edad(edad: number) {
        this._edad = edad;
    }


}


let empleado1 = new Empleado("María José", "Martínez Navas", 22);
console.log("El empleado " + empleado1.nombre + " " + empleado1.apellidos + "tiene " + empleado1.edad + " años de edad.");