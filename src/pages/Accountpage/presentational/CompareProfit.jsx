import styled from 'styled-components';
import { useState, useEffect } from 'react';
import AccountLineChart from './AccountLineChart';
import axios from 'axios';

export default function CompareProfit() {
  const [accountList, setAccountList] = useState(null);

  // fetch daily profit data about all account
  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_API}/api/profit-compare`, {
        customer_info_id: 1,
        login_type: '00',
      })
      .then((response) => {
        setAccountList(response.data.accounts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // get longest label(xAxis) of accounts
  const labels = ((accountList) => {
    let longestLabel = [];
    if (!!!accountList) {
      return longestLabel;
    }
    accountList.foreach((account) => {
      if (account.profits.length > longestLabel.length) {
        longestLabel = Object.keys(account.profits);
      }
    });
    return longestLabel;
  })();

  return (
    <>
      <ChartWrapper>
        {accountList ? <AccountLineChart labels={labels} dataset={accountList} /> : <div />}
      </ChartWrapper>
    </>
  );
}

const ChartWrapper = styled.div`
  border: 2px solid #b8a88e;
  border-radius: 15px;
  height: calc(100% - 80px);
  margin: 10px;
`;
