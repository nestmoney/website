import Image from "next/image";
const socials = [
  { src: "/linkedin.svg", alt: "LinkedIn", href: "https://linkedin.com" },
  { src: "/facebook.svg", alt: "Facebook", href: "https://facebook.com" },
  { src: "/instagram.svg", alt: "Instagram", href: "https://instagram.com" },
  { src: "/x.svg", alt: "X", href: "https://x.com" },
];

const Footer = () => {
  return (
    <div className="bg-secondary w-full h-[366px] md:h-[265px] md:px-[80px]  text-secondary-text flex justify-center text-[12px]">
      <div className="site-container mx-auto grid grid-cols-1 md:grid-cols-3 place-content-center w-full space-y-[32px]">
        <div className="space-y-1">
          <p className="font-bold">Contact us</p>
          <p>support@nestmoney.in</p>
          <p>+91 94810 65253</p>
        </div>
        <div className="space-y-1">
          <p className="font-bold">Links</p>
          <p>Terms of use</p>
          <p>Privacy Policy</p>
        </div>
        <div className="space-y-[8px]">
          <p className="font-bold pb-1">Socials</p>
          <div className="flex gap-[24px]">
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
          <p className="pt-6 font-[500]">
            © 2026 Legentree Technologies Pvt Ltd
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
