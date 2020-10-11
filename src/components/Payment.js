import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoffee,
  faCreditCard,
  faInfoCircle,
  faQuestion,
} from '@fortawesome/free-solid-svg-icons';

const Payment = ({ cardDetails, setCardDetails }) => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="formGroupExampleInput">Card Owner</label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="Card Owner Name"
          value={cardDetails.cardOwner}
          onChange={(e) =>
            setCardDetails({ ...cardDetails, cardOwner: e.target.value })
          }
        />
      </div>
      <div className="form-group">
        <label htmlFor="formGroupExampleInput2">Card Number</label>
        <div className="input-group">
          {' '}
          <input
            type="text"
            name="cardNumber"
            placeholder="Valid card number"
            className="form-control "
            required
            maxLength={16}
            value={cardDetails.cardNumber}
            onChange={(e) =>
              setCardDetails({ ...cardDetails, cardNumber: e.target.value })
            }
          />
          <div className="input-group-append">
            <span className="input-group-text text-muted">
              <FontAwesomeIcon icon={faCreditCard} />{' '}
            </span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-8">
          <div className="form-group">
            {' '}
            <label>
              <span className="hidden-xs">
                <h6>Expiration Date</h6>
              </span>
            </label>
            <div className="input-group">
              {' '}
              <input
                type="number"
                placeholder="MM"
                className="form-control"
                required
                maxLength={2}
                value={cardDetails.month}
                onChange={(e) =>
                  setCardDetails({ ...cardDetails, month: e.target.value })
                }
              />{' '}
              <input
                type="number"
                placeholder="YY"
                className="form-control"
                required
                maxLength={2}
                value={cardDetails.year}
                onChange={(e) =>
                  setCardDetails({ ...cardDetails, year: e.target.value })
                }
              />{' '}
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="form-group mb-4">
            {' '}
            <label
              data-toggle="tooltip"
              title="Three digit CV code on the back of your card"
            >
              <h6>
                CVV <FontAwesomeIcon icon={faInfoCircle} />
              </h6>{' '}
            </label>{' '}
            <input
              type="text"
              required
              className="form-control"
              maxLength={3}
              value={cardDetails.cvv}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, cvv: e.target.value })
              }
            />{' '}
          </div>
        </div>
      </div>
    </form>
  );
};

export default Payment;
