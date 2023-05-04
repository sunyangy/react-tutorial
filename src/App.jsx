import React from 'react';
import Start from './useContext/Start';
import Memo from './useMemo/Memo';
import UpdateData from './useContext/UpdateData';
import Login from './useContext/Login';
import MutipleContext from './useContext/mutipleContext';
import PullProvide from './useContext/PullProvide';
import NestedHeading from './useContext/NestedHeading';
import CalculateNumber from './useReducer/CalculateNumber';
import TwoReducer from './useReducer/TwoReducer';
export default function App() {
  return (
    <div>
      <TwoReducer></TwoReducer>
    </div>
  );
}
