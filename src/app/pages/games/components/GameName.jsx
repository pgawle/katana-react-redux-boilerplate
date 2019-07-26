import React from 'react';
import gameNameStyles from './GameName.scss';
import LikeIcon from '../../../../assets/like.svg';

const GameName = () => (
  <div className={gameNameStyles.wrapper}>
    <h1>This is Game Name!!</h1>
    <img alt="" className={gameNameStyles.icon} src={LikeIcon} />
  </div>
);

export default GameName;
