import Layout from './Layout';
import { Provider } from 'react-redux';
import store from './lib/store';
import UsersList from './components/Lists/UserList/UserList';

function App() {
  return (
    <div id="app">
      <Provider store={store}>
        <Layout>
          <UsersList></UsersList>
        </Layout>
     </Provider>
    </div>
  );
}

export default App;
