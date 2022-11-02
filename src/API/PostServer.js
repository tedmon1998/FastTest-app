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
}