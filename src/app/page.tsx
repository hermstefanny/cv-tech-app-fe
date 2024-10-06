export default async function Page() {
  let data = await fetch('http://localhost:8000/summaries/')
  let posts = await data.json()
  console.log(posts)
  return (
    <ul>
      {posts.map((post) => (
        <li key={post._id}>{post.title}{post.content}</li>
      ))}
    </ul>
  )
}