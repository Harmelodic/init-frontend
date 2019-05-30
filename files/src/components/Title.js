import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.div`
  font-size: 20px;
  color: #01267b;
`;

/**
 * Title
 */
export default class Title extends React.PureComponent {
  /**
   * @return {HTMLElement} Title
   */
  render() {
    return (
      <StyledTitle>Hello World!</StyledTitle>
    );
  }
}
