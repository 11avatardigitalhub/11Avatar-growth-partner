/**
 * ============================================================
 * 11 AVTAR DIGITAL HUB
 * ⚕️ HEALTHCARE INDUSTRY BLUEPRINT
 * Patient Trust Engine™
 * Industry Growth Intelligence System™
 * ============================================================
 */

const HEALTHCARE_DATA = {
    id: 'healthcare',
    name: 'Healthcare',
    icon: '⚕️',
    slug: 'healthcare',
    signature: 'Patient Trust Engine™',

    // ============================================================
    // RULE A: INDUSTRY UNDERSTANDING
    // ============================================================
    understanding: 'Healthcare is fundamentally different from any other industry. A patient does not "shop" for a doctor — they search for someone they can trust with their health, sometimes their life. The decision process is deeply emotional, risk-averse, and research-intensive. Before booking an appointment, a patient typically searches symptoms online, reads about conditions, compares doctors, checks credentials, reads reviews, and only then makes contact. 11 Avtar Digital Hub understands that healthcare marketing is not about "selling" — it is about building doctor authority, establishing patient trust through education, and removing every friction point from the appointment booking process. A patient who trusts a doctor online before meeting them is 3x more likely to book and 5x more likely to follow treatment plans.',

    revenueModel: 'Healthcare providers earn through patient consultations (OPD), procedures and surgeries (IPD), diagnostic tests, pharmacy sales, and health packages. Private clinics typically see 20-50 patients per day. Each new patient acquired through digital channels has a lifetime value 10-20x their first consultation fee when considering follow-ups, referrals, and family members they bring.',

    customerPsychology: 'Patients are anxious. They fear misdiagnosis, high costs, and bad experiences. They seek doctors who appear knowledgeable (qualifications, experience), empathetic (good reviews, patient stories), and accessible (easy appointment booking, convenient location). A patient will research 3-5 doctors before booking. They trust peer reviews more than advertisements. They value doctors who educate — blog posts, videos explaining conditions, myth-busting content.',

    whyGenericFails: 'Generic marketing agencies treat healthcare like any service business — they create a basic website, post health tips, and run ads. They do not understand medical ethics, patient psychology, the importance of doctor authority building, or the regulatory constraints of healthcare advertising. "Best doctor in city" ads actually reduce trust. Patients want education, not sales pitches. Generic marketing fails because it does not build the trust and authority that healthcare decisions require. 11 Avtar Digital Hub builds Patient Trust Engines™ — digital ecosystems that establish doctors as authorities through educational content, genuine patient reviews, and frictionless appointment systems.',

    // ============================================================
    // RULE B: BUSINESS CHALLENGES (5 challenges)
    // ============================================================
    challenges: [
        {
            problem: 'Doctor Authority Not Established Online',
            whyItHappens: 'Most doctors rely entirely on word-of-mouth and walk-in patients. Their online presence is minimal — no detailed profile, no educational content, no video introductions. When a patient searches "[doctor name]" or "[specialist] in [city]", they find either nothing or an incomplete Practo profile. This lack of online authority makes it impossible for new patients to discover and trust the doctor.',
            digitalSolution: 'Create comprehensive doctor profile pages with qualifications, specializations, experience (years, cases handled), professional photo, video introduction, and patient reviews. Publish educational content — blog articles, YouTube videos explaining common conditions and treatments. Position the doctor as a thought leader through media mentions, conference talks, and social media presence. 11 Avtar Digital Hub builds complete doctor authority ecosystems that make patients think "This is the expert I need."',
            assetsNeeded: ['Doctor Profile Pages', 'Video Introduction Series', 'Educational Blog', 'YouTube Channel', 'Google Scholar/Research Links']
        },
        {
            problem: 'Appointment Booking Friction Driving Patients to Competitors',
            whyItHappens: 'Many clinics still rely on phone-only booking. Patients calling during busy hours face long waits, engaged tones, or no answer. There is no online appointment system, no WhatsApp booking, no real-time slot visibility. A patient who cannot book easily will simply call the next doctor on their list. Every friction point in booking loses 20-30% of potential patients.',
            digitalSolution: 'Implement online appointment booking system with real-time slot availability, doctor selection, and instant confirmation via WhatsApp and email. Add WhatsApp "Book Appointment" button on website and Google Business Profile. Set up automated reminders to reduce no-shows by 40-60%. 11 Avtar Digital Hub builds frictionless booking systems that convert interested patients into confirmed appointments within 60 seconds.',
            assetsNeeded: ['Online Appointment System', 'WhatsApp Booking Integration', 'Automated Reminders', 'Google Business Booking Integration', 'Patient Portal']
        },
        {
            problem: 'Weak Online Reputation — Few Reviews, No Social Proof',
            whyItHappens: 'Satisfied patients rarely leave reviews unless prompted. Dissatisfied patients are 3x more likely to leave negative reviews. Most doctors have fewer than 20 Google reviews, creating a weak social proof profile. New patients seeing only 5-10 reviews feel uncertain. A competitor with 100+ reviews and 4.5+ rating wins the patient every time.',
            digitalSolution: 'Implement ethical, compliant review generation system — automated WhatsApp/email request sent 24 hours after consultation (with patient consent). Make leaving reviews easy with direct links. Respond professionally to every review — positive and negative. Showcase patient success stories (with consent) as video testimonials. 11 Avtar Digital Hub helps doctors build 100+ authentic reviews within 6-12 months while maintaining full medical ethics compliance.',
            assetsNeeded: ['Review Generation System', 'Review Response Management', 'Patient Testimonial Videos', 'Google Business Optimization', 'Practo/Lybrate Profile Management']
        },
        {
            problem: 'No Patient Education — Missing Trust-Building Content',
            whyItHappens: 'Doctors know their field deeply but rarely create educational content. There are no blog posts explaining common conditions, no videos answering patient FAQs, no myth-busting content. Patients fill this knowledge gap by searching on Google and YouTube — where they find content from other doctors, sometimes with misinformation. The doctor who educates becomes the doctor patients trust.',
            digitalSolution: 'Create a systematic patient education program: (1) Blog — weekly articles on common conditions, symptoms, treatments, prevention (SEO-optimized so patients find them on Google), (2) YouTube — doctor explainer videos (3-5 minutes each) answering common patient questions, (3) Myth vs Fact series — addressing health misinformation, (4) Social media — bite-sized health tips, infographics, awareness content. 11 Avtar Digital Hub turns doctors into digital health educators, attracting patients through knowledge rather than advertisements.',
            assetsNeeded: ['Health Blog with SEO', 'Doctor Explainer Video Series', 'Myth vs Fact Content', 'Social Media Health Tips', 'Patient Education Brochures']
        },
        {
            problem: 'Zero Patient Retention System — Losing Lifetime Value',
            whyItHappens: 'Most clinics have no follow-up system. After a consultation, the patient receives no check-in message, no treatment progress inquiry, no appointment reminder for follow-up, no health tips. The patient relationship ends at the clinic door. This loses 60-70% of potential repeat visits and referrals. A patient who feels cared for after leaving is 5x more likely to return and 3x more likely to refer family.',
            digitalSolution: 'Implement HIPAA-compliant (or local regulation-compliant) patient relationship management: (1) Post-consultation follow-up message checking on patient wellbeing, (2) Automated appointment reminders for follow-up visits, (3) Health tips newsletter personalized to patient condition, (4) Birthday and health awareness day messages, (5) Recall system for annual checkups, vaccinations, and preventive screenings. 11 Avtar Digital Hub builds complete patient retention ecosystems that increase lifetime patient value by 300-500%.',
            assetsNeeded: ['CRM/Patient Management System', 'Automated Follow-up Messages', 'Health Newsletter', 'Appointment Recall System', 'WhatsApp Communication Workflows']
        }
    ],

    // ============================================================
    // RULE C: CUSTOMER JOURNEY
    // ============================================================
    customerJourney: {
        discovery: {
            title: 'Stage 1: Symptom Search — Where Do Patients Look?',
            description: 'A person experiences symptoms or has a health concern. They turn to the internet before consulting a doctor. Your digital presence must be visible at this critical moment.',
            psychology: 'Patients are anxious and seeking reliable information. They search symptoms, read about conditions, and look for doctors who specialize in their concern. They trust Google search results, YouTube health videos, and doctor rating platforms. First impression is formed by the quality and empathy of the information they find.',
            channels: [
                'Google Search ("best [specialist] near me", "[symptom] doctor in [city]", "[condition] treatment [city]")',
                'YouTube (health condition explainers, doctor Q&A, patient experience videos)',
                'Practo / Lybrate (doctor search by speciality, location, reviews, fees)',
                'Google Business Profile (local doctor search, reviews, photos, appointment link)',
                'Health Forums & Communities (patient discussions, recommendations)',
                'Instagram (health tips, doctor insights, patient awareness content)',
                'Facebook Health Groups (community recommendations)'
            ],
            digitalRequirements: [
                'SEO-optimized website with condition and treatment pages',
                'Google Business Profile fully optimized with photos and reviews',
                'Active Practo and Lybrate profiles',
                'YouTube channel with doctor explainer videos',
                'Health blog with symptom and condition guides',
                'Local SEO targeting "[speciality] in [city]"'
            ]
        },
        trust: {
            title: 'Stage 2: Doctor Evaluation — What Builds Patient Trust?',
            description: 'The patient has found potential doctors and is now evaluating who to trust with their health. They are comparing qualifications, experience, reviews, and "vibe."',
            psychology: 'Patients seek both competence (qualifications, experience, success rates) and empathy (good reviews, patient stories, approachable demeanor). A doctor with detailed qualifications, 50+ positive reviews, and educational videos appears significantly more trustworthy than one with a bare-minimum profile. Patients prefer doctors who explain things clearly — educational content proves communication ability before the first meeting.',
            trustFactors: [
                'Detailed doctor profile (qualifications, experience, specializations, publications)',
                'Google Reviews (quantity > 50, rating > 4.5)',
                'Practo/Lybrate ratings and patient feedback',
                'Video introduction — doctor speaking about their approach',
                'Educational content (blog, videos — proves expertise)',
                'Professional clinic/hospital photos (clean, modern, well-equipped)',
                'Media mentions, conference presentations, awards',
                'Patient success stories and testimonials (with consent)'
            ],
            digitalRequirements: [
                'Comprehensive doctor profile page on website',
                'Doctor introduction video (2-3 minutes)',
                'Educational video library on YouTube',
                'Review generation and management system',
                'Professional photography of doctor and facility',
                'Patient testimonial collection and display'
            ]
        },
        conversion: {
            title: 'Stage 3: Appointment Booking — Making It Effortless',
            description: 'The patient is ready to book. Every extra step, every second of friction, increases the chance they will abandon and choose another doctor.',
            psychology: 'Booking anxiety is real. Patients want to know: Is the doctor available? What are the fees? Will I get confirmation? Can I reschedule if needed? A complex booking process signals a disorganized practice. Instant confirmation reduces anxiety. Multiple booking options (online, WhatsApp, phone) cater to different patient preferences.',
            bookingMethods: [
                'Online Appointment Booking (website — most convenient, 24/7)',
                'WhatsApp Booking (personal, instant confirmation, popular in India)',
                'Phone Call (traditional, preferred by older patients)',
                'Practo/Lybrate Booking (platform-based)',
                'Google Business "Book Appointment" button',
                'Walk-in (reduced by good online systems)'
            ],
            digitalRequirements: [
                'Online appointment system with real-time slot booking',
                'WhatsApp Business API for booking and confirmations',
                'Automated booking confirmation (WhatsApp + email + SMS)',
                'Multiple payment options (online, at clinic)',
                'Appointment reminder system (24h and 2h before)',
                'Easy reschedule/cancel option'
            ]
        },
        retention: {
            title: 'Stage 4: Patient Retention — Beyond the Consultation',
            description: 'The consultation is complete. Most practices stop here. 11 Avtar Digital Hub knows this is where lifetime patient relationships are built.',
            psychology: 'A patient who feels cared for after leaving the clinic develops loyalty. Follow-up messages checking on their health, educational content relevant to their condition, and reminders for follow-up visits show genuine care. Patients who receive post-consultation follow-up are 5x more likely to return and 3x more likely to refer family and friends.',
            retentionStrategies: [
                'Post-consultation follow-up WhatsApp (same day — "How are you feeling? Any questions about your treatment?")',
                'Treatment progress check-in (3 days, 1 week as appropriate)',
                'Automated follow-up appointment reminders',
                'Health tips newsletter personalized to patient condition',
                'Birthday and festival wishes',
                'Annual checkup and vaccination reminders',
                'Referral program — "Refer a friend, get 20% off your next consultation"'
            ],
            digitalRequirements: [
                'Patient CRM system (HIPAA-compliant or local equivalent)',
                'Automated WhatsApp and email follow-up workflows',
                'Newsletter and health tips automation',
                'Appointment recall and reminder system',
                'Patient feedback collection system',
                'Referral tracking and reward system'
            ]
        }
    },

    // ============================================================
    // RULE D: WEBSITE ARCHITECTURE
    // ============================================================
    websiteArchitecture: {
        overview: 'A healthcare website is not a brochure — it is a patient acquisition and education platform. Every page must build trust, demonstrate expertise, and make booking effortless. 11 Avtar Digital Hub designs healthcare websites that convert anxious searchers into confident patients.',
        pages: [
            {
                name: 'Homepage',
                purpose: 'Immediately establish who the doctor is, what they specialize in, and how to book',
                features: [
                    'Hero section with doctor photo, speciality, and "Book Appointment" CTA',
                    'Trust indicators — qualifications, years of experience, patient count, ratings',
                    'Services/specializations overview with icons',
                    'Patient review slider',
                    'Clinic location with Google Map and hours',
                    'Health blog preview (latest 3 articles)',
                    'WhatsApp floating button',
                    'Emergency contact for urgent cases'
                ]
            },
            {
                name: 'Doctor Profile Page',
                purpose: 'Detailed CV-style page establishing complete authority and trust',
                features: [
                    'Professional photo gallery',
                    'Full qualifications (degree, institution, year)',
                    'Specializations and areas of expertise',
                    'Years of experience and cases/procedures handled',
                    'Professional memberships and certifications',
                    'Video introduction (2-3 min — doctor speaking about their approach)',
                    'Published research and media mentions',
                    'Patient reviews specific to this doctor',
                    'Consultation fees and timings'
                ]
            },
            {
                name: 'Treatment & Condition Pages',
                purpose: 'SEO-optimized pages that attract patients searching for specific conditions',
                features: [
                    'Detailed condition explanation (symptoms, causes, diagnosis)',
                    'Treatment options with pros and cons',
                    'Doctor\'s approach to treating this condition',
                    'FAQs specific to the condition',
                    'Patient success stories (with consent)',
                    'Book appointment CTA',
                    'Related conditions and treatments (internal linking for SEO)'
                ]
            },
            {
                name: 'Appointment Page',
                purpose: 'Frictionless booking — the most important conversion page',
                features: [
                    'Real-time slot availability calendar',
                    'Doctor selection (if multiple doctors)',
                    'Consultation type (in-person, video, phone)',
                    'Patient information form (name, phone, email, concern)',
                    'Instant confirmation with WhatsApp and email',
                    'Fees display and payment options',
                    'Cancellation and reschedule policy'
                ]
            },
            {
                name: 'Patient Education Hub',
                purpose: 'Blog + video library establishing ongoing authority',
                features: [
                    'Health blog with categorized articles',
                    'YouTube video embed library',
                    'Myth vs Fact section',
                    'Patient education brochures (PDF downloads)',
                    'Search by symptom or condition',
                    'Newsletter signup for health tips'
                ]
            },
            {
                name: 'Additional Pages',
                purpose: 'Complete patient information and trust building',
                features: [
                    'About the Clinic/Hospital — facilities, technology, team',
                    'Photo Gallery — clinic interior, equipment, doctor-patient interaction (consented)',
                    'Patient Testimonials — video and written, categorized by treatment',
                    'FAQ — appointment, fees, insurance, preparation, post-care',
                    'Contact & Location — address, map, phone, WhatsApp, email, hours',
                    'Emergency Information — when to seek urgent care',
                    'Privacy Policy & Medical Disclaimer'
                ]
            }
        ]
    },

    // ============================================================
    // RULE E: PLATFORM ECOSYSTEM
    // ============================================================
    platformEcosystem: {
        discovery: {
            title: 'Discovery Platforms — Where Patients Find Doctors',
            platforms: [
                'Google Search (symptom + condition + doctor searches)',
                'Google Business Profile (local doctor search)',
                'Practo (India\'s largest doctor discovery platform)',
                'Lybrate (doctor search and health Q&A)',
                'YouTube (health condition videos, doctor explainers)',
                'Health Insurance Provider Directories',
                'Instagram (health awareness content)'
            ]
        },
        trust: {
            title: 'Trust Platforms — Where Patients Verify Doctors',
            platforms: [
                'Google Reviews (most trusted review platform)',
                'Practo Patient Reviews',
                'Lybrate Ratings',
                'Doctor\'s Own Website (detailed profile, videos, blog)',
                'YouTube (doctor explainer videos prove expertise)',
                'LinkedIn (professional network, publications)',
                'ResearchGate / Google Scholar (published research)'
            ]
        },
        conversion: {
            title: 'Conversion Platforms — Where Patients Book',
            platforms: [
                'Doctor\'s Website Booking System (direct — most profitable)',
                'WhatsApp Booking (instant, personal)',
                'Practo Booking',
                'Lybrate Booking',
                'Google Business "Book Appointment"',
                'Phone Booking (for patients who prefer calling)'
            ]
        },
        retention: {
            title: 'Retention Platforms — Keeping Patients Connected',
            platforms: [
                'WhatsApp (follow-up messages, health tips, reminders)',
                'Email (newsletter, health awareness, appointment recalls)',
                'Patient Portal (reports, prescriptions, history)',
                'CRM System (patient database, communication history)',
                'YouTube (ongoing health education — keeps doctor top-of-mind)',
                'Instagram (daily health tips, stay connected)'
            ]
        }
    },

    // ============================================================
    // RULE F: CONTENT STRATEGY
    // ============================================================
    contentStrategy: {
        philosophy: 'Healthcare content must EDUCATE, not sell. Every piece of content should answer a patient question, address a health concern, or debunk a myth. When patients find helpful information from a doctor, they trust that doctor. Content is the bridge between "I have a problem" and "This doctor can help me."',
        pillars: [
            {
                name: 'Doctor Explainer Videos',
                whyItMatters: 'Video is the most powerful trust-building medium in healthcare. Seeing and hearing a doctor explain a condition creates a personal connection that text cannot. Patients feel they "know" the doctor before meeting them.',
                formats: [
                    'Doctor Introduction Video (2-3 min — qualifications, approach, philosophy)',
                    'Condition Explainer Videos (3-5 min each — "What is [condition]?" symptoms, treatment, prevention)',
                    'Patient FAQ Videos (1-2 min each — answering common patient questions)',
                    'Procedure Walkthrough Videos (explaining what happens during a treatment)',
                    'Myth vs Fact Shorts (60 sec — debunking health misinformation)'
                ],
                frequency: 'Doctor intro: once. Condition videos: 2-4 per month. Shorts: 4-8 per month.'
            },
            {
                name: 'Health Blog & Articles',
                whyItMatters: 'SEO-optimized health articles attract patients searching for information about their symptoms and conditions. A blog post ranking on Google for "[condition] symptoms and treatment" brings organic patient traffic for years.',
                formats: [
                    'Condition deep-dives (2,000+ words — comprehensive, SEO-optimized)',
                    'Symptom guides ("When to see a doctor for [symptom]")',
                    'Treatment comparison articles ("[Treatment A] vs [Treatment B] — Which is right for you?")',
                    'Prevention and wellness articles (lifestyle, diet, exercise)',
                    'Patient story articles (with consent — the journey from diagnosis to recovery)'
                ],
                frequency: '2-4 articles per month.'
            },
            {
                name: 'Patient Education & Awareness',
                whyItMatters: 'Educated patients are more likely to follow treatment plans, attend follow-ups, and refer others. Awareness content positions the doctor as a public health educator, building community trust.',
                formats: [
                    'Infographics (symptoms checklist, prevention tips, treatment flowchart)',
                    'Awareness day posts (World Heart Day, Diabetes Awareness Month, etc.)',
                    'Health tips carousel (Instagram — daily/weekly tips)',
                    'Downloadable guides (PDF — "Complete Guide to Managing [Condition]")',
                    'Myth vs Fact graphics (shareable, easy to understand)'
                ],
                frequency: 'Social media: 15-20 posts per month. Guides: 1-2 per quarter.'
            },
            {
                name: 'Patient Success Stories',
                whyItMatters: 'Real patient stories are the most convincing form of social proof in healthcare. A video of a patient describing how a doctor helped them is more powerful than any advertisement.',
                formats: [
                    'Video testimonials (1-2 min — patient describing their experience, with consent)',
                    'Written testimonials with patient photo (with consent)',
                    'Before/After (where applicable — dental, dermatology, orthopedics)',
                    '"Patient of the Month" feature (blog + social media)'
                ],
                frequency: 'Testimonials: 2-4 per month. Patient features: 1 per month.'
            }
        ]
    },

    // ============================================================
    // RULE G: QUANTIFIED DELIVERABLES
    // ============================================================
    deliverables: {
        website: {
            item: 'Healthcare Website',
            qty: '10-14 Pages',
            detail: 'Homepage, Doctor Profile Page(s), Treatment/Condition Pages (4-6), Appointment Booking Page, Patient Education Hub (Blog + Videos), About Clinic, Photo Gallery, Patient Testimonials, FAQ, Contact & Location, Emergency Info, Privacy Policy. Includes online appointment system, WhatsApp integration, SEO, analytics.'
        },
        doctorVideo: {
            item: 'Doctor Video Series',
            qty: '8-12 Videos',
            detail: '1 Doctor Introduction Video (2-3 min), 4-6 Condition Explainer Videos (3-5 min each), 3-5 Patient FAQ Videos (1-2 min each). Plus 10-15 Shorts/Reels per month for social media.'
        },
        content: {
            item: 'Health Content Marketing',
            qty: '8-12 Articles/Month',
            detail: 'SEO-optimized health blog articles (2-4), social media posts (15-20), infographics (2-4), patient education brochures (1-2 per quarter), myth vs fact series (ongoing).'
        },
        photography: {
            item: 'Professional Medical Photography',
            qty: '30-50 Images',
            detail: 'Doctor professional portraits, clinic/hospital interiors, examination rooms, equipment, staff, patient interaction (with consent), reception area, exterior.'
        },
        listings: {
            item: 'Healthcare Platform Management',
            qty: '3-5 Platforms',
            detail: 'Google Business Profile (full optimization, weekly posts, review management), Practo Profile (complete profile, reviews, booking integration), Lybrate Profile, YouTube Channel, LinkedIn Profile.'
        },
        branding: {
            item: 'Medical Branding & Stationery',
            qty: '12-15 Items',
            detail: 'Logo Design, Brand Guidelines, Visiting Cards, Prescription Pad Design, Letterhead, Envelope, Clinic/Hospital Signage, Staff ID Cards, Patient Education Brochures, Appointment Cards, Feedback Forms.'
        },
        automation: {
            item: 'Patient Communication Automation',
            qty: '5-7 Workflows',
            detail: '1. Appointment Booking Confirmation (instant), 2. Appointment Reminder (24h + 2h before), 3. Post-Consultation Follow-up (same day), 4. Treatment Progress Check-in, 5. Follow-up Appointment Reminder, 6. Review Request (24h after), 7. Health Tips Newsletter.'
        },
        ads: {
            item: 'Healthcare Advertising',
            qty: 'Campaign Management',
            detail: 'Google Ads (treatment awareness, appointment campaigns), Facebook/Instagram Ads (health awareness, clinic promotion), Local SEO for top Google rankings. All campaigns comply with medical advertising regulations.'
        }
    },

    // ============================================================
    // RULE H: DIGITAL ASSETS CHECKLIST
    // ============================================================
    digitalAssets: {
        'Website & Booking System': [
            'Healthcare Website (10-14 Pages)',
            'Online Appointment System',
            'WhatsApp Booking Integration',
            'Patient Portal Setup',
            'Mobile-Responsive Design',
            'SEO-Optimized Structure',
            'Google Analytics Setup',
            'SSL Certificate (Security)'
        ],
        'Doctor Authority Building': [
            'Comprehensive Doctor Profile Page',
            'Doctor Introduction Video (2-3 min)',
            'Condition Explainer Video Series',
            'Patient FAQ Video Series',
            'Health Blog (SEO-Optimized)',
            'Research & Publication Showcase',
            'Media Mentions & Awards Section'
        ],
        'Google & Listing Platforms': [
            'Google Business Profile Optimization',
            'Google Reviews Generation System',
            'Practo Profile Management',
            'Lybrate Profile Management',
            'Local SEO Strategy',
            'Review Response Management',
            'Google Maps Optimization'
        ],
        'Patient Education Content': [
            'Health Blog Articles (8-12/month)',
            'Infographics & Health Tips',
            'Myth vs Fact Content Series',
            'Patient Education Brochures (PDF)',
            'Condition-Specific Guides',
            'Prevention & Wellness Content',
            'Awareness Day Campaigns'
        ],
        'Visual & Brand Assets': [
            'Professional Doctor Photography',
            'Clinic/Facility Photography',
            'Logo Design & Brand Guide',
            'Visiting Cards & Stationery',
            'Prescription Pad Design',
            'Clinic Signage Design',
            'Staff ID Cards'
        ],
        'Patient Communication': [
            'Appointment Confirmation Automation',
            'Appointment Reminder System',
            'Post-Consultation Follow-up',
            'Health Tips Newsletter',
            'Review Request Automation',
            'WhatsApp Communication Workflows',
            'Patient Recall System'
        ],
        'Advertising & Marketing': [
            'Google Ads Management',
            'Social Media Management',
            'Instagram Health Content',
            'YouTube Channel Management',
            'Facebook Awareness Campaigns',
            'Health Camp Promotions',
            'Referral Program Setup'
        ]
    },

    // ============================================================
    // GROWTH OPPORTUNITIES
    // ============================================================
    growthOpportunities: [
        {
            opportunity: 'Video Consultation Service',
            potential: 'High',
            description: 'Offer online consultations for follow-ups, minor concerns, and patients from other cities. Reduces no-shows and expands patient base beyond geographic limits.',
            digitalRequirements: ['Video Consultation Platform', 'Online Payment', 'Digital Prescription System']
        },
        {
            opportunity: 'Health Checkup Camps & Packages',
            potential: 'Very High',
            description: 'Create preventive health packages (full body checkup, cardiac screening, diabetes package). Promote through Google Ads and social media. Attracts new patients who may need ongoing care.',
            digitalRequirements: ['Package Landing Pages', 'Google Ads', 'Social Media Campaigns', 'Online Booking for Camps']
        },
        {
            opportunity: 'Corporate Wellness Tie-ups',
            potential: 'High',
            description: 'Partner with local companies for employee health checkups, wellness workshops, and preferential consultation rates. Provides steady patient volume.',
            digitalRequirements: ['Corporate Proposal PDF', 'LinkedIn Outreach', 'Corporate Landing Page']
        },
        {
            opportunity: 'Second Opinion Service',
            potential: 'Medium-High',
            description: 'Offer formal second opinion service for complex cases. Attracts patients from other cities/countries. Builds reputation as a specialist authority.',
            digitalRequirements: ['Second Opinion Landing Page', 'Online Report Upload', 'Video Consultation Integration']
        }
    ],

    // ============================================================
    // FAQ — INDUSTRY SPECIFIC
    // ============================================================
    faqs: [
        {
            question: 'Kya doctor ke liye Google Ads allowed hain?',
            answer: 'Haan, lekin medical advertising regulations ke saath compliant hona zaroori hai. 11 Avtar Digital Hub Indian Medical Council guidelines ke according ethical advertising create karta hai — educational content, awareness campaigns, aur appointment promotions. Hum "best doctor" ya guaranteed results jaise misleading claims nahi karte.'
        },
        {
            question: 'Patient reviews kaise collect karte hain ethically?',
            answer: 'Post-consultation automated WhatsApp/email message bhej kar, patient ki consent ke saath. Message mein direct Google review link hota hai. Koi fake review nahi, koi incentive nahi — sirf genuine patient feedback. Medical ethics fully compliant.'
        },
        {
            question: 'Website par kya-kya medical disclaimers zaroori hain?',
            answer: 'Privacy Policy (patient data protection), Medical Disclaimer (website information is educational, not medical advice), Terms of Use, aur Cookie Policy. 11 Avtar Digital Hub sab legal pages create karta hai jo Indian medical regulations ke compliant hain.'
        },
        {
            question: 'Appointment system clinic ke existing workflow ke saath integrate hoga?',
            answer: 'Haan. Hum aapke existing practice management software (agar hai) ke saath integrate karte hain, ya standalone online booking system set up karte hain jo aapki team easily manage kar sake. Real-time slot management, doctor-wise availability, aur automated confirmations — sab included.'
        },
        {
            question: 'Doctor videos banane mein kitna time lagta hai?',
            answer: 'Ek doctor introduction video (2-3 min) shoot aur edit hone mein 1-2 din lagta hai. Condition explainer videos — planning, shoot, editing — 3-5 days per video. Hum clinic hours ke baad ya weekend par shoot karte hain taaki practice disturb na ho.'
        },
        {
            question: 'Patient data privacy kaise ensure karte hain?',
            answer: 'Sab patient data SSL-encrypted website par store hota hai. CRM systems HIPAA-equivalent security standards follow karte hain. Patient communication ke liye WhatsApp Business API (end-to-end encrypted) use karte hain. Data kabhi third-party ke saath share nahi kiya jaata.'
        },
        {
            question: 'Existing patients ko digital system adopt karne mein kitna time lagta hai?',
            answer: 'Existing patients ko WhatsApp aur SMS ke through naye online booking system ke baare mein inform kiya jaata hai. Usually 2-3 months mein 60-70% patients online booking shift ho jaate hain. Senior patients ke liye phone booking option continue rakha jaata hai.'
        }
    ],

    stats: {
        patientsResearchOnline: '77% of patients search online before booking a doctor (Google study)',
        reviewImportance: '72% of patients use online reviews as their first step in finding a new doctor',
        videoTrust: 'Doctors with video content get 40% more appointment requests',
        noShowReduction: 'Automated reminders reduce no-shows by 40-60%',
        patientRetention: 'Follow-up communication increases patient retention by 300-500%'
    }
};

console.log('✅ 11 Avtar Digital Hub — Healthcare Blueprint loaded (Patient Trust Engine™)');
window.HEALTHCARE_DATA = HEALTHCARE_DATA;
