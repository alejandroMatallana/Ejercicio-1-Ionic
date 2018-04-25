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

	showAlert() {
		let alert = this.alertCtrl.create({
			title: 'Ocupado',
			subTitle: 'En este momento no te puedo ayudar',
			buttons: [ 'OK' ]
		});
		alert.present();
	}

	notificacion() {
		let alert = this.alertCtrl.create({
			title: 'Like',
			subTitle: 'Le has dado me gusta a la foto',
			buttons: [ 'Continuar' ]
		});
		alert.present();
	}
}
