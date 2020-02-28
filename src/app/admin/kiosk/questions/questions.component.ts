import { Component, OnInit, OnDestroy } from '@angular/core';
import { KioskService } from '../../services/kiosk.service';
import { Subscription } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit, OnDestroy {
  public show:boolean = false;
  public isVisible = false;
  public questions = [];
  public loading: boolean;
  private sub: Subscription;
  public state:boolean = false;
  public state2:boolean = false;
 

  questionForm = this.fb.group({
    score: [''],
    disease: [''],
    position: [''],
    question: ['']
  });

  constructor(
    private kioskService: KioskService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.loading = true;
    this.GetQuestions();
    this.questionForm.patchValue({
      disease: 'TB'
    });
  }

  isAllowed = (index ) => {
  return index === 0 ? true : this.state;
}

changeState = () => {
  this.state = !this.state;
}
    
  English = (index ) => {
  return index === 0 ? true : this.state2;
}

  EnglishState = () => {
  this.state2 = !this.state2;
}
  
  private GetQuestions() {
    this.sub = this.kioskService.GetQuestions()
      .subscribe(res => {
        this.questions = res;
        this.loading = false;
      });
  }
  
  public submit() {
    this.loading = true;
    this.kioskService.AddQuestion(this.questionForm.value)
      .subscribe(res => {
        if (res) {
          this.GetQuestions();
        } else {
          alert('Add failed');
        }
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
 
}
