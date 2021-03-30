import dva from 'dva';
// import createLoading from 'dva-loading';
import createLoading from './loading';

import './index.css';

// 1. Initialize
const app = dva();

const onAction = ({ dispatch, getState }) => {
  console.log('-------')
  return next => action => {
    let pathname = '';
    return next(action);
  };
};

function onEffect (effect, { put }, model, actionType) {
  console.log('onEffect----', model, actionType)
  return function* (...args) {
    console.log('onEffect-effect', args)
    yield put({ type: 'test' });
    yield effect(...args); //执行原来的effect
    // yield put({ type: HIDE, payload: { namespace, actionType } });
  };
}

const extraReducers = {
  test (state = 0, { type, payload }) {
    console.log('extraReducers', type)
    return ++state;
  },
};

const extraReducers2 = {
  test2 (state = 0, { type, payload }) {
    console.log('extraReducers2', type)
    return state + 2;
  },
};

app.use({
  onEffect,
  extraReducers
});

app.use({
  // onEffect,
  // onAction,
  extraReducers: extraReducers2
});

// app.use(createLoading());
app.model(require('./models/example').default);

app.router(require('./router').default);

app.start('#root');
