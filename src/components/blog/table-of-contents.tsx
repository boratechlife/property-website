import { component$ } from "@builder.io/qwik";

interface TocItem {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export const TableOfContents = component$<TableOfContentsProps>(({ items }) => {
  return (
    <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
      <h2 class="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        Table of Contents
      </h2>
      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-primary-600 dark:text-primary-400">
        {items.map((item, index) => (
          <li key={item.id}>
            <a href={`#${item.id}`} class="hover:underline flex items-start">
              <span class="mr-2 font-medium">{index + 1}.</span>
              <span>{item.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
});
