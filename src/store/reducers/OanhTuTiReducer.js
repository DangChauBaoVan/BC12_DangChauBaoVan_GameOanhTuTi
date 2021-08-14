import * as oanhTuTiConstants from '../constants/oanhTuTiConstants';


const initialState = {
    history: [
    ],
    id:0,
    playerSelect: 'keo',
    pcSelect: 'keo',
    imageSelect: './img/keo.png',
    soBanThang: 0,
    soBanThua: 0,
    soBanHoa: 0,
    tiLeThang: 0,
    soBanChoi: 0,
}

const OanhTuTiReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case oanhTuTiConstants.CHON_KEOBUABAO:
            return { ...state, imageSelect: `./img/${payload}.png`, playerSelect: payload };
        case oanhTuTiConstants.PLAY:
            state.soBanChoi += 1;

            const randomSelect = ['keo', 'bua', 'bao'];
            
            const gameHistory = {
                id:state.id,
                status: "",
                playAt: "",
            }
            const getCurrentDateTime = () => {
                const today = new Date();

                const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

                const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

                const dateTime = date + ' ' + time;
                return dateTime;
            }

            const randomNum = Math.floor(Math.random() * 3);

            state.pcSelect = randomSelect[randomNum];

            if ((state.playerSelect === 'keo' && state.pcSelect === 'bao') || (state.playerSelect === 'bua' && state.pcSelect === 'keo') || (state.playerSelect === 'bao' && state.pcSelect === 'bua')) {
                state.soBanThang += 1;
                state.id +=1;
                gameHistory.id = state.id ;
                gameHistory.status = "Thắng";
                gameHistory.playAt = getCurrentDateTime();

                

            } else if ((state.playerSelect === 'bua' && state.pcSelect === 'bua') || (state.playerSelect === 'keo' && state.pcSelect === 'keo') || (state.playerSelect === 'bao' && state.pcSelect === 'bao')) {
                state.soBanHoa += 1;
                state.id +=1;
                gameHistory.id = state.id;
                gameHistory.status = "Hòa";
                gameHistory.playAt = getCurrentDateTime();

                
            } else {
                state.soBanThua += 1;
                state.id +=1;
                gameHistory.id = state.id;
                gameHistory.status = "Thua";
                gameHistory.playAt = getCurrentDateTime();

                
            }

            const tlt = (state.soBanThang / state.soBanChoi) * 100;
        
            state.tiLeThang = Math.round(tlt * 100) / 100;
            
            state.history = [...state.history,gameHistory];

            return { ...state }


        default:
            return state;
    }
}

export default OanhTuTiReducer;