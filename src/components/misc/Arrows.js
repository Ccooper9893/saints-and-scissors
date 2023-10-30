import React from 'react';

const CustomPrevArrow = (props) => (
  <div className="custom-prev-arrow font5 text-2xl p-4 z-20 active:animate-ping bg-black bg-opacity-30" onClick={props.onClick}>
    {'<'}
  </div>
);

const CustomNextArrow = (props) => (
  <div className="custom-next-arrow font5 text-2xl p-4 z-20 active:animate-ping bg-black bg-opacity-30" onClick={props.onClick}>
    {'>'}
  </div>
);

export { CustomPrevArrow, CustomNextArrow };