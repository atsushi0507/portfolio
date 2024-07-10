import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopPage from "../components/pages/TopPage";
import ContactPage from "../components/pages/Contact";
import BlogList from "../components/pages/BlogList";
import BlogDetail from "../components/pages/BlogDetail";
import About from "../components/pages/About";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={
                    <>
                    <TopPage />
                    </>
                } />
                <Route exact path="/contact" element={
                    <>
                    <ContactPage />
                    </>
                } />
                <Route exact path="/blog" element={
                    <>
                    <BlogList/>
                    </>
                } />
                <Route exact path="about" element={
                    <>
                    <About/>
                    </>
                }/>
                <Route path="/blog/:id" element={
                    <BlogDetail />
                }/>
            </Routes>
        </BrowserRouter>
    );
}