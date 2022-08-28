import Post from "../post/post";

export default function Feed({ posts }) {
    
    var rows = [];

    for(let i = 0; i < posts.length; i++) {
        rows.push(<Post post = {posts[i]} />)
    }

    return (
        <div>{rows}</div>
    )
}
