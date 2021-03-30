import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

function IndexPage ({ example, loading, dispatch, test, test2 }) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>{example.test}</h1>
      <h1 className={styles.title}>{test}</h1>
      <h1 className={styles.title}>{test2}</h1>
      <button onClick={() => dispatch({ type: 'example/save', payload: { test: ++example.test } })}>add</button>
      <button onClick={() => dispatch({ type: 'example/fetch', payload: { test: example.test + 5 } })}>add</button>
      <button onClick={() => dispatch({ type: 'test', payload: { test: example.test + 5 } })}>test</button>
    </div >
  );
}

IndexPage.propTypes = {
};

export default connect(({ example, loading, test, test2 }) => ({ example, loading, test, test2 }))(IndexPage);
