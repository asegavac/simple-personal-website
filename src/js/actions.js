export const LOAD = 'LOAD'

export function load(data){
    return {
        type: LOAD,
        data
    }
}

export function query(action){
    $.ajax(document.location.origin + '/api/users/', {success: (data) => {
        if(data.length){
            return action(data[0]);
        }
    }});
}
