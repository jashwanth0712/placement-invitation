import React from 'react';

const Table = ({ data }) => {
  return (
    <div className=" mb-20 overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className='text-xs text-gray-700 uppercase bg-gray-100  '>
          <tr>
            <th className=" px-4 py-2">Program</th>
            <th className="px-4 py-2">Number of Students</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className=" px-4 py-2">{item.name}</td>
              <td className=" px-4 py-2">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
