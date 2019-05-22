import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { DmaicService } from '../dmaicservice';
import { MeasureService } from './measureservice';


@Component({
    selector: 'app-measure',
    templateUrl: "./measure.component.html",
    styleUrls: ["./measure.component.css"]
  })

export class MeasureComponent implements OnInit{
  public exp:number;
  public pro:number;
  public result:number;
  

  constructor(public dmaicService: DmaicService,public measureService: MeasureService,private router:Router){}

  cal_sub(){
    this.result=this.exp-this.pro;
  }

  ngOnInit(){

  }

  Measure() {
   
   this.dmaicService.submitPost(this.exp,this.pro,this.result);
   console.log(this.result);
   this.measureService.Measure(this.result);
   //this.router.navigate['/analyse'];
  }
  // Measureone(){
  //  console.log(this.result);
  //  this.measureService.Measureone(this.result);
   //}
   
  }
  




