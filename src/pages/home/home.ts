import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	public pet = 'chats';
	//rootPage = StartPage;
	//public alertCtrl = AlertController;

	constructor(public navCtrl: NavController, public alertCtrl: AlertController) {}

	/**
 * Metodo que lanza un mensaje de alerta para los chats
 */
	showAlert() {
		let alert = this.alertCtrl.create({
			title: 'Ocupado',
			subTitle: 'En este momento no te puedo ayudar',
			buttons: [ 'OK' ]
		});
		alert.present();
	}

	/**
 * Metodo que lanza un mensaje de alerta para los chats
 */
	mensajeAlerta() {
		let alert = this.alertCtrl.create({
			title: 'No me hables',
			subTitle: 'Estoy en una reunion',
			buttons: [ 'OK' ]
		});
		alert.present();
	}

	/**
 * Metodo que lanza un mensaje de alerta para las llamadas
 */
	llamarNuevamente() {
		let alert = this.alertCtrl.create({
			title: 'Volver a llamar',
			subTitle: '¿Quieres llamar de nuevo a esta persona?',
			buttons: [ 'OK' ]
		});
		alert.present();
	}

	/**
 * Metodo que lanza un mensaje de alerta para el estado
 */
	notificacion() {
		let alert = this.alertCtrl.create({
			title: 'Like',
			subTitle: 'Le has dado me gusta a la foto',
			buttons: [ 'Continuar' ]
		});
		alert.present();
	}
}
