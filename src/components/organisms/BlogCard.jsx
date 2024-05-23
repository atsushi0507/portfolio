import Card from "../atoms/Card";
import BlogImageWithName from "../molecules/BlogImageWithName";
import PrimaryButton from "../atoms/PrimaryButton";
import styled from "styled-components";

export const BlogCard = ({blog, onClick}) => {
    return (
        <Card>
            <BlogImageWithName image={blog.image} title={blog.title} abstract={blog.abstract} />
            <PrimaryButton onClick={onClick}>詳細</PrimaryButton>
        </Card>
    );
}

export default BlogCard;

// const CardContainer = styled.div`
//     background-color: #fff;
//     box-shadow: #ddd 0px 0px 4px 2px;
//     border-radius: 8px;
//     padding: 16px;
//     border: 2px solid #faf3f3;
// `