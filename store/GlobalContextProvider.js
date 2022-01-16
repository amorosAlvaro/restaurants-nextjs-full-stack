import { useReducer, useEffect } from 'react';
import { getData } from '../services/fetchData';
import reducers from './Reducers';
import DataContext from './GlobalContext';

const Provider = ({ children }) => {
  const initialState = { authentication: {}, notification: {} };
  const [state, dispatch] = useReducer(reducers, initialState);

  useEffect(() => {
    const login = localStorage.getItem('user');
    if (login) {
      console.log('provider login data:', login);

      getData('authentication/accessToken', login).then((res) => {
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
    <DataContext.Provider value={[state, dispatch]}>
      {children}
    </DataContext.Provider>
  );
};

export default Provider;
