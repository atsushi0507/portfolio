import { getDocs, collection, query, where, limit, orderBy, doc, updateDoc, increment } from "firebase/firestore";
import { db } from "./firebase";
import { BlogPost } from "@/types/blog";

export type BlogPostList = {
    id: string;
    title: string;
    summary: string;
    mainImage: string;
    tags: string[];
    createdAt: string; // ISO 8601 文字列
    likes: number;
    slug: string;
  };

export async function getAllSlugs(): Promise<string[]> {
    const q = query(collection(db, "blogs"));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => doc.data().slug);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
    const postsRef = collection(db, "blogs");
    const q = query(postsRef, where("slug", "==", slug), limit(1));
    const snapshot = await getDocs(q);

    if (snapshot.empty) return null;

    const doc = snapshot.docs[0];
    const data =  doc.data();

    return {
        title: data.title,
        mainImage: data.mainImage,
        summary: data.summary,
        content: data.content,
        tags: data.tags,
        likes: data.likes,
        toc: data.toc,
        slug: data.slug,
        createdAt: data.createdAt.toDate?.() ?? new Date(),
        updatedAt: data.updatedAt.toDate?.() ?? new Date(),
    };
}

export async function getAllPosts(): Promise<BlogPostList[]> {
    const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);

    return snapshot.docs.map(doc => {
        const data = doc.data();
        return {
            id: doc.id,
            title: data.title,
            summary: data.summary,
            mainImage: data.mainImage,
            tags: data.tags || [],
            createdAt: data.createdAt?.toDate().toISOString() ?? new Date().toISOString(),
            likes: data.likes || 0,
            slug: data.slug,
        };
    });
}

export async function incrementLikes(slug: string, isLiked: boolean): Promise<void> {
    const postRef = collection(db, "blogs");
    const q = query(postRef, where("slug", "==", slug), limit(1));
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
        throw new Error(`No blog post found for slug: ${slug}`);
    }

    const blogDoc = snapshot.docs[0];
    const blogDocRef = doc(db, "blogs", blogDoc.id);

    await updateDoc(blogDocRef, {
        likes: increment(isLiked ? -1 : 1),
    });
}