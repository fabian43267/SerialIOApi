import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, firstValueFrom, map, retry, throwError } from 'rxjs';
import { SerialCommand } from 'src/models/SerialCommand';

@Injectable({
  providedIn: 'root'
})
export class SerialService {

  private apiUrl = 'http://localhost:5138/serial';

  constructor(private httpClient: HttpClient) { }

  async sendCommand(cmd: SerialCommand) {
    return await firstValueFrom(this.httpClient.post(`${this.apiUrl}/command`, cmd));
  }
}
