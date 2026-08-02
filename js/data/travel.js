/**
 * ============================================================
 * 11 AVTAR DIGITAL HUB
 * ✈️ TRAVEL INDUSTRY BLUEPRINT
 * Travel Experience Engine™
 * Industry Growth Intelligence System™
 * ============================================================
 */

const TRAVEL_DATA = {
    id: 'travel',
    name: 'Travel',
    icon: '✈️',
    slug: 'travel',
    signature: 'Travel Experience Engine™',

    // ============================================================
    // RULE A: INDUSTRY UNDERSTANDING
    // ============================================================
    understanding: 'Travel is an experience-driven, inspiration-fueled, high-consideration purchase. A traveler does not buy a "flight ticket" or "hotel room" — they buy a dream, a memory, an escape from routine. The decision process is emotional and visual: they see a stunning photo of a destination on Instagram, watch a travel vlog on YouTube, read a blog about "10 best places to visit in [destination]," and then spend 2-8 weeks researching, comparing itineraries, reading reviews, and planning before booking. Unlike most industries, travel purchases are often planned months in advance and involve multiple components (flights, hotels, activities, transfers, insurance). 11 Avtar Digital Hub understands that travel marketing is about SELLING THE DREAM through immersive visual content, BUILDING TRUST through detailed itineraries and genuine reviews, and MAKING BOOKING EFFORTLESS through customizable packages and instant communication. A travel agency with stunning destination content, transparent pricing, and easy inquiry/booking wins travelers.',

    revenueModel: 'Travel agencies earn through: package tour margins (15-30% on total package), hotel booking commissions (10-25%), flight booking commissions (2-8%), activity/transfer commissions (15-30%), and visa/insurance service fees. Average package value: domestic ₹15,000-₹50,000 per person, international ₹50,000-₹5,00,000+ per person. An agency doing 50 international packages/month at ₹1 lakh average generates ₹60 lakh monthly revenue. Digital channels generate 50-70% of new inquiries.',

    customerPsychology: 'Travelers are dreamers first, planners second, and bookers third. They: (1) Dream — see inspiring content and imagine themselves there, (2) Research — compare destinations, read reviews, check budgets, (3) Plan — create itinerary, check dates, consult with co-travelers, (4) Book — when they feel confident and excited. They fear: bad experiences (poor hotel, cancelled flights, safety issues), hidden costs, and wasted time/money. They trust: visual proof (real traveler photos and videos), detailed itineraries (shows expertise), genuine reviews (not fake), and responsive communication (quick answers to questions). Price is important but not the only factor — trust and experience quality often outweigh 10-15% price differences.',

    whyGenericFails: 'Generic agencies create basic travel websites with stock photos of beaches and mountains, list package prices, and run "best travel deals" ads. They do not understand: (1) The inspiration-to-booking journey — travelers need to be inspired before they book, (2) The power of destination-specific content — "Kerala backwaters houseboat experience" converts better than "South India tour," (3) Instagram and YouTube as the primary travel inspiration platforms, (4) The importance of detailed itineraries and transparent pricing in building trust, (5) The role of traveler reviews and UGC in social proof. Generic marketing produces low-quality leads that never convert because it fails to sell the dream. 11 Avtar Digital Hub builds Travel Experience Engines™ that inspire travelers through immersive content and convert through detailed, trustworthy itineraries.',

    // ============================================================
    // RULE B: BUSINESS CHALLENGES (5 challenges)
    // ============================================================
    challenges: [
        {
            problem: 'No Inspirational Content — Missing the Dream Phase',
            whyItHappens: 'Travel decisions start with inspiration — a stunning photo, an exciting video, a compelling story. Most travel agency websites are transactional — package lists with prices, no visual storytelling. A traveler lands on the website, sees a price list, feels uninspired, and leaves. They go to Instagram or YouTube for inspiration and end up booking through whoever inspired them — often not the original agency. Agencies without inspirational content lose travelers before the research phase even begins.',
            digitalSolution: 'Create immersive destination content ecosystem: (1) Destination-specific video series — 3-5 minute cinematic videos for each major destination showing the experience (not just landmarks but moments — local food, cultural experiences, hidden gems), (2) Professional destination photography — 50-100 images per destination, real travelers (not stock), (3) Instagram reels — 15-30 second quick destination highlights, traveler moments, behind-the-scenes, (4) Destination guides — detailed blog posts covering best time to visit, top attractions, local tips, sample itineraries, (5) Customer journey videos — real travelers sharing their experience. 11 Avtar Digital Hub builds content that makes travelers think "I need to go there" and "This agency can take me there."',
            assetsNeeded: ['Destination Video Series (3-5 min each)', 'Professional Destination Photography', 'Instagram Reels Strategy (15-20/month)', 'Destination Guide Blog Posts', 'Customer Journey Videos', 'Content Calendar for Inspiration']
        },
        {
            problem: 'Itineraries Not Detailed Enough — Travelers Cannot Evaluate Value',
            whyItHappens: 'Travel packages are typically displayed as: "Kerala Tour — 5 Days — ₹25,000." That\'s it. No day-by-day breakdown, no hotel names, no activity details, no meal inclusions, no transport information. A traveler comparing packages cannot evaluate what they are getting. They fear hidden costs, poor hotels, and wasted time. Competitor agencies that provide detailed day-by-day itineraries with hotel names, activity descriptions, meal plans, and transparent inclusions/exclusions win trust and bookings.',
            digitalSolution: 'Create comprehensive package detail pages: (1) Day-by-day itinerary with timings, activities, and descriptions, (2) Hotel details — names, photos, room types, amenities, (3) Meal plan — what meals are included, where, (4) Transport details — vehicle type, transfers included, (5) Clear inclusions and exclusions list, (6) Pricing breakdown — what the package costs and what is included vs optional, (7) Traveler reviews specific to this package, (8) Customization option — "Want to modify this itinerary? Contact us." 11 Avtar Digital Hub builds package pages that answer every traveler question before they ask.',
            assetsNeeded: ['Detailed Day-by-Day Itinerary Pages', 'Hotel Photos & Details per Package', 'Transparent Pricing Breakdown', 'Inclusions/Exclusions List', 'Package-Specific Reviews', 'Customization Inquiry System']
        },
        {
            problem: 'No Social Proof — Missing Traveler Reviews and UGC',
            whyItHappens: 'Travel is a high-risk purchase — travelers are spending significant money on an experience they cannot preview. They rely heavily on reviews from other travelers. But most travel agency websites have: few or no reviews, no traveler photos/videos, no social media UGC reposted, no testimonial videos. Without social proof, trust is low. Competitors with 100+ reviews, traveler photo galleries, and active social proof win.',
            digitalSolution: 'Build comprehensive social proof system: (1) Post-trip review request — automated WhatsApp/email within 2 days of trip completion, with direct link to Google review and website testimonial, (2) Traveler photo and video collection — request travelers to share their best photos/videos (with permission to use), (3) Video testimonials — 1-2 minute traveler interviews about their experience, (4) UGC gallery on website — real traveler photos organized by destination, (5) Instagram UGC reposting — share customer travel photos on agency Instagram. 11 Avtar Digital Hub builds social proof engines that generate 20-50+ reviews per month.',
            assetsNeeded: ['Post-Trip Review Request Automation', 'Traveler Photo/Video Collection System', 'Video Testimonial Production', 'UGC Gallery on Website', 'Instagram UGC Reposting Strategy']
        },
        {
            problem: 'Inquiry Response Too Slow — Losing Ready-to-Book Travelers',
            whyItHappens: 'A traveler has researched, found a package they like, and submitted an inquiry or customization request. They expect a response within minutes, not hours. Most agencies respond in 4-24 hours — by which time the traveler has contacted 2-3 other agencies and may have already booked elsewhere. Travel is a competitive, time-sensitive purchase — especially for group bookings and peak-season travel.',
            digitalSolution: 'Implement instant inquiry response system: (1) WhatsApp auto-response — instant acknowledgment when inquiry form is submitted ("Thank you for your inquiry! We\'re checking availability and will respond within 15 minutes"), (2) CRM with lead assignment — inquiry routed to available travel consultant immediately, (3) Pre-built response templates for common queries — itineraries, pricing, customization, (4) Live chat on website for instant answers to quick questions, (5) Video call option for complex itinerary discussions. 11 Avtar Digital Hub builds response systems that reply within 5 minutes, increasing inquiry-to-booking conversion by 200-300%.',
            assetsNeeded: ['WhatsApp Business Auto-Response', 'CRM with Lead Assignment', 'Response Templates for Common Queries', 'Website Live Chat', 'Video Consultation Setup', 'Inquiry Tracking & Follow-up System']
        },
        {
            problem: 'Zero Post-Trip Engagement — Losing Repeat and Referral Business',
            whyItHappens: 'After a traveler returns from a great trip, they are emotionally positive about the experience for 1-2 weeks. This is the golden window to: request a review, ask for referrals, and plant seeds for the next trip. Most agencies do nothing — no follow-up, no thank you, no review request, no "where next?" suggestions. The emotional connection fades, and the traveler forgets the agency until the next trip — at which point they may choose a different agency.',
            digitalSolution: 'Create post-trip engagement system: (1) Welcome-back message — WhatsApp within 24 hours of return ("Hope you had an amazing trip! We\'d love to hear about your experience"), (2) Review request — gentle ask for Google review and testimonial, (3) Photo/video sharing request — "Share your best travel moments with us!", (4) "Where next?" campaign — based on their travel history, suggest next destinations, (5) Referral program — "Refer a friend and you both get ₹2,000 off your next trip," (6) Birthday and anniversary travel offers, (7) Early access to new packages and deals for past travelers. 11 Avtar Digital Hub turns one-time travelers into lifelong clients.',
            assetsNeeded: ['Post-Trip WhatsApp Automation', 'Review Generation System', 'Traveler Photo Collection', '"Where Next?" Recommendation Engine', 'Referral Program', 'Past Traveler Exclusive Offers', 'CRM with Travel History']
        }
    ],

    // ============================================================
    // RULE C: CUSTOMER JOURNEY
    // ============================================================
    customerJourney: {
        discovery: {
            title: 'Stage 1: Travel Inspiration — Where Do Travelers Dream?',
            description: 'A person starts dreaming about a vacation. They browse for inspiration without necessarily planning to book immediately.',
            psychology: 'Dreaming is visual and emotional. Travelers want to see beautiful places, imagine themselves there, and feel the excitement. Instagram and YouTube are the primary inspiration platforms. They save/bookmark destinations and experiences that appeal to them. This stage can last weeks or months.',
            channels: [
                'Instagram — destination photos, travel reels, influencer content, geo-tagged posts (THE #1 travel inspiration platform)',
                'YouTube — travel vlogs, destination guides, "top 10 places" videos, experience videos',
                'Pinterest — travel boards, destination inspiration, itinerary ideas',
                'Google Search — "best places to visit in [month]," "[destination] travel guide," "things to do in [place]"',
                'Facebook Travel Groups — community recommendations, traveler experiences',
                'Travel Blogs — detailed destination guides and personal experiences',
                'WhatsApp — friend recommendations, forwarded travel content'
            ],
            digitalRequirements: [
                'Instagram business profile with professional travel content',
                'YouTube channel with destination videos',
                'Pinterest travel boards',
                'SEO-optimized destination guide blog posts',
                'Google Business Profile with reviews and photos',
                'Active presence in travel groups'
            ]
        },
        trust: {
            title: 'Stage 2: Agency Evaluation — What Builds Traveler Trust?',
            description: 'The traveler has decided on a destination and is now evaluating travel agencies to book with.',
            psychology: 'Travelers fear: bad experiences, hidden costs, poor service, and safety issues. They seek agencies that: demonstrate destination expertise (detailed itineraries, guides), have strong reviews from real travelers, are responsive to inquiries, and provide transparent pricing. A well-traveled customer photo gallery and detailed itineraries build more trust than any marketing claim.',
            trustFactors: [
                'Detailed day-by-day itineraries with hotel names and activity details',
                'Google Reviews — quantity (>50) and quality (>4.5 rating)',
                'Traveler photos and videos — real people on real trips (UGC)',
                'Video testimonials from past travelers',
                'Transparent pricing — clear inclusions and exclusions',
                'Responsive communication — quick replies to inquiries',
                'Professional website with real destination photos (not stock)',
                'Years in business and industry recognition',
                'Social media following and engagement'
            ],
            digitalRequirements: [
                'Detailed package/itinerary pages',
                'Review generation and management',
                'Traveler UGC gallery',
                'Video testimonial collection',
                'Transparent pricing on all packages',
                'Quick inquiry response system'
            ]
        },
        conversion: {
            title: 'Stage 3: Inquiry to Booking — Making It Happen',
            description: 'The traveler is ready to inquire, customize, and book.',
            psychology: 'The traveler wants: quick, personal response to their inquiry, flexibility to customize the package, clarity on pricing and payment, and confidence that everything is taken care of. A slow or generic response kills the sale. A personalized, helpful response closes it.',
            conversionMethods: [
                'Website Inquiry Form (with instant auto-response)',
                'WhatsApp Inquiry (most popular for travel in India)',
                'Phone Call (for complex itineraries or group bookings)',
                'Video Call Consultation (for premium/custom packages)',
                'Direct Online Booking (for standardized packages)',
                'Walk-in (for local travel agencies)'
            ],
            digitalRequirements: [
                'Inquiry form with instant auto-response',
                'WhatsApp Business for personalized communication',
                'CRM with lead tracking',
                'Payment gateway for online booking/advance',
                'Video call setup for consultations'
            ]
        },
        retention: {
            title: 'Stage 4: Post-Trip to Next Trip — Lifetime Traveler Value',
            description: 'The traveler has returned. The post-trip experience determines whether they book again and refer others.',
            psychology: 'Post-trip happiness peaks for 1-2 weeks. A welcome-back message, a request for their story, and a suggestion for their next adventure all work best in this window. Travelers who feel cared for after the trip book again and tell friends. Those who hear nothing forget the agency.',
            retentionStrategies: [
                'Welcome-back message within 24 hours of return',
                'Review and testimonial request',
                'Photo/video sharing request — "Share your best moments!"',
                '"Where next?" — personalized destination suggestions',
                'Referral program with incentives',
                'Birthday and anniversary travel offers',
                'Early access to new packages and deals',
                'Annual "dream destination" survey — where do you want to go next?'
            ],
            digitalRequirements: [
                'Post-trip automation (WhatsApp + email)',
                'CRM with travel history and preferences',
                'Referral program with tracking',
                '"Where next?" recommendation system',
                'Exclusive offers for past travelers'
            ]
        }
    },

    // ============================================================
    // RULE D: WEBSITE ARCHITECTURE
    // ============================================================
    websiteArchitecture: {
        overview: 'A travel website must inspire dreams and make booking effortless. Every page should sell the experience through visuals and provide complete information for confident booking.',
        pages: [
            { name: 'Homepage', purpose: 'Immediate destination inspiration and trust signals', features: ['Hero with destination video slider', 'Popular destinations showcase with stunning photos', 'Current offers and deals', 'Traveler testimonial preview', 'Trust indicators — reviews, years in business, travelers served', 'Search/Destination finder', 'WhatsApp floating button'] },
            { name: 'Destination Pages', purpose: 'Complete destination guide — inspiration + information', features: ['Cinematic destination video (3-5 min)', 'Photo gallery (50+ professional images)', 'Best time to visit with month-by-month guide', 'Top attractions and experiences', 'Sample itineraries (3-day, 5-day, 7-day options)', 'Travel tips — visa, currency, language, safety', 'Related packages and pricing', 'Traveler reviews specific to this destination', 'Inquiry/Book CTA'] },
            { name: 'Package Detail Pages', purpose: 'Complete package information for confident booking', features: ['Day-by-day detailed itinerary', 'Hotel details with photos and room types', 'Meal plan details', 'Transport information', 'Clear pricing breakdown', 'Inclusions and exclusions list', 'Customization option', 'Traveler reviews for this package', 'Book Now / Enquire CTA'] },
            { name: 'Traveler Gallery', purpose: 'Social proof through real traveler photos and videos', features: ['UGC photo gallery organized by destination', 'Traveler video testimonials', 'Traveler stories and experiences', '"Trip of the Month" feature'] },
            { name: 'About & Trust', purpose: 'Build agency credibility', features: ['Agency story and history', 'Team introduction', 'Awards and recognition', 'Google Reviews integration', 'Industry affiliations'] }
        ]
    },

    // ============================================================
    // RULE E: PLATFORM ECOSYSTEM
    // ============================================================
    platformEcosystem: {
        discovery: { title: 'Discovery', platforms: ['Instagram (destination content, reels)', 'YouTube (travel vlogs, guides)', 'Google Search (destination + package queries)', 'Pinterest (travel boards)', 'Facebook Travel Groups', 'Google Business Profile'] },
        trust: { title: 'Trust', platforms: ['Google Reviews', 'TripAdvisor (if listed)', 'Website (detailed itineraries, UGC gallery)', 'YouTube (destination guides, testimonials)', 'Instagram (real traveler content)'] },
        conversion: { title: 'Conversion', platforms: ['Website Inquiry/Booking', 'WhatsApp Business', 'Phone', 'Video Call Consultation', 'Walk-in'] },
        retention: { title: 'Retention', platforms: ['WhatsApp (post-trip, offers)', 'Email (newsletter, "where next?")', 'CRM (travel history)', 'Instagram (ongoing inspiration)', 'Referral Program'] }
    },

    // ============================================================
    // RULE F: CONTENT STRATEGY
    // ============================================================
    contentStrategy: {
        philosophy: 'Travel content must transport the viewer. Every photo and video should make them feel like they are already there — the warmth of the sun, the sound of waves, the taste of local food. Content sells the dream.',
        pillars: [
            { name: 'Destination Showcase Content', whyItMatters: 'The primary inspiration tool. Stunning destination content creates the desire to travel. Without it, travelers never move to the planning stage.', formats: ['Destination cinematic videos (3-5 min each)', 'Professional destination photography (50-100 per destination)', 'Instagram reels — quick destination highlights (15-30 sec)', '360° virtual destination tours'], frequency: 'Videos: 1-2 per destination (update every 2-3 years). Reels: 4-6 per week.' },
            { name: 'Traveler Journey Content', whyItMatters: 'Real traveler experiences are the ultimate social proof. Seeing real people enjoying a trip creates "I want that too" desire.', formats: ['Customer journey videos — traveler sharing their experience', 'UGC photo galleries — real traveler photos', '"Trip of the Month" features', 'Traveler testimonial videos'], frequency: '2-4 per month.' },
            { name: 'Travel Tips & Guides', whyItMatters: 'Practical information builds trust and helps travelers plan. Detailed guides position the agency as a destination expert.', formats: ['Destination guide blog posts', '"Top 10 things to do in [destination]" articles', 'Packing guides and travel tips', 'Visa and documentation guides', 'Budget breakdown posts'], frequency: 'Blog: 2-4 per month. Guides: 1-2 per destination.' }
        ]
    },

    // ============================================================
    // RULE G: QUANTIFIED DELIVERABLES
    // ============================================================
    deliverables: {
        website: { item: 'Travel Agency Website', qty: '12-18 Pages', detail: 'Homepage, Destination Pages (per destination), Package Detail Pages (per package), Traveler Gallery, About, Blog, Contact, Inquiry/Booking. SEO-optimized for destination and package keywords.' },
        video: { item: 'Travel Video Production', qty: '1-2 Per Destination + 15-20 Reels/Month', detail: 'Destination cinematic videos (3-5 min), Customer journey/testimonial videos. Plus 15-20 Instagram reels monthly.' },
        photography: { item: 'Travel Photography', qty: '50-100 Per Destination', detail: 'Professional destination photography — landmarks, experiences, food, culture, accommodations. Real travelers (model or actual customers with consent).' },
        content: { item: 'Travel Content Marketing', qty: 'Monthly Ongoing', detail: 'Destination guide blog posts (2-4/month), Social media content (15-20 posts/month), Email newsletter (monthly), Travel tips and guides, UGC collection and reposting.' },
        automation: { item: 'Travel CRM & Automation', qty: '5-7 Workflows', detail: 'Inquiry auto-response (instant), lead assignment, post-booking confirmation and pre-trip information, welcome-back message post-trip, review request, "where next?" suggestion, birthday offers.' }
    },

    // ============================================================
    // RULE H: DIGITAL ASSETS CHECKLIST
    // ============================================================
    digitalAssets: {
        'Website & Booking': ['Travel Website (12-18 Pages)', 'Destination Pages (Per Destination)', 'Package Detail Pages', 'Online Inquiry/Booking System', 'WhatsApp Integration', 'SEO for Travel Keywords', 'Analytics'],
        'Visual Content': ['Destination Cinematic Videos', 'Professional Travel Photography', 'Instagram Reels (15-20/month)', 'Customer Journey Videos', 'UGC Photo Gallery', '360° Virtual Tours'],
        'Trust & Social Proof': ['Google Reviews Management', 'Traveler Testimonial Videos', 'UGC Collection & Display', 'TripAdvisor Listing (if applicable)', 'Review Generation System'],
        'Content & Inspiration': ['Destination Guide Blog', 'Travel Tips & Articles', 'Social Media Content (15-20/month)', 'Email Newsletter', 'YouTube Channel'],
        'CRM & Retention': ['CRM with Travel History', 'Inquiry Auto-Response', 'Post-Trip Engagement Automation', 'Referral Program', '"Where Next?" Recommendation Engine']
    },

    // ============================================================
    // GROWTH OPPORTUNITIES
    // ============================================================
    growthOpportunities: [
        { opportunity: 'Corporate Travel Management', potential: 'High', description: 'Target businesses for corporate travel — employee travel, client visits, events. B2B recurring revenue with higher volumes.' },
        { opportunity: 'NRI & Diaspora Travel', potential: 'Very High', description: 'Target NRIs for India travel packages — pilgrimage, heritage, luxury. NRI travelers have higher budgets and longer stays.' },
        { opportunity: 'Specialized Niche Travel', potential: 'High', description: 'Focus on niche segments — adventure travel, wellness retreats, senior citizen tours, women-only trips, culinary tours. Premium pricing and loyal customer base.' },
        { opportunity: 'Travel Subscription/Membership', potential: 'Medium-High', description: 'Annual travel membership — exclusive deals, priority booking, complimentary upgrades, dedicated travel consultant. Recurring revenue model.' }
    ],

    // ============================================================
    // FAQ
    // ============================================================
    faqs: [
        { question: 'Travel agency ke liye Instagram kitna important hai?', answer: 'Instagram THE #1 travel inspiration platform hai. 70%+ travelers destination research Instagram par start karte hain. Professional destination content, reels, aur traveler UGC se aapki agency dream-seller banti hai. 11 Avtar Digital Hub travel-focused Instagram strategy create karta hai — content creation se lekar influencer collaborations tak.' },
        { question: 'Package itinerary kitni detailed honi chahiye?', answer: 'Day-by-day detailed: har din ka schedule, timings, hotel names with photos, meal details, transport type, activity descriptions. Pricing breakdown — exactly kya included hai aur kya extra. Jitni zyada detail, utna zyada trust. 11 Avtar Digital Hub detailed package pages create karta hai jo traveler ke har sawal ka jawab deti hain.' },
        { question: 'Inquiry response time kitna matter karta hai travel mein?', answer: 'Extremely. Travel inquiries time-sensitive hoti hain — especially peak season mein. Pehla response 5 minutes ke andar (auto-acknowledgment), personal response 15-30 minutes ke andar ideal hai. 11 Avtar Digital Hub inquiry response system set up karta hai with auto-response, CRM routing, aur response templates.' },
        { question: 'Customer reviews travel agency ke liye kitne important hain?', answer: 'Critical. 90%+ travelers reviews padhte hain booking se pehle. 50+ reviews with 4.5+ rating aapko competitors se alag karta hai. Post-trip review request automated karein — trip ke 2 din baad WhatsApp/email with direct review link. 11 Avtar Digital Hub review generation system set up karta hai.' }
    ],

    stats: { instagramInspiration: '70%+ of travelers use Instagram for travel inspiration', reviewImportance: '90%+ of travelers read reviews before booking', responseTime: 'Responding within 5 minutes increases conversion by 3x', repeatTravelers: 'Repeat travelers spend 30-50% more than first-time travelers' }
};

console.log('✅ 11 Avtar Digital Hub — Travel Blueprint loaded (Travel Experience Engine™)');