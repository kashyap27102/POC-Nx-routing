import { useAppSelector } from '@social-hub/redux-store';
import React from 'react';
import { useNavigate } from 'react-router-dom';
const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const isLoggedIn = useAppSelector((state) => state.userSlice.isLoggedIn);
  console.log(isLoggedIn + 'login status');
  if (!isLoggedIn) {
    console.log('asdasd');
    navigate('/auth');
    return;
  }

  return <div>{children}</div>;
};

export default PrivateRoute;
