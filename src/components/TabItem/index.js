import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const updateActiveTab = () => {
    updateActiveTabId(tabId)
  }

  const activeTabClassItem = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container">
      <button
        type="button"
    <!--In the above code, multiple class names can be added using template literals.-->
        className={`tab-btn ${activeTabClassItem}`}
        onClick={updateActiveTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
