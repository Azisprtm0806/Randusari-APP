import React, { Fragment } from 'react'
import { BsFillTrashFill, BsPencilSquare } from "react-icons/bs";
import { Link } from 'react-router-dom';

const TablePddk = (props) => {
  return (
    <Fragment>
          <tr>
            <td>{props.data.nama}</td>
            <td>{props.data.tempat}. {props.data.tglLahir}</td>
            <td>+62{props.data.noHp}</td>
            <td>{props.data.status}</td>
            <td>
              <i className='hapus' onClick={() => props.delete(props.data._id)}><BsFillTrashFill /></i>
             <Link to={`/edit-penduduk/${props.data._id}`}><i className='edit'><BsPencilSquare /></i></Link>
            </td>
          </tr>
    </Fragment>
  )
}

export default TablePddk