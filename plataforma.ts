import { Canal } from 'canal.js';
import { Streamer } from 'streamer.js';
import { Stream } from 'stream.js';
export class Plataforma {
    nombre: string;
    logo: string;
    descripcion: string;
    empresa: string;
    canales: Canal[];
    streamers:Streamer[];
  
    constructor(streamers:Streamer[],nombre: string, logo: string, descripcion: string, empresa: string, canales: Canal[]) {
      this.nombre = nombre;
      this.logo = logo;
      this.descripcion = descripcion;
      this.empresa = empresa;
      this.canales = canales;
      this.streamers = streamers;

    }
    static mostrarListadoPlataformas(plataformas: Plataforma[]): void {
      console.log("Listado de Plataformas:");
      plataformas.forEach((plataforma) => {
        console.log(`- ${plataforma.nombre}`);
      });
    }
    mostrarDetallePlataforma(): void {
      console.log("Detalle de Plataforma:");
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Logo: ${this.logo}`);
      console.log(`Descripción: ${this.descripcion}`);
      console.log(`Empresa: ${this.empresa}`);
    }
    mostrarListadoCanales(): void {
      console.log("Listado de Canales:");
      this.canales.forEach((canal) => {
        console.log(`- ${canal.nombre}`);
      });
    }
    mostrarDetalleCanal(nombreCanal: string): void {
      const canal = this.canales.find((canal) => canal.nombre === nombreCanal);
      if (canal) {
        console.log("Detalle de Canal:");
        console.log(`Nombre: ${canal.nombre}`);
        console.log(`Banner: ${canal.baner}`);
        console.log(`Descripción: ${canal.descripcion}`);
        console.log(`Streamer: ${canal.streamer}`);
      } else {
        console.log(`No se encontró el canal con nombre ${nombreCanal}`);
      }
    }
    mostrarListadoStreamers(): void {
      console.log("Listado de streamers:");
      this.streamers.forEach((streamer) => {
        console.log(`- ${streamer.nickname}`);
      });
  }
  mostrarDetalleStreamer(nicknamestreamer:string): void {
    const streamer = this.streamers.find((streamer) => streamer.nickname === nicknamestreamer);
    if (streamer) {
      console.log("Detalle de streamer:");
      console.log(`Nickname: ${streamer.nickname}`);
      console.log(`Descripcion: ${streamer.descripcion}`);
      console.log(`Lista redes sociales: ${streamer.listaRedesSociales}`);
      console.log(`Canal: ${streamer.canales}`);
      console.log(`Streams: ${streamer.streams}`);
    } else {
      console.log(`No se encontró el streamer con nickname ${nicknamestreamer}`);
    }
  }
  agregarCanal(canal: Canal): void {
    this.canales.push(canal);
  }
  agregarStreamer(streamer:Streamer): void {
    this.streamers.push(streamer);
  }
}
