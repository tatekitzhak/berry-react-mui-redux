import { combineReducers } from 'redux';

import subtopicSlice from '@/features/slices/subtopics/subtopicSlice';
import topicsSlice from '@/features/slices/topics/topicsSlice';

const rootReducer = combineReducers({
    subtopic: subtopicSlice,
    topics: topicsSlice
})

export default rootReducer