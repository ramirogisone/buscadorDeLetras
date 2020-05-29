export class Lyricsapi {
    constructor(artista, cancion){
        this.artista = artista;
        this.cancion = cancion;
    }
    async obtenerLetras(){
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;
        const respuestaLyrics = await fetch(url);
        const respuesta = await respuestaLyrics.json();
        return{
            respuesta
        }
    }
}