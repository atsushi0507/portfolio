export type BlogPost = {
    title: string;
    mainImage: string;
    summary: string;
    content: string;
    tags: string[];
    createdAt: Date;
    updatedAt: Date;
    slug: string;
    likes: number;
    toc?: string;
};