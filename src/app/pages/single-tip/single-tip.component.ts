import { Component, OnInit } from '@angular/core';

// Import Services
import { TipService } from "../../services/tip.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";


@Component({
  selector: 'app-single-tip',
  templateUrl: './single-tip.component.html',
  styleUrls: ['./single-tip.component.css']
})
export class SingleTipComponent implements OnInit {
  
  tips = null;


  constructor(private tipService: TipService, private router: Router) {}
  
    ngOnInit() {
      this.tipService.getAllTips().subscribe(data => {
        this.tips = data;
      });
    }
  
    handleClick() {
      this.router.navigate(["/tips/", this.tips._id]);
    }
  }