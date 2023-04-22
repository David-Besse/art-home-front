import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from 'src/components/App';
import store from 'src/store';

import './styles/index.scss';
// eslint-disable-next-line import/extensions
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const rootReactElement = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

const root = createRoot(document.getElementById('root'));
root.render(rootReactElement);
