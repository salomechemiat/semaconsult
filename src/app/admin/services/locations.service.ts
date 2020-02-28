import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../../core/http/api.service';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(
    private apiService: ApiService
  ) { }

  public GetLocations(): Observable<any> {
    return this.apiService.get('/location/')
      .pipe(map(
        res => {
          const s = JSON.stringify(res);
          const p = JSON.parse(s);
          if (p.status === 'success' && p.message === 'found locations') {
            return p.payload;
          } else if (p.status === 'success' && p.msg === 'could not find any locations') {
            return 'zero';
          } else if (p.status === 'error') {
            return 'error';
          }
        }));
  }

  public GetLocationDropDown(): Observable<any> {
    return this.apiService.get('/location/dd')
      .pipe(map(
        res => {
          const s = JSON.stringify(res);
          const p = JSON.parse(s);
          if (p.status === 'success' && p.message === 'found locations') {
            return p.payload;
          } else if (p.status === 'success' && p.msg === 'could not find any locations') {
            return 'zero';
          } else if (p.status === 'error') {
            return 'error';
          }
        }));
  }

  public GetDevices(): Observable<any> {
    return this.apiService.get('/location/communication')
      .pipe(map(
        res => {
          const s = JSON.stringify(res);
          const p = JSON.parse(s);
          if (p.status === 'success' && p.message === 'found devices') {
            return p.payload;
          } else if (p.status === 'success' && p.msg === 'could not find any devices') {
            return 'zero';
          } else if (p.status === 'error') {
            return 'error';
          }
        }));
  }

  public AddPhone(item): Observable<any> {
    return this.apiService.post('/location/communication', {
      number: item.phone,
      location: item.location
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

  public UpdatePhone(item): Observable<any> {
    return this.apiService.patch('/location/communication', {
      number: item.phone,
      location: item.location,
      status: item.status,
      id: item.id
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
}
