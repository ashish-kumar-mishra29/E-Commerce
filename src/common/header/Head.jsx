import React from "react";

const Head = () => {
  return (
    <div>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <i className="fa fa-phone"></i>
            <label htmlFor="">1234-1234-1234</label>
            <i className="fa fa-envelope"></i>
            <laabel>macrocosm@gmail.com</laabel>
          </div>
          <div className="right row RText">
            <label>Theme FAQ's</label>
            <label>Need Helps</label>
            <span>🏳️‍⚧️</span>
            <label htmlFor="">EN</label>
            <span>🏳️‍⚧️</span>
            <label htmlFor="">IND</label>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Head;
