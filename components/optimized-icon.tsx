interface OptimizedIconProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeMap = {
  sm: { className: 'w-4 h-4', width: 16, height: 16 },
  md: { className: 'w-6 h-6', width: 24, height: 24 },
  lg: { className: 'w-8 h-8', width: 32, height: 32 }
};

export function OptimizedIcon({
  src,
  alt,
  size = 'md',
  className = ''
}: OptimizedIconProps) {
  const sizeConfig = sizeMap[size];

  return (
    <img
      src={src}
      alt={alt}
      className={`${sizeConfig.className} object-contain ${className}`}
      width={sizeConfig.width}
      height={sizeConfig.height}
      loading="lazy"
      decoding="async"
    />
  );
}