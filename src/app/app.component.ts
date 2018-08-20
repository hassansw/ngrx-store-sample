import { Component } from '@angular/core';

import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import * as PostAction from './actions/post.action'

// export interface AppState {
//   message: string
// }
export interface AppState {
  post: Post
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  $post: Observable<Post>
  text: string //form input

  constructor(private store: Store<AppState>) {
    this.$post = this.store.select('post')
  }

  editText() {
    console.log('asda', this.text);

    this.store.dispatch(new PostAction.EditText(this.text))
  }

  upvote() {
    this.store.dispatch(new PostAction.Upvote())
  }

  downVote() {
    this.store.dispatch(new PostAction.DownVote())
  }

  reset() {
    this.store.dispatch(new PostAction.Reset())
  }

  // spanishMessage() {
  //   this.store.dispatch({ type: 'SPANISH' })
  // }

  // frenchMessage() {
  //   this.store.dispatch({ type: 'FRENCH' })
  // }
}


export interface Post {
  text: string;
  likes: number;
}