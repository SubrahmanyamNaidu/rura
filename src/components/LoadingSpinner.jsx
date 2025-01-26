import React from 'react';
import { PuffLoader } from 'react-spinners';
import styled from '@emotion/styled';

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.3);
  z-index: 9999;
`;

function LoadingSpinner({ loading }) {
  return (
    loading && (
      <LoaderWrapper>
        <PuffLoader color="#1e40af" size={80} />
      </LoaderWrapper>
    )
  );
}

export default LoadingSpinner;
