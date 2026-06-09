import Image from "next/image";

const FD = () => {
    return (
        <section id="fixed deposit" className="scroll-mt-[70px] md:scroll-mt-[74px] space-y-10 lg:space-y-15 mb-[64px] md:mb-[128px] xl:mb-[160px] w-[320px] md:w-full mx-auto">
            <div className="w-full flex items-center">
                <div className="flex-1 border-t-1 border-dashed border-border"></div>
                <h2
                    className="px-4 text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px]
            text-primary-blue font-semibold text-center whitespace-nowrap">
                    Investments
                </h2>
                <div className="flex-1 border-t-1 border-dashed border-border"></div>
            </div>

            <div className="space-y-[32px] lg:space-y-0">
                <div className="flex flex-col md:flex-row items-center justify-between gap-0 md:gap-11 lg:gap-0">
                    <Image
                        className="w-[200px] md:w-[240px] lg:w-[300px] xl:w-[340px] h-auto object-contain shrink-0"
                        src="/fixeddeposit.png"
                        width={400}
                        height={400}
                        alt="home"
                    />

                    <div className="mt-6 md:mt-0 xl:max-w-[600px] lg:max-w-[540px] text-center md:text-left items-center md:items-start flex flex-col gap-4">
                        <Image
                            className="w-[50px] md:w-[60px] lg:w-[80px] xl:w-[90px] h-auto object-contain shrink-0"
                            src="/ic_fd.png"
                            width={100}
                            height={100}
                            alt="fd"
                        />

                        <h3 className="text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px] font-semibold">
                            Fixed deposit
                        </h3>

                        <p className="text-[14px] md:text-[18px] lg:text-[20px]">
                            Invest in high interest rate FDs offered by RBI regulated Banks & NBFCs
                        </p>

                        <div className="w-full">
                            {/* Mobile */}
                            <Image
                                className="block md:hidden w-full h-auto"
                                src="/issuers-center.png"
                                width={600}
                                height={600}
                                alt="mobile-fds"
                            />

                            {/* Desktop */}
                            <Image
                                className="hidden md:block w-full h-auto"
                                src="/issuers-left.png"
                                width={600}
                                height={600}
                                alt="desktop-fds"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FD;