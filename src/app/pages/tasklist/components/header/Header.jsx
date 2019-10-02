import React from 'react';
import styles from './Header.scss';
import LikeIcon from '../../../../../assets/like.svg';

const Header = () => (
  <div className={styles.wrapper}>
    <h1>To do List</h1>
    <LikeIcon className={styles.icon} />
  </div>
);

export default Header;
