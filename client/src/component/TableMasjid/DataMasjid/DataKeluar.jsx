import React, { Fragment } from 'react'
import { BsFillTrashFill, BsPencilSquare } from "react-icons/bs";
import { Link } from 'react-router-dom'

const DataKeluar = (props) => {
  return (
    <Fragment>
      <tr>
        <td>{props.data.ket}</td>
        <td>{props.data.date}</td>
        <td>{props.data.jumlah}</td>
        <td>
        <i className='hapus' onClick={() => props.delete(props.data._id)}><BsFillTrashFill /></i>
        <Link to={`/edit-kas-keluar/${props.data._id}`}><i className='edit'><BsPencilSquare /></i></Link>
      </td>
      </tr>
    </Fragment>
  )
}

export default DataKeluar