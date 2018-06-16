import React from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styled-components';

const TypographyPropTypes = {
  variant: PropTypes.string,
  tag: PropTypes.string,
};

const TypographyDefaultProps = {
  variant: 'headline',
  tag: 'p',
};

function Typography({ tag, ...passProps }) {
  return React.createElement(tag, passProps)
}

export default styled(Typography)`
  ${props => props.theme.typography[variant]}
`;
