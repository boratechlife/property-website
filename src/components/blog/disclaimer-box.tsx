import { component$, Slot } from "@builder.io/qwik";

interface DisclaimerBoxProps {
  type?: "warning" | "info" | "tip";
  icon?: string;
  title: string;
}

export const DisclaimerBox = component$<DisclaimerBoxProps>(
  ({ type = "info", icon, title }) => {
    const getBoxStyles = () => {
      switch (type) {
        case "warning":
          return "bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-900 text-red-800 dark:text-red-300";
        case "tip":
          return "bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-900 text-green-800 dark:text-green-300";
        default:
          return "bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-900 text-blue-800 dark:text-blue-300";
      }
    };

    const getTextStyles = () => {
      switch (type) {
        case "warning":
          return "text-red-700 dark:text-red-200";
        case "tip":
          return "text-green-700 dark:text-green-200";
        default:
          return "text-blue-700 dark:text-blue-200";
      }
    };

    return (
      <div class={`p-8 rounded-xl shadow-lg border ${getBoxStyles()}`}>
        <h2
          class={`text-2xl font-bold mb-4 flex items-center ${getBoxStyles()}`}
        >
          {icon && <span class="mr-2">{icon}</span>}
          {title}
        </h2>
        <div class={getTextStyles()}>
          <Slot />
        </div>
      </div>
    );
  }
);
