import './App.scss'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { RequestLoanComponent, GetLoanRequestsComponent, RepaymentSchedule, NavBar } from './components';

function App() {
  return (
  
    <Router>
        <NavBar/>
      <Routes>
        <Route exact path="/" element={<RequestLoanComponent />} />
        <Route path="/loan-requests" element={<GetLoanRequestsComponent/>} />
        <Route path="/repayment-schedule/:loanRequestId" element={<RepaymentSchedule/>} />
      </Routes>
    </Router>
  );
}

export default App;

