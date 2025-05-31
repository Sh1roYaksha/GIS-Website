# Adding Your Office Map to AMP Geosolutions Website

## Quick Setup Instructions

### Step 1: Get Your Google Maps Embed Code

1. **Go to Google Maps**: Visit [maps.google.com](https://maps.google.com)

2. **Search for your office address**: Enter your complete office address

3. **Click "Share"**: Click the "Share" button in the left panel

4. **Click "Embed a map"**: Select the "Embed a map" tab

5. **Copy the iframe code**: Copy the entire `<iframe>` code provided

### Step 2: Replace the Map Placeholder

1. **Open the file**: `/app/frontend/src/components/HomePage.js`

2. **Find this section** (around line 427):
```javascript
<div className="w-full h-80 bg-slate-200 rounded-xl flex items-center justify-center">
  {/* Placeholder for Google Maps - Replace with your actual map embed */}
  <div className="text-center">
    <MapPin className="w-12 h-12 text-red-600 mx-auto mb-4" />
    <h4 className="text-lg font-bold text-slate-800 mb-2">AMP Geosolutions Office</h4>
    <p className="text-slate-600 mb-4">Interactive map will be embedded here</p>
    <p className="text-sm text-slate-500">
      Please provide your office address to generate<br />
      the Google Maps embed code
    </p>
  </div>
</div>
```

3. **Replace it with**:
```javascript
<iframe
  src="YOUR_GOOGLE_MAPS_EMBED_URL_HERE"
  width="100%"
  height="320"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="rounded-xl"
></iframe>
```

### Step 3: Update Your Office Address

1. **In the same file**, find this section (around line 410):
```javascript
<p className="text-red-200">
  [Your Office Address Here]<br />
  [City, State, PIN Code]
</p>
```

2. **Replace with your actual address**:
```javascript
<p className="text-red-200">
  Your Actual Street Address<br />
  City Name, State, PIN Code
</p>
```

## Example: Complete Replacement

If your Google Maps embed code is:
```html
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12..." width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
```

Then replace the placeholder with:
```javascript
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12..."
  width="100%"
  height="320"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="rounded-xl"
></iframe>
```

## Need Help?

If you provide me with your office address, I can help generate the proper Google Maps embed code for you!

**Current Contact Information Updated:**
- ✅ Phone: +91-9587839666
- ✅ Email: Contact@ampgeosolution.com
- ✅ Removed: "Licensed & Insured" and "24/7 Support"
- ✅ Map placeholder ready for your address