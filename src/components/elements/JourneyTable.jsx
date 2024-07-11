// src/elements/JourneyTable.jsx
import React from 'react';

const JourneyTable = ({ data }) => {
  return (
    <table className="table-auto w-full">
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td className="pr-4 py-2 align-top">{row.year}</td>
            <td className="pr-4 py-2 align-top">{row.detail}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default JourneyTable;
