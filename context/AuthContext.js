import { createContext, useReducer, useEffect } from 'react';

const initial_state = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  loading: false,
  error: null,
};

export const AuthContext = createContext(initial_state);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { user: action.payload, loading: false, error: null };
    case 'REGISTER_SUCCESS':
      return { user: null, loading: false, error: null };
    case 'LOGOUT':
      return { user: null, loading: false, error: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initial_state);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};