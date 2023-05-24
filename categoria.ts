export class Categoria {
    nombre: string;
    actividad: string;
    temas: string;
    descripcion: string;
    imagen: string;
  
    constructor(nombre: string, actividad: string, temas: string, descripcion: string, imagen: string) {
      this.nombre = nombre;
      this.actividad = actividad;
      this.temas = temas;
      this.descripcion = descripcion;
      this.imagen = imagen;
    }
  }
  