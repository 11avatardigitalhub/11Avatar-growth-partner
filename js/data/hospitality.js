/**
 * ============================================================
 * 11 AVTAR DIGITAL HUB
 * 🏨 HOSPITALITY — Guest Conversion Ecosystem™
 * Premium Consulting-Grade Industry Blueprint
 * ============================================================
 */

const HOSPITALITY_DATA = {
    id: 'hospitality',
    name: 'Hospitality',
    icon: '🏨',
    slug: 'hospitality',
    signature: 'Guest Conversion Ecosystem™',

    // ============================================================
    // CORE UNDERSTANDING (Required by renderer)
    // ============================================================
    understanding: 'Your hotel is invisible to the guests searching for it right now. Not because your rooms are bad. Not because your service is poor. But because your digital presence was built by people who don\'t understand how travelers actually book hotels. The average traveler visits 8–12 websites before booking. If your hotel doesn\'t appear at every touchpoint — with compelling content — you lose. Every. Single. Time. 11 Avtar Digital Hub builds Guest Conversion Ecosystems™ that make hotels unignorable.',

    revenueModel: 'Hotels earn through room bookings (60–70% revenue), F&B (15–20%), banquets & events (10–15%), and ancillary services (5–10%). Direct bookings yield 15–25% higher margins than OTA bookings. A 10% increase in direct bookings can increase overall profitability by 40–50%.',

    customerPsychology: 'Travelers make emotional decisions based on visual appeal, social proof, and perceived value. They are risk-averse — choosing hotels that feel "safe" and "proven" through photos, videos, and reviews. The booking decision is made within 5–10 seconds of landing on a hotel website or OTA listing. Trust and visual appeal often outweigh a 10–15% price difference.',

    whyGenericFails: 'Generic agencies treat hotels like any other business — brochure website, social media posts, some ads. They don\'t understand OTA dynamics, direct booking psychology, guest journey mapping, or the visual storytelling hospitality demands. You don\'t need a website. You need a Guest Conversion Ecosystem.',

    // ============================================================
    // HOOK
    // ============================================================
    hook: {
        headline: 'Your Hotel Is Invisible to the Guests Searching for It Right Now.',
        subheadline: 'Not because your rooms are bad. Not because your service is poor. Because your digital presence was built by people who don\'t understand how travelers actually book hotels.',
        statLine: 'The average traveler visits 8–12 websites before booking. If your hotel doesn\'t appear at every touchpoint — you lose. Every. Single. Time.'
    },

    // ============================================================
    // CHALLENGES (Required by renderer — problem/whyItHappens/digitalSolution)
    // ============================================================
    challenges: [
        {
            problem: 'Booking.com Owns Your Guests — And Charges You 15–30% for the Privilege',
            whyItHappens: 'Hotels rely on OTAs for 60–80% of bookings because their own website is weak — no booking engine, poor SEO, low Google visibility, no direct booking incentives. On a ₹5,000/night room, ₹750–1,500 goes to OTA commission. For a 50-room hotel at 60% occupancy, that\'s ₹8–16 lakh lost annually.',
            digitalSolution: 'Premium direct-booking website with integrated booking engine, WhatsApp booking, and direct booking incentives. Google Hotel Ads and local SEO to capture travelers searching in your area. 11 Avtar Digital Hub reduces OTA dependency from 70% to 30–40% within 6–12 months.',
            assetsNeeded: ['Direct Booking Website', 'Booking Engine', 'WhatsApp Booking', 'Google Hotel Listing', 'Local SEO', 'Direct Booking Incentive Strategy']
        },
        {
            problem: 'Travelers Search Google Every Second. Your Hotel Isn\'t There.',
            whyItHappens: '90% of travelers start on Google. If your Google Business Profile is incomplete, you have few reviews, your website isn\'t SEO-optimized, and you\'re not running Google Hotel Ads — you\'re invisible. Competitors who appear capture these bookings.',
            digitalSolution: 'Complete Google Business Profile optimization with professional photos, weekly posts, review responses. Local SEO targeting "hotels in [city]" and "best stay in [area]." Google Hotel Ads with direct booking link. 11 Avtar Digital Hub gets your hotel into the top 3 Google results.',
            assetsNeeded: ['Google Business Profile', 'Local SEO', 'Google Hotel Ads', 'Review Management', 'Professional Photography']
        },
        {
            problem: 'Your Hotel Photos Are Costing You Bookings.',
            whyItHappens: 'Travelers cannot touch or feel a hotel room before booking — they rely entirely on what they SEE. Amateur phone photos signal "budget" and "unprofessional." Professional photography increases booking conversion by 40–60%. This is data, not opinion.',
            digitalSolution: 'Professional photography of every room type, all amenities, restaurant, banquet, and exterior. Drone videography for aerial views. Cinematic brand film (2–3 minutes). Room tour videos. Social media reels (15–20/month). 11 Avtar Digital Hub provides complete visual content production — all under one roof.',
            assetsNeeded: ['Professional Photography (50–80 images)', 'Drone Photography', 'Cinematic Brand Film', 'Room Tour Videos', 'Social Media Reels', 'Food Photography']
        },
        {
            problem: 'Guests Who Loved Their Stay Never Come Back.',
            whyItHappens: 'No CRM. No follow-up messages. No review requests. No "we miss you" offers. No birthday wishes. Guests forget within 7 days. Acquiring a new guest costs 5–7x more than retaining an existing one. Your retention strategy doesn\'t exist.',
            digitalSolution: 'CRM system capturing guest data. Automated WhatsApp/email workflows: booking confirmation → pre-arrival guide → check-in welcome → post-checkout thank you → review request → repeat stay offer → birthday wishes. Loyalty program with points and perks. 11 Avtar Digital Hub builds retention engines that turn one-time guests into lifetime customers.',
            assetsNeeded: ['CRM System', 'WhatsApp Automation', 'Email Automation', 'Review Request System', 'Loyalty Program', 'Guest Database']
        },
        {
            problem: 'Missed Revenue from Weddings, Events & Corporate Stays',
            whyItHappens: 'No dedicated wedding page. No banquet photo gallery. No corporate booking form. No event packages displayed online. Wedding bookings alone generate 3–5x regular room revenue. Corporate tie-ups provide consistent weekday occupancy.',
            digitalSolution: 'Dedicated landing pages for weddings, corporate events, and banquets with professional photos, virtual tours, package details, and inquiry forms. Targeted Google and Instagram ads. Corporate booking portal with special rates. 11 Avtar Digital Hub unlocks hidden revenue streams most hotels ignore online.',
            assetsNeeded: ['Wedding Landing Page', 'Banquet Photo Gallery', 'Corporate Booking Page', 'Event Packages PDF', 'Virtual Venue Tour', 'Targeted Ads']
        }
    ],

    // ============================================================
    // ROOT CAUSE
    // ============================================================
    rootCause: {
        headline: 'The Problem Isn\'t Your Hotel. It\'s the Approach.',
        insight: 'Most digital agencies treat hotels like any other business. They build a brochure website, post on social media, run some ads. They don\'t understand OTA dynamics, direct booking psychology, guest journey mapping, or visual storytelling. You don\'t need a website. You need a Guest Conversion Ecosystem.',
        pillars: [
            { title: 'Discovery Engine', desc: 'Appear everywhere travelers search — Google, OTAs, Instagram, YouTube, TripAdvisor — with content that stops the scroll.' },
            { title: 'Trust Architecture', desc: 'Professional photography, cinematic video, genuine reviews, and social proof that makes guests feel safe booking with you.' },
            { title: 'Conversion System', desc: 'Direct booking website with integrated engine, WhatsApp booking, instant confirmation — no friction, no OTA commission.' },
            { title: 'Retention Flywheel', desc: 'Automated guest communication from booking → check-in → checkout → review → repeat stay offer. Every touchpoint designed.' }
        ]
    },

    // ============================================================
    // DIFFERENTIATOR
    // ============================================================
    differentiator: {
        headline: 'We Don\'t Build Hotel Websites. We Build Guest Conversion Machines.',
        points: [
            'Industry-first diagnosis — we study your property, market, competition, and guest demographics before writing a single line of code',
            'OTA-to-Direct migration strategy — systematic reduction of commission dependency through direct booking optimization',
            'Visual storytelling at global luxury standards — the same quality of photography and video that 5-star international chains use',
            'Complete ecosystem under one roof — no coordinating between web developer, photographer, social media manager, and ad agency',
            'Revenue-focused, not vanity-focused — we measure success in bookings, RevPAR, and direct booking percentage, not likes and followers'
        ]
    },

    // ============================================================
    // CUSTOMER JOURNEY (Required by renderer)
    // ============================================================
    customerJourney: {
        discovery: {
            title: 'Stage 1: Traveler Discovery',
            description: 'The traveler decides to visit a city and begins searching. They don\'t know your hotel exists. You must appear wherever they search.',
            psychology: 'Travelers are in exploration mode — open to options, comparing. They trust Google results, OTA listings, and social media. First impression forms in 3 seconds based on photos and ratings.',
            channels: ['Google Search & Maps', 'Instagram', 'YouTube', 'TripAdvisor', 'Booking.com / MMT / Goibibo / Agoda', 'Facebook Travel Groups', 'Pinterest'],
            digitalRequirements: ['Google Business Profile optimized', 'Local SEO targeting city + area keywords', 'Google Hotel Ads', 'Instagram professional content', 'YouTube channel with room tours', 'Optimized OTA listings']
        },
        trust: {
            title: 'Stage 2: Trust Building',
            description: 'The traveler evaluates your hotel. They seek validation through photos, reviews, videos, and social proof.',
            psychology: 'Travelers are risk-averse — they fear booking a "bad" hotel. They seek: reviews (quantity + quality), professional photos, video content. A hotel with 50+ reviews and 4.5+ rating wins over one with 5 reviews — even if cheaper.',
            channels: ['Google Reviews', 'TripAdvisor Rating', 'Booking.com Review Score', 'Professional Room Photos', 'Video Room Tours', 'Social Media Presence', 'Guest Testimonials'],
            digitalRequirements: ['Professional website with high-quality imagery', 'Video content — room tours, walkthrough, drone', 'Review generation system', 'Active review response management', 'Virtual tour or 360° views', 'Social proof section on website']
        },
        conversion: {
            title: 'Stage 3: Booking Conversion',
            description: 'The traveler is ready to book. Any friction — complex form, no WhatsApp, no instant confirmation — and they book elsewhere.',
            psychology: 'Booking anxiety is real. Travelers want: instant confirmation, clear pricing, flexible cancellation, multiple payment options. A quick WhatsApp option often seals the booking.',
            channels: ['Direct Website Booking Engine (0% commission)', 'WhatsApp Booking', 'Phone Call / Enquiry Form', 'OTA Booking (15–30% commission)'],
            digitalRequirements: ['Booking engine with real-time availability', 'WhatsApp Business API', 'Multiple payment gateways', 'Instant confirmation via email + WhatsApp', 'Special offers for direct booking', 'Remarketing ads']
        },
        retention: {
            title: 'Stage 4: Guest Retention',
            description: 'The guest completed their stay. Most hotels stop here. 11 Avtar Digital Hub knows this is where real growth begins.',
            psychology: 'A guest who had a great stay is emotionally positive for 48–72 hours after checkout. This is the golden window. Personalized follow-up increases return likelihood by 3x.',
            channels: ['WhatsApp (follow-up, offers, wishes)', 'Email (newsletter, offers)', 'CRM System', 'Loyalty Program Portal', 'Instagram (stay connected)'],
            digitalRequirements: ['CRM system with guest data', 'Automated WhatsApp/email workflows', 'Review generation system', 'Loyalty program', 'Referral tracking system']
        }
    },

    // ============================================================
    // WEBSITE ARCHITECTURE (Required by renderer)
    // ============================================================
    websiteArchitecture: [
        'Homepage: Cinematic hero, booking widget above fold, room showcase, reviews, location map, offers, WhatsApp button',
        'Individual Room Pages: 8–12 professional photos, amenities, dynamic pricing, instant "Book This Room" CTA, virtual tour',
        'Wedding & Events Venue Page: Banquet gallery, capacity details, packages PDF, virtual tour, inquiry form, client testimonials',
        'Restaurant Page: Food photography, digital menu, table reservation, chef introduction, Zomato/Swiggy links',
        'Corporate Booking Page: Corporate rates, meeting room details, business amenities, inquiry form, client logos',
        'Support Pages: Nearby Attractions Guide, Photo Gallery, Blog, FAQ, Contact, Offers & Packages, About Us'
    ],

    // ============================================================
    // PLATFORM ECOSYSTEM (Required by renderer)
    // ============================================================
    platformEcosystem: {
        discovery: {
            title: 'Discovery Platforms — Where Travelers Find You',
            platforms: ['Google Search & Maps', 'Google Hotel Ads', 'Instagram', 'YouTube', 'TripAdvisor', 'Facebook Travel Groups', 'Pinterest']
        },
        trust: {
            title: 'Trust Platforms — Where Travelers Verify You',
            platforms: ['Google Business Profile', 'TripAdvisor', 'Booking.com Reviews', 'MakeMyTrip Ratings', 'Your Website', 'YouTube', 'Instagram']
        },
        conversion: {
            title: 'Conversion Platforms — Where Travelers Book',
            platforms: ['Direct Booking Website (0% commission)', 'WhatsApp Business', 'Booking.com', 'MakeMyTrip', 'Goibibo', 'Agoda', 'Airbnb', 'Expedia']
        },
        retention: {
            title: 'Retention Platforms — Keeping Guests Coming Back',
            platforms: ['WhatsApp', 'Email', 'CRM System', 'Loyalty Program Portal', 'Instagram', 'Google Business']
        }
    },

    // ============================================================
    // CONTENT STRATEGY (Required by renderer)
    // ============================================================
    contentStrategy: {
        philosophy: 'Hotel content must help travelers VISUALIZE their stay before booking. Every photo, video, and post should answer: "What will my experience be like?" Content must be immersive, authentic, and experience-driven.',
        pillars: [
            {
                name: 'Room Experience Content',
                whyItMatters: 'The room is the #1 decision factor. Professional room photos increase booking conversion by 40–60%.',
                formats: ['Professional room photos (8–12 per room type)', 'Room tour videos (60–90 seconds)', '360° room views', 'Instagram Reels — room reveals, morning views', 'YouTube Shorts — room highlights'],
                frequency: 'Photography: once, update every 2 years. Videos: once per room type. Reels: 4–6 per month.'
            },
            {
                name: 'Local Destination & Experience Content',
                whyItMatters: 'Travelers plan their entire trip, not just the stay. Local content positions your hotel as a trusted guide.',
                formats: ['Nearby Attractions Guide', '"24 Hours in [City]" videos', '"Top 5 Things Near [Hotel]" Reels', 'Local food guide', 'Seasonal content'],
                frequency: 'Blog: 2–4 posts/month. Videos: 1–2/quarter. Reels: 3–5/month.'
            },
            {
                name: 'Guest Stories & Social Proof',
                whyItMatters: 'Real guest experiences are the most powerful trust-building tool.',
                formats: ['Video testimonials (30–60 seconds)', 'UGC reposts', 'Review highlight graphics', '"Guest of the Month" features'],
                frequency: 'Testimonials: 2–4/month. UGC: 5–10/week. Review graphics: weekly.'
            },
            {
                name: 'Seasonal & Promotional Content',
                whyItMatters: 'Drives urgency and fills rooms during low season.',
                formats: ['Festival package pages', 'Weekend getaway deals', 'Early bird discounts', 'Instagram/Facebook ad creatives', 'WhatsApp broadcast offers'],
                frequency: 'As per hotel calendar — festivals, long weekends, off-season periods.'
            }
        ]
    },

    // ============================================================
    // DELIVERABLES (Required by renderer)
    // ============================================================
    deliverables: {
        website: { item: 'Premium Booking Website', qty: '15–18 Pages', detail: 'Home, Room Pages (4 types), Wedding Venue, Banquet, Restaurant, Corporate, Gallery, Nearby Guide, Blog, Offers, FAQ, Contact, About — with Booking Engine, Payment Gateway, WhatsApp, SEO, Analytics.' },
        photography: { item: 'Luxury-Grade Photography', qty: '50–80 Images + 10–15 Drone', detail: 'Every room type (8–12 each), lobby, restaurant, banquet, pool, gym, spa, exterior, food, staff. Drone aerial views.' },
        video: { item: 'Cinematic Video Production', qty: '3–5 Films + 15–20 Reels/Month', detail: '1 Brand Film (2–3 min), Room Tours, Drone Video, Guest Experience Film. 15–20 Reels monthly.' },
        google: { item: 'Google Dominance Package', qty: 'Complete + Weekly Management', detail: 'Business Profile, 50+ photos, weekly posts, review responses, Q&A, Google Hotel Ads, Maps ranking.' },
        ota: { item: 'OTA Network Management', qty: '7–10 Platforms', detail: 'Booking.com, MMT, Goibibo, Agoda, Airbnb, Expedia, TripAdvisor, Cleartrip, Yatra, Google Hotels.' },
        social: { item: 'Social Media Command', qty: '25–30 Posts/Month', detail: 'Instagram (12–15 + stories + reels), Facebook (8–10), YouTube (2–4), Pinterest (5–10). Content calendar, engagement.' },
        branding: { item: 'Brand Identity System', qty: '25+ Items', detail: 'Logo, Brand Guide, Visiting Cards, Letterhead, Welcome Card, WiFi Card, QR Menu, Key Card, Signage, Staff ID, Menu Design.' },
        automation: { item: 'Guest Communication Engine', qty: '7 Automated Workflows', detail: 'Booking Confirmation → Payment Reminder → Pre-Arrival → Welcome → Thank You → Review Request → Repeat Offer → Birthday Wishes.' },
        marketing: { item: 'Creative Production', qty: '15–20 Designs/Month', detail: 'Social posts, Stories, Reels covers, WhatsApp posters, Festival campaigns, Offer banners, Brochure PDF, Presentation deck.' },
        seo: { item: 'Search Engine Command', qty: 'Monthly Ongoing', detail: '50+ keywords, on-page SEO, technical SEO, local SEO, monthly reports with actionable insights.' }
    },

    // ============================================================
    // DIGITAL ASSETS (Required by renderer — checkbox categories)
    // ============================================================
    digitalAssets: {
        'Foundation — Where Every Hotel Must Start': [
            'Premium Booking Website (15–18 Pages)',
            'Professional Photography (50–80 Images)',
            'Google Business Profile Optimization',
            'WhatsApp Business Integration',
            'Basic SEO Setup',
            'Analytics & Tracking'
        ],
        'Growth — Accelerate Direct Bookings': [
            'Google Hotel Ads',
            'Booking.com Listing Optimization',
            'MakeMyTrip & Goibibo Management',
            'Instagram Content & Reels (15–20/month)',
            'Review Generation System',
            'Email Marketing Automation'
        ],
        'Authority — Build a 5-Star Brand': [
            'Cinematic Brand Film (2–3 min)',
            'Drone Photography & Videography',
            'Wedding & Events Landing Page',
            'Corporate Booking Portal',
            'Brand Identity Package (25+ Items)',
            'Guest Loyalty Program Setup'
        ],
        'Automation — Scale Without Adding Staff': [
            'WhatsApp Booking Automation',
            'Guest Pre-Arrival & Post-Stay Workflows',
            'CRM with Guest History',
            'Automated Review Requests',
            'Birthday & Anniversary Campaigns',
            'Revenue Management Integration'
        ],
        'Domination — Outperform Every Competitor': [
            '7–10 OTA Platform Management',
            'YouTube Channel with Video Content',
            'Influencer Collaboration Program',
            'TripAdvisor Reputation Management',
            'Competitor Monitoring & Strategy',
            'Monthly Performance Consulting'
        ]
    },

    // ============================================================
    // GROWTH OPPORTUNITIES
    // ============================================================
    growthOpportunities: [
        { opportunity: 'Wedding & Event Business', potential: 'Very High', description: 'Wedding bookings generate 3–5x regular room revenue. Dedicated landing page, virtual tour, targeted ads for "wedding venues in [city]."' },
        { opportunity: 'Corporate Tie-up & MICE', potential: 'High', description: 'Corporate clients provide consistent weekday occupancy. Corporate booking portal, meeting room packages, LinkedIn outreach.' },
        { opportunity: 'Direct Booking Growth', potential: 'Very High', description: 'Reduce OTA commission from 25% to 0% on direct bookings. Direct booking incentives, retargeting ads, email marketing to past guests.' },
        { opportunity: 'Restaurant Revenue Growth', potential: 'Medium-High', description: 'Attract non-resident diners through Google Food, Zomato, Instagram food content, and local SEO.' }
    ],

    // ============================================================
    // TRANSFORMATION JOURNEY
    // ============================================================
    transformationJourney: {
        headline: 'From Invisible to Unignorable — Your Hotel\'s Digital Transformation',
        stages: [
            { step: '01', title: 'Discovery & Diagnosis', duration: 'Week 1–2', desc: 'Deep analysis of your property, market position, guest demographics, competitor digital presence. We identify exactly where you\'re losing guests and revenue.' },
            { step: '02', title: 'Visual Foundation', duration: 'Week 2–3', desc: 'Professional photography, drone videography, cinematic brand film. The content that will sell your experience everywhere.' },
            { step: '03', title: 'Digital Architecture', duration: 'Week 3–6', desc: 'Custom booking website, Google optimization, OTA listing management across 7–10 platforms.' },
            { step: '04', title: 'Growth Engine Launch', duration: 'Week 6–8', desc: 'Social media, ads, WhatsApp CRM, guest automation workflows, review generation system.' },
            { step: '05', title: 'Optimization & Scale', duration: 'Month 3+', desc: 'Monthly analysis, conversion optimization, A/B testing, continuous improvement based on real data.' }
        ]
    },

    // ============================================================
    // FAQ
    // ============================================================
    faqs: [
        { question: 'We already have a website. Why would we need a new one?', answer: 'Most hotel websites are online brochures — they show rooms but don\'t sell them. A proper booking website has: integrated booking engine, WhatsApp booking, direct booking incentives, mobile-first design, fast loading, and SEO structure. If your website isn\'t generating 20–30% of bookings directly, it\'s not working hard enough.' },
        { question: 'How long until we see real results?', answer: 'Website and Google presence start working within 4–6 weeks. Direct booking growth shows measurable improvement within 3–4 months. OTA dependency reduction from 70% to 30–40% is a 6–12 month journey. Monthly reports track every improvement.' },
        { question: 'What if we already work with a marketing agency?', answer: 'Most agencies manage social media and run ads. We build the complete digital ecosystem — website, booking engine, photography, video, Google, OTA, CRM, automation. If your current agency delivered everything you need, you wouldn\'t be talking to us.' },
        { question: 'We\'re a small hotel. Is this relevant for us?', answer: 'Small hotels lose a HIGHER percentage of revenue to OTAs because they have fewer direct booking resources. A 20-room property losing 25% to commissions needs this MORE than a 200-room chain. Solutions scale to your size and budget.' },
        { question: 'What makes 11 Avtar Digital Hub different?', answer: 'We don\'t start with services. We start with your industry. We diagnose before recommending. We build complete ecosystems — not piecemeal services. We measure success in bookings and revenue, not vanity metrics.' }
    ],

    // ============================================================
    // STATS
    // ============================================================
    stats: {
        'OTA Commission Drain': '15–30% per booking',
        'Direct Booking Profit': '40–50% more vs OTA',
        'Professional Photo Impact': '40–60% higher conversion',
        'Google as Starting Point': '90% of travelers',
        'Repeat Guest Value': '5–7x cheaper than new guest',
        'Review Rating Impact': '1-star = 11% revenue'
    }
};

console.log('✅ 11 Avtar Digital Hub — Hospitality loaded (Guest Conversion Ecosystem™)');
window.HOSPITALITY_DATA = HOSPITALITY_DATA;