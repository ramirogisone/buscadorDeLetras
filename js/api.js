export class Lyricsapi {
    async obtenerLetras(artista, cancion){
        const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
        const respuestaLyrics = await fetch(url);
        const respuesta = await respuestaLyrics.json();
        return{
            respuesta
        }
    }
}