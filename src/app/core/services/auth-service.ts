import { Injectable} from '@angular/core';
import { Autenticacao } from '../models/login/autenticacao-model';
import { of, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  status: boolean = false;
  private autenticacaoOk: boolean = false;
  situacaoLoginUsuario = new BehaviorSubject<boolean>(false);


  constructor(private router : Router,
              private httpClient: HttpClient) { }

  statusLoginUsuario() {
    return this.situacaoLoginUsuario.asObservable();
  }

  tokenAutenticacao(token: string) {
    localStorage.setItem('token', token);
    this.situacaoLoginUsuario.next(true);
  }

  login(autenticacao : Autenticacao){

    var senha = autenticacao.senha;
    var email = autenticacao.email;

    const url = 'https://www.mocky.io/v2/5185415ba171ea3a00704eed';
    return this.httpClient
        .post(url, { email, senha })
        .pipe(tap(response => {
            // Efetuar a validação do "response" para ver se o usuário está logado
            if(email === 'teste@teste.com.br' && senha === '123456')
            {
              this.tokenAutenticacao('token');
            }
        }));
  }

  efetuarLogout() {
    localStorage.removeItem('token');
    this.situacaoLoginUsuario.next(false);
  }
}
