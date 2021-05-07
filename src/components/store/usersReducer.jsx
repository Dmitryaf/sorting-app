const SET_USERS = "SET_USERS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

export default function usersReducer(state, action) {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        currentUser: action.payload,
        isAuth: true,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
}

export const setUser = (user) => ({ type: SET_USERS, payload: user });
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  payload: isFetching,
});
