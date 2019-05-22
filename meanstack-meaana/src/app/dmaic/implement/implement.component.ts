import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DmaicService } from '../dmaicservice';
import { AnalysService } from '../analyse/analyseservice';

@Component({
     selector: 'app-implement',
    templateUrl: "./implement.component.html",
    styleUrls: ["./implement.component.css"]
  })
export class ImplementComponent implements OnInit{
  subscription: Subscription;
   private data: string;

 

    
 constructor(private dmaicService:DmaicService ,private analysService:AnalysService){

}
  
ngOnInit(){
  this.subscription=this.analysService.getAnalyse().subscribe(data =>{
   console.log(data);
   this.data = data.message;
  })
}
}