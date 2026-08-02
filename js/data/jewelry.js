/**
 * ============================================================
 * 11 AVTAR DIGITAL HUB
 * 💎 JEWELRY INDUSTRY BLUEPRINT
 * Jewelry Desire Engine™
 * Industry Growth Intelligence System™
 * ============================================================
 */

const JEWELRY_DATA = {
    id: 'jewelry',
    name: 'Jewelry',
    icon: '💎',
    slug: 'jewelry',
    signature: 'Jewelry Desire Engine™',

    understanding: 'Jewelry is an emotional purchase driven by desire, trust, and occasion. A customer does not "need" a diamond necklace — they desire it for a wedding, anniversary, investment, or self-reward. The decision is deeply personal, involves significant expenditure (₹10,000-₹10,00,000+), and requires immense trust in the jeweler\'s authenticity, purity, and craftsmanship. Before purchasing, customers browse designs extensively online (Instagram, Pinterest, jeweler websites), check certifications (hallmark, GIA), compare prices, read reviews, and often visit multiple stores. 11 Avtar Digital Hub understands that jewelry marketing is about creating DESIRE through visual storytelling, building TRUST through certification transparency, and providing a seamless digital-to-physical journey. A jeweler with a stunning digital catalog, clear certification, and easy appointment booking wins the customer before they ever visit the store.',

    revenueModel: 'Jewelers earn through gold jewelry sales (50-60%), diamond jewelry (20-30%), silver and platinum (5-10%), and making charges/customization fees (10-15%). Average transaction ranges from ₹5,000 for silver to ₹5,00,000+ for diamond/gold. A store serving 20 customers/day at ₹30,000 average generates ₹18 crore annual revenue. Digital channels can increase footfall by 30-50% through catalog browsing, appointment booking, and festive campaigns.',

    customerPsychology: 'Jewelry purchases are emotional, trust-dependent, and often occasion-driven. Key drivers: (1) Occasion — wedding, festival, anniversary, birthday, (2) Investment — gold as asset, (3) Design desire — seeing a beautiful piece creates want, (4) Trust — hallmark, certification, family jeweler reputation. Customers spend 2-8 weeks browsing before purchasing. They visit 2-4 jewelers before deciding. Instagram and Pinterest are the primary discovery and desire-creation platforms. Trust factors (hallmark, certification, reviews, family reputation) are the deciding factors. A customer who trusts a jeweler will pay 5-10% premium over an unknown jeweler.',

    whyGenericFails: 'Generic marketing agencies treat jewelry like any retail product — they create a basic catalog website, post product photos on social media, and run "best jewelry shop" ads. They do not understand: (1) The emotional and trust-dependent nature of jewelry purchases, (2) The importance of craftsmanship storytelling and design detail visualization, (3) Instagram and Pinterest as primary desire-creation platforms, (4) Certification and hallmark as trust signals that must be prominently displayed, (5) The appointment-based high-value purchase journey. Generic marketing produces low engagement because it fails to create desire or build the deep trust jewelry purchases require. 11 Avtar Digital Hub builds Jewelry Desire Engines™ that make designs irresistible through visual storytelling and establish trust through certification transparency.',

    challenges: [
        {
            problem: 'Design Catalog Not Visible Online — Missing the Desire Phase',
            whyItHappens: 'Jewelers have hundreds of beautiful designs in-store but display only 10-20 online — often in poor quality phone photos with no zoom, no model shots, no categorization. Customers who want to browse designs before visiting find nothing compelling and move to jewelers with better online catalogs. 60-70% of customers browse online before visiting a store.',
            digitalSolution: 'Create comprehensive digital catalog with professional jewelry photography — every piece photographed on model and white background, with zoom functionality, 360° product views, and video clips showing sparkle and movement. Organize by category (rings, necklaces, earrings, bangles, bridal), metal (gold, diamond, platinum), and occasion (wedding, daily, festive). 11 Avtar Digital Hub builds digital catalogs that create desire and drive store visits.',
            assetsNeeded: ['Professional Jewelry Photography', '360° Product Views', 'Video Clips', 'Categorized Digital Catalog', 'Model Photoshoots', 'Zoom Functionality']
        },
        {
            problem: 'Trust Deficit — Certification and Authenticity Not Communicated',
            whyItHappens: 'Customers fear impure gold, fake diamonds, and overpricing. Most jeweler websites do not prominently display certifications (hallmark, GIA, IGI), purity guarantees, or return policies. Trust signals are buried or missing. In an industry where trust is everything, this silence creates doubt.',
            digitalSolution: 'Create dedicated "Trust & Certification" page explaining: hallmarking process, BIS certification, diamond grading reports, purity testing methods, and buyback/ exchange policies. Display certification logos prominently. Create video content explaining how to verify gold purity. Show customer testimonials specifically about trust and authenticity. 11 Avtar Digital Hub builds transparency systems that make customers feel secure buying from your store.',
            assetsNeeded: ['Trust & Certification Page', 'Certification Display', 'Purity Education Videos', 'Buyback Policy Page', 'Customer Trust Testimonials']
        },
        {
            problem: 'No Appointment System — Losing High-Value Customers',
            whyItHappens: 'High-value jewelry purchases (₹50,000+) require personalized attention — dedicated seating, multiple designs to view, expert consultation. Walk-in customers may face wait times or receive less attention during busy hours. VIP customers who want exclusive service have no way to book it online.',
            digitalSolution: 'Implement online appointment booking system with: VIP consultation slots, preference selection (bridal, investment, casual), dedicated relationship manager assignment, and pre-visit design shortlisting. Customer can browse catalog online, shortlist designs, and book appointment to view them in person. 11 Avtar Digital Hub builds VIP appointment systems that make high-value customers feel valued and increase conversion.',
            assetsNeeded: ['Online Appointment System', 'VIP Slot Booking', 'Design Shortlist Feature', 'Relationship Manager Assignment', 'Pre-Visit Confirmation']
        },
        {
            problem: 'Festival & Wedding Season Not Captured Digitally',
            whyItHappens: '60-70% of jewelry sales happen during wedding season and festivals (Diwali, Dhanteras, Akshaya Tritiya). But most jewelers start marketing only 1-2 weeks before, missing the 4-6 week browsing period. There are no dedicated wedding collections online, no festival lookbooks, no targeted seasonal campaigns.',
            digitalSolution: 'Create seasonal marketing calendar with: (1) Wedding collection lookbook (professional model shoot) launched 6-8 weeks before season, (2) Festival-specific landing pages (Diwali specials, Dhanteras gold coins), (3) Targeted Instagram/Pinterest ads for "bridal jewelry," "Diwali gold," (4) Email/WhatsApp campaigns to existing customers with preview access. 11 Avtar Digital Hub plans and executes seasonal campaigns that capture peak demand.',
            assetsNeeded: ['Wedding Collection Lookbook', 'Festival Landing Pages', 'Seasonal Ad Campaigns', 'Email/WhatsApp Campaigns', 'Model Photoshoots']
        },
        {
            problem: 'Zero Customer Retention — One-Time Purchasers',
            whyItHappens: 'Jewelers focus on new customer acquisition but have no retention system. After a purchase, there is no follow-up, no anniversary reminders, no new collection previews, no loyalty program. A customer who bought wedding jewelry has no reason to return for anniversary gifts, children\'s jewelry, or festival purchases.',
            digitalSolution: 'Implement customer lifecycle marketing: (1) Post-purchase thank you and care instructions, (2) Anniversary of purchase reminders with new collection suggestions, (3) Birthday and festival wishes with exclusive preview access, (4) Loyalty program — points on purchases, redeemable for making charge discounts, (5) VIP preview events for new collections. 11 Avtar Digital Hub turns one-time buyers into lifetime customers.',
            assetsNeeded: ['CRM with Purchase History', 'Anniversary Reminder System', 'Loyalty Program', 'VIP Preview Invitations', 'Festival Campaign Automation']
        }
    ],

    customerJourney: {
        discovery: {
            title: 'Stage 1: Design Discovery — Where Do Customers Browse?',
            description: 'A customer decides to buy jewelry — for an occasion, investment, or self-purchase. They begin browsing designs online for inspiration.',
            psychology: 'Jewelry browsing is visual and emotional. Customers scroll through beautiful designs, imagining how they would look wearing them. Instagram and Pinterest are the primary platforms — visual-first, aspirational. They save/bookmark designs they like. This stage is about desire creation.',
            channels: [
                'Instagram (jewelry reels, model photos, influencer content, designer showcases)',
                'Pinterest (jewelry boards, bridal inspiration, design ideas)',
                'Google Search ("gold jewelry [city]", "diamond necklace designs", "bridal jewelry sets")',
                'YouTube (jewelry reviews, craftsmanship videos, store tours)',
                'Jeweler Websites (design catalogs)',
                'WhatsApp (forwarded jewelry photos, family recommendations)'
            ],
            digitalRequirements: [
                'Instagram business profile with professional jewelry content',
                'Pinterest boards with categorized designs',
                'SEO-optimized website with design catalog',
                'YouTube channel with craftsmanship videos',
                'Google Business Profile with photos and reviews'
            ]
        },
        trust: {
            title: 'Stage 2: Trust Verification — What Makes Customers Trust a Jeweler?',
            description: 'The customer has found designs they like and is now evaluating which jeweler to buy from.',
            psychology: 'Jewelry purchases involve significant money and trust. Customers fear: impure gold, fake diamonds, overpricing, poor craftsmanship. They seek jewelers who are transparent about certifications, have strong reviews, and feel trustworthy. A family jeweler reference or long-standing reputation is highly valued.',
            trustFactors: [
                'BIS Hallmark certification prominently displayed',
                'Diamond grading reports (GIA, IGI) for diamond jewelry',
                'Google Reviews (quantity > 50, rating > 4.5)',
                'Transparent pricing — gold rate, making charges, diamond quality breakdown',
                'Buyback and exchange policy clearly stated',
                'Craftsmanship videos showing making process',
                'Store photos showing professional, secure environment',
                'Customer testimonials — especially about trust and authenticity'
            ],
            digitalRequirements: [
                'Trust & Certification page with hallmark and grading info',
                'Transparent pricing page',
                'Review generation and management',
                'Craftsmanship videos',
                'Store tour video',
                'Buyback/exchange policy page'
            ]
        },
        conversion: {
            title: 'Stage 3: Purchase — In-Store with Digital Support',
            description: 'The customer visits the store (or browses online) to make the purchase.',
            psychology: 'Jewelry is a touch-and-feel purchase. Customers want to see, touch, try on jewelry before buying. The store experience — ambiance, service, expertise — is critical. Some younger customers are comfortable buying online for lower-value items. High-value purchases almost always involve store visit.',
            conversionMethods: [
                'Store Visit with Appointment (preferred for high-value)',
                'Walk-in Purchase',
                'Online Purchase (growing for lower-value, hallmark-certified items)',
                'WhatsApp Purchase (sending photos, payment, delivery)',
                'Video Call Shopping (for remote/NRI customers)'
            ],
            digitalRequirements: [
                'Online appointment booking',
                'WhatsApp Business for remote sales',
                'Payment gateway (for online purchases)',
                'Digital invoice and certification delivery',
                'Post-purchase follow-up automation'
            ]
        },
        retention: {
            title: 'Stage 4: Lifetime Relationship — Beyond the First Purchase',
            description: 'The customer has made a purchase. Now begins a decades-long relationship.',
            psychology: 'Jewelry customers are highly loyal if treated well. A customer who bought wedding jewelry will need anniversary gifts, children\'s jewelry, festival purchases, and eventually their children\'s wedding jewelry. Regular, personalized communication keeps the jeweler top-of-mind. Trust built over years creates a customer for life.',
            retentionStrategies: [
                'Purchase anniversary reminders with new collection suggestions',
                'Festival and birthday wishes with exclusive offers',
                'New collection preview invitations (before public launch)',
                'Loyalty program — points, making charge discounts, free cleaning',
                'Gold rate alerts — "Rates are favorable, consider investing"',
                'Referral program — "Refer a friend, get ₹2,000 off"',
                'Annual jewelry cleaning and maintenance reminders'
            ],
            digitalRequirements: [
                'CRM with customer database, purchase history, preferences',
                'Automated anniversary and birthday campaigns',
                'Loyalty program software',
                'WhatsApp/email marketing automation',
                'New collection preview system',
                'Referral tracking'
            ]
        }
    },

    websiteArchitecture: {
        overview: 'A jewelry website must create desire through stunning visuals and build trust through transparency. Every page should showcase craftsmanship and make it easy to take the next step — visit, inquire, or purchase.',
        pages: [
            {
                name: 'Homepage',
                purpose: 'Immediate visual impact with new collections and trust signals',
                features: [
                    'Hero section with latest collection video or model shoot',
                    'New arrivals and bestsellers showcase',
                    'Book Appointment CTA (prominent)',
                    'Trust bar — Hallmark certified, GIA diamonds, 50+ years legacy, buyback guarantee',
                    'Customer testimonial slider',
                    'Gold/diamond rate ticker (real-time)',
                    'WhatsApp floating button'
                ]
            },
            {
                name: 'Design Catalog',
                purpose: 'Complete searchable, filterable product catalog',
                features: [
                    'Filterable by category (rings, necklaces, earrings, bangles, sets)',
                    'Filterable by metal (gold, diamond, platinum, silver)',
                    'Filterable by occasion (bridal, daily, party, festive)',
                    'Filterable by price range',
                    'Each product with multiple photos, zoom, 360° view',
                    'Model-worn photos',
                    'Video clips showing sparkle and movement',
                    'Pricing — gold weight, diamond details, making charges',
                    'Enquire / Book Appointment / Buy Now CTA'
                ]
            },
            {
                name: 'Bridal Collection',
                purpose: 'Dedicated high-value bridal showcase',
                features: [
                    'Professional bridal model photoshoot gallery',
                    'Complete bridal sets (necklace, earrings, maang tikka, bangles, rings)',
                    'Bridal consultation booking',
                    'Bridal jewelry packages with pricing',
                    'Bridal customer testimonials and wedding photos'
                ]
            },
            {
                name: 'Trust & Certification Page',
                purpose: 'Complete transparency about authenticity and quality',
                features: [
                    'BIS Hallmark explanation and certification display',
                    'Diamond grading report explanation (4Cs — Cut, Color, Clarity, Carat)',
                    'Gold purity testing demonstration video',
                    'Buyback and exchange policy',
                    'Customer trust testimonials',
                    'Store legacy — years in business, family heritage'
                ]
            },
            {
                name: 'Appointment Booking',
                purpose: 'VIP consultation scheduling',
                features: [
                    'Preference selection (bridal, investment, casual, gift)',
                    'Date and time picker',
                    'Design shortlist option (browse catalog, add to wishlist)',
                    'Relationship manager selection (if multiple)',
                    'Instant confirmation via WhatsApp',
                    'Reminder before appointment'
                ]
            }
        ]
    },

    platformEcosystem: {
        discovery: {
            title: 'Discovery Platforms — Where Customers Find Designs',
            platforms: [
                'Instagram (jewelry content, reels, influencer collaborations — #1 visual platform)',
                'Pinterest (bridal jewelry, design inspiration)',
                'Google Search ("gold jewelry shop [city]", "diamond necklace price")',
                'YouTube (craftsmanship videos, jewelry reviews, store tours)',
                'Google Business Profile',
                'WhatsApp (forwarded designs, family recommendations)'
            ]
        },
        trust: {
            title: 'Trust Platforms — Where Customers Verify Jewelers',
            platforms: [
                'Google Reviews',
                'Jeweler Website (certification page, pricing transparency)',
                'YouTube (craftsmanship videos, purity testing demos)',
                'Instagram (real customer photos, store ambiance)',
                'BIS/GIA Online Verification (linked from website)'
            ]
        },
        conversion: {
            title: 'Conversion Platforms — Where Customers Purchase',
            platforms: [
                'Physical Store Visit (primary for high-value)',
                'WhatsApp Purchase (remote buying with photos/videos)',
                'Website Purchase (growing for lower-value items)',
                'Video Call Shopping (for remote/NRI customers)',
                'Phone/Appointment Booking'
            ]
        },
        retention: {
            title: 'Retention Platforms — Keeping Customers for Life',
            platforms: [
                'WhatsApp (personalized offers, gold rate alerts, festival wishes)',
                'Email (new collection previews, loyalty updates)',
                'CRM (customer database, purchase history, preferences)',
                'Instagram (stay connected, showcase new designs)',
                'Loyalty Program Portal'
            ]
        }
    },

    contentStrategy: {
        philosophy: 'Jewelry content must make hearts skip a beat. Every photo and video should create DESIRE — the irresistible urge to own that piece. Content must showcase craftsmanship, celebrate occasions, and build unshakeable trust.',
        pillars: [
            {
                name: 'Product Showcase Content',
                whyItMatters: 'The core of jewelry marketing. Stunning product visuals create desire. Professional photography showing every detail, sparkle, and design element makes customers fall in love with pieces before seeing them in person.',
                formats: [
                    'Professional product photography — white background, multiple angles',
                    'Model-worn photography — showing scale, how it looks when worn',
                    '360° product spin videos',
                    'Sparkle and movement video clips (5-10 seconds)',
                    'Macro photography showing intricate craftsmanship details'
                ],
                frequency: 'Photoshoot: every new collection. Product posts: 8-12 per week. Videos: 3-5 per week.'
            },
            {
                name: 'Craftsmanship & Behind-the-Scenes',
                whyItMatters: 'Customers value craftsmanship. Content showing how jewelry is made — from raw gold to finished piece — builds appreciation and trust. It justifies the making charges and positions the jeweler as an artisan, not just a seller.',
                formats: [
                    'Craftsmanship documentary video (3-5 min — complete journey of a piece)',
                    'Behind-the-scenes reels — gold melting, stone setting, polishing',
                    'Artisan spotlight — introduce the craftsmen, their experience, their art',
                    'Design to reality — sketch vs finished piece comparison'
                ],
                frequency: 'Documentary: 1-2 per year. BTS reels: 2-3 per week. Artisan spotlights: 1-2 per month.'
            },
            {
                name: 'Occasion & Lifestyle Content',
                whyItMatters: 'Jewelry is bought for occasions. Content that connects jewelry to life moments — weddings, festivals, achievements — creates emotional resonance and purchase motivation.',
                formats: [
                    'Bridal lookbook — professional model shoot, complete bridal jewelry set',
                    'Festival collection showcases — Diwali, Dhanteras, Akshaya Tritiya',
                    '"How to Style" reels — pairing jewelry with outfits for different occasions',
                    'Customer celebration features — brides on their wedding day (with permission)'
                ],
                frequency: 'Lookbooks: per season. Styling reels: 2-3 per week. Customer features: 1-2 per month.'
            },
            {
                name: 'Trust & Education Content',
                whyItMatters: 'Educated customers trust more. Content explaining gold purity, diamond grading, hallmark certification, and pricing transparency builds confidence and justifies premium pricing.',
                formats: [
                    '"How to Verify Gold Purity" video',
                    '"Understanding Diamond 4Cs" educational video',
                    'Hallmark and certification explainer infographics',
                    'Transparent pricing breakdown posts — "What makes up the price of this necklace"',
                    'Customer testimonial videos focused on trust and authenticity'
                ],
                frequency: 'Educational videos: 1-2 per month. Infographics: 2-4 per month.'
            }
        ]
    },

    deliverables: {
        website: { item: 'Jewelry Website', qty: '8-12 Pages', detail: 'Homepage, Design Catalog (filterable), Bridal Collection, Trust & Certification, Appointment Booking, About Legacy, Contact, Blog. Includes product zoom, 360° view, wishlist, WhatsApp, SEO.' },
        photography: { item: 'Professional Jewelry Photography', qty: '50-100 Images', detail: 'White background product shots, model-worn shots, macro detail shots, collection group shots. Every piece professionally lit, styled, edited.' },
        video: { item: 'Video Production', qty: '3-5 Videos + 10-15 Reels/Month', detail: '1 Craftsmanship documentary (3-5 min), Product showcase videos, 360° spin videos, sparkle clips. Plus 10-15 Instagram/Pinterest reels monthly.' },
        social: { item: 'Social Media Management', qty: '20-25 Posts/Month', detail: 'Instagram (12-15 posts + stories + reels), Pinterest (10-15 pins), Facebook (6-8 posts), YouTube (2-4 videos).' },
        automation: { item: 'Customer Relationship Automation', qty: '5-7 Workflows', detail: '1. Appointment booking confirmation, 2. Post-purchase thank you & care guide, 3. Purchase anniversary reminder, 4. Birthday/Festival wishes with offers, 5. New collection VIP preview, 6. Gold rate alert, 7. Loyalty points update.' }
    },

    digitalAssets: {
        'Website & Catalog': ['Jewelry Website (8-12 Pages)', 'Filterable Design Catalog', 'Product Zoom & 360° View', 'Wishlist Feature', 'Bridal Collection Page', 'Online Appointment System', 'SEO & Analytics'],
        'Visual Content': ['Professional Product Photography (50-100)', 'Model Photoshoot', '360° Product Videos', 'Sparkle & Movement Clips', 'Craftsmanship Documentary', 'Social Media Reels (10-15/month)'],
        'Trust & Certification': ['Trust & Certification Page', 'BIS Hallmark Display', 'Diamond Grading Education', 'Pricing Transparency Page', 'Buyback Policy Page', 'Customer Trust Testimonials'],
        'Social & Discovery': ['Instagram Business Management', 'Pinterest Portfolio', 'YouTube Channel', 'Google Business Profile', 'Influencer Collaborations', 'Festival Campaigns'],
        'Customer Retention': ['CRM System', 'Appointment Automation', 'Purchase Anniversary Reminders', 'Festival/Birthday Campaigns', 'Loyalty Program', 'Gold Rate Alert System']
    },

    growthOpportunities: [
        { opportunity: 'E-Commerce for Hallmark Jewelry', potential: 'Very High', description: 'Sell BIS-hallmarked gold coins, silver articles, and lower-value diamond jewelry online. Growing trend — customers trust hallmark certification for online purchase.', digitalRequirements: ['Ecommerce Integration', 'Secure Payment', 'Insured Shipping', 'Hallmark Certification Display'] },
        { opportunity: 'NRI & International Sales', potential: 'High', description: 'Target NRI customers for wedding and investment jewelry. Video call shopping, international shipping, and family-based payment in India.', digitalRequirements: ['NRI Landing Page', 'Video Call Consultation', 'International Shipping', 'Family Payment Option'] },
        { opportunity: 'Custom Design Service', potential: 'High', description: 'Offer bespoke jewelry design — customer describes vision, jeweler creates. Attracts high-value customers seeking unique pieces.', digitalRequirements: ['Custom Design Inquiry', 'Design Portfolio', 'Process Video', 'Consultation Booking'] },
        { opportunity: 'Gold Investment Platform', potential: 'Medium-High', description: 'Digital gold and gold SIP — customers invest monthly in gold. Builds recurring revenue and attracts younger, investment-focused customers.', digitalRequirements: ['Gold Investment Page', 'SIP Calculator', 'Monthly Auto-Debit', 'Gold Rate Dashboard'] }
    ],

    faqs: [
        { question: 'Professional jewelry photography kitni important hai?', answer: 'Extremely important. Jewelry is visual — customers buy what looks beautiful. Professional photography with proper lighting, macro details, and model shots increases catalog browsing time by 3x and inquiry rate by 2x. Phone photos make even expensive jewelry look cheap. 11 Avtar Digital Hub professional jewelry photographers ke saath shoot karta hai — white background, model shots, 360° views, sparkle videos.' },
        { question: 'Online jewelry sell karna safe hai?', answer: 'Lower-value, BIS-hallmarked items (gold coins, silver, certified diamond jewelry under ₹50,000) ke liye online selling safe aur growing hai. SSL security, insured shipping, COD option, easy returns. High-value items ke liye online catalog browsing + store visit model best hai. 11 Avtar Digital Hub aapke business model ke hisaab se strategy design karta hai.' },
        { question: 'Gold rate daily update karna zaroori hai website par?', answer: 'Haan, real-time gold/diamond rate display trust build karta hai. Customers ko lagta hai jeweler transparent hai. Rate display ke saath "Book at this rate" option bhi de sakte hain — customer rate lock kar sakta hai 24-48 hours ke liye. 11 Avtar Digital Hub live rate integration set up karta hai.' },
        { question: 'Bridal collection marketing kaise karte hain?', answer: 'Bridal marketing 6-8 weeks before wedding season start hoti hai. Professional bridal model shoot, dedicated bridal landing page, Instagram/Pinterest targeted ads for "bridal jewelry," wedding planner collaborations, bridal consultation bookings. Bridal customers ka average ticket size ₹1-5 lakh hota hai — highest value customer segment. 11 Avtar Digital Hub complete bridal marketing campaigns run karta hai.' },
        { question: 'Customer lifetime value kaise increase karein?', answer: 'Jewelry customer lifetime value decades tak hoti hai. CRM mein purchase history store karein. Purchase anniversary par naye designs suggest karein. Festivals par exclusive preview bhejein. Loyalty program se repeat purchases incentivize karein. Gold rate alerts se investment purchases trigger karein. Ek wedding jewelry customer agle 20-30 saal mein ₹10-50 lakh+ spend kar sakta hai.' },
        { question: 'Video call shopping kaise set up karte hain?', answer: 'WhatsApp video call ya Zoom ke through. Customer ko designs live dikhayein, model wear karke dikhayein, close-up sparkle dikhayein. Payment link bhejein. Insured courier se delivery. Video call shopping NRI customers aur dusre sheher ke customers ke liye game-changer hai. 11 Avtar Digital Hub complete video call shopping system set up karta hai with training for sales team.' }
    ],

    stats: {
        onlineBrowsing: '60-70% of jewelry customers browse designs online before visiting store',
        visualImpact: 'Professional photos increase catalog browsing time by 3x',
        bridalValue: 'Bridal customers have 5-10x higher average ticket size',
        trustFactor: 'Hallmark certification display increases purchase confidence by 70%',
        retentionValue: 'Jewelry customer lifetime value spans 20-30+ years',
        instagramDiscovery: 'Instagram is the #1 discovery platform for jewelry designs'
    }
};

console.log('✅ 11 Avtar Digital Hub — Jewelry Blueprint loaded (Jewelry Desire Engine™)');
window.JEWELRY_DATA = JEWELRY_DATA;
