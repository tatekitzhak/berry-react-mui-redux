import { createSlice } from '@reduxjs/toolkit';

const initialState = () => ({
    articles: {},
    byUserId: {},
    allTweetIds: [],
});

const articlesSlice = createSlice({
    name: 'articles',
    initialState: initialState,
    reducers: {
        updateArticles: (state, action) => {
            const { name } = action.payload;
            return name;
        },
        articlesStoreReseted: state => initialState()
    }
});

export const { actions: { updateArticles } } = articlesSlice;

export default articlesSlice.reducer;