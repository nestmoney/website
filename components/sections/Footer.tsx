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
    <div className="bg-secondary w-full py-12 md:py-16 text-secondary-text flex justify-center text-[12px] md:text-[14px]">
      <div className="site-container mx-auto grid grid-cols-1 md:grid-cols-3 w-full gap-y-8">
        <div className="space-y-1 text-center md:text-left">
          <p className="font-bold">Contact us</p>
          <p>support@nestmoney.in</p>
          <p>+91 94810 65253</p>
        </div>

        <div className="space-y-1 text-center md:text-left">
          <p className="font-bold">Links</p>
          <p>
            <Link href="/terms">Terms of use</Link>
          </p>
          <p>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </p>
        </div>

        <div className="space-y-2 text-center md:text-left">
          <p className="font-bold pb-1">Socials</p>
          <div className="flex justify-center md:justify-start gap-6">
            {socials.map((icon, index) => (
              <a
                key={index}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <Image src={icon.src} width={20} height={20} alt={icon.alt} />
              </a>
            ))}
          </div>

          <p className="pt-6 font-medium">
            © {new Date().getFullYear()} Legentree Technologies Pvt Ltd
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
