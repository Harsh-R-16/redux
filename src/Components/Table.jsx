import React from "react";
import { v4 as uuid } from "uuid";

export default function Table() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost:3000/cities")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  };

  const deleteData = (e) => {
    fetch(`http://localhost:3000/cities/${e.target.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        fetchData();
        console.log(res);
      });
  };
  const editData = (e) => {
    fetch(`http://localhost:3000/cities/${e.target.id}`, {
      method: "UPDATE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ country: "India", city: "Delhi", id: uuid() }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        fetchData();
      });
  };

  return (
    <main id="table">
      <h1>Country and City Table</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Country</th>
            <th>City</th>
            <th>Population</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ country, city, id }, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{country}</td>
              <td>{city ? city : "No City"}</td>
              <td>Population</td>
              <td onClick={editData} id={id}>
                Edit
              </td>
              <td onClick={deleteData} id={id}>
                Delete
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
