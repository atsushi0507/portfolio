import React from 'react';
import styled from 'styled-components';
import NavBar from '../molecules/NavBar';
import profile from "../../public/profile_LHC.HEIC";
import Footer from '../molecules/Footer';

const ExperienceVisual = ({years}) => {
    return (
        <ExperienceVisualContainer>
            {/* <ExperienceVisualMax /> */}
            <ExperienceVisualBar years={years} />
        </ExperienceVisualContainer>
    );
}

const AboutMePage = () => {
    const skills = [
        {name: "Python", startDate: "2015-04-01"},
        {name: "Analysis", startDate: "2017-04-01"},
        {name: "SQL", startDate: "2022-04-01"},
        {name: "React", startDate: "2023-10-01"},
    ];

    const calculateExperience = (startDate) => {
        const start = new Date(startDate);
        const now = new Date();
        const diffYears = now.getFullYear() - start.getFullYear();
        return diffYears;
    }
    return (
        <>
        <NavBar />
        <Container>
            <ProfileSection>
                <ProfileImage src={profile} alt="Profile" />
                <Title>About Me</Title>
                <Description>Short description or tagline about myself.</Description>
            </ProfileSection>
        </Container>
        <Content>
            <Section>
                <SectionTitle>Career</SectionTitle>
                <Text>
                    Detailes about my university and professional experiences.
                </Text>
            </Section>
            <Section>
                <SectionTitle>Skills</SectionTitle>
                {/* <Skills>
                    <Skill>Python</Skill>
                    <Skill>SQL</Skill>
                    <Skill>React</Skill>
                    <Skill>Data Analysis</Skill>
                    <Skill>C++</Skill>
                    <Skill>Verilog-HDL</Skill>
                    <Skill>GCP</Skill>
                    <Skill>Other relevant skills</Skill>
                </Skills> */}
                <SkillsContainer>
                    {skills.map((skill, index) => {
                        const years = calculateExperience(skill.startDate);
                        return (
                            <SkillItem key={index}>
                                <SkillLabel>{skill.name}</SkillLabel>
                                <ExperienceDuration>{years} 年以上</ExperienceDuration>
                                <ExperienceContainer>
                                    <ExperienceVisual years={years} />
                                </ExperienceContainer>
                            </SkillItem>
                        );
                    })}
                </SkillsContainer>
            </Section>
            <Section>
                <SectionTitle>Recent Interests</SectionTitle>
                <Text>
                    Write about my recent interests and hobbies
                </Text>
            </Section>
            <Section>
                <SectionTitle>Hobbies</SectionTitle>
                <Text>
                    Talk about my hobbies and interests outside of work
                </Text>
            </Section>
        </Content>
        <Footer />
        </>
    );
  };
  
  export default AboutMePage;

const Container = styled.div`
  background: linear-gradient(to bottom right, #f0f4f8, #d9e2ec);
  color: #333;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #2b6cb0;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`

const Description = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 1rem;
  color: #666;
`

const Content = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`

const Section = styled.div`
  margin-bottom: 2rem;
`

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  border-bottom: 2px solid #007acc;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
`

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const SkillLabel = styled.div`
  background: #007acc;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 14px;
  color: #fff;
`

const ExperienceContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

const ExperienceVisualBar = styled.div`
  height: 20px;
  background: #1e90ff;
  width: ${({ years }) => (years >= 10 ? 100 : (years / 10) * 100)}%;
  transition: width 0.3s ease-in-out;
`;

const ExperienceVisualMax = styled.div`
  position: absolute;
  width: 100%;
  height: 20px;
  background: #e0e0e0;
  border-radius: 5px;
  top: 0;
  left: 0;
`

const ExperienceVisualContainer = styled.div`
  width: 100%;
  background: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
`

const ExperienceDuration = styled.span`
  font-size: 0.9em;
  margin-right: 10px;
  white-space: nowrap;
`

const Skills = styled.ul`
  list-style: none;
  padding: 0;
`

const Skill = styled.li`
  display: inline-block;
  background: #007acc;
  color: #fff;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border-radius: 20px;
  font-size: 0.9rem;
`

const Card = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding: 20px;
  width: 80%;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-10px);
  }
`


const Icon = styled.span`
  font-size: 24px;
  margin-right: 10px;
`
