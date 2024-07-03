import {
  RootState,
  loginUser,
  useAppDispatch,
  useAppSelector,
} from '@social-hub/redux-store';
import { useState } from 'react';
export function App() {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email != ' ' && password != '') {
      dispatch(loginUser({ email, password }));
    }
  };

  return (
    <div className="m-auto w-[600px] p-10">
      <div className="text-center">
        <h1 className="text-3xl font-semibold">Welcome to Social Hub</h1>
      </div>
      <div className="m-6 p-6 bg-slate-800 rounded-md shadow-md flex flex-col">
        <input
          type="text"
          placeholder="Enter email"
          className="rounded-sm m-2 p-2"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          className="rounded-sm m-2 p-2"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-slate-200 m-2 p-2 hover:bg-slate-300"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default App;
