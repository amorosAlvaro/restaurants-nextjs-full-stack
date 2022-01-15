import ACTIONS from './Actions';

const reducers = (state, actions) => {
  switch (actions.type) {
    case ACTIONS.NOTIFICATION:
      return { ...state, notification: actions.payload };
    case ACTIONS.AUTHENTICATE:
      return { ...state, authentication: actions.payload };
    default:
      return state;
  }
};

export default reducers;
