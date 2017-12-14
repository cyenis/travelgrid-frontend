import { Component, OnInit,Input } from '@angular/core';
import { environment } from '../../../environments/environment'

import { TipService } from '../../services/tip.service'

import { User } from '../../models/user.model'

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user: any
  
  visibleAnswers = false;
  submitted = false;
  voted = false;
  answerIndex: number
  picUrl = environment.apiUrl;
  serverUrl = environment.apiUrl;


  constructor(private tipService: TipService) { }
  
  ngOnInit() {
  }

}
