import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginNOkComponent } from './login-nok.component';

describe('LoginNOkComponent', () => {
  let component: LoginNOkComponent;
  let fixture: ComponentFixture<LoginNOkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginNOkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginNOkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
