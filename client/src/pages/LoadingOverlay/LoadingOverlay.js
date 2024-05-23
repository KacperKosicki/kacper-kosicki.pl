import React from 'react';
import { RingLoader } from 'react-spinners'; // Załóżmy, że używamy react-spinners

class LoadingOverlay extends React.Component {
  render() {
    return (
      <div className="loading-overlay">
        <RingLoader color={'#123abc'} loading={true} />
      </div>
    );
  }
}

export default LoadingOverlay;
