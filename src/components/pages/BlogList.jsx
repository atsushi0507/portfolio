import styled from 'styled-components'
// import BlogCard from '../organisms/BlogCard'
import NavBar from '../molecules/NavBar'
import { useNavigate } from 'react-router-dom'
import {collection, getDocs, orderBy, query} from "firebase/firestore";
import { db } from '../../firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import Footer from '../molecules/Footer';
import {FaHeart} from "react-icons/fa";

const BlogList = () => {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [filteredBlogs, setFilteredBlogs] = useState(blogs);
    const [currentPage, setCurrentPage] = useState(0);
    const [likes, setLikes] = useState(blogs.likes);
    const [liked, setLiked] = useState(false);
    const [likedBlogs, setLikedBlogs] = useState({});

    const articlesPerPage = 5;

    const indexOfLastArticle = (currentPage + 1) * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = filteredBlogs.slice(indexOfFirstArticle, indexOfLastArticle);

    const nextPage = () => {
        if (currentPage < Math.ceil(filteredBlogs.length / articlesPerPage) - 1) {
            setCurrentPage(currentPage + 1);
        }
    }

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleLike = async (blogId) => {
        const isLiked = likedBlogs[blogId];
        const newLikes = blogs.find(blog => blog.id === blogId).likes + (isLiked ? -1 : 1);

        setLikedBlogs({
            ...likedBlogs,
            [blogId]: !isLiked
        });

        await updateLikeCount(blogId, newLikes);
    };

    useEffect(() => {
        const fetchBlogs = async () => {
            const blogsCollection = collection(db, "blogs");
            const blogsQuery = query(blogsCollection, orderBy("createdAt", "desc"));
            const blogSnapshot = await getDocs(blogsQuery);
            const blogList = blogSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
            setBlogs(blogList);
        };
        fetchBlogs();
    }, []);

    const handleReadMore = (id) => {
        navigate(`/blog/${id}`);
    }

    const handleTagClick = (tag) => {
        setSelectedTags(prevSelectedTags => 
            prevSelectedTags.includes(tag)
            ? prevSelectedTags.filter(t => t !== tag)
            : [...prevSelectedTags, tag])
    };

    useEffect(() => {
        if (selectedTags.length > 0) {
            setFilteredBlogs(blogs.filter(blog => 
                selectedTags.every(tag => blog.tags.includes(tag))))
        } else {
            setFilteredBlogs(blogs);
        }
    }, [selectedTags, blogs]);

    return (
        <>
        <NavBar />
        <Container>
            <LeftSidebar>
                <h3>タグフィルター: </h3>
                {Array.from(new Set(blogs.flatMap(blog => blog.tags))).map((tag, index) => (
                    <TagButton
                        style={{backgroundColor: selectedTags.includes(tag) ? "#007BFF" : "#cfcfcf"}}
                        key={index}
                        onClick={() => handleTagClick(tag)}
                    >
                        {tag}
                    </TagButton>
                ))}
            </LeftSidebar>
            <MainArea>
            <h2>記事一覧</h2>
            
            <BlogCardArea>
                {currentArticles
                    .map((blog) => (
                    <BlogCard key={blog.id}>
                        <BlogImage
                            src={blog.mainImage}
                            alt={blog.title}
                        />
                        <BlogContentArea>
                            <h3 key={blog.id}>{blog.title}</h3>
                            <p>{blog.summary}</p>
                            <div style={{display: "flex", flexDirection: "row", alignItems: "space-between"}}>
                                <GoToDetailButton onClick={() => handleReadMore(blog.id)}>
                                    Read More
                                </GoToDetailButton>
                                <div style={{margin: "0 15px"}}>
                                    <LikeButton onClick={() => handleLike(blog.id)} liked={likedBlogs[blog.id]}>
                                        <FaHeart />
                                    </LikeButton>
                                    {blog.likes + (likedBlogs[blog.id] ? 1 : 0)}
                                </div>
                            </div>
                        </BlogContentArea>
                    </BlogCard>
                ))}
            </BlogCardArea>

            <div style={{display: "flex", alignItems: "space-between", padding: "4px"}}>
            <PageNationButton onClick={prevPage} disabled={currentPage === 0}
                style={{backgroundColor: currentPage !==0 ? "#007BFF" : "#cfcfcf"}}
            >
                前へ
            </PageNationButton>
            <PageNationButton onClick={nextPage} disabled={indexOfLastArticle >= filteredBlogs.length}
                style={{backgroundColor: indexOfLastArticle < filteredBlogs.length ? "#007BFF" : "#cfcfcf"}}
            >
                次へ
            </PageNationButton>
            </div>

            </MainArea>
            <RightSidebar>
                {/* TO BE FILLED */}
            </RightSidebar>

        </Container>
        <Footer />
        </>
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

export default BlogList;


const Container = styled.div`
    display: flex;
    width: 100%;
    margin-top: 30px;
`

const LeftSidebar = styled.div`
    width: 250px;
    height: auto;
    padding: 20px;
    margin-right: 15px;
    margin-left: 15px;
    margin-top: 30px;
    border: 1px solid #ccc;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    text-align: center;
    position: fixed;
    background-color: #f5f5f5;
`

const RightSidebar = styled.div`
    width: 200px;
    max-height: 50vh;
    padding: 20px;
    margin-right: 20px;
    margin-left: 20px;
    margin-top: 30px;
    background-color: #f5f5f5;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    right: 0;
    position: fixed;
`

const MainArea = styled.div`
    flex-grow: 1;
    padding: 20px;
    margin-left: 310px;
    margin-right: 260px;
    background-color: #fff;
`

const BlogCardArea = styled.div`
    padding-top: 20px;
`

const BlogCard = styled.div`
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 16px;
    border: 2px solid #ccc;
    margin-bottom: 30px;
    witdh: 90%:
    height: 200px;
    display: flex;
    flex-direction: row;
    background-color: #f5f5f5;
`

const BlogImage = styled.img`
    width: 30%;
    height: 180px;
    margin-left: 10px;
    margin-right: 15px;
    object-fit: cover;
`

const BlogContentArea = styled.div`
    width: calc(70% - 30px);
    height: auto;
`

const GoToDetailButton = styled.button`
    background: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 4px;
`

const TagButton = styled.button`
    color: white;
    margin: 5px;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    border: 1px solid #ccc;
`

const PageNationButton = styled.button`
    color: white;
    margin: 5px;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    border: 1px solid #ccc;
`

const LikeButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    color: ${props => (props.liked ? 'red' : 'grey')};
    font-size: 24px;
`