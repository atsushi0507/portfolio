import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopPage from "../components/pages/TopPage";
import Contact from "../components/pages/Contact";
import BlogList from "../components/pages/BlogList";
import BlogDetail from "../components/pages/BlogDetail";
import AboutMe from "../components/pages/AboutMe";

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
                    <Contact />
                    </>
                } />
                <Route exact path="/blog" element={
                    <>
                    <BlogList/>
                    </>
                } />
                <Route exact path="about" element={
                    <>
                    <AboutMe />
                    </>
                }/>
                <Route path="/blog/:id" element={
                    <BlogDetail />
                }/>
            </Routes>
        </BrowserRouter>
    );
}