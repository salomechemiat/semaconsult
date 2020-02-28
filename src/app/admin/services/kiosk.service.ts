import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../../core/http/api.service';

@Injectable({
  providedIn: 'root'
})
export class KioskService {

  constructor(
    private apiService: ApiService,
  ) { }

  public GetQuestions(): Observable<any> {
    return this.apiService.get('/kiosk/questions')
      .pipe(map(
        res => {
          const s = JSON.stringify(res);
          const p = JSON.parse(s);
          if (p.status === 'success' && p.message === 'found questions') {
            return p.payload;
          } else if (p.status === 'success' && p.msg === 'could not find any question(s)') {
            return 'zero';
          } else if (p.status === 'error') {
            return 'error';
          }
        }));
  }

  public AddQuestion(item): Observable<any> {
    return this.apiService.post('/kiosk/question', {
      question: item.question,
      position: item.position,
      disease: item.disease,
      score: item.score
    }).pipe(map(
      resp => {
        const s = JSON.stringify(resp);
        const p = JSON.parse(s);
        if (p.status === 'success') {
          return true;
        }
        return false;
      }
    ));
  }

  public GetKiosks(): Observable<any> {
    return this.apiService.get('/kiosk/')
      .pipe(map(
        res => {
          const s = JSON.stringify(res);
          const p = JSON.parse(s);
          if (p.status === 'success' && p.message === 'found kiosks') {
            return p.payload;
          } else if (p.status === 'success' && p.msg === 'could not find any kiosks') {
            return 'zero';
          } else if (p.status === 'error') {
            return 'error';
          }
        }));
  }
}
