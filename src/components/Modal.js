import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Payment from './Payment';
import OTP from './OTP';
import Complete from './Complete';

const ModalPage = (props) => {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const [inputs, setInputs] = useState(['', '', '', '', '', '']);
  const [cardDetails, setCardDetails] = useState({
    cardOwner: '',
    cardNumber: '',
    month: '',
    year: '',
    cvv: '',
  });

  useEffect(() => {
    setCurrentScreen(1);
    setIsSuccess(false);
    setInputs(['', '', '', '', '', '']);
    setCardDetails({
      cardOwner: '',
      cardNumber: '',
      month: '',
      year: '',
      cvv: '',
    });
  }, [props.show]);

  const setInput = (ind, value) =>
    setInputs(
      inputs.map((input, index) => {
        if (index === ind) {
          return value;
        }

        return input;
      })
    );

  const checkOtp = (inputs) => {
    let check = true;
    inputs.forEach((value, index) => {
      if (Number(value) !== index + 1) {
        check = false;
      }
    });

    setIsSuccess(check);
    return true;
  };

  const checkCardDetails = (cardDetails) => {
    if (
      cardDetails.cardOwner &&
      cardDetails.cardNumber &&
      cardDetails.month &&
      cardDetails.year &&
      cardDetails.cvv
    ) {
      setCurrentScreen(2);
    } else {
      setCurrentScreen(3);
      setIsSuccess(false);
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {currentScreen === 1 && `Card Payment`}
          {currentScreen === 2 && `Please Enter the 6 digit OTP`}
          {currentScreen === 3 && ``}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {currentScreen === 1 && (
          <Payment cardDetails={cardDetails} setCardDetails={setCardDetails} />
        )}
        {currentScreen === 2 && <OTP inputs={inputs} setInput={setInput} />}
        {currentScreen === 3 && <Complete isSuccess={isSuccess} />}
      </Modal.Body>
      <Modal.Footer>
        {currentScreen === 1 && (
          <Button
            onClick={() => checkCardDetails(cardDetails)}
            style={{ backgroundColor: '#90C2E7' }}
            className="text-dark border-light"
          >
            Make Payment for{' '}
            <span className="font-weight-bold">{props.selectedPrice}$</span>
          </Button>
        )}
        {currentScreen === 2 && (
          <Button
            onClick={() => {
              checkOtp(inputs);
              setCurrentScreen(3);
            }}
            style={{ backgroundColor: '#90C2E7' }}
            className="text-dark border-light"
          >
            Confirm OTP
          </Button>
        )}
        <Button
          onClick={props.onHide}
          style={{ backgroundColor: '#90C2E7' }}
          className="text-dark border-light"
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalPage;
