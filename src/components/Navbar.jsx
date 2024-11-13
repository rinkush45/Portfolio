/**
 * @copyright 2024 rinkusharma
 * @license Apache-2.0
 */
/**
 * Node modules
 */

import { useRef } from "react";
const Navbar = () => {

    const lastActiveLink = useRef();
    const navItems = [
        {
          label: 'Home',
          link: '#home',
          className: 'nav-link active',
          ref: lastActiveLink
        },
        {
          label: 'About',
          link: '#about',
          className: 'nav-link'
        },
        {
          label: 'Skills',
          link: '#skills',
          className: 'nav-link'
        },
        {
          label: 'Projects',
          link: '#projects',
          className: 'nav-link'
        },
        {
          label: 'Contact',
          link: '#contact',
          className: 'nav-link md:hidden'
        }
      ];

    return (
        <nav className={'navbar'}>
            {
                navItems.map(({ label, link, className, ref }, key) => (
                        <a
                            href={link}
                            key={key}
                            ref={ref}
                            className={className}
                            oneClick={null}
                        >
                            {label}
                        </a>
                    ))
            }
        </nav>
    )
}
export default Navbar;