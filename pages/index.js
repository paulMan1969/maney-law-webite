export default function Home() {
  const practiceAreas = [
    { title: "Divorce", description: "Strategic, efficient representation in contested and uncontested divorce matters." },
    { title: "Child Custody", description: "Guidance through custody, parenting plans, and decision-making issues with a focus on stability and clarity." },
    { title: "Child Support", description: "Accurate financial analysis and advocacy in establishing and modifying child support." },
    { title: "Alimony", description: "Thoughtful counsel on spousal support, both in establishing and defending claims." },
    { title: "Property Division", description: "Careful handling of asset division, including complex and high-value estates." },
    { title: "Modifications & Enforcement", description: "Representation in post-judgment modifications and enforcement actions when circumstances change." },
  ];

  const scheduleUrl = "https://calendly.com/paul-m-placeholder";

  return (
    <div style={{ fontFamily: 'Georgia, ui-serif, serif', background: '#f8f7f4', color: '#0f172a', minHeight: '100vh' }}>
      <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(248,247,244,0.96)', borderBottom: '1px solid rgba(30,46,82,0.10)', backdropFilter: 'blur(8px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <img src="/logo.png" alt="Maney Law LLC logo" style={{ height: 74, width: 'auto', display: 'block' }} />
          </div>
          <nav style={{ display: 'flex', gap: 24, fontSize: 14, color: '#334155', flexWrap: 'wrap' }}>
            <a href="#about" style={{ color: 'inherit', textDecoration: 'none' }}>About</a>
            <a href="#practice" style={{ color: 'inherit', textDecoration: 'none' }}>Practice Areas</a>
            <a href="#attorney" style={{ color: 'inherit', textDecoration: 'none' }}>Attorney</a>
            <a href="#contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</a>
          </nav>
          <a href={scheduleUrl} target="_blank" rel="noreferrer" style={{ background: '#1e2e52', color: '#fff', textDecoration: 'none', padding: '12px 16px', borderRadius: 16, fontSize: 14, fontWeight: 600 }}>
            Schedule Zoom Consultation
          </a>
        </div>
      </header>

      <main>
        <section style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 24px', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 48, alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-block', border: '1px solid rgba(199,162,74,0.4)', background: '#fff', padding: '8px 14px', borderRadius: 999, fontSize: 12, color: '#475569', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                Efficiently Delivering Quality Legal Service
              </div>
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.1rem)', lineHeight: 1.08, color: '#1e2e52', margin: '20px 0 0', letterSpacing: '-0.02em' }}>
  Experienced family law representation for clients throughout Alaska.
              </h1>
              <p style={{ fontSize: 20, lineHeight: 1.8, color: '#475569', maxWidth: 720, marginTop: 24 }}>
                Led by attorney Paul S. Maney, Maney Law LLC brings more than two decades of family law experience to clients seeking practical, efficient, and discreet representation.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: '#64748b', maxWidth: 720, marginTop: 14 }}>
                Based in Homer and serving clients throughout Alaska, the firm offers consultations by Zoom and phone for a streamlined, professional client experience.
              </p>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 28 }}>
                <a href="#contact" style={{ background: '#1e2e52', color: '#fff', textDecoration: 'none', padding: '14px 20px', borderRadius: 16, fontWeight: 600 }}>Request Consultation</a>
                <a href="tel:9076300009" style={{ border: '1px solid #cbd5e1', color: '#0f172a', textDecoration: 'none', padding: '14px 20px', borderRadius: 16, fontWeight: 600, background: '#fff' }}>Call 907.630.0009</a>
              </div>
            </div>
            <div>
              <img src="/paul-main.jpg" alt="Paul Maney" style={{ width: '100%', maxWidth: 520, borderRadius: 28, boxShadow: '0 24px 60px rgba(15,23,42,0.18)', objectFit: 'cover' }} />
            </div>
          </div>
        </section>

        <section id="about" style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
            <div>
              <div style={{ fontSize: 12, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#7a6222', fontWeight: 700 }}>About the Firm</div>
              <h2 style={{ fontSize: 42, lineHeight: 1.12, color: '#1e2e52', marginTop: 14 }}>Refined service, efficient process, and personal attention.</h2>
            </div>
            <div style={{ color: '#475569', fontSize: 18, lineHeight: 1.9 }}>
              <p>Maney Law LLC is a remote family law practice based in the Homer area and serving clients throughout Alaska.</p>
              <p>The firm is designed for clients who value experienced counsel, responsive communication, and a professional process that respects both the emotional and financial weight of family law matters.</p>
              <p>Meetings are conducted by Zoom and phone, making high-quality legal guidance easier to access wherever you are in Alaska.</p>
            </div>
          </div>
        </section>

        <section id="practice" style={{ background: '#ffffff', padding: '72px 24px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ maxWidth: 760 }}>
              <div style={{ fontSize: 12, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#7a6222', fontWeight: 700 }}>Practice Areas</div>
              <h2 style={{ fontSize: 42, lineHeight: 1.12, color: '#1e2e52', marginTop: 14 }}>Focused family law representation.</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 24, marginTop: 36 }}>
              {practiceAreas.map((area) => (
                <div key={area.title} style={{ border: '1px solid #e2e8f0', borderRadius: 28, padding: 28, boxShadow: '0 8px 24px rgba(15,23,42,0.05)', background: '#f8f7f4' }}>
                  <h3 style={{ fontSize: 24, color: '#1e2e52', margin: 0 }}>{area.title}</h3>
                  <p style={{ marginTop: 14, color: '#475569', lineHeight: 1.8, fontSize: 15 }}>{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

<section id="attorney" style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 24px' }}>
  <div style={{ 
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: 30,
    padding: '40px 36px',
    boxShadow: '0 16px 40px rgba(15,23,42,0.06)'
  }}>
    <div style={{ fontSize: 12, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#7a6222', fontWeight: 700 }}>
      Attorney Bio
    </div>
    <h2 style={{ fontSize: 42, lineHeight: 1.12, color: '#1e2e52', marginTop: 14, marginBottom: 28 }}>
      Paul Maney
    </h2>

    <div style={{ overflow: 'hidden' }}>
      <img
        src="/paul-main.jpg"
        alt="Paul Maney portrait"
        style={{
          width: '100%',
          maxWidth: 340,
          float: 'right',
          marginLeft: 32,
          marginBottom: 24,
          borderRadius: 28,
          boxShadow: '0 20px 50px rgba(15,23,42,0.14)',
          objectFit: 'cover'
        }}
      />

      <div
        style={{
          color: '#475569',
          fontSize: 17,
          lineHeight: 1.95,
          columnCount: 2,
          columnGap: 36
        }}
      >
        <p style={{ marginTop: 0 }}>
          If you are facing a divorce, custody dispute, or financial battle, experience matters, and so does having an attorney who knows how to win in court.
        </p>

        <p>
          Paul S. Maney brings more than 20 years of focused family law experience to Alaska. Admitted to the Florida Bar in 2003 and the Alaska Bar in 2026, Paul has built his career handling complex, high-stakes family law cases, including divorce, child custody, relocation, support, and significant financial disputes. He has extensive trial experience and is known for thorough preparation, strategic thinking, and strong courtroom advocacy.
        </p>

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
          Paul also brings a unique perspective to military family law. As a former Officer in the United States Marine Corps, where he served as a Captain and received the Navy Commendation Medal, he understands the realities of military life. His years practicing near MacDill Air Force Base in Tampa strengthened his experience handling military divorces, custody issues, and relocation matters.
        </p>

        <p>
          Beyond his practice, Paul has a long-standing commitment to service. He has been actively involved with the Hillsborough County Family Law Executive Council for many years and currently serves as Co-Chair of the Awards Committee. Pro bono work has always been a priority. He regularly volunteers at legal advice clinics and is a sustaining member of Bay Area Legal Services.
        </p>

        <p>
          Paul is committed to helping individuals and families in Alaska navigate difficult transitions with clarity, strength, and experienced guidance. When the stakes are high, you want an attorney who has been there before and knows how to move your case forward.
        </p>

        <p>
          Born and raised in Tampa, Florida, Paul attended Berkeley Preparatory School and is a Troop 4 Eagle Scout. He earned his undergraduate degree from Boston University and his Juris Doctor from the University of Montana School of Law.
        </p>

        <p>
          Before entering the legal profession, Paul served as an Officer in the United States Marine Corps from 1992 to 1995, holding leadership roles as a Platoon Commander, Executive Officer, and Commanding Officer for Company E, 3d Assault Amphibian Battalion, 1st Marine Division.
        </p>

        <p>
          He also served as Operations Director of Brownstone Gallery, Ltd. in New York, where he managed the manufacture, importation, and distribution of high-end table linens for major national retailers.
        </p>
      </div>
    </div>
  </div>
</section>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" style={{ background: '#1e2e52', color: '#fff', padding: '72px 24px' }}>
          <div style={{ maxWidth: 1120, margin: '0 auto', display: 'grid', gridTemplateColumns: '0.92fr 1.08fr', gap: 32, alignItems: 'start' }}>
            <div>
              <div style={{ fontSize: 12, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#d9bb67', fontWeight: 700 }}>Contact</div>
              <h2 style={{ fontSize: 42, lineHeight: 1.12, marginTop: 14 }}>Start with a call or consultation request.</h2>
              <p style={{ marginTop: 18, color: '#d7deea', fontSize: 17, lineHeight: 1.8 }}>Reach out to discuss your family law matter. Meetings are available by Zoom and phone.</p>
              <div style={{ marginTop: 28, display: 'grid', gap: 14, fontSize: 16 }}>
                <div><strong>Phone:</strong> <a href="tel:9076300009" style={{ color: '#fff' }}>907.630.0009</a></div>
                <div><strong>Email:</strong> <a href="mailto:paul@maneylawllc.com" style={{ color: '#fff' }}>paul@maneylawllc.com</a></div>
                <div><strong>Instagram:</strong> <a href="https://instagram.com/maney_law_llc" style={{ color: '#fff' }} target="_blank" rel="noreferrer">@maney_law_llc</a></div>
                <div><strong>Service Area:</strong> Alaska, with a home base in Homer</div>
              </div>
            </div>
            <div style={{ background: '#ffffff', color: '#0f172a', borderRadius: 30, padding: 30, boxShadow: '0 16px 36px rgba(0,0,0,0.18)' }}>
              <h3 style={{ fontSize: 28, color: '#1e2e52', marginTop: 0 }}>Request a Consultation</h3>
              <p style={{ color: '#64748b', lineHeight: 1.8, marginTop: 10 }}>Replace the form action below with your Formspree endpoint to have submissions sent to your email.</p>
              <form action="https://formspree.io/f/your-form-id" method="POST" style={{ display: 'grid', gap: 14, marginTop: 22 }}>
                <input type="text" name="name" placeholder="Full Name" required style={{ padding: '14px 16px', borderRadius: 16, border: '1px solid #cbd5e1', fontSize: 15 }} />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <input type="tel" name="phone" placeholder="Phone" style={{ padding: '14px 16px', borderRadius: 16, border: '1px solid #cbd5e1', fontSize: 15 }} />
                  <input type="email" name="email" placeholder="Email" required style={{ padding: '14px 16px', borderRadius: 16, border: '1px solid #cbd5e1', fontSize: 15 }} />
                </div>
                <textarea name="message" rows="5" placeholder="Briefly describe your family law matter" style={{ padding: '14px 16px', borderRadius: 16, border: '1px solid #cbd5e1', fontSize: 15 }} />
                <button type="submit" style={{ background: '#1e2e52', color: '#fff', border: 'none', padding: '14px 16px', borderRadius: 16, fontSize: 15, fontWeight: 600, cursor: 'pointer' }}>Submit Consultation Request</button>
              </form>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 16 }}>
                <a href={scheduleUrl} target="_blank" rel="noreferrer" style={{ color: '#1e2e52', fontWeight: 600 }}>Schedule a Zoom consultation</a>
              </div>
              <p style={{ fontSize: 12, color: '#64748b', marginTop: 16 }}>Submitting this form does not create an attorney-client relationship.</p>
            </div>
          </div>
        </section>
      </main>

      <footer style={{ textAlign: 'center', padding: '24px', color: '#64748b', fontSize: 14, background: '#ffffff' }}>
        © 2026 Maney Law LLC — Serving clients throughout Alaska
      </footer>
    </div>
  );
}
