import React, { Component } from 'react';
import {connect} from 'react-redux'

class ThongTinGame extends Component {
    render() {
        const {soBanThang,soBanChoi} = this.props;
        return (
            <div>
                <h2 class="text-warning mt-4">I'm iron man, i love you 3000!!</h2>
                <h3 class="text-success">Số bàn thắng: <span class="text-warning">{soBanThang}</span> </h3>
                <h3 class="text-success">Số bàn chơi: <span class="text-warning">{soBanChoi}</span> </h3>
            </div>
        );
    }
}



const mapStateToProps = state => ({
    soBanThang: state.oanhTuTiReducer.soBanThang,
    soBanChoi: state.oanhTuTiReducer.soBanChoi,
})
export default connect(mapStateToProps)(ThongTinGame);