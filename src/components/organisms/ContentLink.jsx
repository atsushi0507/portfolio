import styled from "styled-components";

const ContentLink = ({image, title, description, link}) => {
    const handleClick = () => {
        window.open(link, "_blank");
    }

    return (
        <CardContainer onClick={handleClick}>
            <Image src={image} alt={title} />
            <Content>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </Content>
        </CardContainer>
    )
}

export default ContentLink;

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