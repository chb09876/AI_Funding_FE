import styled from 'styled-components';
import { useState, useEffect } from 'react';
import AccountLineChart from './AccountLineChart';
import axios from 'axios';
import ErrorPage from '../../../common/ErrorPage';
import Loading from '../../../common/Loading';

const useAccounts = () => {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_API}/api/profit-compare`, {
        customer_info_id: 1,
        login_type: '00',
      })
      .then((response) => {
        setAccounts(response.data.accounts);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }, []);

  return { accounts, loading, error };
};

export default function CompareProfit() {
  const { accounts, loading, error } = useAccounts();

  if (error === true) {
    return <ErrorPage msg="인터넷 연결을 확인해주세요!" />;
  }
  if (loading === true) {
    return <Loading />;
  }

  // fetch daily profit data about all account

  // get longest label(xAxis) of accounts
  const labels = ((accounts) => {
    let longestLabel = [];
    if (!!!accounts) {
      return longestLabel;
    }
    accounts.foreach((account) => {
      if (account.profits.length > longestLabel.length) {
        longestLabel = Object.keys(account.profits);
      }
    });
    return longestLabel;
  })();

  return (
    <>
      <ChartWrapper>
        {accounts.length !== 0 ? <AccountLineChart labels={labels} dataset={accounts} /> : <div />}
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
