import React from 'react';
import styles from './Heading.module.scss';

const Heading = ({ text }) => {
  return (
    <div className={styles.heading}>
      <h1>{text}</h1>
    </div>
  );
};

export default Heading;
