import React from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import styles from './Popular.module.css';
import PopularItems from './PopularItems';
import json from '../../db.json';

const Popular = () => {
  const history = useHistory();
  return (
    <div className={styles.container}>
      {json.popularItems.map((item) => (
        <PopularItems key={item.id} item={item} history={history} />
      ))}
    </div>
  );
};

export default withRouter(Popular);
