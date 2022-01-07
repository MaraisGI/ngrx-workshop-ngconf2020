import { Action, ActionReducer, ActionReducerMap, createSelector, MetaReducer } from "@ngrx/store";
import * as fromAuth from "./auth.reducer";
import * as fromBooks from "./books.reducer";

export interface State {
  books: fromBooks.State;
}

export const reducers: ActionReducerMap<State> = {
  books: fromBooks.reducer
};

function Logger(reducer: ActionReducer<any, any>) {
  return (state: any, action: Action) => {
    console.log('previous state: ', state);
    console.log('action: ', action);
    const nextState = reducer(state, action);
    console.log('next state: ', nextState);
    return nextState;
  }
}

export const metaReducers: MetaReducer<State>[] = [ Logger ];

/**
 * Books Selectors
 */
export const selectBooksState = (state: State) => state.books;
export const selectAllBooks = createSelector(
  selectBooksState,
  fromBooks.selectAll
);
export const selectActiveBook = createSelector(
  selectBooksState,
  fromBooks.selectActiveBook
);
export const selectBooksEarningsTotals = createSelector(
  selectBooksState,
  fromBooks.selectEarningsTotals
);
