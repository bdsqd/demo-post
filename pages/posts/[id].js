import axios from "axios";
import Header from "../../components/header";
import { getId } from "../../posts/get-id";

export async function getStaticPaths() {
    const paths = await getId();

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    var config = {
        method: 'get',
        url: `http://54.150.115.104:8080/api/post/${params.id}`,
    };

    let response = await axios(config)

    return {
        props: {
            posts: response.data,
        },
    };
}

export default function Detail({ posts }) {
    return (
        <div>
            <Header />
            <h2>Title: {posts.title}</h2>
            <p>Description: {posts.description}</p>
            <p>Image:</p>
            <img src={`http://54.150.115.104:8080/image/${posts.images[0]}`} width={"500px"} />
            <p>Category ID: {posts.categoryId}</p>
            <p>Category Name: {posts.categoryName}</p>
            <p>Create By: {posts.createBy}</p>
            <p>Create Date: {posts.createdDate}</p>
        </div>
    )
}
