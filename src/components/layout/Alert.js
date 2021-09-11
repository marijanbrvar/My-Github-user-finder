import React from 'react'

function Alert({alert}) {
  return (
    alert != null && (
    <div className={`alert alert-${alert.type}`}>
      <i className="fa fas-info-circle" /> {alert.msg}
    </div>
    )
  )
}

export default Alert
