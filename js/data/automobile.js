/**
 * ============================================================
 * 11 AVTAR DIGITAL HUB
 * 🚗 AUTOMOBILE INDUSTRY BLUEPRINT
 * Auto Sales Acceleration System™
 * Industry Growth Intelligence System™
 * ============================================================
 */

const AUTOMOBILE_DATA = {
    id: 'automobile',
    name: 'Automobile',
    icon: '🚗',
    slug: 'automobile',
    signature: 'Auto Sales Acceleration System™',

    // ============================================================
    // RULE A: INDUSTRY UNDERSTANDING
    // ============================================================
    understanding: 'Automobile sales follow a "research online, purchase offline" pattern. A car buyer spends 2-4 months researching before visiting a showroom. They watch YouTube reviews, compare specs on CarDekho/CarWale, read owner reviews, check EMI options, and only then book a test drive. The actual purchase decision is made 60-70% online before the buyer ever steps into a showroom. 11 Avtar Digital Hub understands that auto marketing is about dominating the digital research phase — providing comprehensive model information, immersive visual experiences (360° views, video reviews), easy test drive booking, and transparent pricing tools. A dealership that appears everywhere a buyer researches — with compelling content — captures the buyer before competitors even know they are looking.',

    revenueModel: 'Automobile dealerships earn through new car sales (60-70%), used car sales (15-20%), service and spare parts (10-15%), accessories and insurance (5-10%). Average new car transaction is ₹5-15 lakh. A dealership selling 50 cars/month at ₹8 lakh average generates ₹40 crore annual revenue. Service revenue per customer is ₹5,000-15,000/year. Digital channels can increase test drives by 50-80% and sales by 25-40%.',

    customerPsychology: 'A car is the second most expensive purchase most people make (after home). Buyers are extremely research-driven and risk-averse. They seek: (1) Comprehensive information — specs, features, comparisons, reviews, (2) Visual experience — 360° interior views, walkaround videos, test drive, (3) Financial clarity — EMI calculator, on-road price breakdown, exchange value, (4) Trust — reviews, ratings, dealership reputation. Buyers visit 3-5 showrooms before purchasing. The dealership that provides the BEST digital research experience — not just information — wins the sale. Video reviews and test drive booking are the two highest-converting digital assets.',

    whyGenericFails: 'Generic marketing agencies treat auto like any product — they create basic model pages with specs, post car photos on social media, and run "best offers" ads. They do not understand: (1) The 2-4 month research cycle requiring content at every stage, (2) The dominance of YouTube and auto portals in car research, (3) The test drive as THE critical conversion event, (4) Service retention as the long-term profit center, (5) The used car and exchange ecosystem. Generic marketing generates leads that are not ready to buy because they haven\'t been nurtured through the research journey. 11 Avtar Digital Hub builds Auto Sales Acceleration Systems™ that guide buyers from research to test drive to purchase.',

    // ============================================================
    // RULE B: BUSINESS CHALLENGES (5 challenges)
    // ============================================================
    challenges: [
        {
            problem: 'Low Test Drive Bookings — Website Visitors Not Converting',
            whyItHappens: 'Dealership websites show car photos and a generic "Enquire Now" form. There is no compelling reason to book a test drive — no video walkaround, no 360° view, no customer testimonials, no EMI calculator. A buyer who is researching at 10 PM cannot book a test drive because forms go to an inbox checked next morning. 70-80% of website visitors leave without any action.',
            digitalSolution: 'Create immersive model pages with 360° interior views, video walkarounds, customer review videos, and a prominent "Book Test Drive" CTA. Integrate instant test drive booking with WhatsApp confirmation. Add EMI calculator to address financial questions. Implement live chat for instant query resolution. 11 Avtar Digital Hub builds websites that convert 15-20% of visitors into test drive bookings — a 5x improvement.',
            assetsNeeded: ['Model Pages with 360° View', 'Video Walkarounds', 'Test Drive Booking System', 'EMI Calculator', 'Live Chat/WhatsApp', 'Instant Booking Confirmation']
        },
        {
            problem: 'YouTube & Video Content Missing — Losing the Research War',
            whyItHappens: 'YouTube is the #1 car research platform. Buyers watch 5-15 car review videos before visiting a showroom. But most dealerships have zero YouTube presence — no model walkaround videos, no feature highlights, no customer testimonial videos, no comparison videos. Competitor dealerships and auto influencers capture all this research traffic.',
            digitalSolution: 'Create comprehensive YouTube channel with: (1) Detailed model walkaround videos (5-8 min each — exterior, interior, features, boot space, engine), (2) Feature highlight shorts (60 sec each), (3) Customer testimonial videos (ownership experience), (4) Comparison videos (Model A vs Competitor B), (5) Service tips and maintenance videos. 11 Avtar Digital Hub builds dealership YouTube channels that capture research-phase buyers and drive test drive bookings.',
            assetsNeeded: ['YouTube Channel Setup', 'Model Walkaround Videos', 'Feature Highlight Shorts', 'Customer Testimonial Videos', 'Comparison Videos', 'Video SEO Strategy']
        },
        {
            problem: 'Auto Portal Listings Not Optimized — Invisible on CarDekho/CarWale',
            whyItHappens: 'CarDekho and CarWale are where millions of buyers compare cars. But most dealership listings are incomplete — missing photos, outdated prices, no offers, no test drive link. Buyers comparing models on these portals see competitor dealerships with better listings and contact them instead.',
            digitalSolution: 'Complete optimization of CarDekho and CarWale listings: professional car photos (20-30 per model), accurate on-road pricing, current offers, video links, and prominent test drive booking button. Manage and respond to all inquiries within 5 minutes via WhatsApp. 11 Avtar Digital Hub manages portal listings to ensure your dealership appears first and converts inquiries.',
            assetsNeeded: ['CarDekho Listing Optimization', 'CarWale Listing Optimization', 'Professional Car Photography', 'Inquiry Management System', 'Offer Update Automation']
        },
        {
            problem: 'Service Center Digital Gap — Losing Recurring Revenue',
            whyItHappens: 'After selling a car, most dealerships lose the customer for service. There is no online service booking, no service reminders, no service history portal. Customers go to local mechanics or forget about authorized service. Service revenue (₹5,000-15,000/customer/year) is lost after the warranty period.',
            digitalSolution: 'Create online service booking portal with: (1) Service package selection and pricing, (2) Pickup and drop scheduling, (3) Real-time service status tracking, (4) Digital service history for each customer, (5) Automated service reminders based on time/kilometers, (6) Seasonal service camps and offers. 11 Avtar Digital Hub turns one-time car buyers into lifetime service customers.',
            assetsNeeded: ['Online Service Booking Portal', 'Service Reminder Automation', 'Digital Service History', 'Pickup/Drop Scheduling', 'Service Camp Promotions']
        },
        {
            problem: 'Exchange & Used Car Opportunity Not Digitized',
            whyItHappens: '30-40% of new car buyers have an exchange vehicle. But the exchange process is completely offline — customer must visit showroom for evaluation. No online exchange calculator, no instant valuation, no transparency. Buyers who want to know their car\'s exchange value before visiting go to third-party platforms (Cars24, Spinny) and may sell there instead of exchanging.',
            digitalSolution: 'Create online exchange value calculator with instant approximate valuation. Allow photo upload for remote evaluation. Show exchange bonus offers. Integrate exchange into test drive booking — "Want to exchange your old car? Get instant valuation." 11 Avtar Digital Hub builds digital exchange tools that capture high-intent buyers and lock them into your dealership.',
            assetsNeeded: ['Online Exchange Calculator', 'Photo Upload for Valuation', 'Exchange Bonus Offers', 'Exchange-Integrated Test Drive Booking']
        }
    ],

    // ============================================================
    // RULE C: CUSTOMER JOURNEY
    // ============================================================
    customerJourney: {
        discovery: {
            title: 'Stage 1: Car Research — Where Do Buyers Look?',
            description: 'The buyer decides to purchase a car and begins 2-4 months of research. They explore models, compare features, and shortlist options.',
            psychology: 'Buyers are in exploration mode — excited but cautious. They want unbiased information. They trust YouTube reviews, auto portal comparisons, and owner reviews more than showroom salespeople at this stage. First impression is formed by online presence quality.',
            channels: [
                'Google Search ("best SUV under 15 lakh", "[Model] review", "[Model] on-road price [city]")',
                'YouTube (car reviews, walkarounds, comparison videos, ownership experiences)',
                'CarDekho / CarWale (model comparison, specs, prices, reviews)',
                'Instagram (car reels, feature highlights, new launches)',
                'Facebook Auto Groups (owner discussions, recommendations)',
                'WhatsApp (friend recommendations, forwarded car reviews)',
                'Google Business Profile (dealership search with reviews)'
            ],
            digitalRequirements: [
                'YouTube channel with comprehensive model videos',
                'Optimized CarDekho and CarWale listings',
                'SEO-optimized website for model and price searches',
                'Google Business Profile with photos and reviews',
                'Instagram with car content and reels'
            ]
        },
        trust: {
            title: 'Stage 2: Dealership Evaluation — What Builds Trust?',
            description: 'The buyer has shortlisted 2-3 models and is now evaluating which dealership to buy from.',
            psychology: 'Buyers fear being cheated — hidden charges, wrong on-road price, poor after-sales service. They seek transparency, honest reviews, and a dealership that feels trustworthy. A dealership with detailed videos, transparent pricing, and genuine customer testimonials wins over one that just says "visit showroom for best price."',
            trustFactors: [
                'Detailed video walkarounds (shows the dealership is transparent)',
                'Google Reviews (quantity > 50, rating > 4.5)',
                'Customer testimonial videos (ownership experience)',
                'Transparent on-road price breakdown on website',
                'EMI calculator with clear financials',
                'Service center reviews and ratings',
                'Dealership awards and manufacturer recognition'
            ],
            digitalRequirements: [
                'Model video walkarounds',
                'Customer testimonial videos',
                'Transparent pricing page',
                'EMI calculator',
                'Review generation and management',
                'Dealership awards showcase'
            ]
        },
        conversion: {
            title: 'Stage 3: Test Drive to Purchase — The Critical Conversion',
            description: 'The buyer is ready to experience the car. The test drive is the most critical step — a great test drive converts to purchase 60-70% of the time.',
            psychology: 'The test drive is make-or-break. The buyer wants: instant booking (not "we\'ll call you back"), a well-prepared car, a knowledgeable salesperson, and no pressure. Post-test drive follow-up within 2 hours is critical. If they leave without booking, they will test drive at another dealership.',
            conversionMethods: [
                'Online Test Drive Booking (instant confirmation via WhatsApp)',
                'Walk-in Test Drive',
                'Home Test Drive (for premium/high-intent buyers)',
                'Video Call Walkaround (for remote buyers)',
                'Online Booking/Purchase (for select models)'
            ],
            digitalRequirements: [
                'Online test drive booking with instant confirmation',
                'WhatsApp integration for booking and follow-up',
                'CRM with lead tracking',
                'Post-test drive follow-up automation',
                'Online payment for booking amount'
            ]
        },
        retention: {
            title: 'Stage 4: Ownership & Service — Lifetime Value',
            description: 'The customer has purchased. Now begins the 5-10 year ownership journey. Service retention and referrals are the long-term profit centers.',
            psychology: 'New car owners are excited and engaged for the first 3-6 months. This is the golden window to establish service relationship. After warranty, they may drift to local mechanics. Regular, helpful communication (not salesy) keeps them loyal. Happy owners are the best salespeople — they refer 2-3 buyers over their ownership.',
            retentionStrategies: [
                'Post-purchase welcome kit (digital)',
                'Automated service reminders (time/kilometer based)',
                'Online service booking with pickup/drop',
                'Seasonal service camps and offers',
                'Customer anniversary and birthday wishes',
                'Referral program — "Refer a friend, get free service"',
                'New model launch information to existing customers',
                'Exchange upgrade offers after 3-5 years'
            ],
            digitalRequirements: [
                'CRM with customer database and car details',
                'Automated service reminder system',
                'Online service booking portal',
                'Digital service history',
                'Referral program with tracking',
                'WhatsApp communication for service updates'
            ]
        }
    },

    // ============================================================
    // RULE D: WEBSITE ARCHITECTURE
    // ============================================================
    websiteArchitecture: {
        overview: 'An auto dealership website must be a complete research-to-purchase platform. Every page should help the buyer make an informed decision and take the next step — test drive, exchange valuation, or service booking.',
        pages: [
            {
                name: 'Homepage',
                purpose: 'Immediate model showcase with test drive CTA',
                features: [
                    'Hero section with latest model video or offers',
                    'Book Test Drive CTA (prominent)',
                    'Model lineup showcase with starting prices',
                    'Current offers and discounts',
                    'Customer testimonial slider',
                    'EMI calculator widget',
                    'Service booking quick link',
                    'WhatsApp floating button'
                ]
            },
            {
                name: 'Model Detail Pages',
                purpose: 'Complete research destination for each model',
                features: [
                    '360° exterior and interior view',
                    'Model walkaround video (5-8 min)',
                    'Photo gallery (20-30 professional images)',
                    'Complete specifications and features',
                    'Variant comparison table',
                    'On-road price breakdown (ex-showroom + RTO + insurance + others)',
                    'EMI calculator specific to this model',
                    'Customer reviews for this model',
                    'Book Test Drive CTA (prominent)',
                    'Compare with competitor models'
                ]
            },
            {
                name: 'Test Drive Booking Page',
                purpose: 'Frictionless test drive scheduling',
                features: [
                    'Model and variant selection',
                    'Preferred date and time picker',
                    'Home test drive option (if available)',
                    'Exchange vehicle information (optional)',
                    'Instant confirmation via WhatsApp and SMS',
                    'Reminder 24h and 2h before scheduled time'
                ]
            },
            {
                name: 'Exchange Value Calculator',
                purpose: 'Capture exchange buyers with instant valuation',
                features: [
                    'Vehicle details input (brand, model, year, variant, kilometers)',
                    'Instant approximate valuation',
                    'Photo upload for more accurate evaluation',
                    'Exchange bonus offers displayed',
                    'Book test drive with exchange option'
                ]
            },
            {
                name: 'Service Center Portal',
                purpose: 'Online service booking and tracking',
                features: [
                    'Service package selection with pricing',
                    'Pickup and drop scheduling',
                    'Real-time service status tracking',
                    'Digital service history per customer',
                    'Service cost calculator',
                    'Seasonal offers and camps'
                ]
            }
        ]
    },

    // ============================================================
    // RULE E: PLATFORM ECOSYSTEM
    // ============================================================
    platformEcosystem: {
        discovery: {
            title: 'Discovery Platforms — Where Car Buyers Research',
            platforms: [
                'YouTube (car reviews, walkarounds — THE #1 research platform)',
                'Google Search (model reviews, prices, dealership search)',
                'CarDekho / CarWale (comparison, specs, prices)',
                'Instagram (car reels, launches, features)',
                'Facebook Auto Groups',
                'Google Business Profile'
            ]
        },
        trust: {
            title: 'Trust Platforms — Where Buyers Verify Dealerships',
            platforms: [
                'Google Reviews',
                'YouTube (walkaround videos, customer testimonials)',
                'CarDekho/CarWale Ratings',
                'Dealership Website (model pages, pricing transparency)',
                'Facebook Reviews',
                'WhatsApp (personal communication)'
            ]
        },
        conversion: {
            title: 'Conversion Platforms — Where Buyers Take Action',
            platforms: [
                'Dealership Website (test drive booking, exchange valuation)',
                'WhatsApp (test drive booking, inquiry)',
                'Phone (traditional inquiry)',
                'Showroom Visit (physical test drive)',
                'CarDekho/CarWale Inquiry System'
            ]
        },
        retention: {
            title: 'Retention Platforms — Keeping Customers for Life',
            platforms: [
                'WhatsApp (service reminders, offers, updates)',
                'Email (service reminders, newsletters, offers)',
                'CRM (customer database, car details, service history)',
                'Service Portal (online booking, history, tracking)',
                'YouTube (service tips, maintenance videos)',
                'Referral Program Portal'
            ]
        }
    },

    // ============================================================
    // RULE F: CONTENT STRATEGY
    // ============================================================
    contentStrategy: {
        philosophy: 'Auto content must help buyers make informed decisions. Every video, photo, and article should answer a buyer question and move them closer to a test drive. Content must be detailed, honest, and visually immersive.',
        pillars: [
            {
                name: 'Model Walkaround & Review Videos',
                whyItMatters: 'The #1 content type for car buyers. A detailed walkaround video showing every aspect of the car builds trust and answers questions that static photos cannot. Buyers who watch a full walkaround are 3x more likely to book a test drive.',
                formats: [
                    'Complete walkaround videos (5-8 min — exterior design, interior features, dashboard, boot space, engine, test drive impressions)',
                    'Feature highlight shorts (60 sec — sunroof demo, music system, safety features)',
                    '360° interactive interior view',
                    'Night drive videos (headlights, ambient lighting)'
                ],
                frequency: 'Walkaround: 1 per model (update when facelift/new variant). Shorts: 2-4 per week.'
            },
            {
                name: 'Customer Ownership Stories',
                whyItMatters: 'Real owner experiences are more trusted than any sales pitch. A video of a happy customer talking about their car creates emotional connection and social proof.',
                formats: [
                    'Customer testimonial videos (2-3 min — why they chose this car, ownership experience)',
                    '"My Car, My Story" series — different customers, different use cases',
                    'Delivery day celebration videos',
                    'Long-term ownership reviews (1 year, 3 year updates)'
                ],
                frequency: '2-4 per month.'
            },
            {
                name: 'Comparison & Buying Guide Content',
                whyItMatters: 'Buyers spend hours comparing models. Content that helps them compare — with honesty — positions the dealership as a trusted advisor, not just a seller.',
                formats: [
                    'Model A vs Competitor B comparison videos (pros and cons of both)',
                    '"Which Variant is Right for You?" guide videos',
                    'Blog posts — "Best SUV under 15 lakh," "Petrol vs Diesel — Complete Guide"',
                    'Infographics comparing specs, mileage, maintenance costs'
                ],
                frequency: 'Videos: 1-2 per month. Blog: 2-4 per month.'
            },
            {
                name: 'Service & Maintenance Content',
                whyItMatters: 'Establishes the dealership as the ongoing partner for car care. Educates customers about maintenance, builds trust in service center, and drives service bookings.',
                formats: [
                    'Service tips shorts — "5 signs your car needs servicing," "How to check engine oil"',
                    'Service center tour video (cleanliness, equipment, trained technicians)',
                    'Seasonal care guides — "Monsoon car care tips," "Summer AC maintenance"',
                    'Service package explainer videos'
                ],
                frequency: '2-4 per month.'
            }
        ]
    },

    // ============================================================
    // RULE G: QUANTIFIED DELIVERABLES
    // ============================================================
    deliverables: {
        website: {
            item: 'Auto Dealership Website',
            qty: '10-14 Pages',
            detail: 'Homepage, Model Detail Pages (per model), Test Drive Booking, Exchange Value Calculator, Service Center Portal, Offers Page, Customer Testimonials, About Dealership, Contact, Blog. Includes booking system, EMI calculator, WhatsApp, SEO, analytics.'
        },
        video: {
            item: 'Video Production',
            qty: '5-8 Videos + 15-20 Shorts/Month',
            detail: 'Model walkaround videos (per model, 5-8 min), Feature highlight shorts (60 sec each), Customer testimonial videos (2-3 min each), Comparison videos, Service tip shorts. Plus 15-20 shorts/reels per month.'
        },
        photography: {
            item: 'Professional Car Photography',
            qty: '20-30 Images Per Model',
            detail: 'Exterior (front, rear, sides, angles), Interior (dashboard, seats, steering, screens), Key features (sunroof, alloy wheels, headlights), Engine bay, Boot space. All professionally shot and edited.'
        },
        portals: {
            item: 'Auto Portal Management',
            qty: '2-3 Portals',
            detail: 'CarDekho listing optimization, CarWale listing optimization, Google Business Profile. Includes photos, pricing, offers, video links, inquiry management.'
        },
        automation: {
            item: 'Sales & Service Automation',
            qty: '6-8 Workflows',
            detail: '1. Test drive booking confirmation, 2. Post-test drive follow-up, 3. Booking amount payment confirmation, 4. Delivery day preparation messages, 5. Post-delivery welcome and feedback, 6. Service reminder (time/km based), 7. Service booking confirmation and status updates, 8. Exchange/upgrade offer (3-5 years post-purchase).'
        }
    },

    // ============================================================
    // RULE H: DIGITAL ASSETS CHECKLIST
    // ============================================================
    digitalAssets: {
        'Website & Digital Tools': [
            'Dealership Website (10-14 Pages)',
            'Model Detail Pages (per model)',
            'Test Drive Booking System',
            'Online Exchange Calculator',
            'EMI Calculator',
            'Service Booking Portal',
            'WhatsApp Integration',
            'SEO & Analytics'
        ],
        'Video & Visual Content': [
            'Model Walkaround Videos (per model)',
            '360° Interior/Exterior Views',
            'Professional Car Photography (per model)',
            'Feature Highlight Shorts (15-20/month)',
            'Customer Testimonial Videos',
            'Comparison Videos',
            'Service Center Tour Video'
        ],
        'YouTube & Social Media': [
            'YouTube Channel Setup & Management',
            'Video SEO Strategy',
            'Instagram Car Content',
            'Facebook Page Management',
            'Content Calendar & Strategy',
            'Influencer/Auto Blogger Collabs'
        ],
        'Portal & Listing Management': [
            'CarDekho Listing Optimization',
            'CarWale Listing Optimization',
            'Google Business Profile',
            'Google Reviews Management',
            'Local SEO Strategy',
            'Inquiry Management System'
        ],
        'Sales & Lead Management': [
            'CRM System Setup',
            'Test Drive Lead Tracking',
            'WhatsApp Auto-Response',
            'Post-Test Drive Follow-up',
            'Lead Scoring & Assignment',
            'Sales Team Integration'
        ],
        'Service & Retention': [
            'Online Service Booking',
            'Service Reminder Automation',
            'Digital Service History',
            'Pickup/Drop Scheduling',
            'Customer Loyalty Program',
            'Referral Program Setup',
            'Re-engagement Campaigns'
        ]
    },

    // ============================================================
    // GROWTH OPPORTUNITIES
    // ============================================================
    growthOpportunities: [
        {
            opportunity: 'Used Car Division',
            potential: 'Very High',
            description: 'Create separate used car digital presence — inventory listing, online evaluation, certified pre-owned branding. Used car market is 1.5x new car market.',
            digitalRequirements: ['Used Car Inventory Page', 'Online Evaluation Tool', 'Certification Badge', 'Used Car SEO']
        },
        {
            opportunity: 'Accessories & Insurance Online',
            potential: 'High',
            description: 'Sell accessories and insurance online during and after car purchase. High-margin products with existing customer base.',
            digitalRequirements: ['Accessories Catalog', 'Online Purchase', 'Insurance Comparison', 'Post-Purchase Offers']
        },
        {
            opportunity: 'Fleet & Corporate Sales',
            potential: 'High',
            description: 'Target local businesses for fleet sales — multiple vehicles, bulk discounts. B2B approach with dedicated corporate page and LinkedIn outreach.',
            digitalRequirements: ['Corporate Sales Page', 'Fleet Discount Structure', 'LinkedIn Strategy', 'B2B Proposals']
        },
        {
            opportunity: 'Subscription Model',
            potential: 'Medium-High',
            description: 'Car subscription service — monthly fee, switch cars, insurance and maintenance included. Appeals to younger buyers avoiding long-term commitment.',
            digitalRequirements: ['Subscription Plans Page', 'Monthly Payment System', 'Car Rotation Management']
        }
    ],

    // ============================================================
    // FAQ
    // ============================================================
    faqs: [
        {
            question: 'Test drive online book karne ka kya fayda hai?',
            answer: 'Online test drive booking 24/7 available hai — customer raat 10 baje bhi book kar sakta hai. Instant WhatsApp confirmation milti hai. Reminder bhi automated hai. Dealer ko lead instantly milti hai. Online booking walk-in se 3x more test drives generate karta hai. 11 Avtar Digital Hub complete test drive booking system set up karta hai.'
        },
        {
            question: 'YouTube par car walkaround video kaise help karta hai?',
            answer: 'YouTube car research ka #1 platform hai. Detailed walkaround video dekhne ke baad customer already 60-70% convinced hota hai. Woh showroom visit pe sirf confirm karne aata hai. Walkaround videos test drive bookings 3x increase karte hain. 11 Avtar Digital Hub professional walkaround videos create karta hai — exterior, interior, features, boot space, engine — sab kuch detail mein.'
        },
        {
            question: 'Exchange calculator online dene se kya fayda hai?',
            answer: '30-40% buyers ke paas exchange vehicle hota hai. Agar woh online approximate valuation dekh sakte hain, toh woh mentally prepared hokar showroom aate hain. Agar exchange value nahi dikhti, woh Cars24/Spinny pe bech sakte hain. Exchange calculator serious buyers ko aapki website par rokta hai aur test drive booking increase karta hai.'
        },
        {
            question: 'Service reminder automation kaise kaam karta hai?',
            answer: 'CRM mein har customer ki car details stored hoti hain — purchase date, model, running kilometers (service visits se update). Time-based (6 months) ya kilometer-based (10,000 km) automated WhatsApp/email reminder jaata hai service book karne ke liye. Customer ek click mein service book kar sakta hai. Is system se service revenue 30-40% increase hota hai.'
        },
        {
            question: 'CarDekho aur CarWale listing optimize kaise karte hain?',
            answer: 'Complete profile: 20-30 professional photos per model, accurate on-road price (ex-showroom + RTO + insurance breakdown), current offers, video walkaround link, prominent test drive booking button. Reviews actively manage karte hain. Inquiries ka instant WhatsApp response. 11 Avtar Digital Hub dono platforms ki complete management karta hai.'
        },
        {
            question: 'Customer testimonial videos kaise shoot karte hain?',
            answer: 'Happy customers se permission lekar unke ghar ya dealership par shoot karte hain. 2-3 minute video — customer apni kahani batata hai: "Maine ye car kyun choose ki, ownership experience kaisa hai, dealership service kaisi thi." Customer ki car ke saath shoot. Written consent liya jaata hai. Testimonial videos website aur YouTube dono par use hote hain — conversion rate significantly increase karte hain.'
        }
    ],

    stats: {
        youtubeResearch: 'YouTube is the #1 platform for car research — buyers watch 5-15 videos before purchase',
        testDriveConversion: '60-70% of test drives convert to purchase with proper follow-up',
        onlineResearch: '60-70% of purchase decision is made online before showroom visit',
        serviceRevenue: 'Service revenue per customer is ₹5,000-15,000/year over 5-10 year ownership',
        exchangeBuyers: '30-40% of new car buyers have an exchange vehicle',
        videoImpact: 'Walkaround videos increase test drive bookings by 3x'
    }
};

console.log('✅ 11 Avtar Digital Hub — Automobile Blueprint loaded (Auto Sales Acceleration System™)');