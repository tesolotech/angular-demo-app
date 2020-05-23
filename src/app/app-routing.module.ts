import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GreetUserComponent } from './greet-user/greet-user.component';

const routes: Routes = [
  { path: 'greetUser', component: GreetUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
