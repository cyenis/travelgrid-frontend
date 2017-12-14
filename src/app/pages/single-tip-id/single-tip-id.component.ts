import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { TipService } from "../../services/tip.service";
import { environment } from '../../../environments/environment'


@Component({
  selector: 'app-single-tip-id',
  templateUrl: './single-tip-id.component.html',
  styleUrls: ['./single-tip-id.component.css']
})
export class SingleTipIdComponent implements OnInit {

  tips: {};
  serverUrl = environment.apiUrl;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private tipService: TipService
  ) {}


  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.tipService.getOneTip(params.id).subscribe(data => {
        this.tips = data;
      });
    });
  }


}