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
  }
  
  // Declaración de un nuevo coche
  let miCoche = new Coche();
  // Uso de los setters
  miCoche.propietario = "Actarus";
  miCoche.kilometraje = 120000;
  miCoche.color = "gris";
  
  // Mostrar el coche gracias a los getters
  console.log("Mi coche : " + miCoche.propietario + " - " + miCoche.kilometraje + " km  - " + miCoche.color);