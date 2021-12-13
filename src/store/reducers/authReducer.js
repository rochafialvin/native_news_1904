const init = {
  id: 0,
  username: '',
  berhasil: 'Hore',
};

export default function authReducer(state = init, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {...state, ...action.payload};

    case 'LOGOUT_SUCCESS':
      return {...state, id: 0, username: ''};

    default:
      return init;
  }
}
