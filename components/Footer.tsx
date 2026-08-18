import Link from 'next/link';

export default function Footer() {
  return <footer className="folio-footer" id="contact"><div className="folio-wrap"><p className="folio-eyebrow">Let&apos;s make a meaningful thing</p><a className="folio-email" href="mailto:arrimallaharshavardhan@gmail.com">Say hello<span>↗</span></a><div className="folio-footer-bottom"><p>© {new Date().getFullYear()} Harsha Arrimalla</p><div><a href="https://www.linkedin.com/in/harshavardhan-arrimalla-a557141a2/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/harsha-arrimalla" target="_blank" rel="noreferrer">GitHub</a><Link href="/#work">Work</Link></div></div></div></footer>;
}
