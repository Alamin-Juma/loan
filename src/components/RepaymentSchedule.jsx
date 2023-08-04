

import React, { useState, useEffect } from "react";

const RepaymentSchedule = () => {
  const [loanRequest, setLoanRequest] = useState(null);

  useEffect(() => {
    const apiUrl = `https://okigwecreations.online/api/get_repayment_schedule`;
    const transactionId = "TRANS00120230801042657";
    
    // Make an API call to get the repayment breakdown for a loan request
    fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify({ transaction_id: transactionId }),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoanRequest(data);
      });
  }, []); 
  if (!loanRequest) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Repayment breakdown for loan request</h1>
      <ul>
        {loanRequest.repayment_schedule.map((repayment) => (
          <li key={repayment.id}>
            <strong>Date:</strong> {repayment.date}
            <br />
            <strong>Amount:</strong> {repayment.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepaymentSchedule;
