import { createContext } from 'react';

const Context = createContext();

const Provider = ({ children }) => {
  const initialState = { notification: {}, authentication: {} };
  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};
