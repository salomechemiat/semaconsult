import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { KioskService } from '../../services/kiosk.service';

@Component({
  selector: 'app-kiosks',
  templateUrl: './kiosks.component.html',
  styleUrls: ['./kiosks.component.scss']
})
export class KiosksComponent implements OnInit, OnDestroy {

  public kiosks = [];
  public loading: boolean;
  private sub: Subscription;

  constructor(
    private kioskService: KioskService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.sub = this.kioskService.GetKiosks()
      .subscribe(res => {
        this.kiosks = res;
        this.loading = false;
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
