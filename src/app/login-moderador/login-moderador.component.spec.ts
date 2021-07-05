import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginModeradorComponent } from './login-moderador.component';

describe('LoginModeradorComponent', () => {
  let component: LoginModeradorComponent;
  let fixture: ComponentFixture<LoginModeradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginModeradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginModeradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
