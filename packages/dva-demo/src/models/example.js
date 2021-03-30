const ff = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 3000);
  })
}
export default {

  namespace: 'example',
  state: { test: 1 },
  subscriptions: {
  },

  effects: {
    *fetch ({ payload }, { call, put }) {  // eslint-disable-line
      console.time()
      yield call(ff)
      yield put({ type: 'save', payload });
      console.timeEnd();
    },
    *fetch2 ({ payload }, { call, put }) {  // eslint-disable-line
      console.time()
      yield call(ff)
      yield put({ type: 'save', payload });
      console.timeEnd();
    },
    *fetch3 ({ payload }, { call, put }) {  // eslint-disable-line
      console.time()
      yield call(ff)
      yield put({ type: 'save', payload });
      console.timeEnd();
    },
  },

  reducers: {
    save (state, action) {
      // console.log('----',action)
      return { ...state, ...action.payload };
    },
  },
};
