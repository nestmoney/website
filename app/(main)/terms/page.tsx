import Bold from "@/components/Typography/Bold";
import Indent from "@/components/Typography/Indent";
import NamedSubSection from "@/components/Typography/NamedSubSection";
import NumberedSection from "@/components/Typography/NumberedSection";
import Para from "@/components/Typography/Para";
import TypoLinks from "@/components/Typography/TypoLinks";

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms Of Use | Nest Money",
  description:
    "Read the Nest Money terms of use and how we manage your information.",
};

const page = () => {
  return (
    <main className="min-h-screen py-[75px] site-container mx-auto text-justify ">
      <header className="h-[70px] md:h-[152px] text-[20px] md:text-[40px] font-semibold items-center bg-primary-blue text-white bg-[url('/linksPattren.svg')] bg-cover bg-center bg-no-repeat flex scroll-mt-[80px] pl-6 md:pl-10 md:rounded-tl-[40px] md:rounded-br-[40px] mb-10 rounded-tl-[24px] rounded-br-[24px]">
        <h1>Terms Of Use</h1>
      </header>
      <Para>
        Welcome to Nest Money! The Nest Money Mobile Application, the website
        www.nestmoney.in, chatbots, notifications or any other medium used by
        Nest Money to provide its Services to You (hereinafter referred to as
        the <Bold>&ldquo;Platform&rdquo;</Bold>) is owned, maintained, operated
        and managed by Legentree Technologies Private Limited (hereafter
        referred in this document as <Bold>“Nest Money”/ “We”/ “Us”</Bold>). Any
        access of the Platform or use of the services, offered by Nest Money
        through the Platform, is subject to your unconditional acceptance of
        these terms of use (<Bold>“Terms”</Bold>). These Terms will apply to You
        the user (<Bold>“You”</Bold> or <Bold>“User”</Bold>).
      </Para>
      <Para>
        We recommend You to read these terms very carefully. By continuing to
        access and/or use the Platform, You agree to comply with the Terms. IF
        YOU DO NOT WISH TO BE BOUND BY THESE TERMS OR IF YOU CANNOT REMAIN IN
        COMPLIANCE WITH SUCH TERMS, PLEASE DO NOT ACCESS THE PLATFORM OR USE ANY
        OF THE SERVICES AND IMMEDIATELY CEASE SUCH ACCESS AND USE.
      </Para>
      <Para>
        The Platform is an online platform, which will facilitate services
        including but not limited to BBPS bill payments, Mobile Recharges,
        credit report analysis, document locker facilities etc., for its Users (
        <Bold>“Users”</Bold>). The Services are limited to automated,
        user-initiated tools and informational outputs based on data provided by
        Users or authorised third-party sources. Nest Money hereby grants You, a
        limited, non-exclusive, non-transferable, royalty free license to use
        the Platform for the purposes of availing Our Services.
      </Para>
      <Para>
        Nest Money is not a credit bureau, account aggregator or information
        utility. Nest Money does not provide personalised financial, investment,
        lending or credit advice, does not make recommendations, and does not
        act as a SEBI-registered investment adviser, broker, lender or credit
        intermediary and any outputs are generated through automated,
        user-initiated tools based on user-provided inputs. Any analysis or
        information made available through the Platform is of a general and
        informational nature only.
      </Para>
      <Para>
        Users acknowledge that they remain solely responsible for evaluating any
        information obtained through the Platform and for any financial
        decisions taken by them. To the extent permitted by applicable law, Nest
        Money shall not be responsible for losses arising from decisions made
        independently by Users based on such information.
      </Para>
      <Para>
        We may at any time revise these Terms or add any additional terms that
        apply to a Service to reflect changes to Our Services or change in any
        applicable laws, or for other specific reasons. We strongly suggest that
        You review the Terms regularly. The most up to date version of the Terms
        will always be available for Your review under the &quot;Terms of
        Use&quot; link that appears in the Platform. We will provide notice of
        any changes to the Terms on this page and any Service specific changes
        will be notified in the relevant page of the applicable Service. Changes
        will not apply retroactively. Unless We specifically mention otherwise
        in a notice, changes will become effective immediately upon being
        posted. If You do not agree to the modified Terms for a Service, please
        discontinue Your use of that Service.
      </Para>
      <NumberedSection sl={1} heading="ELIGIBILITY OF USERS">
        <Indent>
          <Para>
            By using the Platform, You warrant You satisfy all the below
            mentioned basic eligibility criteria:
          </Para>

          <NamedSubSection sl="a">
            You are at least 18 years old (if You are an individual) or if You
            are an entity, that You are legally constituted as per the
            applicable laws of the country of Your registration; and
          </NamedSubSection>
          <NamedSubSection sl="b">
            You are legally capable of entering into a binding contract under
            the applicable laws; and
          </NamedSubSection>
          <NamedSubSection sl="c">
            You are not in any way prohibited by the applicable law in the
            jurisdiction in which You are currently located to agree to and
            abide by these Terms; and
          </NamedSubSection>
          <NamedSubSection sl="d">
            You are not a citizen or resident of, or located in, a country or
            region that is subject to any sovereign country sanctions or
            embargoes.
          </NamedSubSection>
        </Indent>
      </NumberedSection>
      <NumberedSection sl={2} heading="REGISTRATION">
        <Indent>
          <Para>
            The Platform and the Services are available only to registered users
            who have successfully completed the registration process and the
            applicable Know-Your-Customer (“KYC”) requirements specified on the
            Platform. To register and create a User account (“Account”), a User
            must provide the information required for registration
            (“Registration Data”) as displayed on the Platform and specifically
            agree to these Terms.
          </Para>
          <Para>
            Upon acceptance, these Terms shall become legally effective and
            binding on You, together with any amendments made by Nest Money from
            time to time and published on the Platform. You acknowledge that
            these Terms constitute a valid and enforceable agreement
            notwithstanding that they are executed electronically.
          </Para>
          <Para>
            For the purposes of these Terms, “Acceptance” means Your clear
            affirmative action indicating agreement, including by clicking the
            “Accept” button on the registration page, or by accessing or using
            the Platform or any of the Services, or by any other conduct that
            demonstrates Your intention to be bound by these Terms.
          </Para>
          <Para>
            You agree to provide true, accurate and complete information as
            prompted by the registration form and all forms You access on the
            Platform, and to update this information to maintain its
            truthfulness, accuracy and completeness. In case of any change in
            Your information including personal information provided to us, You
            agree to update Your Account information promptly. Any personal data
            collected through the Platform will be dealt with as per Our Privacy
            Policy. The Platform currently does not charge any membership fee or
            subscription charges for becoming a registered User.
          </Para>
          <Para>
            When creating or using an Account, ensure that You do not:
          </Para>
          <NamedSubSection sl="a">
            Provide any false personal information to Us (including without
            limitation a false username) or create any Account for anyone other
            than Yourself without such other person’s permission;
          </NamedSubSection>
          <NamedSubSection sl="b">
            Use a username that is the name of another person with the intent to
            impersonate that person;
          </NamedSubSection>
          <NamedSubSection sl="c">
            Use any user name or personal information that is subject to rights
            of another person without appropriate authorization; or
          </NamedSubSection>
          <NamedSubSection sl="d">
            Use a username that is offensive, vulgar or obscene or otherwise in
            bad taste.
          </NamedSubSection>
          <NamedSubSection sl="e">
            Use a username that is the e-mail address of any other person or
            entity.
          </NamedSubSection>
          <Para>
            As part of the registration process, a User shall be required to
            provide their mobile phone number and verify the same by entering a
            one-time password (“OTP”) sent by Nest Money for authentication.
            Upon successful verification of the mobile number, the User shall be
            required to provide such additional information as may be requested
            on the Platform for the purpose of completing registration. Once the
            registration process is completed, the User shall be assigned a
            unique user identification account (“User ID”) and shall become a
            registered user of the Platform.
          </Para>
          <Para>
            You shall not transfer or sell Your Nest Money Account and User ID
            to another party. You accept and agree that Nest Money will assume
            that any person using the Platform with Your User ID and login
            credentials is You or is authorized to act for You.
          </Para>
          <Para>By becoming a registered User, You agree to</Para>
          <NamedSubSection sl="i">
            maintain the confidentiality of Your Account login information;
          </NamedSubSection>
          <NamedSubSection sl="ii">
            be fully responsible for your devices in which Your Account may be
            active and all activities that occur under Your Account,
          </NamedSubSection>
          <NamedSubSection sl="iii">
            not use Your User ID or login credentials with the intent of
            impersonating another person
          </NamedSubSection>
          <NamedSubSection sl="iv">
            not allow any other person to use Your User ID or login credentials
            except as expressly permitted under these Terms;
          </NamedSubSection>
          <NamedSubSection sl="v">
            abide by the Terms and the processes, procedures, and guidelines
            described throughout the Platform;
          </NamedSubSection>
          <NamedSubSection sl="vi">
            be financially responsible for Your use of the Platform. Nest Money
            will not be liable for any loss or damage arising from Your failure
            to comply with any of the Terms.
          </NamedSubSection>
          <Para>
            You agree to immediately notify Us of any unauthorized use, or
            suspected unauthorized use of Your Account or any other breach of
            security. We reserve the right to promptly disable Your User ID and
            suspend Your access to the Services and/or the Platform in the event
            We have any reason to believe that You have breached any of the
            provisions set out in these Terms including the{" "}
            <Link href={"/privacy"} className="text-primary-blue">
              Privacy Policy
            </Link>{" "}
            or that security of Your Account has been compromised. Our Services
            are not available to temporarily or indefinitely suspended members.
            We reserve the right, in Our sole discretion, to cancel unconfirmed
            or inactive Accounts.
          </Para>
        </Indent>
      </NumberedSection>
      <NumberedSection
        sl={3}
        heading="Termination or Deactivation of Your Account"
      >
        <Indent>
          <Para>
            If a User wishes to terminate their use of Services or deactivate
            their account, they may contact Us through the Support section or at
            <TypoLinks email="support@nestmoney.in">
              support@nestmoney.in
            </TypoLinks>
            . If Your account is deleted or terminated, whether at Your request
            or by Nest Money as per the Termination provisions herein, the
            agreement between You and Nest Money will be considered terminated
            and We will take the necessary steps to implement such termination.
            However, We may continue to retain certain transaction records and
            related information for record-keeping, audit, or regulatory
            compliance purposes, as required under applicable law.
          </Para>
        </Indent>
      </NumberedSection>
      <NumberedSection sl={4} heading="USAGE RESTRICTIONS">
        <Indent>
          <p className="heading-legal mb-3">
            Account Responsibility and Compliance
          </p>
          <Para>
            You are solely responsible for all activities carried out through
            Your account and User ID. You agree to use the Platform and the
            Services in compliance with all applicable laws, regulations and
            governmental directions, including laws relating to payments,
            electronic commerce, consumer protection, cybersecurity, data
            protection and privacy.
          </Para>
          <p className="heading-legal mb-3">Prohibited Content</p>
          <Para>
            You shall not upload, transmit, store or otherwise make available
            any content through the Platform that :
          </Para>
          <NamedSubSection sl="a">
            is unlawful, offensive, obscene, abusive, defamatory, libellous,
            fraudulent or misleading;
          </NamedSubSection>
          <NamedSubSection sl="b">
            promotes hatred, discrimination, violence or harm against any
            individual or group;
          </NamedSubSection>
          <NamedSubSection sl="c">
            harasses, threatens or advocates harassment of another person;
          </NamedSubSection>
          <NamedSubSection sl="d">
            contains pornographic or sexually explicit material;
          </NamedSubSection>
          <NamedSubSection sl="e">
            infringes the intellectual property, privacy or other legal rights
            of any third party;
          </NamedSubSection>
          <NamedSubSection sl="f">
            promotes or facilitates illegal activities or provides instructions
            for the commission of unlawful acts;
          </NamedSubSection>
          <NamedSubSection sl="g">
            contains false, inaccurate or deceptive information that You know or
            reasonably ought to know to be misleading; or
          </NamedSubSection>
          <NamedSubSection sl="h">
            relates to unauthorised commercial activities, promotions,
            advertisements, contests, pyramid schemes or solicitations unrelated
            to the Services.
          </NamedSubSection>
          <p className="heading-legal mb-3">Prohibited Use of the Platform</p>
          <Para>
            You shall not use the Platform or the Services in any manner that:
          </Para>
          <NamedSubSection sl="a">
            impersonates any person, entity or authority, or falsely represents
            an affiliation;
          </NamedSubSection>
          <NamedSubSection sl="b">
            distributes unsolicited or unauthorised communications, including
            spam or mass solicitations;
          </NamedSubSection>
          <NamedSubSection sl="c">
            interferes with, disrupts, degrades or impairs the operation,
            security or integrity of the Platform, systems or networks;
          </NamedSubSection>
          <NamedSubSection sl="d">
            introduces malware or any code intended to damage, disrupt,
            intercept or gain unauthorised access to systems or data;
          </NamedSubSection>
          <NamedSubSection sl="e">
            accesses or attempts to access accounts, data, systems or networks
            without authorisation, including through probing, scanning or
            testing vulnerabilities without permission;
          </NamedSubSection>
          <NamedSubSection sl="f">
            circumvents or attempts to circumvent security features or access
            controls of the Platform;
          </NamedSubSection>
          <NamedSubSection sl="g">
            monitors, intercepts, scrapes, crawls or collects data from the
            Platform using automated means without Our prior written consent; or
          </NamedSubSection>
          <NamedSubSection sl="h">
            deletes, alters or interferes with content or data belonging to
            another user without lawful authority.
          </NamedSubSection>
          <p className="heading-legal mb-3">Security Violations</p>
          <Para>
            Any attempt to compromise the security of the Platform, including
            unauthorised access, data interference, service disruption or misuse
            of system resources, may result in suspension or termination of
            access and may expose You to civil or criminal liability. Nest Money
            reserves the right to investigate such activities and to cooperate
            with law enforcement or regulatory authorities where required by
            law.
          </Para>
        </Indent>
      </NumberedSection>
      <NumberedSection sl={5} heading="NO MISUSE OF PLATFORM">
        <Indent>
          <Para>
            You agree and undertake that the Services offered through the
            Platform are for the direct use of the Users only and are not
            intended to be resold or used in any manner for any commercial
            purposes. Users are hereby prohibited from renting, selling or
            otherwise sharing any information received through the Platform for
            any commercial purposes or for any consideration, monetary or
            otherwise. Any violation by a User of this provision shall entitle
            Nest Money to initiate appropriate legal action against such User in
            addition to restricting their rights to access or use the Platform.
          </Para>
          <Para>
            If You have reason to believe that another User has not followed or
            complied with their obligations in these Terms, or You have a
            complaint to make, please e-mail Us at:{" "}
            <TypoLinks email="support@nestmoney.in">
              support@nestmoney.in
            </TypoLinks>{" "}
            or by using the &quot;Contact Us&quot; form available on the
            Platform. Please provide full details of the nature of Your
            complaint and the materials to which the complaint relates. Subject
            to applicable laws, We will use Our reasonable endeavours to respond
            to all complaints within a reasonable time and to take reasonable
            action which We deem appropriate to resolve or rectify the subject
            matter of such complaints
          </Para>
          <Para>
            In the event that Nest Money, in its sole and absolute discretion,
            considers that there has been a breach or threatened breach of any
            of the Terms by You, in addition to Our obligations under law, We
            reserve the right to take any action that We deem to be necessary,
            including without limitation, temporary suspension, or termination
            forthwith and without notice, of Your use of and access to the
            Services and the Platform, and in the case of illegal use, the
            initiation of appropriate legal proceedings.
          </Para>
        </Indent>
      </NumberedSection>
      <NumberedSection sl={6} heading="ALTERING THE SERVICES AND TERMINATION">
        <Indent>
          <Para>
            In effort to serve Our customers better, We are constantly changing
            and improving Our Services. We may add or remove functionalities or
            features, and We may suspend or discontinue a Service altogether or
            add or create new limits to Our Services at any time, for any reason
            whatsoever, including but not limited to repairs, planned
            maintenance or upgrades and shall not be liable to You for any such
            suspension or non-availability of the Services and/or the Platform
            (whether wholly or partly).
          </Para>
          <Para>
            We believe that You own Your data and preserving Your access to such
            data is important. If We discontinue a Service, where reasonably
            possible, We will give You reasonable advance notice and a chance to
            get information out of that Service.
          </Para>
          <Para>
            We may suspend or terminate Your use of Platform or terminate Your
            access to the Platform, in Our sole discretion without any liability
            to You or any third party, upon notice to You. Upon doing so, We may
            retain or delete any data, messages, files and other information or
            content that You provided through the Platform, in compliance with
            applicable laws. Any personal data consequent to such suspension or
            termination shall be handled in accordance with Our{" "}
            <Link href={"/privacy"} className="text-primary-blue">
              Privacy Policy
            </Link>
          </Para>
          <Para>
            Irrespective of other remedies We have available, We may suspend or
            terminate Your Account and refuse to provide any or all Services to
            You if:
          </Para>
          <NamedSubSection sl="i">
            You breach the letter or spirit of any of these Terms;
          </NamedSubSection>
          <NamedSubSection sl="ii">
            We are unable to verify or authenticate any information You provide
            to Us;
          </NamedSubSection>
          <NamedSubSection sl="iii">
            We believe, in Our sole discretion, that Your actions may cause harm
            to Our Users (including You), to Us, or are contrary to the
            interests of the Platform;
          </NamedSubSection>
          <NamedSubSection sl="iv">
            Once terminated, You must not continue to use the Platform under the
            same Account or register under a new Account.
          </NamedSubSection>
          <Para>
            YOU AGREE THAT NEST MONEY WILL NOT BE LIABLE TO YOU OR ANY OTHER
            PARTY FOR ANY LAWFUL TERMINATION OF YOUR ACCESS TO THE PLATFORM OR
            SERVICES OR DELETION OF YOUR ACCOUNT.
          </Para>
          <Para>
            Upon suspension or termination of Your access to the Platform or
            Services for any reason, Your right to use the Platform shall
            immediately cease. Termination shall not, by itself, require Nest
            Money to delete or erase information relating to Your use of the
            Platform.
          </Para>
        </Indent>
      </NumberedSection>
      <NumberedSection sl={7} heading="DISCLAIMER OF WARRANTIES">
        <Indent>
          <Para>
            The Platform and the Services is provided by Nest Money on an
            &quot;AS IS&quot; and &quot;as available&quot; basis. We make no
            express warranties or guarantees are made about the Platform or the
            Services. Nest Money does not guarantee that the Platform or
            Services is or will be available for use in any particular location.
            Your use of the Platform is at Your own initiative and risk. You
            must comply with all applicable local laws while using the Platform
            and Our Services.
          </Para>
          <Para>
            TO THE FULLEST EXTENT PERMITTED BY LAW, NEST MONEY DISCLAIMS ALL
            WARRANTIES, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
            WARRANTIES OF PLATFORM ACCURACY, ACCURACY OF USER CONTENT, FITNESS
            FOR A PARTICULAR PURPOSE, OF SATISFACTORY QUALITY, SECURITY,
            NON-INFRINGEMENT, SYSTEM INTEGRATION, AVAILABILITY, INTEGRITY, DATA
            ACCURACY, COMPLETENESS, RELIABILITY OR TIMELINESS, SUITABILITY OF
            CONTENT OR SERVICES, OR THOSE WARRANTIES THAT ARISE FROM A COURSE OF
            DEALING, USAGE, OR TRADE PRACTICE. WE MAKE NO WARRANTY THAT ANY
            UPDATES, UPGRADES, BUG FIXES, ERROR CORRECTIONS AND/OR ENHANCEMENTS
            OF THE SOFTWARE WILL BE MADE OR THAT ANY COMMUNICATIONS FROM AND/OR
            TO THE PLATFORM WOULD BE SECURE OR NOT INTERCEPTED
          </Para>
          <Para>
            WITHOUT LIMITING THE GENERALITY OF THE FOREGOING, NEST MONEY AND ITS
            AFFILIATES, SUPPLIERS, SERVICE PROVIDERS, AFFILIATES AND AGENTS, DO
            NOT WARRANT AND EXPRESSLY DISCLAIM THAT:
          </Para>
          <NamedSubSection sl="i">
            YOUR USE OF THE PLATFORM AND/OR SERVICES AND ACCESS TO AND USE OF
            ALL OF THE TOOLS AND FEATURES THEREON WILL BE UNINTERRUPTED, OR
            TIMELY, ERROR-FREE OR THAT ANY SOFTWARE, SERVICES, PLATFORM OR
            SERVER(S) ON WHICH THE SERVICES AND PLATFORM ARE HOSTED ARE FREE OF
            VIRUSES OR OTHER HARMFUL COMPONENTS. YOUR USE OF THE PLATFORM AND
            THE SERVICES AND ANY CONTENT PROVIDED ON OR THROUGH THE PLATFORM AND
            SERVICES AND ANY RECEIPT OR DOWNLOAD OF CONTENT OR INFORMATION FROM
            PLATFORM ARE ENTIRELY AT YOUR OWN RISK, AND YOU WILL BE SOLELY
            RESPONSIBLE FOR ANY DAMAGE TO YOUR PROPERTY, DATA OR PERSON,
            INCLUDING, BUT NOT LIMITED TO, YOUR COMPUTER SYSTEM AND ANY DEVICE
            YOU USE TO ACCESS THE PLATFORM OR SERVICES, OR ANY OTHER LOSS THAT
            RESULTS FROM ACCESSING THE PLATFORM. NO ORAL OR WRITTEN INFORMATION
            OR ADVICE GIVEN BY OUR REPRESENTATIVE SHALL CREATE A WARRANTY.
          </NamedSubSection>
          <Para>
            {" "}
            None of the content posted on the Platform are intended to amount to
            advice on which reliance should be placed. We therefore disclaim all
            liability and responsibility arising from any reliance placed on
            such materials by any visitor to Our Platform, or by anyone who may
            be informed of any of its contents.
          </Para>
        </Indent>
      </NumberedSection>
      <NumberedSection sl={8} heading="INTELLECTUAL PROPERTY RIGHTS">
        <Indent>
          <Para>
            All right, title and interest in and to the Platform are owned by
            Nest Money. All content and materials contained in the Platform,
            including, but not limited to, all Platform design, content, images,
            logos, trade names, graphics, button icons, data compilations,
            digital downloads, etc., are protected by the applicable
            intellectual property laws and right, title and interest in and to
            the are either held by Nest Money or Our licensors.
          </Para>
          <Para>
            You acknowledge and agree that the Platform and any software used in
            connection with the Platform contain proprietary and confidential
            information that is protected by applicable intellectual property
            laws. Any unauthorized use of the materials provided as part of the
            Platform is strictly prohibited. Software, in both source and object
            code forms, APIs, associated documentation, and other related
            materials may be available for download on certain parts of the
            Platform. Nest Money or its licensors own and retain all rights in
            such software content, including all applicable intellectual
            property rights. Nothing in these Terms grants any right or license
            to software content. Software content is governed by its own
            separate terms and conditions and all use of software content must
            be in accordance with the specified license(s), which may include,
            but is not limited to software licenses, End User Agreements and
            free/open-source software licenses, as applicable.
          </Para>
          <Para>You understand and acknowledge that</Para>
          <NamedSubSection sl="i">
            the software, code, proprietary methods, and systems used to provide
            the Platform or Services constitute the intellectual property of
            Nest Money and may not be copied, modified, reproduced, republished,
            posted, or transmitted;
          </NamedSubSection>

          <NamedSubSection sl="ii">
            the content on the Platform, including text, graphics, and other
            materials, is protected and may not be copied, modified, reproduced,
            republished, posted, or transmitted without prior written
            permission;
          </NamedSubSection>

          <NamedSubSection sl="iii">
            the names, logos, trade names, service marks, and other materials
            displayed on the Platform or in the Services are trademarks of Nest
            Money and must not be used without authorization;
          </NamedSubSection>

          <NamedSubSection sl="iv">
            no content on the Platform may be sold, offered for sale,
            redistributed, or commercially exploited without Our prior written
            permission;
          </NamedSubSection>

          <NamedSubSection sl="v">
            nothing in these Terms grants You any right to receive, access, or
            use Our Intellectual Property except as generally permitted through
            the Platform in accordance with these Terms;
          </NamedSubSection>

          <NamedSubSection sl="vi">
            You must not use any materials from the Platform in an unauthorized
            manner, including reproduction, republication, modification,
            distribution, data mining, data extraction, monitoring, or copying
            using any automated or manual process.
          </NamedSubSection>

          <Para>
            Except as specifically set forth above, nothing in these Terms
            confers, by implication, estoppel, or otherwise, any license or
            right under any trade secret, patent, trademark, copyright, or other
            intellectual property rights of Nest Money or any third party. All
            rights not expressly licensed are reserved.
          </Para>
          <Para>
            You retain ownership of all User Content You submit, post, display,
            or otherwise make available on the Platform or Services. You hereby
            grant Nest Money a non-exclusive, royalty free, perpetual,
            irrevocable, worldwide, transferable license (with the right to
            sublicense) to
          </Para>
          <NamedSubSection sl="i">
            make User Content available on the Platform;
          </NamedSubSection>

          <NamedSubSection sl="ii">
            use, copy, reproduce, process, adapt, modify, create derivative
            works of, transmit, host, display, and distribute such User Content
            in any media or distribution methods as necessary to provide the
            Services in accordance with these Terms;
          </NamedSubSection>

          <NamedSubSection sl="iii">
            use such User Content for Our promotional and marketing purposes in
            accordance with applicable policies;
          </NamedSubSection>

          <NamedSubSection sl="iv">
            process any Personal Data or financial information contained in the
            User Content strictly in accordance with Our{" "}
            <Link href={"/privacy"} className="text-primary-blue">
              Privacy Policy
            </Link>
            .
          </NamedSubSection>
          <p className="heading-legal mb-3">Intimation about Infringements</p>
          <Para>
            If You learn of any unlawful material or activity on the Platform,
            or any material or activity that breaches this notice, please inform
            Us. We respect the intellectual property rights of others and expect
            Users of the Services to do the same. We will respond to notices of
            alleged copyright infringement that comply with applicable law and
            are promptly and properly provided to us. If You have a reason to
            believe that Your Content has been copied in a way that constitutes
            copyright infringement, please provide Us with the following
            information:
          </Para>
          <NamedSubSection sl="i">
            provide a physical or electronic signature of the copyright owner or
            a person authorized to act on their behalf;
          </NamedSubSection>

          <NamedSubSection sl="ii">
            identify the copyrighted work claimed to have been infringed;
          </NamedSubSection>

          <NamedSubSection sl="iii">
            identify the material that is claimed to be infringing or the
            subject of infringing activity, and provide sufficient information
            to allow Us to locate the material;
          </NamedSubSection>

          <NamedSubSection sl="iv">
            provide Your contact information, including Your address, telephone
            number, and email address;
          </NamedSubSection>

          <NamedSubSection sl="v">
            include a statement that You have a good faith belief that the use
            of the material is not authorized by the copyright owner, its agent,
            or the law;
          </NamedSubSection>

          <NamedSubSection sl="vi">
            include a statement that the information provided in the
            notification is accurate and that You are authorized to act on
            behalf of the copyright owner.
          </NamedSubSection>
          <Para>
            We have the right to remove the Content alleged to be infringing
            without prior notice, at Our sole discretion, and without liability
            to You. In appropriate circumstances, We will also terminate a
            User’s account if We determine that the User is a repeat infringer.
          </Para>
        </Indent>
      </NumberedSection>
      <NumberedSection
        sl={9}
        heading="THIRD-PARTY SERVICES AND INTEGRATED DATA FLOWS"
      >
        <Indent>
          <Para>
            The Platform facilitates access to services provided by third-party
            billers, card issuers, and document providers (“Third-Party
            Services”). You acknowledge that Nest Money operates as a technical
            facilitator and does not exercise direct operational control over
            the uptime, billing accuracy, or internal systems of such third
            parties and the inclusion of any link or reference does not imply
            any endorsement, recommendation, or approval by Nest Money of such
            Third Party Services.
          </Para>
          <Para>
            By initiating a transaction or service through a Third-Party
            Service, You provide explicit, purpose-specific consent for Nest
            Money to share the minimum necessary data required to complete the
            requested transaction or service.
          </Para>
          <Para>
            Once such data is transferred, the relevant third party may process
            such data in accordance with its own privacy practices and
            applicable data protection laws. Nest Money does not control the
            subsequent processing of such data by Third-Party Services. You may
            manage or revoke third-party access permissions, where technically
            supported, through the settings or consent management features made
            available on the Platform.
          </Para>
          <Para>
            While Nest Money disclaims liability for operational failures or
            service deficiencies attributable to Third-Party Services, in
            accordance with applicable consumer protection laws, Nest Money
            remains responsible for the secure transmission of Your data and
            payment instructions from the Platform to the relevant third-party
            gateway
          </Para>
          <Para>
            Nest Money shall not be liable for any late fees, penalties, or
            service disruptions caused by a third party’s failure to update or
            process information after successful transmission
          </Para>
          <Para>
            Nest Money endeavours to ensure that all redirections to Third-Party
            Services are performed over secure, encrypted channels. However,
            Nest Money does not guarantee the security of third-party
            environments after You exit the Platform.
          </Para>
          <Para>
            From time to time, the Platform may display or facilitate
            promotions, advertisements, or offers relating to Third-Party
            Services. Any interaction, transaction, or business relationship You
            enter into with such third parties is solely between You and the
            relevant third party.
          </Para>
          <Para>
            Nest Money shall not be responsible or liable for any loss, damage,
            or harm of any nature arising out of or in connection with Your
            access to, use of, or reliance on any Third-Party Services,
            promotions, offers, advertisements or dealings.
          </Para>
        </Indent>
      </NumberedSection>
      <NumberedSection sl={10} heading="USER CONTENT">
        <Indent>
          <Para>
            Any and all content posted on the Platform by a User including but
            not limited to all information, content, data, materials, documents,
            images, third party URL links, or other material whatsoever in any
            format shall constitute the (“User Content”). To the extent the
            Platform enables Users to upload, store, transmit, share or make
            available User Content, Nest Money acts as an intermediary within
            the meaning of Section 2(1)(w) of the Information Technology Act,
            2000 and avails the safe-harbour protections under Section 79 of the
            Information Technology Act, 2000.
          </Para>
          <Para>
            Nest Money does not vet, verify the accuracy, correctness and
            completeness, edit or modify any User Content or any other
            information, data and materials created, used and/or published by
            You to determine whether they may result in any liability to any
            third party. You hereby warrant that You have the rights to use all
            such User Content in the manner set out in these Terms. WE EXPRESSLY
            EXCLUDE OUR LIABILITY FOR ANY LOSS OR DAMAGE ARISING FROM THE USE OF
            OUR SERVICE BY A USER IN CONTRAVENTION OF THIS CLAUSE.
          </Para>
          <Para>
            Nest Money does not initiate the transmission of User Content,
            select the receiver of such content, or modify the information
            contained in such transmission, except as may be necessary for the
            operation of the Platform or to comply with applicable law.
          </Para>
          <Para>
            Nest Money observes due diligence as required under applicable law
            and shall act upon receiving actual knowledge of unlawful content,
            including by disabling access to such content where required.
          </Para>
          <Para>
            The views and information expressed by Users are solely those of the
            respective Users and do not represent the views of Nest Money.
          </Para>
        </Indent>
      </NumberedSection>
      <NumberedSection sl={11} heading="DATA USE AND DISCLOSURE">
        <Indent>
          <Para>
            Nest Money will use and protect information relating to Your use of
            the Platform in accordance with applicable law. We may disclose such
            information where required by law, regulation or legal process, or
            to Our service providers and partners solely for the purpose of
            providing and improving the Services. Any processing of Personal
            Data shall be governed by Our{" "}
            <Link href={"/privacy"} className="text-primary-blue">
              Privacy Policy
            </Link>
            .
          </Para>
        </Indent>
      </NumberedSection>
      <NumberedSection sl={12} heading="PRIVACY AND DATA HANDLING">
        <Indent>
          <Para>
            By using the Services, You acknowledge that We may process and store
            the information shared by You solely for the purpose of delivering
            the Services, in accordance with the{" "}
            <Link href={"/privacy"} className="text-primary-blue">
              Privacy Policy
            </Link>
            . Your personal data rights—including the Right to Access,
            Correction, Erasure, and Nomination—are managed as detailed in Our{" "}
            <Link href={"/privacy"} className="text-primary-blue">
              Privacy Policy
            </Link>
            . Any request to exercise these rights, or grievances related to
            data processing, should be directed to the contact details provided
            in the{" "}
            <Link href={"/privacy"} className="text-primary-blue">
              Privacy Policy
            </Link>
            . Please note that withdrawing consent for essential data processing
            may result in the immediate termination of certain Services.
          </Para>
          <Para>Subject to Your consent, Nest Money may</Para>
          <NamedSubSection sl="i">
            collect and analyse usage data to understand User behaviour, improve
            Services, and personalise features on the Platform;
          </NamedSubSection>
          <NamedSubSection sl="ii">
            send You promotional communications, product updates, and offers
            through electronic means.
          </NamedSubSection>
          <Para>You may withdraw such consent at any time.</Para>
          <Para>
            Where retention of information is required for compliance with
            legal, regulatory, accounting, audit, fraud prevention or
            dispute-resolution obligations, such information may be retained for
            the period mandated or permitted under applicable law,
            notwithstanding termination or any request for deletion. Upon expiry
            of applicable retention periods, such data shall be securely deleted
            or anonymised in accordance with Our data retention practices.
          </Para>
        </Indent>
      </NumberedSection>
      <NumberedSection sl={13} heading="DEVICE PERMISSIONS">
        <Indent>
          <Para>
            To provide specific Services, such as identity verification for KYC
            or secure document uploads to Your Nest Safe, the Platform may
            request specific device permissions. All such permissions are
            requested on a &apos;Need-to-Use&apos; basis, and You may revoke
            these at any time through Your device settings. Please note that
            revoking certain permissions may limit Your ability to use specific
            features of the Platform.
          </Para>
        </Indent>
      </NumberedSection>
      <NumberedSection sl={14} heading="ACCESSIBILITY AND INCLUSIVE ACCESS">
        <Indent>
          <Para>
            Nest Money is committed to providing inclusive and accessible access
            to the Platform for all users, including persons with disabilities,
            in accordance with applicable law and constitutional principles
            relating to the right to digital access.
          </Para>

          <Para>
            We endeavour to design and maintain the Platform in line with
            generally accepted accessibility standards, including the Web
            Content Accessibility Guidelines (WCAG) 2.1 and the relevant Indian
            Standards (IS 17802), to the extent reasonably practicable.
          </Para>

          <Para>
            Where any user is unable to access or use any feature of the
            Platform due to accessibility constraints, Nest Money shall make
            reasonable efforts to provide appropriate assistance, alternative
            access mechanisms, or reasonable accommodation, subject to technical
            feasibility and security requirements.
          </Para>

          <Para>
            Users may report accessibility issues or request assistance through
            Our grievance redressal mechanism, and such requests shall be
            reviewed in accordance with applicable law.
          </Para>
        </Indent>
      </NumberedSection>
      <NumberedSection sl={15} heading="INDEMNIFICATION">
        <Indent>
          <Para>
            You agree to indemnify and hold Us and Our affiliates, officers,
            employees and agents, harmless from and against all liabilities,
            losses, demands, claims, damages, penalties, interests and expenses
            (including ensuing legal expenses and costs) arising from any third
            party claims arising out of, resulting from or in any way related to
            Your use or access of Platform and/or Services, or any content
            posted/uploaded by You on the Platform or Your interactions with any
            other Users.
          </Para>

          <Para>
            You shall further defend, indemnify and hold harmless Nest Money and
            its officers, directors, shareholders, and employees, from and
            against all claims and expenses, including but not limited to
            attorney’s fees, in whole or in part arising out of or attributable
            to:
          </Para>

          <NamedSubSection sl="i">
            any breach of these Terms by You; or
          </NamedSubSection>

          <NamedSubSection sl="ii">
            Your actions or inactions, which may result in any loss or liability
            to Nest Money or any third party or arising out of Your violation of
            any applicable laws or regulations, including but not limited to
            Intellectual Property Rights, payment of statutory dues and taxes,
            claim of libel, defamation, violation of rights of privacy or
            publicity, loss of service by other Users, or infringement of
            intellectual property or other rights.
          </NamedSubSection>
        </Indent>
      </NumberedSection>
      <NumberedSection sl={16} heading="LIMITATION OF LIABILITY">
        <Indent>
          <Para>
            TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, NEST MONEY AND/OR
            OUR DIRECTORS, OFFICERS, EMPLOYEES, CONTRACTORS, AGENTS OR
            REPRESENTATIVES SHALL NOT BE LIABLE TO YOU OR ANY THIRD PARTY FOR
            ANY INDIRECT, PUNITIVE, EXEMPLARY, INCIDENTAL, SPECIAL,
            CONSEQUENTIAL DAMAGES OR LOSSES (INCLUDING LOSS OF PROFITS, LOSS OF
            REVENUE, LOSS OF BUSINESS, LOSS OF SAVINGS, LOSS OF DATA, OR LOSS OF
            GOODWILL) OR ANY DAMAGES OF WHATSOEVER NATURE THAT RESULT FROM OR
            ARISES IN CONNECTION WITH:
          </Para>

          <NamedSubSection sl="i">
            THE USE OF, DELAYS IN OPERATION, TRANSMISSION OR RESPONSE OF, OR
            INABILITY TO USE, THE PLATFORM OR THE SERVICES;
          </NamedSubSection>

          <NamedSubSection sl="ii">
            ANY CONTENT OF THE PLATFORM AND/OR THE SERVICES;
          </NamedSubSection>

          <NamedSubSection sl="iii">
            STATEMENTS OR CONTENT POSTED ON THE PLATFORM AND/OR THE SERVICES;
          </NamedSubSection>

          <NamedSubSection sl="iv">
            ANY SERVICE PURCHASED OR OBTAINED THROUGH THE PLATFORM;
          </NamedSubSection>

          <NamedSubSection sl="v">
            ANY ACTION TAKEN IN RESPONSE TO OR AS A RESULT OF ANY INFORMATION
            AVAILABLE ON THE PLATFORM OR THE SERVICES;
          </NamedSubSection>

          <NamedSubSection sl="vi">
            ANY DAMAGE CAUSED BY MISTAKES, INACCURACIES, OMISSIONS, ERRORS,
            INTERRUPTIONS OR LOSS OF ACCESS TO, DELETION OF, FAILURE TO STORE,
            FAILURE TO BACK UP, OR ALTERATION OF ANY CONTENT ON THE PLATFORM OR
            THE SERVICES;
          </NamedSubSection>

          <NamedSubSection sl="vii">
            ANY OTHER FAILURE OF PERFORMANCE OF THE PLATFORM OR SERVICES OR
            OTHER MATTER RELATING TO THE PLATFORM AND/OR THE SERVICES, IN EACH
            CASE WHETHER OR NOT CAUSED BY EVENTS BEYOND OUR CONTROL, INCLUDING,
            BUT NOT LIMITED TO, ACTS OF NATURE, COMMUNICATIONS LINE FAILURE,
            THEFT, DESTRUCTION, OR UNAUTHORIZED ACCESS TO THE PLATFORM OR
            SERVICES OR CONTENT STORED THEREIN, IRRESPECTIVE OF WHETHER A CLAIM
            IS BASED ON CONTRACT, NEGLIGENCE, TORT, STRICT LIABILITY, OR
            OTHERWISE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH
            DAMAGE OR LOSSES.
          </NamedSubSection>

          <Para>
            IN NO EVENT SHALL NEST MONEY’S TOTAL CUMULATIVE LIABILITY TO YOU FOR
            ANY AND ALL DAMAGES, LOSSES, LIABILITIES, EXPENSES, AND CAUSES OF
            ACTION (WHETHER ARISING UNDER CONTRACT OR OTHERWISE), ARISING FROM
            OR RELATING TO YOUR USE OF THE NEST MONEY PLATFORM OR SERVICES OR
            ARISING FROM THESE TERMS OF USE EXCEED INR 5,000 (INDIAN RUPEES FIVE
            THOUSAND ONLY).
          </Para>
        </Indent>
      </NumberedSection>
      <NumberedSection sl={17} heading="FORCE MAJEURE">
        <Indent>
          <Para>
            We will not be liable for any failure of performance under the Terms
            or to provide the Services through the Platform to the extent such
            failure was caused by a Force Majeure event, which shall constitute
            any and all events beyond Our reasonable control, including but not
            limited to acts of the government authorities, acts of God, fire,
            natural disasters, strikes, explosion, riots, war, terrorism,
            failure of third-party service providers, computer hacking,
            malicious damage, network failure, disruption of communication
            lines, power outages, etc.
          </Para>
        </Indent>
      </NumberedSection>
      <NumberedSection sl={18} heading="GRIEVANCE REDRESSAL MECHANISM">
        <Indent>
          <Para>
            <Bold>Tier 1 – Platform Support</Bold>: You may contact Our customer
            support team through the Platform or at{" "}
            <TypoLinks email="support@nestmoney.in">
              support@nestmoney.in
            </TypoLinks>
            . We shall acknowledge Your grievance and make reasonable efforts to
            resolve it within a reasonable period
          </Para>
          <Para>
            <Bold>Tier 2 – Designated Grievance Officer:</Bold> If Your
            grievance is not resolved to Your satisfaction, You may escalate the
            matter to Our designated grievance officer:
          </Para>
          <Para>Name: Supreeth T.S.</Para>
          <Para>
            Email:{" "}
            <TypoLinks email="grievance@nestmoney.in">
              grievance@nestmoney.in
            </TypoLinks>
          </Para>
          <Para>
            The grievance officer shall review and provide a response in
            accordance with applicable law.
          </Para>
          <Para>
            Nothing in this clause limits Your statutory right to seek remedies
            before appropriate regulatory or statutory authorities or competent
            courts under applicable law.
          </Para>
        </Indent>
      </NumberedSection>
      <NumberedSection sl={19} heading="DISPUTE RESOLUTION">
        <Indent>
          <Para>
            Without prejudice to the grievance redressal mechanism set out
            above, any dispute arising out of or in connection with these Terms
            between You and Nest Money in relation to these Terms of Our
            Services, Our goal is to resolve the dispute quickly and
            cost-effectively. Accordingly, You agree that We will resolve any
            claim or controversy at law or equity that arises between us out of
            this Terms.
          </Para>
          <Para>
            Before filing a claim for arbitration or otherwise seeking relief in
            a court of law, You agree to first contact Nest Money to inform its
            customer support team of Your complaint and seek resolution. This
            notice of dispute must include: Your name, pertinent account
            information, a brief description of Your dispute, and contact
            information so that Nest Money may evaluate the dispute and attempt
            to informally resolve it. Nest Money will have sixty (60) days from
            the date of Your original complaint to informally resolve the
            dispute, which if successful will avoid the need for further action.
          </Para>
          <Para>
            If You and Nest Money are unable to resolve a Dispute through
            informal negotiations, all claims arising from use of the Platform
            shall finally and exclusively be resolved by binding arbitration.
            Any election to arbitrate by one party will be final and binding on
            the other. The arbitration will be commenced and conducted under the
            Indian Arbitration and Conciliation Act, 1996, by sole arbitrator to
            be appointed by mutual consent of Nest Money and the User. Where the
            User and Nest Money are unable to arrive at a mutual consent, the
            sole arbitrator may be appointed in accordance with the Indian
            Arbitration and Conciliation Act, 1996.
          </Para>
          <Para>
            Notwithstanding the foregoing, Nest Money retains the right to seek
            injunctive or other equitable relief in a court of competent
            jurisdiction located in Bengaluru, India if You are located in
            India, or any other court of competent jurisdiction if You are
            located outside India, to prevent the actual or threatened breach of
            data, infringement, misappropriation or violation of copyrights,
            trademarks, trade secrets, patents, or other intellectual property
            or proprietary rights.
          </Para>
        </Indent>
      </NumberedSection>
      <NumberedSection sl={20} heading="COMPLIANCE WITH LAWS">
        <Indent>
          <Para>
            You are responsible for compliance with applicable laws, regulation
            and treaties, keeping in mind that access to the contents of this
            Platform may not be legal for or by certain persons or in certain
            countries. By agreeing to the Terms and other policies, You warrant
            that it is completely legal to use Our Services in Your country. It
            is the duty of the User to verify any potential violation. You agree
            to indemnify Us, our employees, agents or any related individual or
            organization for any liability We might incur in a foreign
            jurisdiction. Our Services shall not be deemed to constitute an
            offer to sell or serve in countries where it is illegal to do so. We
            reserve the right to monitor the location from which users access
            Our services and to block access from any jurisdiction in which
            participation is illegal or restricted.
          </Para>
        </Indent>
      </NumberedSection>
      <NumberedSection sl={21} heading="WAIVER">
        <Indent>
          <Para>
            If Nest Money fails at any time to insist upon strict performance of
            its obligations under these Terms, or if it fails to exercise any of
            the rights or remedies to which it is entitled under these Terms,
            the same will not constitute a waiver of any such rights or remedies
            and shall not relieve You from compliance with such obligations. No
            waiver by Nest Money of any of these Terms shall be effective unless
            it is expressly stated to be a waiver and is communicated to You in
            writing.
          </Para>
        </Indent>
      </NumberedSection>
      <NumberedSection sl={22} heading="SEVERABILITY">
        <Indent>
          <Para>
            If any of these Terms is determined by any competent authority to be
            invalid, unlawful or unenforceable to any extent, such term,
            condition or provision will to that extent be severed from the
            remaining terms, conditions and provisions which shall continue to
            be valid to the fullest extent permitted by law.
          </Para>
        </Indent>
      </NumberedSection>
      <NumberedSection sl={23} heading="ASSIGNMENT">
        <Indent>
          <Para>
            You will not transfer, assign or delegate Your rights or obligations
            (including Your Account) under these Terms to anyone without the
            express written permission of Nest Money, and any attempt to do so
            will be null and void. We may assign Our rights and delegate any of
            Our obligations under these Terms, in whole or in part, in Our sole
            discretion, without Your consent.
          </Para>
        </Indent>
      </NumberedSection>
      <NumberedSection sl={24} heading="ASSIGNMENT">
        <Indent>
          <Para>
            You will not transfer, assign or delegate Your rights or obligations
            (including Your Account) under these Terms to anyone without the
            express written permission of Nest Money, and any attempt to do so
            will be null and void. We may assign Our rights and delegate any of
            Our obligations under these Terms, in whole or in part, in Our sole
            discretion, without Your consent.
          </Para>
        </Indent>
      </NumberedSection>
      <NumberedSection sl={24} heading="NOTICES">
        <Indent>
          <Para>
            By using the Platform and Services, You accept that communication
            with Us will be mainly electronic. We will contact You via channels
            like calls, E-mail, WhatsApp, SMS, or provide you App Notifications
            by posting notices. You acknowledge that all contracts, notices,
            information and other communication We may provide electronically
            comply with any legal requirements that such documents are in
            writing.
          </Para>
        </Indent>
      </NumberedSection>
      <NumberedSection sl={25} heading="NO THIRD PARTY BENEFICIARIES">
        <Indent>
          <Para>
            Nothing in these Terms shall give, directly or indirectly, any third
            party any enforceable benefit or any right of action against Nest
            Money and such third parties shall not be entitled to enforce any of
            these Terms against Nest Money.
          </Para>
        </Indent>
      </NumberedSection>
      <NumberedSection sl={26} heading="GOVERNING LAW AND JURISDICTION">
        <Indent>
          <Para>
            These Terms shall be governed by the Indian Laws and the internal
            substantive laws of India excluding its conflict of law provisions,
            regardless of Your country or state of origin or where You access
            the Platform, and regardless of any principle of law that may
            provide for the application of the law of another jurisdiction. The
            courts of Bengaluru, Karnataka, India shall have jurisdiction over
            all matters arising out of or in relation to the use or access of
            the Platform.
          </Para>
        </Indent>
      </NumberedSection>
      <NumberedSection sl={27} heading="CONTACT US">
        <Indent>
          <Para>
            For any further clarification of these Terms or any other matter
            related to Our Platform, please write to Us at{" "}
            <TypoLinks email="support@nestmoney.in">
              support@nestmoney.in
            </TypoLinks>
          </Para>
          <p className="heading-legal mb-3">ADDITIONAL TERMS FOR THE “NEST”</p>
          <Indent>
            <Para>
              For the purposes of these Additional terms applicable to the Nest
              feature available on the Platform (“<Bold>Nest Terms</Bold>”):
            </Para>
            <Para>
              <Bold>“Nest”</Bold> means a shared digital space created on the
              Platform by a User, enabling multiple family members (“Nest
              Members”) to access and use shared features and perform permitted
              actions for themselves and, where authorised, for other Nest
              Members.
            </Para>
            <Para>
              <Bold>“Nest Member”</Bold> means a User who has been validly added
              to a Nest and whose participation has been confirmed in accordance
              with the Platform’s authentication and consent mechanisms.
            </Para>
            <Para>
              The Nest is designed as a restricted, closed user group,
              accessible only to Nest Members validly added to the same Nest.
              All actions, visibility, and data access under the Nest are
              strictly limited to the Nest Members of that Nest and are not
              accessible to Users outside the Nest.
            </Para>
          </Indent>
          <p className="heading-legal mb-3">Adding and Managing Nest Members</p>
          <Indent>
            <Para>
              Any User may initiate an invitation by providing limited contact
              details of another family member. A User may add other family
              members as Nest Members to their Nest, subject to:
            </Para>
            <NamedSubSection sl="i">verification of identity;</NamedSubSection>
            <NamedSubSection sl="ii">OTP-based consent;</NamedSubSection>
            <NamedSubSection sl="iii">
              acceptance of these Nest Terms.
            </NamedSubSection>
            <Para>
              Where a User invites another family member to the Nest, such
              family member shall be required to provide their own consent for
              processing of their Personal Data. Consent shall be obtained
              directly from the family member through an OTP-based confirmation
              sent to their registered mobile number, along with notice of the
              purpose and scope of processing. No processing of such data shall
              occur unless and until such consent is provided.
            </Para>
            <Para>
              Each Nest functions as a common shared space for all Nest Members,
              and participation is voluntary. A Nest Member may be removed or
              may exit the Nest in accordance with Platform settings; however,
              certain transaction or regulatory records may be retained as
              required by law.
            </Para>
          </Indent>
          <p className="heading-legal mb-3">Actions Permitted Within a Nest</p>
          <Indent>
            <Para>
              Subject to explicit consent, applicable laws and Platform
              controls, each Nest Member may perform the following actions:
            </Para>
            <Para>
              <Bold>Profile and Account Management:</Bold> Each Nest Member can:
            </Para>
            <NamedSubSection sl="i">
              Create, update, or manage their own profile.
            </NamedSubSection>
            <NamedSubSection sl="ii">
              Create or manage a Nest-linked profile or account for another Nest
              Member, where such Nest Member has provided valid consent.
            </NamedSubSection>
            <NamedSubSection sl="iii">
              Change or update profile pictures and related identifiers within
              the Nest. Note that financial data is personal to each Nest Member
              and other members of a Nest will not be able to modify such data.
            </NamedSubSection>
            <Para>
              <Bold>Visibility of Nest Member Data</Bold>: View Personal Data
              including Credit Report Information, Bill Payment Details and
              account-related information of other Nest Members within the same
              Nest, except for documents stored in the Nest Safe, unless
              expressly shared.
            </Para>
            <Para>
              <Bold>Payments and Bills:</Bold> Each Nest Member can:
            </Para>

            <Para>
              <Bold> Credit Report related actions: </Bold>Initiate credit score
              checks or credit report access for themselves or for another Nest
              Member, only where the concerned Nest Member has provided explicit
              consent, including OTP-based confirmation where required.
            </Para>
            <Para>
              <Bold>Nest Safe:</Bold> Nest Members can Upload documents to the
              Nest Safe. Nest members can also share specific documents with
              selected Nest Members within the Nest.
            </Para>
            <Para>
              Documents remain private by default and are not visible to other
              Nest Members unless actively shared.
            </Para>
            <Para>
              <Bold>Additional features: </Bold>
              Nest Money may, in compliance with applicable laws and regulatory
              requirements, introduce additional Nest related features or
              services for Nest Members from time to time. Use of such features
              shall be subject to applicable terms, disclosures, and User
              consents, where required, and shall be governed by the Platform’s
              Terms of Use and{" "}
              <Link href={"/privacy"} className="text-primary-blue">
                Privacy Policy
              </Link>
              .
            </Para>
          </Indent>
          <p className="heading-legal mb-3">
            Consent and Authority Between Nest Members
          </p>
          <Indent>
            <Para>
              By joining a Nest, each Nest Member acknowledges and agrees that:
            </Para>
            <NamedSubSection sl="i">
              other Nest Members may view certain Personal Data;
            </NamedSubSection>

            <NamedSubSection sl="ii">
              other Nest Members may perform permitted actions on their behalf;
            </NamedSubSection>

            <NamedSubSection sl="iii">
              such actions are undertaken solely within the Nest and based on
              consent.
            </NamedSubSection>

            <Para>Consent may be:</Para>
            <NamedSubSection sl="i">feature-specific;</NamedSubSection>

            <NamedSubSection sl="ii">
              action-specific (e.g., credit report access);
            </NamedSubSection>

            <NamedSubSection sl="iii">
              time-bound or revocable through Platform controls.
            </NamedSubSection>
          </Indent>
          <Para>
            All personal data of Nest Members will be handled by Nest Money
            strictly in accordance with Our{" "}
            <Link href={"/privacy"} className="text-primary-blue">
              Privacy Policy
            </Link>
            .
          </Para>
          <Para>
            Withdrawal of consent may limit or disable certain Nest
            functionalities without affecting the legality of processing carried
            out prior to withdrawal.
          </Para>
          <p className="heading-legal mb-3">
            User Responsibility and Risk Allocation
          </p>
          <Indent>
            <Para>Each Nest Member is responsible for:</Para>
            <NamedSubSection sl="i">
              ensuring the accuracy of data shared;
            </NamedSubSection>

            <NamedSubSection sl="ii">
              granting consent only to trusted Nest Members;
            </NamedSubSection>

            <NamedSubSection sl="iii">
              monitoring Nest activity affecting their data or financial
              obligations.
            </NamedSubSection>
            <Para>
              Nest Money does not act as an agent or fiduciary between Nest
              Members and is not responsible for disputes, misuse of authority,
              or unauthorised actions taken by a Nest Member using valid
              credentials or consent of another Nest Member
            </Para>
          </Indent>
        </Indent>
      </NumberedSection>
      <NumberedSection sl={28} heading="ADDITONAL TERMS - BBPS BILL PAYMENT">
        <Indent>
          <p className="heading-legal mb-3">
            Roles and Responsibilities under BBPS
          </p>
          <NamedSubSection sl="a">
            Role of NPCI (BBPCU): The Bharat Bill Payment Central Unit (BBPCU),
            operated by NPCI, establishes the standards, rules and operating
            procedures for transactions conducted through the Bharat Bill
            Payment System (BBPS) and oversees the network-level settlement and
            dispute resolution mechanisms.
          </NamedSubSection>

          <NamedSubSection sl="b">
            Role of Nest Money: Nest Money acts as a BBPS participant and
            provides a digital interface to enable Users to view bills and
            initiate payments through the BBPS network. Nest Money implements
            reasonable technical and organisational measures to secure the
            Platform and provides a customer grievance redressal mechanism in
            accordance with applicable NPCI and regulatory requirements.
          </NamedSubSection>

          <NamedSubSection sl="c">
            Limitation of Role: Nest Money acts solely as a facilitator for bill
            payments and does not provide the underlying utility or billing
            services. Nest Money is not responsible for the quality, accuracy,
            availability or performance of services provided by the relevant
            Biller or for delays arising from the Biller’s systems or BBPS
            network operations.
          </NamedSubSection>

          <p className="heading-legal mb-3">
            Payment Processing, Delays and Refunds
          </p>
          <Indent>
            <Para>
              <Bold>Consent Scope:</Bold> Any authorisation or consent provided
              by You in connection with a transaction or service shall be
              limited to the specific purpose for which such consent was
              obtained. Nest Money shall not assume Your consent for any future
              transaction, recurring payment, or new data processing activity
              unless You have provided explicit authorisation for such actions
              through the Platform.
            </Para>
            <Para>
              <Bold>Payment Processing and User Inputs:</Bold> Nest Money shall
              not be responsible for any incorrect, incomplete, or inaccurate
              information or inputs provided by the User at the time of
              initiating a transaction on the Platform. Users are solely
              responsible for verifying all payment-related details, including
              biller information and payment amounts, prior to confirming any
              transaction.
            </Para>
            <Para>
              <Bold> Settlement Timelines:</Bold> The time taken for the credit
              of payments may vary depending on the User’s bank, card issuer,
              payment network, or BBPS participant. While many transactions may
              be processed in near real-time, settlement may normally take
              between 48 to 72 working hours. Nest Money does not guarantee
              specific timelines for third-party systems but shall initiate all
              processing requests promptly upon User authorisation.
            </Para>
            <Para>
              <Bold>Failed Transactions and Automated Reversals:</Bold> In
              accordance with applicable RBI directions on turnaround time (TAT)
              for failed transactions:
            </Para>
            <NamedSubSection sl="a">
              Automatic Reversal: Where a User’s account is debited but the
              transaction is not successfully completed, Nest Money (in
              coordination with its PSP or Sponsor Bank) shall initiate an
              automatic reversal.
            </NamedSubSection>

            <NamedSubSection sl="b">
              Timelines: Reversals shall be processed in accordance with the
              turnaround time prescribed by applicable RBI circulars for the
              relevant payment instrument.
            </NamedSubSection>
            <Para>
              <Bold>Late Fees and Charges:</Bold>ponsible for penalties or
              charges levied by third-party billers or card issuers due to
              general network delays, and will be liable only for any late fees
              or interest charges directly and solely resulting from a proven
              technical failure or gross negligence within Nest Money’s internal
              systems.
            </Para>
            <Para>
              <Bold>Refunds:</Bold> In the event of failed or duplicate
              transactions or resolved disputed transactions, Users may be
              eligible for refunds, subject to the policies, procedures and
              determination of the relevant third-party service provider through
              which the transaction was processed. Nest Money shall use best
              efforts to process all refunds shall be processed within 7 working
              days; however, the refund timelines may be subject to the refund
              policies and timelines of the third-party service provider,
              technical issues etc. All refunds will be credited exclusively to
              the original source account used for the transaction.
            </Para>
            <Para>
              <Bold> Erroneous Credits and Reversals:</Bold> In the event that a
              payment is erroneously processed and credited to a User’s account,
              Nest Money reserves the right to initiate a reversal to correct
              the error. Nest Money shall notify the User of such reversal
              within a reasonable time, along with the reason and relevant
              transaction details.
            </Para>
          </Indent>
        </Indent>
      </NumberedSection>
      <NumberedSection
        sl={29}
        heading="ADDITIONAL TERMS – CREDIT REPORT ANALYSIS"
      >
        <Indent>
          <Para>
            By onboarding, You provide explicit, specific, and informed consent
            to Nest Money to act as Your authorised representative to request
            Your credit information, including Your credit score and full credit
            report, from applicable Credit Information Companies (“CICs”). All
            User consents given for credit report access, will be stored by Nest
            Money for a period of 180 days from the date of such consent or till
            the date the User revokes such consent, whichever is earlier. Upon
            expiry of such period the consent data will be purged by Nest Money.
          </Para>
          <Para>
            You authorise Nest Money to access Your credit information on a
            periodic basis for the purpose of providing updated credit insights
            and analysis through the credit reports feature. You may receive
            notifications or alerts from Nest Money and/or the relevant CIC in
            connection with such access, in accordance with their respective
            practices.
          </Para>
          <Para>
            Your credit information shall be processed solely for the purpose of
            providing the credit report related Services and in accordance with
            applicable law. Nest Money shall not share such information with
            third parties for marketing or unrelated purposes without Your
            separate explicit consent.
          </Para>
          <Para>
            You may withdraw Your consent for periodic access at any time
            through the privacy or consent settings available on the Platform.
            Upon such withdrawal, Nest Money shall cease initiating future
            requests to CICs for Your credit information, except where retention
            or access is required under applicable law or for regulatory,
            dispute resolution or fraud prevention purposes.
          </Para>
          <Para>
            To access Your Credit Score and its analysis, You may be required to
            submit certain personal information, including Your name, email
            address, phone number, permanent account number (PAN) and date of
            birth. By submitting such information, You represent that the
            information provided is accurate and relates to You, or that You
            have the necessary authority and consent to provide such information
            on behalf of any third party. You shall be solely responsible and
            liable for any unauthorised or incorrect submission of third-party
            information.
          </Para>
          <Para>
            Nest Money does not accept any responsibility or liability for any
            loss or damage arising from any information, documentation or data
            provided by You that is unauthorised, incorrect, incomplete,
            inaccurate or misleading, or where You fail to disclose any material
            fact to Nest Money or the relevant CICs.
          </Para>
          <Para>
            You acknowledge that Nest Money merely displays credit information
            received from CICs based on the inputs provided by You and does not
            independently verify or modify such information. Nest Money shall
            not be responsible for any inaccuracies or incompleteness in the
            credit information displayed. Any corrections or updates to Your
            credit information must be undertaken directly with the relevant CIC
          </Para>
          <Para>
            Any analysis, predictions, simulations or recommendations generated
            through Nest Money’s tools are indicative only and are based on Nest
            Money’s internal models. Actual changes to Your credit score may
            vary and are determined solely and independently by the relevant
            CICs. Neither Nest Money nor any CIC guarantees any outcome or
            change in Your credit score based on such tools, and Nest Money
            expressly disclaims all liability arising from reliance on such
            predictions.
          </Para>
        </Indent>
      </NumberedSection>
      <NumberedSection sl={30} heading="ADDITIONAL TERMS – NEST SAFE">
        <Indent>
          <Para>
            We provide secure document storage services solely for the purpose
            of safekeeping and retrieval by the User. “Nest Safe” means the
            feature within the Nest allowing storage of documents with selective
            sharing controls.
          </Para>
          <Para>
            Uploaded documents are encrypted, and shall not be accessed by Nest
            Money. Users may delete stored documents at any time, subject to
            legal retention requirements.
          </Para>
          <Para>
            Nest Members can share specific documents with selected Nest Members
            within the Nest. Documents remain private by default and are not
            visible to other Nest Members unless actively shared.
          </Para>
          <Para>
            All documents and materials uploaded to the Nest Safe shall form
            part of the User Content and shall remain the property of the User.
            The User is solely responsible for the legality, accuracy,
            completeness and authenticity of any User Content stored in the Nest
            Safe
          </Para>
          <Para>
            Nest Money does not verify, validate, authenticate or certify any
            documents stored in the Nest Safe and does not provide any legal,
            financial, or professional advice in relation to such documents.
          </Para>
          <Para>
            The Nest Safe is a digital storage and retrieval service only and
            does not constitute an official repository, government record, or
            legally recognised digital locker under any applicable law.
            Documents stored in the Nest Safe may not be admissible or
            sufficient for evidentiary purposes.
          </Para>
          <Para>
            While Nest Money endeavours to maintain availability and data
            integrity, the Nest Safe is provided on an “as is” and “as
            available” basis. Nest Money does not guarantee uninterrupted
            access, error-free storage, or the absence of data loss or
            corruption.
          </Para>
          <Para>
            Users are solely responsible for maintaining independent backups of
            any documents stored in the Nest Safe. Nest Money shall not be
            responsible for any loss or inability to recover User Content.
          </Para>
          <Para>
            Documents stored in the Nest Safe will be retained for as long as
            the User maintains an active account, unless deleted by the User or
            required to be retained by Nest Money under applicable law.
          </Para>
          <Para>
            Nest Money may impose limits on file size, storage capacity, and
            file formats supported, and may modify such limits from time to
            time.
          </Para>
          <Para>
            Nothing in these Terms creates a fiduciary, trustee, custodian or
            bailment relationship between Nest Money and the User in respect of
            User Content.
          </Para>
          <Para>
            Users are responsible for exporting and retrieving their documents
            prior to Account termination or deletion.
          </Para>
        </Indent>
      </NumberedSection>
    </main>
  );
};
export default page;
