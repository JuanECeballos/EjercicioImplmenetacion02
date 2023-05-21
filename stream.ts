import { Streamer } from 'streamer.js';
import { Categoria} from 'categoria.js';
export class Stream {
    fotografia: string;
    descripcion: string;
    streamer: Streamer;
    categorias: Categoria[];
    constructor(categorias: Categoria[], fotografia: string, descripcion: string, streamer: Streamer) {
      this.categorias = categorias;
      this.fotografia = fotografia;
      this.descripcion = descripcion;
      this.streamer = streamer;
    }
  }
  