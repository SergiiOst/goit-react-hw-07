import axios from "axios";
import {
  deleteContact,
  fetchData,
  setErrorState,
  setLoadingStatus,
} from "./contactsSlice";

axios.defaults.baseURL = "https://66b51b869f9169621ea5706a.mockapi.io/";

export const fetchContactsThunk = () => async (dispatch) => {
  try {
    dispatch(setLoadingStatus(true));
    const response = await axios.get("contacts");
    dispatch(fetchData(response.data));
  } catch (error) {
    dispatch(setErrorState(true));
  } finally {
    dispatch(setLoadingStatus(false));
  }
};

export const deleteContactsThunk = (id) => async (dispatch) => {
  try {
    dispatch(setLoadingStatus(true));
    await axios.delete(`contacts/${id}`);
    dispatch(deleteContact(id));
  } catch (error) {
    dispatch(setErrorState(true));
  } finally {
    dispatch(setLoadingStatus(false));
  }
};
