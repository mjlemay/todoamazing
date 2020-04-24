import PropTypes from 'prop-types';
import React from 'react';

const Uncheckbox = props => {
  const fill = props.fill || 'currentColor';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
        fill={fill}
      />
    </svg>
  );
};

Uncheckbox.propTypes = {
  fill: PropTypes.string
};

export default Uncheckbox;