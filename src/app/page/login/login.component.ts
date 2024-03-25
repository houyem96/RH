import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide=false;
  formulaire=false;
  f_Et=false;
  f_En=false;
  loginAdministration(){
    this.formulaire=true 
  }
  loginEtudiants(){
    this.f_Et=true 
  }
  loginEnseignants(){
    this.f_En=true 
  }
  fermer(){
    this.formulaire=false;
    this.f_Et=false;
    this.f_En=false;
  }
}
