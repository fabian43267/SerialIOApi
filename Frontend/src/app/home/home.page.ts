import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { SerialService } from 'src/services/serial.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {

  constructor(private serialService: SerialService) {}

  async turnLichtOff() {
    await this.serialService.sendCommand({ device: 'licht', command: 'off' });
  }

  async turnLichtOn() {
    await this.serialService.sendCommand({ device: 'licht', command: 'on' });
  }

  async turnBelueftungOff() {
    await this.serialService.sendCommand({ device: 'belueftung', command: 'off' });
  }

  async turnBelueftungOn() {
    await this.serialService.sendCommand({ device: 'belueftung', command: 'on' });
  }
}
