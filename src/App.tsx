import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './lib/store';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage'; // Ensure you have a UserPage component

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/user/:username" element={<UserPage />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
