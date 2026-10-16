// Single source of truth for identity, contact details and links.
// Edit this file to re-point the site; nothing else hardcodes these.

export const SITE = {
    name: 'Harsha Arrimalla',
    shortName: 'Harsha',
    role: 'Product Designer & AI Full-Stack Builder',
    location: 'Hyderabad, India',
    availability: 'Open to senior product design roles and select collaborations',
    email: 'arrimallaharshavardhan@gmail.com',
    // Remove this line before publishing the repo if you would rather not
    // have a phone number in public source.
    phone: '+91 86392 01394',
    resume: '/Harshavardhan_Arrimalla_Product_Designer.pdf',
    github: 'harsha-arrimalla',
    links: {
        linkedin: 'https://www.linkedin.com/in/harshavardhan-arrimalla-a557141a2/',
        github: 'https://github.com/harsha-arrimalla',
    },
} as const;

export const NAV = [
    { href: '/#about', label: 'About' },
    { href: '/#capabilities', label: 'Capabilities' },
    { href: '/#work', label: 'Work' },
    { href: '/#build', label: 'Build' },
    { href: '/#open-source', label: 'Open source' },
    { href: '/#experience', label: 'Experience' },
    { href: '/#contact', label: 'Contact' },
] as const;
