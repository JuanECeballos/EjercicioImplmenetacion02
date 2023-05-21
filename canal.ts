import { Streamer } from 'streamer.js';
import { Stream } from 'stream.js';
export class Canal {
    nombre: string;
    baner: string;
    descripcion: string;
    streamer: Streamer;
    streams: Stream[];
  
    constructor(nombre: string, baner: string, descripcion: string, streamer: Streamer, streams: Stream[]) {
      this.nombre = nombre;
      this.baner = baner;
      this.descripcion = descripcion;
      this.streamer = streamer;
      this.streams = streams;
    }
  }