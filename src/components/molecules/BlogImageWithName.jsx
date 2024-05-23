import styled from "styled-components";

export const BlogImageWithName = ({image, title, abstract}) => {
    return (
        <Container>
            <Img 
            src={image}
            alt={title}
            height={160}
            width={240}
            />
            <BlogTitle>タイトル: {title}</BlogTitle>
            <Abstract>概要: {abstract}</Abstract>
        </Container>
    );
}

export default BlogImageWithName;

const Container = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
`

const Img = styled.img`
    
`

const BlogTitle = styled.h3`
    font-size: 18px;
    font-weight: bold;
    margin: 0;
    color: #40514e;
`

const Abstract = styled.p`
    font-size: 12px;
    margin: 2;
`