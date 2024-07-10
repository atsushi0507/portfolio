import Card from "../atoms/Card";
import BlogImageWithName from "../molecules/BlogImageWithName";
import PrimaryButton from "../atoms/PrimaryButton";
import styled from "styled-components";

export const BlogCard = ({blog, onClick}) => {
    console.log(onClick);
    return (
        <Card>
            <BlogImageWithName image={blog.mainImage} title={blog.title} abstract={blog.summary} />
            <ToDetailButton onClick={onClick}>Read More</ToDetailButton>
        </Card>
    );
}

export default BlogCard;

const ToDetailButton = styled.button`
    background: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 4px;
`