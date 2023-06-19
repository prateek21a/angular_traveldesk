import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css']
})
export class ManagerDashboardComponent implements OnInit {
  constructor(private authService: AuthService) { }

  ngOnInit(): void {}

  logout(): void {
    this.authService.logout();
    console.log('Token removed:', !this.authService.isAuthenticated());
  }
}
