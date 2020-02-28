import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LocationsService } from '../../services/locations.service';
@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit, OnDestroy {

  public loading = false;
  private sub: Subscription;
  public locations = [];

  constructor(
    private locationsService: LocationsService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.sub = this.locationsService.GetLocations()
      .subscribe(res => {
        this.locations = res;
        this.loading = false;
      });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
