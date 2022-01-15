import '../styles/globals.css';
import Layout from '../components/Layout';
import Provider from '../store/GlobalState';

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
