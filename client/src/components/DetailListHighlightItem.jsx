import React from 'react';

const DetailListHighlightItem = (props) => {
  return (
    <div>
      <h3>
      <li style={{listStyleType: "none"}}><i className="fas fa-car"></i> {props.engine}</li>
      <li style={{listStyleType: "none"}}><i className="fas fa-gas-pump"></i> {props.MPG} </li>
      <li style={{listStyleType: "none"}}><i className="fas fa-oil-can"></i> Mileage: {props.mileage} Miles </li>
      </h3>
    </div>
  )
}

export default DetailListHighlightItem;