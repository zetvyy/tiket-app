import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./TiketSupport.css";
import { Input, Button, Row, Col } from "reactstrap";

const TiketSuppport = () => {
  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();

  const handleNav = () => {
    setVisible(!visible);
  };

  const handleClick = () => {
    navigate("/home");
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
              <p onClick={handleClick}>Tiket</p>
              <p>Tiket Support</p>
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

        <h3>Tiket support</h3>

        <div className="card">
          <div className="header">Tiket, Penugasan Support CC</div>
          <div className="form">
            <h5>No. Laporan</h5>
            <Input type="text" style={{ width: "200px" }} />
            <h5>Tanggal Laporan</h5>
            <Input type="date" style={{ width: "200px" }} />
            <h5>Jenis gangguan</h5>
            <Input name="select" type="select" style={{ width: "200px" }}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Input>
            <h5>Sub Jenis gangguan</h5>
            <Input name="select" type="select" style={{ width: "200px" }}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Input>
          </div>
          <Row className="mt-5">
            <Col className="md-2">
              <Button style={{ width: "100px", marginRight: "10px", backgroundColor: "green" }}>Simpan</Button>
              <Button style={{ width: "100px" }}>Batal</Button>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default TiketSuppport;
