import styled from 'styled-components'
import BlogCard from '../organisms/BlogCard'
import NavBar from '../molecules/NavBar'
import { useNavigate } from 'react-router-dom'

const blogs = [...Array(10).keys()].map((val) => {
    return {
        id: val,
        image: `https://unsplash.it/160/${val+240}`,
        title: `article${val}`,
        abstract: "This is a blog about AI, data analysis, and IT techs. You can learn about the modern technologies from our blogs.",
        categories: ["Web development"],
        published_at: "2024-05-20T23:22:04Z",
        like: 14 + val
    }
})

const BlogList = () => {
    const navigate = useNavigate();
    const goToBlogDetail = (id) => {
        navigate(`/blog/${id}`);
    }

    return (
        <>
        <NavBar />
        <Container>
            <h2>記事一覧</h2>
            <BlogCardArea>
                {blogs.map((blog) => (
                    <>
                    <BlogCard key={blog.id} blog={blog} onClick={() => goToBlogDetail(blog.id)}/>
                    <div key={blog.id+1} style={{margin: "25px 0"}}></div>
                    </>
                ))}
            </BlogCardArea>
        </Container>
        </>
    )
}

export default BlogList;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
`

const BlogCardArea = styled.div`
    padding-top: 20px;
`