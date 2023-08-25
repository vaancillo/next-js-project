import PostCard from "../../components/PostCard"

async function loadPost() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    await new Promise((resolve) => setTimeout(resolve, 3000))

    return data
}

// RSC
async function PostPages() {
    const post = await loadPost()
    console.log(post)
  return (
    <div>
        {
            post.map((post) => (
                <PostCard post={post} key={post.id}/>
            ))}
    </div>
  )
}

export default PostPages