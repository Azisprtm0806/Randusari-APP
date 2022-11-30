import React, { Fragment } from 'react'

const DataRekap = (props) => {
  return (
    <Fragment>
      <tr>
        <td>{props.data.jenisKas}</td>
        <td>{props.data.ket}</td>
        <td>{props.data.date}</td>
        <td>{props.data.jumlah}</td>
      </tr>
    </Fragment>
  )
}

export default DataRekap