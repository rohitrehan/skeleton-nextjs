import React from 'react';
import { organization } from '../../constants';
import { WebsiteLayout } from '../../layouts';
import styles from './privacy-policy.module.scss';

export default function PrivacyPolicy() {
  return (
    <WebsiteLayout>
      <h1><strong>Privacy Policy</strong></h1>
      <h4><strong>Your privacy is our concern</strong></h4>
      <p>We are {organization.shortName}, a fast, simple and effective online search engine which provides access to thousands of advertisements located on thousands of web pages in a single search and through a single results page, with the purpose of saving you the time it takes to carry out individualized searches of each of said web pages (hereinafter collectively and interchangeably referred to as &#8220;<strong>{organization.shortName}</strong>&#8220;, &#8220;<strong>we</strong>&#8220;, &#8220;<strong>our</strong>&#8221; or &#8220;<strong>us</strong>&#8220;).</p>
      <p>We   consider   the   privacy   of   people   important   both   to   the   visitors   to   our   website <a href={organization.website}>{organization.website}</a> and any other domains held by {organization.shortName} in connection with this website, application and blog (hereinafter collectively, the &#8220;<strong>Platform</strong>&#8220;) and to any other people who may provide us with information through said website and domains, whose data are processed by {organization.shortName} as part of our provision of services (hereinafter and jointly, &#8220;<strong>you</strong>&#8221; and/or the &#8220;<strong>user</strong>&#8221; or &#8220;<strong>users</strong>&#8220;). In this regard, {organization.shortName} undertakes to process your data as provided by applicable personal data protection regulations. In particular, {organization.shortName} will comply with the provisions of REGULATION (EU) 2016/679 OF THE EUROPEAN PARLIAMENT AND OF THE COUNCIL of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46EC (hereinafter, the &#8220;<strong>General Data Protection Regulation</strong>&#8221; or &#8220;<strong>GDPR</strong>&#8220;) and any other related regulations which may be in force from time to time.</p>
      <p>Based on the above, {organization.shortName} hereby provides information on its Privacy Policy in order to let the users know about the processing of their data and inform them of the main principles it applies to the protection of personal data. However, certain services provided on the Platform may contain specific terms of use which shall prevail over the present Privacy Policy and may affect the protection of personal data.</p>
      <p>In connection with the above, we hereby urge all users to read this Privacy Policy carefully in order to learn about the rules and practices we have put in place to protect personal data and gain insight into our relationship with third parties who may have access to said data.</p>
      <p>In any event, users will hold full responsibility for any information which they may provide on the Platform. Should {organization.shortName} wish to use said information for purposes other than as explained above, we will inform you of said new purposes and request your consent if necessary.</p>
      <p>The user guarantees that the information provided to {organization.shortName} is truthful and up to date and undertakes to communicate any changes with may affect his/her status. Furthermore, the user guarantees that he/she has any authority necessary to communicate information belonging to third parties and that he/she has informed said third parties of the personal data processing by {organization.shortName} for purposes connected to our services, in particular through the service &#8220;Compartir&#8221;.</p>
      <p><strong> </strong></p>
      <p><span style={{ color: "#5254d8" }}><strong>1. Who is the data controller?</strong></span></p>
      <p><u>Contact details of the data controller</u>:{organization.shortName} LTD, with Tax ID number {organization.GSTIN}, domiciled in {organization.address.street}, {organization.address.state} {organization.address.pin}, {organization.address.country} and with contact email address <a href={`mailto:${organization.contact.email}`}>{organization.contact.email}</a>.</p>
      <p><span style={{ color: "#5254d8" }}><strong>2. What are the data protection rights of the users?</strong></span></p>
      <p>The users have the following rights:</p>
      <ul>
        <li><u>The right to request access to their personal data</u>: you may ask {organization.shortName} if it is processing your data and, if so, gain access to said data.</li>
        <li><u>The right to request that said data be rectified if they are inaccurate or completed if incomplete</u>.</li>
        <li><u>The right to request the erasure of their data</u>.</li>
        <li><u>The right to request a limited processing of their data</u>: in this case we will only keep your data with a view to exercising or defending any possible claims.</li>
        <li><u>The right to object to the processing</u>: {organization.shortName} will cease to process your personal data except for legitimate reasons and/or in order to exercise or defend any claims.</li>
        <li><u>The right to the portability of the data</u>: if you wish to have your data processed by a different data controller, {organization.shortName} will enable the transfer of said data to the new controller.</li>
        <li><u>The right not to be subject to a decision based solely on the automated processing of their personal data</u>.</li>
      </ul>
      <p>lf you have granted your consent to the processing of your data for a specific purpose, you may withdraw said consent at any time without this affecting the lawfulness of the processing performed prior to said withdrawal.</p>
      <p>In any event, all personal data linked to the user&#8217;s account, as well as any information and/or content included in his/her profile, will be canceled as of the time when the user exercises his/her right of erasure. Furthermore, should the user exercise his/her right of erasure in connection with data which are necessary for {organization.shortName} to provide the services on the Platform, {organization.shortName} will be forced to terminate its relationship with the user and shall therefore unsubscribe him/her and the user will not be entitled to file any claim whatsoever in this respect.</p>
      <p>Users may exercise their rights by written notice sent to {organization.shortName}&#8217;s corporate address or by email sent to the address indicated in section 1 of this Privacy Policy, including in both cases a photocopy of their ID card or equivalent identification document.</p>
      <p><strong> </strong></p>
      <p><span style={{ color: "#5254d8" }}><strong>3. How can you file a claim before the Irish Data Protection Agency?</strong></span></p>
      <p><u>You may use the forms and models</u> provided by the Irish Data Protection Agency in connection with the rights referred to above.</p>
      <p><u>Claim filed before the Supervisory Authority</u>: lf you consider that {organization.shortName} is processing your data inappropriately, you may address your claim to {organization.shortName} or to the relevant Supervisory Authority. In Ireland, please refer to the Irish Data Protection Authority.</p>
      <p><strong> </strong></p>
      <p><span style={{ color: "#5254d8" }}><strong>4. In what cases do we collect your personal data and what type of data do we collect?</strong></span></p>
      <p>In this Privacy Policy, the term &#8220;personal data&#8221; is used in connection with any information which identifies you or may be used to identify you, such as your name, address, telephone number or email address.</p>
      <p>lf you decide to provide us with your personal data, {organization.shortName} will gain access to the following:</p>
      <p>a) Personal data provided voluntarily by the user:</p>
      <ul>
        <li>Email address</li>
        <li>Geolocation, provided that the user activates this option on his/her device</li>
        <li>Any personal data which the user may send directly to {organization.shortName}</li>
      </ul>
      <p>Without prejudice to the provisions in section 5 herein, said personal data will be processed if you interact with {organization.shortName} and our representatives; if you participate or apply to participate in activities related to {organization.shortName}, such as the provision of services or online surveys about our services and/or activities; if you interact with the Platform upon being requested to provide personal data as described in this Privacy Policy and in the <a href={`https://${organization.website}/cookie-policy`}>Cookies Policy</a>; if you subscribe to our Platform or use certain functionalities without subscribing, such as participating in our interactive services.</p>
      <p>b) Personal data which our website collects from your computer or electronic device.</p>
      <ul>
        <li>Cookies, applicable to <a href={`https://${organization.website}`}>https://{organization.website}</a> and any other domains held by {organization.shortName} connected with this website</li>
        <li>IP</li>
      </ul>
      <p>For more information on the use of cookies by {organization.shortName}, please read our <a href={`https://${organization.website}/cookie-policy`}>Cookies Policy</a>.</p>
      <p><strong> </strong></p>
      <p><span style={{ color: "#5254d8" }}><strong>5. How do we use the personal data of our users?</strong></span></p>
      <p>{organization.shortName} hereby communicates to any users applicable that any personal data which they may provide and we may capture will be identified in the Register of Processing Activities held by {organization.shortName}, and may be used for the following purposes:</p>
      <ul>
        <li>To register the user and generate a new {organization.shortName} user account.</li>
        <li>To provide our services under the <a href={`https://${organization.website}/legal-notice/`}>Legal Notice</a> and <a href={`https://${organization.website}/tnc`}>General Conditions</a> of {organization.shortName} or those that may be established in the future with each of the users.</li>
        <li>To enable access to any options requiring registration (e.g., sending CVs or employment applications, accessing options within the account profile, activating custom alerts)</li>
        <li>To respond to consultations or information requests made by the users.</li>
        <li>Provided that you have ticked the relevant box, to keep you informed of our services, activities, projects, updates and new website or application features by means of notices/newsletters sent by email and/or other electronic means.</li>
        <li>Provided that you have ticked the relevant box, to keep you informed, by means of notices/newsletters sent by email and/or other electronic means, of the services and products of our partners in connection with the following sectors: boating, motor, clothing and footwear, publishing, banking and finances, vehicle rental, catering and accommodation, tourism and leisure trips (purchase of trip and tourist packages), cosmetics and personal hygiene, food, consumer goods, technology, companies- creation of smartphone applications addressed to consumers) and non-governmental organizations. The content of said notices will be selected at all times by {organization.shortName} and sent to you directly by us.</li>
        <li>If you have ticked the relevant boxes, we may also send you push notifications in connection with our products and services.</li>
        <li>In the case that you have expressly accepted it in the forms authorized for this purpose, to send them to our clients, so they can send you offers related to their products or services.</li>
      </ul>
      <p>Your IP address will be collected and used to check the origin of your messages with a view to detecting any possible irregularities (for instance, if opposing parties of a single case write to {organization.shortName} from the same IP address).</p>
      <p><span style={{ color: "#5254d8" }}><strong>6. Why do we process your personal data?</strong></span></p>
      <p>{organization.shortName} may process your personal data on any of the following legal grounds: (A) for legitimate commercial purposes; (B) if it is necessary in connection with the performance of an agreement you are party to; (C) if it is necessary so that {organization.shortName} may comply with its legal and regulatory obligations; and (D) if you have given your consent to said processing.</p>
      <div className={styles.privacyTableContainer}>
        <table style={{ height: "161px" }} width="1219">
          <tbody>
            <tr>
              <td width="216">
                <p><strong>LEGITIMATE COMMERCIAL | </strong><strong>PURPOSES OF {organization.shortName}</strong></p>
              </td>
              <td width="216">
                <p><strong>PROCESSING ACTIVITIES</strong></p>
              </td>
            </tr>
            <tr>
              <td width="216"><p>&#8211;  Professional activities of {organization.shortName}.</p>
                <p>&#8211;  Promotion and evaluation of {organization.shortName} services.</p></td>
              <td width="216"><p>&#8211; lnteraction with {organization.shortName} staff.</p>
                <p>&#8211; Response to requests for technical and operational information regarding the Platform, as well as requests for information on the services offered by {organization.shortName}.</p>
                <p>&#8211; ldentify you and contact you as a user.</p></td>
            </tr>
          </tbody>
        </table>
        <table style={{ height: "164px" }} width="431">
          <tbody>
            <tr>
              <td width="432"><strong>MANAGEMENT AND PERFORMANCE OF AN AGREEMENT</strong></td>
            </tr>
            <tr>
              <td width="432">In order to deal with your subscription on our Platform as provided by the <a href={`https://${organization.website}/legal-notice/`}>Legal Notice</a> or deal with any other documents subscribed by the user.</td>
            </tr>
          </tbody>
        </table>
        <table width="432">
          <tbody>
            <tr>
              <td width="432"><strong>LEGAL AND REGULATORY COMPLIANCE</strong></td>
            </tr>
            <tr>
              <td width="432">Comply with any obligations applicable from time to time.</td>
            </tr>
          </tbody>
        </table>
        <table width="432">
          <tbody>
            <tr>
              <td width="432"><strong>CONSENT</strong></td>
            </tr>
            <tr>
              <td width="432">Given by the user himself/herself in connection with the collection and processing of his/her personal data.</td>
            </tr>
            <tr>
              <td width="432">Transparency in the absence of local regulations.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p><span style={{ color: "#5254d8" }}><strong>7. Who may gain access to your personal data?</strong></span></p>
      <p>Depending on the purpose of collection of your personal data, said information may be accessed by the following persons without distinction:</p>
      <ul>
        <li>Staff authorized by {organization.shortName} or its representatives acting on behalf of {organization.shortName}, subject to applicable personal data protection law.</li>
        <li>Regulatory authorities or other third parties as provided far by applicable law.</li>
        <li>Third-party service providers which may process information as personal data processors under the instructions of {organization.shortName}, upon applying any measures necessary to ensure that we may share said information under enforceable data protection law.</li>
      </ul>
      <p>We shall refrain from selling or disclosing to third parties any information or personal data provided by you on our Platform which may identify you directly or indirectly, unless you have expressly authorized it through the forms authorized for this purpose.</p>
      <p><span style={{ color: "#5254d8" }}><strong>8. Where are your personal data processed?</strong></span></p>
      <p>{organization.shortName} is a national company based in Ireland. {organization.shortName} will not transfer personal data outside the European Economic Area (EEA). However, any said transfer would always be made by {organization.shortName} in compliance with any personal data protection law applicable. Regardless of the place where your personal data may be collected or processed, {organization.shortName} will ensure that service providers keep all administrative, technical and physical security measures as may be appropriate to protect your information.</p>
      <p>For more information on the use of model agreements by {organization.shortName}, please contact us on <a href={`mailto:${organization.contact.email}`}>{organization.contact.email}</a>.</p>
      <p><span style={{ color: "#5254d8" }}><strong>9. How do we protect your personal data?</strong></span></p>
      <p>{organization.shortName} has security measures in place to prevent your personal information from being accidentally lost, used or accessed in an unauthorised way, or inappropriately altered or disclosed. In addition, we limit access to your personal information to those who need to process that information for business reasons. They will only process your personal information on our instructions and they are subject to a duty of confidentiality.</p>
      <p>We have put in place procedures to deal with any suspected information security breach and will notify you and any applicable regulator of a suspected breach as appropriate and in accordance with our legal obligations.</p>
      <p>However, despite the diligent implementation of such measures, the user must know that Internet security measures are not impregnable.</p>
      <p><strong> </strong></p>
      <p><span style={{ color: "#5254d8" }}><strong>10. How long will we keep your personal data?</strong></span></p>
      <p>{organization.shortName} will process your personal data far as long as may be necessary to fulfil the purposes set forth in this Privacy Policy and will keep your data as provided far by applicable laws and regulations.</p>
      <p>The criteria we follow in this regard are determined by:</p>
      <ul>
        <li>The purpose of the personal data collected and compliance with said purpose.</li>
        <li>The reasons for the collection of the personal data: e.g., you may revoke your consent at any time.</li>
        <li>Compulsory storage times under contractual and regulatory provisions.</li>
      </ul>
      <p>Please note that in some cases {organization.shortName} has the obligation to retain certain personal data of the users.</p>
      <p><span style={{ color: "#5254d8" }}><strong>11. Confidentiality</strong></span></p>
      <p>Professionals working with {organization.shortName} who may intervene in any way in the services provided to the user undertake not to disclose or use the information they may gain access to. In any event, any information provided by the user will be considered confidential and may not be used for purposes other than the management of the user account and/or the services engaged with {organization.shortName}, if any. In this regard, we undertake not to disclose information regarding the purposes of the user, the information requested or the duration of our relationship with the user.</p>
      <p><span style={{ color: "#5254d8" }}><strong>12. Social networks</strong></span></p>
      <p>{organization.shortName} is present in some of the main social networks on the Internet, where it acts as data controller in connection with personal data published by {organization.shortName}.</p>
      <p>{organization.shortName} will process personal data on each social network in accordance with the rules established by the relevant social network to such end. Therefore, except as otherwise stated, {organization.shortName} may inform its followers on each social network of its activities, events and related matters, including follower services, through the channels provided by the social network for such purpose.</p>
      <p>{organization.shortName} will not collect personal data from social networks except otherwise expressly agreed to by the user.</p>
      <p><span style={{ color: "#5254d8" }}><strong>13. Special category of personal data</strong></span></p>
      <p>We will neither collect nor process any personal data which may be especially sensitive or included in the special category of user personal data, unless said data have been provided explicitly. Special personal data categories include information related to race/ethnicity, political opinions, religious, philosophical or similar beliefs, membership in trade unions, genetic data, biometric data used for exclusive purposes of identification of an individual, health data, sexual lite or sexual orientation.</p>
      <p><span style={{ color: "#5254d8" }}><strong>14. Policy regarding the use of the Platform by children</strong></span></p>
      <p>The Platform is not designed for or addressed to children under sixteen (16) years of age, who may not use it without an authorisation of their parents or legal guardians. In this regard, we do not collect information from persons under said age deliberately. In any event, if any parents or legal guardians believe that their children have provided us with personal data without their consent, they should let us know by writing to <a href={`mailto:${organization.contact.email}`}>{organization.contact.email}</a>.</p>
      <p><span style={{ color: "#5254d8" }}><strong>15. Direct marketing</strong></span></p>
      <p>We undertake not to use your personal data for direct marketing purposes without your express prior consent, as provided under article 5 of this Privacy Policy.</p>
      <p>lf, at any time, you wish to stop receiving commercial or promotion I information from {organization.shortName} or third parties, you may unsubscribe from direct marketing campaigns processing of your personal data far said purposes, free of charge, by contacting us on <a href={`mailto:${organization.contact.email}`}>{organization.contact.email}</a> or by pressing the opt-out button on the subject field of the email. You may also use the opt-out procedure provided in any promotional message received from {organization.shortName}.</p>
      <p>Please note that, even if you decide not to subscribe or if you decide to unsubscribe from receiving promotional emails or newsletters, we may need to continue contacting you in connection with important information of a non-commercial nature, such as problem solving, inactivity or lack of use, detection and prevention of errors or, in general, compliance with the <a href={`https://${organization.website}/legal-notice/`}>Legal Notice</a> and operational procedures of the Platform.</p>
      <p><span style={{ color: "#5254d8" }}><strong>16. Automated decision-making</strong></span></p>
      <p>{organization.shortName} integrates the content of the various classified ads websites in our Platform and directs quality traffic to their advertisements. Furthermore, we are capable of generating additional traffic by sending the right advert to the right user at the right time, through our native advertising products.</p>
      <p>We use automated decision-making procedures to respond to your choices on the Platform search engine, in order to render the services under the <a href={`https://${organization.website}/legal-notice/`}>Legal Notice</a> and offer you a quality and satisfactory service which is in accordance with your search.</p>
      <p><span style={{ color: "#5254d8" }}><strong>17. Links to other websites, applications or platforms</strong></span></p>
      <p>The Platform includes links to other types of websites, applications or platforms which we consider may be potentially informational and useful to you. However, keep in mind that we neither support nor recommend the content and/or services provided therein and that we are not liable far their privacy policies or terms of use. In this respect, we recommend that you read the privacy policies of any websites you may visit. Remember that the provisions herein are only applicable to personal data collected and/or processed by {organization.shortName}.</p>
      <p><span style={{ color: "#5254d8" }}><strong>18.­ Amendments to and integrity of our Policy Privacy</strong></span></p>
      <p>We will only use your personal data as set forth in the Privacy Policy which is applicable at the time of collection of your personal data. {organization.shortName} reserves the right to amend this Privacy Policy at any time by publishing said amendments on our Platform. Therefore, we recommend that you check the Privacy Policy every time you enter the Platform. lf we decide at any time to use personal data other than as stated at the time of collection, we will communicate said decision to you by email, provided that we have your email address. You will then be given the chance to authorize other uses or disclosures of the personal data provided by you before the amendment of our Privacy Policy.</p>
      <p>Should any of the clauses in this Privacy Policy be eliminated or considered null and void, this will not affect the rest of the <a href={`https://${organization.website}/tnc`}>terms and conditions</a>, which shall remain fully valid and effective under regulations in force from time to time.</p>
      <p><strong>Last updated: March 2022</strong></p>
    </WebsiteLayout>
  )
}
