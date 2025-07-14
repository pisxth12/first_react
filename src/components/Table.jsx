import React from 'react'

const Table = (props) => {
  return (
    <div>
        <table>
            <tr>
                <td>ID  :</td>
                <td>Name :</td>
                <td>Gender :</td>
            </tr>
            <tr>
                <th>{props.id}</th>
                <th>{props.name}</th>
                <th>{props.gender}</th>
            </tr>
        </table>
    </div>
  )
}

export default Table
