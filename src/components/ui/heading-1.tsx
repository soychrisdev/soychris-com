interface Heading1Props {
  children: React.ReactNode;
  className?: string;
}

export const Heading1 = ({ children, className = "" }: Heading1Props) => {
  return (
    <h1 className={`text-4xl font-bold leading-tight capitalize ${className}`}>
      {children}
    </h1>
  );
};
