import React from 'react';
import styles from './Floor.scss';

const counts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const Floor = ({ floor, onClickFloor }) => {
  return (
    <>
      {counts.map((el, i) => {
        return (
          <div
            className={floor == el ? 'floor-active' : 'floor-inactive'}
            key={i}
            onClick={() => onClickFloor(el)}>
            {el}
          </div>
        );
      })}
    </>
  );
};

export default Floor;
