import type { ImageMetadata } from 'astro';

/**
 * Every image uploaded through the CMS lands in src/assets/images and is
 * referenced in content as "/src/assets/images/<file>". This map lets the
 * site look those paths up and hand them to Astro's image optimizer.
 */
const images = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/images/*.{png,jpg,jpeg,webp,avif,gif,svg,PNG,JPG,JPEG,WEBP,SVG}',
  { eager: true },
);

export function resolveImage(path: string | undefined): ImageMetadata | undefined {
  if (!path) return undefined;
  const key = path.startsWith('/') ? path : `/${path}`;
  const match = images[key];
  if (!match) {
    throw new Error(
      `Image not found: "${path}". Upload it in the CMS Media library (it should live in src/assets/images).`,
    );
  }
  return match.default;
}
