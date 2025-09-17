import { component$, useSignal, $ } from '@builder.io/qwik';
import { routeLoader$, DocumentHead } from '@builder.io/qwik-city';
import { getAllPosts } from '~/lib/blog';

export const useBlogPosts = routeLoader$(async () => {
  return await getAllPosts();
});

export default component$(() => {
  const posts = useBlogPosts();
  const searchQuery = useSignal('');
  const selectedTag = useSignal('');

  // Get all unique tags for filtering
  const allTags = [...new Set(posts.value.flatMap((post) => post.tags))];

  // Filter posts based on search and tag
  const filteredPosts = posts.value.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchesTag =
      !selectedTag.value || post.tags.includes(selectedTag.value);
    return matchesSearch && matchesTag;
  });

  const clearFilters = $(() => {
    searchQuery.value = '';
    selectedTag.value = '';
  });

  return (
    <div class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <div class="relative pt-24 pb-20 overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 dark:from-blue-500/10 dark:to-purple-500/10" />
        <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div class="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 text-sm font-medium mb-6">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Expert Real Estate Insights
          </div>

          <h1 class="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            NexaRealty Blog
          </h1>

          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Expert insights on Eldoret real estate, property management
            strategies, and investment opportunities that drive success.
          </p>

          {/* Search & Filter Bar */}
          <div class="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
            <div class="flex flex-col sm:flex-row gap-4">
              {/* Search Input */}
              <div class="relative flex-1">
                <svg
                  class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery.value}
                  onInput$={(e) =>
                    (searchQuery.value = (e.target as HTMLInputElement).value)
                  }
                  class="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Tag Filter */}
              <select
                value={selectedTag.value}
                onChange$={(e) =>
                  (selectedTag.value = (e.target as HTMLSelectElement).value)
                }
                class="px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all min-w-[150px]"
              >
                <option value="">All Topics</option>
                {allTags.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>

              {(searchQuery.value || selectedTag.value) && (
                <button
                  onClick$={clearFilters}
                  class="px-4 py-3 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Results Summary */}
      {(searchQuery.value || selectedTag.value) && (
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
            <p class="text-blue-800 dark:text-blue-200">
              Found <span class="font-semibold">{filteredPosts.length}</span>{' '}
              articles
              {searchQuery.value && ` matching "${searchQuery.value}"`}
              {selectedTag.value && ` in "${selectedTag.value}"`}
            </p>
          </div>
        </div>
      )}

      {/* Blog Posts Grid */}
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {filteredPosts.length > 0 ? (
          <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post, index) => (
              <article
                key={post.slug}
                class={`group relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden ${
                  index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Featured Badge for First Post */}
                {index === 0 && (
                  <div class="absolute top-4 right-4 z-10">
                    <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Featured
                    </div>
                  </div>
                )}

                {/* Content */}
                <div class="p-8">
                  {/* Tags */}
                  <div class="flex flex-wrap gap-2 mb-6">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <button
                        key={tag}
                        onClick$={() => (selectedTag.value = tag)}
                        class={`px-3 py-1 text-xs rounded-full transition-all hover:scale-105 ${
                          tagIndex === 0
                            ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                            : tagIndex === 1
                              ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white'
                              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>

                  {/* Title */}
                  <h2
                    class={`font-bold mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 ${
                      index === 0 ? 'text-2xl' : 'text-xl'
                    }`}
                  >
                    <a href={`/blog/${post.slug}`} class="stretched-link">
                      {post.title}
                    </a>
                  </h2>

                  {/* Excerpt */}
                  <p
                    class={`text-gray-600 dark:text-gray-300 mb-6 leading-relaxed ${
                      index === 0 ? 'text-lg line-clamp-4' : 'line-clamp-3'
                    }`}
                  >
                    {post.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div class="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <svg
                        class="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <time>
                        {new Date(post.publishDate).toLocaleDateString(
                          'en-US',
                          {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          }
                        )}
                      </time>
                    </div>

                    <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <svg
                        class="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                      {post.readTime} min read
                    </div>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div class="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/5 group-hover:to-purple-600/5 transition-all duration-300 rounded-2xl pointer-events-none" />
              </article>
            ))}
          </div>
        ) : (
          /* No Results State */
          <div class="text-center py-20">
            <div class="w-24 h-24 mx-auto mb-6 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
              <svg
                class="w-12 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.48-1.006-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No articles found
            </h3>
            <p class="text-gray-600 dark:text-gray-400 mb-6">
              Try adjusting your search or browse all articles.
            </p>
            <button
              onClick$={clearFilters}
              class="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
            >
              Show All Articles
            </button>
          </div>
        )}
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Blog | NexaRealty - Real Estate Insights & Property Management Tips',
  meta: [
    {
      name: 'description',
      content:
        'Expert insights on Eldoret real estate, property management, investment strategies, and legal guidance from NexaRealty professionals.',
    },
    {
      name: 'keywords',
      content:
        'Eldoret real estate blog, property management tips, Kenya real estate investment, landlord advice, property law Kenya',
    },
  ],
};
