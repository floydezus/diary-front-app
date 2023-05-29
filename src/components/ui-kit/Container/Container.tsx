export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div
      data-testid="container"
      className="mx-auto max-w-7xl sm:px-4 lg:px-6 w-full"
    >
      {children}
    </div>
  );
}
