import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire4/database'
import {Router} from '@angular/router';

@Component({
  selector: 'app-additems',
  templateUrl: './additems.component.html',
  styleUrls: ['./additems.component.css']
})
export class AdditemsComponent implements OnInit {

  items: FirebaseListObservable<any[]>;
  constructor(private db:AngularFireDatabase, private router: Router) { }

  ngOnInit() {
  }

  saveItems(data: NgForm){
    if(data.valid){
      this.db.list("/employees").push(data.value);
      this.router.navigate(['/']);
    }
  }

}
