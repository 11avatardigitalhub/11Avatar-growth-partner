/**
 * ============================================================
 * 11 AVTAR DIGITAL HUB
 * Industry Registry — Index of all 18 Industries
 * Industry Growth Intelligence System™
 * ============================================================
 */

var INDUSTRY_REGISTRY = {
    hospitality: {
        id: 'hospitality',
        name: 'Hospitality',
        icon: '🏨',
        slug: 'hospitality',
        signature: 'Guest Conversion Ecosystem™',
        shortDesc: 'Hotels, Resorts, Homestays, Guest Houses',
        category: 'Service & Experience',
        keywords: ['hotel marketing', 'resort digital growth', 'direct booking', 'OTA management', 'guest retention'],
        dataFile: 'hospitality.js',
        dataVar: 'HOSPITALITY_DATA',
        featured: true,
        order: 1
    },
    healthcare: {
        id: 'healthcare',
        name: 'Healthcare',
        icon: '⚕️',
        slug: 'healthcare',
        signature: 'Patient Trust Engine™',
        shortDesc: 'Hospitals, Clinics, Doctors, Diagnostics',
        category: 'Healthcare & Wellness',
        keywords: ['doctor marketing', 'hospital digital growth', 'patient acquisition', 'healthcare SEO', 'online appointment'],
        dataFile: 'healthcare.js',
        dataVar: 'HEALTHCARE_DATA',
        featured: true,
        order: 2
    },
    realestate: {
        id: 'realestate',
        name: 'Real Estate',
        icon: '🏠',
        slug: 'realestate',
        signature: 'Property Authority System™',
        shortDesc: 'Builders, Developers, Agents, Property Portals',
        category: 'Property & Construction',
        keywords: ['real estate marketing', 'property lead generation', 'builder digital growth', 'NRI property sales', 'virtual tour'],
        dataFile: 'realestate.js',
        dataVar: 'REALESTATE_DATA',
        featured: true,
        order: 3
    },
    restaurant: {
        id: 'restaurant',
        name: 'Restaurant & Food',
        icon: '🍽️',
        slug: 'restaurant',
        signature: 'Dining Discovery Engine™',
        shortDesc: 'Restaurants, Cafes, Cloud Kitchens, Food Trucks',
        category: 'Food & Beverage',
        keywords: ['restaurant marketing', 'food business growth', 'online ordering', 'Zomato Swiggy management', 'table booking'],
        dataFile: 'restaurant.js',
        dataVar: 'RESTAURANT_DATA',
        featured: true,
        order: 4
    },
    education: {
        id: 'education',
        name: 'Education',
        icon: '🎓',
        slug: 'education',
        signature: 'Student Enrollment Growth System™',
        shortDesc: 'Schools, Colleges, Coaching Centers, EdTech',
        category: 'Education & Training',
        keywords: ['education marketing', 'student enrollment', 'school digital growth', 'coaching center leads', 'campus tour'],
        dataFile: 'education.js',
        dataVar: 'EDUCATION_DATA',
        featured: true,
        order: 5
    },
    beauty: {
        id: 'beauty',
        name: 'Beauty & Salon',
        icon: '💄',
        slug: 'beauty',
        signature: 'Beauty Brand Attraction System™',
        shortDesc: 'Salons, Spas, Beauty Clinics, Makeup Artists',
        category: 'Beauty & Personal Care',
        keywords: ['salon marketing', 'beauty business growth', 'online booking', 'instagram for salon', 'bridal packages'],
        dataFile: 'beauty.js',
        dataVar: 'BEAUTY_DATA',
        featured: false,
        order: 6
    },
    fitness: {
        id: 'fitness',
        name: 'Fitness',
        icon: '🏋️',
        slug: 'fitness',
        signature: 'Transformation Membership Engine™',
        shortDesc: 'Gyms, Yoga Studios, Personal Trainers, Fitness Apps',
        category: 'Fitness & Wellness',
        keywords: ['gym marketing', 'fitness business growth', 'membership sales', 'trainer branding', 'online coaching'],
        dataFile: 'fitness.js',
        dataVar: 'FITNESS_DATA',
        featured: false,
        order: 7
    },
    automobile: {
        id: 'automobile',
        name: 'Automobile',
        icon: '🚗',
        slug: 'automobile',
        signature: 'Auto Sales Acceleration System™',
        shortDesc: 'Car Dealerships, Service Centers, Auto Parts',
        category: 'Automotive',
        keywords: ['car dealership marketing', 'auto sales growth', 'test drive booking', 'service center digital', 'car comparison'],
        dataFile: 'automobile.js',
        dataVar: 'AUTOMOBILE_DATA',
        featured: false,
        order: 8
    },
    jewelry: {
        id: 'jewelry',
        name: 'Jewelry',
        icon: '💎',
        slug: 'jewelry',
        signature: 'Jewelry Desire Engine™',
        shortDesc: 'Jewelry Stores, Designers, Bullion Traders',
        category: 'Luxury & Retail',
        keywords: ['jewelry marketing', 'jewellery business growth', 'online catalog', 'wedding jewelry', 'hallmark trust'],
        dataFile: 'jewelry.js',
        dataVar: 'JEWELRY_DATA',
        featured: false,
        order: 9
    },
    fashion: {
        id: 'fashion',
        name: 'Fashion',
        icon: '👗',
        slug: 'fashion',
        signature: 'Fashion Commerce Engine™',
        shortDesc: 'Clothing Brands, Boutiques, Designers, Ecommerce',
        category: 'Fashion & Lifestyle',
        keywords: ['fashion marketing', 'clothing brand growth', 'ecommerce optimization', 'lookbook creation', 'influencer marketing'],
        dataFile: 'fashion.js',
        dataVar: 'FASHION_DATA',
        featured: false,
        order: 10
    },
    manufacturing: {
        id: 'manufacturing',
        name: 'Manufacturing',
        icon: '🏭',
        slug: 'manufacturing',
        signature: 'Industrial Lead Engine™',
        shortDesc: 'Factories, OEMs, Exporters, Industrial Suppliers',
        category: 'Industrial & B2B',
        keywords: ['manufacturing marketing', 'B2B lead generation', 'industrial SEO', 'export marketing', 'factory digital'],
        dataFile: 'manufacturing.js',
        dataVar: 'MANUFACTURING_DATA',
        featured: false,
        order: 11
    },
    legal: {
        id: 'legal',
        name: 'Legal',
        icon: '⚖️',
        slug: 'legal',
        signature: 'Legal Authority System™',
        shortDesc: 'Law Firms, Advocates, Legal Consultants, Arbitrators',
        category: 'Professional Services',
        keywords: ['lawyer marketing', 'legal practice growth', 'attorney SEO', 'client acquisition', 'legal authority building'],
        dataFile: 'legal.js',
        dataVar: 'LEGAL_DATA',
        featured: false,
        order: 12
    },
    finance: {
        id: 'finance',
        name: 'Finance',
        icon: '💰',
        slug: 'finance',
        signature: 'Financial Clarity Engine™',
        shortDesc: 'Financial Advisors, CA Firms, Wealth Managers, NBFCs',
        category: 'Financial Services',
        keywords: ['financial advisor marketing', 'wealth management growth', 'CA firm digital', 'investment leads', 'tax consultancy'],
        dataFile: 'finance.js',
        dataVar: 'FINANCE_DATA',
        featured: false,
        order: 13
    },
    retail: {
        id: 'retail',
        name: 'Retail',
        icon: '🛍️',
        slug: 'retail',
        signature: 'Retail Footfall Engine™',
        shortDesc: 'Retail Stores, Supermarkets, Specialty Shops, Malls',
        category: 'Retail & Commerce',
        keywords: ['retail marketing', 'store footfall increase', 'local SEO', 'Google Business optimization', 'loyalty program'],
        dataFile: 'retail.js',
        dataVar: 'RETAIL_DATA',
        featured: false,
        order: 14
    },
    ecommerce: {
        id: 'ecommerce',
        name: 'Ecommerce',
        icon: '📦',
        slug: 'ecommerce',
        signature: 'Ecommerce Growth Machine™',
        shortDesc: 'Online Stores, D2C Brands, Marketplaces, Dropshippers',
        category: 'Digital Commerce',
        keywords: ['ecommerce marketing', 'online store growth', 'cart recovery', 'conversion optimization', 'D2C brand building'],
        dataFile: 'ecommerce.js',
        dataVar: 'ECOMMERCE_DATA',
        featured: false,
        order: 15
    },
    travel: {
        id: 'travel',
        name: 'Travel',
        icon: '✈️',
        slug: 'travel',
        signature: 'Travel Experience Engine™',
        shortDesc: 'Travel Agencies, Tour Operators, Travel Bloggers',
        category: 'Travel & Tourism',
        keywords: ['travel agency marketing', 'tour package sales', 'travel SEO', 'itinerary marketing', 'destination content'],
        dataFile: 'travel.js',
        dataVar: 'TRAVEL_DATA',
        featured: false,
        order: 16
    },
    interior: {
        id: 'interior',
        name: 'Interior Design',
        icon: '🛋️',
        slug: 'interior',
        signature: 'Interior Design Studio Engine™',
        shortDesc: 'Interior Designers, Architects, Decorators, Furnishers',
        category: 'Design & Architecture',
        keywords: ['interior designer marketing', 'architect lead generation', 'portfolio website', 'design consultation', 'project showcase'],
        dataFile: 'interior.js',
        dataVar: 'INTERIOR_DATA',
        featured: false,
        order: 17
    },
    photography: {
        id: 'photography',
        name: 'Photography',
        icon: '📸',
        slug: 'photography',
        signature: 'Visual Storyteller Growth System™',
        shortDesc: 'Photographers, Videographers, Studios, Creatives',
        category: 'Creative Services',
        keywords: ['photographer marketing', 'photography business growth', 'portfolio SEO', 'booking system', 'client gallery'],
        dataFile: 'photography.js',
        dataVar: 'PHOTOGRAPHY_DATA',
        featured: false,
        order: 18
    }
};

function getIndustryById(id) {
    return INDUSTRY_REGISTRY[id] || null;
}

function getIndustryBySlug(slug) {
    for (var key in INDUSTRY_REGISTRY) {
        if (INDUSTRY_REGISTRY.hasOwnProperty(key) && INDUSTRY_REGISTRY[key].slug === slug) {
            return INDUSTRY_REGISTRY[key];
        }
    }
    return null;
}

function getAllIndustries() {
    return Object.values(INDUSTRY_REGISTRY).sort(function(a, b) {
        return a.order - b.order;
    });
}

function getFeaturedIndustries() {
    return getAllIndustries().filter(function(ind) {
        return ind.featured;
    });
}

function getIndustriesByCategory(category) {
    return getAllIndustries().filter(function(ind) {
        return ind.category === category;
    });
}

function getAllCategories() {
    var categories = {};
    getAllIndustries().forEach(function(ind) {
        categories[ind.category] = true;
    });
    return Object.keys(categories).sort();
}

function getIndustryDataVar(id) {
    var ind = getIndustryById(id);
    return ind ? ind.dataVar : null;
}

function getIndustryCount() {
    return Object.keys(INDUSTRY_REGISTRY).length;
}

console.log('✅ 11 Avtar Digital Hub — Industry Registry loaded');
console.log('📋 Total Industries: ' + getIndustryCount());
console.log('⭐ Featured: ' + getFeaturedIndustries().length);
console.log('📂 Categories: ' + getAllCategories().join(', '));