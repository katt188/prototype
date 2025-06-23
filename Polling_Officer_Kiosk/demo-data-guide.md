# Polling Officer Portal - Demo Data Guide

## Test NIC Numbers for Demonstration

### ✅ ELIGIBLE VOTERS (At Correct Polling Center - Colombo Central School)

| NIC Number | Full Name | Age | District | Status |
|------------|-----------|-----|----------|--------|
| 123456789012 | Saman Perera | 35 | Colombo | ✅ ELIGIBLE |
| 234567890123 | Nimal Silva | 42 | Colombo | ✅ ELIGIBLE |
| 345678901234 | Kamala Jayawardena | 28 | Colombo | ✅ ELIGIBLE |
| 456789012345 | Ruwan Fernando | 51 | Colombo | ✅ ELIGIBLE |
| 567890123456 | Sandya Wickramasinghe | 33 | Colombo | ✅ ELIGIBLE |
| 111222333444 | Sunil Rajapaksa | 65 | Colombo | ✅ ELIGIBLE |
| 222333444555 | Malini Senanayake | 27 | Colombo | ✅ ELIGIBLE |
| 333444555666 | Lakmal Dissanayake | 39 | Colombo | ✅ ELIGIBLE |
| 666777888999 | Ayesha Fonseka | 32 | Colombo | ✅ ELIGIBLE |
| 777888999000 | Mahesh Gunasekera | 47 | Colombo | ✅ ELIGIBLE |
| 999000111222 | Chandana Ranasinghe | 54 | Colombo | ✅ ELIGIBLE |

### ❌ VOTERS AT WRONG POLLING CENTER

| NIC Number | Full Name | Age | Assigned Center | Status |
|------------|-----------|-----|----------------|--------|
| 678901234567 | Anil Bandara | 29 | Kandy Royal College | ❌ Wrong Center |
| 789012345678 | Priya Gunawardena | 44 | Galle Methodist College | ❌ Wrong Center |
| 890123456789 | Roshan Mendis | 38 | Matara Rahula College | ❌ Wrong Center |
| 901234567890 | Dilani Amarasinghe | 31 | Kurunegala Maliyadeva College | ❌ Wrong Center |
| 444555666777 | Chamari Herath | 43 | Kandy Trinity College | ❌ Wrong Center |
| 555666777888 | Thilak Wijesinghe | 36 | Gampaha Bandaranayake College | ❌ Wrong Center |
| 888999000111 | Ranjani Wijetunge | 29 | Kalutara Vidyalaya | ❌ Wrong Center |

### 🚫 UNREGISTERED VOTERS

| NIC Number | Status |
|------------|--------|
| 012345678901 | 🚫 Not Registered |
| 123456789000 | 🚫 Not Registered |
| 999999999999 | 🚫 Not Registered |
| 000000000000 | 🚫 Not Registered |
| 111111111111 | 🚫 Not Registered |

## How to Test the Portal

### 1. Testing Eligible Voters
- Enter any NIC from the "ELIGIBLE VOTERS" list
- System will show green "✅ ELIGIBLE" status
- "Open Voting Kiosk" button will be enabled
- All voter details will be displayed

**Example:** Enter `123456789012`
- Shows: Saman Perera, Age 35, Colombo District
- Status: ✅ ELIGIBLE
- Can open voting kiosk

### 2. Testing Wrong Polling Center
- Enter any NIC from the "WRONG POLLING CENTER" list
- System will show red "❌ NOT ELIGIBLE" status
- Displays correct polling center where voter should go
- "Open Voting Kiosk" button remains disabled

**Example:** Enter `678901234567`
- Shows: Anil Bandara, Age 29, Kandy District
- Status: ❌ NOT ELIGIBLE - Should vote at Kandy Royal College
- Cannot open voting kiosk

### 3. Testing Unregistered Voters
- Enter any NIC from the "UNREGISTERED VOTERS" list  
- System will show "🚫 NOT FOUND" status
- No voter details displayed
- Clear message about voter not being registered

**Example:** Enter `999999999999`
- Shows: Voter not found in electoral database
- Status: 🚫 NOT REGISTERED
- Cannot open voting kiosk

### 4. Testing Kiosk Control
- After finding an eligible voter, click "Open Voting Kiosk"
- Kiosk status changes to "🔴 OPEN"
- 2-minute countdown timer starts
- Current voter NIC displayed in status panel
- Click "Close Voting Kiosk" to end session manually
- Or wait for automatic timeout

### 5. Testing Input Validation
- Try entering less than 12 digits: Shows format error
- Try entering non-numeric characters: Auto-filtered out
- Try entering more than 12 digits: Limited to 12

### 6. Testing Emergency Function
- Click "⚠️ Emergency Button" at any time
- Modal opens for reporting incidents
- Can select emergency type and add description
- Emergency logged with timestamp

## Portal Features Demonstrated

### Real-time Status Updates
- Kiosk status indicator (OPEN/CLOSED)
- Session timer with color changes
- Current voter display
- Automatic session timeout

### Comprehensive Validation
- NIC format validation (12 digits only)
- Voter registration check
- Polling center assignment verification
- Clear eligibility status display

### Security Features
- Session management
- Audit logging for all actions
- Emergency reporting system
- Controlled access to voting kiosk

### User Experience
- Touch-friendly interface
- Clear visual feedback
- Loading states during lookup
- Error messages with guidance
- Professional dark theme design

## Quick Test Sequence

1. **Test Eligible Voter:** `123456789012` → Should show ELIGIBLE, enable kiosk
2. **Test Wrong Center:** `678901234567` → Should show NOT ELIGIBLE with correct center
3. **Test Unregistered:** `999999999999` → Should show NOT FOUND
4. **Test Invalid Format:** `123` → Should show format error
5. **Test Kiosk Control:** Open kiosk with eligible voter, watch timer countdown
6. **Test Emergency:** Click emergency button, fill form, submit

This comprehensive demo data allows full testing of all portal functionality and edge cases that would occur during actual election operations.