import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { FormBuilder, Validators } from '@angular/forms';
import { ReportingService } from '../../services/reporting.service';
import { LocationsService } from '../../services/locations.service';
import { Event } from '../../models/event.enum';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  
})
export class DashboardComponent implements OnInit {
  
  public loading: boolean;
  public userLogs = [];
   

  // Line graph setup
  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Screened' },
    { data: [], label: 'Presumptive' }
    
  ];
public getDay() {  
var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var date = weekday[d.getDay()];
return date;
};
 public today : string = this.getDay();
 
 public getDay() {  
 var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var date = weekday[d.getDay()];
return date;
};
 public date : string = this.getDay();

public getYesterday()
{
var today = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var dd =  weekday[today.getDay()-1];
var yesterday = today.getDate()-1;
return dd;
}

public yesterday : string = this.getYesterday();

public getPrev()
{
var today = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var dd =  weekday[today.getDay()-2];
return dd;
}

public prev : string= this.getPrev();
public getPrev2()
{
var today = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var dd =  weekday[today.getDay()-3];
return dd;
}

public prev2 : string = this.getPrev2();

public getPrev3()
{
var today = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var dd =  weekday[today.getDay()-4];
return dd;
}

public prev3 : string = this.getPrev3();

public getPrev4()
{
var today = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var dd =  weekday[today.getDay()-5];
return dd;
}

public prev4 : string = this.getPrev4();

public getPrev5()
{
var today = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var dd =  weekday[today.getDay()+1];
return dd;
}

public prev5 : string = this.getPrev5();

  public lineChartLabels: Label[] = [ this.prev5, this.prev4, this.prev3, this.prev2, this.prev, this.yesterday, this.date ];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {

    responsive: true,
    scales: {
      xAxes: [{
     

      }],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
          ticks: {
            beginAtZero: true
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 0.5,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      pointRadius: 1,
      borderWidth: 0.5
    },
    { // dark grey
      backgroundColor: '#e360491f',
      borderColor: '#b2d4f5',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointHoverBorderColor: 'rgba(77,83,96,1)',
      pointRadius: 1,
      borderWidth: 0.5
    },
    { // red
      backgroundColor: '#f994941f',
      borderColor: '#f99494',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      pointRadius: 1,
      borderWidth: 0.5
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      xAxes: [{

      }], yAxes: [{
        id: 'y-axis-0',
        position: 'left',
        ticks: {
          beginAtZero: true
        }
      }]
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['<15y', '15y-20y', '20y-30y', '30y-40y', '40y-50y', '50y+'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartColors: Color[] = [
    { // grey
      borderWidth: 0.5
    },
    { // dark grey
      borderWidth: 0.5
    }
  ];

  public barChartData: ChartDataSets[] = [
    { data: [], label: 'Presumptive' },
    { data: [], label: 'Non-presumptive' }
  ];

  

  public dropdownLocations = [
    { id: 1, name: 'Nairobi Railways station' },
    { id: 2, name: 'Passport Control Center' },
    { id: 3, name: 'Kibera' },
    { id: 4, name: 'Makadara' },
    { id: 5, name: 'Kamukunji' }
  ];

  public generalReports = [];
  public locationsStats = [];
  public questionStatistics = [];

  public showModal = false;
  public isCustomTime = true;
  private ioConnection: any;
  public isLive = 'live';
  public isReportDisabled = true;
  public minDate = '2019-11-25';
  public maxDate = '';
  public locations = [];
  public apiUri = environment.api_uri;
  public selectedMin: string;
  public selectedMax: string;
  public selectedLocation: string;

  downloadForm = this.fb.group({
    min: ['', Validators.required],
    max: ['', Validators.required],
    location: [Validators.required]
  });

  constructor(

    private fb: FormBuilder,
    private reportingService: ReportingService,
    private locationsService: LocationsService
  ) { }
 


  ngOnInit() {
    this.loading = true;
    this.GetMaxDate();
    
    this.locationsService.GetLocationDropDown()
      .subscribe(res => {
        this.locations = res;
      });
    setInterval(() => {
      this.reportingService.GetDashboardData()
        .subscribe(res => {
          this.initData(res);
          this.loading = false;
        });
    }, 5000);


  }


  private GetMaxDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();

    this.maxDate = yyyy + '-' + mm + '-' + dd;
    
  }


  private initData(res: any): void {
    if(this.today == this.date){
    for (const key in res.ages ) {
      if (res.ages.hasOwnProperty(key) && key == this.prev ) {
        (this.barChartData[0].data as number[]).push(res.ages[key].presumptive);
        (this.barChartData[1].data as number[]).push(res.ages[key]['non-presumptive']);
      }
    }

  
   (this.lineChartData[0].data as number[]).push(res.screening.Saturday.screened);
   (this.lineChartData[0].data as number[]).push(res.screening.Sunday.screened);
   (this.lineChartData[0].data as number[]).push(res.screening.Monday.screened);
   (this.lineChartData[0].data as number[]).push(res.screening.Tuesday.screened);
   (this.lineChartData[0].data as number[]).push(res.screening.Wednesday.screened);
   (this.lineChartData[0].data as number[]).push(res.screening.Thursday.screened);
   (this.lineChartData[0].data as number[]).push(res.screening.Friday.screened);
    
  
   (this.lineChartData[1].data as number[]).push(res.screening.Saturday.presumptive);
   (this.lineChartData[1].data as number[]).push(res.screening.Sunday.presumptive);
   (this.lineChartData[1].data as number[]).push(res.screening.Monday.presumptive);
   (this.lineChartData[1].data as number[]).push(res.screening.Tuesday.presumptive);
   (this.lineChartData[1].data as number[]).push(res.screening.Wednesday.presumptive);
   (this.lineChartData[1].data as number[]).push(res.screening.Thursday.presumptive);
   (this.lineChartData[1].data as number[]).push(res.screening.Friday.presumptive);
}
else if (this.today == this.yesterday){
  for (const key in res.ages ) {
      if (res.ages.hasOwnProperty(key) && key == this.yesterday ) {
        (this.barChartData[0].data as number[]).push(res.ages[key].presumptive);
        (this.barChartData[1].data as number[]).push(res.ages[key]['non-presumptive']);
      }
    }
   (this.lineChartData[0].data as number[]).push(res.screening.Friday.screened);
   (this.lineChartData[0].data as number[]).push(res.screening.Saturday.screened);
   (this.lineChartData[0].data as number[]).push(res.screening.Sunday.screened);
   (this.lineChartData[0].data as number[]).push(res.screening.Monday.screened);
   (this.lineChartData[0].data as number[]).push(res.screening.Tuesday.screened);
   (this.lineChartData[0].data as number[]).push(res.screening.Wednesday.screened);
   (this.lineChartData[0].data as number[]).push(res.screening.Thursday.screened);
  
   (this.lineChartData[1].data as number[]).push(res.screening.Friday.presumptive);
   (this.lineChartData[1].data as number[]).push(res.screening.Saturday.presumptive);
   (this.lineChartData[1].data as number[]).push(res.screening.Sunday.presumptive);
   (this.lineChartData[1].data as number[]).push(res.screening.Monday.presumptive);
   (this.lineChartData[1].data as number[]).push(res.screening.Tuesday.presumptive);
   (this.lineChartData[1].data as number[]).push(res.screening.Wednesday.presumptive);
   (this.lineChartData[1].data as number[]).push(res.screening.Thursday.presumptive);
   }

   else if (this.today == this.prev){
  for (const key in res.ages ) {
      if (res.ages.hasOwnProperty(key) && key == this.yesterday ) {
        (this.barChartData[0].data as number[]).push(res.ages[key].presumptive);
        (this.barChartData[1].data as number[]).push(res.ages[key]['non-presumptive']);
      }
    }
   (this.lineChartData[0].data as number[]).push(res.screening.Thursday.screened);
   (this.lineChartData[0].data as number[]).push(res.screening.Friday.screened);
   (this.lineChartData[0].data as number[]).push(res.screening.Saturday.screened);
   (this.lineChartData[0].data as number[]).push(res.screening.Sunday.screened);
   (this.lineChartData[0].data as number[]).push(res.screening.Monday.screened);
   (this.lineChartData[0].data as number[]).push(res.screening.Tuesday.screened);
   (this.lineChartData[0].data as number[]).push(res.screening.Wednesday.screened);
   
   (this.lineChartData[1].data as number[]).push(res.screening.Thursday.presumptive);
   (this.lineChartData[1].data as number[]).push(res.screening.Friday.presumptive);
   (this.lineChartData[1].data as number[]).push(res.screening.Saturday.presumptive);
   (this.lineChartData[1].data as number[]).push(res.screening.Sunday.presumptive);
   (this.lineChartData[1].data as number[]).push(res.screening.Monday.presumptive);
   (this.lineChartData[1].data as number[]).push(res.screening.Tuesday.presumptive);
   (this.lineChartData[1].data as number[]).push(res.screening.Wednesday.presumptive);
   
   }
   else if (this.today == this.prev2){
  for (const key in res.ages ) {
      if (res.ages.hasOwnProperty(key) && key == this.yesterday ) {
        (this.barChartData[0].data as number[]).push(res.ages[key].presumptive);
        (this.barChartData[1].data as number[]).push(res.ages[key]['non-presumptive']);
      }
    }
   (this.lineChartData[0].data as number[]).push(res.screening.Wednesday.screened);
   (this.lineChartData[0].data as number[]).push(res.screening.Thursday.screened);
   (this.lineChartData[0].data as number[]).push(res.screening.Friday.screened);
   (this.lineChartData[0].data as number[]).push(res.screening.Saturday.screened);
   (this.lineChartData[0].data as number[]).push(res.screening.Sunday.screened);
   (this.lineChartData[0].data as number[]).push(res.screening.Monday.screened);
   (this.lineChartData[0].data as number[]).push(res.screening.Tuesday.screened);
   
   (this.lineChartData[1].data as number[]).push(res.screening.Wednesday.presumptive);
   (this.lineChartData[1].data as number[]).push(res.screening.Thursday.presumptive);
   (this.lineChartData[1].data as number[]).push(res.screening.Friday.presumptive);
   (this.lineChartData[1].data as number[]).push(res.screening.Saturday.presumptive);
   (this.lineChartData[1].data as number[]).push(res.screening.Sunday.presumptive);
   (this.lineChartData[1].data as number[]).push(res.screening.Monday.presumptive);
   (this.lineChartData[1].data as number[]).push(res.screening.Tuesday.presumptive);
   
   }
    else if (this.today == this.prev3){
  for (const key in res.ages ) {
      if (res.ages.hasOwnProperty(key) && key == this.yesterday ) {
        (this.barChartData[0].data as number[]).push(res.ages[key].presumptive);
        (this.barChartData[1].data as number[]).push(res.ages[key]['non-presumptive']);
      }
    }
    (this.lineChartData[0].data as number[]).push(res.screening.Tuesday.screened);
   (this.lineChartData[0].data as number[]).push(res.screening.Wednesday.screened);
   (this.lineChartData[0].data as number[]).push(res.screening.Thursday.screened);
   (this.lineChartData[0].data as number[]).push(res.screening.Friday.screened);
   (this.lineChartData[0].data as number[]).push(res.screening.Saturday.screened);
   (this.lineChartData[0].data as number[]).push(res.screening.Sunday.screened);
   (this.lineChartData[0].data as number[]).push(res.screening.Monday.screened);
    
    (this.lineChartData[1].data as number[]).push(res.screening.Tuesday.presumptive);
   (this.lineChartData[1].data as number[]).push(res.screening.Wednesday.presumptive);
   (this.lineChartData[1].data as number[]).push(res.screening.Thursday.presumptive);
   (this.lineChartData[1].data as number[]).push(res.screening.Friday.presumptive);
   (this.lineChartData[1].data as number[]).push(res.screening.Saturday.presumptive);
   (this.lineChartData[1].data as number[]).push(res.screening.Sunday.presumptive);
   (this.lineChartData[1].data as number[]).push(res.screening.Monday.presumptive);
  
   
   }
   
    else if (this.today == this.prev4){
  for (const key in res.ages ) {
      if (res.ages.hasOwnProperty(key) && key == this.yesterday ) {
        (this.barChartData[0].data as number[]).push(res.ages[key].presumptive);
        (this.barChartData[1].data as number[]).push(res.ages[key]['non-presumptive']);
      }
    }
   (this.lineChartData[0].data as number[]).push(res.screening.Monday.screened);
   (this.lineChartData[0].data as number[]).push(res.screening.Tuesday.screened);
   (this.lineChartData[0].data as number[]).push(res.screening.Wednesday.screened);
   (this.lineChartData[0].data as number[]).push(res.screening.Thursday.screened);
   (this.lineChartData[0].data as number[]).push(res.screening.Friday.screened);
   (this.lineChartData[0].data as number[]).push(res.screening.Saturday.screened);
   (this.lineChartData[0].data as number[]).push(res.screening.Sunday.screened);
  
   (this.lineChartData[1].data as number[]).push(res.screening.Monday.presumptive);
   (this.lineChartData[1].data as number[]).push(res.screening.Tuesday.presumptive);
   (this.lineChartData[1].data as number[]).push(res.screening.Wednesday.presumptive);
   (this.lineChartData[1].data as number[]).push(res.screening.Thursday.presumptive);
   (this.lineChartData[1].data as number[]).push(res.screening.Friday.presumptive);
   (this.lineChartData[1].data as number[]).push(res.screening.Saturday.presumptive);
   (this.lineChartData[1].data as number[]).push(res.screening.Sunday.presumptive);
   
   
   }
    else if (this.today == this.prev5){
  for (const key in res.ages ) {
      if (res.ages.hasOwnProperty(key) && key == this.yesterday ) {
        (this.barChartData[0].data as number[]).push(res.ages[key].presumptive);
        (this.barChartData[1].data as number[]).push(res.ages[key]['non-presumptive']);
      }
    }
   (this.lineChartData[0].data as number[]).push(res.screening.Sunday.screened);
   (this.lineChartData[0].data as number[]).push(res.screening.Monday.screened);
   (this.lineChartData[0].data as number[]).push(res.screening.Tuesday.screened);
   (this.lineChartData[0].data as number[]).push(res.screening.Wednesday.screened);
   (this.lineChartData[0].data as number[]).push(res.screening.Thursday.screened);
   (this.lineChartData[0].data as number[]).push(res.screening.Friday.screened);
   (this.lineChartData[0].data as number[]).push(res.screening.Saturday.screened);
   
   (this.lineChartData[1].data as number[]).push(res.screening.Sunday.presumptive);
   (this.lineChartData[1].data as number[]).push(res.screening.Monday.presumptive);
   (this.lineChartData[1].data as number[]).push(res.screening.Tuesday.presumptive);
   (this.lineChartData[1].data as number[]).push(res.screening.Wednesday.presumptive);
   (this.lineChartData[1].data as number[]).push(res.screening.Thursday.presumptive);
   (this.lineChartData[1].data as number[]).push(res.screening.Friday.presumptive);
   (this.lineChartData[1].data as number[]).push(res.screening.Saturday.presumptive);
   
   
   
   }
   
   
   

 
   // var data =[a,b,c,d,e,f,g];
    //data.push(data.splice(0, 1)[0]);
    
   // console.log(data);
   
   
    // Push location data
    this.locationsStats = res.centers;

    // Push questions data
    this.questionStatistics = res.questions;

    // Push General data
    this.generalReports[0] = res.general;
  }

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public selectFilter(filter: string): void {
    this.isLive = filter;
  }

  public toggleGenerateReportModal() {
    this.showModal = !this.showModal;
  }

  public toggleCustomTime() {
    this.isCustomTime = !this.isCustomTime;
  }

  public GetReportDownloadUrl() {
    if (this.downloadForm.status !== 'INVALID') {
      this.isReportDisabled = false;
    }
    this.selectedMin = this.downloadForm.get('min').value;
    this.selectedMax = this.downloadForm.get('max').value;
    this.selectedLocation = this.downloadForm.get('location').value;
  }

}

