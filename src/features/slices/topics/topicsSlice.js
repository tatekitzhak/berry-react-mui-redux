import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// https://jsonplaceholder.typicode.com/albums

export const fetchTopics = createAsyncThunk(
    'explore/topics',
    async (args, thunkAPI) => {
        //const state = thunkAPI.getState();
        //const extra = thunkAPI.extra;
        //const requestId = thunkAPI.requestId;
        //const signal = thunkAPI.signal;
        //console.log(state, extra, requestId, signal);
        //thunkAPI.dispatch({ type: "data/cancel" });
        //thunkAPI.rejectWithValue("rejected", { a: 0 });
        //thunkAPI.fulfillWithValue("fulfilled", { a: 0 });
        try {
            // thunkAPI.dispatch(enableLoading());
            const { data } = await axios.get("https://jsonplaceholder.typicode.com/albums" );
              //console.log('data:',data)
              // set data
            //   thunkAPI.dispatch(incrementCount());
              return data;
        } catch (err) {
            return thunkAPI.rejectWithValue(error.response);
        } finally {
            // thunkAPI.dispatch(disableLoading());
          }
    },
    {
        // condition: (arg, { getState, extra }) => true, // 'false' to prevent running payload creator
        // dispatchConditionRejection: true, // 'true' to dispatch 'rejected' action when condition() returns 'false'
        // idGenerator: ()=>Math.random(),    // function generating 'requestId', defaults to nanoid()
        // serializeError: console.error,    // replaces the internal miniSerializeError method
        // getPendingMeta: ({ arg, requestId }, { getState, extra })=>({})   // creates an object that will be merged into the pendingAction.meta field.
    }
);

const initialState = {
    topics: [],
    loading: false,
    isSuccess: false,
    message: "",
  };

const topicsSlice = createSlice({
    name: 'explore/topics',
    initialState,
    reducers: {
        enableLoading: (state, action) => {
            state.loading = true;
          },
        disableLoading: (state, action) => {
        state.loading = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTopics.pending, (state, action) => {
                
            })
            .addCase(fetchTopics.fulfilled, (state, action) => {
                ;
                state.topics = action.payload
            })
            .addCase(fetchTopics.rejected, (state, action) => {
               
            });
    }
});

export const selectTopics = state => state.rootReducer;

export default topicsSlice.reducer;
