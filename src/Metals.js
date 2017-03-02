import React from 'react';
import Table from 'react-bootstrap/lib/Table';

const Metals = ({ metalsList, headers, handleMetalOnChange }) => {
  return (
    <Table bsClass="table table-hover">
      <thead>
        <tr className="success">
          {headers.map((head, key) => <th key={key}>{head}</th>)}
        </tr>
      </thead>
      {metalsList.map((metal, key) => {
        return (
          <tbody key={key}>
            <tr>
              <td>{metal.col1}</td>
              <td>{metal.col2}</td>
              <td>
                <input
                  type="text"
                  onChange={evt => {
                    handleMetalOnChange(evt.target.value, key);
                  }}
                  data-index={key}
                  value={metal.input}
                />
              </td>
              <td>
                {
                  !isNaN(metal.input) && metal.input !== ''
                    ? (metal.arg1 * (metal.input - metal.arg2))
                      .toFixed(3)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                    : 0
                }
              </td>
            </tr>
          </tbody>
        );
      })}
    </Table>
  );
};

export default Metals;
