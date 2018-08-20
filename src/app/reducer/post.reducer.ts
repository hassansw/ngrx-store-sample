import * as PostAction from '../actions/post.action'
import { Post } from '../app.component';

export type Action = PostAction.All

//Default app state

const defaultState: Post = {
    text: 'Yo Sup',
    likes: 0
}

//Helper for setting new state
const newState = (state, newState) => {
    return Object.assign({}, state, newState)
}

//Reducer function
export const postReducer = (state: Post = defaultState, action) => {
    console.log(action.type, state);
    switch (action.type) {
        case PostAction.EDIT_TEXT:
            return newState(state, { text: action.payload })
        case PostAction.UPVOTE:
            return newState(state, { likes: state.likes + 1 })
        case PostAction.DOWNUPVOTE:
            return newState(state, { likes: state.likes - 1 })
        case PostAction.EDIT_TEXT:
            return defaultState
        default:
            return defaultState
    }

}