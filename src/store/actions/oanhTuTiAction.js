import * as oanhTuTiConstants from '../constants/oanhTuTiConstants'

export const actChonKeoBuaBao = select =>({
    type: oanhTuTiConstants.CHON_KEOBUABAO,
    payload: select,
})

export const actPlay =()=>({
    type: oanhTuTiConstants.PLAY,
})