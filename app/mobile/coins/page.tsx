import NamedSection from "@/components/Typography/NamedSection";
import NamedSubSection from "@/components/Typography/NamedSubSection";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <section className="pb-12 site-container mx-auto w-full max-w-[640px] px-[20px] flex flex-col gap-8">
      <Image
        src="/nestcoins.png"
        alt="Nestcoin"
        width={1000}
        height={200}
        className="w-full h-auto pt-4"
      />

      <div className="text-center items-center flex flex-col gap-2">
        <h3 className="text-[18px] font-semibold text-primary-blue">
          Earn together, redeem together
        </h3>

        <p className="text-xs text-secondary-text">
          Nest coins are credited to the nest and are accessible to all members of that nest. So every coin earned gets used
        </p>
      </div>

      <h3 className="text-center items-center text-[18px] font-semibold text-secondary">
        Nest coins{' '}
        <span className="text-primary-blue">
          never
        </span>
        {' '}expire!
      </h3>

      <NamedSection heading="Earn Nest coins">
        <NamedSubSection sl="1">
          1% of the transaction value, on every bill payment
        </NamedSubSection>
        <NamedSubSection sl="2">
          1% of the FD booking value, up to a maximum of 250 nest coins
        </NamedSubSection>
        <NamedSubSection sl="3">
          250 nest coins on successfully creating a nest
        </NamedSubSection>
        <NamedSubSection sl="4">
          250 nest coins when a member joins your nest. Add or invite your family to earn more
        </NamedSubSection>
      </NamedSection>

      <NamedSection heading="Redeem Nest coins">
        <NamedSubSection sl="1">
          Use nest coins to avail attractive discounts on gift card purchases in the reward store
        </NamedSubSection>
      </NamedSection>

      <p className="text-xs text-secondary-text">
        Nest coins are earned on successfully completed transactions on the platform. Nest coins are not credited on transactions that fail, reversed, refunded, cancelled, or disputed. Reward rates, per-transaction caps and eligible transaction types are as set out above.
      </p>

      <p className="text-xs text-secondary-text">
        Refer to our{" "}
        <Link href="/mobile/terms#coins" className="font-medium text-primary-blue">
          Terms of Use
        </Link>{" "}
        and{" "}
        <Link href="/mobile/privacy" className="font-medium text-primary-blue">
          Privacy Policy
        </Link>
        {" "} for more details
      </p>
    </section>
  );
};

export default page;
