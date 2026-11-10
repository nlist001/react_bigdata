const baseUrl = "http://localhost:3000";


export const api = {
    getUsers: () => {
        return fetch(baseUrl + '/users').then(res => res.json())
    },

    getUser: (userId: string ) => {
        return fetch(baseUrl + '/users/' + userId).then(res => res.json())
    },

    gdeleteUser: (userId: string ) => {
        return fetch(baseUrl + '/users/' + userId, {
            method: 'DELETE'
        }).then(res => res.json())
    },
}