import { createSlice } from "@reduxjs/toolkit";
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
  })

// Three actions generated from the slice
export const { getSubtopics, getSubtopicsSuccess, getSubtopicsFailure } = subtopicSlice.actions

// A selector
export const subtopicsSelector = state => state.rootReducer.subtopic;

// The reducer
export default subtopicSlice.reducer;

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
  }