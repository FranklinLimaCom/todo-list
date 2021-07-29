import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from '../app/task/task.component'
import { TodoListComponent } from '../app/todo-list/todo-list.component'

const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'task', component: TaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
