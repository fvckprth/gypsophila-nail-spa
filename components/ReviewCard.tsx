interface ReviewCardProps {
  quote: string;
  author: string;
  source?: string;
}

export default function ReviewCard({ quote, author, source }: ReviewCardProps) {
  return (
    <div className="flex flex-col gap-6 py-8">
      <p className="font-display italic text-2xl md:text-3xl text-charcoal leading-relaxed">
        "{quote}"
      </p>
      <div className="flex items-center gap-3">
        <span className="font-sans font-medium text-charcoal">— {author}</span>
        {source && (
          <>
            <span className="text-muted text-sm px-2">·</span>
            <span className="font-sans text-sm text-muted">{source}</span>
          </>
        )}
      </div>
    </div>
  );
}
