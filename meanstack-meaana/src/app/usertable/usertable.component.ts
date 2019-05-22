import { Component, OnInit } from '@angular/core';


import {DataSource} from '@angular/cdk/collections';
import { User } from './user.model';
import { UserService } from './user.services';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UserTableComponent implements OnInit {
  
  constructor(
    private router:Router) {}
    listData:MatTableDataSource<any>;
  displayedColumns: string[] = ['sno', 'definition', 'startingdate', 'enddate',];

  ngOnInit(){

  }
  onclick(){
    this.router.navigate(['']);
  }
}

  