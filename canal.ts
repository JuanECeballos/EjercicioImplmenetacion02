import { Streamer } from 'streamer.js';
import { Stream } from 'stream.js';
import { Plataforma } from './plataforma';
export class Canal {
    nombre: string;
    baner: string;
    descripcion: string;
    streamer: Streamer;
    streams: Stream[];
    plataforma:Plataforma
    constructor( plataforma:Plataforma, nombre: string, baner: string, descripcion: string, streamer: Streamer, streams: Stream[]) {
      this.nombre = nombre;
      this.baner = baner;
      this.descripcion = descripcion;
      this.streamer = streamer;
      this.streams = streams;
      this.plataforma = plataforma;
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
    agregarStreamer(stream:Stream): void {
      this.streams.push(stream);
  }
}
  