import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service'
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  constructor(private login: LoginService, public fb: FormBuilder) {
    this.login.getLogin().subscribe((x)=>{
      console.log('x',x)
    })
   }
   profileForm = this.fb.group({
     username: ['', Validators.required],
     password: ['', Validators.required]
   })
   onSubmit=()=>{
    console.log(this.profileForm);
   }  

}
