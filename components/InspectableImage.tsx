'use client';

import Image, { type ImageProps } from 'next/image';
import { useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

/** Native modal supplies focus containment, Escape dismissal and an inert background. */
export default function InspectableImage(props: ImageProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const title = useId();
  const src = typeof props.src === 'string' ? props.src : 'default' in props.src ? props.src.default.src : props.src.src;
  return <>
    <Image {...props} alt={props.alt} />
    <button ref={trigger} type="button" className="image-inspect-trigger" aria-label={`Enlarge: ${props.alt}`} onClick={() => dialog.current?.showModal()}>View full image ↗</button>
    {mounted && createPortal(<dialog ref={dialog} className="image-inspector" aria-labelledby={title} onClose={() => trigger.current?.focus()} onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      <div className="image-inspector-toolbar"><p id={title}>{props.alt}</p><button type="button" autoFocus onClick={() => dialog.current?.close()}>Close ×</button></div>
      <div className="image-inspector-content"><Image src={src} alt={props.alt} width={1600} height={2400} unoptimized style={{ width: '100%', height: 'auto', objectFit: 'contain' }} /></div>
    </dialog>, document.body)}
  </>;
}
