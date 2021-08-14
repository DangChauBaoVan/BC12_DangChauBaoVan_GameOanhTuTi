import React, { Component } from "react";
import { connect } from "react-redux";
class KeoBuaBao extends Component {
  render() {
    const { pcSelect } = this.props;
    return (
      <div>
        <div className="speech-bubble">
          <img
            className="py-4"
            src={`./img/${pcSelect}.png`}
            width="50px"
            alt=""
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pcSelect: state.oanhTuTiReducer.pcSelect,
});
export default connect(mapStateToProps)(KeoBuaBao);
