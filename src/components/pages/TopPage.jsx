import styled from 'styled-components'
import NavBar from '../molecules/NavBar'
// import ProfileCard from '../organisms/ProfileCard'
import { useNavigate } from 'react-router-dom'
import profile from "../../public/profile_diving.JPG";
import { db } from '../../firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import ContentLink from '../organisms/ContentLink';
import apps from "../../public/webApp/apps.json";
import Footer from '../molecules/Footer';

const TopPage = () => {
    const navigator = useNavigate()

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            const blogCollection = collection(db, "blogs");
            const blogQuery = query(blogCollection, orderBy("createdAt", "desc"));
            const blogRef = await getDocs(blogQuery);
            const blogList = blogRef.docs.map(doc => ({id: doc.id, ...doc.data()}));
            setBlogs(blogList.slice(0, 3));
        };
        fetchBlogs();
    }, []);

    const goToBlog = (id) => {
        navigator(`/blog/${id}`);
    };

    const myApps = apps.apps;

    return (
        <>
            <NavBar />
            <PicLabel src="https://unsplash.it/1440/250" alt="hero-section">
                <h1>Transforming Tomorrow with AI</h1>
            </PicLabel>
                <MainContent>
                    <ProfileSection>
                        <ProfileImage src={profile} alt="Profile" />
                        <h2>Atsushi Mizukami</h2>
                        <p>I am a data scientist with a passion for IT. My expertise lies in data analysis, machine learning, and coding. My interests are spreading to the full-stacked engineering. Let's connect with me!</p>
                    </ProfileSection>
                    
                    <ContentContainer>
                        <Tab>Web application</Tab>
                        <ServiceContainer>
                            {myApps.map(app => (
                                <ContentLink 
                                    key={app.id}
                                    image={app.image}
                                    title={app.title}
                                    description={app.description}
                                    link={app.link}
                                />
                            ))}                        
                        </ServiceContainer>
                        <Tab>Blog</Tab>
                        <ServiceContainer>
                            {blogs.map(blog => (
                                <CardContainer key={blog.id} onClick={() => goToBlog(blog.id)}>
                                    <Image src={blog.mainImage} />
                                    <Content>
                                        <Title>{blog.title}</Title>
                                        <Description>{blog.summary}</Description>
                                    </Content>
                                </CardContainer>
                            ))}                        
                        </ServiceContainer>
                    </ContentContainer>
                </MainContent>
            <Footer />
        </>
    );
}

export default TopPage;


const PicLabel = styled.div`
    width: 100%;
    height: 180px;
    background-image: url("https://unsplash.it/1440/220/"); // Adjust the image path
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 2em;
`

const MainContent = styled.div`
    display: flex;
    width: 100%;
    margin-top: 30px;
`

const ProfileSection = styled.div`
    max-width: 300px;
    height: 50vh;
    padding: 20px;
    margin-right: 20px;
    margin-left: 20px;
    background-color: #f5f5f5;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    text-align: center;
    position: fixed;
`

const ProfileImage = styled.img`
    width :100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 20px;
`

const ContentContainer = styled.div`
    flex-grow: 1;
    padding: 20px;
    margin-left: 360px;
`

const Tab = styled.h1`
    padding: 10px 20px;
`

const ServiceContainer = styled.div`
    display: flex;
    padding: 10px 20px;
    gap: 20px;
`

const CardContainer = styled.div`
width: calc(33.333% - 20px);
background-color: #f5f5f5;
border: 1px solid #ddd;
border-radius: 8px;
overflow: hidden;
cursor: pointer;
transition: transform 0.2s;
&:hover {
transform: scale(1.02);
`

const Image = styled.img`
    width: 100%;
    height: 250px;
`

const Content = styled.div`
    padding: 16px;
`

const Title = styled.h2`
    margin: 0;
    font-size: 1.5em;
`

const Description = styled.p`
    margin: 8px 0 0;
    font-size: 1em;
    color: #666;
`