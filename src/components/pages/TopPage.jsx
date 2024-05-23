import styled from 'styled-components'
import NavBar from '../molecules/NavBar'
import ProfileCard from '../organisms/ProfileCard'
import ContentLink from '../organisms/ContentLink'
import Card from '../atoms/Card'
import { useNavigate } from 'react-router-dom'

const TopPage = () => {
    const navigator = useNavigate()
    const clickedPageButton = (pageName) => {
        navigator(pageName);
    }
    return (
        <TopContainer>
            <NavBar />
            <PicLabel src="https://unsplash.it/1440/250" alt="hoge" />

            <MainContainer>
                <ProfileCard onClick={() => clickedPageButton("/about")}/>

                <ContentContainer>
                    <Tab>Web Application</Tab>
                    <ServiceContainer>
                        <ContentLink 
                        image="https://unsplash.it/200/200"
                        title="Bitcoin Daq"
                        description="Bitcoin price data acquisition system for BitFlyer-JPY"
                        link="https://bitcoin-daq-visualization.streamlit.app"
                        />
                        <ContentLink 
                        image="https://unsplash.it/200/201"
                        title="LLM Blog content generator"
                        description="This app provides blog contents by feeding topics, target reader, and so on."
                        link="https://www.yahoo.co.jp"
                        />
                    </ServiceContainer>

                    <Tab>Blog</Tab>
                    <ServiceContainer>
                        <ContentLink
                        image="https://unsplash.it/200/202"
                        title="How to build your portfolio site?"
                        description="You can learn how to build your portfolio site by using cloud service."
                        link="https://google.com"
                        />
                        <ContentLink
                        image="https://unsplash.it/200/203"
                        title="What is advanced-RAG?"
                        description="LLM can be a powerful and useful for people, but it's still have some difficulties to use effectively in your work."
                        link="https://openai.com"
                        />
                    </ServiceContainer>
                </ContentContainer>
                

            </MainContainer>
        </TopContainer>
    )
}

export default TopPage;

const TopContainer = styled.div`

`

const PicLabel = styled.img`
    width: 100%;
    height: 180px;
`

const MainContainer = styled.div`
    display: flex;
    margin-top: 20px;
`

const Tab =  styled.div`
    cursor: pointer;
    padding: 10px 20px;
`

const ContentContainer = styled.div`
  flex-grow: 1;
  padding: 20px;
`

const ServiceContainer = styled.div`
    display: flex;
    padding: 10px 20px;
    gap: 20px;
`