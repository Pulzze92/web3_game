import React from 'react';
import Floor from '../Floor/Floor';
import FloorInfo from '../FloorInfo/FloorInfo';
import styles from './MyTower.scss';

export const MyTower = () => {
  const [floor, setFloor] = React.useState(1);
  const [rent, setRent] = React.useState(0.05);
  const [rentPayment, setRentPayment] = React.useState(1);
  const [progressStatus, setProgressStatus] = React.useState(30);

  return (
    <div className="my-tower-main">
      <h1>My Tower</h1>
      <div className="my-tower">
        <Floor floor={floor} onClickFloor={(f) => setFloor(f)} />
      </div>
      <div className="floor-field">
        <FloorInfo
          floor={floor}
          rent={rent}
          rentPayment={rentPayment}
          progressStatus={progressStatus}
        />
      </div>
    </div>
  );
};
