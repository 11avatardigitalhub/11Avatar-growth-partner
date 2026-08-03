/* ============================================================ */
/* PREMIUM CONSULTING PAGE STYLES */
/* ============================================================ */

/* Hero */
.consult-hero {
    padding: 60px 0 40px;
    background: linear-gradient(180deg, rgba(197,164,109,0.08) 0%, transparent 100%);
}
.consult-hero-content { max-width: 800px; }
.consult-hero-content .brand-tag {
    font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--gold); font-weight: 600; margin-bottom: 8px;
}
.consult-hero-content h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2.4rem, 6vw, 3.6rem);
    line-height: 1.1; margin: 8px 0;
}
.hero-line { width: 60px; height: 2px; background: var(--gold); margin: 16px 0; }
.hero-sub { font-size: 1rem; color: var(--text-muted); max-width: 600px; line-height: 1.6; }
.hero-punch {
    font-size: 0.9rem; font-weight: 600; margin-top: 12px;
    border-left: 3px solid var(--gold); padding-left: 16px; color: var(--text-muted);
}
.hero-services { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 20px; }
.hero-services span {
    font-size: 0.7rem; font-weight: 500; color: var(--text-muted);
    background: rgba(197,164,109,0.08); padding: 6px 14px;
    border-radius: 40px; border: 1px solid rgba(197,164,109,0.1);
}

/* Sections */
.consult-section { padding: 70px 0; border-bottom: 1px solid rgba(197,164,109,0.05); }
.consult-section.alt-bg { background: rgba(0,0,0,0.15); }
.section-header { margin-bottom: 36px; }
.section-header.center { text-align: center; }
.section-header.center .section-sub { margin: 0 auto; }
.section-tag {
    font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase;
    color: var(--gold); font-weight: 600;
}
.section-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2rem, 5vw, 2.8rem); font-weight: 600;
    letter-spacing: -0.02em; margin: 6px 0;
}
.section-sub { font-size: 0.95rem; color: var(--text-muted); max-width: 560px; line-height: 1.5; }
.sub-head {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.4rem; margin-bottom: 16px; color: var(--gold);
}

/* Pillars */
.pillar-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
}
.pillar-card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 28px 20px;
    text-align: center;
    transition: transform 0.25s;
}
.pillar-card:hover { transform: translateY(-4px); }
.pillar-icon {
    width: 52px; height: 52px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    margin: 0 auto 14px;
}
.pillar-icon i { color: #1A1A1A; font-size: 1.2rem; }
.pillar-card h4 { font-family: 'Cormorant Garamond', serif; font-size: 1.1rem; margin-bottom: 6px; }
.pillar-card p { font-size: 0.78rem; color: var(--text-muted); line-height: 1.5; }

/* Problem Cards */
.problem-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
}
.problem-card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 14px;
    border-left: 3px solid var(--gold);
    overflow: hidden;
}
.problem-head {
    padding: 14px 18px;
    font-weight: 600; font-size: 0.85rem;
    color: var(--gold);
    background: rgba(197,164,109,0.05);
}
.problem-body { padding: 14px 18px; }
.problem-body p { font-size: 0.75rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 6px; }
.problem-body .impact { color: #ff6b6b; font-weight: 500; }
.problem-body .solution { color: #7ecb76; }
.problem-assets {
    display: flex; flex-wrap: wrap; gap: 4px;
    padding: 10px 18px; border-top: 1px solid var(--border);
}
.problem-assets span {
    font-size: 0.6rem; background: rgba(197,164,109,0.08);
    color: var(--gold); padding: 3px 8px; border-radius: 4px;
}

/* Differentiator */
.diff-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
}
.diff-item {
    display: flex; align-items: flex-start; gap: 14px;
    padding: 18px;
    background: var(--card-bg);
    border-radius: 12px;
    border: 1px solid var(--border);
}
.diff-icon {
    flex-shrink: 0; width: 40px; height: 40px;
    border-radius: 50%; background: rgba(197,164,109,0.12);
    display: flex; align-items: center; justify-content: center;
}
.diff-icon i { color: var(--gold); font-size: 0.9rem; }
.diff-item p { font-size: 0.78rem; line-height: 1.5; margin: 0; }

/* Journey */
.journey-flow {
    display: flex; align-items: center; justify-content: center;
    flex-wrap: wrap; gap: 8px; margin-bottom: 28px;
}
.journey-node { text-align: center; }
.jn-circle {
    width: 48px; height: 48px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    margin: 0 auto 6px;
}
.jn-circle i { color: #1A1A1A; font-size: 1rem; }
.jn-label { font-size: 0.75rem; font-weight: 600; }
.jn-arrow { color: var(--gold); font-size: 1.4rem; padding: 0 8px; }

.journey-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 14px;
}
.journey-card {
    background: var(--card-bg);
    border-radius: 12px;
    padding: 16px;
}
.journey-card h4 { font-size: 0.85rem; margin-bottom: 8px; }
.journey-card .psych { font-size: 0.7rem; color: var(--text-muted); line-height: 1.4; margin-bottom: 4px; }
.journey-card .biz-prob { font-size: 0.7rem; color: #ff6b6b; line-height: 1.4; margin-bottom: 4px; }
.journey-card .biz-sol { font-size: 0.7rem; color: #7ecb76; line-height: 1.4; }

/* Website & Platform */
.web-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 12px;
}
.web-card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 14px;
}
.web-card h4 { font-size: 0.8rem; color: var(--gold); margin-bottom: 4px; }
.web-card p { font-size: 0.7rem; color: var(--text-muted); line-height: 1.4; }

.platform-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 12px;
}
.platform-card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 14px;
}
.platform-card h4 { font-size: 0.8rem; color: var(--gold); margin-bottom: 4px; }
.platform-card .goal { font-size: 0.7rem; color: var(--text-muted); line-height: 1.4; margin-bottom: 8px; }
.plat-tags { display: flex; flex-wrap: wrap; gap: 4px; }
.plat-tags span {
    font-size: 0.6rem; background: rgba(197,164,109,0.08);
    color: var(--gold); padding: 2px 8px; border-radius: 4px;
}

/* Metrics */
.metric-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 14px;
}
.metric-card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 18px;
    text-align: center;
}
.metric-icon { font-size: 1.4rem; margin-bottom: 6px; }
.metric-card h4 { font-size: 0.8rem; margin-bottom: 4px; }
.metric-card p { font-size: 0.7rem; color: var(--text-muted); line-height: 1.4; }
.metric-card .target {
    font-size: 0.65rem; color: var(--gold); font-weight: 600;
    display: block; margin-top: 8px;
}

/* Asset Selector */
.asset-category { margin-bottom: 16px; }
.asset-cat-head {
    display: flex; justify-content: space-between; align-items: center;
    padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06);
    cursor: pointer; font-weight: 600; font-size: 0.85rem;
}
.asset-cat-head .count { font-size: 0.7rem; color: var(--gold); }
.asset-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 8px; padding: 10px 0;
}
.asset-item {
    padding: 10px 14px; border-radius: 8px;
    border: 1px solid var(--border); cursor: pointer;
    font-size: 0.75rem; display: flex; align-items: center; gap: 8px;
    transition: all 0.2s;
    background: var(--card-bg);
}
.asset-item:hover { border-color: var(--gold); }
.asset-item.selected {
    border-color: var(--gold);
    background: rgba(197,164,109,0.08);
}
.asset-item i { font-size: 0.7rem; }
.asset-item.selected i { color: var(--gold); }

/* Proposal Bar */
.proposal-bar {
    background: var(--card-bg);
    border: 2px solid var(--gold);
    border-radius: 14px;
    padding: 22px 28px;
    margin-top: 28px;
    text-align: center;
}
.proposal-score { font-weight: 600; color: var(--gold); font-size: 1rem; margin-bottom: 12px; }
.proposal-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }

/* FAQ */
.faq-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 14px;
}
.faq-card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 18px;
}
.faq-card h4 { font-size: 0.85rem; margin-bottom: 6px; }
.faq-card p { font-size: 0.75rem; color: var(--text-muted); line-height: 1.5; }

/* Philosophy Box */
.philosophy-box {
    background: linear-gradient(135deg, rgba(197,164,109,0.1) 0%, rgba(197,164,109,0.03) 100%);
    border: 1px solid rgba(197,164,109,0.2);
    border-radius: 20px;
    padding: 44px 32px;
    text-align: center;
}
.philosophy-box h2 {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.6rem, 4vw, 2.4rem);
    margin: 10px 0;
}
.philosophy-box p { font-size: 0.9rem; color: var(--text-muted); max-width: 560px; margin: 12px auto; }

/* Buttons */
.btn-gold {
    background: var(--gold); color: #1A1A1A;
    padding: 12px 32px; border-radius: 40px;
    font-weight: 600; font-size: 0.85rem;
    border: none; cursor: pointer; text-decoration: none;
    display: inline-block; transition: 0.2s;
}
.btn-gold:hover { background: #b3925a; transform: translateY(-2px); }
.btn-outline {
    border: 1.5px solid var(--gold); color: var(--gold);
    padding: 12px 32px; border-radius: 40px;
    font-weight: 600; font-size: 0.85rem;
    cursor: pointer; text-decoration: none;
    display: inline-block; transition: 0.2s;
}
.btn-outline:hover { background: rgba(197,164,109,0.08); }

/* Responsive */
@media (max-width: 768px) {
    .consult-section { padding: 50px 0; }
    .philosophy-box { padding: 28px 18px; }
    .proposal-bar { padding: 18px 16px; }
    .asset-grid { grid-template-columns: 1fr 1fr; }
    .jn-arrow { display: none; }
}
@media (max-width: 480px) {
    .asset-grid { grid-template-columns: 1fr; }
    .hero-services span { font-size: 0.65rem; padding: 4px 10px; }
}