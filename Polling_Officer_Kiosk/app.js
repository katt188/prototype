// Application Data with Demo Voters
const APPLICATION_DATA = {
    currentPollingCenter: "Colombo Central School",
    
    // Comprehensive voter database for demonstration
    voterDatabase: [
        // ELIGIBLE VOTERS (at correct polling center)
        {
            nic: "123456789012",
            fullName: "Saman Perera",
            age: 35,
            district: "Colombo",
            assignedPollingCenter: "Colombo Central School",
            registered: true
        },
        {
            nic: "234567890123",
            fullName: "Nimal Silva",
            age: 42,
            district: "Colombo",
            assignedPollingCenter: "Colombo Central School",
            registered: true
        },
        {
            nic: "345678901234",
            fullName: "Kamala Jayawardena",
            age: 28,
            district: "Colombo",
            assignedPollingCenter: "Colombo Central School",
            registered: true
        },
        {
            nic: "456789012345",
            fullName: "Ruwan Fernando",
            age: 51,
            district: "Colombo",
            assignedPollingCenter: "Colombo Central School",
            registered: true
        },

        // VOTERS AT WRONG POLLING CENTER
        {
            nic: "678901234567",
            fullName: "Anil Bandara",
            age: 29,
            district: "Kandy",
            assignedPollingCenter: "Kandy Royal College",
            registered: true
        },
        {
            nic: "789012345678",
            fullName: "Priya Gunawardena",
            age: 33,
            district: "Galle",
            assignedPollingCenter: "Galle Methodist College",
            registered: true
        }
    ]
};

// Application State
let appState = {
    currentVoter: null,
    kioskOpen: false,
    sessionStartTime: null,
    sessionTimer: null,
    eligibilityStatus: null,
    timeRemaining: 120, // 2 minutes in seconds
    currentKioskVoterNIC: null // Track the voter who is currently using the kiosk
};

// DOM Elements
const elements = {
    nicForm: document.getElementById('nicForm'),
    nicInput: document.getElementById('nicInput'),
    nicFeedback: document.getElementById('nicFeedback'),
    lookupBtn: document.getElementById('lookupBtn'),
    lookupBtnText: document.getElementById('lookupBtnText'),
    loadingSpinner: document.getElementById('loadingSpinner'),
    voterDetails: document.getElementById('voterDetails'),
    voterName: document.getElementById('voterName'),
    voterAge: document.getElementById('voterAge'),
    voterDistrict: document.getElementById('voterDistrict'),
    voterPollingCenter: document.getElementById('voterPollingCenter'),
    registrationStatus: document.getElementById('registrationStatus'),
    statusIndicator: document.getElementById('statusIndicator'),
    statusText: document.getElementById('statusText'),
    statusReason: document.getElementById('statusReason'),
    errorDisplay: document.getElementById('errorDisplay'),
    errorMessage: document.getElementById('errorMessage'),
    kioskStatus: document.getElementById('kioskStatus'),
    sessionInfo: document.getElementById('sessionInfo'),
    sessionTimer: document.getElementById('sessionTimer'),
    sessionVoter: document.getElementById('sessionVoter'),
    openKioskBtn: document.getElementById('openKioskBtn'),
    closeKioskBtn: document.getElementById('closeKioskBtn'),
    emergencyBtn: document.getElementById('emergencyBtn'),
    resetSessionBtn: document.getElementById('resetSessionBtn'),
    auditLog: document.getElementById('auditLog')
};

// Utility Functions
function validateNIC(nic) {
    const nicPattern = /^\d{12}$/;
    return nicPattern.test(nic);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function getCurrentTimestamp() {
    return new Date().toLocaleString('en-CA', { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: false 
    }).replace(',', '');
}

function addAuditEntry(action) {
    const timestamp = getCurrentTimestamp();
    const auditEntry = document.createElement('div');
    auditEntry.className = 'audit-entry';
    auditEntry.innerHTML = `
        <span class="timestamp">${timestamp}</span>
        <span class="action">${action}</span>
    `;
    elements.auditLog.insertBefore(auditEntry, elements.auditLog.firstChild);
    
    // Keep only last 20 entries
    const entries = elements.auditLog.querySelectorAll('.audit-entry');
    if (entries.length > 20) {
        entries[entries.length - 1].remove();
    }
}

// CRITICAL FIX: Voter Lookup Functions - ALWAYS ENABLED
function showLoading() {
    elements.lookupBtnText.textContent = 'Looking up...';
    elements.loadingSpinner.classList.add('active');
    elements.lookupBtn.disabled = true;
}

function hideLoading() {
    elements.lookupBtnText.textContent = 'Lookup Voter';
    elements.loadingSpinner.classList.remove('active');
    // CRITICAL FIX: Always enable the lookup button after lookup completes
    elements.lookupBtn.disabled = false;
}

function clearResults() {
    elements.voterDetails.classList.add('hidden');
    elements.errorDisplay.classList.add('hidden');
    elements.nicFeedback.textContent = '';
    elements.nicFeedback.className = 'input-feedback';
    
    // Reset voter state but keep eligibility checking available
    appState.currentVoter = null;
    appState.eligibilityStatus = null;
    
    // Update kiosk controls based on current state
    updateKioskControls();
}

function lookupVoter(nic) {
    return new Promise((resolve) => {
        // Simulate API call delay
        setTimeout(() => {
            const voter = APPLICATION_DATA.voterDatabase.find(v => v.nic === nic);
            resolve(voter || null);
        }, 1000);
    });
}

function checkEligibility(voter) {
    if (!voter) {
        return {
            eligible: false,
            reason: "Voter not found in electoral database"
        };
    }
    
    if (!voter.registered) {
        return {
            eligible: false,
            reason: "Voter is not registered on the electoral list"
        };
    }
    
    if (voter.assignedPollingCenter !== APPLICATION_DATA.currentPollingCenter) {
        return {
            eligible: false,
            reason: `Voter is assigned to ${voter.assignedPollingCenter}, not this polling center`
        };
    }
    
    return {
        eligible: true,
        reason: "Voter is eligible to vote at this polling center"
    };
}

function displayVoterDetails(voter) {
    if (!voter) return;
    
    elements.voterName.textContent = voter.fullName;
    elements.voterAge.textContent = voter.age;
    elements.voterDistrict.textContent = voter.district;
    elements.voterPollingCenter.textContent = voter.assignedPollingCenter;
    elements.registrationStatus.textContent = voter.registered ? 'Registered' : 'Not Registered';
    
    // Check eligibility - ALWAYS AVAILABLE
    const eligibility = checkEligibility(voter);
    appState.eligibilityStatus = eligibility;
    appState.currentVoter = voter;
    
    // Update status display
    const statusElement = elements.statusIndicator.querySelector('.status') || 
                         document.createElement('div');
    statusElement.className = 'status';
    
    if (eligibility.eligible) {
        statusElement.classList.add('eligible');
        statusElement.textContent = 'ELIGIBLE';
    } else {
        statusElement.classList.add('not-eligible');
        statusElement.textContent = 'NOT ELIGIBLE';
    }
    
    if (!elements.statusIndicator.querySelector('.status')) {
        elements.statusIndicator.appendChild(statusElement);
    }
    
    elements.statusReason.textContent = eligibility.reason;
    elements.voterDetails.classList.remove('hidden');
    
    // Update kiosk controls
    updateKioskControls();
    
    addAuditEntry(`Voter lookup: ${voter.fullName} (${voter.nic}) - ${eligibility.eligible ? 'ELIGIBLE' : 'NOT ELIGIBLE'}`);
}

function displayError(message) {
    elements.errorMessage.textContent = message;
    elements.errorDisplay.classList.remove('hidden');
    elements.voterDetails.classList.add('hidden');
}

// CRITICAL FIX: Kiosk Control Functions - Only "Open Kiosk" button disabled when kiosk is open
function updateKioskControls() {
    // CRITICAL FIX: Open Kiosk button is ONLY disabled when:
    // 1. Kiosk is already open, OR
    // 2. Current voter is not eligible
    // This allows checking eligibility of the next voter while current voter is voting
    elements.openKioskBtn.disabled = appState.kioskOpen || !appState.eligibilityStatus?.eligible;
    
    // Close Kiosk button is ONLY enabled when kiosk is open
    elements.closeKioskBtn.disabled = !appState.kioskOpen;
}

function openKiosk() {
    if (!appState.currentVoter || !appState.eligibilityStatus?.eligible || appState.kioskOpen) {
        return;
    }
    
    appState.kioskOpen = true;
    appState.sessionStartTime = Date.now();
    appState.timeRemaining = 120; // Reset to 2 minutes
    appState.currentKioskVoterNIC = appState.currentVoter.nic; // Track which voter is using the kiosk
    
    // Update UI
    elements.kioskStatus.textContent = 'OPEN';
    elements.kioskStatus.className = 'status open';
    elements.sessionInfo.classList.add('active');
    elements.sessionVoter.textContent = `Current Voter: ${appState.currentKioskVoterNIC}`;
    
    // Update kiosk controls
    updateKioskControls();
    
    // Start session timer
    startSessionTimer();
    
    addAuditEntry(`Kiosk opened for ${appState.currentVoter.fullName} (${appState.currentKioskVoterNIC})`);
}

function closeKiosk() {
    appState.kioskOpen = false;
    appState.sessionStartTime = null;
    appState.timeRemaining = 120;
    appState.currentKioskVoterNIC = null;
    
    // Update UI
    elements.kioskStatus.textContent = 'CLOSED';
    elements.kioskStatus.className = 'status closed';
    elements.sessionInfo.classList.remove('active');
    
    // Update kiosk controls
    updateKioskControls();
    
    // Stop session timer
    stopSessionTimer();
    
    addAuditEntry(`Kiosk closed - Session completed`);
}

function emergencyClose() {
    if (appState.kioskOpen) {
        closeKiosk();
        addAuditEntry(`EMERGENCY CLOSE - Kiosk closed by officer`);
        alert('Emergency close activated. Kiosk has been closed immediately.');
    } else {
        addAuditEntry(`EMERGENCY ALERT - Reported by officer`);
        alert('Emergency alert logged. Please report to supervisor immediately.');
    }
}

function resetSession() {
    if (appState.kioskOpen) {
        closeKiosk();
    }
    clearResults();
    elements.nicInput.value = '';
    elements.nicInput.focus();
    addAuditEntry(`Session reset by officer`);
}

function startSessionTimer() {
    if (appState.sessionTimer) {
        clearInterval(appState.sessionTimer);
    }
    
    updateTimerDisplay();
    
    appState.sessionTimer = setInterval(() => {
        if (!appState.kioskOpen) {
            stopSessionTimer();
            return;
        }
        
        appState.timeRemaining--;
        updateTimerDisplay();
        
        // Auto-close when timer reaches zero
        if (appState.timeRemaining <= 0) {
            closeKiosk();
            addAuditEntry(`Session auto-closed - 2 minute timeout`);
            alert('Voting session has expired. Kiosk automatically closed.');
        }
    }, 1000);
}

function updateTimerDisplay() {
    elements.sessionTimer.textContent = `Time Remaining: ${formatTime(appState.timeRemaining)}`;
    
    // Change color based on remaining time
    if (appState.timeRemaining <= 30) {
        elements.sessionTimer.style.color = 'var(--color-error)';
    } else if (appState.timeRemaining <= 60) {
        elements.sessionTimer.style.color = 'var(--color-warning)';
    } else {
        elements.sessionTimer.style.color = 'var(--color-success)';
    }
}

function stopSessionTimer() {
    if (appState.sessionTimer) {
        clearInterval(appState.sessionTimer);
        appState.sessionTimer = null;
    }
    elements.sessionTimer.textContent = '';
}

// CRITICAL FIX: Event Handlers - NIC Input ALWAYS ENABLED
function handleNICInput() {
    const nic = elements.nicInput.value.trim();
    
    // Real-time validation feedback
    if (nic.length === 0) {
        elements.nicFeedback.textContent = '';
        elements.nicFeedback.className = 'input-feedback';
    } else if (nic.length < 12) {
        elements.nicFeedback.textContent = `Enter ${12 - nic.length} more digits`;
        elements.nicFeedback.className = 'input-feedback';
    } else if (nic.length === 12) {
        if (validateNIC(nic)) {
            elements.nicFeedback.textContent = 'Valid NIC format ✓';
            elements.nicFeedback.className = 'input-feedback success';
        } else {
            elements.nicFeedback.textContent = 'Invalid NIC format - only digits allowed';
            elements.nicFeedback.className = 'input-feedback error';
        }
    } else {
        elements.nicFeedback.textContent = 'NIC should be exactly 12 digits';
        elements.nicFeedback.className = 'input-feedback error';
    }
}

// CRITICAL FIX: Voter Lookup ALWAYS ENABLED regardless of kiosk status
async function handleVoterLookup(event) {
    event.preventDefault();
    
    const nic = elements.nicInput.value.trim();
    
    // Validate NIC
    if (!validateNIC(nic)) {
        elements.nicFeedback.textContent = 'Please enter a valid 12-digit NIC number';
        elements.nicFeedback.className = 'input-feedback error';
        return;
    }
    
    // Show loading indicator but don't clear voter details yet
    showLoading();
    elements.errorDisplay.classList.add('hidden');
    
    try {
        const voter = await lookupVoter(nic);
        
        if (voter) {
            // Display the new voter details - ALWAYS works regardless of kiosk status
            displayVoterDetails(voter);
            
            // Add audit entry noting that this lookup occurred during active session
            if (appState.kioskOpen && appState.currentKioskVoterNIC) {
                addAuditEntry(`Next voter checked while kiosk is open: ${voter.fullName} (${voter.nic})`);
            }
        } else {
            displayError('Voter not found in the electoral database. Please verify the NIC number.');
            addAuditEntry(`Voter lookup failed: NIC ${nic} not found`);
        }
    } catch (error) {
        displayError('Error looking up voter. Please try again.');
        addAuditEntry(`Voter lookup error: ${error.message}`);
    } finally {
        hideLoading(); // Always re-enable the lookup button
    }
}

// Initialize Application
function initializeApp() {
    // CRITICAL FIX: Add event listeners - NIC input and lookup ALWAYS enabled
    elements.nicForm.addEventListener('submit', handleVoterLookup);
    elements.nicInput.addEventListener('input', handleNICInput);
    
    // Kiosk control event listeners
    elements.openKioskBtn.addEventListener('click', openKiosk);
    elements.closeKioskBtn.addEventListener('click', closeKiosk);
    elements.emergencyBtn.addEventListener('click', emergencyClose);
    elements.resetSessionBtn.addEventListener('click', resetSession);
    
    // CRITICAL FIX: Ensure NIC input and lookup are ALWAYS enabled
    elements.nicInput.disabled = false;
    elements.lookupBtn.disabled = false;
    
    // Set initial focus
    elements.nicInput.focus();
    
    // Initialize kiosk status
    elements.kioskStatus.className = 'status closed';
    
    // Initialize kiosk controls
    updateKioskControls();
    
    // Initialize with current polling center info
    const pollingCenterDisplay = document.querySelector('.polling-center-info');
    if (pollingCenterDisplay) {
        pollingCenterDisplay.innerHTML = `<strong>Current Polling Center:</strong> ${APPLICATION_DATA.currentPollingCenter}`;
    }
    
    addAuditEntry('Portal initialized - Concurrent operations enabled');
    
    // Log the fix implementation
    console.log('🔧 CRITICAL FIX IMPLEMENTED:');
    console.log('✅ NIC input: ALWAYS enabled');
    console.log('✅ Voter lookup: ALWAYS enabled');
    console.log('✅ Eligibility checking: ALWAYS enabled');
    console.log('✅ Voter details display: ALWAYS enabled');
    console.log('⚠️  Open Kiosk button: ONLY disabled when kiosk is open');
    console.log('⚠️  Close Kiosk button: ONLY enabled when kiosk is open');
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);