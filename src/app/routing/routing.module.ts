import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DocumentsComponent } from '../documents/documents.component';
import { CommentComponent } from '../comment/comment.component';
import { LoginComponent } from '../login/login.component';
import { TravelRequestFormComponent } from '../travel-request-form/travel-request-form.component';
import { AdminDashboardComponent } from '../dashboard-admin/dashboard-admin.component';
import { ManagerDashboardComponent } from '../manager-dashboard/manager-dashboard.component';
import { authGuard } from '../guards/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokeninterceptorInterceptor } from '../tokeninterceptor.interceptor';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'document', component: DocumentsComponent },
  { path: 'comment', component: CommentComponent },
  { path: 'travel-request-form', component: TravelRequestFormComponent },
  { path: 'dashboard-admin', component:  AdminDashboardComponent, canActivate: [authGuard] },
  { path: 'manager-dashboard', component:  ManagerDashboardComponent , canActivate: [authGuard]},

  
  // Add additional routes if needed
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  providers: [ 
    // provide: HTTP_INTERCEPTORS,
    // useClass: TokeninterceptorInterceptor,
    // multi: true,
    
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
export const Components= [
  DocumentsComponent,
  CommentComponent,
  TravelRequestFormComponent ,
  AdminDashboardComponent,
  ManagerDashboardComponent

];
