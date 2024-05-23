import styled from "styled-components";
import ProfileSidebar from "./ProfileSidebar";
import NavBar from "../molecules/NavBar";
import Content from "./Content";

const AboutMe = () => {
    return (
        <AppContainer>
            <NavBar />
            <PicLabel src="https://unsplash.it/1440/250" alt="hoge" />
            <MainContent>
                <ProfileSidebar />
                <Content />
            </MainContent>
        </AppContainer>
    )
}

export default AboutMe;

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: Arial, sans-serif;
`

const MainContent = styled.div`
    display: flex;
    margin-top: 20px;
`
const PicLabel = styled.img`
    width: 100%;
    height: 180px;
`