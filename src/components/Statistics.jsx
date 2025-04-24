import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StatList = styled.ul`
  list-style: none;
  padding: 0;
`;
const StatItem = styled.li`
  margin-bottom: 0.5rem;
`;

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <StatList>
    <StatItem>Good: {good}</StatItem>
    <StatItem>Neutral: {neutral}</StatItem>
    <StatItem>Bad: {bad}</StatItem>
    <StatItem>Total: {total}</StatItem>
    <StatItem>Positive feedback: {positivePercentage}%</StatItem>
  </StatList>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;