import React, { useState, useEffect } from "react";

const GetLoanRequestsComponent = () => {
  const [loanRequests, setLoanRequests] = useState([]);

  useEffect(() => {
    const apiUrl = `https://okigwecreations.online/api/get_all_loan_request`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setLoanRequests(data);
      });
  }, []);

  return (
    <div>
      <h1>List of all loan requests</h1>
      <ul>
        {loanRequests.map((loanRequest) => (
          <li key={loanRequest.id}>
            {loanRequest.full_name} - {loanRequest.loan_amount} - {loanRequest.repayment_duration}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetLoanRequestsComponent;
