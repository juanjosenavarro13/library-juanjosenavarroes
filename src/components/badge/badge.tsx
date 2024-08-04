export function Badge({
  children,
}: Readonly<{ children?: JSX.Element | string }>) {
  return (
    <div className="flex h-12 items-center">
      <span className="relative inline-flex min-w-52 overflow-hidden rounded-full p-[1px]">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span>
        <div className="inline-flex w-full cursor-pointer items-center justify-center whitespace-nowrap rounded-full bg-green-100 px-3 py-1 text-sm text-green-800 backdrop-blur-3xl dark:bg-gray-800 dark:text-white/80">
          {children}
        </div>
      </span>
    </div>
  );
}
