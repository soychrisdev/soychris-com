interface Heading1Props {
  children: React.ReactNode;
}

export const Heading2 = ({ children }: Heading1Props) => {
  return <h1 className="text-3xl font-semibold leading-snug">{children}</h1>;
};
