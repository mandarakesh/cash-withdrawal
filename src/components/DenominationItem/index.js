import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails

  const updateDenomination = () => {
    updateBalance(value)
  }
  return (
    <li className="denomination-item">
      <button
        onClick={updateDenomination}
        className="denomination-button"
        type="button"
      >
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
