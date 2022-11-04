import axios from "axios";


export default class PostServer {

    constructor() {
        this.config = {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }
    }

    static getAllPosts = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return response
    }

    static getPagePost = async (page) => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', { params: { _limit: 5, _page: page } })
        return response
    }

    static getDirectory = async () => {
        const response = await axios.get('http://xxxxxx2w.beget.tech/api/get_data')
        return response.data
    }

    static addUser = async (name, phone) => {
        const response = await axios.post('http://xxxxxx2w.beget.tech/api/add_data', { data: { name, phone } })
        return response.data
    }

    static delUser = async (id) => {
        const response = await axios.post('http://xxxxxx2w.beget.tech/api/del_data', { data: { id } })
        return response.data
    }

}