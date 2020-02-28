import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LocationsService } from '../../services/locations.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.scss']
})
export class PhonesComponent implements OnInit {
 
  public editId: number;
  public loading = false;
  private sub: Subscription;
  public phones = [];
  public locations = [];
  public status = [
    {
      id: '2',
      name: 'ACTIVE'
    },
    {
      id: '7',
      name: 'INACTIVE'
    }
  ];
  public openForm() {
  document.getElementById("myForm").style.display = "block";
}
  public closeForm() {
  document.getElementById("myForm").style.display = "none";
}

  public phoneForm = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    phone: ['', Validators.required],
    location: ['', Validators.required],
    status: [''],
    createdOn: [''],
  });

  constructor(
    
    private fb: FormBuilder,
    private locationsService: LocationsService
  ) { }
   createForm() {
    this.phoneForm = this.fb.group({
       name: ['', Validators.required ],
       phone: ['', Validators.required ]
    });
  } 
  async ngOnInit() {
    this.loading = true;

    this.sub = this.locationsService.GetDevices()
      .subscribe(res => {
        this.phones = res;
        this.loading = false;
      });
    this.locationsService.GetLocationDropDown()
      .subscribe(res => {
        this.locations = res;
      });
  }

  public EditRow(index: number) {
    this.editId = index;
    this.phoneForm.patchValue({
      id: this.phones[index].id,
      name:this.phones[index].name,
      phone: this.phones[index].phone,
      location: this.phones[index].locationId,
      status: this.phones[index].statusId,
      createdOn: this.phones[index].createdOn,
    });
  }

  public update() {
    if (this.phoneForm.status === 'INVALID') {
      alert('Please fill in all fields');
    }
    this.loading = true;
    this.locationsService.UpdatePhone(this.phoneForm.value)
      .subscribe(res => {
        this.sub = this.locationsService.GetDevices()
          .subscribe(result => {
            this.phones = result;
            this.editId = (this.phones.length + 1);
            this.loading = false;
          });
      });
  }

  public submit() {
    if (this.phoneForm.status === 'INVALID') {
      alert('Please fill in all fields');
    }
    this.loading = true;
    this.locationsService.AddPhone(this.phoneForm.value)
      .subscribe(res => {
        this.sub = this.locationsService.GetDevices()
          .subscribe(result => {
            this.phones = result;
            this.loading = false;
          });
      });
  }
}
