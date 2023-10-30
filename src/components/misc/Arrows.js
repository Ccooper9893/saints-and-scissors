import React from 'react';

const CustomPrevArrow = (props) => (
  <div className="custom-prev-arrow font5 text-2xl p-16 z-20 active:animate-ping" onClick={props.onClick}>
    {'<'}
  </div>
);

const CustomNextArrow = (props) => (
  <div className="custom-next-arrow font5 text-2xl p-16 z-20 active:animate-ping" onClick={props.onClick}>
    {'>'}
  </div>
);

export { CustomPrevArrow, CustomNextArrow };