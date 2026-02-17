import Bold from "@/components/Typography/Bold";
import Indent from "@/components/Typography/Indent";
import NamedSubSection from "@/components/Typography/NamedSubSection";
import NumberedSection from "@/components/Typography/NumberedSection";
import Para from "@/components/Typography/Para";
import TypoLinks from "@/components/Typography/TypoLinks";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Nest Money",
  description:
    "Read the Nest Money privacy policy and how we protect your information.",
};

const page = () => {
  return (
    <main className="min-h-screen py-[75px] site-container mx-auto text-justify leading-[200%]">
      <header className="h-[70px] md:h-[152px] text-[20px] md:text-[40px] font-semibold items-center bg-primary-blue text-white bg-[url('/linksPattren.svg')] bg-cover bg-center bg-no-repeat flex scroll-mt-[80px] pl-6 md:pl-10 md:rounded-tl-[40px] md:rounded-br-[40px] mb-10 rounded-tl-[24px] rounded-br-[24px]">
        <h1>Privacy Policy</h1>
      </header>
      <Para Nobreak>
        Nest Money values the trust You place in Us and respect Your privacy,
        maintaining the highest standards for secure transactions and protection
        of Your Personal Data. We have formulated this privacy policy
        (hereinafter referred to as <Bold>&ldquo;Privacy Policy&rdquo;</Bold> or{" "}
        <Bold>&ldquo;Policy&rdquo;</Bold>) to inform You about how Nest Money
        collects, stores, uses and otherwise processes Your data including Your
        Personal Data through Nest Money website www.nestmoney.in, Nest Money
        mobile Application, chatbots, notifications or any other medium used by
        Nest Money to provide its Services to You (hereinafter referred to as
        the <Bold>&ldquo;Platform&rdquo;</Bold>). The Platform is owned,
        maintained, operated and managed by Legentree Technologies Private
        Limited (hereafter referred in this document as{" "}
        <Bold>&ldquo;Nest Money&rdquo;</Bold>/ <Bold>&ldquo;We&rdquo;</Bold>/{" "}
        <Bold>&ldquo;Us&rdquo;</Bold>). The terms of this Privacy Policy shall
        apply to You (hereafter referred in this document as{" "}
        <Bold>&ldquo;You&rdquo;</Bold> or <Bold>&ldquo;User&rdquo;</Bold>) as
        the user of the Platform. By visiting, downloading, using Nest Money
        Platform, and/or, providing Your information or availing Our Services,
        You expressly agree to be bound by this Privacy Policy as well as Our
        Terms of Use.
      </Para>
      <Para Nobreak>
        This Privacy Policy is published and shall be construed in accordance
        with the provisions of Indian laws and regulations including the Digital
        Personal Data Protection Act, 2023 (<Bold>&ldquo;DPDPA&rdquo;</Bold>),
        the related DPDP Rules, 2025 and their respective amendments, that
        require publishing of the privacy policy for collection, use, storage,
        transfer, disclosure of Personal Data. Personal Data means any data that
        identifies or relates to an identifiable individual, excluding any
        information that is made publicly available as per applicable law
        (hereinafter referred to as <Bold>&ldquo;Personal Data&rdquo;</Bold>).
        If You disclose to us any Personal Data relating to other people, You
        represent that You have the authority to do so and permit us to use such
        information in accordance with this Privacy Policy.
      </Para>

      <Para Nobreak>
        If You do not agree with Our Privacy, please discontinue use of Our
        Services; Your continued usage of the Platform shall signify Your
        consent to and acceptance of Our Privacy Policy and the related Terms of
        Use.
      </Para>

      <NumberedSection sl={1}>
        What data do we collect from YOU?
        <Indent>
          <p className="heading-legal mb-3">Personal Data</p>
          <Para>
            We collect Personal Data that You provide voluntarily when You
            register on to the Platform or procure any Services through the
            Platform or make any inquiries through the Platform or communicate
            with Nest Money by email, telephone, letter or other methods, or
            subscribe for newsletters or other information services, or report a
            problem with the Platform, or otherwise contact Us.
          </Para>
          <Para>
            We will collect Personal Data necessary to offer and fulfil the
            Services You request, that You provide Us through the Platform
            including but not limited to Name, Mobile Number, Email Address. We
            collect Your Personal Data such as Permanent Account Number (PAN),
            Your business-related information, videos or other online/ offline
            verification documents as mandated by relevant regulatory
            authorities for the purpose of identity verification, compliance
            with applicable Know Your Customer (KYC) requirements and for
            enabling Services under the Platform. We may ask You for additional
            information depending on the nature of Services You seek to avail
            through the Platform.
          </Para>
          <Para>
            The Platform enables You to create a User profile, which consists of
            information about You, and may include Your Personal Data, Your
            financial information and other information including Your username
            (“Profile”). We will be collecting Your associated Profile
            information, including but not limited to name, email id, other
            Profile details as may be provided by You, Your transactions or
            attempts to transact on the Platform, OTP sent to You by Nest Money,
            accessing links, e-mails, chat conversations, feedbacks,
            notifications sent or owned by the Platform and if You opt to
            participate in Our occasional surveys.
          </Para>
          <Para>
            We and Our service providers or business partners may also collect
            Your Personal Data from third parties or information made publicly
            available, as applicable, including but not limited to: Bill-related
            information, Your demographic and photo information including but
            not limited to address, gender, and date of birth.
          </Para>
          <Para>
            To provide specific Services, such as identity verification for KYC
            or secure document uploads to Your Nest Safe, the Platform may
            request specific device permissions. All such permissions are
            requested on a &apos;Need-to-Use&apos; basis, and You may revoke
            these at any time through Your device settings or by reaching out to
            our support team at{" "}
            <TypoLinks email="support@nestmoney.in">
              support@nestmoney.in
            </TypoLinks>
            . Please note that revoking certain permissions may limit Your
            ability to use specific features of the Platform.
          </Para>
          <p className="heading-legal mb-3">Technical and Usage Data</p>
          <Para>
            We collect Personal Data that You provide voluntarily when You
            register on to the Platform or procure any Services through the
            Platform or make any inquiries through the Platform or communicate
            with Nest Money by email, telephone, letter or other methods, or
            subscribe for newsletters or other information services, or report a
            problem with the Platform, or otherwise contact Us.
          </Para>
          <NamedSubSection sl="a">
            Scope of Collection: When You access or use the Platform, We
            automatically collect certain technical and usage information,
            including device identifiers, device model, IP addresses, operating
            systems, browser types, and network information. Such data may be
            collected at various stages of Your usage of the Platform such as
            visiting the Platform, registering on the Platform as a “User” or
            any other relationship that may be governed by Our Terms of Use or
            creating Your Nest Money user account.
          </NamedSubSection>
          <NamedSubSection sl="b">
            Personal Data Classification: While such information may be
            processed in an aggregated or de-identified manner for analytics and
            system administration, any data that can be linked to You is treated
            as “Digital Personal Data” and processed in accordance with the
            DPDPA.
          </NamedSubSection>
          <NamedSubSection sl="c">
            Log Retention: We may retain system logs and technical records for
            such period as is reasonably required for security monitoring, fraud
            detection, audit, and compliance with applicable legal and
            regulatory requirements.
          </NamedSubSection>
          <NamedSubSection sl="d">
            Purpose Limitation: This information is used for platform security,
            performance monitoring, Service improvement and regulatory
            compliance. We do not use such data for marketing or advertising
            profiling without Your consent.
          </NamedSubSection>
        </Indent>
      </NumberedSection>
      <NumberedSection sl={2}>
        Our role in processing personal data
        <Para>
          Nest Money acts as the Data Fiduciary under the DPDPA for all Personal
          Data processed through the Platform. While We may engage third-party
          Data Processors to perform specific tasks on Our behalf, We remain
          primarily responsible for ensuring that such processing complies with
          the Act and applicable sectoral regulatory requirements. All such
          processors operate under binding valid contracts that mandate the use
          of reasonable security safeguards, confidentiality obligations and
          deletion upon completion of services, restrict data use to Our
          documented instructions, and grant Us the right to audit their
          compliance periodically.
        </Para>
        <Para>
          Under the DPDPA, certain categories of Data Fiduciaries may be
          notified by the Government of India as Significant Data Fiduciaries
          (“SDFs”) based on factors such as volume and sensitivity of data
          processed, risk to data principals, and impact on national interests.
          As of the date of this Privacy Policy, Nest Money has not been
          notified as an SDF. However, in the event Nest Money is designated as
          an SDF in the future, it shall comply with all additional obligations
          applicable to such entities, including but not limited to appointment
          of a Data Protection Officer, conduct of Data Protection Impact
          Assessments, independent audits and enhanced governance requirements,
          in accordance with applicable law.
        </Para>
      </NumberedSection>
    </main>
  );
};

export default page;
