import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disease',
  templateUrl: './disease.component.html',
  styleUrls: ['./disease.component.scss']
})
export class DiseaseComponent implements OnInit {

  diseases = [
    {
      id: '1',
      name: 'Tuberculosis',
      symbol: 'TB',
      score: '30',
      status: 'ACTIVE',
      date: '2019-09-17T05:23:58.000Z'
    },
    {
      id: '2',
      name: 'Influenza',
      symbol: 'FLU',
      score: '40',
      status: 'ACTIVE',
      date: '2019-09-17T05:23:58.000Z'
    },
    {
      id: '1',
      name: 'Common cold',
      symbol: 'COLD',
      score: '60',
      status: 'ACTIVE',
      date: '2019-09-17T05:23:58.000Z'
    }
  ];

  public loading = false;

  constructor() { }

  ngOnInit() {
  }

}
