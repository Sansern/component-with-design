import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TypographyPropTypes = {
  variant: PropTypes.string,
  tag: PropTypes.string,
  align: PropTypes.string
};

const TypographyDefaultProps = {
  variant: 'headline',
  tag: 'p',
  align: 'left'
};

TypographyTag.propTypes = TypographyPropTypes;

TypographyTag.defaultProps = TypographyDefaultProps;

function TypographyTag({ tag, variant, align, ...throughProps }) {
  return React.createElement(tag, throughProps);
}

const getTypoStyleFromProps = styleName => props =>
  props.theme.typography[props.variant][styleName];

const Typography = styled(TypographyTag)`
  font-size: ${getTypoStyleFromProps('fontSize')};
  font-family: ${getTypoStyleFromProps('fontFamily')};
  font-weight: ${getTypoStyleFromProps('fontWeight')};
  line-height: ${getTypoStyleFromProps('lineHeight')};
  letter-spacing: ${getTypoStyleFromProps('letterSpacing')};
  text-align: ${props => props.align};
  margin: 0;
`;

Typography.propTypes = TypographyPropTypes;

Typography.defaultProps = TypographyDefaultProps;

export default Typography;
