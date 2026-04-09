'use client';

import { useEffect, useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  style?: React.CSSProperties;
}

export default function OptimizedImage({ src, alt, className, fill, style }: OptimizedImageProps) {
  const [basePath, setBasePath] = useState('');

  useEffect(() => {
    setBasePath(process.env.NEXT_PUBLIC_BASE_PATH || '');
  }, []);

  if (fill) {
    return (
      <img
        src={`${basePath}${src}`}
        alt={alt}
        className={className}
        style={{ ...style, objectFit: 'cover' }}
      />
    );
  }

  return <img src={`${basePath}${src}`} alt={alt} className={className} style={style} />;
}
