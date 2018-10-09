import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';

import * as Query from '../queries';


@Component({
  selector: 'app-login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.css']
})
export class LoginCompComponent implements OnInit {

  user:any={
    email:'',
    password:''
  }

  constructor(public apollo:Apollo) { }

  ngOnInit() {
  }

  
  logIn(){
    this.apollo.watchQuery({ query: Query.Login })
    .valueChanges
    .map((result: any) => result.data).subscribe((data) => {
      
      /* Condition for match goes here*/
     
      if(data.loginCheck && data.loginCheck.length > 0 )
      {
        alert('Logged In')
      }
  
    })
  }

}
