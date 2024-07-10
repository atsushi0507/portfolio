import { useState } from "react";
import styled from "styled-components";
import NavBar from "../molecules/NavBar";
import Footer from "../molecules/Footer";
import axios from "axios";

const ContactPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [category, setCategory] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [sendSuccess, setSendSuccess] = useState(null);

    const validateForm = () => {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if (
            name.trim() &&
            emailRegex.test(email) &&
            category.trim() &&
            message.trim()
        ) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    };

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        if (name === "name") setName(value);
        if (name === "email") setEmail(value);
        if (name === "category") setCategory(value);
        if (name === "message") setMessage(value);
        validateForm();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);
        try {
            const response = await axios.post("http://localhost:20000/send-email", {
                name: name,
                email: email,
                category: category,
                message: message
            });
            setSendSuccess(true);
        } catch (error) {
            setSendSuccess(false);
        } finally {
            setIsSending(false);
        }
    }

    return (
        <>
        <NavBar />

        <FormContainer onSubmit={handleSubmit}>
            <h1>Contact</h1>
            <FormLabel htmlFor="name">Name:</FormLabel>
            <FormInput
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={handleInputChange}
            />
            <FormLabel htmlFor="email">Email:</FormLabel>
            <FormInput
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleInputChange}
            />
            <FormLabel htmlFor="category">Category:</FormLabel>
            <FormSelect
                id="category"
                name="category"
                value={category}
                onChange={handleInputChange}
            >
                <option value="">Select a category</option>
                <option value="questoin">私について質問したい</option>
                <option value="analysis">データ分析を依頼したい</option>
                <option value="chatbot">ChatGPT を活用したサービスの相談</option>
                <option value="dashboard">簡易な分析ダッシュボード作成を依頼したい</option>
                <option value="other">その他</option>
            </FormSelect>
            <FormLabel htmlFor="message">Message:</FormLabel>
            <FormTextarea
                id="message"
                name="message"
                value={message}
                onChange={handleInputChange}
            />
            <SendButton type="submit" disabled={!isFormValid} >Send</SendButton>
        </FormContainer>

        <Footer />
        </>
    );
};

export default ContactPage;


const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 auto;
    margin-bottom: 50px;
    width: 50%;
`

const FormLabel = styled.label`
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: bold;
`

const FormInput = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
`

const FormSelect = styled.select`
    width: 100%;
    height: 30px;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
`

const FormTextarea = styled.textarea`
    width: 100%;
    height: 150px;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
`

const SendButton = styled.button`
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:disabled {
        background-color: #cccccc;
        cursor: not-allowed;
    }
`

const Message = styled.div`
    margin-top: 20px;
    padding: 10px;
    color: ${props => (props.success ? 'green' : 'red')};
    font-weight: bold;
    text-align: center;
`
