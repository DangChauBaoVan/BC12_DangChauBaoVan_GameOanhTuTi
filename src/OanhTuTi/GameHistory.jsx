import React, { Component } from "react";
import { connect } from "react-redux";

class GameHistory extends Component {
  renderTable = (history) => {
    
   return history.map((item, index) => {
        console.log(history)
      const { id, status, playAt } = item;
      return (
        <tr key={index}>
          <th scope="row">{id}</th>
          <td>{status}</td>
          <td>{playAt}</td>
        </tr>
      );
    });
  };
  renderGameHistory = () => {
    const { history } = this.props;
    if (history.length === 0) {
      return (
        <div className="centerItem">
          <h1>Bạn Chưa Chơi Game Nào!</h1>
        </div>
      );
    } else {
      return (
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Kết Quả</th>
              <th scope="col">Thời Gian</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTable(history)}
          </tbody>
        </table>
      );
    }
  };
  render() {
    return (
      <div>
        <div>{this.renderGameHistory()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  history: state.oanhTuTiReducer.history,
});

export default connect(mapStateToProps)(GameHistory);
