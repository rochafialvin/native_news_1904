export const loginActionCreator = userData => {
  // userData : {id: 99, username: "verstappen"}
  return {
    type: 'LOGIN_SUCCESS',
    payload: userData,
  };
};

export const logoutActionCreator = () => {
  return {type: 'LOGOUT_SUCCESS'};
};
