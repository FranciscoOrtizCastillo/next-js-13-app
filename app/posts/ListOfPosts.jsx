import { LikeButton } from "./LikeButton"
import Link from "next/link"

const fetchPosts = () => {

    console.log('Fetchings posts ........')

    // Antiguo getStaticProps en Next.js 12
    // -> return fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())

    // getServerSideProps en Next.js 12
    // -> return fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' }).then(res => res.json())
    
    // Incremental static regeneration
    // Cada 10 seg se recuperan los datos, se vuelve a generar el html static por el server
    return fetch('https://jsonplaceholder.typicode.com/posts', { next: {revalidate : 60}})
        .then(res => res.json())
}

// React Server Component (Se renderiza en el Server)

export async function ListOfPosts() {

    const posts = await fetchPosts()

    return (
        <>
            {posts.map(post => (
                <article key = {post.id}>
                    <Link href='/posts/[id]' as={ `/posts/${post.id}` }>
                        <h2 style={{color:'#09f'}}>{post.title}</h2>
                        <p>{post.body}</p>
                        <LikeButton id={post.id}/>
                    </Link>
                </article>
            ))}
        </>
    )
}