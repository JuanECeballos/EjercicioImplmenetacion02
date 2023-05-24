import { Canal } from 'canal.js';
import { Stream } from 'stream.js';
export class Streamer {
    nickname: string;
    descripcion: string;
    listaRedesSociales: string[];
    canales:Canal[]; 
    streams:Stream[];
    constructor(streams:Stream[],canales:Canal[], nickname: string, descripcion: string, listaRedesSociales: string[]) {
      this.nickname = nickname;
      this.descripcion = descripcion;
      this.listaRedesSociales = listaRedesSociales;
      this.canales = canales;
      this.streams = streams;

    }
    mostrarListadoStreams(): void {
      console.log("Listado de Streams:");
      this.streams.forEach((stream) => {
        console.log(`- ${stream}`);
      });
    }
    mostrarDetalleStream(nombreStream: string): void {
      const stream = this.streams.find((stream) => stream.id === nombreStream);
      if (stream) {
        console.log(`id:${stream.id}`);
        console.log(`Fotografia: ${stream.fotografia}`);
        console.log(`Descripcion: ${stream.descripcion}`);
        console.log(`Streamer: ${stream.streamer}`);
        console.log(`Categorias: ${stream.categorias}`);
        console.log(`Canal: ${stream.canal}`);
      } else {
        console.log(`No se encontró el stream con nombre ${nombreStream}`);
      }
    }
    agregarCanal(canal: Canal): void {
      this.canales.push(canal);
  }
  agregarStream(stream: Stream): void {
    this.streams.push(stream);
  }
}
  