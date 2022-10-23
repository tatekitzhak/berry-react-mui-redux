import { createSlice } from '@reduxjs/toolkit';
// project imports
import config from 'config';


export const initialState = {
  isOpen: [], // for active default menu
  fontFamily: config.fontFamily,
  borderRadius: config.borderRadius,
  opened: true
};



const customizationSlice = createSlice({
  name: 'authUser',
  initialState: {
    isOpen: [], // for active default menu
    fontFamily: config.fontFamily,
    borderRadius: config.borderRadius,
    opened: true
  },
  reducers: {
    menu_open: (state, action) => {
      console.log('state, action):',state, [action.payload.id])
      state.isOpen = [action.payload.id]
    },
    set_menu: (state, action) => {
      console.log('state, action):',state, action.payload)
      state.opened = action.payload
    },
    set_font_family(state, action) { 
      console.log('set_font_family (state, action):',state, action)
      state.fontFamily = action.payload;
    },
    set_border_radius(state, action) { 
      console.log('set_border_radius (state, action):',state, action)
      state.borderRadius = action.payload;
    }
  },
})

export const { menu_open, set_menu, set_font_family, set_border_radius } = customizationSlice.actions;

export default customizationSlice.reducer;
