export default function Navbar() {
    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Resume', href: '#resume' },
        { name: 'Contact', href: '#contact' },
        { name: 'Github', href: '#github' },
    ]
    return (
        <nav className="sticky top-0 bg-teal-100 p-6 flex justify-between items-center">
            <div>Logo</div>
            <ul className="">
                {navLinks.map((link) => (
                    <li key={link.name} className="inline-block mx-4"><a href={link.href}>{link.name}</a></li>))}
            </ul>
        </nav>
    )
}