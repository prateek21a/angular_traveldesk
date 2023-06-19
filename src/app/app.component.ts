import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TravelDesk';
  isUserLoggedIn: boolean = false;

  constructor(private router: Router) {
    // Subscribe to the router events to detect navigation changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkUserLoggedIn();
      }
    });
  }

  checkUserLoggedIn() {
    // Check if the user is logged in based on your authentication mechanism
    // You can modify this logic based on your application's authentication implementation
    this.isUserLoggedIn = true; // Set to true if the user is logged in
  }

  isNavbarVisible(): boolean {
    return this.isUserLoggedIn && this.router.url !== '/login';
  }

  navigateToLoginPage() {
    this.router.navigate(['/login']);
  }
}
