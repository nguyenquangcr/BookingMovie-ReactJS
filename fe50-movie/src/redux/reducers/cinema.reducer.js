const initalState = {
    listCinema: [
    ],
    listDetailCinema: [
    ],
    maCumRap: "",
    maCumRapFirst: "",
    isValid: true,
    isValidCinema: false,
}

export const cinemaReducer = (state=initalState , action) =>{
    let { type, payload} = action;
    switch (type) {
        case 'GET_CINEMA_lIST_SUCCESS':
            return {...state,listCinema:payload};
        case 'GET_CINEMA_DETAIL_SUCCESS':
            return {...state,listDetailCinema:payload}
        default:
            return state;
    }
}