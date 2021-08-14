import React, { Component } from "react";
import KeoBuaBao from "./KeoBuaBao";
import ThongTinGame from "./ThongTinGame";
import { connect } from "react-redux";
import "./assets/Game.css";
import { actChonKeoBuaBao, actPlay } from "../store/actions/oanhTuTiAction";
import GameAchive from "./GameAchive";
import GameHistory from "./GameHistory";
class GameOanhTuTI extends Component {
  render() {
    const { imageSelected, chonKeoBuaBao, play } = this.props;

    return (
      <div className="game-container">
        <div class="container-fluid">
          <div className="row">
            <div className="col-5">
              <div className="speech-bubble">
                <img className="py-4" src={imageSelected} width="50px" alt="" />
              </div>
              <img src="./img/player.png" width="150px" alt="Player" />
              <p className="text-light">Iron Man</p>
              <div className="groupButton">
                <button onClick={() => chonKeoBuaBao("keo")}>
                  <img src="./img/keo.png" alt="" />
                </button>
                <button onClick={() => chonKeoBuaBao("bua")}>
                  <img src="./img/bua.png" alt="" />
                </button>
                <button onClick={() => chonKeoBuaBao("bao")}>
                  <img src="./img/bao.png" alt="" />
                </button>
              </div>
            </div>
            <div className="col-2">
              <ThongTinGame />
              <button
                className="btn btn-success text-light mt-4"
                onClick={() => play()}
              >
                Play Game
              </button>
              <div>
                {/* Large modal */}
                <button
                  type="button"
                  className="btn btn-primary mt-5"
                  data-toggle="modal"
                  data-target=".bd-example-modal-lg"
                >
                  ... More
                </button>
                <div
                  className="modal fade bd-example-modal-lg"
                  tabIndex={-1}
                  role="dialog"
                  aria-labelledby="myLargeModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div>
                        <div className="modal-header ">
                          <ul
                            className="nav nav-tabs"
                            id="myTab"
                            role="tablist"
                          >
                            <li className="nav-item">
                              <a
                                className="nav-link active"
                                id="home-tab"
                                data-toggle="tab"
                                href="#home"
                                role="tab"
                                aria-controls="home"
                                aria-selected="true"
                              >
                                <h5>Profile</h5>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                id="profile-tab"
                                data-toggle="tab"
                                href="#profile"
                                role="tab"
                                aria-controls="profile"
                                aria-selected="false"
                              >
                                <h5>History</h5>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="modal-body ">
                          <div className="tab-content" id="myTabContent">
                            <div
                              className="tab-pane fade show active"
                              id="home"
                              role="tabpanel"
                              aria-labelledby="home-tab"
                            >
                              <GameAchive />
                            </div>
                            <div
                              className="tab-pane fade"
                              id="profile"
                              role="tabpanel"
                              aria-labelledby="profile-tab"
                            >
                              <GameHistory/>
                            </div>
                            
                          </div>

                          
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-danger"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-5">
              <KeoBuaBao />
              <img
                src="./img/playerComputer.png"
                width="150px"
                alt="Computer"
              />
              <p className="text-light">Thanos</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  playerSelected: state.oanhTuTiReducer.playerSelect,
  imageSelected: state.oanhTuTiReducer.imageSelect,
});
const mapDispatchToProps = (dispatch) => ({
  chonKeoBuaBao: (select) => {
    dispatch(actChonKeoBuaBao(select));
  },

  play: () => {
    dispatch(actPlay());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(GameOanhTuTI);
