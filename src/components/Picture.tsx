type Props = {
  name: string;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
};

/** Foto 4:5 em WebP, com 600 e 1200 px de largura. */
export function Picture({ name, alt, sizes, className = "", priority = false }: Props) {
  return (
    <img
      src={`/images/${name}-600.webp`}
      srcSet={`/images/${name}-600.webp 600w, /images/${name}-1200.webp 1200w`}
      sizes={sizes}
      width={600}
      height={750}
      alt={alt}
      decoding="async"
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      className={`block h-full w-full object-cover ${className}`}
    />
  );
}
