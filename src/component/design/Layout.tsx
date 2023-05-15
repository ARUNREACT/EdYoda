import '../design/Layout.css'
import React from 'react'

export function Aboutplan(props: any) {
  return (
    <div className="d-flex aboutplan mt-3">
      <div>
        <img src={props.img} alt="courses" />
      </div>
      <div className="d-flex">
        <p>{props.span1}</p>
        <p>{props.span2}</p>
        <p>{props.span3}</p>
      </div>
    </div>
  )
}
export function Plansprice(props: any) {
  return (
    <div
      className={props.class}
      id={props.id}
      onClick={props.onClick}
      data-plan={props.dataplan}
    >
      <div>
        <div className={props.headertext}>
          <p>{props.textp}</p>
        </div>
        <div className="d-flex">
          <div className="check-mark">
            <img src={props.img} alt="check-mark"></img>
          </div>

          <p className="month-text">{props.p}</p>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-end mb-1">
        <p className="total-1">
          Total <span>{props.span}</span>
        </p>
        <p className="total-2">
          <span>{props.span1}</span>/mo
        </p>
      </div>
    </div>
  )
}
