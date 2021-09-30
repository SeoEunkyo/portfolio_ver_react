import React, { Component } from "react";


class Whats extends Component {
  render() {
    // if (this.props.sharedBasicInfo) {
    //   var profilepic = "images/" + this.props.sharedBasicInfo.image;
    // }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.whatido;
    }
    if ( this.props.resumeWhats){
      var whats = this.props.resumeWhats.map(function (whats, i) {
        return (
          <div className="col-md-4">
            <span
              className="iconify"
              data-icon={whats.iclass}
              data-inline="false"
              style={{
                height: "100%",
                fontSize: 45,
                marginLeft: "10px",
                marginRight: "15px",
                color: "#353239",
              }}></span>
            <span className="wave"> {whats.title}  </span>
            <br />
            <br />
            {whats.description}
  
          </div>
        );
      });

    }


    return (
      <section id="whatido">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            {whats}
          </div>
        </div>
      </section>
    );
  }
}

export default Whats;
