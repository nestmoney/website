import Image from "next/image";
import { Links } from "../updatable";
import Link from "next/link";
const socials = [
  { src: "/linkedin.svg", alt: "LinkedIn", href: Links.linkedin },
  { src: "/instagram.svg", alt: "Instagram", href: Links.instagram },
  //{ src: "/x.svg", alt: "X", href: Links.x },
];

const Footer = () => {
  return (
    <footer
      className="bg-secondary py-16 md:py-30 text-secondary-text flex justify-center text-[12px] md:text-[14px]"
      id="links"
    >
      <div className="site-container mx-auto flex flex-col md:gap-16 gap-8 w-[320px] md:w-full">

        {/* Top: Image with responsive auto-height */}
        <div className="w-full flex justify-center">
          <Image
            src="/iso-new.png"
            alt="India's family finance app"
            width={600}
            height={90}
            className="w-full max-w-[600px] h-auto object-contain"
          />
        </div>

        {/* Bottom container: properly wraps all parts and takes full width */}
        <div className="flex flex-col md:flex-row justify-between gap-8 w-full">

          {/* Left */}
          <address className="not-italic space-y-2 text-left">
            <p className="font-semibold">Contact us</p>
            <p>support@nestmoney.in</p>
            <p>postcards@nestmoney.in</p>
          </address>

          {/* Center */}
          <nav className="space-y-2" aria-label="Footer">
            <p className="font-semibold">Links</p>
            <p>
              <Link href="/privacy">Privacy Policy</Link>
            </p>
            <p>
              <Link href="/terms">Terms of Use</Link>
            </p>
          </nav>

          {/* Right */}
          <div className="space-y-4">
            <p className="font-semibold">Socials</p>

            <ul className="flex gap-5">
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

            <p className="text-sm opacity-70 mt-8">
              © {new Date().getFullYear()} Legentree Technologies Pvt Ltd
            </p>
          </div>

        </div> {/* End of bottom container */}

      </div>
    </footer>
  );
};

export default Footer;
