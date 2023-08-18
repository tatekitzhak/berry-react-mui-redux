import { combineReducers } from 'redux';
import topicsSlice from '@/features/slices/topics/topicsSlice';
import subtopicSlice from '@/features/slices/subtopics/subtopicSlice';

const rootReducer = combineReducers({
    topics: topicsSlice,
    subtopic: subtopicSlice
})

export default rootReducer