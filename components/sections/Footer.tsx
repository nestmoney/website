import Image from "next/image";
import { Links } from "../updatable";
import Link from "next/link";
const socials = [
  { src: "/linkedin.svg", alt: "LinkedIn", href: Links.linkedin },
  { src: "/instagram.svg", alt: "Instagram", href: Links.instagram },
  { src: "/x.svg", alt: "X", href: Links.x },
];

const Footer = () => {
  return (
    <footer
      className="bg-secondary  pt-12 md:pt-16 pb-28 text-secondary-text flex justify-center text-[12px] md:text-[14px] "
      id="links"
    >
      <div className="site-container mx-auto flex md:flex-row justify-between flex-col gap-8 w-[320px] md:w-full mx-auto">
        {/* Left */}
        <address className="not-italic space-y-2 text-left">
          <p className="font-semibold">Contact us</p>
          <p>support@nestmoney.in</p>
        </address>

        {/* Center */}
        <nav className="space-y-2 " aria-label="Footer">
          <p className="font-semibold">Links</p>
          <p>
            <Link href="/privacy">Privacy Policy</Link>
          </p>
          <p>
            <Link href="/terms">Terms of Use</Link>
          </p>
        </nav>

        {/* Right */}
        <div className="space-y-4 ">
          <p className="font-semibold">Socials</p>

          <ul className="flex  gap-5">
            {socials.map((icon, index) => (
              <li key={index}>
                <a
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80"
                >
                  <Image src={icon.src} width={20} height={20} alt={icon.alt} />
                </a>
              </li>
            ))}
          </ul>

          <p className="text-sm opacity-70 mt-7">
            © {new Date().getFullYear()} Legentree Technologies Pvt Ltd
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
