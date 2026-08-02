/**
 * ============================================================
 * 11 AVTAR DIGITAL HUB
 * PROPOSAL GENERATION & WHATSAPP INTEGRATION
 * Industry Growth Intelligence System™
 * ============================================================
 */

// ============================================================
// PROPOSAL GENERATION
// ============================================================

/**
 * Generate a complete client proposal from selected assets
 * Called from the "Generate Proposal" button on industry pages
 */
function generateProposal() {
    // Get current industry data
    var data = getIndustryData();
    if (!data) {
        showError('Please select an industry first. Navigate to an industry page.');
        return;
    }

    var selectedCount = countSelectedAssets();
    if (selectedCount === 0) {
        showError('Please select at least one digital asset to generate the proposal. Click on the checklist items above.');
        return;
    }

    // Build grouped selections
    var grouped = {};
    for (var key in APP_STATE.selectedAssets) {
        if (APP_STATE.selectedAssets.hasOwnProperty(key)) {
            var parts = key.split('::');
            if (!grouped[parts[0]]) {
                grouped[parts[0]] = [];
            }
            grouped[parts[0]].push(parts[1]);
        }
    }

    // Calculate total possible assets
    var totalAssets = 0;
    for (var cat in data.digitalAssets) {
        if (data.digitalAssets.hasOwnProperty(cat) && Array.isArray(data.digitalAssets[cat])) {
            totalAssets += data.digitalAssets[cat].length;
        }
    }
    var maturityPercent = Math.round((selectedCount / Math.max(totalAssets, 1)) * 100);

    // Build proposal text
    var proposalText = '';
    proposalText += '═══════════════════════════════════════\n';
    proposalText += '  11 AVTAR DIGITAL HUB\n';
    proposalText += '  Industry Growth Proposal\n';
    proposalText += '═══════════════════════════════════════\n\n';
    
    proposalText += '📋 INDUSTRY\n';
    proposalText += '  ' + data.icon + ' ' + data.name + '\n';
    proposalText += '  Framework: ' + data.signature + '\n';
    proposalText += '  Date: ' + new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }) + '\n\n';
    
    proposalText += '📊 DIGITAL MATURITY SCORE\n';
    proposalText += '  ' + selectedCount + ' of ' + totalAssets + ' assets selected (' + maturityPercent + '%)\n\n';
    
    proposalText += '✅ SELECTED DIGITAL ASSETS\n';
    proposalText += '────────────────────────────────────────\n';
    for (var category in grouped) {
        if (grouped.hasOwnProperty(category)) {
            proposalText += '\n📌 ' + category.toUpperCase() + '\n';
            for (var i = 0; i < grouped[category].length; i++) {
                proposalText += '   ✓ ' + grouped[category][i] + '\n';
            }
        }
    }
    
    // Add deliverables if available
    if (data.deliverables) {
        proposalText += '\n\n📦 QUANTIFIED DELIVERABLES\n';
        proposalText += '────────────────────────────────────────\n';
        if (Array.isArray(data.deliverables)) {
            for (var d = 0; d < Math.min(data.deliverables.length, 5); d++) {
                proposalText += '  • ' + data.deliverables[d].item + ': ' + data.deliverables[d].qty + '\n';
            }
        } else {
            var count = 0;
            for (var dk in data.deliverables) {
                if (data.deliverables.hasOwnProperty(dk) && count < 5) {
                    proposalText += '  • ' + (data.deliverables[dk].item || dk) + ': ' + (data.deliverables[dk].qty || 'Included') + '\n';
                    count++;
                }
            }
        }
    }
    
    // Add growth opportunities
    if (data.growthOpportunities && data.growthOpportunities.length > 0) {
        proposalText += '\n\n🚀 GROWTH OPPORTUNITIES\n';
        proposalText += '────────────────────────────────────────\n';
        for (var g = 0; g < Math.min(data.growthOpportunities.length, 4); g++) {
            var opp = data.growthOpportunities[g];
            proposalText += '  • ' + (opp.opportunity || opp) + '\n';
        }
    }
    
    // Add timeline
    proposalText += '\n\n📅 TYPICAL TIMELINE\n';
    proposalText += '────────────────────────────────────────\n';
    proposalText += '  Week 1-2: Discovery & Strategy\n';
    proposalText += '  Week 3-4: Content Production (Photography, Video)\n';
    proposalText += '  Week 5-6: Website Development\n';
    proposalText += '  Week 7-8: Platform Setup & Automation\n';
    proposalText += '  Month 3+: Launch, Optimization & Scaling\n\n';
    
    // Add why 11 Avtar Digital Hub
    proposalText += '💡 WHY 11 AVTAR DIGITAL HUB\n';
    proposalText += '────────────────────────────────────────\n';
    proposalText += '  "We don\'t offer services first. We diagnose\n';
    proposalText += '  your industry, map the customer journey, and\n';
    proposalText += '  then build the required digital growth ecosystem."\n\n';
    proposalText += '  ✓ Industry Research & Diagnosis\n';
    proposalText += '  ✓ Customer Journey Mapping\n';
    proposalText += '  ✓ Digital Architecture Design\n';
    proposalText += '  ✓ Conversion Strategy\n';
    proposalText += '  ✓ Automation Thinking\n';
    proposalText += '  ✓ Long Term Growth Planning\n\n';
    
    proposalText += '═══════════════════════════════════════\n';
    proposalText += '  11 Avtar Digital Hub\n';
    proposalText += '  Industry-Specific Digital Growth\n';
    proposalText += '  Intelligence Partner\n';
    proposalText += '  📞 +91 8959592006\n';
    proposalText += '  📧 contact@11avtar.com\n';
    proposalText += '═══════════════════════════════════════\n';

    // Show proposal in alert
    alert(proposalText);

    // Also log to console for easy copying
    console.log('📋 PROPOSAL GENERATED:\n\n' + proposalText);

    // Save proposal to localStorage
    saveProposal(proposalText, data);

    // Track event
    trackEvent('proposal', 'generate', data.id + '-' + selectedCount + '-assets');

    return proposalText;
}

/**
 * Save proposal to localStorage for history
 */
function saveProposal(proposalText, data) {
    var proposals = loadFromStorage('proposals', []);
    proposals.push({
        date: new Date().toISOString(),
        industry: data.name,
        framework: data.signature,
        assetCount: countSelectedAssets(),
        text: proposalText
    });
    // Keep only last 10 proposals
    if (proposals.length > 10) {
        proposals = proposals.slice(-10);
    }
    saveToStorage('proposals', proposals);
}

/**
 * Get proposal history
 */
function getProposalHistory() {
    return loadFromStorage('proposals', []);
}

// ============================================================
// WHATSAPP INTEGRATION
// ============================================================

/**
 * Send proposal via WhatsApp
 * Called from the "Send via WhatsApp" button
 */
function sendProposalViaWhatsApp() {
    var data = getIndustryData();
    if (!data) {
        showError('Please select an industry first.');
        return;
    }

    var selectedCount = countSelectedAssets();
    if (selectedCount === 0) {
        showError('Please select at least one digital asset before sending to WhatsApp.');
        return;
    }

    // Build WhatsApp message
    var msg = '';
    
    // Header
    msg += '*11 AVTAR DIGITAL HUB*%0A';
    msg += 'Industry Growth Proposal%0A%0A';
    
    // Industry info
    msg += '📋 *Industry:* ' + data.icon + ' ' + data.name + '%0A';
    msg += '🔹 *Framework:* _' + data.signature + '_%0A%0A';
    
    // Selected assets summary
    var grouped = {};
    for (var key in APP_STATE.selectedAssets) {
        if (APP_STATE.selectedAssets.hasOwnProperty(key)) {
            var parts = key.split('::');
            if (!grouped[parts[0]]) grouped[parts[0]] = [];
            grouped[parts[0]].push(parts[1]);
        }
    }
    
    msg += '✅ *Selected Digital Assets:*%0A';
    for (var category in grouped) {
        if (grouped.hasOwnProperty(category)) {
            msg += '• _' + category + ':_ ';
            msg += grouped[category].slice(0, 3).join(', ');
            if (grouped[category].length > 3) {
                msg += ' +' + (grouped[category].length - 3) + ' more';
            }
            msg += '%0A';
        }
    }
    
    // Total assets
    var totalAssets = 0;
    for (var cat in data.digitalAssets) {
        if (data.digitalAssets.hasOwnProperty(cat) && Array.isArray(data.digitalAssets[cat])) {
            totalAssets += data.digitalAssets[cat].length;
        }
    }
    var maturityPercent = Math.round((selectedCount / Math.max(totalAssets, 1)) * 100);
    msg += '%0A📊 *Digital Maturity:* ' + selectedCount + '/' + totalAssets + ' (' + maturityPercent + '%)%0A';
    
    // Request
    msg += '%0A🙏 *Please share:*%0A';
    msg += '• Complete proposal details%0A';
    msg += '• Pricing for selected assets%0A';
    msg += '• Timeline for implementation%0A';
    msg += '• Next steps to get started%0A%0A';
    
    msg += 'Thank you! 🙏%0A';
    msg += '— Sent via 11 Avtar Digital Hub System';

    // Open WhatsApp
    var waNumber = '918959592006';
    var waURL = 'https://wa.me/' + waNumber + '?text=' + msg;
    
    // Try to open in new tab
    var opened = window.open(waURL, '_blank');
    
    // If popup blocked, show manual link
    if (!opened) {
        showError('WhatsApp could not open automatically. Please click the link or manually message +91 8959592006.');
    }

    // Track
    trackEvent('whatsapp', 'send', data.id + '-' + selectedCount + '-assets');

    console.log('📱 WhatsApp message prepared for ' + data.name);
}

/**
 * Quick WhatsApp connect (no proposal, just inquiry)
 */
function quickWhatsAppConnect() {
    var msg = 'Hi *11 Avtar Digital Hub*,%0A%0A';
    msg += 'I am interested in your Industry Growth Intelligence System.%0A';
    msg += 'Please share more details about how you can help my business grow.%0A%0A';
    msg += 'Thank you! 🙏';
    
    var waURL = 'https://wa.me/918959592006?text=' + msg;
    window.open(waURL, '_blank');
    
    trackEvent('whatsapp', 'quick-connect');
}

// ============================================================
// PROPOSAL EXPORT (Print / PDF)
// ============================================================

/**
 * Print the current proposal
 */
function printProposal() {
    var data = getIndustryData();
    if (!data) return;
    
    var selectedCount = countSelectedAssets();
    if (selectedCount === 0) {
        showError('Please select at least one asset before printing.');
        return;
    }

    // Build print-friendly HTML
    var printHTML = '';
    printHTML += '<!DOCTYPE html><html><head>';
    printHTML += '<meta charset="UTF-8">';
    printHTML += '<title>11 Avtar Digital Hub — Proposal — ' + data.name + '</title>';
    printHTML += '<style>';
    printHTML += 'body { font-family: "Inter", sans-serif; line-height: 1.6; color: #1A1A1A; max-width: 800px; margin: 40px auto; padding: 0 20px; }';
    printHTML += 'h1 { font-family: "Cormorant Garamond", serif; font-size: 2rem; color: #C5A46D; }';
    printHTML += 'h2 { font-family: "Cormorant Garamond", serif; font-size: 1.4rem; color: #1A1A1A; border-bottom: 2px solid #C5A46D; padding-bottom: 8px; }';
    printHTML += 'h3 { font-size: 1rem; color: #C5A46D; }';
    printHTML += 'ul { padding-left: 20px; }';
    printHTML += 'li { margin-bottom: 4px; }';
    printHTML += '.header { text-align: center; margin-bottom: 30px; }';
    printHTML += '.footer { text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #C5A46D; font-size: 0.8rem; color: #8A8A8A; }';
    printHTML += '@media print { body { margin: 20px; } }';
    printHTML += '</style></head><body>';
    
    printHTML += '<div class="header">';
    printHTML += '<h1>11 AVTAR DIGITAL HUB</h1>';
    printHTML += '<p>Industry Growth Proposal</p>';
    printHTML += '<p><strong>' + data.icon + ' ' + data.name + '</strong> — ' + data.signature + '</p>';
    printHTML += '<p>Date: ' + new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }) + '</p>';
    printHTML += '</div>';
    
    // Selected assets
    printHTML += '<h2>Selected Digital Assets</h2>';
    var grouped2 = {};
    for (var key2 in APP_STATE.selectedAssets) {
        if (APP_STATE.selectedAssets.hasOwnProperty(key2)) {
            var parts2 = key2.split('::');
            if (!grouped2[parts2[0]]) grouped2[parts2[0]] = [];
            grouped2[parts2[0]].push(parts2[1]);
        }
    }
    for (var cat2 in grouped2) {
        if (grouped2.hasOwnProperty(cat2)) {
            printHTML += '<h3>' + cat2 + '</h3><ul>';
            for (var i2 = 0; i2 < grouped2[cat2].length; i2++) {
                printHTML += '<li>' + grouped2[cat2][i2] + '</li>';
            }
            printHTML += '</ul>';
        }
    }
    
    printHTML += '<div class="footer">';
    printHTML += '<p>11 Avtar Digital Hub — Industry-Specific Digital Growth Intelligence Partner</p>';
    printHTML += '<p>📞 +91 8959592006</p>';
    printHTML += '<p>"We don\'t sell marketing packages. We design industry growth systems."</p>';
    printHTML += '</div>';
    
    printHTML += '</body></html>';
    
    // Open print window
    var printWindow = window.open('', '_blank');
    if (printWindow) {
        printWindow.document.write(printHTML);
        printWindow.document.close();
        setTimeout(function() {
            printWindow.print();
        }, 500);
    } else {
        showError('Print window could not open. Please check your popup blocker settings.');
    }
    
    trackEvent('proposal', 'print', data.id);
}

// ============================================================
// PROPOSAL SHARING
// ============================================================

/**
 * Copy proposal to clipboard
 */
function copyProposalToClipboard() {
    var proposalText = generateProposal();
    if (!proposalText) return;
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(proposalText).then(function() {
            showSuccess('✅ Proposal copied to clipboard! Paste it anywhere.');
        }).catch(function() {
            showError('Could not copy. Please try again or copy manually from the alert.');
        });
    } else {
        // Fallback for older browsers
        var textarea = document.createElement('textarea');
        textarea.value = proposalText;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            showSuccess('✅ Proposal copied to clipboard!');
        } catch (e) {
            showError('Could not copy. Please try again.');
        }
        document.body.removeChild(textarea);
    }
    
    trackEvent('proposal', 'copy', APP_STATE.currentIndustry);
}

/**
 * Email proposal (opens default mail client)
 */
function emailProposal() {
    var data = getIndustryData();
    if (!data) return;
    
    var selectedCount = countSelectedAssets();
    if (selectedCount === 0) {
        showError('Please select at least one asset.');
        return;
    }
    
    var subject = encodeURIComponent('Proposal: ' + data.name + ' Growth System — 11 Avtar Digital Hub');
    var body = encodeURIComponent(
        'Hi 11 Avtar Digital Hub,\n\n' +
        'Please find my selected assets for ' + data.name + ' (' + data.signature + ').\n\n' +
        'I would like to receive the complete proposal with pricing.\n\n' +
        'Thank you!'
    );
    
    window.location.href = 'mailto:contact@11avtar.com?subject=' + subject + '&body=' + body;
    
    trackEvent('proposal', 'email', data.id);
}

// ============================================================
// SUCCESS / ERROR TOASTS
// ============================================================

/**
 * Show success message
 */
function showSuccess(message) {
    createToast(message, 'success');
}

/**
 * Show error message
 */
function showError(message) {
    createToast(message, 'error');
}

/**
 * Create toast notification
 */
function createToast(message, type) {
    // Remove existing toasts
    var existingToast = document.querySelector('.toast-notification');
    if (existingToast) {
        existingToast.remove();
    }
    
    var toast = document.createElement('div');
    toast.className = 'toast-notification toast-' + (type || 'info');
    toast.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);z-index:9999;padding:12px 24px;border-radius:50px;font-size:0.85rem;font-weight:500;box-shadow:0 8px 32px rgba(0,0,0,0.2);animation:slideUp 0.3s ease;max-width:90%;text-align:center;';
    
    if (type === 'success') {
        toast.style.background = '#1A1A1A';
        toast.style.color = '#C5A46D';
        toast.style.border = '1px solid #C5A46D';
    } else if (type === 'error') {
        toast.style.background = '#1A1A1A';
        toast.style.color = '#FF6B6B';
        toast.style.border = '1px solid #FF6B6B';
    } else {
        toast.style.background = '#1A1A1A';
        toast.style.color = '#FAF8F5';
        toast.style.border = '1px solid rgba(255,255,255,0.2)';
    }
    
    toast.textContent = message;
    document.body.appendChild(toast);
    
    // Auto remove after 4 seconds
    setTimeout(function() {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s ease';
        setTimeout(function() {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, 4000);
}

// ============================================================
// INITIALIZATION
// ============================================================

console.log('✅ 11 Avtar Digital Hub — Proposal module loaded');
console.log('📋 Functions: generateProposal, sendProposalViaWhatsApp, printProposal, copyProposalToClipboard, emailProposal');
console.log('📞 WhatsApp: +91 8959592006');