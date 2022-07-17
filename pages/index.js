import axios from "axios";
import { useRouter } from 'next/router'

export async function getStaticProps() {

    let dataSearch = {
        start: 0,
        length: 10,
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

    return {
        props: {
            posts
        },
    }
}

export default function Search({ posts }) {

    let router = useRouter()

    return <div>
        <table border={1}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Category ID</th>
                    <th>Option</th>
                </tr>
            </thead>
            <tbody>
                {
                    posts.map(({ id, title, categoryId }) => {
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{title}</td>
                                <td>{categoryId}</td>
                                <td>
                                    <button onClick={() => {
                                        router.push(`/posts/${id}`)
                                    }}>Detail</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
}