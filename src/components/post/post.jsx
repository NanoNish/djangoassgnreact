export default function Post({ post }) {
    return (
        <article>
            <h2><a href="">{ post.title }</a></h2>
            <time>published: { post.created_date }</time>
            <p>{post.text}</p>
            <p></p>
        </article>
    
    )
}