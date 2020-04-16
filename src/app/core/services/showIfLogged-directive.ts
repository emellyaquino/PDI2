import { Directive, OnInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './auth-service';

@Directive({
  selector: '[showIfLogged]'
})
export class showIfLoggedDirective implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor(private el: ElementRef,
    private renderer: Renderer2,
    private authService: AuthService) { }

    ngOnInit(): void {
      const valorDisplay = this.el
          .nativeElement
          .style
          .display;
      this.subscription = this.authService
          .statusLoginUsuario()
          .subscribe(a => {
              this.renderer.setStyle(this.el.nativeElement,
                                     'display',
                                     a ? valorDisplay : 'none');
          });
      }

    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }
}
