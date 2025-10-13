import { component$ } from "@builder.io/qwik";
import { routeLoader$, DocumentHead } from "@builder.io/qwik-city";
import { getPostBySlug } from "~/lib/blog";

export const usePostData = routeLoader$(async (requestEvent) => {
  const slug = requestEvent.params.slug;
  const post = await getPostBySlug(slug);

  if (!post) {
    throw requestEvent.error(404, "Post not found");
  }

  return post;
});

export default component$(() => {
  const post = usePostData();

  return (
    <div class="min-h-screen pt-24 pb-16">
      <article class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header class="mb-12 text-center">
          <div class="flex flex-wrap gap-2 justify-center mb-4">
            {post.value.tags.map((tag) => (
              <span
                key={tag}
                class="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 class="text-4xl md:text-5xl font-bold mb-4 text-primary-600 dark:text-primary-400 leading-tight">
            {post.value.title}
          </h1>

          <p class="text-xl text-gray-600 dark:text-gray-400 mb-6 max-w-3xl mx-auto">
            {post.value.subtitle}
          </p>

          <div class="flex items-center justify-center gap-6 text-gray-500 dark:text-gray-400">
            <time>{new Date(post.value.publishDate).toLocaleDateString()}</time>
            <span>•</span>
            <span>{post.value.readTime} min read</span>
            <span>•</span>
            <span>By {post.value.author}</span>
          </div>
        </header>

        <div
          class="prose prose-lg prose-primary dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={post.value.content}
        />

        <footer class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div class="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900 dark:to-accent-900 p-8 rounded-xl">
            <h3 class="text-2xl font-bold text-center mb-4">
              Ready to Get Started?
            </h3>
            <p class="text-center text-gray-600 dark:text-gray-300 mb-6">
              Contact NexaRealty for professional property management services
              in Eldoret
            </p>
            <div class="text-center">
              <a
                href="/#contact"
                class="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium"
              >
                Get Professional Help
              </a>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
});

export const head: DocumentHead = ({ resolveValue }) => {
  const post = resolveValue(usePostData);

  return {
    title: `${post.title} | NexaRealty Blog`,
    meta: [
      {
        name: "description",
        content: post.excerpt,
      },
      {
        property: "og:title",
        content: post.title,
      },
      {
        property: "og:description",
        content: post.excerpt,
      },
      {
        property: "og:type",
        content: "article",
      },
      {
        property: "article:published_time",
        content: post.publishDate,
      },
      {
        property: "article:author",
        content: post.author,
      },
      {
        name: "keywords",
        content: post.tags.join(", "),
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  };
};
