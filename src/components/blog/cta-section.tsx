import { component$ } from "@builder.io/qwik";

interface CtaSectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref?: string;
  colorScheme?: "primary" | "accent";
}

export const CtaSection = component$<CtaSectionProps>(
  ({
    title,
    description,
    buttonText,
    buttonHref = "/#contact",
    colorScheme = "accent",
  }) => {
    const bgColorClass =
      colorScheme === "primary"
        ? "bg-primary-50 dark:bg-primary-900"
        : "bg-accent-50 dark:bg-accent-900";

    const titleColorClass =
      colorScheme === "primary"
        ? "text-primary-600 dark:text-primary-400"
        : "text-accent-600 dark:text-accent-400";

    return (
      <div class={`${bgColorClass} p-8 rounded-xl shadow-lg text-center`}>
        <h3 class={`text-3xl font-bold ${titleColorClass} mb-4`}>{title}</h3>
        <p class="text-lg mb-6 text-gray-700 dark:text-gray-300">
          {description}
        </p>
        <a
          href={buttonHref}
          class="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium text-lg shadow-lg"
        >
          {buttonText}
        </a>
      </div>
    );
  }
);
