import { Action } from "@ngrx/store";

export const EDIT_TEXT: string = '[Post] Edit'
export const UPVOTE: string = '[Post] Upvote'
export const DOWNUPVOTE: string = '[Post] DownVote'
export const RESET: string = '[Post] Reset'

export class EditText implements Action {
    readonly type: string = EDIT_TEXT
    constructor(public payload: string) { }
}

export class Upvote implements Action {
    readonly type: string = UPVOTE
}

export class DownVote implements Action {
    readonly type: string = DOWNUPVOTE
}

export class Reset implements Action {
    readonly type: string = RESET
}

export type All = EditText | Upvote | DownVote | Reset;
