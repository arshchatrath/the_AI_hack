# IndiaAI Impact Hackathon Website - Setup Instructions

## Quick Setup Guide

### 1. Add Your Google Form Registration Link

**This is the most important step!**

1. Open the file `lib/config.ts`
2. Find the line with `GOOGLE_FORM_URL: ""`
3. Replace the empty string with your Google Form URL:

\`\`\`typescript
export const HACKATHON_CONFIG = {
  // Registration
  GOOGLE_FORM_URL: "https://forms.google.com/your-actual-form-url-here",
  // ... rest of config
};
\`\`\`

### 2. Update Event Dates

In the same `lib/config.ts` file, update the TBD dates:

\`\`\`typescript
// Dates (Update these when finalized)
REGISTRATION_OPENS: "March 1, 2025",
REGISTRATION_CLOSES: "March 15, 2025", 
HACKATHON_START: "March 20, 2025",
HACKATHON_END: "March 22, 2025",
\`\`\`

### 3. Add IndiaAI Logo (Optional)

1. Save the IndiaAI logo as `public/indiaai-logo.png`
2. The hero section will automatically display it

### 4. Update Contact Information

Edit `components/contact-section.tsx` to add:
- Official email address
- Phone numbers
- Social media links
- Physical address if needed

### 5. Customize Organizers & Judges

Edit `components/people-grid.tsx` to add:
- Organizer profiles with photos
- Judge profiles with photos
- Bio information

## Testing Your Changes

1. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

2. Open http://localhost:3000

3. Test the registration button - it should either:
   - Open your Google Form (if URL is added)
   - Show "Registration will open soon" message (if URL is empty)

## Key Features Already Implemented

✅ **IndiaAI Impact Branding** - Orange/red color scheme
✅ **6 Problem Tracks** - Healthcare, Agriculture, Education, Fintech, Governance, Open Innovation  
✅ **Prize Structure** - ₹10L+ total prize pool with detailed breakdown
✅ **Google Form Integration** - Ready for your registration link
✅ **Responsive Design** - Works on all devices
✅ **Timeline Section** - With countdown timer
✅ **Professional Layout** - Modern, clean design

## What You Need to Provide

1. **Google Form URL** (Required)
2. **Event Dates** (Required)
3. **IndiaAI Logo** (Optional but recommended)
4. **Organizer/Judge Photos & Info** (Optional)
5. **Contact Details** (Recommended)

## File Structure for Easy Updates

\`\`\`
lib/config.ts              ← Main configuration (MOST IMPORTANT)
components/hero.tsx         ← Hero section with branding
components/registration-form.tsx ← Registration with Google Form
components/prizes.tsx       ← Prize structure
components/people-grid.tsx  ← Organizers & judges
components/contact-section.tsx ← Contact information
\`\`\`

## Need Help?

The website is ready to use with just the Google Form URL. All other customizations are optional and can be done gradually.

**Priority Order:**
1. Add Google Form URL ← **DO THIS FIRST**
2. Update event dates
3. Add contact information  
4. Add logos and photos
5. Customize other content

The website will work perfectly with just step 1 completed!
