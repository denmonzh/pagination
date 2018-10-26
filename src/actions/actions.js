import {fetchUserBeing, fetchUserSuccess, fetchUserError} from "./types";



export const getData = () => dispatch=>{
    dispatch(fetchUserBeing());
    fetch('/json/users.json')
        .then(handleErrors)
        .then(res=>res.json())
        .then(data=> {
            dispatch(fetchUserSuccess(data.users));
            return data.users;
        })
        .catch(error => dispatch(fetchUserError(error)))
};

function handleErrors(response) {
    if(!response.ok){
        throw Error (response.statusText);
    }
    return response
}

