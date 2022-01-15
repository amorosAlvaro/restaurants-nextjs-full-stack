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
      {notification.error && <Toast />}
      {notification.success && <Toast />}
    </>
  );
}

export default Notification;
