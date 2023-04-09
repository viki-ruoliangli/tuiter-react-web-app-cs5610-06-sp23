import { createSlice } from "@reduxjs/toolkit";

import {createTuitThunk, deleteTuitThunk, findTuitsThunk, updateTuitThunk} from "../../services/tuits-thunks";

// initial state has no tuits and loading flag to display spinner
const initialState = {
    tuits: [],
    loading: false
}


const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa-logo.jpg",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}


const tuitsSlice = createSlice(
    {
        name: 'tuits',
        // in a7, initialState is set as the tuits
        // initialState: tuits,
        // in a8, this is an object
        initialState,
        // define asynchronous reducers
        extraReducers: {
            // if request is not yet fulfilled, set loading true so UI can display spinner empty tuits since we are
            // still fetching them
            [findTuitsThunk.pending]:
                (state) => {
                    state.loading = true
                    state.tuits = []
                },
            //  when we get response, request is fulfilled, we extract/destruct payload from action object, turn off
            //  loading flag since we have the data, payload has tuits from server and update redux state
            [findTuitsThunk.fulfilled]:
                (state, { payload }) => {
                    state.loading = false
                    state.tuits = payload
                },
            [findTuitsThunk.rejected]:
                (state) => {
                    state.loading = false
                },
            [deleteTuitThunk.fulfilled]:
            // payload from action contains tuit ID to remove
                (state, { payload }) => {
                    state.loading = false;
                    state.tuits = state.tuits.filter(t => t._id !== payload)
                },
            [createTuitThunk.fulfilled]:
                (state, { payload }) => {
                    state.loading = false
                    state.tuits.unshift(payload)
                },
            [updateTuitThunk.fulfilled]:
                (state, { payload }) => {
                    state.loading = false
                    console.log(state.tuits)
                    const updateTuitIndex = state.tuits.findIndex(tuit => tuit._id === payload._id)
                    state.tuits[updateTuitIndex] = {
                        ...state.tuits[updateTuitIndex],
                        ...payload
                    }
                }
        },
        reducers: {
            createTuit(state, action) {
                // add createTuit reducer function which appends the new tuit in the payload at the beginning of the
                // array of tuits contained in the state.
                state.unshift({
                    ...action.payload,
                    ...templateTuit,
                    _id: (new Date()).getTime(),
                })
            },
            // reducer function to delete tuit looks up index of tuit from state comparing each tuit's ID
            // with action's payload, then splices tuit from state
            deleteTuit(state, action) {
                const index = state.findIndex(tuit => tuit._id === action.payload);
                state.splice(index, 1);
            }
        }
    }
);

export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;
