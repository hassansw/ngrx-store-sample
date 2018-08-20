import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store'

import { simple_reducer } from './reducer/todo.reducer';
import { postReducer } from './reducer/post.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ message: simple_reducer, post: postReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
