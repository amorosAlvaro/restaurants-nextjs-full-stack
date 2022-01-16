import { createContext, useReducer, useEffect } from 'react';
import { getData } from '../services/fetchData';
import reducers from './Reducers';

const Context = createContext();

const Provider = ({ children }) => {
  const initialState = { notification: {}, authentication: {} };
  const [state, dispatch] = useReducer(reducers, initialState);

  useEffect(() => {
    const login = localStorage.getItem('user');
    if (login) {
      console.log('provider login data:', login);

      getData('authentication/accessToken', login).then((res) => {
        console.log('res', res);
        console.log('res.access_token', res.access_token);
        console.log('res.userName', res.userName);

        dispatch({
          type: 'AUTHENTICATE',
          payload: {
            token: res.access_token,
            user: res.userName,
          },
        });
      });
    }
  }, []);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export { Context, Provider };
