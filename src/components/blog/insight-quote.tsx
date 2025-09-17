import { component$ } from "@builder.io/qwik";

interface InsightQuoteProps {
  quote: string;
  author?: string;
  type?: "insight" | "expert" | "tip";
}

export const InsightQuote = component$<InsightQuoteProps>(
  ({ quote, author = "NexaRealty Expert", type = "insight" }) => {
    const getPrefix = () => {
      switch (type) {
        case "expert":
          return "Expert Insight:";
        case "tip":
          return "Pro Tip:";
        default:
          return "NexaRealty Insight:";
      }
    };

    return (
      <blockquote class="bg-primary-50 dark:bg-primary-900 p-6 rounded-lg border-l-4 border-primary-600 dark:border-primary-400 italic">
        <p class="text-gray-800 dark:text-gray-200">
          <strong>{getPrefix()}</strong> "{quote}"
        </p>
        {author && author !== "NexaRealty Expert" && (
          <cite class="text-sm text-gray-600 dark:text-gray-400 mt-2 block not-italic">
            — {author}
          </cite>
        )}
      </blockquote>
    );
  }
);
