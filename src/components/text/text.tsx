import clsx from "clsx";
interface TextProps {
  children: string;
  type?: "h1" | "h2" | "h3" | "h4" | "p";
  variant?: "bold" | "italic" | "underline" | "none";
  className?: string;
  color?: "grey" | "blue";
}

export function Text({
  children = "",
  type = "p",
  variant = "none",
  className = "",
  color = "grey",
}: Readonly<TextProps>) {
  const Tag = type as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={clsx(
        {
          "text-4xl": type === "h1",
          "text-3xl": type === "h2",
          "text-2xl": type === "h3",
          "text-xl": type === "h4",
          "text-base": type === "p",
          "font-bold": variant === "bold",
          underline: variant === "underline",
          "text-gray-600 dark:text-gray-300": color === "grey",
          "text-blue-400": color === "blue",
        },
        className,
      )}
    >
      {children}
    </Tag>
  );
}
