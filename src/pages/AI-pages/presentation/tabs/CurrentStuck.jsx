import StuckInfo from "../components/StuckInfo";

export default function CurrentStuck() {
  return (
    <div className="container">
      <StuckInfo
        StuckName="카카오"
        CurrentPrice="112,500"
        PriceFluc="1,500"
        RateFluc="-1.32%"
        Fluc="down"
      />
      <StuckInfo
        StuckName="삼성전자"
        CurrentPrice="80,200"
        PriceFluc="7,000"
        RateFluc="+9.28%"
        Fluc="up"
      />
      <StuckInfo
        StuckName="광운대"
        CurrentPrice="40,200"
        PriceFluc="0"
        RateFluc="=0.00%"
        Fluc="none"
      />
    </div>
  );
}
