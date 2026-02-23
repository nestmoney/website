import Bold from "@/components/Typography/Bold";
import Indent from "@/components/Typography/Indent";
import NamedSection from "@/components/Typography/NamedSection";
import NamedSubSection from "@/components/Typography/NamedSubSection";
import NumberedSection from "@/components/Typography/NumberedSection";
import Para from "@/components/Typography/Para";
import PrivacyTable from "@/components/Typography/Table";
import TypoLinks from "@/components/Typography/TypoLinks";
import Link from "next/link";
import ScrollToSection from "../Typography/ScrollToSection";
import { Suspense } from "react";

const PrivacyPage = ({ showHeader = true }: { showHeader?: boolean }) => {
  return (
    <main className="min-h-screen py-12 site-container mx-auto text-justify flex flex-col gap-12 w-full px-[20px] md:px-0">
      {showHeader && (
        <header className="h-[70px] md:h-[152px] text-[20px] md:text-[40px] font-semibold items-center bg-primary-blue text-white bg-[url('/linksPattren.svg')] bg-cover bg-center bg-no-repeat flex scroll-mt-[80px] pl-6 md:pl-10 md:rounded-tl-[40px] md:rounded-br-[40px] rounded-tl-[24px] rounded-br-[24px]">
          <h1>Privacy Policy</h1>
        </header>
      )}

      <div className="flex flex-col gap-8">
        <Para>
          Nest Money values the trust You place in Us and respect Your privacy,
          maintaining the highest standards for secure transactions and
          protection of Your Personal Data. We have formulated this privacy
          policy (hereinafter referred to as{" "}
          <Bold>&ldquo;Privacy Policy&rdquo;</Bold> or{" "}
          <Bold>&ldquo;Policy&rdquo;</Bold>) to inform You about how Nest Money
          collects, stores, uses and otherwise processes Your data including
          Your Personal Data through Nest Money website nestmoney.in, Nest Money
          mobile Application, chatbots, notifications or any other medium used
          by Nest Money to provide its Services to You (hereinafter referred to
          as the <Bold>&ldquo;Platform&rdquo;</Bold>). The Platform is owned,
          maintained, operated and managed by Legentree Technologies Private
          Limited (hereafter referred in this document as{" "}
          <Bold>&ldquo;Nest Money&rdquo;</Bold>/ <Bold>&ldquo;We&rdquo;</Bold>/{" "}
          <Bold>&ldquo;Us&rdquo;</Bold>). The terms of this Privacy Policy shall
          apply to You (hereafter referred in this document as{" "}
          <Bold>&ldquo;You&rdquo;</Bold> or <Bold>&ldquo;User&rdquo;</Bold>) as
          the user of the Platform. By visiting, downloading, using Nest Money
          Platform, and/or, providing Your information or availing Our Services,
          You expressly agree to be bound by this Privacy Policy as well as Our
          <Link href="/terms" className="text-primary-blue pl-1">
            Terms of Use.
          </Link>
        </Para>
        <Para>
          This Privacy Policy is published and shall be construed in accordance
          with the provisions of Indian laws and regulations including the
          Digital Personal Data Protection Act, 2023 (
          <Bold>&ldquo;DPDPA&rdquo;</Bold>), the related DPDP Rules, 2025 and
          their respective amendments, that require publishing of the privacy
          policy for collection, use, storage, transfer, disclosure of Personal
          Data. Personal Data means any data that identifies or relates to an
          identifiable individual, excluding any information that is made
          publicly available as per applicable law (hereinafter referred to as{" "}
          <Bold>&ldquo;Personal Data&rdquo;</Bold>). If You disclose to us any
          Personal Data relating to other people, You represent that You have
          the authority to do so and permit us to use such information in
          accordance with this Privacy Policy.
        </Para>
        <Para>
          If You do not agree with Our Privacy, please discontinue use of Our
          Services; Your continued usage of the Platform shall signify Your
          consent to and acceptance of Our Privacy Policy and the related Terms
          of Use.
        </Para>
      </div>

      <NumberedSection sl={1} heading="What data do we collect from YOU?">
        <div className="flex flex-col gap-4">
          <NamedSection heading="Personal Data">
            <Indent className="flex flex-col gap-4">
              <Para>
                We collect Personal Data that You provide voluntarily when You
                register on to the Platform or procure any Services through the
                Platform or make any inquiries through the Platform or
                communicate with Nest Money by email, telephone, letter or other
                methods, or subscribe for newsletters or other information
                services, or report a problem with the Platform, or otherwise
                contact Us.
              </Para>
              <Para>
                We will collect Personal Data necessary to offer and fulfil the
                Services You request, that You provide Us through the Platform
                including but not limited to Name, Mobile Number, Email Address.
                We collect Your Personal Data such as Permanent Account Number
                (PAN), Your business-related information, videos or other
                online/ offline verification documents as mandated by relevant
                regulatory authorities for the purpose of identity verification,
                compliance with applicable Know Your Customer (KYC) requirements
                and for enabling Services under the Platform. We may ask You for
                additional information depending on the nature of Services You
                seek to avail through the Platform.
              </Para>
              <Para>
                The Platform enables You to create a User profile, which
                consists of information about You, and may include Your Personal
                Data, Your financial information and other information including
                Your username (“Profile”). We will be collecting Your associated
                Profile information, including but not limited to name, email
                id, other Profile details as may be provided by You, Your
                transactions or attempts to transact on the Platform, OTP sent
                to You by Nest Money, accessing links, e-mails, chat
                conversations, feedbacks, notifications sent or owned by the
                Platform and if You opt to participate in Our occasional
                surveys.
              </Para>
              <Para>
                We and Our service providers or business partners may also
                collect Your Personal Data from third parties or information
                made publicly available, as applicable, including but not
                limited to: Bill-related information, Your demographic and photo
                information including but not limited to address, gender, and
                date of birth.
              </Para>
              <Para>
                To provide specific Services, such as identity verification for
                KYC or secure document uploads to Your Nest Safe, the Platform
                may request specific device permissions. All such permissions
                are requested on a &apos;Need-to-Use&apos; basis, and You may
                revoke these at any time through Your device settings or by
                reaching out to our support team at{" "}
                <TypoLinks email="support@nestmoney.in">
                  support@nestmoney.in
                </TypoLinks>
                . Please note that revoking certain permissions may limit Your
                ability to use specific features of the Platform.
              </Para>
            </Indent>
          </NamedSection>
          <NamedSection heading="Technical and Usage Data">
            <Indent className="flex flex-col gap-4">
              <Para>
                We collect Personal Data that You provide voluntarily when You
                register on to the Platform or procure any Services through the
                Platform or make any inquiries through the Platform or
                communicate with Nest Money by email, telephone, letter or other
                methods, or subscribe for newsletters or other information
                services, or report a problem with the Platform, or otherwise
                contact Us.
              </Para>
              <div>
                <NamedSubSection sl="a">
                  Scope of Collection: When You access or use the Platform, We
                  automatically collect certain technical and usage information,
                  including device identifiers, device model, IP addresses,
                  operating systems, browser types, and network information.
                  Such data may be collected at various stages of Your usage of
                  the Platform such as visiting the Platform, registering on the
                  Platform as a “User” or any other relationship that may be
                  governed by Our{" "}
                  <Link href="/terms" className="text-primary-blue pl-1">
                    Terms of Use.
                  </Link>{" "}
                  or creating Your Nest Money user account.
                </NamedSubSection>
                <NamedSubSection sl="b">
                  Personal Data Classification: While such information may be
                  processed in an aggregated or de-identified manner for
                  analytics and system administration, any data that can be
                  linked to You is treated as “Digital Personal Data” and
                  processed in accordance with the DPDPA.
                </NamedSubSection>
                <NamedSubSection sl="c">
                  Log Retention: We may retain system logs and technical records
                  for such period as is reasonably required for security
                  monitoring, fraud detection, audit, and compliance with
                  applicable legal and regulatory requirements.
                </NamedSubSection>
                <NamedSubSection sl="d">
                  Purpose Limitation: This information is used for platform
                  security, performance monitoring, Service improvement and
                  regulatory compliance. We do not use such data for marketing
                  or advertising profiling without Your consent.
                </NamedSubSection>
              </div>
            </Indent>
          </NamedSection>
        </div>
      </NumberedSection>

      <NumberedSection sl={2} heading="Our role in processing personal data">
        <Indent>
          <Para>
            Nest Money acts as the Data Fiduciary under the DPDPA for all
            Personal Data processed through the Platform. While We may engage
            third-party Data Processors to perform specific tasks on Our behalf,
            We remain primarily responsible for ensuring that such processing
            complies with the Act and applicable sectoral regulatory
            requirements. All such processors operate under binding valid
            contracts that mandate the use of reasonable security safeguards,
            confidentiality obligations and deletion upon completion of
            services, restrict data use to Our documented instructions, and
            grant Us the right to audit their compliance periodically.
          </Para>
          <Para>
            Under the DPDPA, certain categories of Data Fiduciaries may be
            notified by the Government of India as Significant Data Fiduciaries
            (“SDFs”) based on factors such as volume and sensitivity of data
            processed, risk to data principals, and impact on national
            interests. As of the date of this Privacy Policy, Nest Money has not
            been notified as an SDF. However, in the event Nest Money is
            designated as an SDF in the future, it shall comply with all
            additional obligations applicable to such entities, including but
            not limited to appointment of a Data Protection Officer, conduct of
            Data Protection Impact Assessments, independent audits and enhanced
            governance requirements, in accordance with applicable law.
          </Para>
        </Indent>
      </NumberedSection>

      <NumberedSection sl={3} heading="How do we use your data ?">
        <Indent>
          <Para>
            Processing of Personal Data: We process Personal Data strictly in
            accordance with applicable law and only on one of the following
            lawful bases:
          </Para>

          <NamedSubSection sl="a">
            <Bold> Consent : </Bold>
            We process Your data based on Your free, specific, informed, and
            unambiguous consent, obtained through a clear affirmative action
            (such as a toggle, checkbox or button). You have the right to
            withdraw this consent at any time through Our privacy settings or
            contacting Our support centre at{" "}
            <TypoLinks email="support@nestmoney.in">
              support@nestmoney.in
            </TypoLinks>
            . Where enabled under applicable law, You may also manage, review,
            or withdraw Your consent through any registered Consent Manager
            authorized by the Data Protection Board of India.
          </NamedSubSection>

          <NamedSubSection sl="b">
            <Bold> Legitimate Uses : </Bold>
            We may process Your data without seeking fresh consent only in
            limited, high-integrity scenarios defined by law, including:
            <NamedSubSection sl="i">
              Voluntary Provision: When You voluntarily share data for a
              specific, obvious request (e.g., sharing a phone number
              specifically to receive a payment receipt).
            </NamedSubSection>
            <NamedSubSection sl="ii">
              Legal & Regulatory Mandates: To comply with any judgment, order,
              or sector-specific law or regulations.
            </NamedSubSection>
            <NamedSubSection sl="iii">
              Safety & Security : To detect and prevent fraud, ensure the
              cybersecurity of Our Platform, etc.
            </NamedSubSection>
          </NamedSubSection>

          <NamedSubSection sl="c">
            <Bold> Other Lawful Basis : </Bold>
            We process Your data based on Your free, specific, informed, and
            unambiguous consent, obtained through a clear affirmative action
            (such as a toggle or checkbox). You have the right to withdraw this
            consent at any time through Our privacy settings or contacting Our
            support centre at{" "}
            <TypoLinks email="support@nestmoney.in">
              support@nestmoney.in
            </TypoLinks>
            . Where enabled under applicable law, You may also manage, review,
            or withdraw Your consent through any registered Consent Manager
            authorized by the Data Protection Board of India.
          </NamedSubSection>

          <Para className="mt-4">
            <Bold>Consent & Withdrawal Mechanism : </Bold> Where mandated by
            law, We obtain Your consent through clear, affirmative, and granular
            actions for distinct purposes. You have the right to withdraw Your
            consent at any time with the same ease as it was provided by
            contacting Our support team. While withdrawal does not affect the
            lawfulness of processing conducted prior to such request, We shall,
            within the legally prescribed time limit, and as per the applicable
            legal mandates, cease processing Your data for the revoked purpose,
            unless such processing is otherwise required or authorized under
            applicable law.
          </Para>

          <Para>
            In case of the Nest feature of the Platform, where a User invites a
            family member to join the Nest by creation of an account, such
            family member shall be required to provide their own consent for
            processing of their Personal Data. Consent shall be obtained
            directly from the family member through an OTP-based confirmation
            sent to their registered mobile number, along with a notice of the
            purpose and scope of processing. No processing of such data shall
            occur unless and until such consent is provided.
          </Para>

          <Para Nobreak className="mt-4">
            We use the Personal Data collected from You strictly for the
            following purposes:
          </Para>
          <NamedSubSection sl="a">
            facilitation of utility bill payments and credit card bill payments
            through BBPS and related payment systems;
          </NamedSubSection>
          <NamedSubSection sl="b">
            access to and analysis of credit reports from authorised credit
            information companies;
          </NamedSubSection>
          <NamedSubSection sl="c">
            secure storage of financial and identity documents uploaded by You;
          </NamedSubSection>
          <NamedSubSection sl="d">
            customer authentication, KYC and fraud prevention;
          </NamedSubSection>
          <NamedSubSection sl="e">
            regulatory compliance and record retention;
          </NamedSubSection>
          <NamedSubSection sl="f">
            customer support, grievance handling and to meet legal obligations;
          </NamedSubSection>
          <NamedSubSection sl="g">
            to resolve disputes; troubleshoot problems; technical support and
            fixing bugs; help promote a safe service
          </NamedSubSection>
          <NamedSubSection sl="h">
            platform security, system monitoring and incident detection; and
          </NamedSubSection>
          <NamedSubSection sl="i">
            marketing and administrative communications and other information
            that may be of interest to You, only where You have provided
            separate consent.
          </NamedSubSection>

          <Para className="mt-4">
            While We may also process Your Personal Data for other legitimate
            business cases with a valid lawful basis under DPDPA. We ensure to
            take appropriate steps to minimize the processing to the extent
            possible, making it less intrusive to Your privacy.
          </Para>

          <Para>
            The primary bases relied upon for the use of Personal Data are
            summarised below:
          </Para>

          <PrivacyTable />
          <Para>
            We also use technical and usage information that We collect about
            You:
          </Para>
          <NamedSubSection sl="1">
            to enable Your seamless use of the Platform;
          </NamedSubSection>

          <NamedSubSection sl="2">
            to contact visitors of the Platform when necessary;
          </NamedSubSection>

          <NamedSubSection sl="3">
            to resolve any issues with the Platform;
          </NamedSubSection>

          <NamedSubSection sl="4">
            to efficiently manage the Platform which includes analysis,
            research, statistical and survey uses, together with testing and
            troubleshooting;
          </NamedSubSection>

          <NamedSubSection sl="5">
            to ensure the Platform is safe and secure by monitoring activities
            within the context of continual process improvement;
          </NamedSubSection>

          <NamedSubSection sl="6">
            to improve the algorithms, marketing efforts and enhance the overall
            service levels and offerings.
          </NamedSubSection>

          <Para className="mt-4">
            Nest Money may use technical and usage information for the
            above-mentioned purposes as well as to monitor the Platform and
            provide a better online experience to the Users.
          </Para>

          <Para className="mt-4">
            <Bold> Processing of Credit Information:</Bold> Where Nest Money
            facilitates access to credit reports or credit score analysis, such
            processing shall be undertaken strictly in accordance with the
            Credit Information Companies (Regulation) Act, 2005 and other
            applicable regulatory guidelines and directions. Credit information
            shall be accessed only upon explicit consent of the User and shall
            not be used, reused, shared or retained beyond what is legally
            permitted. All User consents given for credit report access, will be
            stored by Nest Money for a period of 180 days from the date of such
            consent or till the date the User revokes such consent, whichever is
            earlier. Upon expiry of such period the consent data will be purged
            by Nest Money.
          </Para>

          <Para className="mt-4">
            <Bold> Processing of Financial and Payment Data:</Bold> We process
            payment data in compliance with all applicable legal and regulatory
            frameworks. All payment-related data is stored and processed within
            India.
          </Para>

          <Para className="mt-4">
            <Bold>Information in the Nest Safe:</Bold> We provide secure
            document storage services solely for the purpose of safekeeping and
            retrieval by the User. Uploaded documents are encrypted and the
            contents of the same will not be accessed by Nest Money. Users may
            delete stored documents at any time, subject to legal retention
            requirements.
          </Para>
          <Para>
            We may analyze Your information, Your interactions with the
            Platform, usage patterns etc., to improve Our Services, enhance User
            experience, to provide recommendations and to offer certain User
            benefits.
          </Para>
          <Para>
            Our settings may also allow You to adjust Your communications
            preferences. If You opt out, You will still receive non-promotional
            messages from Us about enquiring of any additional information that
            We may require for performing Services through the Platform.
          </Para>
          <Para>
            We may share Your information with the government or disaster
            management agencies in case of emergencies or under the instructions
            of the government authorities.
          </Para>
        </Indent>
      </NumberedSection>

      <NumberedSection sl={4} heading="How do we share your personal data?">
        <Indent>
          <Para>
            We shall not share the Personal Data We collect about You except as
            mentioned here:
          </Para>

          <NamedSubSection sl="a">
            As a matter of policy, We do not sell or rent information about You
            and We do not disclose information about You in a manner
            inconsistent with this Privacy Policy except as required by law or
            government regulation. We cooperate with law enforcement inquiries,
            as well as other third parties, to enforce laws such as those
            regarding, fraud, financial crimes and other personal rights
            violations. Therefore, We share Your information when Nest Money is
            required by law to share the information in situations such as
            <NamedSubSection sl="i">
              when We suspect a violation of the Terms;
            </NamedSubSection>
            <NamedSubSection sl="ii">
              co-operating with law enforcement agencies in response to any
              judicial order; or
            </NamedSubSection>
            <NamedSubSection sl="iii">
              co-operating with any investigation on matters related to public
              safety,illegal activities, suspected fraud, intellectual property
              infringement, threats to the physical safety of any person, or any
              activity that may expose Us or You to liability etc., as may be
              permitted by law.
            </NamedSubSection>
          </NamedSubSection>

          <NamedSubSection sl="b">
            With third parties such as Axis Bank, Razorpay, Setu, and Experian,
            strictly on a need-to-know basis and solely for the purpose of
            providing Services in relation to the Platform. You may review the
            privacy policies of the respective third-party platforms.
          </NamedSubSection>
          <NamedSubSection sl="c">
            In addition to the above We may share information with cloud
            infrastructure providers, analytics providers and customer support
            vendors as required.
          </NamedSubSection>
          <NamedSubSection sl="d">
            All third-party service providers operate under specific written
            contracts compliant with DPDPA.
          </NamedSubSection>
          <NamedSubSection sl="e">
            We may sell, transfer or otherwise share some or all of Our assets,
            including Your Personal Data, in connection with a merger,
            acquisition, reorganization or sale of assets (including, in each
            case, as part of the due-diligence process with any potential
            acquiring entity) or in the event of bankruptcy. You shall be
            notified via email and/or a prominent notice on Our Platform of any
            change in ownership or uses of Your Personal Data, as well as any
            choices You may have regarding Your Personal Data.
          </NamedSubSection>

          <Para className="mt-4">
            Notwithstanding anything to the contrary in this Policy, We may
            preserve or disclose Your Personal Data if We believe that it is
            reasonably necessary to comply with a law, regulation or legal
            request; to protect the safety of any person; to address fraud,
            security or technical issues; or to protect Our rights or property.
          </Para>

          <Para>
            However, nothing in this Policy is intended to limit any legal
            defenses or objections that You may have against a third party,
            including a government’s request to disclose Your Personal Data.
          </Para>
        </Indent>
      </NumberedSection>

      <NumberedSection
        sl={5}
        heading="Where and how long do we retain your information?"
      >
        <Indent>
          <Para>
            To the extent required by law, Nest Money primarily stores and
            processes Your Personal Data on secure servers located within the
            territory of India. We shall only retain Your Personal Data in
            accordance with applicable laws and for a period no longer than
            necessary to fulfil the purposes We collected it for, including for
            the purposes of satisfying any legal, accounting, or reporting
            requirements. However, We may retain Your Personal Data for a
            different retention period if We believe it may be necessary to
            prevent fraud or future abuse or if required by law such as in the
            event of the pendency of any legal/regulatory proceeding or receipt
            of any legal and/or regulatory direction to that effect or for other
            lawfully authorized legitimate purposes. Once the Personal Data has
            reached its retention period, it shall be deleted in compliance with
            applicable laws.
          </Para>

          <Para className="mt-4">
            Following termination or deactivation of Your account, We may (but
            are under no obligation to) retain Your information for legitimate
            interests such as part of analytical projects where We anonymize
            personal data in order to generate aggregated statistical data, and
            as evidence of transactions conducted by You through the Platform
            for regulatory purposes. We shall not disclose any of Your Personal
            Data other than as described in this Privacy Policy.
          </Para>
        </Indent>
      </NumberedSection>

      <NumberedSection
        sl={6}
        heading="How to Ensure Your Information Is Accurate and Up-to-Date"
      >
        <Indent>
          <Para>
            We take reasonable precautions to ensure that the Personal Data We
            collect, use and process is complete, relevant and up-to-date.
            However, the accuracy of that information depends to a large extent
            on the information You provide. That&apos;s why We recommend that
            You:
          </Para>
          <NamedSubSection sl="a">
            Let Us know if there are any errors in Your Personal Data; and
          </NamedSubSection>
          <NamedSubSection sl="b">
            Keep Us up-to-date with changes to Your Personal Data such as Your
            name, address, etc.
          </NamedSubSection>
        </Indent>
      </NumberedSection>

      <NumberedSection sl={7} heading="How do we ensure your data is secure?">
        <Indent className="flex flex-col gap-4">
          <Para>
            We give high priority to safeguarding the confidentiality of Your
            data including Your personally identifiable information. We employ
            administrative, physical and electronic measures designed to protect
            Your information from unauthorized access.
          </Para>

          <Para>
            We implement a ‘Privacy by Design’ and ‘Security by Design’ culture
            across its systems and processed to make sure privacy of Your data
            is not compromised at any stage. We implement encryption where
            appropriate.
          </Para>

          <Para>
            In view of the nature of data processed, including financial,
            transactional and credit-related data, Nest Money maintains robust
            organisational and technical measures including periodic risk
            assessments, access controls, encryption, in alignment with the
            applicable legal, regulatory and sectoral cybersecurity
            requirements. Where mandated by law, We shall undertake Data
            Protection Impact Assessments and independent security reviews to
            evaluate and mitigate risks arising from processing activities.
          </Para>

          <Para>
            We use commercially reasonable physical, managerial, and technical
            safeguards to preserve the integrity and security of all information
            collected through or in connection with the Platform. Our employees
            are trained and required to safeguard Your information.
          </Para>

          <Para>
            To protect Your privacy and security, We take reasonable steps (such
            as requesting a unique password) to verify Your identity before
            granting You access to Your account. You are responsible for
            maintaining the security of your devices, secrecy of Your unique
            password and account information, and for controlling access to Your
            communications with Nest Money. You shall promptly intimate us in
            case of any actual or suspected compromise to Your Personal Data.
          </Para>

          <Para>
            Although We shall always use reasonable efforts to secure network
            communications and the Platform, We cannot guarantee that the
            information submitted to, maintained on, or transmitted from Our
            systems shall be completely secure or that information on the
            Platform may not be accessed, disclosed, altered, or destroyed.
            Using unsecured wi-fi or other unprotected networks to use the
            Service is never recommended.
          </Para>

          <Para>
            Please do not send any Personal Data to Nest Money through any
            channels other than those intimated by Us. If You have reason to
            believe that Your interaction with Us is not secure (for example, if
            You feel that the security of any account You might have with Us has
            been compromised), You must immediately notify Us of the problem by
            contacting Us at{" "}
            <TypoLinks email="support@nestmoney.in">
              support@nestmoney.in
            </TypoLinks>
          </Para>
        </Indent>
      </NumberedSection>

      <NumberedSection
        sl={8}
        heading="How do we use cookies and similar technologies"
      >
        <Indent>
          <Para>
            We use cookies and similar technologies to ensure the secure and
            efficient operation of the Platform and to improve user experience.
          </Para>
          <NamedSubSection sl="a">
            <Bold>Essential Cookies : </Bold> These are strictly necessary for
            core functionality, such as secure login, session management and
            fraud prevention, and do not require prior consent.
          </NamedSubSection>
          <NamedSubSection sl="b">
            <Bold>Non-Essential Cookies : </Bold> For analytics, performance
            enhancement and usage patterns (including Google Analytics), We
            deploy such technologies only after obtaining Your clear affirmative
            consent through Our cookie preference banner.
          </NamedSubSection>
          <NamedSubSection sl="c">
            <Bold>Third-Party Services : </Bold> Certain third-party services
            may process data in accordance with their own privacy policies and
            Our written contracts.
          </NamedSubSection>
          <NamedSubSection sl="d">
            <Bold>Control : </Bold> You are always free to decline/delete Our
            cookies or similar technologies if Your browser/device permits,
            although in that case You may not be able to use certain features on
            the Platform and You may be required to re-enter Your password more
            frequently during a session. Additionally, You may encounter
            “cookies” or other similar technologies on certain pages of the
            Platform that are placed by third parties.
          </NamedSubSection>
        </Indent>
      </NumberedSection>

      <NumberedSection
        sl={9}
        heading="WHAT IS OUR POLICY ON THIRD PARTY SERVICES"
      >
        <Indent>
          <Para>
            We may provide access to services provided by third-party including
            but not limited to billers, card issuers, and document providers (
            <Bold>“Third-Party Services”</Bold>) on the Platform, who may have
            privacy policies that are dissimilar to this Platform and for which
            We are not accountable. Further, You may be required to download
            certain third-party applications for making use of certain
            functionalities of the Services, which may be governed by terms of
            use and privacy policy, which may be different from that of the
            Platform. We recommend that You review the privacy policy posted on
            any Third Party Service platform or applications, that You may
            access through the Platform or download in connection with the
            Services.
          </Para>
        </Indent>
      </NumberedSection>

      <NumberedSection
        sl={10}
        heading="WHAT ARE YOUR RIGHTS OVER YOUR PERSONAL DATA"
      >
        <Indent>
          <Para>
            With respect to Your Personal Data that We have access to, You have
            the right to:
          </Para>

          <NamedSubSection sl="a">
            <Bold>request access to Information :</Bold> You have the right to
            obtain from Nest Money a summary of the Personal Data being
            processed about You, the processing activities undertaken, and the
            identities of all Data Fiduciaries and Data Processors with whom
            such Personal Data has been shared, subject to applicable law.
          </NamedSubSection>

          <NamedSubSection sl="b">
            <Bold>request correction and updation :</Bold> You have the right to
            request correction of inaccurate Personal Data and completion or
            updating of incomplete Personal Data that Nest Money holds about
            You, though We may need to verify the accuracy of the new data You
            provide to Us before making such corrections.
          </NamedSubSection>

          <NamedSubSection sl="c">
            <Bold>request request erasure :</Bold> of Your personal data to seek
            deletion or removal of personal data where there is no good reason
            for Us continuing to process it. You also have the right to ask Us
            to delete or remove Your personal data where You have successfully
            exercised Your right to withdraw consent, where We may have
            processed Your information unlawfully or where We are required to
            erase Your personal data to comply with local law. Note, however,
            that Your right is subject to Our legal obligations to retain
            certain data under applicable laws, including financial, regulatory
            and accounting requirements. If We are unable to comply with Your
            request of erasure for specific legal reasons, You shall be
            notified, at the time of Your request.
          </NamedSubSection>

          <NamedSubSection sl="d">
            <Bold>withdraw consent :</Bold> at any time through the Platform or
            by contacting Our support team, the designated grievance redressal
            officer, where We are relying on consent to process Your Personal
            Data. This shall not affect the lawfulness of any processing carried
            out before You withdraw Your consent. If You withdraw Your consent,
            We may not be able to provide certain products or Services to You.
            We will advise You if this is the case at the time You withdraw Your
            consent
          </NamedSubSection>

          <NamedSubSection sl="e">
            <Bold>nominate :</Bold> You have the right to nominate one or more
            individuals to exercise Your rights under the DPDPA in the event of
            Your death or incapacity. You may submit Your nomination by
            contacting Our support section at{" "}
            <TypoLinks email="support@nestmoney.in">
              support@nestmoney.in
            </TypoLinks>
            . Please ensure Your nominee is aware of this appointment. To
            protect Your privacy, We shall enquire the nominee to provide a
            valid death certificate or proof of incapacity and undergo identity
            verification before We grant access to Your data. consent
          </NamedSubSection>
          <NamedSubSection sl="f">
            <Bold>grievance redressal :</Bold> You have the right to register a
            grievance with Nest Money regarding the processing of Your Personal
            Data or any violation of Your rights under the DPDPA. Our designated
            officer will investigate and resolve Your concern typically within
            such timeline as may be prescribed by law.
          </NamedSubSection>
          <NamedSubSection sl="g">
            <Bold>approach the Data Protection Board :</Bold> Where You are
            dissatisfied with Our response to Your grievance, or do not receive
            a resolution within the prescribed timeline, You have the right to
            lodge a complaint with the Data Protection Board of India through
            its digital portal.
          </NamedSubSection>

          <Para className="mt-4">
            You can exercise Your rights specified herein above by contacting
            Our support section at{" "}
            <TypoLinks email="support@nestmoney.in">
              support@nestmoney.in
            </TypoLinks>
            .
          </Para>
        </Indent>
      </NumberedSection>

      <NumberedSection sl={11} heading="PRIVACY OF CHILDREN">
        <Indent>
          <Para>
            We do not knowingly collect or process Personal Data of individuals
            under the age of eighteen (18) years (&apos;Child&apos;) and use of
            Our Platform is available only to persons who can form a legally
            binding contract under the Indian Contract Act, 1872. Any Personal
            Data of a Child should only be shared with verifiable consent from a
            parent or legal guardian. If We discover data has been collected
            from a Child without verifiable parental consent, We shall purge it
            from Our systems and ensure Our Data Processors do the same without
            undue delay.
          </Para>
        </Indent>
      </NumberedSection>

      <NumberedSection sl={12} heading="DATA BREACH NOTIFICATION & RESPONSE">
        <Indent>
          <Para>
            In the event of a Personal Data Breach, Nest Money shall implement
            necessary measures to mitigate any potential harm. We are committed
            to transparency and shall:
          </Para>
          <NamedSubSection sl="a">
            <Bold>Notify the Board:</Bold> Provide an initial intimation to the
            Data Protection Board of India upon becoming aware of the breach,
            followed by a detailed report within the period prescribed under
            applicable law.
          </NamedSubSection>
          <NamedSubSection sl="b">
            <Bold>Notify Affected Users:</Bold> Inform each affected data
            principal without undue delay in a concise, clear, and plain manner.
            This notice will include the nature of the breach, likely
            consequences, measures taken by Us to mitigate risks, and actionable
            steps You can take to protect Your interests.
          </NamedSubSection>
        </Indent>
      </NumberedSection>

      <NumberedSection sl={13} heading="NOTIFICATION PROCEDURES">
        <Indent>
          <Para>
            It is Our policy to provide notifications, whether such
            notifications are required by law or are for marketing or other
            business-related purposes, to You via e-mail notice, WhatsApp, SMS,
            or through conspicuous posting of such notice on the Platform, as
            determined by Us in Our sole discretion. We reserve the right to
            determine the form and means of providing notifications to You,
            provided that You may opt out of certain means of notification as
            described in this Privacy Policy. By providing Us Your e-mail
            address and phone number You agree and authorize Nest Money to
            communicate with You via channels like calls, E-mail, WhatsApp, SMS,
            or App Notifications for the purposes set out in this Privacy
            Policy.
          </Para>
        </Indent>
      </NumberedSection>

      <NumberedSection sl={14} heading="PHISHING OR FALSE EMAILS">
        <Indent className="flex flex-col gap-4">
          <Para>
            Safeguarding information to help protect You from identity theft or
            “Phishing” is a top priority at Nest Money. We do not and shall not,
            at any time, request Your credit card information, Your account ID,
            login password, or national identification numbers in any unsecure
            or unsolicited e-mail, telephone or any other forms of
            communication.
          </Para>

          <Para>
            If You receive an unsolicited email or other forms of communication
            that appears to be from Us or one of Our members that requests
            Personal Data (such as Your credit card, login, or password), or
            that asks You to verify or confirm Your account or other Personal
            Data by clicking on a link, that communication was likely to have
            been sent by someone trying to unlawfully obtain Your information,
            sometimes referred to as a &quot;phisher&quot; or
            &quot;spoofer.&quot; Please contact Us at{" "}
            <TypoLinks email="support@nestmoney.in">
              support@nestmoney.in
            </TypoLinks>
            , with the subject line as “Phishing”, if You get any communication
            like this.
          </Para>
        </Indent>
      </NumberedSection>

      <NumberedSection sl={15} heading="CHANGES TO OUR PRIVACY POLICY">
        <Indent className="flex flex-col gap-4">
          <Para>
            With the changes in the Platform or due to change in applicable
            laws, We may be required, to add, remove, change or modify portions
            of this Privacy Policy from time to time. We strongly advise that
            You revisit this Privacy Policy regularly to ensure that You are
            aware of the updated privacy practices.
          </Para>
          <Para>
            We shall not reduce Your rights under this Privacy Policy without
            Your consent. If these privacy and/or information security
            procedures materially change at any time in the future, We will post
            the new changes conspicuously on the Platform to notify You and
            provide You with the ability to opt out in accordance with the
            provisions set forth above. We may also notify the change to You by
            email or other forms of communication, at Our discretion.
          </Para>
          <Para>
            Unless You consent to the revisions or changes, We shall continue to
            use Your Personal Data in a manner consistent with the Privacy
            Policy in effect at the time You submitted the information. We
            always indicate the date when the last update was made and We will
            make available the archived versions for Your review.
          </Para>
        </Indent>
      </NumberedSection>

      <NumberedSection sl={16} heading="BREACH OF PRIVACY POLICY">
        <Indent>
          <Para>
            We reserve the right to terminate or suspend Your usage of this
            Platform immediately if You are found to be in violation of Our
            Privacy Policy. We sincerely request You to respect privacy and
            secrecy concerns of others.
          </Para>
        </Indent>
      </NumberedSection>

      <NumberedSection sl={17} heading="NO RESERVATIONS">
        <Indent>
          <Para>
            We do not accept any reservation or any type of limited acceptance
            of Our Privacy Policy. You expressly agree to each and every term
            and condition as stipulated in this policy without any exception
            whatsoever.
          </Para>
        </Indent>
      </NumberedSection>

      <NumberedSection sl={18} heading="NO CONFLICT">
        <Indent className="flex flex-col gap-4">
          <Para>
            This Privacy Policy constitutes a part of the{" "}
            <Link href="/terms" className="text-primary-blue pl-1">
              Terms of Use.
            </Link>
            . We have taken utmost care to avoid any inconsistency or conflict
            of this policy with any other terms, agreements or guidelines
            available on Our Platform. In case there exists a conflict, We
            request You to kindly contact Us for the final provision and
            interpretation.
          </Para>
          <Para>
            This Privacy Policy operates subject to applicable sectoral laws and
            regulatory directions, including but not limited to guidelines,
            circulars and instructions, as may be applicable from time to time.
          </Para>
          <Para>
            In the event of any conflict between this Privacy Policy and any
            mandatory regulatory requirement applicable to Nest Money as a
            financial services or payment system participant, such regulatory
            requirement shall prevail.
          </Para>
        </Indent>
      </NumberedSection>

      <NumberedSection
        sl={19}
        heading="GRIEVANCE REDRESSAL AND DATA PROTECTION"
      >
        <Indent className="flex flex-col gap-4">
          <Para>
            Nest Money has designated a specific officer for grievance redressal
            to oversee its data protection and privacy practices, including
            grievance handling, in line with evolving regulatory expectations.
          </Para>

          <Para>
            You may contact Our designated officer regarding any concerns,
            requests for rights or grievances at:
            <br />
            Name: Supreeth T S<br />
            Email:{" "}
            <TypoLinks email="grievance@nestmoney.in">
              {" "}
              grievance@nestmoney.in{" "}
            </TypoLinks>
          </Para>

          <Para>
            Timeline & Escalation: We shall acknowledge Your grievance at the
            earliest and provide a final resolution within such timeline
            prescribed by law. If You are not satisfied with Our resolution, You
            have the right to escalate Your complaint to the Data Protection
            Board of India through its official digital portal.
          </Para>
        </Indent>
      </NumberedSection>

      <NumberedSection sl={20} heading="CONTACT US">
        <Indent>
          <Para>
            In case You have any questions, concerns, or complaints regarding
            the processing of Your Personal Data or this Privacy Policy please
            contact Our Privacy Team at{" "}
            <TypoLinks email="support@nestmoney.in">
              support@nestmoney.in
            </TypoLinks>
            . We are committed to answer Your questions within the reasonable
            time limit prescribed by law.
          </Para>
        </Indent>
      </NumberedSection>
      <Suspense fallback={null}>
        <ScrollToSection />
      </Suspense>
      <NumberedSection
        sl={21}
        heading="HOW IS YOUR PERSONAL DATA HANDLED IN THE NEST"
        id="nest"
        className="scroll-mt-5"
      >
        <Indent className="flex flex-col gap-4">
          <Para>
            This section explains how Personal Data is processed when You
            create, join, or use the Nest feature on the Platform. This notice
            is intended to provide a high-level, feature-specific overview to
            help You make an informed decision before providing Your consent.
          </Para>

          <Para>
            Detailed information regarding data retention, security safeguards,
            lawful processing grounds and Your rights under applicable law is
            set out in other sections of this Privacy Policy and applies equally
            to Personal Data processed through the Nest feature, unless stated
            otherwise. Detailed information about the Nest and its
            functionalities, is available in Our{" "}
            <Link href="/terms" className="text-primary-blue pl-1">
              Terms of Use.
            </Link>
          </Para>

          <NamedSection heading="What Personal Data Do We Process?">
            <>
              <Para>
                Depending on Your use of the Nest feature, We may process the
                following categories of Personal Data:
              </Para>
              <NamedSubSection sl="a">
                Identity Information: Full name, PAN number where required,
                address, date of birth, gender
              </NamedSubSection>
              <NamedSubSection sl="b">
                Contact Information: Mobile number, Email address
              </NamedSubSection>
              <NamedSubSection sl="c">
                Nest and Account-Related Information: Nest membership and Nest
                Member details, Profile information visible within the Nest,
                Transactions, bill payments, and assignments undertaken by You
                or on Your behalf within the Nest
              </NamedSubSection>
              <NamedSubSection sl="d">
                Credit-Related Information (Where Applicable): Credit score and
                credit report information obtained from authorised credit
                bureaus, strictly pursuant to Your explicit consent
              </NamedSubSection>
            </>
          </NamedSection>

          <NamedSection heading="How and Why Do We Process This Data?">
            <>
              <Para>
                We process Your Personal Data in connection with the Nest
                feature to:
              </Para>
              <NamedSubSection sl="a">
                create and manage Your Nest membership and profile;
              </NamedSubSection>
              <NamedSubSection sl="b">
                complete KYC formalities and perform Service related obligations
              </NamedSubSection>
              <NamedSubSection sl="c">
                enable shared functionality between Nest Members, including bill
                payments, credit report fetching, document sharing and other
                permitted account actions;
              </NamedSubSection>
              <NamedSubSection sl="d">
                facilitate credit report related Services where You have
                expressly consented;
              </NamedSubSection>
              <NamedSubSection sl="e">
                provide Nest-level visibility and controls to Nest Members; and
              </NamedSubSection>
              <NamedSubSection sl="f">
                comply with applicable legal, regulatory and contractual
                obligations, where relevant.
              </NamedSubSection>
              <Para>
                Further details on processing purposes, lawful grounds, and
                safeguards are described in the relevant sections of this
                Privacy Policy.
              </Para>
            </>
          </NamedSection>

          <NamedSection heading="Data Visibility and Actions Within a Nest">
            <>
              <Para>
                By choosing to join a Nest, You acknowledge and understand that:
              </Para>
              <NamedSubSection sl="a">
                certain Personal Data relating to You will be visible to other
                Nest Members of the same Nest,
              </NamedSubSection>
              <NamedSubSection sl="b">
                other Nest Members may take permitted actions as indicated in
                Our
                <Link href="/terms" className="text-primary-blue pl-1">
                  Terms of Use.
                </Link>
                , on Your behalf within the Nest, based on the permissions and
                consents granted by You,
              </NamedSubSection>
              <NamedSubSection sl="c">
                Documents uploaded to the Nest Safe are visible to other Nest
                Members only if You explicitly choose to share them.
              </NamedSubSection>
            </>
          </NamedSection>

          <NamedSection heading="Consent and Consent Management">
            <>
              <Para>
                Where consent is the legal basis for processing, consent for the
                processing of Your Personal Data in connection with the Nest
                feature is obtained directly from You through either OTP-based
                confirmation sent to Your registered contact details, or other
                specific consent mechanisms in the Platform.
              </Para>
              <Para>
                By entering or choosing to share such OTP, You provide Your
                clear and affirmative consent for the processing of Your
                Personal Data for the purposes described in this section and
                elsewhere in this Privacy Policy.
              </Para>
              <Para>
                You may withdraw or modify Your consent at any time using the
                controls available on the Platform or reaching out Our support
                team at{" "}
                <TypoLinks email="support@nestmoney.in">
                  support@nestmoney.in
                </TypoLinks>
                . Withdrawal of consent may result in limited access to certain
                Nest features, without affecting processing carried out prior to
                such withdrawal.
              </Para>
            </>
          </NamedSection>

          <NamedSection heading="Your Rights">
            <>
              <Para>
                Subject to applicable law, including the DPDPA, You have the
                right to:
              </Para>
              <NamedSubSection sl="a">
                <Bold>Withdraw</Bold> from a Nest or unlink Your profile from a
                Nest;
              </NamedSubSection>
              <NamedSubSection sl="b">
                <Bold>Correction</Bold> of inaccurate or outdated Personal Data;
              </NamedSubSection>
              <NamedSubSection sl="c">
                <Bold>Consent Management</Bold> including withdrawal of consent
                for specific Nest-related actions;
              </NamedSubSection>
              <NamedSubSection sl="d">
                <Bold>Nomination</Bold> of a person to exercise Your rights in
                the event of death or incapacity
              </NamedSubSection>
              <Para>
                Further information on Your rights, and how to exercise them, is
                provided in the relevant sections of this Privacy Policy.
              </Para>
            </>
          </NamedSection>

          <NamedSection heading="Grievance Redressal">
            <Para>
              If You have any questions or grievances relating to the processing
              of Your Personal Data through the Nest feature, You may contact
              Our designated Grievance Officer at
              <TypoLinks email="grievance@nestmoney.in">
                {" "}
                grievance@nestmoney.in
              </TypoLinks>
              . If You do not receive a response within the period prescribed
              under applicable law, You may approach the Data Protection Board
              of India in the manner notified by it.
            </Para>
          </NamedSection>
        </Indent>
      </NumberedSection>
    </main>
  );
};
export default PrivacyPage;
