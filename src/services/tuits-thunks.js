import {createAsyncThunk}
  from "@reduxjs/toolkit"
import * as service
  from "./tuits-service"

export const findTuitsThunk = createAsyncThunk(
    'tuits/findTuits', async () =>
        await service.findTuits()
)

export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit',
    async (tuitId) => {
      await service.deleteTuit(tuitId)
      return tuitId
    })

export const createTuitThunk = createAsyncThunk(
    'tuits/createTuit', async (tuit) => {
      await service.createTuit(tuit);
      return tuit;
    }
)

export const updateTuitThunk =
    createAsyncThunk(
        'tuits/updateTuit',
        async (tuit) => {
            console.log("line29 thunk")
            await service.updateTuit(tuit)
            console.log(tuit)
        }
    )

