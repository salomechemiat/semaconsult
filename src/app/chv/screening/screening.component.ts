import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-screening',
  templateUrl: './screening.component.html',
  // styleUrls: ['./screening.component.scss', '../../../assets/scss/_checkbox.scss', '../../../assets/scss/_radio.scss']
  styleUrls: ['./screening.component.scss']
})
export class ScreeningComponent implements OnInit {

  public referralType = [
    { id: 1, type: 'Patient Referred to Hospital' },
    { id: 1, type: 'Collect Sputum' },
  ];

  public healthFacility = [
    { id: 1, name: 'Facility 1' },
    { id: 1, name: 'Facility 2' },
    { id: 1, name: 'Facility 3' }
  ];

  public screeningForm = this.fb.group({
    uid: [''],
    name: ['Micahel Rutto'],
    gender: ['m'],
    age: ['25'],
    phoneNumber: ['0700486437'],
    alternateNumber: ['0722730782'],
    locations: ['south c'],
    one: ['1'],
    two: ['0'],
    three: ['0'],
    four: ['0'],
    five: ['0'],
    willingness: [''],
    referalType: [''],
    facility: [''],
    visitDate: [''],
    geneXpert: [''],
    microscopy: [''],
    xray: [''],
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  public Submit() {
    console.log(this.screeningForm.value);
  }
}
