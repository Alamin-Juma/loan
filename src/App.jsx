import './App.scss'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { RequestLoanComponent, GetLoanRequestsComponent, RepaymentSchedule, Navbar } from './components';

function App() {
  return (
  
    <Router>
        <Navbar/>
      <Routes>
        <Route exact path="/" element={<RequestLoanComponent />} />
        <Route path="/loan-requests" element={<GetLoanRequestsComponent/>} />
        <Route path="/repayment-schedule/:loanRequestId" element={<RepaymentSchedule/>} />
      </Routes>
    </Router>
  );
}

export default App;

