import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth-service';
import { Autenticacao } from 'src/app/core/models/login/autenticacao-model';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginOkComponent } from 'src/app/utils/login-ok/login-ok.component';
import { LoginNOkComponent } from 'src/app/utils/login-nok/login-nok.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autenticacao',
  templateUrl: './autenticacao.component.html',
  styleUrls: ['./autenticacao.component.css']
})
export class AutenticacaoComponent implements OnInit {

  private autenticacao: Autenticacao = new Autenticacao();

  formularioDeUsuario: FormGroup = new FormGroup(
    {
      email: new FormControl(),
      senha: new FormControl()
    }
  );
  durationInSeconds: number = 2000;

  constructor(private authservice :  AuthService,
              private router: Router,
              private fb: FormBuilder,
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

  }

  login() {
   const dados = this.formularioDeUsuario.value;

    this.autenticacao.email = dados.email;
    this.autenticacao.senha = dados.senha;

    this.authservice.login(this.autenticacao)
    .subscribe(response => {
        console.log(response['hello']);
        //localStorage.setItem('usuarioLogado', this.autenticacao.email);

        if(!(this.autenticacao.email === 'teste@teste.com.br' && this.autenticacao.senha === '123456')){
          this._snackBar.openFromComponent(LoginNOkComponent, {
            duration: this.durationInSeconds,
            panelClass: ['red-snackbar'],
          }); 

          this.router.navigate(['login']);
        }
        else{

          this._snackBar.openFromComponent(LoginOkComponent, {
            duration: this.durationInSeconds,
            panelClass: ['green-snackbar'],
          });
    
          this.router.navigate(['dashboard']);  
        }      
    });
  }
}
