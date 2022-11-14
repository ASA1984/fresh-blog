import { Handlers, PageProps } from "$fresh/server.ts";
import { Article } from "@/types/mod.ts";
import { getArticles } from "@/lib/article.ts";
import { PostCard } from "@/components/PostCard.tsx";
import { ContentMeta } from "@/components/ContentMeta.tsx";
import { Layout } from "@/components/Layout.tsx";
import Card from "@/islands/LinkCard.tsx";

export const handler: Handlers = {
  async GET(_, ctx) {
    const articles = await getArticles();
    articles.sort((a, b) => b.date.getTime() - a.date.getTime());
    return ctx.render(articles);
  },
};

export default function HomePage({ data }: PageProps<Article[]>) {
  return (
    <>
      <ContentMeta />
      <Layout>
        <div className="mt-16 max-w-xl mx-auto">
          {data.map((v) => <PostCard {...v} />)}
        </div>
      </Layout>
    </>
  );
}
