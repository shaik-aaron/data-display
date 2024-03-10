import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [displayArray, setDisplayArray] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/data")
      .then((res) => res.json())
      .then((data) => {
        setDisplayArray(data);
      });
  }, []);

  return (
    <>
      <div className="table-container">
        <table cellSpacing={0} style={{ width: "100%" }}>
          <tr className="heading-row">
            <th className="left">User ID</th>
            <th className="left">
              <div style={{ display: "flex", gap: 4 }}>
                <p>Full Name</p>
              </div>
            </th>
            <th className="right">Age</th>
            <th className="right">
              <div
                style={{
                  display: "flex",
                  gap: 4,
                  justifyContent: "flex-end",
                }}
              >
                <p>DOB</p>
              </div>
            </th>
          </tr>
          {displayArray.map((object) => {
            console.log(typeof object?.dob);
            return (
              <tr className="data-row">
                <td className="left order-id">{object?.ID}</td>
                <td className="left others">{object?.name}</td>
                <td className="right others">{object?.age}</td>
                <td className="right others">{object?.dob}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default App;
