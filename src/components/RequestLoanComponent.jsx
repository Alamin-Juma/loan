import  { useState } from 'react';

const RequestLoanComponent = () => {
  const [formData, setFormData] = useState({
    action: '',
    full_name: '',
    loan_amount: '',
    repayment_duration: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const apiUrl = 'https://okigwecreations.online/api/';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Loan request successful:', responseData);
      } else {
        console.error('Error requesting loan:', response.status);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="action"
        placeholder="Request for loan"
        value={formData.action}
        onChange={handleChange}
      />
       <input
        type="text"
        name="full_name"
        placeholder="Full name"
        value={formData.full_name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="loan_amount"
        placeholder="Loan amount"
        value={formData.loan_amount}
        onChange={handleChange}
      />
      <input
        type="text"
        name="repayment_duration"
        placeholder="Repayment duration"
        value={formData.repayment_duration}
        onChange={handleChange}
      />
      <button type="submit">Request loan</button>
    </form>
  );
};

export default RequestLoanComponent;
