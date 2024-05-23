import styled from "styled-components";
import PrimaryButton from "../atoms/PrimaryButton";

const ProfileSidebar = () => {
    return (
        <SidebarContainer>
            <ProfileImage src="https://unsplash.it/300/306" alt="profile" />
            <h2>Data Scientist Profile</h2>
            <p>Data Science Enthusiast</p>
            <PrimaryButton>Edit Details</PrimaryButton>
            <InfoSection>
                <SectionTitle>Projects Overview</SectionTitle>
                <InfoText>Data Scientist</InfoText>
                <SectionTitle>Skills Showcase</SectionTitle>
                <InfoText>Machine Learning</InfoText>
                <SectionTitle>Readers</SectionTitle>
                <InfoText>67</InfoText>
                <SectionTitle>Connections</SectionTitle>
                <InfoText>82</InfoText>
            </InfoSection>
            <InfoSection>
                <SectionTitle>Introduction</SectionTitle>
                <InfoText>
                    Greetings! I am a data scientist with a passion for IT. Myexpertise lies in data analysis, machine learning, and coding. Currently freelancing, I aspire to work in-house. Let's keep in touch!
                </InfoText>
            </InfoSection>
        </SidebarContainer>
    );
}

export default ProfileSidebar;

const SidebarContainer = styled.div`
    width: 20%;
    height: 60%;
    padding: 20px;
    margin: 5px;
    background-color: #f9f9f9;
    border: 2px solid #f3f3f3;
    border-radius: 3%;
`
const ProfileImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: block;
    margin: 0 auto;
`

const InfoSection = styled.div`
    margin-top: 20px;
`

const SectionTitle = styled.h3`
    font-size: 1.2em;
    margin-bottom: 10px;
`

const InfoText = styled.p`
    margin: 5px 0;
    font-size: 0.9em;
`