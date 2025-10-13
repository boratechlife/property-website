import { component$, Slot } from "@builder.io/qwik";

interface BlogSectionProps {
  id?: string;
  title: string;
  colorScheme?: "primary" | "accent";
  image?: {
    src: string;
    alt: string;
  };
  imagePosition?: "left" | "right";
}

export const BlogSection = component$<BlogSectionProps>(
  ({ id, title, colorScheme = "primary", image, imagePosition = "left" }) => {
    const titleColorClass =
      colorScheme === "primary"
        ? "text-primary-600 dark:text-primary-400"
        : "text-accent-600 dark:text-accent-400";

    return (
      <section id={id} class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <h2 class={`text-3xl md:text-4xl font-bold mb-8 ${titleColorClass}`}>
          {title}
        </h2>

        {image ? (
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div
              class={
                imagePosition === "right" ? "order-2 md:order-1" : "order-1"
              }
            >
              <img
                src={image.src}
                alt={image.alt}
                class="rounded-lg shadow-xl"
                loading="lazy"
              />
            </div>
            <div
              class={`space-y-6 text-lg text-gray-700 dark:text-gray-300 ${
                imagePosition === "right" ? "order-1 md:order-2" : "order-2"
              }`}
            >
              <Slot />
            </div>
          </div>
        ) : (
          <div class="space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <Slot />
          </div>
        )}
      </section>
    );
  }
);
