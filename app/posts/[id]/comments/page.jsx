
import Image from "next/image"

const fetchComments = async (id) => {

    console.log('Fetching post ........') 

    //Simular un retarlo en la carga, para poner un loading
    await new Promise(resolve => setTimeout(resolve,2000))

    //throw new Error('Simular error en carga')

    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, { next: {revalidate : 60}})
        .then(res => res.json())
}

export default async function PostPage( {params}) {

    const { id } = params;

    const comments = await fetchComments(id)

    return (
        <ul style={{ fontSize:'10px', background:'#444'}}>
            {comments.map(comment => (
                <li key={comment.id}>
                    <Image width='50' height='50' alt={comment.name} src={`https://unavatar.io/${comment.email}`} />
                    <h4>{comment.name}</h4>
                    <small>{comment.body}</small>
                </li>
            ))}
        </ul>
    )
}