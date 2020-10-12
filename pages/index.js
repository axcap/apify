function HomePage({ posts }) {
    return (
        <div>
            <div>Welcome to Next.js!</div>
            <ul>
            {posts.map((post) => (
                <li>{post.body}</li>
            ))}
            </ul>
        </div>
      )
  }


// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('https://jsonplaceholder.typicode.com/comments')
    const posts = await res.json()
  
    // Pass data to the page via props
    return { props: { posts } }
  }

export default HomePage