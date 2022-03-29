import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import TradeRecord from '../components/TradeRecord';

export default function TransHistory(tradeInfo) {
  const [selectedAccount, setSelectedAccount] = useState(0);
  const [account, setAccount] = useState([]);
  const [tradeHistory, setTradeHistory] = useState([]);
  const [closeDetail, setCloseDetail] = useState(true);
 
  const remover = useRef();

  useEffect(() => {
    setAccount(tradeInfo.data);
    setTradeHistory(tradeInfo.data[selectedAccount].tradeHistory);
  }, [selectedAccount]);

  const holdingRecords = tradeHistory.map((history, index) => (
    <div key={index}>
      <TradeRecord
        stockName={history.stockName}
        tradeDate={history.tradeDate}
        totalPrice={history.totalPrice}
        tradeType={history.tradeType}
        tradeAmount={history.tradeAmount}
        unitPrice={history.unitPrice}
        tradePrice={history.tradePrice}
      />
    </div>
  ));

  let accountSelctor;
  function setAccountSelector() {
    let accountSelector = [];
    for (let i = 0; i < account.length; i++) {
      accountSelector.push(
        <option key={i} value={i}>
          {account[i].accountName}
        </option>
      );
    }
    return accountSelector;
  }
  accountSelctor = setAccountSelector();

  const selectingAccount = (e) => {
    // const details = document.querySelectorAll("details");
    setSelectedAccount(e.target.value);
    setCloseDetail(false);
    // details.forEach((detail) => {
    //     detail.removeAttribute("open");
    remover.current.removeAttribute("open");
    // });
  };
  return (
    <StyledHistoryContainer className="HistoryContainer">
      <StyledSelectBox className="accountSelector">
        <StyledSelect onChange={selectingAccount} value={selectedAccount}>
          {accountSelctor}
        </StyledSelect>
      </StyledSelectBox>
      <StyledScrollArea className="container">{holdingRecords}</StyledScrollArea>
    </StyledHistoryContainer>
  );
}

const StyledScrollArea = styled.div`
  overflow: scroll;
  height: 95%;
  margin-right: 5px;
  margin-left: 5px;
`;

const StyledHistoryContainer = styled.div`
  height: 85vh;
  margin: 0;
`;

const StyledSelectBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const StyledSelect = styled.select`
  background: none;
  color: white;
  border: none;
  font-size: 20px;
  margin: 10px 10px 0px 10px;

  & > option {
  }
`;
