import React from 'react';
import Alert from 'react-bootstrap/Alert';
const Complete = ({ isSuccess }) => {
  return isSuccess ? (
    <Alert variant="success">Payment Successful.</Alert>
  ) : (
    <Alert variant="danger">Payment cannot be done.</Alert>
  );
};

export default Complete;
