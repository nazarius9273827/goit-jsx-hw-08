import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const Section = ({ title, children }) => (
  <section>
    <Title>{title}</Title>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;