

import { ListOfPosts } from "./ListOfPosts"

// React Server Component (Se renderiza en el Server)

export default function PostsPage() {

    return (
        <section>
            <h1>Posts</h1>
            <ListOfPosts/>
        </section>

    )
}