# Redux

## Step 1 : Configuration and Required Packages

    1. redux
    2. redux-thunx

## Step 2 : Store setup

1.  createStore(userReducer, applyMiddleware(thunk));

## Step 3 : reducer and multiple

2.  Reducer(state = initialState, action)

## step 4 : Action

1.  action constant (export const ADD_USERS = "ADD_USERS";)
2.  action creator (

    Plain Object:
    export function addUsers(payload) {
    return { type: ADD_USERS, payload };
    }
    )

    Response Object :

    export function fetchUsers(userId) {

    return function (dispatch, getState) {
    console.log(getState());
    fetch("https://jsonplaceholder.typicode.com/todos/" + userId)
    .then((response) => response.json())
    .then((json) => {
    dispatch(addUsers(json));
    console.log(getState());
    });
    };
    }

## step 4 : dispath ( Original it happen in UI )

store.dispatch(fetchUsers(1));

# React-Redux

## step 1 : Provider ( root component )

## step 2 : Consume ( Connect store to component )

## Step 3 : update ( Dispath action )
