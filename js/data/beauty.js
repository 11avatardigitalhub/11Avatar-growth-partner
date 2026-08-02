/**
 * ============================================================
 * 11 AVTAR DIGITAL HUB
 * 💄 BEAUTY & SALON INDUSTRY BLUEPRINT
 * Beauty Brand Attraction System™
 * Industry Growth Intelligence System™
 * ============================================================
 */

const BEAUTY_DATA = {
    id: 'beauty',
    name: 'Beauty & Salon',
    icon: '💄',
    slug: 'beauty',
    signature: 'Beauty Brand Attraction System™',

    // ============================================================
    // RULE A: INDUSTRY UNDERSTANDING
    // ============================================================
    understanding: 'Beauty and salon business is built on visual proof, personal trust, and convenience. A client does not "buy" a haircut or facial — they invest in how they will look and feel afterward. The decision is deeply emotional and visual. Before booking, a client typically browses Instagram for stylist portfolios, checks before/after photos, reads reviews, evaluates pricing, and checks online booking convenience. Unlike most industries, the "product" is created live on the client — they cannot preview the exact outcome. Trust is built through the stylist\'s portfolio, consistent quality proof, and social validation. 11 Avtar Digital Hub understands that beauty marketing is about showcasing transformation, building stylist authority, and making booking frictionless. A salon with a strong digital presence — professional portfolio, genuine reviews, easy online booking — attracts 3-5x more clients than one relying on walk-ins.',

    revenueModel: 'Salons earn through service fees (haircuts, coloring, facials, treatments — 70-80%), product sales (shampoos, serums, cosmetics — 10-15%), and packages/memberships (bridal, monthly — 10-15%). Average ticket size ranges from ₹500-5,000 per visit. A salon serving 20 clients/day at ₹1,500 average generates ₹90,000/month per chair. Digital channels — Instagram portfolio, Google Maps discovery, online booking — can increase client volume by 40-60%. Product sales through digital catalog and social media add 20-30% incremental revenue.',

    customerPsychology: 'Beauty decisions are emotional and personal. Clients seek: (1) Transformation — they want to look better, feel confident, (2) Trust in the stylist — they fear a bad haircut or skin reaction, (3) Social validation — they choose salons their friends go to or that have great reviews, (4) Convenience — easy booking, timely service, pleasant experience. Before/after photos are the single most powerful conversion tool — they prove the stylist\'s capability. Instagram is the primary discovery platform — 70%+ of beauty clients discover salons through Instagram. Clients are loyal to stylists, not salons — if a stylist leaves, clients often follow.',

    whyGenericFails: 'Generic marketing agencies treat salons like any retail business — they create a basic website, post random beauty tips, and run "best salon" ads. They do not understand: (1) The stylist-client relationship — marketing must build individual stylist brands, not just the salon brand, (2) The power of before/after visual proof — generic beauty tips do not convert like transformation photos, (3) Instagram as the primary discovery and portfolio platform, (4) Online booking integration — clients expect instant booking, not phone calls, (5) The bridal and occasion market — high-value packages that require dedicated marketing. Generic marketing results in low engagement, poor conversion, and undifferentiated brand presence. 11 Avtar Digital Hub builds Beauty Brand Attraction Systems™ that showcase transformations, build stylist authority, and make booking irresistible.',

    // ============================================================
    // RULE B: BUSINESS CHALLENGES (5 challenges)
    // ============================================================
    challenges: [
        {
            problem: 'No Online Booking — Losing Impatient Clients',
            whyItHappens: 'Clients want to book appointments instantly — at 10 PM, during lunch break, on weekends. If the salon only accepts phone bookings (busy signals, no answer after hours), clients simply book the next salon that offers online booking. 40-50% of potential bookings are lost due to lack of online scheduling.',
            digitalSolution: 'Implement online booking system integrated with website and Instagram. Show real-time stylist availability, service selection, duration, and pricing. Allow instant booking with automated WhatsApp/email confirmation. Enable rescheduling and cancellation. Add "Book Now" button on Google Business Profile and Instagram. 11 Avtar Digital Hub builds frictionless booking systems that capture bookings 24/7, increasing appointment volume by 30-50%.',
            assetsNeeded: ['Online Booking System', 'WhatsApp Booking Integration', 'Google Reserve Integration', 'Automated Confirmations & Reminders', 'Instagram Booking Button']
        },
        {
            problem: 'Stylist Portfolio Not Visible — Individual Talent Hidden',
            whyItHappens: 'Clients choose stylists, not salons. But most salons do not showcase individual stylist work. There are no stylist profile pages, no personal portfolios, no before/after galleries per stylist. When a potential client searches "[stylist name] salon" or browses Instagram for haircut inspiration, they cannot find or evaluate the stylist. Stylists with no online portfolio lose clients to those who showcase their work.',
            digitalSolution: 'Create individual stylist profile pages on the salon website with professional photo, bio, specializations, experience, and personal before/after gallery. Dedicated Instagram highlight per stylist. Video introduction of each stylist (1-2 min). Feature stylists in social media content — "Meet [Name], our color specialist." 11 Avtar Digital Hub builds stylist brands within the salon brand, making every stylist discoverable and bookable.',
            assetsNeeded: ['Stylist Profile Pages', 'Before/After Portfolio Gallery', 'Stylist Introduction Videos', 'Instagram Highlights per Stylist', 'Individual Booking Links']
        },
        {
            problem: 'Weak Instagram Presence — Missing the #1 Discovery Platform',
            whyItHappens: 'Instagram is where beauty clients live. 70%+ discover salons through Instagram. But most salon Instagram accounts are poorly managed — inconsistent posting, low-quality phone photos, no before/after content, no reels, no engagement. A salon with 500 followers and 10 posts looks unprofessional compared to competitors with 10,000+ followers and professional content.',
            digitalSolution: 'Develop professional Instagram strategy: (1) Professional photoshoot of all services — before/after transformations, (2) Reels strategy — 15-20 reels/month showing transformations, techniques, BTS, (3) Stories — daily updates, client features, offers, (4) Stylist takeovers, (5) Influencer collaborations. 11 Avtar Digital Hub manages complete Instagram presence — content creation, posting, engagement, and growth strategy — taking salons from invisible to influential.',
            assetsNeeded: ['Professional Photoshoot', 'Before/After Content Series', 'Reels Production (15-20/month)', 'Instagram Strategy & Management', 'Influencer Collaboration Program']
        },
        {
            problem: 'No Client Retention — One-Time Visitors',
            whyItHappens: 'Salons focus on attracting new clients but have no system to retain existing ones. There is no re-booking reminder, no loyalty program, no birthday offers, no follow-up after a service. A client who gets a great haircut has no automated reason to return. Client acquisition costs 5-7x more than retention. A client who visits once and never returns represents lost lifetime value of ₹50,000-₹2,00,000.',
            digitalSolution: 'Implement client retention system: (1) Post-service follow-up WhatsApp (same day — "How are you loving your new look?"), (2) Re-booking reminder based on service cycle (haircut: 4-6 weeks, color touch-up: 3-4 weeks), (3) Birthday/Anniversary special offers, (4) Loyalty program — points per visit, redeemable for services/products, (5) "Bring a friend" referral program. 11 Avtar Digital Hub builds retention engines that increase client lifetime value by 300-500%.',
            assetsNeeded: ['CRM/Client Database', 'Re-booking Automation', 'Loyalty Program', 'Birthday/Anniversary Campaigns', 'Referral Program', 'Post-Service Follow-up']
        },
        {
            problem: 'Bridal & Occasion Market Not Tapped Digitally',
            whyItHappens: 'Bridal packages are the highest-value salon service (₹15,000-₹1,50,000+ per bride). But most salons do not market bridal services digitally — no bridal landing page, no bridal before/after gallery, no bridal package PDF, no targeted ads for "bridal makeup in [city]." Brides search extensively online before booking — if your salon is not visible, you lose these premium bookings to competitors.',
            digitalSolution: 'Create dedicated bridal marketing: (1) Bridal landing page with packages, pricing, and before/after gallery, (2) Bridal trial booking system, (3) Targeted Instagram/Facebook ads for "bridal makeup [city]" and "wedding beauty packages," (4) Collaboration with wedding planners and photographers for cross-promotion, (5) Bridal testimonial videos. 11 Avtar Digital Hub unlocks the high-value bridal market through dedicated digital marketing.',
            assetsNeeded: ['Bridal Landing Page', 'Bridal Before/After Gallery', 'Bridal Package PDF', 'Targeted Bridal Ads', 'Wedding Vendor Collaborations']
        }
    ],

    // ============================================================
    // RULE C: CUSTOMER JOURNEY
    // ============================================================
    customerJourney: {
        discovery: {
            title: 'Stage 1: Beauty Search — Where Do Clients Look?',
            description: 'A person wants a haircut, facial, or bridal makeup. They immediately search for options — primarily on Instagram and Google.',
            psychology: 'Beauty decisions are visual and impulsive. Clients scroll through Instagram looking for inspiration and stylists whose work they admire. They want to see transformations — "Can this stylist make ME look that good?" Google search is for local discovery — "salon near me," "best haircut in [area]."',
            channels: [
                'Instagram (portfolio browsing, before/after, reels, geo-tagged posts, influencer recommendations)',
                'Google Search ("salon near me", "best hair stylist [city]", "bridal makeup [area]")',
                'Google Maps (browsing nearby salons, checking photos and reviews)',
                'Pinterest (hairstyle inspiration, makeup looks)',
                'YouTube (tutorials, salon tours, client transformations)',
                'WhatsApp (friend recommendations, group discussions)',
                'Facebook Groups (local community recommendations)'
            ],
            digitalRequirements: [
                'Professional Instagram profile with portfolio content',
                'Google Business Profile with photos, reviews, and booking',
                'SEO-optimized website for local beauty searches',
                'YouTube channel with transformation videos',
                'Pinterest boards with hairstyle and makeup inspiration'
            ]
        },
        trust: {
            title: 'Stage 2: Stylist Evaluation — What Builds Trust?',
            description: 'The client has found the salon and is now evaluating: "Can they deliver the look I want?" They are scrutinizing the portfolio.',
            psychology: 'Transformation proof is everything. Before/after photos showing dramatic, beautiful results build instant trust. Stylist credentials (training, experience, specialization) add authority. Reviews from real clients provide social proof. A stylist with 50+ before/after photos and 4.8+ rating wins over one with 5 photos.',
            trustFactors: [
                'Before/After photo gallery (the #1 trust builder in beauty)',
                'Stylist portfolio with individual work showcased',
                'Google Reviews (quantity > 50, rating > 4.5)',
                'Video content — transformation videos, stylist introductions',
                'Professional salon photos (clean, modern, well-equipped)',
                'Stylist qualifications, training, certifications',
                'Client testimonial videos and written reviews',
                'Product brands used (professional brands build trust)'
            ],
            digitalRequirements: [
                'Professional before/after photoshoot',
                'Individual stylist portfolio pages',
                'Review generation system',
                'Stylist introduction videos',
                'Salon interior professional photography'
            ]
        },
        conversion: {
            title: 'Stage 3: Booking — Making It Instant and Easy',
            description: 'The client is ready to book. They want to select their preferred stylist, service, and time slot — instantly.',
            psychology: 'Booking friction is the #1 reason clients abandon. They want: see availability, select stylist, book in 30 seconds. If they have to call and wait, 40-50% will abandon. They also want price transparency — hidden pricing creates distrust.',
            conversionMethods: [
                'Online Booking (website/app — 24/7, instant confirmation)',
                'Instagram Booking (direct link in bio, story swipe-up)',
                'WhatsApp Booking (personal, popular for first-time clients)',
                'Google Business "Book Now" button',
                'Phone Booking (declining but still used)',
                'Walk-in (reduced by online systems)'
            ],
            digitalRequirements: [
                'Online booking system with real-time availability',
                'Stylist selection during booking',
                'Service menu with clear pricing',
                'Automated confirmation (WhatsApp + email + SMS)',
                'Booking reminder (24h and 2h before)',
                'Easy reschedule/cancel option'
            ]
        },
        retention: {
            title: 'Stage 4: Coming Back — Building Client Loyalty',
            description: 'The client has had a great service. This is where lifetime relationships are built — or lost forever.',
            psychology: 'Post-service satisfaction peaks within 24 hours. This is the golden window to: get a review, book the next appointment, and enroll in loyalty. A client who receives a personalized follow-up feels valued. A client who hears nothing forgets within weeks. Beauty services are recurring by nature — haircuts every 4-6 weeks, facials monthly — automated re-booking reminders turn one-time clients into regulars.',
            retentionStrategies: [
                'Post-service follow-up WhatsApp (same day — "Hope you\'re loving your new look, [Name]!")',
                'Re-booking reminder based on service cycle (haircut: 4 weeks, color: 3 weeks, facial: 4 weeks)',
                'Loyalty program — points per visit, redeemable for discounts or free services',
                'Birthday month special offer',
                'Referral program — "Refer a friend, you both get 20% off"',
                'New service launch announcements to existing clients',
                'Exclusive preview events for loyal clients'
            ],
            digitalRequirements: [
                'CRM with client database, service history, preferences',
                'Automated re-booking reminders',
                'Loyalty program software',
                'Referral tracking system',
                'WhatsApp marketing automation',
                'Email marketing for offers and events'
            ]
        }
    },

    // ============================================================
    // RULE D: WEBSITE ARCHITECTURE
    // ============================================================
    websiteArchitecture: {
        overview: 'A beauty website must showcase transformations and make booking effortless. Every page should build trust in the stylists and drive appointments. 11 Avtar Digital Hub designs salon websites that convert browsers into booked clients.',
        pages: [
            {
                name: 'Homepage',
                purpose: 'Immediate visual impact with transformation showcase and booking CTA',
                features: [
                    'Hero section with transformation video or before/after slider',
                    'Book Now CTA (prominent, above the fold)',
                    'Top stylists showcase with photos and specializations',
                    'Before/After gallery preview',
                    'Google Reviews and rating display',
                    'Service categories with icons and starting prices',
                    'Location with Google Map and hours',
                    'WhatsApp floating button'
                ]
            },
            {
                name: 'Stylist Profile Pages',
                purpose: 'Build individual stylist brands — the core trust pages',
                features: [
                    'Professional stylist photo',
                    'Bio — experience, training, specializations, philosophy',
                    'Personal before/after gallery (15-20 photos)',
                    'Video introduction (1-2 min)',
                    'Services offered with pricing',
                    'Client reviews specific to this stylist',
                    'Direct booking link — "Book with [Stylist Name]"',
                    'Instagram portfolio link'
                ]
            },
            {
                name: 'Service Menu Page',
                purpose: 'Complete service catalog with clear pricing',
                features: [
                    'Categorized services (Hair, Skin, Makeup, Nails, Spa)',
                    'Each service with description, duration, price',
                    'Before/After examples per service category',
                    'Book Now button on each service',
                    'Package deals and memberships highlighted',
                    'Bridal and occasion packages prominently featured'
                ]
            },
            {
                name: 'Before/After Gallery',
                purpose: 'The most powerful conversion tool — proof of transformation',
                features: [
                    'Filterable gallery by service type (hair, makeup, skin, nails)',
                    'Filterable by stylist',
                    'Side-by-side before/after slider',
                    'Client testimonial with each transformation (with consent)',
                    'Video transformations',
                    'Book This Look CTA'
                ]
            },
            {
                name: 'Bridal & Occasion Page',
                purpose: 'Capture high-value bridal and event bookings',
                features: [
                    'Bridal package details with pricing',
                    'Bridal before/after gallery',
                    'Trial booking system',
                    'Bridal testimonial videos',
                    'Wedding timeline and preparation guide',
                    'Collaboration with makeup artists and mehendi artists',
                    'Inquiry form for custom bridal packages'
                ]
            },
            {
                name: 'Online Booking System',
                purpose: 'Frictionless appointment booking',
                features: [
                    'Real-time availability calendar',
                    'Service selection with duration and price',
                    'Stylist selection',
                    'Date and time picker',
                    'Instant confirmation via WhatsApp and email',
                    'Pre-visit instructions (for certain treatments)',
                    'Cancellation and reschedule policy'
                ]
            }
        ]
    },

    // ============================================================
    // RULE E: PLATFORM ECOSYSTEM
    // ============================================================
    platformEcosystem: {
        discovery: {
            title: 'Discovery Platforms — Where Beauty Clients Find You',
            platforms: [
                'Instagram (portfolio, reels, geo-tags — THE #1 beauty discovery platform)',
                'Google Search ("salon near me", "best hair stylist [city]")',
                'Google Maps (local salon browsing)',
                'Pinterest (hairstyle and makeup inspiration)',
                'YouTube (transformation videos, tutorials)',
                'Facebook Local Groups',
                'WhatsApp (friend recommendations)'
            ]
        },
        trust: {
            title: 'Trust Platforms — Where Clients Verify Stylists',
            platforms: [
                'Instagram Portfolio (before/after — the ultimate proof)',
                'Google Reviews',
                'Salon Website (stylist profiles, transformation gallery)',
                'YouTube (transformation videos, stylist introductions)',
                'Facebook Reviews',
                'WhatsApp (personal communication builds trust)'
            ]
        },
        conversion: {
            title: 'Conversion Platforms — Where Clients Book',
            platforms: [
                'Salon Website Booking System (direct — most profitable)',
                'Instagram Booking (link in bio, story swipe-up)',
                'WhatsApp Booking (personal, instant)',
                'Google Business "Book Now"',
                'Phone Booking (declining but still used)'
            ]
        },
        retention: {
            title: 'Retention Platforms — Keeping Clients Loyal',
            platforms: [
                'WhatsApp (follow-up, re-booking reminders, offers)',
                'Email (newsletter, birthday offers, new services)',
                'CRM/Client Database (service history, preferences)',
                'Loyalty Program App/Portal',
                'Instagram (stay connected, repost client selfies)',
                'Google Business (respond to reviews, post updates)'
            ]
        }
    },

    // ============================================================
    // RULE F: CONTENT STRATEGY
    // ============================================================
    contentStrategy: {
        philosophy: 'Beauty content must SHOW transformation, not just tell. Every piece of content should visually demonstrate the stylist\'s skill and make potential clients think: "I want that look." Content is the portfolio — it must be professional, consistent, and irresistible.',
        pillars: [
            {
                name: 'Before/After Transformation Content',
                whyItMatters: 'The single most powerful conversion tool in beauty. Before/After photos prove the stylist\'s capability instantly. A dramatic transformation creates desire — "I want that transformation too." This content generates the highest engagement and booking inquiries.',
                formats: [
                    'Side-by-side before/after photos — professional lighting, consistent angles',
                    'Transformation reels — video showing the process and final reveal',
                    'Client reaction videos — capturing the moment they see their new look',
                    'Before/After carousel posts on Instagram',
                    'Transformation stories with client testimonials'
                ],
                frequency: 'Before/After posts: 8-12 per month. Reels: 4-6 per month. Carousels: 2-4 per month.'
            },
            {
                name: 'Stylist Personality & Authority Content',
                whyItMatters: 'Clients book stylists, not salons. Content that builds individual stylist brands creates personal connections and loyalty. When a client feels they "know" a stylist through content, they are more likely to book specifically with them.',
                formats: [
                    'Stylist introduction videos (1-2 min — background, passion, specialty)',
                    '"A Day in the Life" — Instagram Story series following a stylist',
                    'Stylist tips and tutorials — "How to maintain your [color/style] at home"',
                    'Stylist achievements — certifications, advanced training, competition wins',
                    'Behind-the-scenes — stylists at work, team culture'
                ],
                frequency: 'Stylist intros: once per stylist. Tips: 2-4 per month. BTS: weekly.'
            },
            {
                name: 'Service & Treatment Education',
                whyItMatters: 'Clients often don\'t know what treatment they need. Educational content explains services, benefits, and helps clients make informed decisions. It also positions the salon as experts, not just service providers.',
                formats: [
                    'Service explainer videos — "What is Keratin treatment?" "Benefits of Hydrafacial"',
                    'Product knowledge content — recommended products for different hair/skin types',
                    'Treatment comparison — "Hair Spa vs Keratin — Which do you need?"',
                    'Seasonal care tips — "Monsoon hair care routine," "Winter skin protection"'
                ],
                frequency: 'Service videos: 1-2 per month. Tips: 2-4 per month.'
            },
            {
                name: 'Client Experience & Social Proof',
                whyItMatters: 'Real client content is authentic and trusted. When potential clients see real people (not models) getting great results, they believe they can too. UGC and testimonials provide the social proof that drives bookings.',
                formats: [
                    'Client testimonial videos (30-60 sec — "I love my new look because...")',
                    'Repost client selfies and stories (with permission)',
                    '"Client of the Month" feature',
                    'Google Review highlights turned into graphics',
                    'Event coverage — bridal trials, makeover events, workshops'
                ],
                frequency: 'Testimonials: 2-4 per month. UGC reposts: 5-10 per week.'
            }
        ]
    },

    // ============================================================
    // RULE G: QUANTIFIED DELIVERABLES
    // ============================================================
    deliverables: {
        website: {
            item: 'Salon Website with Booking',
            qty: '6-9 Pages',
            detail: 'Homepage, Stylist Profile Pages (per stylist), Service Menu with Pricing, Before/After Gallery, Bridal & Occasion Page, Online Booking System, About Salon, Contact & Location. Includes booking engine, WhatsApp integration, SEO, analytics.'
        },
        photography: {
            item: 'Professional Beauty Photography',
            qty: '30-50 Images',
            detail: 'Salon interior and exterior, each stylist portrait, before/after transformations (15-20 pairs), service process shots, product displays, ambiance and details. All professionally lit, styled, and edited.'
        },
        video: {
            item: 'Video Production',
            qty: '3-5 Videos + 15-20 Reels/Month',
            detail: 'Salon cinematic video (2-3 min), Stylist introduction videos (per stylist, 1-2 min), Transformation compilation video. Plus 15-20 Instagram reels/month (transformations, tutorials, BTS, client reactions).'
        },
        social: {
            item: 'Instagram & Social Media Management',
            qty: '20-25 Posts/Month',
            detail: 'Instagram (12-15 posts + daily stories + 8-10 reels), Facebook (6-8 posts), Pinterest (10-15 pins). Includes content calendar, professional content creation, caption writing, hashtag strategy, engagement, influencer coordination.'
        },
        booking: {
            item: 'Online Booking System Setup',
            qty: 'Complete System',
            detail: 'Real-time booking calendar, service and stylist selection, automated confirmations (WhatsApp + email + SMS), reminders (24h and 2h before), reschedule/cancel functionality, Google Reserve and Instagram integration.'
        },
        branding: {
            item: 'Salon Branding & Print',
            qty: '10-14 Items',
            detail: 'Logo Design, Brand Guide, Service Menu Design, Salon Signage, Staff Aprons/Uniforms, Visiting Cards, Gift Cards, Loyalty Cards, Product Packaging, Price Tags, Window Graphics.'
        },
        automation: {
            item: 'Client Retention Automation',
            qty: '5-7 Workflows',
            detail: '1. Booking confirmation (instant), 2. Appointment reminder, 3. Post-service follow-up (same day), 4. Re-booking reminder (based on service cycle), 5. Review request with Google link, 6. Birthday/Anniversary special offer, 7. "We miss you" re-engagement (60 days no visit).'
        }
    },

    // ============================================================
    // RULE H: DIGITAL ASSETS CHECKLIST
    // ============================================================
    digitalAssets: {
        'Website & Booking': [
            'Salon Website (6-9 Pages)',
            'Online Booking System',
            'Stylist Profile Pages',
            'Before/After Gallery',
            'Service Menu with Pricing',
            'WhatsApp Booking Integration',
            'SEO Optimization',
            'Analytics Setup'
        ],
        'Visual Portfolio': [
            'Professional Salon Photography (30-50)',
            'Before/After Photo Series (15-20 pairs)',
            'Salon Cinematic Video (2-3 min)',
            'Stylist Introduction Videos',
            'Transformation Reels (15-20/month)',
            'Client Reaction Videos',
            'Bridal Portfolio Gallery'
        ],
        'Instagram & Social': [
            'Instagram Business Management',
            'Professional Content Creation',
            'Reels Strategy & Production',
            'Stories & Highlights Management',
            'Influencer Collaboration Program',
            'Pinterest Portfolio Setup',
            'Facebook Page Management'
        ],
        'Google & Listings': [
            'Google Business Profile Optimization',
            'Google Maps Optimization',
            'Google Reviews Generation',
            'Review Response Management',
            'Local SEO Strategy',
            'Google Reserve Integration'
        ],
        'Branding & Print': [
            'Logo Design & Brand Guide',
            'Service Menu Design',
            'Salon Signage Package',
            'Staff Apron/Uniform Design',
            'Visiting Cards & Gift Cards',
            'Loyalty Card Design',
            'Product Packaging Design'
        ],
        'Client Retention': [
            'CRM/Client Database Setup',
            'Booking Confirmation Automation',
            'Appointment Reminder System',
            'Post-Service Follow-up',
            'Re-booking Reminder Workflow',
            'Loyalty Program Implementation',
            'Referral Program Setup'
        ],
        'Bridal & Occasion': [
            'Bridal Landing Page',
            'Bridal Package PDF',
            'Bridal Before/After Gallery',
            'Trial Booking System',
            'Targeted Bridal Ads',
            'Wedding Vendor Collaboration',
            'Bridal Testimonial Videos'
        ]
    },

    // ============================================================
    // GROWTH OPPORTUNITIES
    // ============================================================
    growthOpportunities: [
        {
            opportunity: 'Bridal & Wedding Market',
            potential: 'Very High',
            description: 'Bridal packages are the highest-value service (₹15,000-₹1,50,000+). Create dedicated bridal marketing with landing pages, targeted ads, wedding vendor partnerships, and bridal trial bookings.',
            digitalRequirements: ['Bridal Landing Page', 'Targeted Ads', 'Wedding Vendor Collab', 'Trial Booking']
        },
        {
            opportunity: 'Product Sales (Retail)',
            potential: 'High',
            description: 'Sell professional hair and skin products through the salon website and Instagram. Product sales add 20-30% revenue with minimal additional cost.',
            digitalRequirements: ['Ecommerce Integration', 'Product Photography', 'Instagram Shop', 'Product Recommendation System']
        },
        {
            opportunity: 'Membership & Package Model',
            potential: 'High',
            description: 'Monthly membership model — fixed fee for regular services (e.g., monthly facial + quarterly hair spa). Creates recurring, predictable revenue.',
            digitalRequirements: ['Membership Landing Page', 'Recurring Payment Setup', 'Package Management', 'Member Portal']
        },
        {
            opportunity: 'Beauty Workshops & Masterclasses',
            potential: 'Medium-High',
            description: 'Host paid workshops — makeup masterclass, hair styling workshop, skincare routine. Attracts new clients and positions salon as authority.',
            digitalRequirements: ['Workshop Landing Pages', 'Event Booking System', 'Social Media Promotion', 'Live Stream Setup']
        }
    ],

    // ============================================================
    // FAQ
    // ============================================================
    faqs: [
        {
            question: 'Online booking system se walk-in clients kam ho jaate hain?',
            answer: 'Bilkul nahi — ulta, online booking AUR clients laati hai. Jo clients 10 PM par book karna chahte hain (jab salon band hai), woh online book kar lete hain. Jo phone par busy signal sun kar chale jaate, woh online instantly book kar lete hain. Typically online booking 30-50% more appointments generate karti hai. Walk-in clients ke liye aap walk-in slots reserve rakh sakte hain.'
        },
        {
            question: 'Before/After photos ke liye client permission kaise lete hain?',
            answer: 'Har client se written consent liya jaata hai — photo lene se pehle. Aapka salon consent form mein ek section add karein for "I consent to my photos being used for portfolio and marketing purposes." Jo clients comfortable hain, unki photos use karein. Jo nahi chahte, unki nahi. 11 Avtar Digital Hub proper consent management system set up karta hai. Faces blur karne ka option bhi available hai for partial anonymity.'
        },
        {
            question: 'Instagram par kitni baar post karna chahiye?',
            answer: 'Daily stories (3-5), feed posts (3-4 per week), reels (4-6 per week). Consistency matters more than frequency. Ek hafte 7 posts aur agle hafte 0 se better hai weekly 3-4 posts consistently. 11 Avtar Digital Hub monthly content calendar banata hai aur advance mein content create karta hai taaki consistency bani rahe.'
        },
        {
            question: 'Stylist individual branding kaise help karta hai?',
            answer: 'Clients specific stylist ke saath relationship banate hain. Jab aap individual stylist profiles, portfolios, aur booking links create karte hain: (1) Clients apna preferred stylist choose kar sakte hain, (2) Stylists ka personal brand grow hota hai — woh salon ke saath longer stay karte hain, (3) Agar stylist salon change bhi kare, toh unke clients ko salon ke doosre stylists ke baare mein pata hota hai. Stylist branding salon ki dependency kam karta hai individual stylists par.'
        },
        {
            question: 'Client re-booking ke liye reminder system kaise kaam karta hai?',
            answer: 'CRM automatically calculate karta hai — haircut ke 4 weeks baad, color touch-up ke 3 weeks baad — automated WhatsApp message jaata hai: "Hi [Name], your last [service] was [date]. Ready for your next appointment? Book here: [link]." Client ek click mein re-book kar sakta hai. Is system se repeat bookings 40-60% increase hoti hain.'
        },
        {
            question: 'Bridal package marketing ka ROI kya hai?',
            answer: 'Ek bridal package typically ₹25,000-₹1,00,000+ ka hota hai. Digital marketing spend ₹5,000-₹15,000 per bride acquisition. ROI 5-20x hota hai. Aur ek satisfied bride typically 3-5 referrals laati hai (friends, family, colleagues getting married). Bridal marketing highest ROI beauty marketing hai. 11 Avtar Digital Hub dedicated bridal campaigns run karta hai.'
        }
    ],

    stats: {
        instagramDiscovery: '70% of beauty clients discover salons through Instagram',
        beforeAfterPower: 'Before/After photos increase booking inquiries by 200-300%',
        onlineBooking: 'Online booking increases appointment volume by 30-50%',
        retentionValue: 'Repeat clients spend 67% more than new clients',
        bridalValue: 'Bridal clients have 5x higher lifetime value than regular clients',
        rebookingReminder: 'Re-booking reminders increase repeat visits by 40-60%'
    }
};

console.log('✅ 11 Avtar Digital Hub — Beauty Blueprint loaded (Beauty Brand Attraction System™)');
window.BEAUTY_DATA = BEAUTY_DATA;
