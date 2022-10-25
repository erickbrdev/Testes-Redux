import React from 'react';
import { Router  } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../redux/reducer';
import { render } from '@testing-library/react';

function renderWithRouterAndRedux(component, initalState = {}, historyEntries =  ['/']) {
  const history = createMemoryHistory({historyEntries: historyEntries });
  const store = createStore(rootReducer, initalState);

  const obj = render(
    <Router history = { history }>
      <Provider store={ store }>
        { component }
      </Provider>
    </Router>
  );

  return { ...obj, history, store };
}

export default renderWithRouterAndRedux