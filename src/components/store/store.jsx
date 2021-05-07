import React from "react";

const initialState = {
  users: [],
  isFetching: true,
};

const store = React.createContext(initialState);

export default store;
