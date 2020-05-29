export const formularioBusqueda = document.querySelector('#formulario-buscar'), 
			 divBuscar = document.querySelector('#buscar'),
			 divMensajes = document.querySelector('#mensajes'),
			 divResultado = document.querySelector('#resultado');

export class Interfaz{
	constructor(){
		this.divMensajes = divMensajes;
		this.divResultado = divResultado;
	}
	mostrarMensajes(mensaje){
		const div = document.createElement('div');
		div.classList.add('error');
		div.appendChild(document.createTextNode(mensaje));
		this.divMensajes.appendChild(div);
	}
	mostrarLetras(letra){
		const limpiarResultado = this.divResultado;
		if(limpiarResultado){
			limpiarResultado.innerHTML = '';
		}
		const div = document.createElement('div');
		div.appendChild(document.createTextNode(letra.lyrics));
		this.divResultado.appendChild(div);
	}
}			 