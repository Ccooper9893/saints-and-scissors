import React from 'react';

const CustomPrevArrow = (props) => (
  <div className="custom-prev-arrow font6 text-2xl p-4 z-20 text-black" onClick={props.onClick}>
    {'<'}
  </div>
);

const CustomNextArrow = (props) => (
  <div className="custom-next-arrow font6 text-2xl p-4 z-20 text-black" onClick={props.onClick}>
    {'>'}
  </div>
);

export { CustomPrevArrow, CustomNextArrow };