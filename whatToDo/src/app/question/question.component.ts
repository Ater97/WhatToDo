import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionForCreation } from '../shared/questionForCreation';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  public questionForm: FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
    this.questionForm = new FormGroup({
      participants: new FormControl('1', [Validators.required, Validators.min(1), Validators.max(30)]),
      budget: new FormControl('0', [Validators.required, Validators.min(0)]),
      time: new FormControl('1', [Validators.required, Validators.min(1)]),
      intensity: new FormControl('', [Validators.required, Validators.min(1)])
    });
  }

  public hasError = (controlParticipants: string, errorParticipant: string) =>{
    return this.questionForm.controls[controlParticipants].hasError(errorParticipant);
  }
  
  public askQuestion = (questionFormValue)=> {
    if (this.questionForm.valid) {
      this.executeQuestionCreation(questionFormValue);
      this.router.navigate(["recomendation"]);
    }
  }

  private executeQuestionCreation = (questionFormValue) => {
    let question: QuestionForCreation = {
      participants: questionFormValue.participants,
      budget: questionFormValue.budget,
      time: questionFormValue.time,
      intensity: questionFormValue.intensity
    }
  }
  
}