import { groq } from 'next-sanity';

export const allBlogPostsQuery = groq`
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    category,
    readTime,
    publishedAt,
    coverImage
  }
`;

export const blogPostBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    category,
    readTime,
    publishedAt,
    coverImage,
    body
  }
`;

export const allCaseStudiesQuery = groq`
  *[_type == "caseStudy"] | order(publishedAt desc) {
    _id,
    partnerName,
    "slug": slug.current,
    tagline,
    location,
    industry,
    model,
    metrics,
    coverImage
  }
`;

export const caseStudyBySlugQuery = groq`
  *[_type == "caseStudy" && slug.current == $slug][0] {
    _id,
    partnerName,
    "slug": slug.current,
    tagline,
    location,
    industry,
    model,
    metrics,
    coverImage,
    challenge,
    solution,
    result,
    quote,
    publishedAt
  }
`;

export type BlogPostSummary = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  category?: string;
  readTime?: string;
  publishedAt?: string;
  coverImage?: { asset: { _ref: string } };
};
