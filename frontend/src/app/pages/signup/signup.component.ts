import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent{
  user?: User;
  constructor(private login: LoginService, public fb: FormBuilder) {
    this.login.getSignup().subscribe((user)=>{
      this.user=user;
      console.log(this.user)
    })
   }
   profileForm = this.fb.group({
     username: ['', Validators.required],
     password: ['', Validators.required]
   })
   onSubmit=(form)=>{
     console.log(this.user)
     this.login.setSignup(this.user._id, form.value.username, form.value.password).subscribe((data)=>{
      console.log('data',data)
     })
    }  

}
