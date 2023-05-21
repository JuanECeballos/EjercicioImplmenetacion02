
export class Streamer {
    nickname: string;
    descripcion: string;
    listaRedesSociales: string[];
   
    
    constructor(nickname: string, descripcion: string, listaRedesSociales: string[]) {
      this.nickname = nickname;
      this.descripcion = descripcion;
      this.listaRedesSociales = listaRedesSociales;
      
      
    }
  }