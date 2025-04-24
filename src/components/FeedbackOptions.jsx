import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  margin-right: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid #444;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
  &:hover { background: #f0f0f0; }
`;

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(option => (
      <Button key={option} onClick={() => onLeaveFeedback(option)}>
        {option.charAt(0).toUpperCase() + option.slice(1)}
      </Button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;