import { mount } from 'auth/Module';
import { createBrowserHistory, createMemoryHistory } from 'history';
import React, { useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { root } from '../bootstrap';
import { createRoot } from 'react-dom/client';

const Auth = () => {
  const ref = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const history = createBrowserHistory();
  useEffect(() => {
    console.log(root);
    const { onParentNavigate } = mount(root, {
      initialPath: location.pathname,
      // Callback to update BrowserHistory when Auth app navigates
      onNavigate: ({ pathname: nextPathname }: { pathname: string }) => {
        const { pathname } = location;

        if (pathname !== nextPathname) {
          navigate(nextPathname);
        }
      },
    });

    // const unlisten = history.listen(onParentNavigate);
    // return () => unlisten();
  }, []);

  return <div ref={ref} id="auth-root"></div>;
};

export default Auth;
