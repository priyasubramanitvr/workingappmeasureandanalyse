import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DmaicService } from '../dmaicservice';
import { AnalysService } from './analyseservice';
import { MeasureService } from '../measure/measureservice';

@Component({
    selector: 'app-analyse',
    templateUrl: "./analyse.component.html",
    styleUrls: ["./analyse.component.css"]
  })
export class AnalyseComponent implements OnInit{

   subscription :Subscription;
  result: number;
   private data: string;
  
   public reason: string;
  constructor(private measureService:MeasureService,private analysService:AnalysService, public dmaicService:DmaicService){

  }

  ngOnInit(){
      
  
    this.subscription=this.measureService.getMeasure().subscribe(result =>{
      console.log(result);
     this.result = result.analysis;
    })
 }

 Analyse(){
  this.dmaicService.sendPost(this.result,this.data);
  console.log(this.data);
  this.analysService.Analyse(this.data);

 }



 }







