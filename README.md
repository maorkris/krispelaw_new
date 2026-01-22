# אתר משרד עורכי הדין - עו"ד יוסף קריספל

אתר Next.js מקצועי למשרד עורכי דין בוטיק המתמחה בדיני משפחה, ירושות ומקרקעין.

## תכונות עיקריות

- ✅ עיצוב מודרני ומקצועי
- ✅ ממשק בעברית עם תמיכה מלאה ב-RTL
- ✅ דפי תחומי עיסוק מפורטים
- ✅ טופס יצירת קשר
- ✅ עיצוב רספונסיבי למובייל
- ✅ אופטימיזציה למנועי חיפוש (SEO)
- ✅ ייצוא סטטי ל-GitHub Pages

## התקנה

```bash
# התקנת תלויות
npm install

# הרצה בסביבת פיתוח
npm run dev

# בניית האתר לייצוא סטטי
npm run build
```

## מבנה הפרויקט

```
law-firm-website/
├── app/                          # קבצי האפליקציה
│   ├── page.tsx                  # דף הבית
│   ├── about/                    # דף אודות
│   ├── contact/                  # דף צור קשר
│   ├── practice-areas/           # תחומי עיסוק
│   │   ├── wills-inheritance/
│   │   ├── mediation/
│   │   ├── power-of-attorney/
│   │   ├── contracts/
│   │   ├── real-estate/
│   │   └── family-law/
│   ├── privacy/                  # מדיניות פרטיות
│   └── accessibility/            # הצהרת נגישות
├── public/
│   └── images/                   # תמונות ולוגו
├── package.json
└── next.config.js
```

## הוספת תמונות

יש להוריד את התמונות הבאות ולשמור אותן בתיקייה `public/images/`:

1. **hero-image.png** - תמונת הגיבור הראשית (מהקישור המקורי בסופבייס)
2. **profile-picture.png** - תמונת הפרופיל של עו"ד קריספל

### כיצד להוריד את התמונות:

1. פתחו את האתר המקורי: https://premium-law-firm-website.vercel.app/
2. לחצו לחיצה ימנית על כל תמונה ובחרו "Save image as..."
3. שמרו את התמונות עם השמות:
   - `hero-image.png` (התמונה הראשית בדף הבית)
   - `profile-picture.png` (תמונת הפורטרט)
4. העתיקו את הקבצים לתיקייה `/public/images/`

## פריסה ל-GitHub Pages

1. צרו repository חדש ב-GitHub
2. העלו את כל הקבצים ל-repository
3. הריצו:
```bash
npm run build
```
4. העלו את תיקיית `out/` ל-GitHub Pages או השתמשו ב-GitHub Actions

### GitHub Pages עם GitHub Actions

צרו קובץ `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

## התאמות אישיות

ערכו את הקבצים הבאים להתאמה אישית:

- **פרטי קשר**: `app/page.tsx`, `app/contact/page.tsx`
- **צבעים**: `tailwind.config.ts` (שנו את צבע הזהב בהתאם לצורך)
- **תוכן**: כל דף בתיקייה `app/`

## טכנולוגיות

- **Next.js 14** - פריימוורק React
- **TypeScript** - שפת תכנות
- **Tailwind CSS** - עיצוב
- **Static Export** - ייצוא סטטי

## רישיון

© 2026 עו"ד יוסף קריספל. כל הזכויות שמורות.
