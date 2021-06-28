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
  users?: User[];
  constructor(private login: LoginService, public fb: FormBuilder) {
    this.login.getLogin().subscribe((user)=>{
      this.users=user;
    })
   }
   profileForm = this.fb.group({
     username: ['', Validators.required],
     password: ['', Validators.required]
   })
   onSubmit=(form)=>{
     let user = this.users.find(nam=>nam.username==form.value.username);
     if(user){
      this.login.setLogin(user._id, form.value.username, form.value.password).subscribe((data)=>{
        console.log('data',data)
       })
     }
    }  

}
