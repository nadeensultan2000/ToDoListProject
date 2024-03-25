import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent } from './app.component';
import {MyTasksComponent} from './my-tasks/my-tasks.component';
import {FormsModule} from '@angular/forms';
import {AllTasksComponent} from './all-tasks/all-tasks.component';
@NgModule({
  declarations: [
    AppComponent,
    MyTasksComponent,
    AllTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
