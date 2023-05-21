import { Canal } from 'canal.js';

export class Plataforma {
    nombre: string;
    logo: string;
    descripcion: string;
    empresa: string;
    canales: Canal[];
  
    constructor(nombre: string, logo: string, descripcion: string, empresa: string, canales: Canal[]) {
      this.nombre = nombre;
      this.logo = logo;
      this.descripcion = descripcion;
      this.empresa = empresa;
      this.canales = canales;
    }
  }