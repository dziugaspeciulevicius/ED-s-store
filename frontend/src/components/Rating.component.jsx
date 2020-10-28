import React from "react";
// import PropTypes from "prop-types";

import "../sass/components/Rating.styles.scss";

const Rating = ({ value, text, color }) => {
  return (
    <div className="rating">
      {/* We're using font-awesome for icons */}
      <span>
        {/* If the value is >1 we're showing full star. Else if the value is >= 0.5 then we're showing half of the star. And else we're showing just an empty star */}
        <i
          style={{ color }}
          className={
            value >= 1
              ? "fas fa-star"
              : value >= 0.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        {/* If the value is >2 we're showing full 2 star. Else if the value is >= 1.5 then we're showing 1.5 stars. And else we're showing just an empty star */}
        <i
          style={{ color }}
          className={
            value >= 2
              ? "fas fa-star"
              : value >= 1.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        {/* If the value is >3 we're showing full 3 star. Else if the value is >= 2.5 then we're showing 2.5 stars. And else we're showing just an empty star */}
        <i
          style={{ color }}
          className={
            value >= 3
              ? "fas fa-star"
              : value >= 2.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        {/* If the value is >4 we're showing full 4 star. Else if the value is >= 3.5 then we're showing 3.5 stars. And else we're showing just an empty star */}
        <i
          style={{ color }}
          className={
            value >= 4
              ? "fas fa-star"
              : value >= 3.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        {/* If the value is >5 we're showing full 5 star. Else if the value is >= 4.5 then we're showing 4.5 stars. And else we're showing just an empty star */}
        <i
          style={{ color }}
          className={
            value >= 5
              ? "fas fa-star"
              : value >= 4.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      {/* If there's text, then show it. This below is basically the same as => {text ? text : ''}*/}
      <span className="reviews-count">{text && text}</span>
    </div>
  );
};

// setting default color (props) so we dont need to pass color prop in other components
Rating.defaultProps = {
  color: "#f8e825",
};

// prop types allows us to check the props being passed, if we pass wrong props it will only show an error in the console
// Rating.propTypes = {
//   value: PropTypes.number.isRequired,
//   text: PropTypes.string.isRequired,
//   color: PropTypes.string,
// };

export default Rating;
