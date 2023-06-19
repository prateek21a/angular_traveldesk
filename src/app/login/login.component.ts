import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { Credential } from '../Credential';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DashboardAdminService } from '../../services/dashboard-admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credential: Credential = { Email: '', Password: '' };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {}

  redirectToDashboard(regForm: any, roleName: string): void {
    if (roleName === 'Admin') {
      this.router.navigate(['/dashboard-admin']);
  }else{
    const decodedToken = this.DecodeToken();
    this.router.navigate(['/manager-dashboard']);
  }

  }

  login(regForm: any): void {
  this.credential = {
    Email: regForm.controls.email.value,
    Password: regForm.controls.password.value
  };

  this.authService.Authenticate(this.credential).subscribe(
    (res: any) => {
      this.authService.SetToken(res.token);
      const decodedToken = this.DecodeToken();
      this.redirectToDashboard(regForm, decodedToken.rolename);
    },
    (error: any) => {
      if (error.status === 500) {
        // Show error message or handle the error as needed
       alert('User not found');
      }
    }
  );

  console.log(regForm.value);
}


  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']); 
  }

  DecodeToken(): any {
    const helper = new JwtHelperService();
    const token: any = this.authService.GetToken();
    const decodedToken = helper.decodeToken(token);
    console.log(decodedToken);
    console.log(decodedToken.rolename);
    return decodedToken;
  }
}
