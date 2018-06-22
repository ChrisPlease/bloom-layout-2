import React from 'react';
import PropTypes from 'prop-types';

function ProgressBar({
  background,
  progress,
  fill,
  height,
}) {
  return (
    <svg width="100%" height={`${height}px`} viewBox="0 0 100 100" preserveAspectRatio="none">
      <rect x="0" y="0" width="100" height="100" fill={background} />
      <rect x="0" y="0" width={progress} height="100" fill={fill} />
    </svg>
  );
}

ProgressBar.propTypes = {
  /** Background fill color */
  background: PropTypes.string,
  /** Fill color for the progress bar */
  fill: PropTypes.string,
  /** Height of the progress bar (in pixel) */
  height: PropTypes.number,
  /** Current progress defined as a percentage */
  progress: PropTypes.number.isRequired,
};

ProgressBar.defaultProps = {
  progress: 0,
  fill: '#ddd',
  height: 30,
  background: '#eee'
};

export default ProgressBar;
