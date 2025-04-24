import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Message = styled.p`
  font-style: italic;
`;

export const Notification = ({ message }) => <Message>{message}</Message>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;