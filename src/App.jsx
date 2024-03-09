import "./App.css";
import { useEffect, useState } from "react";
import generateData from "../generateData";

function App() {
  const [displayArray, setDisplayArray] = useState([]);
  const [flag, setFlag] = useState(false);

  async function getRandomData() {
    const res = await generateData();
    setDisplayArray(res);
  }

  useEffect(() => {
    getRandomData();
  }, [flag]);

  console.log(displayArray);

  return (
    <>
      <div className="table-container">
        <div className="search-sort">
          <div
            onClick={() => setFlag((prev) => !prev)}
            className="sort"
            role="button"
          >
            <p>Generate Records</p>
          </div>
        </div>
        <table cellSpacing={0} style={{ width: "100%" }}>
          <tr className="heading-row">
            <th className="left">ID</th>
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
            return (
              <tr className="data-row">
                <td className="left order-id">{object.id}</td>
                <td className="left others">{object.name}</td>
                <td className="right others">{object.age}</td>
                <td className="right others">
                  {object.DOB.toLocaleDateString("en-IN")}
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default App;
