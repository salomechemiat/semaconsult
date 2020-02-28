import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.scss']
})
export class HospitalsComponent implements OnInit {

  hospitals = [
    {
      id: '1',
      name: 'The Nairobi Hospital',
      county: 'Nairobi',
      address: '30026-00100',
      physicalAddress: 'Argwings Kodhek Road',
      status: 'ACTIVE'
    },
    {
      id: '2',
      name: 'The Nairobi Hospital Outpatient Center',
      county: 'Nairobi',
      address: '30026-00100',
      physicalAddress: 'Capital Center, Mombasa Road',
      status: 'ACIVE'
    },
    {
      id: '2',
      name: 'The Nairobi Hospital Outpatient Center',
      county: 'Nairobi',
      address: '30026-00100',
      physicalAddress: 'Capital Center, Mombasa Road',
      status: 'DISABLED'
    },
    // {
    //   id: '',
    //   name: '',
    //   county: '',
    //   address: '',
    //   physicalAddress: '',
    //   status: ''
    // }
  ];

  public loading = false;

  constructor() { }

  ngOnInit() {
  }

}
