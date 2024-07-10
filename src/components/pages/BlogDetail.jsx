import React, {useEffect, useState} from "react";
import {db} from "../../firebase";
import BlogPost from "./BlogPost";
import NavBar from "../molecules/NavBar";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";
import { Link, Element, animateScroll as scroll} from "react-scroll";
import styled from "styled-components";
import Footer from "../molecules/Footer";
import { FaHeart } from "react-icons/fa";

const BlogDetail = () => {
    const {id} = useParams();
    const [blog, setBlog] = useState(null);
    const [liked, setLiked] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBlogPost = async () => {
            const blogDoc = doc(db, "blogs", id);
            const blogSnapshot = await getDoc(blogDoc);
            if (blogSnapshot.exists()) {
                setBlog(blogSnapshot.data());
            } else {
                console.log("No such document");
            }
        };
        fetchBlogPost();
    }, [id]);

    if (!blog) return <div>Loading...</div>;

    const formatDate = (timestamp) => {
        return format(timestamp.toDate(), "yyyy/MM/dd HH:mm:ss");
    }

    const handleLike = async (blogId) => {
        const newLikes = liked ? blog.likes - 1: blog.likes + 1;
        setLiked(!liked);
        setBlog({...blog, likes: newLikes});

        await updateLikeCount(blogId, newLikes);
    }

    return (
        <>
            <NavBar />
            <Container>
                <MainContent>
                    <BlogContent>
                        <BlogMeta>
                        <Button onClick={() => navigate("/blog")}>ブログ一覧へ</Button>
                        <TagContainer>
                            {blog.tags.map((tag, index) => (
                                <Tag key={index}>{tag}</Tag>
                            ))}
                        </TagContainer>
                        <div style={{display: "flex", margni: "2px", flexDirection: "row", alignItems: "space-between"}}>
                            <p style={{marginRight: "20px"}}><span style={{fontWeight: "bold"}}>投稿日: </span>{formatDate(blog.createdAt)}</p>
                            <p><span style={{fontWeight: "bold"}}>更新日: </span>{formatDate(blog.updatedAt)}</p>
                        </div>
                        <BlogTitle>{blog.title}</BlogTitle>
                        <img
                            src={blog.mainImage}
                            alt={blog.title}
                            style={{
                                width: "240px",
                                height: "180px",
                                objectFit: "cover"
                            }}
                        />
                        </BlogMeta>
                        <BlogPost content={blog.content} />
                    </BlogContent>
                    <Sidebar>
                        <Profile>
                            <h3>Atsushi Mizukami</h3>
                            <p>As a Data Scientist💻</p>
                        </Profile>
                        <ToCAtSidebar toc={blog.toc} />

                        <div style={{display: "flex", flexDirection: "row", alignItems: "center", marginLeft: "15px"}}>
                        <LikeButton onClick={() => handleLike(id)} liked={liked}>
                            <FaHeart />
                        </LikeButton>
                        {blog.likes}
                        </div>
                    </Sidebar>
                </MainContent>
            </Container>
        <Footer />
        </>
    )
}

export default BlogDetail;

const ToCAtSidebar = ({toc}) => {
    return (
        <TableOfContents>
            <ReactMarkdown
                children={toc}
                components={{
                    a: ({node, ...props}) => {
                        const targetId = props.href.replace("#", "");
                        return <Link to={targetId} smooth={true} duration={500} {...props} />;
                    }
                }}
            />
        </TableOfContents>
    )
}

const updateLikeCount = async (blogId, newLikes) => {
    try {
        const blogRef = doc(db, "blogs", blogId);
        await updateDoc(blogRef, {
            likes: newLikes
        });
    } catch (error) {
        console.error("Error updating like count: ", error);
    }
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    width: calc(100% - 300px);
`

const MainContent = styled.div`
    display: flex;
    width: 100%;
    margin-top: 30px;
`

const BlogContent = styled.div`
    flex: 1;
    padding: 20px;
    background-color: #f5f5f5;
    overflow-y: auto;
    width: calc(100% - 280px);
`

const Sidebar = styled.div`
    width: 250px;
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    margin-right: 15px;
    position: fixed;
    right: 0;
    top: 100px;
`

const Profile = styled.div`
    padding: 20px;
    border-bottom: 1px solid #90a4ae;
`

const Button = styled.button`
    background: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 4px;
    margin-bottom: 5px;
`

const TagContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
`

const Tag = styled.span`
    background-color: #ff0000;
    color: white;
    border-radius: 15px;
    padding: 5px 10px;
    margin: 5px;
`

const TableOfContents = styled.div`
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 8px;
    color: #ffffff;
    
`

const BlogMeta = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const BlogTitle = styled.h1`
    margin: 20px 0;
`

const LikeButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    color: ${props => (props.liked ? 'red' : 'grey')};
    font-size: 20px;
`
