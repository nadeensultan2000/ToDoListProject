import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { AllTasksComponent } from './all-tasks/all-tasks.component';

const routes: Routes = [

  { path: '', redirectTo: '/my-tasks', pathMatch: 'full' },
  {path:'my-tasks',component:MyTasksComponent},
  {path:'all-tasks' ,component: AllTasksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
