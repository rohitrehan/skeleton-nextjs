import React from 'react';
import { WebsiteLayout } from '../../layouts';
import { organization } from '../../constants';
import styles from './cookie-policy.module.scss';

interface CookieInfo {
  denomination: string;
  technicalName: string;
  purpose: string;
  informationCollected: string;
  permanence: string;
  managingEntity: string;
}
export default function CookiePolicy() {
  const cookieInformation: CookieInfo[] = [];

  cookieInformation.push({
    denomination: "Google Analytics",
    technicalName: "_ga",
    purpose: "ANALYSIS",
    informationCollected: "Differentiate users.",
    permanence: "PERSISTENT (2 years)",
    managingEntity: "Third-party"
  })
  cookieInformation.push({
    denomination: "Google Analytics",
    technicalName: "_gat",
    purpose: "ANALYSIS",
    informationCollected: "Limit the percentage of requests.",
    permanence: "SESSION (1 minute)",
    managingEntity: "Third-party"
  })
  cookieInformation.push({
    denomination: "Google Analytics",
    technicalName: "_gid",
    purpose: "ANALYSIS",
    informationCollected: "Differentiate users.",
    permanence: "PERSISTENT (24 hours)",
    managingEntity: "Third-party"
  })
  cookieInformation.push({
    denomination: "Google DFP",
    technicalName: "__gads",
    purpose: "BEHAVIORAL ADVERTISING",
    informationCollected: "DoubleClick for Publishers service for Google.",
    permanence: "PERSISTENT (2 years)",
    managingEntity: "Third-party"
  })
  cookieInformation.push({
    denomination: "Organization Cookie",
    technicalName: "cookieDisclaimer",
    purpose: "TECHNICAL",
    informationCollected: "Manage interaction elements.",
    permanence: "PERSISTENT (10 years)",
    managingEntity: organization.registeredName
  })
return (
  <WebsiteLayout>
    <h1>Cookie Policy</h1>
    <p><strong>{organization.registeredName}</strong> with registered office at Ground Floor 71, Lower Baggot Street, Dublin D02P593, Ireland, uses cookies for the operation of its website.</p>
    <p>Cookies are text files that contain small amounts of information that are downloaded in your computer or mobile device when you visit a website. Cookies are sent back to the original website at each subsequent visit or to another website that recognizes them. Cookies are useful because they allow a website to recognize the user&#8217;s device. Cookies can perform different functions such as allowing you to navigate between pages efficiently, remembering your preferences, and generally improving user&#8217;s navigation.</p>
    <p>In terms of typology, Cookies are classified according to the entity that manages them; Thus, we use our own and third-party cookies, according to the terms that remain activated session or persistent, according to its purpose, technical, customization, analysis, advertising and behavioral advertising.</p>
    <p><u>SESSION</u>: Cookies designed to collect and store data while the user accesses a website. They are used to store information for the provision of the service requested by the user in a single occasion.</p>
    <p><u>PERSISTENT</u>: Cookies in which the data is still stored in the user&#8217;s computer or device and can be accessed and processed during a period defined by the responsible for the cookie. This period of time can go from a few minutes to several years.</p>
    <p><u>TECHNICAL</u>: Allow the user to navigate through a website, platform or application and to the different options or services provided in it.</p>
    <p><u>CUSTOMIZATION</u>: Allow the user to access the service with some predefined general characteristics according to a series of criteria in the user&#8217;s computer or device.</p>
    <p><u>ANALYSIS</u>: Allow the responsible of the Cookie to monitor and analyse the behavior of the websites users of the to which they are linked.</p>
    <p><u>ADVERTISING</u>: Allow the management, in the most efficient way, of the advertising spaces that, if applicable, the publisher has included in a website, application or platform from which it provides the requested service based on criteria such as edited content or the frequency at which ads are displayed.</p>
    <p><u>BEHAVIORAL ADVERTISING</u>: Allow the management of the advertising spaces that the publisher has included in a website, application or platform from which it provides the requested service. This Cookie stores information regarding the behavior of users obtained through the continuous observation of their browsing habits, which allows it to develop a specific profile to show advertising based on it.</p>
    <p>We inform you of the types of cookies that are used in this website and its purpose:</p>
    <div className={styles.cookieTableContainer}>
      <table width="532">
        <tbody>
          <tr>
            <th>DENOMINATION</th>
            <th >TECHNICAL NAME</th>
            <th >PURPOSE</th>
            <th >INFORMATION COLLECTED</th>
            <th >PERMANENCE</th>
            <th >MANAGING ENTITY</th>
          </tr>
          {cookieInformation.map((info: CookieInfo, idx: number) => {
            return (<tr key={idx}>
              <td>{info.denomination}</td>
              <td>{info.technicalName}</td>
              <td>{info.purpose}</td>
              <td>{info.informationCollected}</td>
              <td>{info.permanence}</td>
              <td>{info.managingEntity}</td>
            </tr>)
          })}
        </tbody>
      </table>
    </div>
    <p><strong>{organization.registeredName} </strong>uses Google Analytics cookies, whose settings are pre-determined by the service offered by the company Google, reason why we suggest you to consult the privacy page of Google Analytics, <a href="http://www.google.es/intl/es_ALL/analytics/learn/privacy.html">http://www.google.es/intl/es_ALL/analytics/learn/privacy.html</a> to obtain more information on the cookies used and how to disable them (it being understood that we are not liable for the contents or veracity of the third-party web sites).</p>
    <h5><strong>Deactivation of cookies</strong></h5>
    <p>The User can freely decide on the implantation or not of our cookies in his Hard Drive as well as his elimination, following the procedure established in the help section of his navigator. The User can also configure the browser to accept or reject by default all cookies or to receive an on-screen warning of the receipt of each cookie and decide at that time whether to implement or not on its Hard Drive.</p>
    <p>Here are the links regarding the devices and browsers manufacturers for the management or deactivation of cookies in your browser:</p>
    <ul>
      <li><a href="https://support.microsoft.com/en-us/kb/260971">Internet Explorer</a></li>
      <li><a href="https://support.google.com/chrome/answer/95647">Google Chrome</a></li>
      <li><a href="https://support.apple.com/en-us/HT201265">Safari (Mobile)</a></li>
      <li><a href="https://support.apple.com/kb/ph21411?locale=en_US">Safari (Desktop)</a></li>
      <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer">Mozilla Firefox</a></li>
      <li><a href="http://support.google.com/ics/nexus/bin/answer.py?hl=en&amp;answer=2425067">Android Browser</a></li>
      <li><a href="https://www.opera.com/help/tutorials/security/privacy/">Opera (Mobile)</a></li>
      <li><a href="http://www.opera.com/help">Opera (Desktop)</a></li>
    </ul>
    <p>If you want to have greater control over the installation of cookies, you can install programs or add-ons to your browser, known as &#8220;Do Not Track&#8221; tools, which permits you to choose the cookies that you want to allow.</p>
    <p>The fact that the User configures its browser to reject all cookies or expressly our cookies may suppose that it is not possible to access some of the services and that their experience in our website may be less satisfactory.</p>

    <p><strong>Updated in March 2022</strong></p>
  </WebsiteLayout>)
}
