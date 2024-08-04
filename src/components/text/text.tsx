import clsx from "clsx";
interface TextProps {
  children: string;
  type?: "h1" | "h2" | "h3" | "p";
  variant?: "bold" | "italic" | "underline" | "none";
  className?: string;
}

export function Text({
  children = "",
  type = "p",
  variant = "none",
  className = "",
}: Readonly<TextProps>) {
  const Tag = type as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={clsx(
        {
          "text-4xl": type === "h1",
          "text-3xl": type === "h2",
          "text-2xl": type === "h3",
          "text-base": type === "p",
          "font-bold": variant === "bold",
          underline: variant === "underline",
        },
        className,
      )}
    >
      {children}
    </Tag>
  );
}
