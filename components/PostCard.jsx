"use client"

// RCC
function PostCard({ post }) {
  return (
    <div>
    <h3>{post.id}. {post.title}</h3>
    <p>{post.body}</p>
    <button onClick={() => {
        alert('funcionando!')
    }}>Click</button>
    </div>
  )
}

export default PostCard