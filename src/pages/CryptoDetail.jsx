import CoinDetail from "../components/CoinDetail"
import HistoryChart from "../components/HistoryChart"

const CryptoDetail = () => {
  return (
    <div className="wrapper-container mt-10">
      <HistoryChart />
      <CoinDetail />
      {/* Coin */}
    </div>
  )
}

export default CryptoDetail