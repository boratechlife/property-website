// src/components/blog/blog-card.tsx
import { component$ } from "@builder.io/qwik";
import type { BlogPost } from "~/lib/blog";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export const BlogCard = component$<BlogCardProps>(
  ({ post, featured = false }) => {
    const cardClass = featured
      ? "bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900 dark:to-accent-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      : "bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow";

    return (
      <article class={cardClass}>
        <div class={featured ? "p-8" : "p-6"}>
          <div class="flex flex-wrap gap-2 mb-3">
            {post.tags.slice(0, featured ? 3 : 2).map((tag) => (
              <span
                key={tag}
                class="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          <h2
            class={`font-bold mb-3 line-clamp-2 ${featured ? "text-2xl" : "text-xl"}`}
          >
            <a
              href={`/blog/${post.slug}`}
              class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              {post.title}
            </a>
          </h2>

          <p
            class={`text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 ${featured ? "text-lg" : ""}`}
          >
            {post.excerpt}
          </p>

          <div class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <time>{new Date(post.publishDate).toLocaleDateString()}</time>
            <span>{post.readTime} min read</span>
          </div>
        </div>
      </article>
    );
  }
);
