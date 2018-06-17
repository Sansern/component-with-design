import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { withProps } from 'recompose';

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

function TypographyTag({ tag, variant, align, classOwnerName, className, ...throughProps }) {
  const mergeClassName = classNames(classOwnerName, className);
  return React.createElement(tag, {
    ...throughProps,
    className: mergeClassName
  });
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

export default withProps(props => {
  return {
    classOwnerName: props.className
  }
})(Typography);
