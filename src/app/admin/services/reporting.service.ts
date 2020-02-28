import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Observer } from 'rxjs';
import { Event } from '../models/event.enum';
import * as io from 'socket.io-client';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { ApiService } from '../../core/http/api.service';

@Injectable({
  providedIn: 'root'
})
export class ReportingService {

  private url = 'http://localhost:6060';
  private socket;

  constructor(
    private apiService: ApiService
  ) { }

  public fetchKioskData(): Observable<any> {
    return this.apiService.get('/kiosk/data')
      .pipe(map(
        chats => {
          const stringy = JSON.stringify(chats);
          const parse = JSON.parse(stringy);
          return parse.payload;
        }
      ));
  }

  public fetchDiagnosisData(): Observable<any> {
    return this.apiService.get('/diagnosis/data')
      .pipe(map(
        chats => {
          const stringy = JSON.stringify(chats);
          const parse = JSON.parse(stringy);
          return parse.payload;
        }
      ));
  }

  public fetchDiagnosisUserData(): Observable<any> {
    return this.apiService.get('/reporting/user')
      .pipe(map(
        chats => {
          const stringy = JSON.stringify(chats);
          const parse = JSON.parse(stringy);
          return parse.payload;
        }
      ));
  }

  public GetReport(details: { min: string; max: string; location: string; }): Observable<any> {
    return this.apiService.get('reporting/generate?minDate=' + details.min + '&maxDate=' +
      details.max + '&location=' + details.location);
  }

  public GetDashboardData(): Observable<any> {
    return this.apiService.get('/reporting/populate?filter=all&location=1')
      .pipe(map(
        payload => {
          const s = JSON.stringify(payload);
          const parse = JSON.parse(s);
          return parse.payload;
        }
      ));
  }

  public initSocket(): void {
    this.socket = io.connect(this.url);
  }

  public onNewDiagnosis(): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on('diagnosis', (data: any) => observer.next(data));
    });
  }

  public onEvent(event: Event): Observable<any> {
    return new Observable<Event>(observer => {
      this.socket.on(event, () => observer.next());
    });
  }
}
