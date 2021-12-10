const init = {
  id: '',
  username: '',
  berhasil: 'Hore',
};

export default function authReducer(state = init, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {...state, ...action.payload};
  }
}
