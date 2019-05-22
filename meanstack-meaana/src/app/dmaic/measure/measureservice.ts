import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Subject, Observable } from 'rxjs';

@Injectable({ providedIn: "root" })
export class MeasureService {


    private subject =new Subject<any>();

    constructor(private http: HttpClient) {}
  
    Measure(result:number){
        this.subject.next({analysis:result});
      }
  
      getMeasure():Observable<any>{
        return this.subject.asObservable();
      }
  
  
}