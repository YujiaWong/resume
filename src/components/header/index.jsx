import React from "react";

import "./index.scss";

export default function Header() {
  return (
    <div className="header">
      <div className="left">
        <img src="/pics/head.jpg" width={"60px"} className="pic" />
        <span>INFOMATION</span>
      </div>
      <div className="right">
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          CONTACT ME
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div
              className="modal-content"
              style={{
                background:
                  "linear-gradient(45deg,rgb(217, 217, 217),rgb(255, 255, 255))",
                boxShadow: "0 0 10px 5px rgb(93, 93, 93)",
              }}
            >
              <div
                className="modal-body"
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                TEL: +1(408)-382-9900 <br />
                Email: wyujia@umich.edu
              </div>
              <div className="modal-footer" style={{ border: "none" }}>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  style={{ color: "rgb(246,9,81)", width: "80PX" }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
