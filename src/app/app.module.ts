import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './routing/routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CommentComponent } from './comment/comment.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { TravelRequestFormComponent } from './travel-request-form/travel-request-form.component';
import { AdminDashboardComponent } from './dashboard-admin/dashboard-admin.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from 'src/services/user.service';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard-admin', component: AdminDashboardComponent },
  { path: 'manager-dashboard', component: ManagerDashboardComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CommentComponent,
    LoginComponent,
    AdminDashboardComponent,
    TravelRequestFormComponent,
    ManagerDashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
