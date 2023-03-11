// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {item, getText} = props
  const {suggestion} = item

  const activeState = () => getText(suggestion)

  return (
    <li className="lists">
      <p className="suggestion">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
        onClick={activeState}
      />
    </li>
  )
}

export default SuggestionItem
