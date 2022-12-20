const mock_users = [
  {
    uid: 'kakao12345',
    username: 'hacho',
    socialType: 'kakao',
    email: 'asd@naver.com',
    createdAt: '2022-01-12',
  },
];

const mock_home = {
  nickname: 'hacho',
  accounts: [
    {
      nickname: '고점에풀매수',
      balance: 2500000,
      createAt: '2022-02-03',
      todayIncome: 9.24,
      todayProfit: 4000,
      totalIncome: -9.1,
      totalProfit: -353000,
      stocks: [
        {
          itemName: '삼성전자',
          price: 59000,
          profit: 10,
          percent_by_account: 24,
        },
        {
          itemName: '카카오',
          price: 69000,
          profit: -20.2,
          percent_by_account: 10,
        },
        {
          itemName: '하이닉스',
          price: 78400,
          profit: 10,
          percent_by_account: 30,
        },
        {
          itemName: '안랩',
          price: 89000,
          profit: -20.2,
          percent_by_account: 36,
        },
      ],
    },
  ],
};

const mock_ai_page = {
  currentStock: [
    {
      accountName: '고점에풀매수',
      stock: [
        {
          stockName: '삼성전자',
          currentPrice: 59000,
          stockPriceChange: 800,
          stockRateChange: 1.2,
          stockChange: 'up',
          stockDetail: [
            {
              endPrice: 58000,
              createAt: '20220222',
            },
            {
              endPrice: 59000,
              createAt: '20220223',
            },
            {
              endPrice: 54000,
              createAt: '20220224',
            },
            {
              endPrice: 55000,
              createAt: '20220225',
            },
            {
              endPrice: 59000,
              createAt: '20220226',
            },
          ],
        },
        {
          stockName: '카카오',
          currentPrice: 69000,
          stockPriceChange: -2200,
          stockRateChange: -3.2,
          stockChange: 'down',
          stockDetail: [
            {
              endPrice: 64000,
              createAt: '20220222',
            },
            {
              endPrice: 64300,
              createAt: '20220223',
            },
            {
              endPrice: 63800,
              createAt: '20220224',
            },
            {
              endPrice: 64600,
              createAt: '20220225',
            },
            {
              endPrice: 68000,
              createAt: '20220226',
            },
            {
              endPrice: 69000,
              createAt: '20220227',
            },
          ],
        },
      ],
    },
  ],
  tradeHistory: [
    {
      accountName: '고점에풀매수',
      tradeHistory: [
        {
          stockName: '하이닉스',
          tradeDate: '20220311',
          totalPrice: 78400 * 10,
          tradeType: '매수',
          tradeAmount: 10,
          unitPrice: 78400,
          tradePrice: 78400,
        },
        {
          stockName: '안랩',
          tradeDate: '20220311',
          totalPrice: 89000 * 10,
          tradeType: '매수',
          tradeAmount: 10,
          unitPrice: 89000,
          tradePrice: 89000,
        },
        {
          stockName: '삼성전자',
          tradeDate: '20220222',
          totalPrice: 59000 * 10,
          tradeType: '매수',
          tradeAmount: 10,
          unitPrice: 59000,
          tradePrice: 59000,
        },
        {
          stockName: '카카오',
          tradeDate: '20220222',
          totalPrice: 69000 * 10,
          tradeType: '매수',
          tradeAmount: 10,
          unitPrice: 69000,
          tradePrice: 69000,
        },

        {
          stockName: '삼성전자',
          tradeDate: '20220122',
          totalPrice: 67000 * 20,
          tradeType: '매도',
          tradeAmount: 20,
          unitPrice: 67000,
          tradePrice: 67000,
        },
        {
          stockName: '삼성전자',
          tradeDate: '20220110',
          totalPrice: 69000 * 20,
          tradeType: '매수',
          tradeAmount: 20,
          unitPrice: 69000,
          tradePrice: 69000,
        },
      ],
    },
  ],
};

const mock_check_profit = {
  accountNumber: 1,
  account: [
    {
      accountName: '고점에풀매수',
      todayTotalBalance: 2500000,
      totalProfitPersent: -0.2,
      totalProfitWon: 20000,
      todayProfitWon: -4500,
      todayProfitPersent: -1.2,
      profitDetail: [
        {
          createAtProfitPersent: 20,
          createAtProfitWon: 3000,
          createAt: '2022-02-03',
        },
        {
          createAtProfitPersent: 12,
          createAtProfitWon: -1000,
          createAt: '2022-02-05',
        },
        {
          createAtProfitPersent: 19,
          createAtProfitWon: 2400,
          createAt: '2022-02-08',
        },
      ],
      createAt: '2022-03-04',
      stockList: [
        {
          stockName: '삼성전자',
          stockPercent: 24,
        },
        {
          stockName: '카카오',
          stockPercent: 10,
        },
        {
          stockName: '하이닉스',
          stockPercent: 30,
        },
        {
          stockName: '안랩',
          stockPercent: 36,
        },
      ],
    },
  ],
};

const mock_profit_compare = {
  accounts: [
    {
      aiType: 1,
      nickname: '고점에풀매수',
      accountNumber: '12345678',
      profits: [
        {
          date: '2022-02-03',
          profit: 2.1,
        },
        {
          date: '2022-02-04',
          profit: 1.6,
        },
        {
          date: '2022-02-05',
          profit: 0.2,
        },
        {
          date: '2022-02-06',
          profit: -0.5,
        },
        {
          date: '2022-02-07',
          profit: -0.2,
        },
      ],
    },
  ],
};

export { mock_users, mock_home, mock_ai_page, mock_check_profit, mock_profit_compare };
