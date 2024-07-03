import { useAppSelector } from '@social-hub/redux-store';
import * as React from 'react';

import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

const Profile = React.lazy(() => import('profile/Module'));
const Auth = React.lazy(() => import('auth/Module'));
const Chat = React.lazy(() => import('chat/Module'));

export function App() {
  const isLoggedIn = useAppSelector((state) => state.userSlice.isLoggedIn);
  const navigate = useNavigate();
  return (
    <React.Suspense fallback={null}>
      <ul className="w-full p-4 bg-slate-700 text-white ">
        <div className="container m-auto flex justify-between">
          <div>
            <h2 className="text-2xl font-bold">Social HUB</h2>
          </div>
          <div className="flex gap-6 text-lg ">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/chat">Chat</Link>
            </li>
            <li>
              <Link to="/auth">Auth</Link>
            </li>
          </div>
        </div>
      </ul>
      <Routes>
        <Route
          path="/"
          element={<PrivateRoute>{<div>Home</div>}</PrivateRoute>}
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/chat"
          element={
            <PrivateRoute>
              <Chat />
            </PrivateRoute>
          }
        />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
