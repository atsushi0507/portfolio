import styled from "styled-components";
import NavBar from "../molecules/NavBar";
import { useParams } from "react-router-dom";
import blog from "../../public/blog/bitcoin_app.json";

const BlogDetail = () => {
    const {id} = useParams();
    return (
        <>
            <NavBar />
            <BlogContainer>
                <BlogHeader>
                    <img src={blog.cover_image} alt={blog.title} />
                    <BlogTitle>{blog.title}</BlogTitle>
                    <BlogAuthor>
                        <a href={blog.author.profile}>{blog.author.name}</a> | <a href={blog.author.twitter}>Twitter</a>
                    </BlogAuthor>
                </BlogHeader>
                <BlogContent>
                    {blog.content.map((section, index) => (
                        <BlogSection key={index}>
                            <BlogSectionHeading>{section.heading}</BlogSectionHeading>
                            <p>{section.text}</p>
                        </BlogSection>
                    ))}
                </BlogContent>
            </BlogContainer>
        </>
    )
}

export default BlogDetail;

const BlogContainer = styled.div`
    padding: 20px;
`

const BlogHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const BlogTitle = styled.h1`
    margin: 20px 0;
`

const BlogAuthor = styled.div`
    font-size: 0.9em;
    color: #555;
`

const BlogContent = styled.div`
    margin-bottom: 40px;
`

const BlogSection = styled.div`
    margin-bottom: 40px;
`

const BlogSectionHeading = styled.h2`
    margin-bottom: 10px;
`