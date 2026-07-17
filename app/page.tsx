"use client";

import { useEffect, useState } from "react";

const services = [
  { no: "01", title: "Public Relations", copy: "Stories with a pulse. We shape narratives that earn attention, build trust, and stay in the conversation." },
  { no: "02", title: "Talent Representation", copy: "Creator careers, thoughtfully managed—from the right partnerships to the next defining move." },
  { no: "03", title: "Influencer Marketing", copy: "Culture-aware collaborations that feel human, fit the brand, and move real communities." },
  { no: "04", title: "Events & Experiences", copy: "Launches, gatherings, and brand moments designed to be felt in the room and shared beyond it." },
];

const values = ["CULTURE-FIRST", "COLLABORATIVE", "BOLDLY HUMAN", "ALWAYS ADDING VALUE"];

const portfolio = [
  { image: "/media/spice-101.jpg", label: "Creator education", title: "Spice 101", type: "Social content series" },
  { image: "/media/creative-dna.jpg", label: "Brand storytelling", title: "Creative DNA", type: "Digital campaign" },
  { image: "/media/services.jpg", label: "Agency launch", title: "The Clove Mix", type: "Creative direction" },
  { image: "/media/season-trends.jpg", label: "Brand manifesto", title: "We Season Trends", type: "Social campaign" },
  { image: "/media/campaign-chat.jpg", label: "Lead generation", title: "Spice Up Your Campaign", type: "Digital content" },
  { image: "/media/spice-up.jpg", label: "Brand platform", title: "Spice Up", type: "Motion-led social" },
];

function CloveMark({ dark = false }: { dark?: boolean }) {
  return <span className={`clove-mark ${dark ? "dark" : ""}`} aria-hidden="true"><i /><i /><i /><i /></span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [floatOpen, setFloatOpen] = useState(false);

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.14 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 110);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <nav className={`nav ${scrolled ? "scrolled" : ""}`} aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Clove Collective home"><img src="/clove-logo.svg" alt="Clove Collective" /></a>
        <div className="nav-links">
          <a href="#about">About</a><a href="#services">Services</a><a href="#work">Work</a><a href="#talent">Talent</a>
        </div>
        <a className="pill pill-dark" href="#contact">Let&apos;s talk <span>↗</span></a>
        <button className={`menu-toggle ${menuOpen ? "active" : ""}`} type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
        <div
          className={`desktop-float ${floatOpen ? "open" : ""}`}
          onMouseEnter={() => setFloatOpen(true)}
          onMouseLeave={() => setFloatOpen(false)}
          onFocus={() => setFloatOpen(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFloatOpen(false);
          }}
        >
          <div className="float-links">
            <a href="#about">About</a><a href="#services">Services</a><a href="#work">Work</a><a href="#talent">Talent</a><a href="#contact">Contact</a>
          </div>
          <button type="button" aria-label={floatOpen ? "Hide navigation" : "Show navigation"} aria-expanded={floatOpen} onClick={() => setFloatOpen(!floatOpen)}><span /><span /></button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu-inner">
          <a href="#about" onClick={closeMenu}><span>01</span>About</a>
          <a href="#services" onClick={closeMenu}><span>02</span>Services</a>
          <a href="#work" onClick={closeMenu}><span>03</span>Work</a>
          <a href="#talent" onClick={closeMenu}><span>04</span>Talent</a>
          <a href="#contact" onClick={closeMenu}><span>05</span>Contact</a>
          <div className="mobile-social"><a href="https://www.instagram.com/clovecollectiveph/" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://www.threads.com/@clovecollectiveph" target="_blank" rel="noreferrer">Threads ↗</a></div>
        </div>
      </div>

      <section className="hero" id="top">
        <div className="hero-kicker"><span>PR</span><span>Talent</span><span>Culture</span><span>Manila, PH</span></div>
        <h1>Your vision.<br /><em>Spiced up.</em></h1>
        <div className="hero-bottom">
          <p>A revolutionary PR &amp; talent representation agency for brands and people ready to make culture move.</p>
          <a className="round-link" href="#about" aria-label="Discover Clove Collective">↓</a>
        </div>
        <div className="clove-orbit" aria-hidden="true"><img src="/clove-logo.svg" alt="" /><span className="orbit-copy">IDEAS • INFLUENCE • IMPACT • </span></div>
      </section>

      <div className="ticker" aria-label="Clove Collective services">
        <div className="ticker-track">
          <span>PUBLIC RELATIONS ✦ TALENT MANAGEMENT ✦ INFLUENCER MARKETING ✦ EVENTS ✦ PUBLIC RELATIONS ✦ TALENT MANAGEMENT ✦ INFLUENCER MARKETING ✦ EVENTS ✦ PUBLIC RELATIONS ✦ TALENT MANAGEMENT ✦ INFLUENCER MARKETING ✦ EVENTS ✦&nbsp;</span>
          <span aria-hidden="true">PUBLIC RELATIONS ✦ TALENT MANAGEMENT ✦ INFLUENCER MARKETING ✦ EVENTS ✦ PUBLIC RELATIONS ✦ TALENT MANAGEMENT ✦ INFLUENCER MARKETING ✦ EVENTS ✦ PUBLIC RELATIONS ✦ TALENT MANAGEMENT ✦ INFLUENCER MARKETING ✦ EVENTS ✦&nbsp;</span>
        </div>
      </div>

      <section className="intro section reveal" id="about" data-reveal>
        <div className="eyebrow"><span>01</span> What we&apos;re about</div>
        <div className="intro-grid">
          <h2>We turn good ideas into<br /><em>talk-worthy</em> impact.</h2>
          <div className="intro-copy">
            <p>Clove Collective brings the right people, stories, and moments together. We work at the intersection of earned media, influence, and entertainment to make brands more relevant—and talent more remarkable.</p>
            <a className="text-link" href="#services">See how we spice things up <span>↗</span></a>
          </div>
        </div>
        <div className="values">{values.map((value, i) => <div key={value}><span>0{i + 1}</span>{value}</div>)}</div>
      </section>

      <section className="services section reveal" id="services" data-reveal>
        <div className="eyebrow light"><span>02</span> Our mix</div>
        <div className="services-head"><h2>Full flavor.<br /><em>Zero filler.</em></h2><p>From a first spark to a full-scale movement, every discipline works together under one collective.</p></div>
        <div className="service-list">
          {services.map((service) => <article key={service.no}><span className="service-no">{service.no}</span><h3>{service.title}</h3><p>{service.copy}</p><span className="service-arrow">↗</span></article>)}
        </div>
      </section>

      <section className="work section reveal" id="work" data-reveal>
        <div className="work-heading">
          <div className="eyebrow"><span>03</span> Selected work</div>
          <h2>Ideas with<br /><em>real flavor.</em></h2>
          <p>Campaign thinking, creator culture, and brand-building content—fresh from the Clove Collective feed.</p>
        </div>
        <div className="work-grid">
          {portfolio.map((item, index) => (
            <a className="work-card" href="https://www.instagram.com/clovecollectiveph/" target="_blank" rel="noreferrer" key={item.title}>
              <div className="work-image"><img src={item.image} alt={`${item.title} — ${item.type}`} /><span>View on Instagram ↗</span></div>
              <div className="work-meta"><span>0{index + 1} / {item.label}</span><span>{item.type}</span></div>
              <h3>{item.title}</h3>
            </a>
          ))}
        </div>
      </section>

      <section className="talent section reveal" id="talent" data-reveal>
        <div className="talent-visual"><img src="/media/anjhon-sorza.jpg" alt="Anjhon Sorza, featured Clove Collective creator" /><div className="talent-badge">Featured creator <span>↗</span></div></div>
        <div className="talent-copy">
          <div className="eyebrow"><span>04</span> The collective</div>
          <h2>Great talent deserves a team that <em>gets it.</em></h2>
          <p>We represent distinct voices with something real to say. Our job is to protect their value, unlock meaningful opportunities, and build careers with staying power.</p>
          <div className="talent-profile"><span className="talent-index">01</span><div><h3>Anjhon Sorza</h3><p>Digital creator · Lifestyle · Culture</p></div><a href="mailto:hello@clovecollective.ph?subject=Talent inquiry: Anjhon Sorza" aria-label="Inquire about Anjhon Sorza">↗</a></div>
          <div className="talent-profile join"><span className="talent-index">02</span><div><h3>Join the roster</h3><p>Creators with a distinct point of view</p></div><a href="mailto:hello@clovecollective.ph?subject=Join the Clove Collective roster" aria-label="Apply to join the Clove Collective roster">↗</a></div>
        </div>
      </section>

      <section className="contact section reveal" id="contact" data-reveal>
        <div className="contact-top"><div className="eyebrow light"><span>05</span> Make something happen</div><CloveMark /></div>
        <h2>Got a vision?<br /><em>Let&apos;s give it flavor.</em></h2>
        <div className="contact-bottom">
          <p>For brand partnerships, campaigns, talent inquiries, and bright ideas.</p>
          <a className="contact-button" href="mailto:hello@clovecollective.ph">hello@clovecollective.ph <span>↗</span></a>
        </div>
      </section>

      <footer className="reveal" data-reveal>
        <a className="brand footer-brand" href="#top"><img src="/clove-logo.svg" alt="Clove Collective" /></a>
        <div className="socials"><a href="https://www.instagram.com/clovecollectiveph/" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://www.threads.com/@clovecollectiveph" target="_blank" rel="noreferrer">Threads ↗</a></div>
        <p>© 2026 Clove Collective PH</p>
      </footer>
    </main>
  );
}
