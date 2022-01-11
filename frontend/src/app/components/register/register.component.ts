import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/user/session.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signUpForm = new FormGroup({
    nombres: new FormControl(null,Validators.required),
    apellidos: new FormControl(null,Validators.required),
    user: new FormControl(null,Validators.required),
    password: new FormControl(null,Validators.required),
    password1: new FormControl(null,Validators.required),
    password2: new FormControl(null,Validators.required),
    id_cuenta: new FormControl(null,Validators.required),
    fecha_nacimiento: new FormControl(null,Validators.required),
    telefono: new FormControl(null,Validators.required),
    correo: new FormControl(null,[Validators.email,Validators.required]),
    master: new FormControl(false,null)
  });

  msj: string = '';
  errorMsj: boolean = false;

  constructor(private sessionService: SessionService, private router: Router) { }

  ngOnInit(): void {
  }

  signUp(signUpForm: FormGroup){
    if(signUpForm.get('password1')?.value == signUpForm.get('password2')?.value){
      signUpForm.get('password')?.setValue(signUpForm.get('password1')?.value);
      
    }else{
      this.msj = 'El password no coincide';
      this.errorMsj = true;
      return ;
    }
    if(signUpForm.invalid){
      this.msj = "Debe llenar todos los campos"
      this.errorMsj = true
      return ;
    }

    this.sessionService.postSignUp(signUpForm.value).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['home']);
      },
      error => {
        console.log(error);
        this.msj = error.error.message;
        this.errorMsj = true
      }
    );
  }
}
