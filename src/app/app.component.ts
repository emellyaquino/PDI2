import { Component, OnDestroy} from '@angular/core';
import { AuthService } from './core/services/auth-service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  usuarioLogado = false;
  subscription: Subscription;

  title = 'crud';

  constructor(private authservice :  AuthService,
              private router: Router){             
                
    this.subscription = authservice.statusLoginUsuario()
      .subscribe(estaLogado => {
        console.log(estaLogado);
        if (!estaLogado) {
          router.navigate(['login']);
        } else {
          router.navigate(['dashboard']);
        }        
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }  
}
