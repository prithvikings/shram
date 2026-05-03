import React from 'react';
import { Navbar } from '../components/Navbar'; // Adjust path if needed

const footerLinks = {
  Product: ['API', 'Plugins', 'Pricing', 'Changelog'],
  Resources: ['Documentation', 'Blog', 'Benchmarks'],
  Company: ['About', 'Careers', 'Privacy', 'Terms'],
};

const Privacy = () => {
  // Sidebar navigation items
  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'information-collection', label: 'Information Collection' },
    { id: 'user-data', label: 'User Data' },
    { id: 'connected-services', label: 'Connected Services' },
    { id: 'technical-information', label: 'Technical Information' },
    { id: 'use-of-information', label: 'Use of Information' },
    { id: 'data-processing', label: 'Data Processing' },
    { id: 'data-security', label: 'Data Security' },
    { id: 'information-disclosure', label: 'Information Disclosure' },
    { id: 'data-retention', label: 'Data Retention' },
    { id: 'user-rights', label: 'User Rights' },
    { id: 'international-transfers', label: 'International Transfers' },
    { id: 'policy-updates', label: 'Policy Updates' },
    { id: 'legal-compliance', label: 'Legal Compliance' },
    { id: 'contact-information', label: 'Contact Information' },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans">
      <Navbar />

      <main className="max-w-6xl mx-auto border-x border-zinc-300 bg-white">
        
        {/* --- Hero Section --- */}
        <section className="py-24 px-6 text-center border-b border-zinc-200">
          {/* Updated Hero Title to be font-semibold */}
          <h1 className="text-4xl md:text-5xl font-heading font-semibold tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-zinc-500 font-medium">Effective Date: June 4, 2025</p>
        </section>

        {/* --- Main Content Area --- */}
        <div className="flex flex-col md:flex-row">
          
          {/* Sidebar Navigation */}
          <aside className="w-full md:w-64 shrink-0 border-r border-zinc-200 p-8 hidden md:block">
            <div className="sticky top-8">
              <div className="text-xs font-dmmono tracking-widest text-zinc-400 font-bold mb-6 uppercase">
                Contents
              </div>
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a 
                      href={`#${item.id}`}
                      className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Policy Text */}
          {/* Updated prose classes: prose-headings:font-semibold and prose-h2:text-2xl automatically style the titles */}
          <article className="flex-1 p-8 md:p-12 max-w-3xl prose prose-zinc prose-headings:font-heading prose-headings:font-semibold prose-h2:text-2xl prose-h2:border-b prose-h2:border-zinc-200 prose-h2:pb-4 prose-h2:mb-6 prose-h2:mt-12 first:prose-h2:mt-0 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-zinc-600 prose-p:leading-relaxed prose-li:text-zinc-600">
            
            <h2 id="overview">Overview</h2>
            <p>
              This Privacy Policy describes how Shram.ai ("Company," "we," "us," or "our") collects, uses, and protects information in connection with our cloud services ("Services"). This policy applies to all users of our Services.
            </p>

            <h2 id="information-collection">Information Collection & Account Information</h2>
            <p>We collect and maintain the following account-related information:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Full name</li>
              <li>Email address</li>
              <li>Organization name</li>
            </ul>

            <h2 id="user-data">User Data</h2>
            <p>We store and process user data that is uploaded to or created within our Services, including but not limited to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Documents, files, and content uploaded by users</li>
              <li>Data synchronized from connected third-party services</li>
              <li>User-generated content and configurations</li>
            </ul>

            <h2 id="connected-services">Connected Services Data</h2>
            <p>With explicit user consent, we may access and store data from third-party services that users choose to connect, including:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Google Drive</li>
              <li>Notion</li>
              <li>Other productivity and storage services as authorized by the user</li>
            </ul>

            <h2 id="technical-information">Technical Information</h2>
            <p>We collect technical data necessary for service operation and security, including:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Authentication logs</li>
              <li>Service access records</li>
              <li>System performance metrics</li>
              <li>API usage logs for connected services</li>
            </ul>

            <h2 id="use-of-information">Use of Information</h2>
            <p>The information we collect is used for:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Account creation and management</li>
              <li>Service authentication and access control</li>
              <li>Data storage, processing, and retrieval as requested by users</li>
              <li>Integration with third-party services as authorized by users</li>
              <li>Essential service communications</li>
              <li>System security and operational maintenance</li>
              <li>Service improvement and feature development</li>
              <li>Compliance with legal obligations</li>
            </ul>

            <h2 id="data-processing">Data Processing</h2>
            <h3>User Content and Data</h3>
            <p>We store and process user data as part of our core service functionality. This includes data uploaded directly by users and data accessed from connected third-party services with proper authorization.</p>
            
            <h3>Third-Party Service Integration</h3>
            <p>Users may authorize connections to external services such as Google Drive, Notion, and other productivity platforms. Such integrations require:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Explicit user consent for each service connection</li>
              <li>Developer authorization where applicable</li>
              <li>Adherence to the connected service's terms and data handling requirements</li>
            </ul>
            <p>Data accessed through these integrations is processed in accordance with user instructions and this Privacy Policy.</p>

            <h3>Third-Party AI Processing</h3>
            <p>When users elect to utilize artificial intelligence features, content may be processed by third-party AI service providers, including OpenAI and Google Gemini. Such processing occurs solely at user direction and for the purpose of delivering requested functionality.</p>

            <h2 id="data-security">Data Security</h2>
            <h3>Encryption</h3>
            <p>All data transmissions are protected using industry-standard encryption protocols during transit between user systems and our infrastructure.</p>

            <h3>Infrastructure Partners</h3>
            <p>We utilize trusted third-party service providers for infrastructure operations:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Timescale for database services</li>
              <li>Cloudflare for content delivery and security services</li>
            </ul>
            <p>These providers are contractually bound to maintain appropriate security standards and data protection measures.</p>

            <h2 id="information-disclosure">Information Disclosure</h2>
            <p>We do not sell, rent, or otherwise commercially distribute personal information. Information may be disclosed only in the following circumstances:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>To infrastructure service providers as necessary for service operation</li>
              <li>To third-party AI services when users elect to use AI features</li>
              <li>To connected third-party services as explicitly authorized by users (Google Drive, Notion, etc.)</li>
              <li>When required by applicable law or legal process</li>
              <li>To protect the rights, property, or safety of the Company or others</li>
              <li>In connection with a corporate transaction such as merger or acquisition</li>
            </ul>
            <p>All third-party integrations and data sharing occur only with explicit user consent and authorization.</p>

            <h2 id="data-retention">Data Retention and Deletion</h2>
            <p>Account information and user data are retained for the duration of the service relationship or as necessary to provide requested services. Users maintain control over their data and may delete content through service interfaces.</p>
            <p>Data from connected third-party services is retained according to user preferences and service requirements. Users may disconnect third-party services at any time, which may affect data synchronization but will not immediately delete previously synchronized data unless explicitly requested.</p>
            <p>Users may request complete account and data deletion at any time, subject to legal retention requirements and technical processing timeframes.</p>

            <h2 id="user-rights">User Rights</h2>
            <p>Subject to applicable law, users may:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Request access to their account information and stored data</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of their account and associated data</li>
              <li>Manage connected third-party service integrations</li>
              <li>Revoke authorization for third-party service connections</li>
              <li>Object to certain processing activities</li>
              <li>Request data portability where technically feasible</li>
            </ul>
            <p>Requests should be submitted through our designated contact channels.</p>

            <h2 id="international-transfers">International Transfers</h2>
            <p>Information may be transferred to and processed in jurisdictions other than the user's country of residence. We implement appropriate safeguards to ensure adequate protection during such transfers.</p>

            <h2 id="policy-updates">Policy Updates</h2>
            <p>This Privacy Policy may be updated periodically. Material changes will be communicated through appropriate channels, including email notification to account holders or prominent notice within our Services.</p>

            <h2 id="legal-compliance">Legal Compliance</h2>
            <p>This policy is designed to comply with applicable privacy and data protection laws, including the General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA).</p>

            <h2 id="contact-information">Contact Information</h2>
            <p>For privacy-related inquiries or to exercise your rights under this policy, contact us at:</p>
            <p>
              <strong>Email:</strong> privacy@shram.ai<br />
              <span className="text-zinc-500">Last Updated: June 4, 2025</span>
            </p>

          </article>
        </div>

        {/* --- Footer --- */}
        <footer className="pt-16 pb-8 px-8 border-t border-zinc-300 bg-zinc-50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-xs font-dmmono tracking-widest text-zinc-900 font-bold mb-4 uppercase">{title}</h4>
                <ul className="space-y-3">
                  {links.map(link => (
                    <li key={link}>
                      <a href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            {/* Social Icons Col */}
            <div>
              <h4 className="text-xs font-dmmono tracking-widest text-zinc-900 font-bold mb-4 uppercase">CONNECT</h4>
              <div className="flex items-center gap-4 text-zinc-400">
                <div className="hover:text-zinc-900 cursor-pointer transition-colors">𝕏</div>
                <div className="hover:text-zinc-900 cursor-pointer transition-colors">GH</div>
                <div className="hover:text-zinc-900 cursor-pointer transition-colors">IN</div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-xl font-heading font-medium">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 22 22 22"></polygon></svg>
              Shram.ai
            </div>
            <div className="text-xs text-zinc-500">
              © 2026 Shram.ai Inc. All rights reserved.
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
};

export default Privacy;