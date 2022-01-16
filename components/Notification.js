import { useContext } from 'react';
import DataContext from '../store/GlobalContext';
import Loading from './Loading';
import Toast from './Toast';

function Notification() {
  const [state, dispatch] = useContext(DataContext);
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
