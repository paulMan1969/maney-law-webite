export default function Home() {
  const practiceAreas = [
    {
      title: "Divorce",
      description:
        "Strategic, efficient representation in contested and uncontested divorce matters.",
    },
    {
      title: "Child Custody",
      description:
        "Guidance through custody, parenting plans, and decision-making issues with a focus on stability and clarity.",
    },
    {
      title: "Child Support",
      description:
        "Accurate financial analysis and advocacy in establishing and modifying child support.",
    },
    {
      title: "Alimony",
      description:
        "Thoughtful counsel on spousal support, both in establishing and defending claims.",
    },
    {
      title: "Property Division",
      description:
        "Careful handling of asset division, including complex and high-value estates.",
    },
    {
      title: "Modifications & Enforcement",
      description:
        "Representation in post-judgment modifications and enforcement actions when circumstances change.",
    },
  ];

  const scheduleUrl = "https://calendly.com/paul-m-placeholder";

  return (
    <>
      <div className="page-shell">
        <header className="site-header">
          <div className="container header-inner">
            <a href="#top" className="brand" aria-label="Maney Law LLC home">
              <img src="/logo.png" alt="Maney Law LLC" className="brand-logo" />
            </a>

            <nav className="site-nav" aria-label="Primary navigation">
              <a href="#about">About</a>
              <a href="#practice">Practice Areas</a>
              <a href="#attorney">Attorney</a>
              <a href="#contact">Contact</a>
            </nav>

            <a href="#contact" className="header-cta">
              Schedule Consultation
            </a>
          </div>
        </header>

        <main id="top">
          <section className="hero-section">
            <div className="hero-glow hero-glow-left" />
            <div className="hero-glow hero-glow-right" />

            <div className="container hero-grid">
              <div className="hero-copy">
                <div className="eyebrow">Efficiently Delivering Quality Legal Service</div>

                <h1>
                  Discreet, high-end family law representation for clients throughout Alaska.
                </h1>

                <p className="lead">
                  Led by attorney Paul S. Maney, Maney Law LLC brings more than two decades of family law experience to clients seeking practical, efficient, and discreet representation.
                </p>

                <p className="sublead">
                  Based in Homer and admitted to the Alaska Bar in 2026, the firm serves clients throughout Alaska with consultations available by Zoom and phone.
                </p>

                <div className="hero-actions">
                  <a href="#contact" className="button button-primary">
                    Request Consultation
                  </a>
                  <a href="tel:9076300009" className="button button-secondary">
                    Call 907.630.0009
                  </a>
                </div>
              </div>

              <div className="hero-image-wrap">
                <img src="/paul-main.jpg" alt="Paul Maney" className="hero-image" />
              </div>
            </div>
          </section>

          <section id="about" className="section section-light">
            <div className="container split-section">
              <div>
                <div className="section-label">About the Firm</div>
                <h2>Family law service designed to be both efficient and personal.</h2>
              </div>

              <div className="body-copy">
                <p>
                  Maney Law LLC is a remote family law practice based in the Homer area and serving clients throughout Alaska.
                </p>
                <p>
                  The firm is built for clients who want experienced counsel, responsive communication, and a professional process that respects both the emotional and financial weight of family law matters.
                </p>
                <p>
                  Consultations and meetings are available by Zoom and phone, offering convenient access to legal guidance without sacrificing personal attention.
                </p>
              </div>
            </div>
          </section>

          <section id="practice" className="section section-white">
            <div className="container">
              <div className="section-head">
                <div className="section-label">Practice Areas</div>
                <h2>Focused family law representation.</h2>
                <p>
                  Clear, recognizable services presented in a format that reads well on desktop and mobile.
                </p>
              </div>

              <div className="card-grid">
                {practiceAreas.map((area) => (
                  <article key={area.title} className="info-card">
                    <h3>{area.title}</h3>
                    <p>{area.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="attorney" className="section section-light">
            <div className="container attorney-grid">
              <div className="attorney-photo-wrap">
                <img src="/paul-main.jpg" alt="Paul Maney portrait" className="attorney-photo" />
              </div>

              <div>
                <div className="section-label">Attorney Bio</div>
                <h2>About Paul Maney</h2>

                <div className="body-copy">
                  <p>
                   Paul began his legal career at Maney, Damsker, Jones &amp; Kuhlman, P.A., where he practiced from 2003 through 2014 representing clients in sophisticated family law matters. In 2015, he founded his own firm, Paul S. Maney, P.A., doing business as Maney Family Law, where he has continued to represent clients from all walks of life, including professionals, business owners, and military service members, with a results-driven approach.
                  </p>
                  <p>
                    Now, through Maney Law LLC, Paul is proud to serve clients across the Kenai Peninsula, including Seldovia, Homer, Soldotna, and Kenai. With modern technology such as Zoom and Microsoft Teams, he provides responsive, high-level legal representation without requiring clients to travel, while remaining fully prepared to appear in court when it matters most.
                  </p>
                  <p>
                    Paul’s connection to Alaska runs deep. His family has been traveling here since 2006, forming lasting friendships and becoming part of the community. In 2024, they purchased a home in Seldovia, where they were welcomed with open arms. In 2025, his daughter Parker married into a long-time local family, and she and her husband now work together in the family aviation business, True North Air, LLC. Alaska is not just a place Paul practices, it is like home.
                  </p>
                  <p>
                    Paul also brings a unique perspective to military family law. Having served as Commanding Officer of Company E, 3d Assault Amphibian Battalion, 1st Marine Division, he understands the realities of military life. His years practicing near MacDill Air Force Base in Tampa strengthened his experience handling military divorces, custody issues, and relocation matters.
                  </p>
                  <p>
                    Beyond his practice, Paul has a long-standing commitment to service. He has been actively involved with the Hillsborough County Family Law Executive Council for many years and currently serves as Co-Chair of the Awards Committee. Pro bono work has always been a priority. He regularly volunteers at legal advice clinics and is a sustaining member of Bay Area Legal Services.
                  </p>
                  <p>
                    Paul is committed to helping individuals and families in Alaska navigate difficult transitions with clarity, strength, and experienced guidance. When the stakes are high, you want an attorney who has been there before and knows how to move your case forward.
                  </p>
                  <p>
                    An Eagle Scout, Paul earned his undergraduate degree from Boston University and his Juris Doctor from the University of Montana School of Law.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="section band-section">
            <div className="container centered-copy">
              <div className="section-label label-light">A Better Client Experience</div>
              <h2>Professional guidance with the flexibility of remote access.</h2>
              <p>
                Whether you are in Homer or elsewhere in Alaska, Maney Law LLC offers a streamlined way to get the legal help you need through Zoom and phone consultations.
              </p>
            </div>
          </section>

          <section id="contact" className="section section-light">
            <div className="container contact-grid">
              <div className="contact-copy">
                <div className="section-label">Contact</div>
                <h2>Start with a call or consultation request.</h2>
                <p>
                  Reach out to discuss your family law matter. Meetings are available by Zoom and phone.
                </p>

                <div className="contact-list">
                  <div className="contact-item">
                    <strong>Phone</strong>
                    <a href="tel:9076300009">907.630.0009</a>
                  </div>
                  <div className="contact-item">
                    <strong>Email</strong>
                    <a href="mailto:paul@maneylawllc.com">paul@maneylawllc.com</a>
                  </div>
                  <div className="contact-item">
                    <strong>Instagram</strong>
                    <a href="https://instagram.com/maney_law_llc">@maney_law_llc</a>
                  </div>
                  <div className="contact-item">
                    <strong>Schedule a Zoom Consultation</strong>
                    <a href={scheduleUrl}>Book Online</a>
                  </div>
                </div>
              </div>

              <div className="form-card">
                <h3>Request Consultation</h3>
                <p className="form-note">
                  This form is ready for wiring to email next.
                </p>

               <form
  className="consult-form"
  action="https://formspree.io/f/xabcd123"
  method="POST"
>
  <input type="text" name="name" placeholder="Full Name" required />
  <input type="tel" name="phone" placeholder="Phone" />
  <input type="email" name="email" placeholder="Email" required />

  <textarea
    name="message"
    rows="5"
    placeholder="Tell us about your situation"
    required
  ></textarea>

  <input type="hidden" name="_subject" value="New Consultation Request - Maney Law LLC" />

  <button type="submit" className="button button-primary button-full">
    Submit Consultation Request
  </button>
</form>

                <p className="disclaimer">
                  Submitting this form does not create an attorney-client relationship.
                </p>
              </div>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <div className="container footer-inner">
            <div>© 2026 Maney Law LLC</div>
            <div>Family Law • Homer, Alaska • Remote consultations by Zoom and phone</div>
          </div>
        </footer>
      </div>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: Georgia, 'Times New Roman', serif;
          background: #f8f7f4;
          color: #0f172a;
        }

        img {
          max-width: 100%;
          display: block;
        }

        a {
          color: inherit;
        }

        .page-shell {
          min-height: 100vh;
          background: #f8f7f4;
        }

        .container {
          width: min(1200px, calc(100% - 40px));
          margin: 0 auto;
        }

        .site-header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(248, 247, 244, 0.96);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(30, 46, 82, 0.1);
        }

        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 14px 0;
          flex-wrap: wrap;
        }

        .brand {
          display: inline-flex;
          align-items: center;
          min-width: 0;
        }

        .brand-logo {
          height: 58px;
          width: auto;
        }

        .site-nav {
          display: flex;
          gap: 20px;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          font-family: Arial, sans-serif;
          font-size: 14px;
          color: #334155;
        }

        .site-nav a {
          text-decoration: none;
          white-space: nowrap;
        }

        .header-cta,
        .button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          border-radius: 16px;
          padding: 14px 18px;
          font-family: Arial, sans-serif;
          font-size: 14px;
          font-weight: 700;
          line-height: 1.2;
          transition: transform 0.15s ease, opacity 0.15s ease;
        }

        .header-cta:hover,
        .button:hover {
          opacity: 0.92;
          transform: translateY(-1px);
        }

        .header-cta,
        .button-primary {
          background: #1e2e52;
          color: #ffffff;
          border: 1px solid #1e2e52;
        }

        .button-secondary {
          background: rgba(255, 255, 255, 0.9);
          color: #0f172a;
          border: 1px solid #cbd5e1;
        }

        .button-full {
          width: 100%;
          cursor: pointer;
        }

        .hero-section {
          position: relative;
          overflow: hidden;
          padding: 64px 0 72px;
        }

        .hero-glow {
          position: absolute;
          inset: auto;
          width: 38rem;
          height: 38rem;
          border-radius: 999px;
          filter: blur(70px);
          opacity: 0.35;
          pointer-events: none;
        }

        .hero-glow-left {
          top: -12rem;
          left: -10rem;
          background: rgba(199, 162, 74, 0.35);
        }

        .hero-glow-right {
          bottom: -14rem;
          right: -10rem;
          background: rgba(30, 46, 82, 0.22);
        }

        .hero-grid,
        .attorney-grid,
        .contact-grid,
        .split-section {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 40px;
          align-items: center;
        }

        .hero-copy h1,
        .section h2,
        .band-section h2 {
          margin: 0;
          color: #1e2e52;
          letter-spacing: -0.03em;
          line-height: 1.06;
        }

        .hero-copy h1 {
          font-size: clamp(2.45rem, 5vw, 4.75rem);
          max-width: 12ch;
        }

        .lead {
          margin-top: 22px;
          font-size: clamp(1.05rem, 2vw, 1.22rem);
          line-height: 1.85;
          color: #475569;
          max-width: 42rem;
        }

        .sublead {
          margin-top: 10px;
          font-size: 1rem;
          line-height: 1.85;
          color: #64748b;
          max-width: 42rem;
        }

        .eyebrow,
        .section-label {
          display: inline-block;
          font-family: Arial, sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          font-size: 12px;
          font-weight: 700;
        }

        .eyebrow {
          margin-bottom: 18px;
          padding: 9px 14px;
          border-radius: 999px;
          background: #ffffff;
          border: 1px solid rgba(199, 162, 74, 0.4);
          color: #64748b;
          box-shadow: 0 8px 20px rgba(15, 23, 42, 0.05);
        }

        .section-label {
          color: #8a6b19;
          margin-bottom: 14px;
        }

        .label-light {
          color: #d9bb67;
        }

        .hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 28px;
        }

        .hero-image-wrap,
        .attorney-photo-wrap {
          display: flex;
          justify-content: center;
        }

        .hero-image,
        .attorney-photo {
          width: 100%;
          max-width: 500px;
          border-radius: 30px;
          object-fit: cover;
          box-shadow: 0 22px 50px rgba(15, 23, 42, 0.18);
        }

        .section {
          padding: 78px 0;
        }

        .section-light {
          background: #f8f7f4;
        }

        .section-white {
          background: #ffffff;
        }

        .section-head {
          max-width: 52rem;
          margin-bottom: 28px;
        }

        .section-head p,
        .body-copy p,
        .centered-copy p,
        .contact-copy p,
        .form-note,
        .disclaimer,
        .info-card p {
          color: #475569;
          line-height: 1.85;
          font-size: 16px;
        }

        .body-copy p,
        .contact-copy p {
          margin: 0 0 16px;
        }

        .card-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .info-card {
          border-radius: 26px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          padding: 24px;
          box-shadow: 0 10px 28px rgba(15, 23, 42, 0.06);
        }

        .info-card h3,
        .form-card h3 {
          margin: 0;
          font-size: 24px;
          line-height: 1.2;
          color: #1e2e52;
        }

        .band-section {
          background: #1e2e52;
          color: #ffffff;
          text-align: center;
        }

        .band-section h2,
        .band-section p {
          color: #ffffff;
        }

        .centered-copy {
          max-width: 56rem;
        }

        .contact-grid {
          align-items: start;
        }

        .contact-list {
          display: grid;
          gap: 14px;
          margin-top: 24px;
        }

        .contact-item {
          padding: 16px 18px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          box-shadow: 0 8px 20px rgba(15, 23, 42, 0.05);
        }

        .contact-item strong {
          display: block;
          margin-bottom: 6px;
          color: #1e2e52;
          font-family: Arial, sans-serif;
          font-size: 13px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .contact-item a {
          color: #475569;
          text-decoration: none;
          word-break: break-word;
        }

        .form-card {
          background: #ffffff;
          border-radius: 30px;
          padding: 28px;
          box-shadow: 0 20px 50px rgba(15, 23, 42, 0.12);
          border: 1px solid #e2e8f0;
        }

        .consult-form {
          display: grid;
          gap: 14px;
          margin-top: 18px;
        }

        .consult-form input,
        .consult-form textarea {
          width: 100%;
          border: 1px solid #cbd5e1;
          border-radius: 18px;
          padding: 15px 16px;
          font-size: 16px;
          font-family: Arial, sans-serif;
          color: #0f172a;
          background: #ffffff;
          outline: none;
        }

        .consult-form textarea {
          resize: vertical;
          min-height: 130px;
        }

        .disclaimer {
          margin: 14px 0 0;
          font-size: 13px;
          color: #64748b;
        }

        .site-footer {
          border-top: 1px solid rgba(30, 46, 82, 0.1);
          background: #ffffff;
        }

        .footer-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          padding: 20px 0;
          color: #64748b;
          font-family: Arial, sans-serif;
          font-size: 14px;
          flex-wrap: wrap;
        }

        @media (max-width: 980px) {
          .hero-grid,
          .attorney-grid,
          .contact-grid,
          .split-section,
          .card-grid {
            grid-template-columns: 1fr;
          }

          .hero-copy h1 {
            max-width: none;
          }

          .hero-image,
          .attorney-photo {
            max-width: 420px;
          }
        }

        @media (max-width: 720px) {
          .container {
            width: min(100% - 28px, 1200px);
          }

          .header-inner {
            justify-content: center;
            text-align: center;
            gap: 14px;
          }

          .brand {
            justify-content: center;
            width: 100%;
          }

          .brand-logo {
            height: 48px;
          }

          .site-nav {
            width: 100%;
            gap: 14px 18px;
          }

          .header-cta {
            width: 100%;
          }

          .hero-section {
            padding: 40px 0 56px;
          }

          .section {
            padding: 58px 0;
          }

          .hero-actions {
            flex-direction: column;
          }

          .hero-actions .button {
            width: 100%;
          }

          .hero-image,
          .attorney-photo {
            max-width: 100%;
            border-radius: 24px;
          }

          .form-card {
            padding: 22px;
            border-radius: 24px;
          }

          .info-card {
            padding: 20px;
          }

          .footer-inner {
            justify-content: center;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}
