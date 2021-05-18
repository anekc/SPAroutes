import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Auth } from '../../../auth/interfaces/auth.interface';

@Component({
  selector: 'app-heroes-home',
  templateUrl: './heroes-home.component.html',
  styles: [

    `
    .container{
      margin: 15px;
      
    }`
  ]
})
export class HeroesHomeComponent implements OnInit {

get auth(){
  return this.autS.auth;
}
  

  constructor(private router: Router,
    private autS: AuthService) { }

  ngOnInit(): void {
  }

  logout(){
    // ir al backend
    // un usuario
    this.router.navigate(['./auth/login']);
    localStorage.clear();
  }

}
