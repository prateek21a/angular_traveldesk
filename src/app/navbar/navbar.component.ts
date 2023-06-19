import { Component , OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  login:boolean = false;
  constructor(private _authService : AuthService) {}
  
  ngOnInit(): void {
    if(this._authService.GetToken()==null)
    this.login=true;
    else 
    this.login=false;
  }
  logout(): void {
    this._authService.logout();
  }
}
