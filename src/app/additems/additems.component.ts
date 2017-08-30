import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AngularFireDatabase, FirebaseObjectObservable} from 'angularfire4/database'
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-additems',
  templateUrl: './additems.component.html',
  styleUrls: ['./additems.component.css']
})
export class AdditemsComponent implements OnInit {
  title:string; 
  employee: FirebaseObjectObservable<any>;
  id:string;
  firstname:string;
  item: any= {firstname: ""};

  constructor(
    private db:AngularFireDatabase, 
    private router: Router, 
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.title = "Add employee";
    if(this.id){
      this.title = "Edit employee";
      this.employee = this.db.object('employees/'+ this.id,{ preserveSnapshot: true });
      this.employee.subscribe(snapshot =>{
        this.item = snapshot.val();
      });
    }
  }

  saveItems(data: NgForm){
    if(data.valid){
      if(this.id){
        this.db.list("/employees").update(this.id,data.value).then(this.goToHome);
      }else{
        this.db.list("/employees").push(data.value).then(this.goToHome);
      }
    }
  }

  goToHome=()=>{
    this.router.navigate(['/']);
  }

}
