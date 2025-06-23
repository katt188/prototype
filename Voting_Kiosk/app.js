// Application data
const appData = {
  "activeElectionType": "presidential",
  "presidentialCandidates": [
    {"id": 1, "name": "Candidate A", "party": "Progressive Party", "photo": "candidate-a.jpg"},
    {"id": 2, "name": "Candidate B", "party": "Democratic Alliance", "photo": "candidate-b.jpg"},
    {"id": 3, "name": "Candidate C", "party": "People's Movement", "photo": "candidate-c.jpg"},
    {"id": 4, "name": "Candidate D", "party": "National Unity", "photo": "candidate-d.jpg"},
    {"id": 5, "name": "Candidate E", "party": "Reform Coalition", "photo": "candidate-e.jpg"}
  ],
  "parliamentaryData": {
    "parties": [
      {
        "id": 1,
        "name": "Progressive Party",
        "color": "#3B82F6",
        "logo": "progressive-logo.png",
        "candidates": [
          {"id": 101, "name": "John Smith", "constituency": "Colombo District"},
          {"id": 102, "name": "Mary Johnson", "constituency": "Colombo District"},
          {"id": 103, "name": "David Wilson", "constituency": "Colombo District"},
          {"id": 104, "name": "Sarah Brown", "constituency": "Colombo District"},
          {"id": 105, "name": "Michael Davis", "constituency": "Colombo District"}
        ]
      },
      {
        "id": 2,
        "name": "Democratic Alliance",
        "color": "#EF4444",
        "logo": "democratic-logo.png",
        "candidates": [
          {"id": 201, "name": "Robert Lee", "constituency": "Kandy District"},
          {"id": 202, "name": "Jennifer Taylor", "constituency": "Kandy District"},
          {"id": 203, "name": "William Garcia", "constituency": "Kandy District"},
          {"id": 204, "name": "Lisa Martinez", "constituency": "Kandy District"},
          {"id": 205, "name": "James Rodriguez", "constituency": "Kandy District"}
        ]
      },
      {
        "id": 3,
        "name": "People's Movement",
        "color": "#10B981",
        "logo": "peoples-logo.png",
        "candidates": [
          {"id": 301, "name": "Christopher Anderson", "constituency": "Galle District"},
          {"id": 302, "name": "Amanda Thomas", "constituency": "Galle District"},
          {"id": 303, "name": "Daniel Jackson", "constituency": "Galle District"},
          {"id": 304, "name": "Michelle White", "constituency": "Galle District"},
          {"id": 305, "name": "Kevin Harris", "constituency": "Galle District"}
        ]
      }
    ]
  },
  "translations": {
    "en": {
      "selectLanguage": "Select Your Language",
      "voterAuthentication": "Voter Authentication",
      "enterVoterId": "Enter Your Voter ID",
      "votingInstructions": "Voting Instructions",
      "presidentialInstructions": "Select 3 candidates in order of your preference (1st, 2nd, 3rd choice)",
      "parliamentaryInstructions": "First select your preferred party, then select 3 candidates from that party in order of preference",
      "selectParty": "Select Your Party",
      "selectCandidates": "Select 3 Candidates (In Order)",
      "reviewVote": "Review Your Vote",
      "confirmVote": "Confirm Vote",
      "voteSubmitted": "Vote Submitted Successfully",
      "firstChoice": "1st Choice",
      "secondChoice": "2nd Choice",
      "thirdChoice": "3rd Choice",
      "next": "Next",
      "back": "Back",
      "submit": "Submit Vote",
      "thankYou": "Thank you for voting!",
      "selected": "Selected",
      "presidentialElection": "Presidential Election",
      "parliamentaryElection": "Parliamentary Election"
    },
    "si": {
      "selectLanguage": "ඔබේ භාෂාව තෝරන්න",
      "voterAuthentication": "ඡන්දදායක සත්‍යාපනය",
      "enterVoterId": "ඔබේ ඡන්දදායක අංකය ඇතුළත් කරන්න",
      "votingInstructions": "ඡන්දය ප්‍රකාශ කිරීමේ උපදෙස්",
      "presidentialInstructions": "ඔබේ මනාපය අනුව අපේක්ෂකයින් 3 දෙනෙකු තෝරන්න",
      "parliamentaryInstructions": "පළමුව ඔබේ පක්ෂය තෝරන්න, ඉන්පසු එම පක්ෂයෙන් අපේක්ෂකයින් 3 දෙනෙකු තෝරන්න",
      "selectParty": "ඔබේ පක්ෂය තෝරන්න",
      "selectCandidates": "අපේක්ෂකයින් 3 දෙනෙකු තෝරන්න",
      "reviewVote": "ඔබේ ඡන්දය සමාලෝචනය කරන්න",
      "confirmVote": "ඡන්දය තහවුරු කරන්න",
      "voteSubmitted": "ඡන්දය සාර්ථකව ඉදිරිපත් කරන ලදී",
      "firstChoice": "පළමු තේරීම",
      "secondChoice": "දෙවන තේරීම",
      "thirdChoice": "තෙවන තේරීම",
      "next": "ඊළඟ",
      "back": "ආපසු",
      "submit": "ඡන්දය ඉදිරිපත් කරන්න",
      "thankYou": "ඡන්දය ප්‍රකාශ කිරීම ගැන ස්තූතියි!",
      "selected": "තෝරන ලද",
      "presidentialElection": "ජනාධිපතිවරණය",
      "parliamentaryElection": "පාර්ලිමේන්තු මැතිවරණය"
    },
    "ta": {
      "selectLanguage": "உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்",
      "voterAuthentication": "வாக்காளர் அங்கீகாரம்",
      "enterVoterId": "உங்கள் வாக்காளர் அடையாள எண்ணை உள்ளிடவும்",
      "votingInstructions": "வாக்களிப்பு வழிமுறைகள்",
      "presidentialInstructions": "உங்கள் விருப்பத்தின் அடிப்படையில் 3 வேட்பாளர்களைத் தேர்ந்தெடுக்கவும்",
      "parliamentaryInstructions": "முதலில் உங்கள் கட்சியைத் தேர்ந்தெடுத்து, பின்னர் அந்த கட்சியிலிருந்து 3 வேட்பாளர்களைத் தேர்ந்தெடுக்கவும்",
      "selectParty": "உங்கள் கட்சியைத் தேர்ந்தெடுக்கவும்",
      "selectCandidates": "3 வேட்பாளர்களைத் தேர்ந்தெடுக்கவும்",
      "reviewVote": "உங்கள் வாக்கை சரிபார்க்கவும்",
      "confirmVote": "வாக்கை உறுதிப்படுத்தவும்",
      "voteSubmitted": "வாக்கு வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது",
      "firstChoice": "முதல் தேர்வு",
      "secondChoice": "இரண்டாம் தேர்வு",
      "thirdChoice": "மூன்றாம் தேர்வு",
      "next": "அடுத்து",
      "back": "பின்",
      "submit": "வாக்கு சமர்ப்பிக்கவும்",
      "thankYou": "வாக்களித்ததற்கு நன்றி!",
      "selected": "தேர்ந்தெடுக்கப்பட்டது",
      "presidentialElection": "ஜனாதிபதி தேர்தல்",
      "parliamentaryElection": "பாராளுமன்ற தேர்தல்"
    }
  }
};

// Application state
let currentLanguage = 'en';
let currentScreen = 'language-screen';
let voterId = '';
let selectedParty = null;
let selectedCandidates = []; // Array of {candidate, order} objects
let voteSubmitted = false;

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    updateElectionTypeDisplay();
});

function initializeEventListeners() {
    // Language selection
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            currentLanguage = e.currentTarget.dataset.lang;
            updateTranslations();
            navigateToScreen('auth-screen');
        });
    });

    // Authentication
    const authenticateBtn = document.getElementById('authenticate-btn');
    const voterIdInput = document.querySelector('.voter-id-input');
    
    authenticateBtn.addEventListener('click', handleAuthentication);
    voterIdInput.addEventListener('input', validateVoterId);
    voterIdInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleAuthentication();
        }
    });

    // Instructions
    document.getElementById('start-voting-btn').addEventListener('click', () => {
        if (appData.activeElectionType === 'parliamentary') {
            renderPartySelection();
            navigateToScreen('party-screen');
        } else {
            renderCandidateSelection();
            navigateToScreen('candidate-screen');
        }
    });

    // Navigation buttons
    document.getElementById('party-back-btn').addEventListener('click', () => navigateToScreen('instructions-screen'));
    document.getElementById('candidate-back-btn').addEventListener('click', handleCandidateBackButton);
    document.getElementById('proceed-review-btn').addEventListener('click', () => {
        renderReviewScreen();
        navigateToScreen('review-screen');
    });
    document.getElementById('review-back-btn').addEventListener('click', handleReviewBackButton);
    document.getElementById('confirm-vote-btn').addEventListener('click', submitVote);
}

function updateTranslations() {
    const translations = appData.translations[currentLanguage];
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[key]) {
            element.textContent = translations[key];
        }
    });
}

function updateElectionTypeDisplay() {
    const isPresidential = appData.activeElectionType === 'presidential';
    const electionTypeBadge = document.getElementById('election-type-badge');
    const instructionMessage = document.getElementById('instruction-message');
    
    const translations = appData.translations[currentLanguage];
    const electionTypeText = isPresidential ? 
        (translations.presidentialElection || 'Presidential Election') : 
        (translations.parliamentaryElection || 'Parliamentary Election');
    
    electionTypeBadge.textContent = electionTypeText;
    
    const instructionKey = isPresidential ? 'presidentialInstructions' : 'parliamentaryInstructions';
    instructionMessage.textContent = translations[instructionKey] || '';
    instructionMessage.setAttribute('data-translate', instructionKey);
}

function navigateToScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show target screen
    document.getElementById(screenId).classList.add('active');
    currentScreen = screenId;
}

function validateVoterId() {
    const input = document.querySelector('.voter-id-input');
    const error = document.getElementById('voter-id-error');
    const btn = document.getElementById('authenticate-btn');
    
    const value = input.value.trim();
    const isValid = value.length >= 6 && /^[0-9A-Za-z]+$/.test(value);
    
    if (isValid) {
        error.classList.add('hidden');
        btn.classList.remove('disabled');
        btn.disabled = false;
    } else {
        if (value.length > 0) {
            error.classList.remove('hidden');
        }
        btn.classList.add('disabled');
        btn.disabled = true;
    }
}

function handleAuthentication() {
    const input = document.querySelector('.voter-id-input');
    const btn = document.getElementById('authenticate-btn');
    const value = input.value.trim();
    
    // Don't proceed if button is disabled
    if (btn.disabled || btn.classList.contains('disabled')) {
        return;
    }
    
    if (value.length >= 6 && /^[0-9A-Za-z]+$/.test(value)) {
        voterId = value;
        updateElectionTypeDisplay();
        navigateToScreen('instructions-screen');
    }
}

function renderPartySelection() {
    const grid = document.getElementById('party-grid');
    grid.innerHTML = '';
    
    appData.parliamentaryData.parties.forEach(party => {
        const partyCard = document.createElement('div');
        partyCard.className = 'party-card';
        partyCard.dataset.partyId = party.id;
        
        partyCard.innerHTML = `
            <div class="party-logo" style="background-color: ${party.color}"></div>
            <div class="party-name">${party.name}</div>
        `;
        
        partyCard.addEventListener('click', () => {
            selectedParty = party;
            renderCandidateSelection();
            navigateToScreen('candidate-screen');
        });
        
        grid.appendChild(partyCard);
    });
}

function renderCandidateSelection() {
    const grid = document.getElementById('candidate-grid');
    const title = document.getElementById('candidate-screen-title');
    const partyInfo = document.getElementById('selected-party-info');
    const partyName = document.getElementById('selected-party-name');
    
    let candidates;
    
    if (appData.activeElectionType === 'presidential') {
        candidates = appData.presidentialCandidates;
        partyInfo.classList.add('hidden');
        title.textContent = appData.translations[currentLanguage].selectCandidates || 'Select 3 Candidates (In Order)';
    } else {
        candidates = selectedParty.candidates;
        partyInfo.classList.remove('hidden');
        partyName.textContent = selectedParty.name;
        partyName.style.backgroundColor = selectedParty.color + '20';
        partyName.style.borderColor = selectedParty.color + '40';
    }
    
    grid.innerHTML = '';
    
    candidates.forEach(candidate => {
        const candidateCard = document.createElement('div');
        candidateCard.className = 'candidate-card';
        candidateCard.dataset.candidateId = candidate.id;
        
        const initials = candidate.name.split(' ').map(n => n[0]).join('');
        const party = appData.activeElectionType === 'presidential' ? candidate.party : candidate.constituency;
        
        candidateCard.innerHTML = `
            <div class="candidate-info">
                <div class="candidate-avatar">${initials}</div>
                <div class="candidate-details">
                    <h3>${candidate.name}</h3>
                    <p>${party}</p>
                </div>
            </div>
            <div class="selection-indicator hidden"></div>
        `;
        
        candidateCard.addEventListener('click', () => selectCandidate(candidate, candidateCard));
        grid.appendChild(candidateCard);
    });
    
    updateCandidateSelection();
}

function selectCandidate(candidate, cardElement) {
    // Check if candidate is already selected
    const existingIndex = selectedCandidates.findIndex(sc => sc.candidate.id === candidate.id);
    
    if (existingIndex !== -1) {
        // Remove if already selected
        selectedCandidates.splice(existingIndex, 1);
        // Update order numbers for remaining candidates
        selectedCandidates.forEach((sc, index) => {
            sc.order = index + 1;
        });
    } else if (selectedCandidates.length < 3) {
        // Add new selection
        selectedCandidates.push({
            candidate: candidate,
            order: selectedCandidates.length + 1
        });
    }
    
    updateCandidateSelection();
}

function updateCandidateSelection() {
    const cards = document.querySelectorAll('.candidate-card');
    const selectionCount = document.getElementById('selection-count');
    const selectionsList = document.getElementById('selections-list');
    const proceedBtn = document.getElementById('proceed-review-btn');
    
    // Update selection count
    selectionCount.textContent = selectedCandidates.length;
    
    // Update card states
    cards.forEach(card => {
        const candidateId = parseInt(card.dataset.candidateId);
        const selection = selectedCandidates.find(sc => sc.candidate.id === candidateId);
        const indicator = card.querySelector('.selection-indicator');
        
        if (selection) {
            card.classList.add('selected');
            indicator.classList.remove('hidden');
            indicator.textContent = selection.order;
        } else {
            card.classList.remove('selected');
            indicator.classList.add('hidden');
            
            // Disable card if 3 candidates already selected
            if (selectedCandidates.length >= 3) {
                card.classList.add('disabled');
            } else {
                card.classList.remove('disabled');
            }
        }
    });
    
    // Update selections list
    selectionsList.innerHTML = '';
    selectedCandidates.sort((a, b) => a.order - b.order).forEach(selection => {
        const item = document.createElement('div');
        item.className = 'selection-item';
        
        const orderLabels = [
            appData.translations[currentLanguage].firstChoice || '1st Choice',
            appData.translations[currentLanguage].secondChoice || '2nd Choice',
            appData.translations[currentLanguage].thirdChoice || '3rd Choice'
        ];
        
        const party = appData.activeElectionType === 'presidential' ? 
            selection.candidate.party : 
            (selectedParty ? selectedParty.name : selection.candidate.constituency);
        
        item.innerHTML = `
            <div class="selection-order">${selection.order}</div>
            <div class="selection-info">
                <div class="selection-name">${selection.candidate.name}</div>
                <div class="selection-party">${party}</div>
            </div>
        `;
        
        selectionsList.appendChild(item);
    });
    
    // Update proceed button
    if (selectedCandidates.length === 3) {
        proceedBtn.classList.remove('disabled');
        proceedBtn.disabled = false;
    } else {
        proceedBtn.classList.add('disabled');
        proceedBtn.disabled = true;
    }
}

function handleCandidateBackButton() {
    if (appData.activeElectionType === 'parliamentary') {
        navigateToScreen('party-screen');
    } else {
        navigateToScreen('instructions-screen');
    }
}

function renderReviewScreen() {
    const electionTypeBadge = document.getElementById('review-election-type');
    const partyReview = document.getElementById('selected-party-review');
    const partyInfo = document.getElementById('review-party-info');
    const reviewSelections = document.getElementById('review-selections');
    
    // Update election type
    const translations = appData.translations[currentLanguage];
    const electionTypeText = appData.activeElectionType === 'presidential' ? 
        (translations.presidentialElection || 'Presidential Election') : 
        (translations.parliamentaryElection || 'Parliamentary Election');
    electionTypeBadge.textContent = electionTypeText;
    
    // Show party info for parliamentary elections
    if (appData.activeElectionType === 'parliamentary' && selectedParty) {
        partyReview.classList.remove('hidden');
        partyInfo.innerHTML = `
            <div class="party-logo" style="background-color: ${selectedParty.color}"></div>
            <span>${selectedParty.name}</span>
        `;
    } else {
        partyReview.classList.add('hidden');
    }
    
    // Render selections
    reviewSelections.innerHTML = '';
    selectedCandidates.sort((a, b) => a.order - b.order).forEach(selection => {
        const item = document.createElement('div');
        item.className = 'review-item';
        
        const party = appData.activeElectionType === 'presidential' ? 
            selection.candidate.party : 
            (selectedParty ? selectedParty.name : selection.candidate.constituency);
        
        item.innerHTML = `
            <div class="review-order">${selection.order}</div>
            <div class="review-candidate">
                <div class="review-candidate-name">${selection.candidate.name}</div>
                <div class="review-candidate-party">${party}</div>
            </div>
        `;
        
        reviewSelections.appendChild(item);
    });
}

function handleReviewBackButton() {
    navigateToScreen('candidate-screen');
}

function submitVote() {
    const loadingOverlay = document.getElementById('loading-overlay');
    loadingOverlay.classList.remove('hidden');
    
    // Simulate vote submission delay
    setTimeout(() => {
        const voteReference = generateVoteReference();
        const timestamp = new Date().toLocaleString();
        
        document.getElementById('vote-reference').textContent = voteReference;
        document.getElementById('vote-timestamp').textContent = timestamp;
        
        loadingOverlay.classList.add('hidden');
        navigateToScreen('success-screen');
        
        // Auto-reset after 10 seconds
        setTimeout(() => {
            resetApplication();
        }, 10000);
    }, 2000);
}

function generateVoteReference() {
    const timestamp = Date.now().toString();
    const random = Math.random().toString(36).substring(2, 8).toUpperCase();
    return `VT${timestamp.slice(-6)}${random}`;
}

function resetApplication() {
    // Reset all state
    currentLanguage = 'en';
    voterId = '';
    selectedParty = null;
    selectedCandidates = [];
    voteSubmitted = false;
    
    // Clear form inputs
    document.querySelector('.voter-id-input').value = '';
    document.getElementById('voter-id-error').classList.add('hidden');
    const authBtn = document.getElementById('authenticate-btn');
    authBtn.classList.add('disabled');
    authBtn.disabled = true;
    
    // Navigate back to language selection
    navigateToScreen('language-screen');
}

// For demo purposes - allow switching election type (normally controlled by admin)
function switchElectionType() {
    appData.activeElectionType = appData.activeElectionType === 'presidential' ? 'parliamentary' : 'presidential';
    updateElectionTypeDisplay();
    selectedParty = null;
    selectedCandidates = [];
}