/**
 * static.js — Hardcoded content for sections that change rarely.
 * Edit here directly; no JSON file needed for these sections.
 */

export const SITE = {
  name:    'Alkebuleum Foundation',
  tagline: 'Powering Africa\'s Sovereign Digital Future',
  url:     'https://alkebuleum.org',
}

export const NAV_LINKS = [
  { label: 'Mission',    href: '#mission'    },
  { label: 'Ecosystem',  href: '#ecosystem'  },
  { label: 'Programs',   href: '#programs'   },
  { label: 'Governance', href: '#governance' },
  { label: 'News',       href: '#news'       },
]

export const HERO = {
  badge:    'Pan-African Blockchain Foundation',
  headline: ['Building Africa\'s', 'Sovereign', 'Digital Future'],
  lead:     'The Alkebuleum Foundation funds, develops, and governs the first blockchain ecosystem purpose-built for Africa — tackling corruption, identity gaps, and financial exclusion with decentralized infrastructure.',
  cta_primary:   { label: 'Explore the Ecosystem', href: '#ecosystem' },
  cta_secondary: { label: 'Our Programs',           href: '#programs'  },
  stats: [
    { value: '54',   label: 'Nations in scope'   },
    { value: '1.4B', label: 'People to serve'    },
    { value: '5+',   label: 'Live protocols'      },
    { value: 'DAO',  label: 'Community governed'  },
  ],
  map_nodes: [
    { id: 'monrovia',    cx: 126, cy: 258, label: 'Monrovia',  status: 'active',  color: 'amber' },
    { id: 'lagos',       cx: 192, cy: 248, label: 'Lagos',     status: 'node',    color: 'green' },
    { id: 'nairobi',     cx: 256, cy: 282, label: 'Nairobi',   status: 'node',    color: 'amber' },
    { id: 'accra',       cx: 158, cy: 260, label: 'Accra',     status: 'node',    color: 'green' },
    { id: 'cairo',       cx: 210, cy: 112, label: 'Cairo',     status: 'node',    color: 'amber' },
    { id: 'johannesburg',cx: 212, cy: 358, label: 'Joburg',    status: 'node',    color: 'green' },
    { id: 'kinshasa',    cx: 185, cy: 306, label: 'Kinshasa',  status: 'node',    color: 'amber' },
    { id: 'addis',       cx: 248, cy: 228, label: 'Addis Ababa',status:'node',    color: 'green' },
  ],
}

export const MISSION = {
  quote:  '"Almost every blockchain today was built for Western markets. We are building for the 1.4 billion."',
  author: '— Alkebuleum Foundation',
  stats: [
    { value: '54',   label: 'African nations targeted' },
    { value: '$0',   label: 'Cost to create identity'  },
    { value: '100%', label: 'Open source protocols'    },
    { value: 'DAO',  label: 'Community governed'       },
  ],
  body: [
    'The Alkebuleum Foundation stewards a sovereign blockchain ecosystem that solves Africa\'s most pressing structural challenges — corruption, land disputes, financial exclusion, and identity gaps.',
    'Every protocol we build is designed around Africa\'s specific needs, not adapted from systems built for Western infrastructure.',
  ],
  pillars: [
    { icon: '🏛️', title: 'Transparent Governance',    desc: 'Immutable on-chain records for every public fund and government decision.'              },
    { icon: '🪪', title: 'Sovereign Identity',         desc: 'Self-sovereign digital identity for 500M+ Africans without formal documentation.'       },
    { icon: '🌍', title: 'Economic Inclusion',         desc: 'DeFi infrastructure enabling cross-border payments and microfinance at scale.'            },
    { icon: '🤖', title: 'AI-Native Infrastructure',   desc: 'Built for humans and AI agents — sovereign identity extends to autonomous systems.'      },
  ],
}

export const GOVERNANCE = {
  intro: [
    'The Foundation holds no controlling majority. Governance migrates entirely to the Alkebuleum DAO within 4 years of mainnet launch — every decision made on-chain, by token holders.',
    'Voting is weighted by $ALKE holdings with AIChain reputation as a multiplier, protecting against plutocratic capture.',
  ],
  steps: [
    { num: '01', title: 'Submit a Proposal',       desc: 'Any $ALKE holder above the threshold can submit an Alkebuleum Improvement Proposal (AIP).'             },
    { num: '02', title: 'Community Deliberation',  desc: '7-day on-chain discussion period — open to debate, amendments, and community input.'                    },
    { num: '03', title: 'On-Chain Vote',           desc: 'Token-weighted voting with AIChain reputation multiplier to protect long-term contributors.'             },
    { num: '04', title: 'Multisig Execution',      desc: 'Approved proposals execute via a community-elected multisig with regional African representation.'       },
  ],
  token_stats: [
    { value: '4 yrs',  label: 'Until full DAO control',      color: 'amber' },
    { value: '7 days', label: 'Proposal deliberation window', color: 'green' },
  ],
  tokenomics: [
    { label: 'Community Treasury & DAO', pct: 35, color: '#D4860A' },
    { label: 'Ecosystem Grants',         pct: 25, color: '#1A6B3C' },
    { label: 'Foundation Ops',           pct: 15, color: '#B04030' },
    { label: 'Contributors',             pct: 12, color: '#1A3A6B' },
    { label: 'Liquidity',                pct:  8, color: '#7C5CBF' },
    { label: 'Public Sale',              pct:  5, color: '#999999' },
  ],
}

export const GRANTS = {
  tag:   'Grants Program',
  title: ['Fund Africa\'s', 'Digital Revolution'],
  lead:  'Supporting open-source development, research, and communities advancing transparency, identity, and financial inclusion across Africa.',
  categories: [
    { icon: '💰', title: 'Protocol Development',    desc: 'Builders contributing to core Alkebuleum protocols and tooling.'               },
    { icon: '🎓', title: 'Education & Research',    desc: 'Academics and educators advancing blockchain literacy across Africa.'           },
    { icon: '🏙️', title: 'Community & Governance', desc: 'NGOs and civic organizations deploying Alkebuleum solutions locally.'           },
    { icon: '🤝', title: 'Ecosystem Partnerships',  desc: 'Institutions and governments aligned with our mission to scale impact.'        },
  ],
  form_note: 'Applications reviewed quarterly. We respond within 2 weeks of each cycle closing.',
  form_fields: [
    { name: 'name',         type: 'text',     placeholder: 'Full name'                },
    { name: 'email',        type: 'email',    placeholder: 'Email address'            },
    { name: 'project',      type: 'text',     placeholder: 'Project or organization'  },
    {
      name: 'category', type: 'select', placeholder: 'Grant category',
      options: ['Protocol Development', 'Education & Research', 'Community & Governance', 'Ecosystem Partnership'],
    },
    { name: 'description',  type: 'textarea', placeholder: 'Describe your project in 2–3 sentences' },
  ],
}

export const FOOTER = {
  tagline: 'Stewards of the pan-African blockchain ecosystem. Building transparent governance, sovereign identity, and economic inclusion — from Africa, for Africa.',
  columns: [
    {
      title: 'Protocols',
      links: [
        { label: 'Alkebuleum Chain', href: 'https://alkebuleum.org' },
        { label: 'AIChain',          href: 'https://ai-chain.org'   },
        { label: 'JollofSwap',       href: '#' },
        { label: 'AmVault',          href: '#' },
        { label: 'Nuru AI',          href: '#' },
        { label: 'AkeBank',          href: '#' },
      ],
    },
    {
      title: 'Foundation',
      links: [
        { label: 'Mission',     href: '#mission'    },
        { label: 'Programs',    href: '#programs'   },
        { label: 'Governance',  href: '#governance' },
        { label: 'Grants',      href: '#grants'     },
        { label: 'Team',        href: '#team'       },
        { label: 'Whitepaper',  href: '#'           },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '#' },
        { label: 'GitHub',        href: 'https://github.com/Alkebuleum' },
        { label: 'Blog',          href: '#' },
        { label: 'Press Kit',     href: '#' },
        { label: 'Contact',       href: '#' },
      ],
    },
  ],
  socials: [
    { label: 'Twitter',  href: '#' },
    { label: 'GitHub',   href: 'https://github.com/Alkebuleum' },
    { label: 'Discord',  href: '#' },
    { label: 'Telegram', href: '#' },
    { label: 'LinkedIn', href: '#' },
  ],
}
