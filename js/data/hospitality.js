const HOSPITALITY_DATA = {
    id: 'hospitality',
    name: 'Hospitality',
    icon: '🏨',
    slug: 'hospitality',
    signature: 'Guest Conversion Ecosystem™',

    // ============================================================
    // HOOK
    // ============================================================
    hook: {
        headline: 'Your Hotel Is Excellent. Your Direct Bookings Should Be Too.',
        subheadline: 'When a guest books through an OTA, a platform that has never seen your property, never experienced your service, and never invested in your rooms takes 15-30% of your revenue. Not because they built a better hotel. Because they built a better booking experience. The question is not whether your hotel is good enough for direct bookings. The question is whether your digital foundation makes direct booking easy, fast, and trustworthy.',
        statLine: 'Across the properties I have studied, hotels with strong digital infrastructure keep 70% or more of their revenue. Hotels without it surrender significant margins to intermediaries. Not because the property is weaker. Because the digital layer that should be converting interest into direct revenue was never built.'
    },

    // ============================================================
    // INDUSTRY UNDERSTANDING
    // ============================================================
    understanding: 'A hotel operates on perishable inventory. A room unsold tonight is revenue lost forever — no warehouse, no backlog, no recovery. Fixed costs continue whether occupancy is at 20% or 90%. This single reality shapes every financial decision in hospitality.\n\nI have studied how travelers actually book hotels — not how marketing textbooks claim they book, not how agencies assume they book. They search Google. They scroll photos. They compare prices across platforms. They read reviews. They check Instagram. They watch YouTube room tours. They ask for recommendations on WhatsApp. Somewhere in that 8-12 touchpoint journey, they decide.\n\nIf your hotel is missing at any of those touchpoints — or present but looking unprofessional — the decision happens without you. The property might be excellent. The digital representation failed to communicate that excellence. And in hospitality, the digital representation is what travelers judge.',

    revenueModel: 'Room revenue drives the majority of income for most properties. Food and beverage contributes meaningfully. Events and banquets — weddings, corporate gatherings, celebrations — often generate the highest margin. Ancillary services add incremental value. But the profitability of every room booking depends entirely on one variable: whether the guest booked direct or through a commission-charging intermediary. Same room. Same guest. Same stay. Different margin.',

    customerPsychology: 'A traveler choosing a hotel is managing anxiety. The dominant emotion is not excitement — it is fear of a bad decision. Fear of a property that looks nothing like the photos. Fear of hidden costs. Fear of a poor experience with no recourse. Every search, every photo viewed, every review read is the traveler trying to reduce this anxiety. The hotel that provides the most reassurance wins — not necessarily the best hotel, but the one that made the guest feel safest about their choice. This judgment happens in seconds. Professional visuals signal competence. Phone photography signals mediocrity — regardless of actual room quality.',

    whyGenericFails: 'Most agencies approach hotels the same way they approach any business. Brochure website. Generic social media posts. Untargeted advertising. They treat a hotel like it sells products when it sells an experience that cannot be tested before purchase. They optimize for traffic when the hotel needs bookings. They report marketing metrics when the owner needs revenue metrics. They build components in isolation — a website here, some ads there, social media somewhere else — without connecting them into a system where each part strengthens the others. Hotels are not any other business. Perishable inventory, multi-channel distribution complexity, extreme seasonality, and a guest journey spanning discovery through post-stay relationship require an approach built specifically for hospitality.',

    // ============================================================
    // PAIN POINTS
    // ============================================================
    challenges: [
        {
            problem: 'OTAs Control Your Guest Relationship — And Charge You for It',
            whyItHappens: 'Most independent hotels source the majority of their bookings through OTAs. This happened gradually. The OTA offered reach. The OTA offered technology. The OTA invested in marketing. Meanwhile, the hotel website remained a brochure — no booking engine, no optimization, no reason for guests to use it. Over time, the hotel surrendered the guest relationship. The OTA owns the booking experience. The OTA owns the guest data. The OTA owns the search visibility. When that guest travels again, they open the OTA app — not the hotel website. The hotel pays commission on the same guest, again and again, because it never built the capability to earn direct bookings.',
            businessImpact: 'On a property generating substantial room revenue with high OTA dependency, annual commission costs represent a significant and growing expense. This is revenue that could fund property improvements, staff development, or profit distribution. Instead, it funds the OTA\'s technology and advertising.',
            digitalSolution: 'A direct booking website with integrated booking engine that loads fast, books in minimal steps, and offers clear advantages over OTA booking. Combined with Google presence optimization, WhatsApp booking, and direct booking incentives, this shifts the booking mix toward higher-margin direct channels over time.',
            assetsNeeded: ['Direct Booking Website with Integrated Booking Engine', 'WhatsApp Booking Flow', 'Direct Booking Incentive Structure', 'Google Hotel Ads Integration', 'Channel Manager for Rate Parity']
        },
        {
            problem: 'Your Google Presence Is Invisible to Travelers Searching Right Now',
            whyItHappens: 'When travelers search for hotels in a destination, Google displays a Map Pack — the top local results with photos, ratings, and direct booking links. If the hotel is not in that Map Pack, it is invisible to the majority of searchers. Most hotel Google Business Profiles are incomplete. A handful of photos — some uploaded by guests, some outdated. A modest number of reviews — far fewer than competitors. No active management. No weekly posts. No Q&A responses. The profile exists but does not compete.',
            businessImpact: 'The majority of travelers begin their search on Google. A hotel invisible in local search loses potential guests at the very first step — before they ever see the property, the rooms, or the rates.',
            digitalSolution: 'Complete Google Business Profile optimization with professional photography, active weekly posting, systematic review generation and response, and local SEO targeting city and landmark search terms. The objective is appearing in the Map Pack for high-intent searches where booking decisions begin.',
            assetsNeeded: ['Google Business Profile Optimization', 'Professional Property Photography for Google', 'Weekly Google Posts', 'Review Response Protocol', 'Local SEO Strategy']
        },
        {
            problem: 'Your Photography Is Losing Bookings Before Guests See the Property',
            whyItHappens: 'Travelers cannot touch the room before booking. They cannot feel the bedding. They cannot experience the view. They judge entirely by what they see. Phone photography — even from good devices — has limitations in lighting, angle, and spatial representation. Rooms appear smaller. Colours appear duller. The property looks ordinary when it may be exceptional. I have observed this pattern repeatedly: the same room presented with professional photography versus phone photography generates significantly different booking interest.',
            businessImpact: 'The property\'s strongest selling point — its actual quality — is undermined before the traveler ever considers booking. Investment in property quality is wasted if the visual representation does not communicate that quality effectively.',
            digitalSolution: 'Professional photography of every room type with correct lighting and composition. Drone photography for property context and location demonstration. Cinematic video that communicates the experience of being there. This is not a cost — it is the highest-return visual investment a hotel can make.',
            assetsNeeded: ['Professional Room Photography', 'Drone Property Photography', 'Cinematic Brand Film', 'Room Tour Videos', 'Food & Beverage Photography']
        },
        {
            problem: 'Past Guests Leave Satisfied — And Never Return',
            whyItHappens: 'A guest checks out after a positive stay. The hotel\'s relationship with them ends at that moment. No thank you message. No review request. No preference recorded. No birthday or anniversary recognition. No re-engagement when they might be planning their next trip. Months later, that guest travels again. They search Google. They compare OTAs. They might book the same hotel. They might not. The hotel competes for them from scratch — spending acquisition cost on a guest it already had and already satisfied.',
            businessImpact: 'The cost of acquiring a new guest through paid channels is significantly higher than the cost of re-engaging a past guest. Past guests who are never re-engaged represent the highest-margin revenue the hotel will never earn.',
            digitalSolution: 'A guest CRM capturing every stay with preferences and contact information. Automated communication workflows: post-stay thank you, review request, repeat stay offers, seasonal re-engagement, and recognition on return. The system maintains the relationship between stays so the hotel is the natural choice when the guest travels again.',
            assetsNeeded: ['Guest CRM System', 'Post-Stay Communication Workflow', 'Review Generation System', 'Repeat Guest Offer Automation', 'Guest Preference Tracking']
        }
    ],

    // ============================================================
    // ROOT CAUSE
    // ============================================================
    rootCause: {
        headline: 'Your Hotel Is Not the Problem. Your Digital Foundation Is.',
        insight: 'I have sat with hotel owners who are genuinely frustrated. Their property is excellent. Their staff is dedicated. Their service is genuine. But their digital presence does not reflect any of this. The website was built as a brochure, not a booking tool. The photography was done during construction or on a phone. Google presence is accidental, not managed. Guest data disappears after checkout. The hotel delivers quality. The digital layer that should be converting that quality into direct revenue was never properly built. Fix the foundation, and every other improvement — occupancy, rate, guest satisfaction, repeat business — becomes easier.',
        pillars: [
            { title: 'Be Found', desc: 'Appear wherever travelers search — Google, OTAs, Instagram, YouTube. Not just appear. Compete effectively. With content that stops them from scrolling past.' },
            { title: 'Be Trusted', desc: 'Professional visuals. Genuine reviews. Active presence. Every signal a traveler needs to feel confident choosing the property.' },
            { title: 'Be Booked', desc: 'Direct booking experience that is fast, straightforward, and trustworthy. Guests prefer it over intermediaries because it is genuinely easier.' },
            { title: 'Be Remembered', desc: 'Every guest captured in a database. Every stay followed up. Every preference recorded. Systems that maintain relationships between stays.' }
        ]
    },

    // ============================================================
    // THE DIFFERENCE
    // ============================================================
    differentiator: {
        headline: 'Diagnosis Before Prescription. System Before Components.',
        points: [
            'Before recommending anything, I study the property, the market, the competitive set, the current digital presence, and the guest profile — because every hotel\'s situation is different and generic solutions address generic problems.',
            'I have analyzed hospitality businesses specifically. I understand RevPAR, occupancy dynamics, OTA commission structures, channel management, seasonality patterns, and the guest psychology that drives booking decisions.',
            'I bring specialists who understand hotels — photographers who know how to shoot rooms, designers who understand booking psychology, and strategists who understand guest behaviour across the complete journey.',
            'Everything operates as one connected system. One point of accountability. No fragmentation across separate vendors where the website team does not coordinate with the Google team and neither connects to the guest communication system.',
            'Success is measured by business outcomes: direct booking percentage, OTA commission reduction, repeat guest ratio, RevPAR performance against competitive set. Not by social media metrics that do not connect to revenue.'
        ]
    },

    // ============================================================
    // CUSTOMER JOURNEY
    // ============================================================
    customerJourney: {
        discovery: {
            title: 'Discovery — Where Your Next Guest Is Searching Right Now',
            description: 'A traveler wants to visit your destination. They open Google. They type. They scroll. They check Instagram. They watch YouTube. Your hotel either appears in their research — or it does not. This is not a booking moment yet. It is an inclusion moment. If the hotel is not visible here, it will never be considered.',
            psychology: 'Travelers in discovery are open and curious. They are forming options, not making decisions. But they are also filtering — scrolling past anything that looks unprofessional within moments.',
            channels: ['Google Search & Maps', 'Instagram Travel Content', 'YouTube Destination & Hotel Videos', 'TripAdvisor', 'OTAs for Research', 'WhatsApp Recommendations'],
            digitalRequirements: ['Fully Optimized Google Business Profile', 'Local SEO for Destination Keywords', 'Google Hotel Ads', 'Professional Instagram Presence', 'YouTube Channel with Property Content']
        },
        trust: {
            title: 'Trust — The Moment They Decide Whether to Consider You',
            description: 'They found the hotel. Now they are judging. Photos. Reviews. Videos. Response to feedback. Every element either builds confidence or creates doubt. This evaluation happens quickly. The traveler is not reading deeply. They are scanning for signals.',
            psychology: 'The traveler is seeking reassurance. They fear booking a bad hotel. They look for proof — real photos, genuine reviews, professional presentation. Anything that appears fake, outdated, or neglected triggers exit.',
            channels: ['Google Reviews', 'Professional Photography', 'Video Room Tours', 'Active Social Media', 'Guest Testimonials'],
            digitalRequirements: ['Website with Professional Visuals', 'Video Content Library', 'Review Generation System', 'Review Response Protocol']
        },
        conversion: {
            title: 'Conversion — The Booking Moment',
            description: 'They are ready to book. If the process takes too long, requires too many steps, or creates any uncertainty — they leave. The OTA is always one tab away, offering one-click booking with saved payment details.',
            psychology: 'Booking anxiety peaks at this moment. The guest is committing money to a promise. Any friction — slow loading, complicated forms, unclear pricing, missing cancellation policy — justifies abandonment.',
            channels: ['Direct Website Booking', 'WhatsApp Booking', 'Phone Reservation'],
            digitalRequirements: ['Real-Time Booking Engine', 'WhatsApp Business Integration', 'Multiple Payment Options', 'Instant Confirmation System']
        },
        retention: {
            title: 'Retention — Where Most Hotels End and We Begin',
            description: 'The guest checked out. Most hotels consider the transaction complete. But the relationship has just produced its most valuable asset — a satisfied guest with known preferences who can become a repeat customer at a fraction of acquisition cost.',
            psychology: 'Post-stay goodwill peaks in the first 48 hours. Memory is fresh. Emotion is positive. Communication during this window generates reviews, captures preferences, and establishes the foundation for return visits.',
            channels: ['WhatsApp Follow-Up', 'Email Communication', 'CRM System', 'Loyalty Recognition'],
            digitalRequirements: ['Guest CRM', 'Automated Communication Workflows', 'Review Generation', 'Re-engagement Program']
        }
    },

    // ============================================================
    // TRANSFORMATION JOURNEY
    // ============================================================
    transformationJourney: {
        headline: 'From OTA-Dependent to Direct Booking Business',
        stages: [
            { step: '01', title: 'Diagnosis', duration: 'Week 1-2', desc: 'Complete audit of current digital presence — website, Google profile, OTA listings, social media, guest communication, competitive positioning. Every revenue leak identified. Every opportunity mapped.' },
            { step: '02', title: 'Visual Foundation', duration: 'Week 2-3', desc: 'Professional photography of every room type, amenity, and exterior. Drone videography. Brand film production. This visual library becomes the foundation that sells the property across every platform.' },
            { step: '03', title: 'Digital Infrastructure', duration: 'Week 3-6', desc: 'Direct booking website with integrated booking engine. Google Business Profile optimization. OTA listing enhancement. Channel manager configuration. Analytics foundation. The systems that make direct booking possible.' },
            { step: '04', title: 'Growth Activation', duration: 'Week 6-8', desc: 'Visibility campaigns. Social media presence. Guest communication workflows. Review generation system. The engine begins running — systematically attracting, converting, and retaining guests.' },
            { step: '05', title: 'Continuous Optimization', duration: 'Month 3+', desc: 'Monthly performance analysis. Conversion rate improvement. Strategy refinement based on actual booking data from the property. The system improves with every month of operation.' }
        ]
    },

    // ============================================================
    // DELIVERABLES
    // ============================================================
    deliverables: {
        website: {
            item: 'Direct Booking Website',
            detail: 'Hospitality-specific website architecture with integrated booking engine, payment gateway, WhatsApp booking, and SEO foundation. Pages structured around how travelers evaluate and book — room pages with professional photography, wedding and events showcase, restaurant presence, local area guide, and direct booking incentives.'
        },
        photography: {
            item: 'Professional Visual Foundation',
            detail: 'Complete property photography — every room type with correct lighting and composition, lobby, restaurant, banquet spaces, amenities, exteriors, and surrounding context. Drone photography for aerial perspective. Every image produced to compete with luxury chain visual standards.'
        },
        video: {
            item: 'Video Content Production',
            detail: 'Cinematic brand film communicating the property experience. Individual room tour videos. Drone videography. Guest experience content. Short-form video for social media discovery and YouTube presence.'
        },
        google: {
            item: 'Google Presence Optimization',
            detail: 'Google Business Profile complete optimization with professional photography, active weekly posting, review response management, Q&A monitoring, and Google Hotel Ads integration. Local SEO for destination and landmark search terms.'
        },
        ota: {
            item: 'OTA Presence Management',
            detail: 'Listing optimization across all relevant platforms. Professional photography deployed. Descriptions enhanced. Rate and availability parity maintained through channel manager. Active promotion management.'
        },
        social: {
            item: 'Social Media Presence',
            detail: 'Platform-specific content strategy for Instagram, Facebook, YouTube, and relevant channels. Content creation aligned with guest discovery behaviour. Consistent visual quality. Engagement management.'
        },
        branding: {
            item: 'Brand Identity System',
            detail: 'Complete brand identity including logo, design system, colour standards, typography, and application across all guest touchpoints — digital and physical. Consistent brand experience from first search to post-stay communication.'
        },
        automation: {
            item: 'Guest Communication System',
            detail: 'CRM with guest database capturing every stay. Automated communication workflows: booking confirmation, pre-arrival information, welcome message, post-stay thank you, review request, repeat stay offers, seasonal re-engagement, and special occasion recognition.'
        },
        marketing: {
            item: 'Creative Production',
            detail: 'Ongoing creation of visual and written content across all platforms. Social media content, campaign creative, promotional materials, and communication assets — all maintaining consistent brand quality.'
        },
        seo: {
            item: 'Search & Analytics',
            detail: 'Comprehensive SEO across technical, on-page, and local dimensions. Analytics implementation tracking every booking source and conversion point. Monthly performance reporting connecting digital activity to business outcomes.'
        }
    },

    // ============================================================
    // DIGITAL ASSETS
    // ============================================================
    digitalAssets: {
        'Foundation — Start Here': [
            'Direct Booking Website with Integrated Booking Engine',
            'Professional Property Photography (Complete)',
            'Google Business Profile Optimization',
            'WhatsApp Business Integration',
            'Basic SEO Foundation',
            'Analytics & Conversion Tracking'
        ],
        'Growth — Build on Foundation': [
            'Google Hotel Ads Integration',
            'OTA Listing Optimization Across Platforms',
            'Social Media Content & Presence',
            'Review Generation System',
            'Email Marketing Capability',
            'Direct Booking Incentive Structure'
        ],
        'Authority — Establish Your Brand': [
            'Cinematic Brand Film Production',
            'Drone Photography & Videography',
            'Wedding & Events Digital Showcase',
            'Guest Testimonial Video Collection',
            'Brand Identity System (Complete)',
            'Destination Authority Content'
        ],
        'Automation — Scale Operations': [
            'Channel Manager Configuration',
            'Guest CRM with Full History',
            'Communication Workflow Automation',
            'Automated Review Requests',
            'Abandoned Booking Recovery',
            'Re-engagement Campaign System'
        ],
        'Domination — Lead Your Market': [
            'Full OTA Portfolio Management',
            'YouTube Channel with Regular Content',
            'Influencer Collaboration Program',
            'TripAdvisor Reputation Management',
            'Competitor Monitoring System',
            'Monthly Performance Consulting'
        ]
    },

    // ============================================================
    // GROWTH OPPORTUNITIES
    // ============================================================
    growthOpportunities: [
        {
            opportunity: 'Wedding & Event Business Development',
            description: 'Wedding bookings deliver significant revenue across rooms, banquet, catering, and services — often at higher margins than transient business. A dedicated digital presence with professional showcase, virtual tours, and targeted visibility to wedding planners and families can substantially grow this revenue stream.'
        },
        {
            opportunity: 'Corporate Account Acquisition',
            description: 'Corporate clients provide consistent weekday occupancy that balances leisure-driven weekend demand. A structured corporate outreach program supported by a professional business booking portal and competitive corporate rates builds reliable base occupancy.'
        },
        {
            opportunity: 'Direct Booking Acceleration',
            description: 'Reducing OTA dependency from current levels through systematic direct booking capability building. Every percentage point shift from OTA to direct booking represents a meaningful margin improvement on the same room revenue.'
        },
        {
            opportunity: 'Restaurant Revenue Growth',
            description: 'The hotel restaurant serving non-resident diners becomes an additional profit centre rather than just a guest amenity. Local SEO for dining searches, social media food content, and platform presence on dining apps attract external customers.'
        },
        {
            opportunity: 'Off-Season Demand Generation',
            description: 'A guest database with communication capability transforms off-season marketing. Instead of discounting on OTAs, the hotel markets directly to past guests with compelling seasonal offers — higher conversion at lower cost.'
        },
        {
            opportunity: 'Ancillary Revenue Optimization',
            description: 'Airport transfers, spa services, meal upgrades, early check-in, and late checkout represent revenue opportunities that most hotels capture inconsistently. Systematic presentation of these options during booking and pre-arrival increases per-guest revenue.'
        }
    ],

    // ============================================================
    // FAQ
    // ============================================================
    faqs: [
        {
            question: 'We already have a website. Why would we need to change it?',
            answer: 'Most hotel websites function as brochures — they describe the property but do not sell rooms effectively. A booking website has an integrated booking engine, fast mobile booking flow, WhatsApp booking capability, direct booking incentives, and SEO structure designed for hospitality search terms. If your current website does not generate a meaningful percentage of bookings directly, it is an information page — not a revenue-generating asset.'
        },
        {
            question: 'How long before we see measurable results?',
            answer: 'Website and Google presence improvements typically show impact within weeks. Direct booking growth builds over months as visibility, trust, and conversion capability compound. OTA dependency reduction is a gradual shift measured over months to a year. Every month of operation generates data that refines the approach. Monthly reporting tracks every metric so progress is visible and measurable.'
        },
        {
            question: 'We already work with a marketing agency.',
            answer: 'Most agencies provide specific services — social media management, advertising, or website maintenance. I build complete ecosystems where every component connects: website, photography, Google presence, OTA management, guest CRM, and communication automation. If your current arrangement was delivering the direct booking percentage and guest retention you want, you would not be exploring alternatives.'
        },
        {
            question: 'Our property is relatively small. Is this approach relevant for us?',
            answer: 'Smaller properties often experience greater OTA dependency because they lack the resources to build direct booking capability independently. The financial impact of reducing commission on even a modest booking volume is meaningful. The ecosystem scales to the property size — the principles apply whether you operate a compact boutique property or a large full-service hotel.'
        },
        {
            question: 'What makes this approach different from what agencies offer?',
            answer: 'I do not start with a list of services. I start with diagnosis — studying the property, the market, the competitive set, and the current digital presence. I build complete systems rather than isolated components. I measure success through business metrics — direct booking percentage, commission reduction, repeat guest ratio — not marketing metrics. I have studied hospitality specifically, not marketing generally.'
        },
        {
            question: 'Can this be implemented in phases?',
            answer: 'Yes. The ecosystem is designed in progression layers. Foundation must come first — the booking website, Google presence, and professional photography establish the infrastructure. Visibility and growth layers follow. Automation and relationship systems build on what exists. Each phase generates value independently while enabling the next. The approach adapts to budget and timeline realities.'
        },
        {
            question: 'What do you need from us to get started?',
            answer: 'Access to understand the current digital presence thoroughly. Honest conversation about current booking sources, occupancy patterns, revenue structure, and business goals. Availability to discuss findings and priorities. The diagnosis phase reveals what needs to happen — you decide what to implement and at what pace based on clear recommendations and business rationale.'
        },
        {
            question: 'What about our existing OTA relationships?',
            answer: 'OTAs remain part of the distribution mix. The objective is not to eliminate OTAs — they provide genuine discovery value. The objective is to reduce dependency by building direct booking capability that captures guests who would prefer to book direct if given a compelling option. Many hotels maintain OTA presence for discovery while systematically growing direct booking share for profitability.'
        }
    ],

    // ============================================================
    // STATS
    // ============================================================
    stats: {
        'OTA Commission Range': '15-30% per booking',
        'Direct Booking Margin Advantage': 'Full revenue retained vs commission paid',
        'Professional Photo Impact': 'Significant conversion improvement over phone photography',
        'Travelers Starting Search on Google': 'Approximately 90%',
        'Average Touchpoints Before Booking': '8-12 information sources',
        'Repeat Guest vs New Guest Acquisition Cost': 'Repeat guests cost substantially less to acquire',
        'Review Rating Impact': 'Rating improvement correlates with revenue increase',
        'Mobile Travel Search Share': '60-70% of travel searches'
    }
};

console.log('✅ 11 Avtar Digital Hub — Hospitality loaded (Guest Conversion Ecosystem™)');
window.HOSPITALITY_DATA = HOSPITALITY_DATA;