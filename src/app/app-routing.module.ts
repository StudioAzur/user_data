import { UserDetailsComponent } from './user/page/user-details/user-details.component';
import { UserPageComponent } from './user/page/user-page/user-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo: 'users', pathMatch:'full'},
  {path:'users', component: UserPageComponent},
  {path:'details/:id', component: UserDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
