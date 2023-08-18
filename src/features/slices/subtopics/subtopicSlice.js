import { createSlice, createSelector } from "@reduxjs/toolkit";
import axios from "axios";

export const initialState = {
    loading: false,
    hasErrors: false,
    subtopics: [],
  }
  
  const subtopicSlice = createSlice({
    name: 'subtopics',
    initialState,
    reducers: {
      getSubtopics: state => {
        state.subtopics
        state.loading = true
      },
      getSubtopicsSuccess: (state, { payload }) => {
        state.subtopics = payload
        state.loading = false
        state.hasErrors = false
      },
      getSubtopicsFailure: state => {
        state.loading = false
        state.hasErrors = true
      },
    },
  });

// Asynchronous thunk action
export function fetchSubtopics() {
    return async dispatch => {
      dispatch(getSubtopics())
       
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        
        dispatch(getSubtopicsSuccess(response.data))
      } catch (error) {
          console.log("error:",error)
        dispatch(getSubtopicsFailure())
      }
    }
  };

// Three actions generated from the slice
export const { getSubtopics, getSubtopicsSuccess, getSubtopicsFailure } = subtopicSlice.actions

// A selector
export const selectSubtopics = state => {
    console.log('selectSubtopics:',state)
    return state.rootReducer.subtopic.subtopics
};

// Memoized Selector
export const selectMemoizedSubtopics = createSelector(
    /* [selectSubtopics, (state, userId) => { console.log('selectMemoizedSubtopics1:', state.rootReducer.subtopic); return state.rootReducer}],
    (subtopics, userId) => { 
        console.log('selectMemoizedSubtopics:', subtopics, 'userId:',userId)
        return subtopics === userId.subtopics
    } */
    state => state.rootReducer.subtopic,
    (items) => {
        console.log('selectMemoizedSubtopics', items)
        return items
    }
  );

// The reducer
export default subtopicSlice.reducer;


