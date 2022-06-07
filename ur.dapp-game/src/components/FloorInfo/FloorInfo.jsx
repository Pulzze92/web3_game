import React from 'react';
import style from './FloorInfo.scss';
import ProgressBar from './ProgressBar';

const FloorInfo = ({ floor, rent, rentPayment, progressStatus }) => {
  return (
    <>
      <h2>Floor {floor}</h2>
      <h2>
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          role="img"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M11.944 17.97 4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0 4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z" />
        </svg>
        {rent}
      </h2>
      <div className="rent-payment">{rentPayment} of 3</div>
      <div className="progress-bar">
        <ProgressBar bgcolor="#00ffff" completed={progressStatus} />
      </div>
    </>
  );
};

export default FloorInfo;
