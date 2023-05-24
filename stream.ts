import { Streamer } from 'streamer.js';
import { Categoria} from 'categoria.js';
import { Canal} from 'canal.js';
export class Stream {
     id:string
    fotografia: string;
    descripcion: string;
    streamer: Streamer;
    categorias: Categoria[];
    canal:Canal; 
    constructor(id:string, canal:Canal, categorias: Categoria[], fotografia: string, descripcion: string, streamer: Streamer) {
      this.categorias = categorias;
      this.fotografia = fotografia;
      this.descripcion = descripcion;
      this.streamer = streamer;
      this.canal = canal;
      this.id = id;
    }
  }
  