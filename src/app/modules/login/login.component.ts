import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {


  constructor(private formBuilder: FormBuilder){

  }

  protected formLogin: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  // ngOnInit(): void {
  //   this.formLogin = this.formBuilder.group({
  //     username: ['', Validators.required],
  //     password: ['', Validators.required],
  //   });

  // }


  Login(){
    if(this.formLogin.invalid){
      this.formLogin.markAllAsTouched();
      for (const key in this.formLogin.controls) {
        this.formLogin.controls[key].markAsDirty();
      }
      return;
    }
    console.log(this.formLogin.value);
  }
}
