import { Component, OnInit,Input } from '@angular/core';
import { environment } from '../../../environments/environment'

import { TipService } from '../../services/tip.service'

import { User } from '../../models/user.model'


@Component({
  selector: 'app-tip-card',
  templateUrl: './tip-card.component.html',
  styleUrls: ['./tip-card.component.css']
})
export class TipCardComponent implements OnInit {

  @Input() tip: any
  


  user: User | null;
  visibleAnswers = false;
  submitted = false;
  voted = false;
  answerIndex: number
  picUrl = environment.apiUrl;

  constructor(private tipService: TipService) { }

  newAnswer = {
    content: ''
  }

  // // Show / hide answer list
  // toggleAnswerList() {
  //   this.visibleAnswers = !this.visibleAnswers
  // }

  ngOnInit() {
  }

  // // Submit a new answer
  // submitAnswerForm(myForm) {
  //   this.submitted = true;
  //   if (myForm.invalid) {
  //     return;
  //   }
  //   this.tipService.postAnswer(myForm.value.answer, this.tip._id).subscribe();
  //   this.tip.answers.push({
  //     content: myForm.value.answer,
  //     date: new Date(),
  //     stars: 0
  //   })
  // }

  // // Add a star to the tip
  // handleAddtipStar(id) {
  //   this.tipService.addtipStar(id).subscribe()
  //   this.voted = true;
  //   this.tip.stars++;
  // }

  // // Add a star to the answer
  // handleAddAnswerStar(tipId, answerId) {
  //   this.tipService.addAnswerStar(tipId, answerId).subscribe();
  //   this.tip.answers.find(c => c._id === answerId).stars++;
  // }


}
