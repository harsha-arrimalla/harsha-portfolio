import React from 'react';
import Image from 'next/image';
import { getLogo } from '@/lib/logos';

/**
 * Shows a project's logo on a background the artwork can survive. Projects
 * with no logo file render nothing — their name is already set in display
 * type beside this slot, so a text fallback would just repeat it.
 */
export default function ProjectLogo({
  slug,
  title,
  size = 'md',
}: {
  slug: string;
  title: string;
  size?: 'sm' | 'md';
}) {
  const logo = getLogo(slug);

  if (!logo) return null;

  return (
    <span
      className="hx-logo"
      data-size={size}
      data-on={logo.on}
      data-opaque={logo.opaque ? 'true' : undefined}
    >
      <Image
        src={logo.src}
        alt={`${title} logo`}
        width={360}
        height={120}
        sizes="200px"
      />
    </span>
  );
}
