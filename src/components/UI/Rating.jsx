import React, { memo } from "react";
import ReactStars from "react-rating-stars-component";


const RatingComponent = ({
  activeColor,
  count,
  size,
  onChange,
  value
}) => {
  return (
    <ReactStars
      activeColor={activeColor}
      count={count}
      size={size}
      onChange={onChange}
      value={value}
    />
  );
};

export const Rating = memo(RatingComponent);
