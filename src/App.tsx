import Layout from './Layout';
import { Provider } from 'react-redux';
import store from './lib/store';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div id="app">
      <Provider store={store}>
        <Layout>
          <HomePage></HomePage>
        </Layout>
     </Provider>
    </div>
  );
}

export default App;