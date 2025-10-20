import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-tres',
  templateUrl: './tres.page.html',
  styleUrls: ['./tres.page.scss'],
})
export class TresPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  volver(){
    this.navCtrl.back();
  }

  ngOnInit() {
  }

}
