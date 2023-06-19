
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class AdminDashboardComponent implements OnInit {
  users: any[] | undefined; // Array to store the list of users
  newUser: any = {}; // Object to store data for creating a new user
  authService: any;
  router: any;

  constructor(private http: HttpClient) {}
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']); // Replace '/login' with the actual login page route

  }
  ngOnInit() {
    // Call the API to get the list of users on component initialization
    this.getUsers();
  }

  getUsers() {
    // Make an HTTP GET request to fetch the list of users from the backend
    this.http.get<any[]>('/api/users').subscribe(
      (response) => {
        this.users = response;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  createUser() {
    // Make an HTTP POST request to create a new user
    this.http.post('/api/users', this.newUser).subscribe(
      (response) => {
        // User created successfully, update the user list
        this.getUsers();
        // Reset the form
        this.newUser = {};
      },
      (error) => {
        console.error('Error creating user:', error);
      }
    );
  }

  updateUser(user: any) {
    // Make an HTTP PUT request to update the user
    this.http.put(`/api/users/${user.id}`, user).subscribe(
      (response) => {
        // User updated successfully, update the user list
        this.getUsers();
      },
      (error) => {
        console.error('Error updating user:', error);
      }
    );
  }

  deleteUser(user: any) {
    // Make an HTTP DELETE request to delete the user
    this.http.delete(`/api/users/${user.id}`).subscribe(
      (response) => {
        // User deleted successfully, update the user list
        this.getUsers();
      },
      (error) => {
        console.error('Error deleting user:', error);
      }
    );
  }
}
