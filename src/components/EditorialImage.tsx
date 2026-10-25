import { useState } from 'react';
import { Utensils } from 'lucide-react';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
}

export function EditorialImage({
  src,
  alt,
  className = '',
  fallbackLabel,
}: EditorialImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-[#E9E0DF] text-[#722F45] p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <Utensils size={24} className="mb-2 opacity-70" />
        <span className="font-serif text-sm tracking-wider">
          {fallbackLabel || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
