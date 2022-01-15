import { useContext } from 'react';
import { Context } from '../store/GlobalState';
import Loading from './Loading';
import Toast from './Toast';

function Notification() {
  const [state, dispatch] = useContext(Context);
  const { notification } = state;

  return (
    <>
      {notification.loading && <Loading />}
      {notification.error && (
        <Toast
          message={{ message: notification.error, title: 'Error' }}
          handleShow={() => {
            dispatch({ type: 'NOTIFY', payload: {} });
          }}
          bgColor="bg-danger"
        />
      )}
      {notification.success && (
        <Toast
          message={{ message: notification.error, title: 'Success' }}
          handleShow={() => {
            dispatch({ type: 'NOTIFY', payload: {} });
          }}
          bgColor="bg-success"
        />
      )}
    </>
  );
}

export default Notification;
