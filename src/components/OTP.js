import React from 'react';

const OTP = ({ inputs, setInput }) => {
  const inputText = (index) => (
    <div class="col">
      <input
        type="text"
        class="form-control"
        value={inputs[index]}
        maxLength={1}
        onChange={(e) => setInput(index, e.target.value)}
        style={{ textAlign: 'center' }}
      />
    </div>
  );
  return (
    <form>
      <div class="form-row form-group">
        {Array.from(Array(6).keys()).map((v) => inputText(v))}
      </div>
    </form>
  );
};

export default OTP;
