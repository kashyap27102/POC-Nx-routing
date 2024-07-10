import {
  unstable_HistoryRouter as HistoryRouter,
  Route,
  BrowserRouter,
  Routes,
  HashRouter,
} from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';

export function App({ history }: any) {
  return (
    <div>
      <HistoryRouter history={history}>
        <Routes>
          <Route path="/" element={<div>Auth</div>} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Routes>
      </HistoryRouter>
    </div>
  );
}

export default App;
