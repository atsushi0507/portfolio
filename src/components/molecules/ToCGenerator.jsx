import React from 'react'
import { remark } from 'remark';
import remarkToc from 'remark-toc';
import remarkHtml from 'remark-html/lib';

const ToCGenerator = async (contents) => {
    const processedContent = await remark()
    .use(remarkToc, {heading: "目次", maxDept: 3})
    .use(remarkHtml)
    .process(contents);
    return processedContent.toString();
}

export default ToCGenerator;