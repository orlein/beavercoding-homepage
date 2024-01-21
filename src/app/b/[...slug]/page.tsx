import { getPost, getPostSectionsBySlug } from '@/src/backend/posts';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import CustomLink from '@/src/components/ui/CustomLink';

export default async function BlogPost({
  params,
}: {
  params: { slug: string[] };
}) {
  const [post, postSections] = await Promise.all([
    getPost(params.slug[params.slug.length - 1], 'blog'),
    getPostSectionsBySlug(params.slug[params.slug.length - 1]),
  ]);

  if (!post) {
    notFound();
  }

  return (
    <>
      <h1>{post.title}</h1>
      <CustomLink href="/b">Back to Blog</CustomLink>
      <p>/b/{post.slug}</p>
      <pre>{JSON.stringify(post, null, 2)}</pre>
      <MDXRemote source={postSections[0].content} />
      <pre>{JSON.stringify(postSections, null, 2)}</pre>
    </>
  );
}