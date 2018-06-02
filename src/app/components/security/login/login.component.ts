import { CurrentUser } from './../../../model/currentUser.model';
import { UserService} from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FiltroService } from './../../../services/filtro.service';
import { Router } from '@angular/router';
import { Profile } from 'selenium-webdriver/firefox';
import { CredenciaisDTO } from '../../../model/credenciaisDTO.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cred = new CredenciaisDTO('','');
  filtro: FiltroService;
  message: string;

  constructor(
    private userService: UserService,
    private router: Router

  ) { 
    this.filtro = FiltroService.getInstance();
  }

  ngOnInit() {
  }

  login(){
    this.message = '';
    this.userService.login(this.cred).subscribe(response => {
       this.filtro.cred = this.cred;
       this.filtro.token = response.headers.get('Authorization').substr(7);
       this.filtro.showTemplate.emit(true);
       this.router.navigate(['/']);
    })
    
  }

  cancelLogin(){
    this.message = '';
    this.cred = new CredenciaisDTO('','');
    window.location.href = '/login';
    window.location.reload;
  }

  getFromGroupClass(isInvalid: boolean, isDirty): {}{
    return {
        'form-group' : true,
        'has-error' : isInvalid && isDirty,
        'has-success' : !isInvalid && isDirty
    };
  }
}
