import NamedSection from "@/components/Typography/NamedSection";
import NamedSubSection from "@/components/Typography/NamedSubSection";
import Link from "next/link";
import Image from "next/image";
import Bold from "@/components/Typography/Bold";

const PrivacyPage = ({ isMobile = false }: { isMobile?: boolean }) => {
    return (
        <section className="pb-12 site-container mx-auto w-full max-w-[640px] px-[20px] flex flex-col gap-8">
            <Image
                src="/nestcoins.png"
                alt="Nestcoin"
                width={1280}
                height={568}
                priority
                className="w-full h-auto pt-4"
            />

            <div className="text-center items-center flex flex-col gap-2">
                <h3 className="text-[18px] font-semibold text-primary-blue">
                    Earn together, redeem together
                </h3>

                <p className="text-xs text-secondary-text">
                    Nest Coins are credited to the Nest and are accessible to all members of that Nest. So every coin earned gets used.
                </p>
            </div>

            <h3 className="text-center items-center text-[18px] font-semibold text-secondary">
                Nest Coins{' '}
                <span className="text-primary-blue">
                    never
                </span>
                {' '}expire!
            </h3>

            <NamedSection heading="Earn">
                <NamedSubSection sl="1">
                    1% of the transaction value as Nest Coins, on every bill payment and recharge. No limits!
                </NamedSubSection>
                <NamedSubSection sl="2">
                    1% of the FD booking value as Nest Coins, up to 250.
                </NamedSubSection>
                <NamedSubSection sl="3">
                    500 Nest Coins on successfully creating a Nest.
                </NamedSubSection>
                <NamedSubSection sl="4">
                    500 Nest Coins when a family member joins your Nest. Add or invite your family to earn more.
                </NamedSubSection>
            </NamedSection>

            <NamedSection heading="Redeem">
                <NamedSubSection sl="1">
                    Redeem Nest Coins on Gift cards across 400+ top brands that you use almost daily.
                </NamedSubSection>
            </NamedSection>

            <p className="text-xs text-secondary-text">
                <Bold>Note:</Bold> Nest Coins are earned on successfully completed transactions on the platform. Nest Coins are not credited on transactions that fail, are reversed, refunded, cancelled, or disputed. Reward rates, per-transaction caps and eligible transaction types are as set out above.
            </p>

            <p className="text-xs text-secondary-text">
                Refer to our{" "}
                <Link
                    href={isMobile ? "/mobile/terms#coins" : "/terms#coins"}
                    className="font-medium text-primary-blue">
                    Terms of Use
                </Link>{" "}
                and{" "}
                <Link
                    href={isMobile ? "/mobile/privacy" : "/privacy"}
                    className="font-medium text-primary-blue">
                    Privacy Policy
                </Link>
                {" "} for more details
            </p>
        </section>
    );
};
export default PrivacyPage;