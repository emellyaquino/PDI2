import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuarioLogado: string = 'Gestor'; 

  constructor(private router : Router,
              private authService : AuthService) {
    //this.usuarioLogado = localStorage.getItem('usuarioLogado');
  }

  ngOnInit(): void {
  }

  Logout(){
    this.authService.efetuarLogout();
  }

}
