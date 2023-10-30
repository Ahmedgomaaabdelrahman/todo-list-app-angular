import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TasksListComponent } from './Tasks/components/tasks-list/tasks-list.component';
import { TaskComponent } from './Tasks/components/task/task.component';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './Tasks/tasks.module';
import { RouterModule } from '@angular/router';
import { TasksRouterModule } from './Tasks/tasks.routing.module';

const routes = [
  // Other parent routes
  {
    path: '',
    loadChildren: () => import('./Tasks/tasks.module').then((m) => m.TasksModule),
  },
];

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    SharedModule,
    TasksModule,
    TasksRouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
