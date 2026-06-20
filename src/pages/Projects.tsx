import { useState } from 'react';
import { motion } from 'framer-motion';
import { suiteApps } from '../data/content';
import type { AppStatus } from '../data/types';
import './Projects.css';

const statusLabel: Record<AppStatus, string> = {
  live: 'Live',
  'in-development': 'In development',
  planned: 'Planned',
  'requires-review': 'Pending legal review',
};

const filters: { label: string; value: AppStatus | 'all' }[] = [
  { label: 'All apps', value: 'all' },
  { label: 'In development', value: 'in-development' },
  { label: 'Planned', value: 'planned' },
  { label: 'Pending review', value: 'requires-review' },
];

export default function Projects() {
  const [filter, setFilter] = useState<AppStatus | 'all'>('all');

  const visibleApps =
    filter === 'all' ? suiteApps : suiteApps.filter((app) => app.status === filter);

  return (
    <main className="marketplace">
      <section className="marketplace__hero">
        <div className="container">
          <span className="eyebrow">App Marketplace</span>
          <h1 className="gradient-text">The iDev Suite</h1>
          <p className="section-sub">
            Nine interconnected products, unified by a single iDev AI layer — designed for
            developers who live across community, commerce, and infrastructure.
          </p>
        </div>
        <div className="marketplace__grid-glow" aria-hidden />
      </section>

      <section className="marketplace__filters container">
        {filters.map((f) => (
          <button
            key={f.value}
            className={`filter-chip ${filter === f.value ? 'filter-chip--active' : ''}`}
            onClick={() => setFilter(f.value)}
          >
            {f.label}
          </button>
        ))}
      </section>

      <section className="marketplace__grid container">
        {visibleApps.map((app, i) => (
          <motion.article
            key={app.id}
            className={`app-card app-card--${app.accent}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
          >
            <div className="app-card__corner app-card__corner--tl" />
            <div className="app-card__corner app-card__corner--br" />

            <div className="app-card__icon">{app.glyph}</div>

            <div className="app-card__body">
              <div className="app-card__top">
                <h3>{app.name}</h3>
                <span className={`status-pill status-pill--${app.status}`}>
                  {statusLabel[app.status]}
                </span>
              </div>
              <p className="app-card__tagline">{app.tagline}</p>
              <p className="app-card__desc">{app.description}</p>
              <span className="app-card__category">{app.category}</span>
            </div>
          </motion.article>
        ))}
      </section>

      <section className="marketplace__cta container">
        <div className="marketplace__cta-box">
          <h2>Building something that connects to the Suite?</h2>
          <p>
            iDevTrade and iDevPay are pending legal and regulatory review before development
            begins. Reach out if you'd like to collaborate on the broader ecosystem.
          </p>
          <a href="mailto:idevincoperated@gmail.com" className="btn btn--primary">
            Get in touch
          </a>
        </div>
      </section>
    </main>
  );
}
