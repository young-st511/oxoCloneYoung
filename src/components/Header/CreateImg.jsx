import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
  display: inline-block;
  border-radius: 0;
`;

function CreateImg({ src, alt }) {
  return <StyledImg src={src} alt={alt} />;
}

export default CreateImg;
