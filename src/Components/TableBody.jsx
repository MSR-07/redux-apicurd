 import React from 'react';
import TableRow from './TableRow';

const TableBody = ({isEdit,setIsEdit , user, handleInputChange, deleteUser, handleEdit }) => {
  // console.log(user,"nakr");
  return(
    <table className="table-fixed border border-collapse min-w-full  border-slate-400">
      <thead className='w-full py-1'>
        <tr className=' capitalize'>
          {/* <th className='border border-slate-400'>firstname</th>
          <th className='border border-slate-400'>lastname</th>
          <th className='border border-slate-400' >email</th> */}
          {/* <th>phone</th> */}
          <th className='border border-slate-400'>name</th>
          <th className='border border-slate-400'>email</th>
          <th className='border border-slate-400'>phone</th>
          <th className='border border-slate-400'>action</th>
        </tr>
      </thead>
      <tbody>
        {user?.map((user, index) => (
          <TableRow
            key={index}
            // item={user}
            index={index}
            user={user}
            handleInputChange={handleInputChange}
            deleteUser= {deleteUser}
            handleEdit={handleEdit}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TableBody;
