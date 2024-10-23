interface parseTextWithLinksProps {
  className: string;
  text: string;
}

export const parseTextWithLinks = ({
  text,
  className,
}: parseTextWithLinksProps) => {
  const parts = text.split(/(https?:\/\/[^\s]+)/g);
  return parts.map((part, index) => {
    if (part.match(/https?:\/\/[^\s]+/)) {
      return (
        <a
          className={className}
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
        >
          {part}
        </a>
      );
    }
    return part;
  });
};
