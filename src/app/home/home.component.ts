import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire4/database';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit() {
  }

  employeeList: FirebaseListObservable<any[]>;
  constructor(private db:AngularFireDatabase, private router: Router){
    this.employeeList = db.list('/employees');
  }

  addItem(){
    this.router.navigate(['addItems']);
  }
  deleteEmployee(data: any){
   this.employeeList.remove(data.$key);
  }
}
