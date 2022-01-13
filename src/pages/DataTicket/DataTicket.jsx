import React, { useState } from "react";
import "./DataTicket.css";
import { Table } from "reactstrap";
import { useNavigate } from "react-router";

const DataTicket = () => {
  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();

  const handleNav = () => {
    setVisible(!visible);
  };

  const handleClick = () => {
    navigate("/tiket/support");
  };

  return (
    <>
      {visible && (
        <>
          <div className="sidebar">
            <p className="closebtn" onClick={handleNav}>
              X
            </p>
            <div className="card">
              <h5>NAVIGASI</h5>
              <p>Tiket</p>
              <p onClick={handleClick}>Tiket Support</p>
            </div>
          </div>
        </>
      )}

      <div className="main">
        <nav>
          <button className="openbtn" onClick={handleNav}>
            ☰
          </button>
        </nav>
        <Table bordered>
          <thead>
            <tr>
              <th>No</th>
              <th>No Laporan</th>
              <th>Tgl Laporan</th>
              <th>Jenis</th>
              <th>Sub Jenis</th>
              <th>Petugas</th>
              <th>Permasalahan</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>1234</td>
              <td>13/01/2021</td>
              <td>lorem</td>
              <td>lorem</td>
              <td>lorem</td>
              <td>lorem</td>
              <td>lorem</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>1235</td>
              <td>13/01/2021</td>
              <td>lorem</td>
              <td>lorem</td>
              <td>lorem</td>
              <td>lorem</td>
              <td>lorem</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>1236</td>
              <td>13/01/2021</td>
              <td>lorem</td>
              <td>lorem</td>
              <td>lorem</td>
              <td>lorem</td>
              <td>lorem</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default DataTicket;
