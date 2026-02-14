import Image from "next/image";
import { Links } from "../updatable";
import Link from "next/link";
const socials = [
  { src: "/instagram.svg", alt: "Instagram", href: Links.instagram },
  { src: "/facebook.svg", alt: "Facebook", href: Links.facebook },
  { src: "/x.svg", alt: "X", href: Links.x },
  { src: "/linkedin.svg", alt: "LinkedIn", href: Links.linkedin },
];

const Footer = () => {
  return (
    <footer className="bg-secondary w-full py-12 md:py-16 text-secondary-text flex justify-center text-[12px] md:text-[14px] ">
      <div className="site-container mx-auto flex md:flex-row justify-between w-full flex-col gap-8">
        {/* Left */}
        <address className="not-italic space-y-2 text-left">
          <p className="font-semibold">Contact Us</p>
          <p>hello@nestmoney.in</p>
          <p>+91 94810 65253</p>
        </address>

        {/* Center */}
        <nav className="space-y-2 " aria-label="Footer">
          <p className="font-semibold">Links</p>
          <p>
            <Link href="/terms">Terms of Use</Link>
          </p>
          <p>
            <Link href="/privacy">Privacy Policy</Link>
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
