import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-dos',
  templateUrl: './dos.page.html',
  styleUrls: ['./dos.page.scss'],
})
export class DosPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  volver(){
    this.navCtrl.back();
  }

  ngOnInit() {
  }

}
