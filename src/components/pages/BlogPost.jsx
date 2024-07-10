import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import { Element } from "react-scroll";

const BlogPost = ({content}) => {
    const [copied, setCopied] = useState(false);

    return (
        <ReactMarkdown
            children={content}
            components={{
                code({node, inline, className, children, ...props}) {
                const match = /language-(\w+)/.exec(className || '');
                const codeString = String(children).replace(/\n$/, '');
                
                return !inline && match ? (
                    <div style={{ position: 'relative' }}>
                    <CopyToClipboard text={codeString} onCopy={() => setCopied(true)}>
                        <button style={{ position: 'absolute', right: 0, top: 0 }}>Copy</button>
                    </CopyToClipboard>
                    <SyntaxHighlighter style={dracula} language={match[1]} PreTag="div" {...props}>
                        {codeString}
                    </SyntaxHighlighter>
                    {/* {copied && <span style={{color: 'green'}}>Copied!</span>} */}
                    </div>
                ) : (
                    <code className={className} {...props}>
                    {children}
                    </code>
                );
                },
            //     h1({node, ...props}) {
            //         const id = props.children.toString().replace(/\s+/g, "-");
            //         return <Element name={id} {...props} />;
            //     },
            //     h2({node, ...props}) {
            //         const id = props.children.toString().replace(/\s+/g, "-");
            //         return <Element name={id} {...props} />;
            //     },
            //     h3({node, ...props}) {
            //         const id = props.children.toString().replace(/\s+/g, "-");
            //         return <Element name={id} {...props} />;
            //     },
            //     h4({node, ...props}) {
            //         const id = props.children.toString().replace(/\s+/g, "-");
            //         return <Element name={id} {...props} />;
            //     },
            }}
            />
    )
}

export default BlogPost;