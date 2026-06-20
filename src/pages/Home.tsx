import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import SlideWheel from '../components/SlideWheel';
import { portfolioProjects, teamMembers } from '../data/content';

const HeroCore = lazy(() => import('../components/HeroCore'));
import naham_admin from '../assets/portfolio/naham-admin.jpg';
import naham_mobile from '../assets/portfolio/naham-mobile.jpg';
import mujahid_autos from '../assets/portfolio/mujahid-autos.jpg';
import teamPlaceholder from '../assets/team-placeholder.jpg';
import './Home.css';

const imageMap: Record<string, string> = {
  'naham-admin.png': naham_admin,
  'naham-mobile.png': naham_mobile,
  'mujahid-autos.png': mujahid_autos,
};

const wheelItems = portfolioProjects.map((p) => ({
  id: p.id,
  image: imageMap[p.image],
  title: p.title,
  subtitle: p.subtitle,
  tags: p.tags,
}));

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function Home() {
  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section id="home" className="hero">
        <div className="hero__canvas">
          <Suspense fallback={null}>
            <HeroCore />
          </Suspense>
        </div>
        <div className="hero__veil" />
        <div className="container hero__content">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Silicon to Cloud
          </motion.span>
          <motion.h1
            className="gradient-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            IDEV INC
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Engineering the future — from silicon to cloud. Hardware resilience meets
            intelligent software.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="hero__ctas"
          >
            <a href="#work" className="btn btn--primary">
              Explore innovations <span aria-hidden>&#8594;</span>
            </a>
            <Link to="/projects" className="btn btn--ghost">
              View marketplace
            </Link>
          </motion.div>
        </div>
        <div className="hero__scroll-hint" aria-hidden>
          <span />
        </div>
      </section>

      {/* ---------------- WORK / SLIDE WHEEL ---------------- */}
      <motion.section
        id="work"
        className="section-pad work"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUp}
      >
        <div className="container">
          <span className="eyebrow">Our Work</span>
          <h2 className="gradient-text work__heading">Boundary-pushing builds</h2>
          <p className="section-sub">
            Full-stack digital ecosystems shipped for real businesses — swipe or use the
            arrows to explore.
          </p>
        </div>
        <div className="container">
          <SlideWheel items={wheelItems} />
        </div>
      </motion.section>

      {/* ---------------- TEAM ---------------- */}
      <motion.section
        id="team"
        className="section-pad team"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUp}
      >
        <div className="container">
          <span className="eyebrow">Leadership</span>
          <h2 className="gradient-text">Visionaries driving the build</h2>
          <p className="section-sub">The people steering IDEV's software and hardware roadmap.</p>

          <div className="team__grid">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.id}
                className="team__card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="team__photo">
                  <img src={teamPlaceholder} alt="" aria-hidden />
                  <span className="team__initials">{member.initials}</span>
                </div>
                <h3>{member.name}</h3>
                <p className="team__role">{member.role}</p>
                <p className="team__bio">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}
