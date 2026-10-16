export interface FlowStep {
  step: string;
  title: string;
  phase: string;
  caption: string;
  annotation: string;
  image: string;
}

export interface DecisionItem {
  number: string;
  title: string;
  tag: string;
  evidence: string;
  decision: string;
  tradeoff: string;
  impact: string;
  image: string;
  alt: string;
}

export interface ExplorationItem {
  version: string;
  label: string;
  status: 'Shipped' | 'Selected' | 'Evolved' | 'Explored' | 'Killed';
  summary: string;
  whyItMatters: string;
  image: string;
}

export interface ArchitectureLane {
  lane: string;
  subtitle: string;
  nodes: { title: string; detail: string; badge?: string }[];
}

export interface CaseStudyData {
  slug: string;
  index: string;
  title: string;
  clientOrContext: string;
  category: 'AI & Agentic Systems' | 'Enterprise & B2B' | 'Consumer & Fintech' | 'Healthcare';
  tags: string[];
  year: string;
  accent: string;
  accentSecondary: string;
  surfaceTint: string;
  logo?: string;
  heroImage: string;
  tagline: string;
  thesis: string;
  summary: string;
  confidentialityNote?: string;
  downloadPdf?: { label: string; href: string };
  facts: {
    role: string;
    scope: string;
    timeline: string;
    team: string;
  };
  headlineMetrics: {
    value: string;
    label: string;
    detail: string;
  }[];
  context: {
    kicker: string;
    headline: string;
    narrative: string;
    beforeState: {
      title: string;
      points: string[];
    };
    reframedState: {
      title: string;
      points: string[];
    };
    successModel: {
      objective: string;
      userOutcome: string;
      guardrail: string;
    };
  };
  discovery: {
    headline: string;
    intro: string;
    metrics: {
      number: string;
      label: string;
      detail: string;
    }[];
    keyInsight: string;
  };
  architecture: {
    headline: string;
    description: string;
    entryNode: { title: string; subtitle: string };
    lanes: ArchitectureLane[];
    outputNode: { title: string; subtitle: string };
    systemFlow: string[];
  };
  flowSteps: FlowStep[];
  decisions: DecisionItem[];
  explorations?: {
    headline: string;
    subtitle: string;
    items: ExplorationItem[];
  };
  validation: {
    headline: string;
    steps: {
      number: string;
      title: string;
      detail: string;
    }[];
  };
  outcomes: {
    headline: string;
    caption: string;
    cards: {
      metric: string;
      title: string;
      detail: string;
    }[];
  };
  reflection: {
    quote: string;
    takeaway: string;
  };
}

export const CASE_STUDIES: CaseStudyData[] = [
  {
    slug: 'miraee',
    index: '01',
    title: 'Miraee',
    clientOrContext: 'Mondee · Enterprise AI Travel',
    category: 'AI & Agentic Systems',
    tags: ['Agentic UX', 'Enterprise SaaS', 'Decision Systems', 'Web + iOS'],
    year: '2025 — 2026',
    accent: '#3B5BFF',
    accentSecondary: '#C9FF48',
    surfaceTint: 'rgba(59, 91, 255, 0.12)',
    logo: '/images/projects/miraee_logo.png',
    heroImage: '/images/projects/miraee/flow/03-workspace-flights.png',
    tagline: 'An enterprise AI travel workspace where search, policy governance, approval, and recovery happen inside one accountable conversation.',
    thesis: 'Business travel wasn’t a booking speed problem—it was a decision legibility and accountability problem.',
    summary:
      'Miraee sits between traveler intent and corporate governance. As the sole product designer on the AI booking pod, I architected the conversational workspace, price-anchoring system, inline policy rationale, and multi-actor recovery flows from 0→1 to General Availability.',
    confidentialityNote:
      'Shipped enterprise product. Screens are recreated for portfolio inspection; proprietary client telemetry and NDA-restricted revenue figures are omitted.',
    facts: {
      role: 'Senior Product Designer (Sole Designer, AI Pod)',
      scope: 'Enterprise Travel · Conversational Web & Mobile · 0→GA',
      timeline: '7 Months · Shipped to Production',
      team: '2 PMs · 6 Full-Stack Engineers · 2 AI/ML Engineers',
    },
    headlineMetrics: [
      { value: '6', label: 'Enterprise Clients Live', detail: 'Onboarded into production within Q1 of General Availability' },
      { value: '100%', label: 'Policy Recall in UAT', detail: '5/5 moderated test participants noticed inline fare-policy badges' },
      { value: '−40%', label: 'Unparseable Prompts', detail: 'Eliminated ambiguous AI turns via contextual structured quick-replies' },
      { value: '0', label: 'Silent Failure States', detail: 'Every block, exception, and retry exposes human & agent state' },
    ],
    context: {
      kicker: 'Context & Stakes',
      headline: 'Disconnected tools turned routine corporate trips into compliance blind spots.',
      narrative:
        'In legacy corporate travel tools, search, company policy, and manager approvals lived in separate silos. Travelers booked flights first and discovered policy violations later; approvers received high-cost requests in email threads stripped of fare benchmarks or inventory context.',
      beforeState: {
        title: 'Legacy Fragmented Workflow',
        points: [
          'Policy rules fired post-selection, causing last-minute rejections and fare expiration.',
          'Approvers had to reconstruct a single trip from 3+ disconnected confirmation emails.',
          'Support agents took manual screenshots of competing fares just to prove a price was reasonable.',
          'Silent API timeouts caused travelers to refresh mid-checkout, creating 14 duplicate holds in early beta.',
        ],
      },
      reframedState: {
        title: 'Miraee Accountable Decision System',
        points: [
          'Establish a live "Price to Beat" benchmark before any flight card is evaluated.',
          'Bind flight, hotel, car, and add-ons into one expandable trip object with per-line compliance badges.',
          'Treat exception rationale as a first-class UI layer—traveler and approver share the exact same context.',
          'Separate human financial status from the AI agent retry activity stream during booking recovery.',
        ],
      },
      successModel: {
        objective: 'Turn fragmented corporate booking into one auditable, low-friction conversational decision.',
        userOutcome: 'Travelers book with confidence knowing why an option is compliant; managers approve in one click with full price context.',
        guardrail: 'Zero silent policy blocks, payment holds, or partial-booking states.',
      },
    },
    discovery: {
      headline: 'I started where the existing service was already breaking under pressure.',
      intro:
        'Before sketching UI, I shadowed live agent support calls, audited a quarter of booking-failure tickets, and interviewed corporate travel administrators to map where trust broke down.',
      metrics: [
        { number: '~12', label: 'Support Calls Shadowed', detail: 'Two weeks of live screen-share observation with enterprise travel agents.' },
        { number: '4', label: 'Travel-Admin Interviews', detail: '45-minute deep dives across two pilot client organizations.' },
        { number: '~18', label: 'Dogfood Beta Travelers', detail: 'Six-week continuous feedback loop tracking real business trips.' },
        { number: '~200', label: 'Failure Tickets Audited', detail: 'Categorized every booking, hold, and cancellation failure from Q3.' },
      ],
      keyInsight:
        'Constraint that reshaped the architecture: Corporate travel purpose ("Client Meeting" vs. "Internal Offsite") dynamically alters policy budgets and approval chains. Intake could not be an open-ended blank text box—it needed structured intent gating.',
    },
    architecture: {
      headline: 'Conversational Decision & Governance Architecture',
      description:
        'Miraee pairs a conversational intent parser with a synchronized workspace drawer so high-density comparisons never bloat the chat thread.',
      entryNode: {
        title: 'Structured Intent Intake & Trip Purpose Gate',
        subtitle: 'Binds traveler profile, cost center, and trip reason to active company policy rules',
      },
      lanes: [
        {
          lane: '01 · Discovery & Benchmarking',
          subtitle: 'Context-first inventory evaluation',
          nodes: [
            { title: 'Price-to-Beat Anchor', detail: 'Calculates dynamic fair-market threshold per route & cabin', badge: 'Anchor' },
            { title: 'Curated Option Cards', detail: 'Top 3 policy-ranked options inline; full matrix in side drawer' },
          ],
        },
        {
          lane: '02 · Policy & Exception Layer',
          subtitle: 'Transparent governance engine',
          nodes: [
            { title: 'Inline Compliance Pill', detail: 'Attached directly to fare price so status is never missed', badge: '100% Recall' },
            { title: 'Exception Rationale Composer', detail: 'Captures cost delta + traveler justification for out-of-policy picks' },
          ],
        },
        {
          lane: '03 · Unified Trip Approval',
          subtitle: 'Single-object accountability',
          nodes: [
            { title: 'Composite Trip Ledger', detail: 'Flight + Hotel + Ground + Add-ons in one expandable view', badge: 'Single Truth' },
            { title: 'Approver Decision Packet', detail: 'Shows benchmark delta, rule triggered, and conditional sign-off' },
          ],
        },
        {
          lane: '04 · Resilient Recovery',
          subtitle: 'Dual-surface fault tolerance',
          nodes: [
            { title: 'Human Consequence Banner', detail: 'Explicitly states what is paid, held, or requires traveler action', badge: 'Zero Ambiguity' },
            { title: 'Agent Retry Telemetry', detail: 'Collapsible log showing PNR re-sync and supplier fallbacks' },
          ],
        },
      ],
      outputNode: {
        title: 'Confirmed, Compliant & Auditable Itinerary',
        subtitle: 'Synced across traveler mobile app, corporate admin portal, and expense ledger',
      },
      systemFlow: ['Structured Intent', 'Price-to-Beat Search', 'Workspace Comparison', 'Unified Trip Summary', 'Policy & Approval', 'Explicit Recovery'],
    },
    flowSteps: [
      {
        step: '01',
        title: 'Contextual Intent Intake',
        phase: 'Intake',
        caption: 'Structured prompt chips establish trip purpose, dates, and policy tier without typing.',
        annotation: 'Replaced open-ended chat blanks with contextual quick-replies, cutting unparseable LLM turns by 40%.',
        image: '/images/projects/miraee/flow/01-chat-intent.png',
      },
      {
        step: '02',
        title: 'Price-to-Beat Flight Cards',
        phase: 'Benchmarking',
        caption: 'Every flight card is evaluated against a single dynamic "Price to Beat" anchor.',
        annotation: 'Inline policy badges sit right beside the fare so compliance and cost are read in one eye fixation.',
        image: '/images/projects/miraee/flow/02-flight-search-card.png',
      },
      {
        step: '03',
        title: 'Synchronized Flight Workspace',
        phase: 'Comparison',
        caption: 'Dual-pane workspace pairs conversational refinement with dense schedule & fare inspection.',
        annotation: 'Keeps the chat thread clean while giving power travelers full filtering and leg-by-leg comparison.',
        image: '/images/projects/miraee/flow/03-workspace-flights.png',
      },
      {
        step: '04',
        title: 'Deep Fare & Baggage Inspection',
        phase: 'Inspection',
        caption: 'Slide-over inspection exposes refundability, seat maps, and partner rules before selection.',
        annotation: 'Prevents post-booking surprises by surfacing change penalties at the moment of choice.',
        image: '/images/projects/miraee/flow/04-flight-details.png',
      },
      {
        step: '05',
        title: 'Out-of-Policy Exception Rationale',
        phase: 'Governance',
        caption: 'When a traveler picks an out-of-policy fare, Miraee states the exact rule and cost delta.',
        annotation: 'One-tap justification templates turn a frustrating block into an accountable exception request.',
        image: '/images/projects/miraee/flow/05-reason-for-selection.png',
      },
      {
        step: '06',
        title: 'Conversational Ancillaries & Add-Ons',
        phase: 'Customization',
        caption: 'Seats, baggage, and Wi-Fi are configured inline with live policy coverage indicators.',
        annotation: 'Travelers immediately see which add-ons are company-reimbursed vs. personal upgrades.',
        image: '/images/projects/miraee/flow/06-addons-chat.png',
      },
      {
        step: '07',
        title: 'Policy-Aware Hotel Recommendations',
        phase: 'Lodging',
        caption: 'Hotels ranked by proximity to meeting venue, corporate negotiated rates, and nightly cap.',
        annotation: 'Carries flight arrival times forward automatically to align check-in windows.',
        image: '/images/projects/miraee/flow/07-hotel-options.png',
      },
      {
        step: '08',
        title: 'Spatial Map & Per-Diem View',
        phase: 'Spatial Context',
        caption: 'Interactive map clusters stays around the client office with live per-diem compliance pins.',
        annotation: 'Eliminates tab-switching to Google Maps when judging commute time vs. nightly rate.',
        image: '/images/projects/miraee/flow/08-hotel-map-view.png',
      },
      {
        step: '09',
        title: 'Unified Trip Object & Compliance Summary',
        phase: 'Consolidation',
        caption: 'Flight, hotel, car, and add-ons roll into a single expandable trip ledger.',
        annotation: 'Serves simultaneously as the traveler’s checkout review and the manager’s approval packet.',
        image: '/images/projects/miraee/flow/09-booking-summary.png',
      },
      {
        step: '10',
        title: 'Multi-Item Approval Confirmation',
        phase: 'Sign-off',
        caption: 'Real-time approval state shows manager sign-off, conditions, and ticket issuance status.',
        annotation: 'Closes the accountability loop between traveler, manager, and finance.',
        image: '/images/projects/miraee/flow/10-all-items-approved.png',
      },
      {
        step: '11',
        title: 'Explicit Failure & Recovery Stream',
        phase: 'Fault Tolerance',
        caption: 'When a supplier leg fails, Miraee separates payment protection from background agent retries.',
        annotation: 'Eliminated duplicate-hold incidents caused by anxious users refreshing mid-transaction.',
        image: '/images/projects/miraee/flow/11-cancellation-failed.png',
      },
      {
        step: '12',
        title: 'Adaptive Daylight Workspace Theme',
        phase: 'Design System',
        caption: 'Full semantic token parity across dark and high-contrast daylight enterprise environments.',
        annotation: 'Built on a shared token architecture for WCAG AA legibility in bright office or mobile settings.',
        image: '/images/projects/miraee/flow/12-light-theme.png',
      },
    ],
    decisions: [
      {
        number: '01',
        title: 'Use a "Price to Beat" anchor instead of a dense comparison matrix',
        tag: 'Decision Framing',
        evidence:
          'Support logs showed travelers repeatedly asking "Is this fare okay?" while 3 of 4 travel admins admitted taking manual screenshots of competing flights to reassure managers.',
        decision:
          'Placed a single dynamic "Price to Beat" benchmark at the top of the search conversation so every flight card is evaluated against one clear reference point.',
        tradeoff:
          'Sacrificed multi-column spreadsheet density in the primary chat view, delegating deep leg comparisons to the expandable workspace drawer.',
        impact: 'Reduced time-to-selection and gave approvers an instant baseline for evaluating fare exceptions.',
        image: '/images/projects/miraee/flow/02-flight-search-card.png',
        alt: 'Miraee flight option showing a price benchmark',
      },
      {
        number: '02',
        title: 'Make the entire trip—not individual tickets—the unit of approval',
        tag: 'Information Architecture',
        evidence:
          'Travel admins described reconstructing a single business trip from three separate confirmation emails (air, hotel, ground) before they could approve the budget.',
        decision:
          'Designed one expandable Trip Summary card that binds flight, hotel, car, and add-ons together, with per-item policy badges and total trip cost delta.',
        tradeoff:
          'Expanding line items inline adds vertical height, but keeps the entire financial commitment and confirm action within a single viewport.',
        impact: 'Unified the traveler checkout view and the manager approval packet into a single component grammar.',
        image: '/images/projects/miraee/flow/09-booking-summary.png',
        alt: 'Miraee booking summary with trip items',
      },
      {
        number: '03',
        title: 'Treat policy explanation as a trust feature, not an error toast',
        tag: 'Governance UX',
        evidence:
          'Two beta users abandoned bookings immediately after receiving an unexplained policy rejection because they thought the system was broken or punitive.',
        decision:
          'Exception states explicitly display the triggered rule, the exact dollar difference from policy, and structured reason chips that travel directly to the approver.',
        tradeoff:
          'Adds deliberate friction and vertical copy to exception paths while keeping compliant happy paths ultra-compact.',
        impact: 'Zero unexplained blocks; travelers understood how to resolve or justify exceptions without opening support tickets.',
        image: '/images/projects/miraee/flow/05-reason-for-selection.png',
        alt: 'Miraee screen explaining the reason for a selected option',
      },
      {
        number: '04',
        title: 'Decouple human financial status from the AI agent retry log',
        tag: 'Resilience & Recovery',
        evidence:
          'An early silent failure state prompted beta users to refresh the page mid-booking, producing 14 duplicate credit-card hold incidents in week one.',
        decision:
          'Split recovery into two distinct layers: a plain-language banner stating what is paid, held, or safe, and a collapsible activity stream showing what the AI agent is retrying.',
        tradeoff:
          'Maintaining two status surfaces required tighter state synchronization with backend webhooks, but prevented the chat from reading like a raw server log.',
        impact: 'Eliminated refresh-induced duplicate holds during subsequent pilot UAT.',
        image: '/images/projects/miraee/flow/11-cancellation-failed.png',
        alt: 'Miraee cancellation and failure state',
      },
    ],
    explorations: {
      headline: 'Theme & Surface Adaptation across Enterprise Contexts',
      subtitle: 'Miraee was engineered with semantic surface tokens so travel admins in bright office environments and road warriors on mobile share identical hierarchy.',
      items: [
        {
          version: 'Dark Mode',
          label: 'Obsidian Command Workspace',
          status: 'Shipped',
          summary: 'High-contrast dark surface optimized for long-session AI chat and multi-panel comparison.',
          whyItMatters: 'Reduces glare on mobile and makes semantic policy badges (emerald, amber, coral) pop immediately.',
          image: '/images/projects/miraee/flow/03-workspace-flights.png',
        },
        {
          version: 'Light Mode',
          label: 'Daylight Enterprise Surface',
          status: 'Shipped',
          summary: 'Warm editorial paper surface tailored for finance/admin reviewers working alongside spreadsheets.',
          whyItMatters: 'Preserves 1:1 token hierarchy and badge contrast ratios under WCAG AA guidelines.',
          image: '/images/projects/miraee/flow/12-light-theme.png',
        },
      ],
    },
    validation: {
      headline: 'Validated across messy real-world exceptions before General Availability.',
      steps: [
        {
          number: '01',
          title: 'Eliminate Unparseable Intent Turns',
          detail:
            'Internal logs revealed ~40% of early open-ended text prompts lacked required policy parameters. Introducing contextual quick-reply chips made intent immediately parseable.',
        },
        {
          number: '02',
          title: 'Eye-Tracking & Policy Badge Placement',
          detail:
            'In 5 moderated usability sessions, participants missed the policy badge when placed in the card header. Moving it inline with the price produced 5/5 recall on retest.',
        },
        {
          number: '03',
          title: 'Two-Company Pilot UAT on Exception Paths',
          detail:
            'Ran a 3-week UAT with two enterprise client companies testing out-of-policy approvals, partial hotel failures, and cancellation workflows.',
        },
      ],
    },
    outcomes: {
      headline: 'Shipped to production as a coherent enterprise decision system.',
      caption: 'Internal conversion and GMV figures remain under client NDA; the verified outcomes reflect production rollout and system architecture.',
      cards: [
        {
          metric: '6',
          title: 'Enterprise Clients Live in Q1',
          detail: 'Deployed across six corporate customer organizations in the first quarter following GA.',
        },
        {
          metric: '1',
          title: 'Unified Component Grammar',
          detail: 'Single card, policy badge, and summary architecture spanning flights, stays, ground, and approvals.',
        },
        {
          metric: '0',
          title: 'Silent Policy or Hold States',
          detail: 'Every block, exception, and booking failure carries explicit human-readable reasoning.',
        },
      ],
    },
    reflection: {
      quote: 'In enterprise AI, failure states and policy exceptions should be the starting point—not a retrofit to the happy path.',
      takeaway:
        'Designing Miraee proved that trust in agentic UX comes from legibility: showing the benchmark, the rule, and the recovery path right when the stakes are highest.',
    },
  },
  {
    slug: 'aarna',
    index: '02',
    title: 'Aarna',
    clientOrContext: 'Two-Sided AI Travel Marketplace',
    category: 'AI & Agentic Systems',
    tags: ['Two-Sided Marketplace', 'Conversational AI', 'Discovery Systems', 'iOS + Web'],
    year: '2025',
    accent: '#FF5435',
    accentSecondary: '#C9FF48',
    surfaceTint: 'rgba(255, 84, 53, 0.12)',
    logo: '/images/projects/aarna_logo.png',
    heroImage: '/images/projects/aarna/flow/04-trip-plan.png',
    tagline: 'An AI travel marketplace powered by Abhee—turning unstructured creator expertise into bookable supply and fuzzy traveler moods into owned itineraries.',
    thesis: 'Rigid 14-field forms were failing supply creators; disconnected search grids were failing travelers.',
    summary:
      'Aarna is a two-sided travel marketplace. As Lead Product Designer, I led the end-to-end experience across both marketplace sides: designing Abhee’s OCR-assisted conversational listing flow for creators and a mood-scoped discovery, side-by-side comparison, and unified itinerary builder for travelers.',
    facts: {
      role: 'Lead Product Designer (1 of 2 Designers)',
      scope: 'Two-Sided Marketplace · Creator Intake to Traveler Booking',
      timeline: '4 Months · Shipped to Production',
      team: '2 Product Designers · 4 Full-Stack & AI Engineers',
    },
    headlineMetrics: [
      { value: '3×', label: 'Monthly Listing Volume', detail: 'Grew supply from ~350 to ~1,100 published listings/month post-launch' },
      { value: '−40%', label: 'Creator Funnel Drop-Off', detail: 'Cut step-two abandonment from 62% down to 37% in GA4' },
      { value: '10.4K', label: 'Cumulative Signups', detail: 'Reached 10,400+ verified marketplace users within 6 months' },
      { value: '1.8s', label: 'Median Discovery Response', detail: 'Chosen over a 6.5s avatar experiment that cost 9× per session' },
    ],
    context: {
      kicker: 'Marketplace Framing',
      headline: 'Both sides of the marketplace were stuck translating human feelings into rigid database fields.',
      narrative:
        'Local travel creators had deep expertise in PDFs, brochures, and voice notes, but abandoned our 14-field web form. Meanwhile, travelers arrived with a mood ("somewhere coastal and slow for 4 days") rather than exact filter parameters, bouncing off standard search grids.',
      beforeState: {
        title: 'Before: Form & Grid Bottlenecks',
        points: [
          '14-field creator onboarding form lost 48% of sessions at the media and itinerary upload step.',
          'Manual moderator review had a 3-day backlog due to inconsistent creator text and PDF uploads.',
          'Travelers had to open 8+ tabs to compare destinations, flights, stays, and local cabs.',
          'Chat-only recommendations buried critical trade-offs (budget, weather, match score) inside long text scrolls.',
        ],
      },
      reframedState: {
        title: 'After: Abhee Dual-Side Conversational Engine',
        points: [
          'Conversation to create, form to correct: OCR parses creator brochures into a draft listing with an "Edit as Form" escape hatch.',
          'Automated quality-gate rubric scores listing completeness before human moderation.',
          'Mood-first discovery feed scopes inventory by vibe before asking travelers for hard dates.',
          'First-class side-by-side comparison views for destinations and multi-modal trip plans.',
        ],
      },
      successModel: {
        objective: 'Accelerate high-quality marketplace supply creation while helping travelers move from inspiration to a locked plan.',
        userOutcome: 'Creators verify AI-extracted drafts instead of typing from scratch; travelers compare and customize complete itineraries in one place.',
        guardrail: 'Enforce strict listing quality thresholds so AI speed never floods the marketplace with low-trust inventory.',
      },
    },
    discovery: {
      headline: 'Funnel telemetry and creator shadowing exposed the exact breaking points.',
      intro:
        'We combined GA4 funnel analysis with creator interviews, a full day shadowing marketplace moderators, and a 2-week live pilot with 8 supply creators.',
      metrics: [
        { number: '14', label: 'Legacy Form Fields', detail: 'Required upfront before a creator could preview their listing card.' },
        { number: '48%', label: 'Drop-Off at Media Step', detail: 'Nearly half of supply sessions died formatting photos and day-by-day text.' },
        { number: '6', label: 'Creator Depth Interviews', detail: 'Plus 1 full day shadowing a moderator triaging raw PDFs and WhatsApp notes.' },
        { number: '8', label: 'Pilot Creators Tested', detail: 'Two-week live pilot that surfaced the need for an inline form escape hatch.' },
      ],
      keyInsight:
        'Pilot breakthrough: 3 of 8 pilot creators loved conversational drafting for the first 80%, but hated re-prompting the AI just to fix a single price or typo. Adding a one-tap "Edit as Form" toggle solved it immediately.',
    },
    architecture: {
      headline: 'One Conversational Grammar, Two Marketplace Sides',
      description:
        'Rather than building two disconnected bots, Aarna uses a shared structured-intent engine adapted for Creator Supply Intake and Traveler Demand Planning.',
      entryNode: {
        title: 'Abhee Multimodal Core (OCR + Intent Graph)',
        subtitle: 'Extracts structured trip entities from creator PDFs/brochures and traveler natural-language moods',
      },
      lanes: [
        {
          lane: '01 · Creator Supply Pipeline',
          subtitle: 'Zero-blank-page publishing',
          nodes: [
            { title: 'Brochure & PDF OCR Prefill', detail: 'Extracts highlights, pricing, and day plans into structured JSON', badge: '−40% Drop-off' },
            { title: 'Edit-as-Form Escape Hatch', detail: 'Instant switch between guided dialogue and direct field editing' },
          ],
        },
        {
          lane: '02 · Automated Quality Gate',
          subtitle: 'Supply trust & moderation',
          nodes: [
            { title: 'Completeness & Media Scorer', detail: 'Flags missing inclusions or low-res imagery prior to submission', badge: '3× Throughput' },
            { title: 'Moderator Diff View', detail: 'Cuts 3-day review backlog by highlighting verified vs. inferred fields' },
          ],
        },
        {
          lane: '03 · Mood-Scoped Discovery',
          subtitle: 'Demand-side inspiration',
          nodes: [
            { title: 'Vibe & Pace Scoping Chips', detail: 'Filters inventory by feeling, season, and companion type', badge: '1.8s Latency' },
            { title: 'Contextual Abhee Co-Pilot', detail: 'Stays one tap away without blocking visual browsing' },
          ],
        },
        {
          lane: '04 · Comparison & Unified Plan',
          subtitle: 'High-conviction booking',
          nodes: [
            { title: 'Destination & Plan Matrix', detail: 'Side-by-side match score, budget breakdown, and trade-offs' },
            { title: 'Multi-Modal Itinerary Spine', detail: 'Resolves flights, stays, and local cabs into one owned plan', badge: 'Single Plan' },
          ],
        },
      ],
      outputNode: {
        title: 'Published Creator Experience ⇄ Bookable Traveler Itinerary',
        subtitle: 'Continuous feedback loop matching verified supply to high-intent traveler plans',
      },
      systemFlow: ['Mood Intent', 'Scoped Discover Feed', 'Abhee Co-Pilot', 'Side-by-Side Compare', 'Multi-Modal Plan', 'Owned Itinerary'],
    },
    flowSteps: [
      {
        step: '01',
        title: 'Mood & Intent Capture',
        phase: 'Intent',
        caption: 'Travelers start with a feeling, pace, or rough window rather than rigid airport codes.',
        annotation: 'Lowers activation energy for exploratory travelers who haven’t locked a destination yet.',
        image: '/images/projects/aarna/flow/01-intent.png',
      },
      {
        step: '02',
        title: 'Mood-Scoped Discovery Feed',
        phase: 'Discover',
        caption: 'Visual feed dynamically re-ranks creator experiences using mood chips and seasonal fit.',
        annotation: 'Shipped direction balances editorial photography with subtle proactive AI prompts.',
        image: '/images/projects/aarna/flow/02-discover.jpg',
      },
      {
        step: '03',
        title: 'Abhee Conversational Co-Pilot',
        phase: 'Co-Pilot',
        caption: 'One tap summons Abhee to refine constraints, ask local questions, or remix a creator’s plan.',
        annotation: 'Kept text-first in discovery (1.8s response) while reserving rich avatar mode for dedicated chat.',
        image: '/images/projects/aarna/flow/03-abhee-chat.png',
      },
      {
        step: '04',
        title: 'Structured Day-by-Day Trip Plan',
        phase: 'Itinerary',
        caption: 'Turns chat decisions into a living timeline with pacing, budgets, and bookable blocks.',
        annotation: 'Acts as the single source of truth as the traveler adds flights, stays, and ground transport.',
        image: '/images/projects/aarna/flow/04-trip-plan.png',
      },
      {
        step: '05',
        title: 'Inline Flight Resolution',
        phase: 'Transit',
        caption: 'Flight options slot directly into the trip timeline without kicking the user out to a separate funnel.',
        annotation: 'Automatically syncs arrival/departure times with Day 1 and final-day itinerary blocks.',
        image: '/images/projects/aarna/flow/05-flights.png',
      },
      {
        step: '06',
        title: 'Curated Stays matched to Vibe',
        phase: 'Stays',
        caption: 'Boutique stays and resorts filtered by the trip’s aesthetic mood and daily activity hubs.',
        annotation: 'Shows why a property matches the itinerary rather than listing generic star ratings.',
        image: '/images/projects/aarna/flow/06-stays.png',
      },
      {
        step: '07',
        title: 'Last-Mile Cab & Local Transfer Integration',
        phase: 'Ground',
        caption: 'Point-to-point intercity and local cab bookings embedded inside each day’s route.',
        annotation: 'Closes the gap between inspiration and on-the-ground logistics.',
        image: '/images/projects/aarna/flow/07-cab.png',
      },
      {
        step: '08',
        title: 'Side-by-Side Destination Comparison',
        phase: 'Compare Places',
        caption: 'Dedicated comparison surface exposing match score, weather, budget, and vibe across finalists.',
        annotation: 'Pulls complex multi-variable trade-offs out of chat bubbles into a scannable matrix.',
        image: '/images/projects/aarna/flow/08-destination-comparison.png',
      },
      {
        step: '09',
        title: 'Itinerary Variant Comparison',
        phase: 'Compare Plans',
        caption: 'Compare two versions of the same trip (e.g., Relaxed Boutique vs. High-Adventure) side by side.',
        annotation: 'Helps couples and groups align on trade-offs before locking payment.',
        image: '/images/projects/aarna/flow/09-plan-comparison.png',
      },
      {
        step: '10',
        title: 'Continuous Inspiration Stream',
        phase: 'Explore More',
        caption: 'Infinite modular discovery cards let travelers swap individual afternoon activities effortlessly.',
        annotation: 'Supports modular remixing without resetting the core trip spine.',
        image: '/images/projects/aarna/flow/10-infinite-scroll.png',
      },
      {
        step: '11',
        title: 'Owned Plan & Collaborative Readiness',
        phase: 'Ownership',
        caption: 'Finalized plan workspace ready for sharing, customization, and single-checkout execution.',
        annotation: 'Transforms passive browsing into psychological ownership of the trip.',
        image: '/images/projects/aarna/flow/11-my-plan.png',
      },
    ],
    decisions: [
      {
        number: '01',
        title: 'Conversation to create, a structured form to correct',
        tag: 'Supply UX',
        evidence:
          '48% of creators abandoned the legacy 14-field form at media upload, yet 3 of 8 pilot creators frustratedly re-ran chat prompts just to edit a single price field.',
        decision:
          'Combined OCR brochure prefill + guided conversational prompts for initial drafting with a persistent "Edit as Form" toggle for surgical field edits.',
        tradeoff:
          'Required bidirectional state sync between the chat transcript and form schema, increasing frontend state complexity.',
        impact: 'Cut step-two abandonment by 40% (62% → 37%) and tripled monthly published listings (350 → 1,100).',
        image: '/images/projects/aarna/flow/03-abhee-chat.png',
        alt: 'Abhee conversational assistant interface',
      },
      {
        number: '02',
        title: 'Kill the 3D avatar on Discover to protect latency and unit economics',
        tag: 'Product Strategy',
        evidence:
          'Our v3 animated avatar exploration was charismatic in demos, but telemetry showed median latency of 6.5s vs. 1.8s for text—at roughly 9× the compute cost per session.',
        decision:
          'Killed the persistent avatar on the high-traffic Discover feed and shipped a fast mood-scoped visual feed with lightweight proactive text nudges.',
        tradeoff:
          'Gave up a flashy visual gimmick on the landing screen to guarantee sub-2-second responsiveness during discovery.',
        impact: 'Preserved unit economics at scale as traffic grew past 10,400+ signups.',
        image: '/images/projects/aarna/flow/02-discover.jpg',
        alt: 'Aarna shipped mood-first discovery feed',
      },
      {
        number: '03',
        title: 'Elevate comparison out of chat into a dedicated decision matrix',
        tag: 'Demand UX',
        evidence:
          'Travelers struggled to weigh 3 destinations or 2 itinerary variants when details were buried across 20 scrolling chat messages.',
        decision:
          'Created dedicated Destination Comparison and Plan Comparison views that align match score, mood, budget, and pacing side by side.',
        tradeoff:
          'Added two bespoke comparison templates to build and maintain alongside the conversational flow.',
        impact: 'Turned passive inspiration browsing into high-conviction itinerary selection.',
        image: '/images/projects/aarna/flow/08-destination-comparison.png',
        alt: 'Aarna side-by-side destination comparison',
      },
    ],
    explorations: {
      headline: 'Discover Was Explored as Four Distinct Product Strategies',
      subtitle: 'Rather than testing cosmetic button colors, we prototyped four fundamentally different relationships between browsing and AI assistance.',
      items: [
        {
          version: 'Exploration v1',
          label: 'Mood-First Scoped Feed',
          status: 'Evolved',
          summary: 'Mood chips scoped the visual feed before inventory appeared.',
          whyItMatters: 'Proved to be the strongest bridge from an unstructured feeling to a useful filter.',
          image: '/images/projects/aarna/iterations/discover-v1.jpg',
        },
        {
          version: 'Exploration v2',
          label: 'Always-On Proactive Planner',
          status: 'Evolved',
          summary: 'Ready-made AI plans dominated the opening screen.',
          whyItMatters: 'Solved the cold-start problem well, but felt overly pushy when users just wanted to browse.',
          image: '/images/projects/aarna/iterations/discover-v2.jpg',
        },
        {
          version: 'Exploration v3',
          label: 'Persistent Avatar Companion',
          status: 'Killed',
          summary: 'Full-screen conversational avatar leading discovery.',
          whyItMatters: 'Killed due to 6.5s median response latency (vs. 1.8s text) and 9× session cost.',
          image: '/images/projects/aarna/iterations/discover-v3.jpg',
        },
        {
          version: 'Shipped v4',
          label: 'Balanced Mood Feed + Co-Pilot',
          status: 'Shipped',
          summary: 'Mood-scoped visual feed with subtle proactive nudges and Abhee one tap away.',
          whyItMatters: 'Delivered sub-2s speed while keeping conversational power immediately accessible.',
          image: '/images/projects/aarna/flow/02-discover.jpg',
        },
      ],
    },
    validation: {
      headline: 'Measured across pre/post GA4 funnels and a two-week creator pilot.',
      steps: [
        {
          number: '01',
          title: 'Two-Week Supply Pilot (8 Creators)',
          detail:
            'Observed real tour operators uploading PDFs and brochures. Exposed the exact moment conversation needed a structured form escape hatch.',
        },
        {
          number: '02',
          title: 'Latency vs. Engagement Trade-Off Analysis',
          detail:
            'Benchmarked streaming text+cards (1.8s median) against WebGL/video avatar synthesis (6.5s median), driving the architectural decision for Discover.',
        },
        {
          number: '03',
          title: '3-Month Pre/Post Funnel Telemetry',
          detail:
            'Tracked creator step-two completion and monthly listing volume across identical 90-day windows before and after shipping Abhee.',
        },
      ],
    },
    outcomes: {
      headline: 'The launch unlocked supply velocity, creator completion, and traveler growth.',
      caption: 'All metrics verified via internal marketplace analytics and GA4 funnels over 3-month and 6-month post-launch windows.',
      cards: [
        {
          metric: '3×',
          title: 'Monthly Listing Volume',
          detail: 'Increased from ~350 to ~1,100 published listings per month within 90 days post-launch.',
        },
        {
          metric: '−40%',
          title: 'Step-Two Creator Abandonment',
          detail: 'Reduced onboarding drop-off from 62% to 37% in GA4 across identical 3-month windows.',
        },
        {
          metric: '10.4K',
          title: 'Cumulative Signups in 6 Months',
          detail: 'Grew the marketplace user base past 10,400 signups with consistent supply quality.',
        },
      ],
    },
    reflection: {
      quote: 'Ship comparison telemetry from day one—and red-team automated quality gates before supply scales.',
      takeaway:
        'While our supply-side funnel instrumentation was airtight, we launched traveler comparison surfaces with too much qualitative intuition. Automated scoring also invites creator gaming, which requires adversarial testing early.',
    },
  },
  {
    slug: 'hita',
    index: '03',
    title: 'Hita',
    clientOrContext: 'Self-Initiated AI Product · 12-Agent Travel Companion',
    category: 'AI & Agentic Systems',
    tags: ['Multi-Agent Orchestration', '0→1 Design & Code', 'Voice + Chat UX', 'Next.js + React Native'],
    year: '2026',
    accent: '#6366F1',
    accentSecondary: '#38BDF8',
    surfaceTint: 'rgba(99, 102, 241, 0.14)',
    logo: '/images/projects/hita_logo.png',
    heroImage: '/images/projects/hita.png',
    tagline: 'A solo-built AI travel companion powered by a 12-agent orchestrator that plans and adapts trips the way a thoughtful local friend would.',
    thesis: 'Trip planning isn’t form configuration—it’s an evolving conversation shaped by weather, energy, budget, and safety.',
    summary:
      'Hita is a self-initiated product where I designed and engineered the entire stack solo—shipping a working MVP in ~6 days and iterating with real travelers. Under a calm single-chat surface, an Intent Classifier routes every message across 12 specialized agents (Memory, Voice, Heart, Itinerary, Geo, Weather, Transit, Fare Guard, Safety, and Family Share) before Hita Brain composes one cohesive human reply.',
    facts: {
      role: 'Solo Product Designer & AI Full-Stack Builder',
      scope: 'End-to-End UX, Design System, Frontend, Backend & 12-Agent Runtime',
      timeline: '~6 Days to Working MVP · Continuously Evolving',
      team: 'Solo Build (Next.js 15, Expo RN, Fastify, Supabase, Claude API)',
    },
    headlineMetrics: [
      { value: '12', label: 'Specialized AI Agents', detail: 'Orchestrated under a single calm conversational persona (Hita Brain)' },
      { value: '6 Days', label: 'Concept to Working MVP', detail: 'Designed and coded full-stack solo using an AI-native workflow' },
      { value: '4', label: 'Autonomous Agent Lanes', detail: 'Understand, Plan, Move & Money, and Safety working in parallel' },
      { value: '1-Tap', label: 'Persistent SOS Header', detail: 'Moved out of a nested menu after live weekend field testing' },
    ],
    context: {
      kicker: 'Origin & Problem Framing',
      headline: 'Most travel apps treat human trips like static spreadsheets that break the moment it rains.',
      narrative:
        'Travelers don’t think in rigid filter checkboxes; they think in situational intents like "It’s 38°C outside—let’s do something indoors now and head out when it’s cooler." Yet existing AI travel bots either dump walls of generic markdown or expose raw tool-calling logs that overwhelm the traveler.',
      beforeState: {
        title: 'Why Existing Travel Planners Fail in the Field',
        points: [
          'Static day plans collapse when afternoon heat, rain, transit delays, or traveler fatigue hit.',
          'Multi-agent AI demos expose noisy tool calls and JSON logs, making the chat read like a server terminal.',
          'Critical safety features (live family sharing, area risk advisories, SOS) are buried inside settings menus.',
          'No persistent memory of dietary needs, walking pace, or budget sensitivity across turns.',
        ],
      },
      reframedState: {
        title: 'Hita’s Friend-First, Multi-Agent Architecture',
        points: [
          'One calm voice on the surface (Hita Brain) backed by 12 specialized domain agents underneath.',
          'Strict separation between the conversational reply and the inspectable agent activity stream.',
          'Real-time environmental adaptation: Weather, Geo, and Transit agents re-sequence plans on the fly.',
          'Safety elevated to a persistent header primitive with 1-tap SOS and live Family Share.',
        ],
      },
      successModel: {
        objective: 'Prove that a solo designer-builder can ship a multi-agent consumer product that feels warm, adaptive, and trustworthy.',
        userOutcome: 'Travelers converse naturally by voice or text while Hita silently coordinates weather, fares, routes, and safety.',
        guardrail: 'Never merge raw agent telemetry into the conversational reply; proof stays inspectable on demand, invisible by default.',
      },
    },
    discovery: {
      headline: 'Built in 6 days, then stress-tested in the real world over two weekends.',
      intro:
        'Rather than stopping at static Figma mocks, I built the working orchestration runtime and put it in the hands of 6 friends-and-family testers planning real weekend outings.',
      metrics: [
        { number: '6', label: 'Days to Working MVP', detail: 'Full design system in Figma + working Next.js 15, Expo, Fastify & Claude API build.' },
        { number: '12', label: 'Orchestrated Agents', detail: 'Specialized prompts and tool routers coordinated by an Intent Classifier.' },
        { number: '6', label: 'Field Beta Testers', detail: 'Observed across two weekends of real-world trip planning and mid-day changes.' },
        { number: '2', label: 'Separated UI Surfaces', detail: 'Conversational thread vs. inspectable Agent Activity Drawer.' },
      ],
      keyInsight:
        'Field testing insight that changed the UI: Testers loved the conversational warmth, but when simulating an unfamiliar night commute, 2 testers couldn’t find the emergency share feature inside the profile menu. Safety cannot live two taps deep—I promoted SOS and Family Share to the persistent top header.',
    },
    architecture: {
      headline: 'The 12-Agent Orchestration Blueprint',
      description:
        'Every user message passes through an Intent Classifier that dispatches parallel tasks across four specialist lanes before Hita Brain synthesizes a single empathetic response.',
      entryNode: {
        title: 'Intent Classifier & Context Router',
        subtitle: 'Parses voice/text input, attaches active geolocation & time, and dispatches specialist agents in parallel',
      },
      lanes: [
        {
          lane: 'Lane 01 · Understand',
          subtitle: 'Memory, modality & empathy',
          nodes: [
            { title: 'Memory Agent', detail: 'Retains pace, dietary rules, budget ceiling, and past trip preferences', badge: 'Stateful' },
            { title: 'Voice & Heart Agents', detail: 'Hands-free speech I/O paired with tone & traveler fatigue calibration' },
          ],
        },
        {
          lane: 'Lane 02 · Plan',
          subtitle: 'Dynamic spatial scheduling',
          nodes: [
            { title: 'Itinerary & Geo Agents', detail: 'Sequences day blocks and uncovers hyper-local hidden gems nearby' },
            { title: 'Weather Agent', detail: 'Monitors heat/rain spikes and swaps outdoor blocks for indoor alternatives', badge: 'Adaptive' },
          ],
        },
        {
          lane: 'Lane 03 · Move & Money',
          subtitle: 'Logistics & price protection',
          nodes: [
            { title: 'Transit Agent', detail: 'Computes realistic last-mile travel times between itinerary stops' },
            { title: 'Fare Guard Agent', detail: 'Watches flight/stay rates and triggers rebooking alerts on price drops', badge: 'Cost Guard' },
          ],
        },
        {
          lane: 'Lane 04 · Safety',
          subtitle: 'Proactive traveler protection',
          nodes: [
            { title: 'Safety Agent', detail: 'Surfaces neighborhood advisories, late-night routing, and emergency help' },
            { title: 'Family Share Agent', detail: 'Streams live itinerary check-ins and location to trusted contacts', badge: '1-Tap Header' },
          ],
        },
      ],
      outputNode: {
        title: 'Hita Brain (Unified Response Composer + Separate Activity Layer)',
        subtitle: 'Merges multi-agent outputs into one human reply while logging agent proof in an inspectable drawer',
      },
      systemFlow: ['Voice/Text Turn', 'Intent Classifier', '12 Parallel Specialist Agents', 'Hita Brain Synthesis', 'Adaptive Plan Card + Activity Proof'],
    },
    flowSteps: [
      {
        step: '01',
        title: 'Conversational Trip Kickoff & Live Adaptation',
        phase: 'Unified Workspace',
        caption: 'Hita replaces multi-page booking forms with an adaptive conversational workspace and live itinerary canvas.',
        annotation: 'Separates the warm Hita Brain response from the underlying 12-agent telemetry and persistent safety controls.',
        image: '/images/projects/hita.png',
      },
    ],
    decisions: [
      {
        number: '01',
        title: 'Strict separation between Conversation and the Agent Activity Stream',
        tag: 'Agentic Architecture',
        evidence:
          'When early prototypes showed inline status pills for Weather, Geo, and Fare Guard inside the chat bubble, every answer read like a debugging console and broke conversational trust.',
        decision:
          'Restricted the main chat thread strictly to Hita Brain’s synthesized voice, while housing the 12 agents’ tool calls and reasoning inside a dedicated, inspectable Activity Layer.',
        tradeoff:
          'Users have to tap once to inspect raw agent proof, but the primary experience remains calm, human, and scannable.',
        impact: 'Created the signature trust model of the product: invisible machinery when you want a friend, inspectable proof when you want verification.',
        image: '/images/projects/hita.png',
        alt: 'Hita interface preview showing conversational workspace',
      },
      {
        number: '02',
        title: 'Elevate SOS & Family Share from the menu into the persistent header',
        tag: 'Safety UX',
        evidence:
          'During weekend field testing with 6 users, participants praised the itinerary adaptation but hesitated when asked to trigger location sharing quickly.',
        decision:
          'Promoted the Safety & Family Share controls out of the secondary drawer directly into the persistent top navigation bar.',
        tradeoff:
          'Consumes permanent header real estate on mobile viewports, which required compacting secondary profile actions.',
        impact: 'Guaranteed zero-search, 1-tap access to emergency and family-tracking features at any point in the journey.',
        image: '/images/projects/hita.png',
        alt: 'Hita safety and conversational interface',
      },
      {
        number: '03',
        title: 'Schedule by environmental context (heat, rain, fatigue), not rigid clock slots',
        tag: 'Contextual AI',
        evidence:
          'Standard AI itineraries schedule outdoor walking tours at 2:00 PM regardless of 40°C heat or monsoon downpours, forcing travelers to abandon the plan.',
        decision:
          'Wired the Weather, Geo, and Heart agents to evaluate time-of-day heat indexes and cumulative walking load before sequencing activities.',
        tradeoff:
          'Requires multi-agent coordination on every itinerary mutation rather than a single one-shot LLM prompt.',
        impact: 'Produced plans that adapt naturally to "Let’s stay indoors until evening" without manual drag-and-drop editing.',
        image: '/images/projects/hita.png',
        alt: 'Hita contextual scheduling preview',
      },
    ],
    validation: {
      headline: 'Validated through full-stack prototyping and real-world weekend testing.',
      steps: [
        {
          number: '01',
          title: '6-Day Solo Design-to-Code Sprint',
          detail:
            'Built the production runtime using Next.js 15, Expo React Native, Fastify, Supabase, Claude API, and Razorpay to test real latency and agent handoffs.',
        },
        {
          number: '02',
          title: 'Two-Weekend Field Testing (6 Testers)',
          detail:
            'Tested with 6 friends and family members on live outings, uncovering the critical SOS discoverability insight.',
        },
        {
          number: '03',
          title: 'Prompt & Orchestration Compression',
          detail:
            'Tuned the Intent Classifier so simple turns trigger 1–2 agents instead of all 12, keeping conversational latency snappy.',
        },
      ],
    },
    outcomes: {
      headline: 'Proved how a designer-engineer can ship multi-agent AI end to end.',
      caption: 'Hita is an active, self-initiated working product demonstrating 0→1 product ownership, agentic UX architecture, and production engineering.',
      cards: [
        {
          metric: '12',
          title: 'Coordinated Specialist Agents',
          detail: 'Spanning memory, voice, empathy, itinerary, weather, transit, fare protection, and safety.',
        },
        {
          metric: '~6d',
          title: 'Zero to Working Full-Stack MVP',
          detail: 'Designed in Figma and built solo across web, mobile, backend, and LLM orchestration.',
        },
        {
          metric: '6',
          title: 'Real-World Testers in Field UAT',
          detail: 'Validated conversational adaptation and drove the persistent safety header redesign.',
        },
      ],
    },
    reflection: {
      quote: 'When a designer can prototype directly with live multi-agent orchestration, you stop guessing how AI feels and start designing how it behaves.',
      takeaway:
        'Building Hita solo sharpened my conviction that the hardest problem in AI UX is orchestration legibility—deciding what the model should handle silently versus what the user must explicitly control.',
    },
  },
  {
    slug: 'mondee',
    index: '04',
    title: 'Mondee',
    clientOrContext: 'Enterprise Travel Operations Platform',
    category: 'Enterprise & B2B',
    tags: ['High-Density B2B', 'Information Architecture', 'Design Systems', 'Web + Mobile'],
    year: '2023 — 2025',
    accent: '#EF6348',
    accentSecondary: '#FFD166',
    surfaceTint: 'rgba(239, 99, 72, 0.12)',
    logo: '/images/projects/mondee_logo_v2.png',
    heroImage: '/images/projects/mondee/flow/02-search-results.png',
    tagline: 'An enterprise travel operations platform engineered so agents can scan complex inventory, explain fare rules, and close bookings at speed.',
    thesis: 'A professional travel agent doesn’t need fewer choices—they need a faster, defensible way to compare and explain the right one.',
    summary:
      'Mondee powers travel agents and enterprise partners managing high-volume, detail-heavy bookings. I designed the core search comparison grammar, inline fare-flexibility decision layer, cross-product package views, and mobile checkout so operational speed never comes at the expense of rule clarity.',
    confidentialityNote:
      'Shipped enterprise platform work. Screens are shown for portfolio evaluation; partner-specific business rules and internal conversion metrics remain NDA-protected.',
    facts: {
      role: 'Senior UI/UX Product Designer',
      scope: 'Agent Booking Platform · Search, Fares, Packages & Mobile Checkout',
      timeline: 'Multi-Release Production System',
      team: 'Product Management, B2B Engineering & Travel Operations',
    },
    headlineMetrics: [
      { value: '5', label: 'Core Booking Surfaces', detail: 'Unified across Home, Search, Flexible Fares, Packages, and Mobile Checkout' },
      { value: '1', label: 'Cross-Product Grammar', detail: 'Shared scan hierarchy spanning flights, vacation packages, and checkout' },
      { value: '3-Tier', label: 'Strict Visual Scan Order', detail: 'Route & schedule first → Fare & availability → Deep penalty rules' },
      { value: 'WCAG AA', label: 'High-Density Legibility', detail: 'Engineered for all-day agent operations across desktop and mobile' },
    ],
    context: {
      kicker: 'Operational Reality',
      headline: 'In B2B travel operations, information density isn’t a bug—unclear hierarchy is.',
      narrative:
        'Consumer travel sites can hide fare rules behind tiny footnotes because the user is buying for themselves. Enterprise travel agents, however, are on the phone or messaging with a client while juggling airline schedules, cabin availability, commission rules, and refund penalties simultaneously.',
      beforeState: {
        title: 'Friction in Legacy Agent Workflows',
        points: [
          'Result rows mixed route times, partner tags, and fare rules without a predictable eye-scan path.',
          'Change and cancellation conditions were buried after flight selection, causing late-stage booking reversals.',
          'Flights and vacation packages used completely different card layouts, forcing agents to context-switch.',
          'Desktop-heavy checkout flows broke down when agents needed to lock a hold or complete payment on mobile.',
        ],
      },
      reframedState: {
        title: 'Mondee Operational Comparison System',
        points: [
          'Enforce a strict 3-zone scan order on every result row: Route/Time → Fare/Inventory → Progressive Rule Inspection.',
          'Surface fare flexibility (refundability, change fees, protection) as a comparable layer at the moment of selection.',
          'Extend the exact same card and filter grammar from Flights into Packages and Mobile Checkout.',
          'Preserve upstream fare-rule context all the way through final mobile confirmation.',
        ],
      },
      successModel: {
        objective: 'Turn high-density global travel inventory into a rapid, defensible agent decision.',
        userOutcome: 'Agents can compare options repeatedly and explain fare rules to a client in seconds without losing their place.',
        guardrail: 'Never oversimplify B2B interfaces by hiding critical operational rules.',
      },
    },
    discovery: {
      headline: 'Designed around the surfaces agents return to hundreds of times a day.',
      intro:
        'Working closely with product managers, engineers, and travel operations specialists, I mapped how agents scan, shortlist, explain, and close bookings across product lines.',
      metrics: [
        { number: '5', label: 'End-to-End Surfaces', detail: 'Command Home, Dense Search, Flexible Ticket Layer, Packages, and Checkout.' },
        { number: '3', label: 'Progressive Scan Zones', detail: 'Primary route/time, secondary fare/seats, tertiary rule drawer.' },
        { number: '2', label: 'Inventory Verticals Unified', detail: 'Scheduled flights and multi-component travel packages.' },
        { number: '100%', label: 'Rule Visibility at Choice', detail: 'Refund and change conditions surfaced before checkout entry.' },
      ],
      keyInsight:
        'Operational insight: Agents often compare options before the traveler is ready to commit. Making every row show 100% of legal text slowed scanning to a crawl; hiding rules until checkout caused errors. The solution was progressive disclosure anchored to the fare selection state.',
    },
    architecture: {
      headline: 'Cross-Product Operational Booking Architecture',
      description:
        'A unified layout and state grammar that scales from single-leg flight lookups to multi-component packages and mobile checkout.',
      entryNode: {
        title: 'Multi-Modal Agent Command Bar',
        subtitle: 'Rapid route, cabin, passenger, and partner-code entry optimized for repeat daily lookups',
      },
      lanes: [
        {
          lane: '01 · High-Speed Scan Hierarchy',
          subtitle: 'Dense search results',
          nodes: [
            { title: 'Strict 3-Column Row Rhythm', detail: 'Schedule & carrier left, duration/stops center, fare & seat count right', badge: 'Fast Scan' },
            { title: 'Persistent Filter Rail', detail: 'Instant slicing by layover window, carrier alliance, and fare family' },
          ],
        },
        {
          lane: '02 · Inline Fare Flexibility',
          subtitle: 'Defensible client advice',
          nodes: [
            { title: 'Side-by-Side Protection Tiers', detail: 'Exposes change, refund, and baggage trade-offs alongside price delta', badge: 'Zero Surprise' },
            { title: 'Shareable Rule Summary', detail: 'Structured so an agent can read the exact condition aloud to a client' },
          ],
        },
        {
          lane: '03 · Cross-Vertical Extension',
          subtitle: 'Flights to Packages parity',
          nodes: [
            { title: 'Shared Card & Action Grammar', detail: 'Packages inherit flight filter placement, typography, and CTA hierarchy' },
            { title: 'Bundled Margin & Value Cues', detail: 'Highlights combined stay + flight value without breaking scan order' },
          ],
        },
        {
          lane: '04 · Continuity to Mobile Checkout',
          subtitle: 'Close from anywhere',
          nodes: [
            { title: 'Rule-Preserving Checkout Summary', detail: 'Carries selected flexibility tier and fare rules into mobile payment', badge: 'Cross-Device' },
            { title: 'Fast Traveler & Payment Lock', detail: 'Streamlined mobile completion for time-sensitive fare holds' },
          ],
        },
      ],
      outputNode: {
        title: 'Ticketed PNR with Full Rule & Flexibility Audit Trail',
        subtitle: 'Consistent operational experience across desktop workstations and mobile devices',
      },
      systemFlow: ['Agent Command Home', '3-Zone Search Scan', 'Inline Fare Flexibility', 'Package Extension', 'Mobile Checkout Lock'],
    },
    flowSteps: [
      {
        step: '01',
        title: 'Agent Command & Discovery Home',
        phase: 'Home',
        caption: 'High-clarity entry surface balancing rapid multi-city search with curated partner inventory.',
        annotation: 'Establishes the typographic and grid rhythm used across all downstream booking tools.',
        image: '/images/projects/mondee/flow/01-home.jpg',
      },
      {
        step: '02',
        title: 'High-Density Flight Search Results',
        phase: 'Search & Scan',
        caption: 'Result rows organized in a strict left-to-right scan order for rapid multi-option comparison.',
        annotation: 'Separates immediate comparison signals (time, stops, price) from secondary inspection details.',
        image: '/images/projects/mondee/flow/02-search-results.png',
      },
      {
        step: '03',
        title: 'Inline Flexible Ticket Decision Layer',
        phase: 'Decide Rules',
        caption: 'Change, cancellation, and protection tiers surfaced directly at the moment of fare selection.',
        annotation: 'Turns hidden fine print into a clear, comparable value decision an agent can explain to a traveler.',
        image: '/images/projects/mondee/flow/03-flexible-ticket.png',
      },
      {
        step: '04',
        title: 'Unified Travel Packages Workspace',
        phase: 'Extend System',
        caption: 'Packages inherit the exact same hierarchy, filter logic, and action placement as flights.',
        annotation: 'Allows agents to cross-sell bundled inventory without adapting to a new UI mental model.',
        image: '/images/projects/mondee/flow/04-packages.png',
      },
      {
        step: '05',
        title: 'Context-Preserving Mobile Checkout',
        phase: 'Mobile Checkout',
        caption: 'Responsive mobile checkout retains fare flexibility badges and trip summary details through payment.',
        annotation: 'Enables agents and travelers to lock expiring holds away from their desktop workstation.',
        image: '/images/projects/mondee/flow/05-mobile-checkout.png',
      },
    ],
    decisions: [
      {
        number: '01',
        title: 'Optimize result rows for repeated scanning, not consumer browsing',
        tag: 'Visual Hierarchy',
        evidence:
          'Each flight option carries carrier, schedule, layovers, cabin class, seat count, fare family, and partner rules. Displaying all of them at equal weight created visual fatigue during long shifts.',
        decision:
          'Engineered a strict 3-tier scan order: route and times anchor the left, fare and seat urgency anchor the right, and secondary rules sit one deliberate click deeper.',
        tradeoff:
          'Moves granular baggage/penalty tables one click deeper rather than expanding every row by default.',
        impact: 'Dramatically improved vertical scan speed across 50+ flight results while keeping full detail one click away.',
        image: '/images/projects/mondee/flow/02-search-results.png',
        alt: 'Mondee flight search results',
      },
      {
        number: '02',
        title: 'Surface fare flexibility at the decision point, not as a checkout footnote',
        tag: 'Decision Support',
        evidence:
          'Refundability and change penalties directly dictate whether a business or family fare is worth buying, yet legacy flows hid them until the final review screen.',
        decision:
          'Designed an inline Flexible Ticket comparison step that pairs price deltas directly with cancellation and change protection rules.',
        tradeoff:
          'Introduces one explicit tier-selection interaction prior to checkout.',
        impact: 'Prevented downstream rebooking disputes and made upselling flexible fares transparent and defensible.',
        image: '/images/projects/mondee/flow/03-flexible-ticket.png',
        alt: 'Mondee flexible ticket options',
      },
      {
        number: '03',
        title: 'Enforce one shared layout grammar across Flights and Packages',
        tag: 'Design Systems',
        evidence:
          'Agents switch between flight-only bookings and bundled packages throughout the day; divergent layouts slowed onboarding and engineering velocity.',
        decision:
          'Built Packages on the exact same filter rail, card anatomy, and price-summary grammar as Flights.',
        tradeoff:
          'Constrained bespoke magazine-style art direction on package pages in favor of operational predictability.',
        impact: 'Reduced cognitive switching costs for agents and accelerated frontend component reuse.',
        image: '/images/projects/mondee/flow/04-packages.png',
        alt: 'Mondee travel packages interface',
      },
    ],
    validation: {
      headline: 'Reviewed continuously with travel operations, product, and engineering teams.',
      steps: [
        {
          number: '01',
          title: 'Operational Scan-Path Reviews',
          detail:
            'Walked through dense multi-leg search scenarios with operations leads to verify that critical fare conditions were never obscured.',
        },
        {
          number: '02',
          title: 'Cross-Vertical Component Stress-Testing',
          detail:
            'Validated the shared card grammar against edge-case airline combinations, code-shares, and multi-room package bundles.',
        },
        {
          number: '03',
          title: 'Desktop-to-Mobile Checkout Continuity',
          detail:
            'Ensured that fare rules and flexibility tiers selected on desktop remained legible on narrow mobile checkout viewports.',
        },
      ],
    },
    outcomes: {
      headline: 'Delivered a cohesive, scalable operating model for complex B2B travel inventory.',
      caption: 'Shipped as part of Mondee’s enterprise travel platform. Specific financial and partner telemetry remain confidential.',
      cards: [
        {
          metric: '5',
          title: 'Connected Production Surfaces',
          detail: 'Spanning Home, Search Results, Fare Flexibility, Packages, and Mobile Checkout.',
        },
        {
          metric: '1',
          title: 'Reusable Comparison Grammar',
          detail: 'Unified layout and interaction tokens across multiple travel inventory lines.',
        },
        {
          metric: '100%',
          title: 'Upfront Rule Transparency',
          detail: 'Change and cancellation rules elevated to the moment of fare selection.',
        },
      ],
    },
    reflection: {
      quote: 'In enterprise B2B software, clarity is not the absence of information—it is the ability to find the exact detail that changes the decision.',
      takeaway:
        'Consistent design-system patterns absorb operational complexity so human agents don’t have to re-learn the interface every time they switch product categories.',
    },
  },
  {
    slug: 'equora',
    index: '05',
    title: 'Equora',
    clientOrContext: 'Self-Custody Web3 & Crypto Wallet',
    category: 'Consumer & Fintech',
    tags: ['Fintech & Trust UX', 'Risk-Proportional Friction', 'Mobile iOS', 'Design System'],
    year: '2025',
    accent: '#7C5CFF',
    accentSecondary: '#A6F1BC',
    surfaceTint: 'rgba(124, 92, 255, 0.14)',
    logo: '/images/projects/equora_logo-transparent.png',
    heroImage: '/images/projects/equora/flow/04-home.png',
    tagline: 'A self-custody crypto wallet engineered around risk-proportional friction—calm and effortless for safe actions, deliberate for irreversible ones.',
    thesis: 'In self-custody fintech, the interface is not decoration—it is the primary safety system.',
    summary:
      'Equora is an end-to-end mobile wallet concept designed for holders who want full self-custody without decoding a noisy day-trader terminal. Across 11 core flow screens and 4 home-architecture explorations, I designed a risk-aware interaction model that removes ceremony from low-risk orientation while introducing intentional, comprehension-first friction before irreversible transfers.',
    facts: {
      role: 'Lead Product Designer (Independent Concept)',
      scope: 'End-to-End Mobile App · Onboarding, Custody, Swap, Buy & Transfer',
      timeline: '4 Weeks · Solo Product & Visual System',
      team: 'Solo Product Strategy, Interaction Architecture & Prototyping',
    },
    headlineMetrics: [
      { value: '11', label: 'End-to-End Flow Screens', detail: 'Covering first launch, seed custody, holdings, market, swap, buy, send & receive' },
      { value: '4', label: 'Home Architecture Variants', detail: 'Explored density vs. composure trade-offs before selecting the final hierarchy' },
      { value: '2-Speed', label: 'Risk-Proportional UX Model', detail: 'Zero-ceremony orientation vs. high-clarity irreversible confirmation' },
      { value: '100%', label: 'Pre-Sign Consequence Visibility', detail: 'Network, fee, rate, and recipient verified before irreversible execution' },
    ],
    context: {
      kicker: 'Category Challenge',
      headline: 'Most crypto wallets treat every tap with the same weight—whether you’re checking a balance or sending life savings.',
      narrative:
        'First-time self-custody holders face two opposite failure modes in existing wallets: onboarding rushes them past an irreversible 12-word recovery phrase as if it were a routine cookie banner, while the home screen bombards them with ticker charts, hex addresses, and gas sliders before they even know what they own.',
      beforeState: {
        title: 'Where Standard Self-Custody Wallets Break Trust',
        points: [
          'Seed phrase backup is treated as a skippable checkbox, leading to permanent loss of funds if a device is lost.',
          'Home screens prioritize volatile 24h trading tickers and raw hex strings over clear portfolio value.',
          'Irreversible "Send" transactions use the same casual swipe or tap weight as viewing a QR code.',
          'Gas fees, slippage, and network mismatches are hidden in expandable accordions during swaps.',
        ],
      },
      reframedState: {
        title: 'Equora Risk-Proportional Architecture',
        points: [
          'Slow down the moment a person becomes their own bank: frame recovery phrase backup as an explicit responsibility ceremony.',
          'Lead the home surface with total fiat value and 4 calm primary actions; keep deep token telemetry one intentional tap away.',
          'Scale interaction friction directly to reversibility: instant QR receive vs. multi-checkpoint Send & Swap verification.',
          'Use semantic color tokens (calm violet vs. high-signal mint/amber) to signal transaction finality.',
        ],
      },
      successModel: {
        objective: 'Make the real-world consequences of every wallet action legible before the action becomes irreversible on-chain.',
        userOutcome: 'Holders feel calm and oriented during everyday portfolio checks, and fully informed before signing a transaction.',
        guardrail: 'Never make an irreversible on-chain transfer feel as casual as a reversible UI navigation.',
      },
    },
    discovery: {
      headline: 'Auditing custody failure modes across onboarding, orientation, and transfer.',
      intro:
        'I deconstructed the cognitive load of mainstream self-custody wallets across three critical moments: key creation, daily balance check, and asset movement.',
      metrics: [
        { number: '3', label: 'Risk Tiers Mapped', detail: 'Read-only orientation, reversible configuration, and irreversible on-chain execution.' },
        { number: '4', label: 'Home Layouts Prototyped', detail: 'Tested compact trader tabs, address-forward, big tiles, and balanced holdings.' },
        { number: '11', label: 'High-Fidelity Screens', detail: 'Complete dark-mode visual system with custom token iconography.' },
        { number: '0', label: 'Hidden Fee Accordions', detail: 'All swap rates, network fees, and recipient checks visible above the fold.' },
      ],
      keyInsight:
        'Design principle that drove every screen: Friction is not the enemy—misplaced friction is. Adding 15 seconds of clarity to seed-phrase backup and transaction signing is a feature, not a bug.',
    },
    architecture: {
      headline: 'Risk-Proportional Interaction Architecture',
      description:
        'Equora dynamically shifts its visual density and confirmation weight based on whether the user is orienting, configuring, or signing an irreversible transaction.',
      entryNode: {
        title: 'Wallet Initialization & Custody Boundary',
        subtitle: 'Establishes device encryption password + explicit 12-word recovery phrase verification',
      },
      lanes: [
        {
          lane: 'Tier 01 · Deliberate Custody Setup',
          subtitle: 'High-comprehension onboarding',
          nodes: [
            { title: 'Device Password Layer', detail: 'Separates local app unlock from on-chain seed recovery' },
            { title: 'Ceremonial Seed Backup', detail: 'Explains why support cannot reset keys before revealing the 12 words', badge: 'High Friction' },
          ],
        },
        {
          lane: 'Tier 02 · Zero-Ceremony Orientation',
          subtitle: 'Calm daily portfolio check',
          nodes: [
            { title: 'Value-First Home Hierarchy', detail: 'Total balance + 4 primary actions (Send, Receive, Buy, Swap) above holdings', badge: 'Low Friction' },
            { title: 'Progressive Market Detail', detail: 'Clean asset list expands into historical charts and token metrics on tap' },
          ],
        },
        {
          lane: 'Tier 03 · Guided Liquidity & Fiat On-Ramp',
          subtitle: 'Transparent conversion',
          nodes: [
            { title: 'Deterministic Swap Quote', detail: 'Shows exact exchange rate, network fee, and minimum received inline' },
            { title: 'Familiar Fiat Buy Flow', detail: 'Bridges Apple Pay / card rails into self-custody without jargon' },
          ],
        },
        {
          lane: 'Tier 04 · High-Intent Transfer Guard',
          subtitle: 'Irreversible execution safety',
          nodes: [
            { title: 'Effortless Receive QR', detail: 'One-tap address & QR sharing since incoming funds carry zero loss risk', badge: 'Fast Path' },
            { title: 'Explicit Send Checkpoint', detail: 'Elevates recipient address, network match, and total debit before signing', badge: 'Guarded Path' },
          ],
        },
      ],
      outputNode: {
        title: 'Verified On-Chain Execution with Human-Readable Receipt',
        subtitle: 'Clear finality state without overwhelming hex logs',
      },
      systemFlow: ['Start & Custody Framing', 'Password & Seed Ceremony', 'Calm Holdings Home', 'Market & Swap Inspection', 'Guarded Send / Instant Receive'],
    },
    flowSteps: [
      {
        step: '01',
        title: 'Trust-First Welcome & Entry',
        phase: 'Entry',
        caption: 'Clean dark-mode entry distinguishes creating a new self-custody vault from importing an existing seed.',
        annotation: 'Sets a composed, high-craft financial tone rather than hype-driven crypto graphics.',
        image: '/images/projects/equora/flow/01-start-menu.png',
      },
      {
        step: '02',
        title: 'Local Device Password Creation',
        phase: 'Local Security',
        caption: 'Establishes local biometric/password protection and clarifies its role vs. the recovery phrase.',
        annotation: 'Prevents the common misconception that a local app password can recover funds on a new phone.',
        image: '/images/projects/equora/flow/02-create-password.png',
      },
      {
        step: '03',
        title: 'Deliberate Recovery Phrase Ceremony',
        phase: 'Custody Ceremony',
        caption: 'Structured 12-word seed phrase reveal with explicit permanence framing.',
        annotation: 'Intentional speed bump: slows the user down at the exact moment they become their own bank.',
        image: '/images/projects/equora/flow/03-recovery-phrase.png',
      },
      {
        step: '04',
        title: 'Value-First Portfolio Home',
        phase: 'Holdings Home',
        caption: 'Selected home direction balances total portfolio value, 4 quick actions, and immediate token holdings.',
        annotation: 'Eliminates address noise and multi-tab clutter so holders know where they stand in 1 second.',
        image: '/images/projects/equora/flow/04-home.png',
      },
      {
        step: '05',
        title: 'Scannable Market Watchlist',
        phase: 'Market',
        caption: 'Curated market overview with clean sparklines and semantic gain/loss indicators.',
        annotation: 'Separates market exploration from personal holdings to keep the home screen calm.',
        image: '/images/projects/equora/flow/05-market.png',
      },
      {
        step: '06',
        title: 'Deep Asset & Chart Inspection',
        phase: 'Asset Detail',
        caption: 'Interactive timeframe charts, position summary, and direct buy/swap actions per token.',
        annotation: 'Provides trader-grade depth one tap away without polluting the top-level wallet view.',
        image: '/images/projects/equora/flow/06-market-detail.png',
      },
      {
        step: '07',
        title: 'Transparent Token Swap',
        phase: 'Swap',
        caption: 'Dual-token conversion card showing live rate, slippage tolerance, and network fee upfront.',
        annotation: 'No hidden fee accordions—every variable that affects output value is visible before confirmation.',
        image: '/images/projects/equora/flow/07-swap.png',
      },
      {
        step: '08',
        title: 'Fiat-to-Crypto Buy Calculator',
        phase: 'Buy Amount',
        caption: 'Clean fiat keypad with instant token conversion preview and preset amount chips.',
        annotation: 'Makes topping up a self-custody wallet feel as familiar as a modern neobank transfer.',
        image: '/images/projects/equora/flow/08-buy.png',
      },
      {
        step: '09',
        title: 'Payment Rail & Fee Breakdown',
        phase: 'Buy Checkout',
        caption: 'Explicit comparison of payment method, processing fee, and final delivered token amount.',
        annotation: 'Builds trust during fiat on-ramping by eliminating surprise spread charges.',
        image: '/images/projects/equora/flow/09-buy-payment.png',
      },
      {
        step: '10',
        title: 'High-Intent Send Verification',
        phase: 'Guarded Send',
        caption: 'Deliberate transfer screen highlighting recipient address, asset amount, and network fee.',
        annotation: 'Puts proportional friction right where an on-chain mistake cannot be undone.',
        image: '/images/projects/equora/flow/10-send.png',
      },
      {
        step: '11',
        title: 'Zero-Friction Receive QR',
        phase: 'Instant Receive',
        caption: 'High-contrast QR code and one-tap address copy for receiving assets safely.',
        annotation: 'Because receiving funds is low-risk, the UI strips away unnecessary steps.',
        image: '/images/projects/equora/flow/11-receive.png',
      },
    ],
    decisions: [
      {
        number: '01',
        title: 'Slow down the exact moment a user becomes their own bank',
        tag: 'Onboarding Trust',
        evidence:
          'Unlike Web2 apps, losing a self-custody recovery phrase means permanent loss of funds with zero support recourse, yet many wallets encourage users to "Skip for now."',
        decision:
          'Designed the recovery phrase screen as a high-contrast, deliberate security step with plain-language framing before active wallet usage.',
        tradeoff:
          'Increases time-to-first-screen during onboarding by ~30 seconds.',
        impact: 'Prioritizes comprehension and custody safety over superficial activation speed.',
        image: '/images/projects/equora/flow/03-recovery-phrase.png',
        alt: 'Equora recovery phrase screen',
      },
      {
        number: '02',
        title: 'Lead the home screen with portfolio value, not hex addresses or trader tabs',
        tag: 'Information Hierarchy',
        evidence:
          'Early explorations showed that foregrounding wallet addresses or dense multi-tab market tables forced holders to decode the UI before seeing their balance.',
        decision:
          'Selected a composed balance-first layout with 4 compact action pills so token holdings remain immediately visible above the fold.',
        tradeoff:
          'Power traders must tap once into the Market tab for multi-list filtering.',
        impact: 'Delivered an approachable default hierarchy that still scales to multi-asset portfolios.',
        image: '/images/projects/equora/flow/04-home.png',
        alt: 'Equora wallet home screen',
      },
      {
        number: '03',
        title: 'Scale confirmation friction in direct proportion to action reversibility',
        tag: 'Risk Architecture',
        evidence:
          'Sending crypto to a wrong address or network is irreversible, whereas sharing a receive QR code carries minimal execution risk.',
        decision:
          'Made Receive an instant 1-tap sheet while structuring Send and Swap around explicit recipient, rate, and fee verification.',
        tradeoff:
          'Adds an extra visual checkpoint before outbound funds move.',
        impact: 'Prevented casual mis-taps on high-stakes actions while keeping everyday navigation effortless.',
        image: '/images/projects/equora/flow/10-send.png',
        alt: 'Equora send transaction screen',
      },
    ],
    explorations: {
      headline: 'Four Home-Screen Architectures Explored for Trust & Composure',
      subtitle: 'We evaluated four structural directions to balance portfolio legibility, action access, and holdings density.',
      items: [
        {
          version: 'Exploration A',
          label: 'Compact Balance + Trader Tabs',
          status: 'Explored',
          summary: 'Dense balance header paired with multi-category trading tabs.',
          whyItMatters: 'Served active traders well but made the opening view feel overly technical for everyday holders.',
          image: '/images/projects/equora/explorations/home-alt1.png',
        },
        {
          version: 'Exploration B',
          label: 'Address-Forward Header',
          status: 'Killed',
          summary: 'Elevated the public wallet address and copy controls to the hero zone.',
          whyItMatters: 'Killed because raw cryptographic strings added visual anxiety without aiding daily orientation.',
          image: '/images/projects/equora/explorations/home-alt2.png',
        },
        {
          version: 'Exploration C',
          label: 'Oversized Action Bento Tiles',
          status: 'Evolved',
          summary: 'Large 2×2 action tiles below the balance.',
          whyItMatters: 'Improved visual calm, but the large tiles pushed actual token holdings below the fold.',
          image: '/images/projects/equora/explorations/home-alt3.png',
        },
        {
          version: 'Selected Direction',
          label: 'Balanced Value + Condensed Actions',
          status: 'Selected',
          summary: 'Clear fiat balance, compact 4-action row, and immediate visibility of top holdings.',
          whyItMatters: 'Achieved the ideal synthesis of financial composure and scannable asset density.',
          image: '/images/projects/equora/flow/04-home.png',
        },
      ],
    },
    validation: {
      headline: 'Evaluated through component-level risk heuristics and flow walkthroughs.',
      steps: [
        {
          number: '01',
          title: 'Irreversible Action Audit',
          detail:
            'Verified that every screen involving key custody or outbound value transfer displays explicit consequence cues above the primary CTA.',
        },
        {
          number: '02',
          title: 'Above-the-Fold Density Benchmarking',
          detail:
            'Compared 4 home-screen prototypes on standard iPhone viewports to ensure at least 3 asset rows remain visible without scrolling.',
        },
        {
          number: '03',
          title: 'Next Phase: First-Time Holder Comprehension Testing',
          detail:
            'Defined usability protocol to test whether novice holders accurately understand seed responsibility and network fees.',
        },
      ],
    },
    outcomes: {
      headline: 'A complete, high-craft mobile wallet grammar for trust-aware decisions.',
      caption: 'Independent design concept documenting interaction architecture, visual craft, and risk-proportional fintech patterns.',
      cards: [
        {
          metric: '11',
          title: 'Production-Ready Flow Screens',
          detail: 'End-to-end coverage from onboarding custody through holdings, swap, buy, send, and receive.',
        },
        {
          metric: '4',
          title: 'Home Architecture Iterations',
          detail: 'Systematic exploration of density vs. calm before locking the shipped hierarchy.',
        },
        {
          metric: '1',
          title: 'Cohesive Risk-Proportional Model',
          detail: 'Unified interaction rule matching UI ceremony to financial consequence.',
        },
      ],
    },
    reflection: {
      quote: 'In a financial product where mistakes are permanent, visual calmness is not minimalism—it is a form of safety.',
      takeaway:
        'Equora reinforced how typography, spacing, and deliberate pacing can guide human attention toward the details that protect their assets.',
    },
  },
  {
    slug: 'pranik',
    index: '06',
    title: 'Pranik',
    clientOrContext: 'Multilingual AI Care Companion · Patient & Clinician Ecosystem',
    category: 'Healthcare',
    tags: ['Healthcare AI', 'Multilingual UX (EN/HI/TE)', 'Patient + Doctor Views', 'Mobile System'],
    year: '2025',
    accent: '#2E6145',
    accentSecondary: '#B9E274',
    surfaceTint: 'rgba(46, 97, 69, 0.14)',
    logo: '/images/projects/pranik_logo-transparent.png',
    heroImage: '/images/projects/pranik/flow/03-home.png',
    tagline: 'A multilingual care companion that connects symptom conversations, medical report scanning, reminders, and clinician handoffs across English, Hindi, and Telugu.',
    thesis: 'Health questions don’t end when a symptom chat finishes—care requires memory, continuity, and native language access.',
    summary:
      'Pranik explores healthcare as an ongoing relationship rather than an isolated symptom checker. Over a 3-week intensive sprint, I designed a connected mobile care ecosystem spanning 12 patient journey screens, a parallel clinician context view, and first-class native interfaces in Hindi and Telugu so patients never have to translate their pain or repeat their story at every handoff.',
    facts: {
      role: 'Lead Product Designer (End-to-End Concept)',
      scope: 'Patient App, Clinician View & Native Hindi/Telugu Experiences',
      timeline: '3-Week Intensive Product Sprint',
      team: 'Solo Product Design, Information Architecture & Multilingual UI',
    },
    headlineMetrics: [
      { value: '4', label: 'Designed Perspectives', detail: 'Patient view, Clinician view, Native Hindi UI, and Native Telugu UI' },
      { value: '12', label: 'Connected Care Screens', detail: 'Onboarding, health home, AI text/voice/avatar chat, report OCR, doctors & reminders' },
      { value: '3', label: 'Languages as Core Paths', detail: 'English, Hindi (हिन्दी), and Telugu (తెలుగు) built on one shared IA' },
      { value: '1', label: 'Continuous Care Thread', detail: 'Context moves seamlessly from patient symptom chat to the doctor’s intake screen' },
    ],
    context: {
      kicker: 'Healthcare Framing',
      headline: 'Turning health anxiety into a calm, continuous next step across languages and care roles.',
      narrative:
        'When someone feels unwell or receives a lab report they don’t understand, rigid clinical intake forms increase anxiety. Worse, standalone AI symptom bots end in a dead end—forcing the patient to re-explain everything from scratch when they book a doctor, often in a second language.',
      beforeState: {
        title: 'Where Fragmented Digital Health Apps Fall Short',
        points: [
          'Clinical symptom checkers interrogate anxious patients with medical jargon before offering reassurance.',
          'Chatbots lose context the moment the session ends—appointments, reminders, and lab reports live in separate apps.',
          'Doctors receive bookings with zero pre-visit context, wasting consultation time on basic intake.',
          'Regional Indian languages (Hindi, Telugu) are treated as broken machine-translated overlays rather than native product paths.',
        ],
      },
      reframedState: {
        title: 'Pranik Continuous & Multilingual Care System',
        points: [
          'Start with plain-language conversation (text, voice, or comforting avatar) rather than clinical forms.',
          'Anchor the Health Home around ongoing continuity: upcoming appointments, medication reminders, and OCR report scanning.',
          'Equip clinicians with a dedicated Doctor View that summarizes the patient’s prior concern and scanned reports.',
          'Design native Hindi and Telugu interfaces using the exact same spatial grammar so typographic expansion never breaks the layout.',
        ],
      },
      successModel: {
        objective: 'Make a health concern easier to express in one’s native language, understand calmly, and carry forward to a clinician.',
        userOutcome: 'Patients move smoothly from an initial question to ongoing care; doctors step into consultations with structured context.',
        guardrail: 'Never imply automated clinical diagnosis where human medical judgment is required.',
      },
    },
    discovery: {
      headline: 'Designing one resilient information architecture for four human contexts.',
      intro:
        'Instead of designing a single English happy path, I architected Pranik simultaneously for anxious patients, time-pressed doctors, and native Hindi and Telugu speakers.',
      metrics: [
        { number: '12', label: 'Patient Flow Screens', detail: 'Complete mobile journey from onboarding to OCR report scanning.' },
        { number: '4', label: 'Ecosystem Canvases', detail: 'Full system boards for Patient, Doctor, Hindi, and Telugu experiences.' },
        { number: '3', label: 'Input Modalities', detail: 'Plain-text chat, voice conversation, and empathetic avatar guidance.' },
        { number: '100%', label: 'Structural IA Parity', detail: 'Shared layout grammar accommodates Devanagari and Telugu script heights.' },
      ],
      keyInsight:
        'Multilingual systems insight: Devanagari (Hindi) and Telugu scripts require greater vertical line-height and longer phrase lengths than English. Designing them alongside English from week one prevented truncated buttons and broken cards.',
    },
    architecture: {
      headline: 'Patient-to-Clinician Care Continuity Architecture',
      description:
        'Pranik connects multimodal patient intake with ongoing home management and a structured clinician handoff layer.',
      entryNode: {
        title: 'Language-Native Entry & Multimodal Concern Intake',
        subtitle: 'Patient expresses symptoms or uploads a lab report via Text, Voice, or Guided Avatar in English, Hindi, or Telugu',
      },
      lanes: [
        {
          lane: '01 · Empathetic Intake',
          subtitle: 'Low-anxiety expression',
          nodes: [
            { title: 'Plain-Language Symptom Chat', detail: 'Guided prompts help patients describe what they feel without medical jargon', badge: 'Text + Voice' },
            { title: 'Selectable Care Avatar', detail: 'Optional visual companion for users who prefer spoken, face-to-face reassurance' },
          ],
        },
        {
          lane: '02 · Diagnostic & Report Context',
          subtitle: 'Document understanding',
          nodes: [
            { title: 'Camera OCR Report Scanner', detail: 'Captures physical prescriptions and lab sheets into structured health records', badge: 'OCR Scan' },
            { title: 'Plain-Language Breakdown', detail: 'Highlights key markers to discuss with a doctor without overclaiming diagnosis' },
          ],
        },
        {
          lane: '03 · Ongoing Care Home',
          subtitle: 'Between-visit continuity',
          nodes: [
            { title: 'Prioritized Health Home', detail: 'Surfaces immediate follow-ups, daily medication reminders, and care timeline' },
            { title: 'Native Hindi & Telugu Parity', detail: 'First-class localized typography and culturally natural phrasing', badge: 'EN · HI · TE' },
          ],
        },
        {
          lane: '04 · Clinician Handoff Loop',
          subtitle: 'Two-sided care context',
          nodes: [
            { title: 'Contextual Doctor Matching', detail: 'Connects the patient’s symptom thread directly to relevant specialists' },
            { title: 'Dedicated Doctor View', detail: 'Presents pre-visit symptom summary, scanned labs, and adherence history', badge: 'Doctor View' },
          ],
        },
      ],
      outputNode: {
        title: 'Informed Consultation & Continuous Post-Visit Follow-Up',
        subtitle: 'Care prescriptions and reminders flow directly back into the patient’s Health Home',
      },
      systemFlow: ['Multilingual Onboarding', 'Health Home', 'Text/Avatar AI Chat', 'OCR Report Scan', 'Doctor Handoff', 'Reminders & Continuity'],
    },
    flowSteps: [
      {
        step: '01',
        title: 'Calm, Reassuring Onboarding',
        phase: 'Enter',
        caption: 'Warm botanical palette and human framing reduce clinical intimidation on first launch.',
        annotation: 'Establishes language preference and privacy reassurance upfront.',
        image: '/images/projects/pranik/flow/01-onboarding.png',
      },
      {
        step: '02',
        title: 'Low-Friction Profile Setup',
        phase: 'Account',
        caption: 'Minimal signup captures essential health context without a 20-field medical questionnaire.',
        annotation: 'Gets the patient to help quickly when they are actively experiencing a health concern.',
        image: '/images/projects/pranik/flow/02-signup.png',
      },
      {
        step: '03',
        title: 'Continuity-Focused Health Home',
        phase: 'Home',
        caption: 'Central care hub uniting AI guidance, upcoming appointments, reminders, and recent scans.',
        annotation: 'Designed so follow-up actions remain visible long after the initial chat ends.',
        image: '/images/projects/pranik/flow/03-home.png',
      },
      {
        step: '04',
        title: 'Conversational Symptom Entry',
        phase: 'Ask (Voice/Chat)',
        caption: 'Empathetic conversational entry point with structured symptom chips and voice support.',
        annotation: 'Replaces cold clinical checkboxes with natural human dialogue.',
        image: '/images/projects/pranik/flow/04-ai-chat.png',
      },
      {
        step: '05',
        title: 'Structured Follow-Up Reasoning',
        phase: 'Understand',
        caption: 'Detailed text thread organizes symptom duration, severity, and recommended next steps.',
        annotation: 'Prepares a clean summary that can be shared with a physician.',
        image: '/images/projects/pranik/flow/05-ai-chat-text.png',
      },
      {
        step: '06',
        title: 'Care Companion Avatar Selection',
        phase: 'Personalize',
        caption: 'Patients can choose a comforting visual guide for spoken health conversations.',
        annotation: 'Improves accessibility for users who prefer listening and speaking over typing dense text.',
        image: '/images/projects/pranik/flow/06-select-avatar.png',
      },
      {
        step: '07',
        title: 'Avatar Session Overview',
        phase: 'Guided Mode',
        caption: 'Clear topic framing before starting a live voice/avatar guidance session.',
        annotation: 'Keeps expectations grounded around care navigation rather than emergency medicine.',
        image: '/images/projects/pranik/flow/07-avatar-chat-overview.png',
      },
      {
        step: '08',
        title: 'Live Avatar Care Dialogue',
        phase: 'Spoken Care',
        caption: 'Real-time spoken interaction with live captions for noisy or quiet environments.',
        annotation: 'Bridges digital literacy gaps for older family members.',
        image: '/images/projects/pranik/flow/08-avatar-chat.png',
      },
      {
        step: '09',
        title: 'Specialist Discovery & Context Handoff',
        phase: 'Connect',
        caption: 'Doctor profile shows specialty fit, availability, and seamless attachment of prior chat context.',
        annotation: 'Eliminates the frustration of repeating symptom history from zero.',
        image: '/images/projects/pranik/flow/09-doctor-detail.png',
      },
      {
        step: '10',
        title: 'Unified Appointments Tracker',
        phase: 'Appointments',
        caption: 'Tracks upcoming consultations, pre-visit prep notes, and past visit summaries.',
        annotation: 'Anchors the transition from AI guidance to human clinical care.',
        image: '/images/projects/pranik/flow/10-appointments.png',
      },
      {
        step: '11',
        title: 'Daily Medication & Care Reminders',
        phase: 'Adherence',
        caption: 'Simple, high-legibility reminder schedule for medications and hydration/check-in routines.',
        annotation: 'Closes the post-consultation adherence loop.',
        image: '/images/projects/pranik/flow/11-reminders.png',
      },
      {
        step: '12',
        title: 'Medical Report & Prescription OCR Scanner',
        phase: 'Report Scan',
        caption: 'Camera viewfinder digitizes paper lab reports and prescriptions into the care thread.',
        annotation: 'Connects physical hospital paperwork directly to the digital care companion.',
        image: '/images/projects/pranik/flow/12-scanning.png',
      },
    ],
    decisions: [
      {
        number: '01',
        title: 'Begin with a plain-language concern, not a clinical taxonomy form',
        tag: 'Patient Empathy',
        evidence:
          'Patients arriving with a new symptom or confusing lab sheet often don’t know the clinical category of their issue; rigid intake forms cause immediate drop-off.',
        decision:
          'Designed a conversational entry point with gentle starter prompts and multimodal input (text, voice, avatar) before progressively gathering structured details.',
        tradeoff:
          'Takes 2–3 conversational turns to collect what a dense form asks at once, trading raw data density for emotional safety.',
        impact: 'Created a calmer, human-scale entry into the care journey.',
        image: '/images/projects/pranik/flow/04-ai-chat.png',
        alt: 'Pranik symptom conversation screen',
      },
      {
        number: '02',
        title: 'Keep the care path visible after the chat ends',
        tag: 'Care Continuity',
        evidence:
          'Most health bots treat the end of a chat as the end of the product, leaving appointments, lab scans, and medication reminders disconnected.',
        decision:
          'Architected the Health Home, Appointments, Reminders, and OCR Report Scanner as one persistent continuity layer alongside the Doctor View.',
        tradeoff:
          'Required strict prioritization on the Home screen so immediate follow-ups stand out without creating dashboard clutter.',
        impact: 'Transformed Pranik from a one-off Q&A bot into a longitudinal care companion.',
        image: '/images/projects/pranik/flow/10-appointments.png',
        alt: 'Pranik appointment and follow-up screen',
      },
      {
        number: '03',
        title: 'Design Hindi and Telugu as first-class product paths, not post-launch translations',
        tag: 'Inclusive Systems',
        evidence:
          'In India, healthcare decisions frequently involve family members who are most comfortable expressing nuanced symptoms in Hindi or Telugu.',
        decision:
          'Built dedicated Hindi and Telugu system canvases using the same modular card grammar, validating script line-heights and natural phrasing early.',
        tradeoff:
          'Multiplied artboard QA across languages and roles (Patient + Doctor).',
        impact: 'Proved that one coherent information architecture can serve patients and clinicians across three languages.',
        image: '/images/projects/pranik/flow/03-home.png',
        alt: 'Pranik health home screen',
      },
    ],
    explorations: {
      headline: 'Four Complete Ecosystem Perspectives (Patient, Doctor, Hindi & Telugu)',
      subtitle: 'Pranik was designed as a multi-actor, multilingual system from the start—inspect all four full-system boards below.',
      items: [
        {
          version: 'Perspective 01',
          label: 'Patient Care Journey',
          status: 'Shipped',
          summary: 'End-to-end mobile architecture from initial symptom concern to reminders and report scanning.',
          whyItMatters: 'Keeps the patient oriented and supported before, during, and after clinical visits.',
          image: '/images/projects/pranik/designs/patients-view.png',
        },
        {
          version: 'Perspective 02',
          label: 'Clinician / Doctor View',
          status: 'Shipped',
          summary: 'Dedicated care-team interface surfacing pre-visit symptom context and scanned reports.',
          whyItMatters: 'Saves consultation time and prevents patients from having to retell their story from scratch.',
          image: '/images/projects/pranik/designs/doctors-view.png',
        },
        {
          version: 'Perspective 03',
          label: 'Native Hindi Experience (हिन्दी)',
          status: 'Shipped',
          summary: 'Full Devanagari interface engineered with script-appropriate vertical rhythm and warm phrasing.',
          whyItMatters: 'Ensures language access is a core product capability rather than an afterthought.',
          image: '/images/projects/pranik/designs/hindi.png',
        },
        {
          version: 'Perspective 04',
          label: 'Native Telugu Experience (తెలుగు)',
          status: 'Shipped',
          summary: 'First-class Telugu care journey preserving identical navigation and card hierarchy.',
          whyItMatters: 'Demonstrates cross-script resilience across South and North Indian languages.',
          image: '/images/projects/pranik/designs/telugu.webp',
        },
      ],
    },
    validation: {
      headline: 'Stress-tested across role handoffs and multi-script typography.',
      steps: [
        {
          number: '01',
          title: 'Patient-to-Doctor Context Audit',
          detail:
            'Mapped every data point captured in the patient symptom & OCR flow to verify how it surfaces on the clinician’s intake board.',
        },
        {
          number: '02',
          title: 'Tri-Script Layout Stress Testing (EN / HI / TE)',
          detail:
            'Verified card expansion, pill wrapping, and hierarchy legibility across Latin, Devanagari, and Telugu scripts.',
        },
        {
          number: '03',
          title: 'Multimodal Accessibility Review',
          detail:
            'Designed clear mode switching between text chat, voice input, and avatar guidance for diverse literacy and comfort levels.',
        },
      ],
    },
    outcomes: {
      headline: 'A complete multi-actor, multilingual care grammar.',
      caption: 'Portfolio concept documenting end-to-end product design, multimodal interaction, and multilingual healthcare systems.',
      cards: [
        {
          metric: '4',
          title: 'Full Ecosystem Perspectives',
          detail: 'Patient, Clinician, Hindi, and Telugu boards designed as one unified system.',
        },
        {
          metric: '12',
          title: 'Connected Mobile Flow Screens',
          detail: 'Spanning onboarding, AI chat, voice avatar, OCR scanning, appointments, and reminders.',
        },
        {
          metric: '1',
          title: 'Shared Care Memory Thread',
          detail: 'Built so context travels with the patient from first question to clinical follow-up.',
        },
      ],
    },
    reflection: {
      quote: 'A healthcare companion earns trust by making the next step calmer and clearer—without pretending to replace the clinician.',
      takeaway:
        'Designing Pranik across Patient, Doctor, Hindi, and Telugu views proved that inclusive design is fundamentally an information-architecture discipline.',
    },
  },
  {
    slug: 'qualifyze',
    index: '07',
    title: 'Qualifyze',
    clientOrContext: 'Life Sciences Supplier Qualification & GxP Compliance UX Study',
    category: 'Enterprise & B2B',
    tags: ['Regulated Enterprise UX', 'GxP Compliance', 'Risk & CAPA Systems', 'UX Strategy & Audit'],
    year: '2026',
    accent: '#0B7665',
    accentSecondary: '#8EE4CD',
    surfaceTint: 'rgba(11, 118, 101, 0.14)',
    logo: '/images/projects/qualifyze_logo.png',
    heroImage: '/images/projects/qualifyze/evidence/opportunity-and-direction.png',
    tagline: 'An independent UX strategy and systems study on life-sciences supplier qualification—unifying supplier risk scores, audit lifecycle, and CAPA remediation into one decision workspace.',
    thesis: 'In regulated GxP compliance, a dashboard is only useful when it makes the next human decision less ambiguous.',
    summary:
      'Qualifyze operates in life-sciences supplier qualification, where QA and procurement teams must move fast without compromising GxP traceability. In this intensive 1-week independent UX study, I conducted a full product teardown, regulatory domain scan, and competitive benchmark to diagnose why risk scores and CAPA follow-ups felt disconnected—and architected a unified Supplier Risk + CAPA Decision Workspace with a concrete validation roadmap.',
    confidentialityNote:
      'Independent UX research & product strategy study based on public product ecosystem analysis and GxP domain standards. Includes downloadable full PDF study.',
    downloadPdf: {
      label: 'Download Full UX Study PDF',
      href: '/case-studies/Harsha_Qualifyze_UX_Case_Study_v2.pdf',
    },
    facts: {
      role: 'Product Designer (Independent UX Strategy Study)',
      scope: 'Product Teardown, GxP Workflow Diagnosis & Concept Architecture',
      timeline: '1-Week Intensive Sprint',
      team: 'Solo Research, Systems Mapping & Decision Workspace Design',
    },
    headlineMetrics: [
      { value: '3', label: 'Research Pillars Executed', detail: 'End-to-end product teardown, GxP compliance scan, and QMS benchmark' },
      { value: '5-Stage', label: 'Audit Lifecycle Mapped', detail: 'Supplier ID → Audit Search → Decision → Findings/CAPA → Reassessment' },
      { value: '3', label: 'Unified Decision Layers', detail: 'Connected Risk Signal, CAPA Remediation, and Next-Action Priority' },
      { value: 'Full PDF', label: 'Inspectable Audit Deck', detail: 'Complete research synthesis, prioritization matrix, and test plan' },
    ],
    context: {
      kicker: 'Regulated Domain Framing',
      headline: 'Pharma QA teams had status dashboards, but lacked a single place to connect supplier risk with active CAPA remediation.',
      narrative:
        'In pharmaceutical and life-sciences supply chains, qualifying a supplier requires strict adherence to GxP standards. While Qualifyze possesses a powerful shared audit library, my teardown revealed that supplier onboarding, audit findings, Corrective and Preventive Actions (CAPA), and ongoing risk monitoring lived in visually separate views—forcing QA leads to mentally stitch together whether a supplier is safe to approve right now.',
      beforeState: {
        title: 'Diagnosed Friction in the Qualification Lifecycle',
        points: [
          'Supplier onboarding remained high-friction despite the strength of the shared audit database.',
          'Risk scores and CAPA remediation trackers were logically coupled but visually separated across tabs.',
          'Status dashboards showed aggregate counts without surfacing time-sensitive action priority or blocker ownership.',
          'AI-assisted risk indicators lacked explicit trigger explanations required for regulated accountability.',
        ],
      },
      reframedState: {
        title: 'Proposed Unified Supplier Risk + CAPA Workspace',
        points: [
          'Bind the three decision signals—Risk Layer, CAPA Layer, and Action Layer—into a single supplier workspace.',
          'Pair every risk score shift with a human-readable trigger rationale ("Why did this supplier move to Medium-High risk?").',
          'Sort supplier queues by action urgency (overdue CAPA, expiring audit, blocked onboarding) rather than static alphabetical lists.',
          'Establish an explicit 3-step primary validation plan with QA leads, procurement managers, and auditors.',
        ],
      },
      successModel: {
        objective: 'Reduce cognitive synthesis overhead for QA and procurement teams without concealing regulated audit evidence.',
        userOutcome: 'A QA lead can inspect a supplier’s risk score, open CAPA blockers, and recommended next action in one unified view.',
        guardrail: 'Keep research assumptions explicit; never present secondary teardown hypotheses as validated customer telemetry.',
      },
    },
    discovery: {
      headline: 'Following the workflow where regulatory risk actually changes hands.',
      intro:
        'I structured the 1-week investigation across three complementary lenses: mapping the 5-stage qualification lifecycle, scanning GxP compliance expectations, and benchmarking adjacent QMS platforms.',
      metrics: [
        { number: '01', label: 'Lifecycle Teardown', detail: 'Mapped supplier onboarding, audit request/execution, report delivery, and CAPA follow-up.' },
        { number: '02', label: 'GxP Compliance Scan', detail: 'Evaluated traceability, audit-trail legibility, and data-integrity constraints in life sciences.' },
        { number: '03', label: 'QMS Benchmarking', detail: 'Compared specialist audit libraries against broad enterprise Quality Management Systems.' },
        { number: '6', label: 'Prioritized Opportunities', detail: 'Ranked across High-Impact Structural Bets vs. Low-Effort Quick Wins.' },
      ],
      keyInsight:
        'Core strategic insight: The highest-leverage UX opportunity wasn’t inventing a new analytics chart—it was connecting existing audit findings and CAPA remediation status directly to the supplier risk score so teams can act immediately.',
    },
    architecture: {
      headline: 'Unified Supplier Qualification & Risk Workspace Architecture',
      description:
        'Bridges the 5-stage qualification workflow with a 3-layer decision surface uniting Risk, CAPA, and Action.',
      entryNode: {
        title: 'Supplier Intake & Shared Audit Library Match',
        subtitle: 'Identifies supplier entity, checks existing audit coverage, and initializes GxP qualification track',
      },
      lanes: [
        {
          lane: 'Layer 01 · Explainable Risk Signal',
          subtitle: 'Traceable risk scoring',
          nodes: [
            { title: 'Composite Risk Score & Trend', detail: 'Displays current risk tier alongside historical trajectory', badge: 'Explainable' },
            { title: 'Trigger Attribution Pill', detail: 'States exact reason for status change (e.g., critical audit finding or overdue CAPA)' },
          ],
        },
        {
          lane: 'Layer 02 · Integrated CAPA Engine',
          subtitle: 'Remediation in context',
          nodes: [
            { title: 'Inline CAPA Progress & Blockers', detail: 'Surfaces open corrective actions, due windows, and assigned owners on the supplier card' },
            { title: 'Evidence Trail Linkage', detail: 'One-click drill-down to the originating audit clause and uploaded proof', badge: 'GxP Traceable' },
          ],
        },
        {
          lane: 'Layer 03 · Action-First Prioritization',
          subtitle: 'Decision-ready queues',
          nodes: [
            { title: 'Urgency-Driven Triage Queue', detail: 'Ranks suppliers by required decision (Escalate, Re-Audit, Approve, Monitor)', badge: 'Action First' },
            { title: 'Role-Based Saved Views', detail: 'Tailored filters for QA Auditors vs. Strategic Procurement Leads' },
          ],
        },
        {
          lane: 'Layer 04 · Validation & Governance Plan',
          subtitle: 'Hypothesis testing loop',
          nodes: [
            { title: 'Task-Based Usability Protocol', detail: 'Tests time-to-decision on multi-CAPA supplier scenarios' },
            { title: 'AI Confidence Calibration', detail: 'Evaluates how QA officers interpret AI-generated risk summaries' },
          ],
        },
      ],
      outputNode: {
        title: 'Defensible, Audit-Ready Supplier Qualification Decision',
        subtitle: 'Measured by Time to Qualified Supplier, On-Time CAPA Closure, and QA Decision Confidence',
      },
      systemFlow: ['Supplier Identified', 'Audit Library Match', 'Audit Execution', 'Findings + CAPA Linked', 'Unified Risk Reassessment'],
    },
    flowSteps: [
      {
        step: '01',
        title: 'Research Methods, Workflow Mapping & Core Diagnosis',
        phase: '01 · Diagnosis',
        caption: 'Synthesizes the 3 research pillars, 5-stage supplier workflow, and top friction points across onboarding and CAPA.',
        annotation: 'Maps exactly where information fragmentation slows down QA and procurement handoffs.',
        image: '/images/projects/qualifyze/evidence/research-and-workflow.png',
      },
      {
        step: '02',
        title: 'Impact Prioritization & Unified Workspace Concept',
        phase: '02 · Architecture',
        caption: 'Proposes the 3-layer Unified Supplier Risk + CAPA Workspace alongside a High-Impact vs. Quick-Win prioritization matrix.',
        annotation: 'Demonstrates how Risk, CAPA, and Next Action converge into a single decision-ready surface.',
        image: '/images/projects/qualifyze/evidence/opportunity-and-direction.png',
      },
      {
        step: '03',
        title: 'Validation Roadmap, KPIs & Study Boundaries',
        phase: '03 · Validation Plan',
        caption: 'Defines target product metrics, an 8–12 interview research plan, and explicit methodological guardrails.',
        annotation: 'Shows rigorous product maturity by separating secondary hypotheses from primary customer validation.',
        image: '/images/projects/qualifyze/evidence/validation-and-limits.png',
      },
    ],
    decisions: [
      {
        number: '01',
        title: 'Co-locate Supplier Risk and CAPA remediation on a single decision surface',
        tag: 'Systems Architecture',
        evidence:
          'Workflow analysis showed that judging a supplier’s qualification status requires knowing both their audit risk score and whether their corrective actions (CAPAs) are actually progressing.',
        decision:
          'Architected a unified workspace combining the Risk Layer (score + trigger), CAPA Layer (open items + owners + due dates), and Action Layer (monitor, re-audit, or escalate).',
        tradeoff:
          'Increases information density on the primary supplier overview compared to single-purpose status widgets.',
        impact: 'Eliminates cross-tab hunting when QA leads need to make a time-sensitive qualification call.',
        image: '/images/projects/qualifyze/evidence/opportunity-and-direction.png',
        alt: 'Qualifyze opportunity and unified workspace concept',
      },
      {
        number: '02',
        title: 'Prioritize by required human action rather than passive status categories',
        tag: 'Workflow Triage',
        evidence:
          'Regulated dashboards often group items by static database states ("In Progress", "Completed") rather than alerting teams to which supplier is blocking production or nearing a compliance deadline.',
        decision:
          'Proposed action-first sorting with explicit urgency states, supported by low-effort quick wins like overdue CAPA reminders and role-based saved filters.',
        tradeoff:
          'Requires defining clear business-rule thresholds for urgency ranking across QA and procurement roles.',
        impact: 'Shifts the product from a passive system of record to an active decision-support system.',
        image: '/images/projects/qualifyze/evidence/research-and-workflow.png',
        alt: 'Qualifyze research and workflow diagnosis',
      },
      {
        number: '03',
        title: 'Pair AI risk signals with explicit confidence and trigger explanations',
        tag: 'Regulated AI Trust',
        evidence:
          'In GxP-regulated environments, an opaque "Black Box" risk score cannot be defended during an regulatory inspection.',
        decision:
          'Added explicit trigger explanations and confidence labels to risk scoring, paired with a usability test plan to verify auditor trust.',
        tradeoff:
          'Constrains AI output to deterministic, traceable citations from audit reports and CAPA logs.',
        impact: 'Aligns modern AI workflow acceleration with strict life-sciences accountability standards.',
        image: '/images/projects/qualifyze/evidence/validation-and-limits.png',
        alt: 'Qualifyze validation and study limits',
      },
    ],
    validation: {
      headline: 'A rigorous 3-stage validation protocol ready for primary customer testing.',
      steps: [
        {
          number: '01',
          title: 'Primary Stakeholder Discovery (8–12 Interviews)',
          detail:
            'Interview QA leads, procurement managers, and GxP auditors to validate how risk and CAPA evidence are weighed during supplier sign-off.',
        },
        {
          number: '02',
          title: 'Task-Based Prioritization Usability Testing',
          detail:
            'Test the unified workspace against legacy tab views using realistic multi-supplier triage and overdue CAPA escalation scenarios.',
        },
        {
          number: '03',
          title: 'Regulated AI Interpretability Evaluation',
          detail:
            'Measure auditor comprehension and trust in trigger explanations and confidence labels before roadmap commitment.',
        },
      ],
    },
    outcomes: {
      headline: 'An honest, inspectable product hypothesis with a downloadable full study.',
      caption: 'All proposed metrics (Time to Qualified Supplier, On-Time CAPA Closure, Decision Confidence) are framed transparently as target hypotheses for primary validation.',
      cards: [
        {
          metric: '3',
          title: 'Synthesized Evidence Boards',
          detail: 'Covering Workflow Diagnosis, Unified Workspace Architecture, and Validation Protocol.',
        },
        {
          metric: '3',
          title: 'Connected Decision Layers',
          detail: 'Risk Signal, CAPA Remediation, and Recommended Action unified at the supplier level.',
        },
        {
          metric: 'PDF',
          title: 'Complete Downloadable Case Study',
          detail: 'Full 1-week independent UX research report available for direct inspection.',
        },
      ],
    },
    reflection: {
      quote: 'In regulated enterprise UX, clarity isn’t just about showing compliance status—it’s about reducing uncertainty at the exact moment a human carries the accountability.',
      takeaway:
        'This study demonstrates how I approach unfamiliar, high-stakes B2B domains: map the operational workflow, find where decisions stall between silos, and propose a testable systems hypothesis.',
    },
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudyData | undefined {
  return CASE_STUDIES.find((item) => item.slug === slug);
}

export function getAdjacentCaseStudies(slug: string): { prev: CaseStudyData; next: CaseStudyData } {
  const index = CASE_STUDIES.findIndex((item) => item.slug === slug);
  const safeIndex = index === -1 ? 0 : index;
  const prev = CASE_STUDIES[(safeIndex - 1 + CASE_STUDIES.length) % CASE_STUDIES.length];
  const next = CASE_STUDIES[(safeIndex + 1) % CASE_STUDIES.length];
  return { prev, next };
}
