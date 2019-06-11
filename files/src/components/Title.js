import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.div`
  font-size: 20px;
  color: #01267b;
`;

export default class Title extends React.PureComponent {
  render() {
    return (
      <StyledTitle>Hello World!</StyledTitle>
    );
  }
}
