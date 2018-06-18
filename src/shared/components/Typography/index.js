import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { withProps } from 'recompose';

const TypographyPropTypes = {
  variant: PropTypes.string,
  tag: PropTypes.string,
  align: PropTypes.string,
  color: PropTypes.string,
  noWrap: PropTypes.bool
};

const TypographyDefaultProps = {
  variant: 'headline',
  tag: 'p',
  align: 'left',
  color: 'gray',
  noWrap: false
};

TypographyTag.propTypes = TypographyPropTypes;

TypographyTag.defaultProps = TypographyDefaultProps;

export function TypographyTag({ tag, variant, align, classOwnerName, className, noWrap, ...throughProps }) {
  const mergeClassName = classNames(classOwnerName, className);
  return React.createElement(tag, {
    ...throughProps,
    className: mergeClassName
  });
}

TypographyTag.displayName = 'Typography';

const getTypoStyleFromProps = styleName => props =>
  props.theme.typography[props.variant][styleName];

const Typography = styled(TypographyTag)`
  margin: 0;
  font-size: ${getTypoStyleFromProps('fontSize')};
  font-family: ${getTypoStyleFromProps('fontFamily')};
  font-weight: ${getTypoStyleFromProps('fontWeight')};
  line-height: ${getTypoStyleFromProps('lineHeight')};
  letter-spacing: ${getTypoStyleFromProps('letterSpacing')};
  text-align: ${props => props.align};
  color: ${props => props.theme.color[props.color]};
  ${props => props.noWrap ? 'overflow: hidden; text-overflow: ellipsis; white-space: nowrap;' : ''}
`;

Typography.propTypes = TypographyPropTypes;

Typography.defaultProps = TypographyDefaultProps;

export default withProps(props => {
  return {
    classOwnerName: props.className
  }
})(Typography);
