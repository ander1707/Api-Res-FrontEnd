import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
const cryptoJS = require ('crypto-js');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formValidador: FormGroup = this.formBuilder.group({
    'usuario':['', [Validators.required] ],
    'clave':['', Validators.required]
  });

  constructor(
    private formBuilder:FormBuilder)
   { }

  ngOnInit(): void {
  }

  login(){
    let usuario = this.formValidador.controls["usuario"].value;
    let clave = this.formValidador.controls["clave"].value;
    clave = cryptoJS.MD5(clave).toString();
    alert (clave);
  }
}
