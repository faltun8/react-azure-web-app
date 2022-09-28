import React from "react";

function List({ list, deleteOne, deleteAll }) {
  return (
    <div>
      <h2>Jobs list</h2> 
    <table>
      <thead><tr>
        <th>Name</th>
        <th>Job</th>
        <th>{list.length > 1 && <button className="delete" onClick={deleteAll}>Delete all</button>}</th>
        </tr>
      </thead>
      <tbody>
      {list.map((item) => {
        const id = item._id.toString();
        return (
          
          <tr key={id} id={id}>
            <td>{item.name}</td>
            <td>{item.job}</td>
            <td>
              <button className="delete" onClick={() => deleteOne(id)}>X</button>
            </td>
          </tr>
          
        );
      })}
      </tbody>
    </table>
    </div>
  );
}
export default List;
