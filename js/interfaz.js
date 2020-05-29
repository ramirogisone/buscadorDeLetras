export const formularioBusqueda = document.querySelector('#formulario-buscar'), 
			 divBuscar = document.querySelector('#buscar'),
			 divMensajes = document.querySelector('#mensajes'),
			 divResultado = document.querySelector('#resultado');

export class Interfaz{
	constructor(){
		this.divMensajes = divMensajes;
	}
	mostrarMensajes(mensaje){
		const div = document.createElement('div');
		div.classList.add('error');
		div.appendChild(document.createTextNode(mensaje));
		this.divMensajes.appendChild(div);
	}
}			 