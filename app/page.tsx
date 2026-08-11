import EstimateBuilder from "../components/EstimateBuilder";
import { site } from "../config/site";

function TreeMark() {
  return (
    <svg className="tree-mark" viewBox="0 0 84 84" aria-hidden="true">
      <path d="M42 76V35M42 43L25 27M42 51l18-20M42 58L20 45M42 63l23-14" />
      <path d="M42 8c-14 0-27 10-30 24-3 13 4 26 16 32M42 8c14 0 27 10 30 24 3 13-4 26-16 32" />
    </svg>
  );
}

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.businessName,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "301 South Gulf Freeway",
      addressLocality: site.city,
      addressRegion: site.state,
      postalCode: "77573",
      addressCountry: "US"
    },
    areaServed: site.city,
    description: "Tree service, landscape design, and paver work based in League City, Texas."
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {site.previewMode && <div className="preview-bar">PRIVATE CONCEPT PREVIEW · PROPOSED ROJO WEBSITE</div>}

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Rojo home">
          <TreeMark />
          <span><strong>ROJO</strong><small>TREE SERVICE · LANDSCAPING DESIGN</small></span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#transformations">Transformations</a>
          <a href="#process">Process</a>
        </nav>
        <a className="header-cta" href="#estimate">Request an estimate <Arrow /></a>
      </header>

      <section className="hero" id="top">
        <div className="topo topo-one" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">League City, Texas · Tree + Landscape</p>
          <h1>Your property<br /><em>has more</em><br />potential.</h1>
          <p className="hero-lede">Tree care, landscape design, and hardscape work for outdoor spaces that need more than maintenance — they need a point of view.</p>
          <div className="hero-actions">
            <a className="button clay" href="#estimate">Request an estimate <Arrow /></a>
            <a className="text-link" href={`tel:${site.tel}`}>Call {site.phone}</a>
          </div>
        </div>

        <div className="hero-art" aria-label="Conceptual tree and landscape artwork">
          <div className="sun" />
          <div className="canopy canopy-a" />
          <div className="canopy canopy-b" />
          <div className="canopy canopy-c" />
          <div className="trunk trunk-a" />
          <div className="trunk trunk-b" />
          <div className="horizon horizon-a" />
          <div className="horizon horizon-b" />
          <div className="hero-label"><span>ROOTED</span><strong>TRANSFORMATIONS</strong><small>Concept art · replace with Rojo project photography</small></div>
        </div>

        <div className="hero-side-note"><span>01</span><p>Tree care<br />Landscape design<br />Paver work</p></div>
      </section>

      <section className="proof-strip" aria-label="Business highlights">
        {site.proofPoints.map((point, index) => <div key={point}><span>0{index + 1}</span>{point}</div>)}
      </section>

      <section className="statement-section" id="transformations">
        <div>
          <p className="eyebrow">The Rojo idea</p>
          <h2>The difference<br />should be <em>easy to see.</em></h2>
        </div>
        <p className="statement-copy">The strongest outdoor work changes the way a whole property reads — the canopy, the lines, the light, the approach, the first impression.</p>
      </section>

      <section className="transform-grid">
        <article className="transform-card before-card">
          <div className="transform-art tangled" aria-hidden="true"><i /><i /><i /><i /><i /></div>
          <div className="transform-meta"><span>BEFORE</span><strong>Overgrown. Heavy. Undefined.</strong></div>
        </article>
        <div className="transform-arrow" aria-hidden="true">→</div>
        <article className="transform-card after-card">
          <div className="transform-art refined" aria-hidden="true"><i /><i /><i /><i /></div>
          <div className="transform-meta"><span>AFTER</span><strong>Opened up. Intentional. Finished.</strong></div>
        </article>
      </section>

      <section className="services" id="services">
        <div className="section-heading">
          <p className="eyebrow">What Rojo works on</p>
          <h2>From canopy<br />to curb.</h2>
        </div>
        <div className="service-list">
          {site.services.map((service) => (
            <article className="service-row" key={service.id}>
              <span className="service-number">{service.number}</span>
              <div>
                <p className="service-kicker">{service.kicker}</p>
                <h3>{service.title}</h3>
              </div>
              <p>{service.description}</p>
              <a href="#estimate" aria-label={`Request an estimate for ${service.title}`}><Arrow /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="roots-section">
        <div className="rings" aria-hidden="true"><span /><span /><span /><span /><span /></div>
        <div className="roots-copy">
          <p className="eyebrow light-eyebrow">A property, rethought</p>
          <h2>Start at the root.<br /><em>Finish with the view.</em></h2>
          <div className="root-steps">
            <div><b>01</b><strong>Assess</strong><p>What is actually changing the way the property looks or functions?</p></div>
            <div><b>02</b><strong>Plan</strong><p>Choose the work that creates the biggest visual and practical difference.</p></div>
            <div><b>03</b><strong>Transform</strong><p>Turn the problem area into a cleaner, more intentional outdoor space.</p></div>
          </div>
        </div>
      </section>

      <section className="needs-section">
        <div className="section-heading compact">
          <p className="eyebrow">Start with the problem</p>
          <h2>What needs<br /><em>to change?</em></h2>
        </div>
        <div className="needs-grid">
          {site.problems.map((problem, index) => (
            <a key={problem} href="#estimate"><span>{String(index + 1).padStart(2, "0")}</span>{problem}<Arrow /></a>
          ))}
        </div>
      </section>

      <section className="gallery-section">
        <div className="gallery-head">
          <p className="eyebrow">Future project gallery</p>
          <h2>Work that<br /><em>speaks for itself.</em></h2>
          <p>Real Rojo job photography belongs here. The layout is ready for tree transformations, landscape redesigns, paver details, and finished-property wide shots.</p>
        </div>
        <div className="gallery-grid">
          <div className="project-placeholder tall"><span>01</span><strong>TREE TRANSFORMATION</strong><small>ROJO PHOTO SLOT</small></div>
          <div className="project-placeholder clay-block"><span>02</span><strong>LANDSCAPE DESIGN</strong><small>ROJO PHOTO SLOT</small></div>
          <div className="project-placeholder line-block"><span>03</span><strong>HARDSCAPE DETAIL</strong><small>ROJO PHOTO SLOT</small></div>
          <div className="project-placeholder wide"><span>04</span><strong>FINISHED PROPERTY</strong><small>ROJO PHOTO SLOT</small></div>
        </div>
      </section>

      <section className="process-section" id="process">
        <p className="eyebrow">Simple first step</p>
        <h2>Show Rojo<br />what you want <em>changed.</em></h2>
        <div className="process-line">
          <div><b>01</b><strong>Describe the property</strong></div>
          <div><b>02</b><strong>Explain the change</strong></div>
          <div><b>03</b><strong>Call & review the project</strong></div>
        </div>
      </section>

      <section className="estimate-section" id="estimate">
        <div className="estimate-intro">
          <p className="eyebrow light-eyebrow">Your property, next</p>
          <h2>Let’s take a look<br /><em>at what could change.</em></h2>
          <p>Prepare a quick project brief, then call Rojo. Photos can be shared directly with the business once you connect.</p>
          <div className="contact-stamp"><TreeMark /><span>ROJO<strong>{site.phone}</strong><small>{site.city}, {site.state}</small></span></div>
        </div>
        <EstimateBuilder />
      </section>

      <section className="final-cta">
        <div className="final-rings" aria-hidden="true" />
        <p className="eyebrow">Rojo Tree Service & Landscaping Design</p>
        <h2>Ready to change<br />what you see <em>outside?</em></h2>
        <a className="button clay" href={`tel:${site.tel}`}>Call Rojo <Arrow /></a>
      </section>

      <footer>
        <div className="footer-brand"><TreeMark /><strong>ROJO</strong></div>
        <div><span>League City, Texas</span><a href={`tel:${site.tel}`}>{site.phone}</a></div>
        <div><span>Published listing</span><p>{site.address}</p></div>
        <small>Private concept preview. Final details and project photography require owner confirmation.</small>
      </footer>

      <div className="mobile-bar">
        <a href={`tel:${site.tel}`}>Call</a>
        <a href="#estimate">Request estimate</a>
      </div>
    </main>
  );
}
