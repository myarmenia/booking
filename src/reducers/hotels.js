import Hotels from '../hotels/hotels.json';

const initialState = { Hotels, searchTerm: '', gotHotel: []};

function reducer (state = initialState, action) {
    
    if (action.type === 'SEARCH_HOTEL' ) {
        let gotHotel;
        const { payload } = action;
        if(payload === ' '){
            gotHotel= () => 0.5 - Math.random();
            const mixed = state.Hotels.sort(() => 0.5 - Math.random());
            gotHotel = mixed.slice(0, 4);
        }else{ 
           gotHotel = state.Hotels.filter((item) => item.city.includes(payload) || item.name.includes(payload))
        }
        return {...state, searchTerm: payload, gotHotel }
    } 
    return state;
}

export default reducer;