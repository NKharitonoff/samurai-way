import axios from "axios";

const instance = axios.create(
    {
        baseURL: `https://social-network.samuraijs.com/api/1.0/`,
        withCredentials: true,
        headers: {
            "API-KEY": "1693778f-087f-476d-9db1-78b05baeb7bd"
        }
    });

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    }
}

export const followAPI = {
    follow(id) {
        return instance.post(`follow/${id}`, {}).then(response => response.data );

    },
    unfollow(id) {
        return instance.delete(`follow/${id}`).then(response => response.data);
    }
}