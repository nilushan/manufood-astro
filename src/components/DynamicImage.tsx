import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
}

export const DynamicImage: React.FC<ImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height, 
  loading = 'lazy' 
}) => {
  // Convert image key to actual path
  const imagePath = src.startsWith('@images/') 
    ? src.replace('@images/', '/src/images/') 
    : src;

  return (
    <img
      src={imagePath}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loading}
      style={{ objectFit: 'cover' }}
    />
  );
};

export default DynamicImage;
