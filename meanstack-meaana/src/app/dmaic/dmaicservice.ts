import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MeasureData } from './measure/measuredata';
import { Subject, Observable } from 'rxjs';
import { AnalyseData } from './analyse/analysedata';

@Injectable({ providedIn: "root" })
export class DmaicService {

  private subject =new Subject<any>();
    constructor(private http: HttpClient) {}

    submitPost(exp:number,pro:number,result:number) {
      const measureData: MeasureData = { exp:exp,pro:pro,result:result};
      this.http.post("http://localhost:3000/api/post/measure", measureData)
        .subscribe(response => {
          console.log(response);
        });
    }


    sendPost(result:number,data:string) {
      const analyseData: AnalyseData = {result:result,data:data};
      this.http.post("http://localhost:3000/api/post/analyse", analyseData)
        .subscribe(response => {
          console.log(response);
        });
    }
    
}