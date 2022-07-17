import axios from "axios";

export let getId = async () => {
    let dataSearch = {
        start: 0,
        length: 5,
        keyword: ""
    }

    var config = {
        method: 'post',
        url: 'http://54.150.115.104:8080/api/post/search',
        headers: {
            'Content-Type': 'application/json',
        },
        data: dataSearch
    };

    let response = await axios(config)
    let posts = response.data.data

    return posts.map((post) => {
        return {
            params: {
                id: post.id.toString(),
            },
        }
    });

}
