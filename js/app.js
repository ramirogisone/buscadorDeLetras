import * as UI from './interfaz.js';
import { Lyricsapi } from './api.js';

let interfaz = new UI.Interfaz();

UI.formularioBusqueda.addEventListener('submit', (ev) => {
	ev.preventDefault();
	const inArtista = document.getElementById('artista').value;
	const inCancion = document.getElementById('cancion').value;

	if(inArtista === '' || inCancion === ''){
		interfaz.mostrarMensajes('Ingresar los campos obligatorios');
		setTimeout(() => {
			const error = document.querySelector('.error');
			error.remove();
		}, 3000);
	}else{
		let api = new Lyricsapi(inArtista, inCancion);
		api.obtenerLetras()
			.then(respuesta => {
				interfaz.mostrarLetras(respuesta.respuesta);
			})
	}
})