import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
  }


  logIn(){

    this.authService.login()
    .subscribe(resp  => {
      console.log(resp.id);
      if(resp.id){
        this.router.navigate(['./heroes']);

      }
    })
    // ir al backend
    // un usuario
  }
}
