import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
  isLoading: false,
  isError: false,
};

const slice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setLoadingStatus: (state, action) => {
      state.isLoading = action.payload;
    },
    setErrorState: (state, action) => {
      state.isError = action.payload;
    },
    fetchData: (state, action) => {
      state.contacts = action.payload;
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
  },
});

export const contactsReducer = slice.reducer;
export const {
  deleteContact,
  addContact,
  setLoadingStatus,
  setErrorState,
  fetchData,
} = slice.actions;
