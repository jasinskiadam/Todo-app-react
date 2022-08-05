import React from 'react';
import Root from "./views/Root";
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store as todoStore} from './redux/store';

const container = document.getElementById('root')!;
const store = todoStore();
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Root />
      </Provider>
    </Router>
  </React.StrictMode>
);

