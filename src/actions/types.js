export const BEING_GET_DATA = 'BEING_GET_DATA';
export const SUCCESS_GET_DATA = 'SUCESS_GET_DATA';
export const ERROR_GET_DATA = 'ERROR_GET_DATA';

export const fetchUserBeing = () =>({
   type:  BEING_GET_DATA
});


export const fetchUserSuccess = users =>({
   type:  SUCCESS_GET_DATA,
    payload: { users }
});

export const fetchUserError = error=>({
    type:  ERROR_GET_DATA,
    payload: { error }
});