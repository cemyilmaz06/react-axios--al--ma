import React, { useState } from 'react'
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import EditBilgi from './EditBilgi';

const BilgiList = ({tutorials,deleteBilgi, putBilgi}) => {
    const [editItem, setEditItem] = useState("")
  return (
    <div className="container mt-4">
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#id</th>
          <th scope="col">Title</th>
          <th scope="col">Description</th>
          <th scope="col" className="text-center">
            Edit
          </th>
        </tr>
      </thead>
      <tbody>
       {tutorials.map(({id,title,description})=>(
        <tr key={id} >
            <th>{id}</th>
            <td>{title} </td>
            <td>{description} </td>
            <td className="text-center ">
              <AiFillDelete
                type="button"
                size={22}
                className="text-danger cursor-pointer"
                onClick={()=>deleteBilgi(id)}
              />

              <FaEdit
                data-bs-toggle="modal"
                data-bs-target="#editModal"
                size={20}
                type="button"
                className="me-2 text-warning cursor-pointer"
                onClick={()=>setEditItem({title,description,id})} 
               
              />
            </td>
          </tr>
       ))}
          
      <EditBilgi editItem={editItem} setEditItem={setEditItem} putBilgi={putBilgi} />
      </tbody>
    </table>
    
  </div>
  )
}

export default BilgiList
