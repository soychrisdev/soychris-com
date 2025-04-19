interface Heading1Props {
  children: React.ReactNode;
}

export const Heading3 = ({ children }: Heading1Props) => {
  return <h1 className="text-2xl font-medium leading-snug">{children}</h1>;
};
