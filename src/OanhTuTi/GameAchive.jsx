import React, { Component } from "react";
import { connect } from "react-redux";

class GameAchive extends Component {
  render() {
    const { soBanThang, soBanChoi, soBanHoa, soBanThua, tiLeThang } =
      this.props;
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
          <div className="col-8 text-center mt-4">
              <h3 class="text-success">
                Số lần thắng: <span class="text-warning">{soBanThang}</span>{" "}
              </h3>
              <h3 class="text-success">
                Số lần thua: <span class="text-warning">{soBanThua}</span>{" "}
              </h3>
              <h3 class="text-success">
                Số lần hòa: <span class="text-warning">{soBanHoa}</span>{" "}
              </h3>
              <h3 class="text-success">
                Tỉ lệ thắng: <span class="text-warning">{tiLeThang}%</span>{" "}
              </h3>
              <h3 class="text-success">
                Số bàn chơi: <span class="text-warning">{soBanChoi}</span>{" "}
              </h3>
            </div>
            <div className="col-4">
            <img src="./img/player.png" width="200px" alt="Player" />
              <p className="text-danger">Iron Man</p>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  soBanThang: state.oanhTuTiReducer.soBanThang,
  soBanHoa: state.oanhTuTiReducer.soBanHoa,
  soBanThua: state.oanhTuTiReducer.soBanThua,
  tiLeThang: state.oanhTuTiReducer.tiLeThang,
  soBanChoi: state.oanhTuTiReducer.soBanChoi,
});
export default connect(mapStateToProps)(GameAchive);
