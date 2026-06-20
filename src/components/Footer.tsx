import './Footer.css';

const socials = [
  { label: 'X (Twitter)', url: 'https://x.com/IDEV_nig', glyph: 'X' },
  { label: 'Instagram', url: 'https://www.instagram.com/idev_inc/', glyph: 'IG' },
  { label: 'TikTok', url: 'https://www.tiktok.com/@idev_inc', glyph: 'TT' },
  { label: 'GitHub', url: 'https://github.com/idevincoperated', glyph: 'GH' },
];

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container footer__grid">
        <div className="footer__col">
          <h3>Connect with us</h3>
          <p>
            <a href="mailto:idevincoperated@gmail.com">idevincoperated@gmail.com</a>
          </p>
          <p>
            <a href="tel:+2347074218666">+234 707 421 8666</a>
          </p>
        </div>

        <div className="footer__col">
          <h3>Digital footprint</h3>
          <div className="footer__socials">
            {socials.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer" aria-label={s.label}>
                {s.glyph}
              </a>
            ))}
          </div>
          <p className="footer__note">Follow our open-source repos &amp; design journals</p>
        </div>
      </div>

      <div className="footer__copyright">
        <p>&copy; 2026 IDEV INC — Where software meets imagination.</p>
      </div>
    </footer>
  );
}
