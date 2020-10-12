import Card, { CardActions, CardBlock, CardDivider, CardFooter, CardImage, CardTitle } from 'mineral-ui/Card';
import { ThemeProvider } from 'mineral-ui/themes';
import styles from '../styles/Home.module.css'

function HomePage({ posts }) {
    return (
        <ThemeProvider>
            <div className={styles.container}>
                <h1 className={styles.title}>
                    Welcome to Apify!
                </h1>
                <div>
                    {posts.map((post) => (
                        <Card onClick={event => console.log(event)}>
                            <CardTitle>{post.name}</CardTitle>
                            <CardBlock>{post.body}</CardBlock>
                            <CardFooter> {post.email}</CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </ThemeProvider>
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