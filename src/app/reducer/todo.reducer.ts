import { Action } from "@ngrx/store";


export const simple_reducer = (state: string = 'yo sup', action: Action) => {
    console.log(action.type, state);
    switch (action.type) {
        case 'SPANISH':
            return state = 'Hola Mondo'
        case 'FRENCH':
            return state = 'Bonjour le monde'
        default:
            state
    }
}