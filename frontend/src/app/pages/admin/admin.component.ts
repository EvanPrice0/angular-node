import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service'
import { FormBuilder } from '@angular/forms';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  user?: User;
  constructor(private login: LoginService, public fb: FormBuilder) {
    this.login.getLogin().subscribe((user)=>{
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
     this.login.setLogin(this.user._id, form.value.username, form.value.password).subscribe((data)=>{
      console.log('data',data)
     })
    }  

}
