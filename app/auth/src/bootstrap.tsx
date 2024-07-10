import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { store } from '@social-hub/redux-store';
import { Provider } from 'react-redux';

import { createMemoryHistory, createBrowserHistory } from 'history';
import { createPortal } from 'react-dom';

const mount = (el: any, { onNavigate, defaultHistory, initialPath }: any) => {
  const history =
    defaultHistory || createMemoryHistory({ initialEntries: [initialPath] });

  // When navigation occurs, use the listen handler to call onNavigate()
  if (onNavigate) {
    history.listen(onNavigate);
  }
  console.log('trigger');
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  console.log('ROOT', root);

  root.render(
    <StrictMode>
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </StrictMode>
  );
  return {
    onParentNavigate({ pathname: nextPathname }: { pathname: string }) {
      const { pathname } = history.location;

      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};
// If we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('root');

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

// Assume, we are running through the container and we should export the mount function
export { mount };
