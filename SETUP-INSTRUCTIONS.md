# 📘 הדרכה מפורטת להעתקת האתר ל-GitHub

## שלב 1: הורדת התמונות מהאתר המקורי

### תמונות שצריך להוריד:

האתר שלך משתמש בשתי תמונות עיקריות:

1. **תמונת הגיבור הראשית (hero-image.png)**
2. **תמונת הפרופיל (profile-picture.png)**

### איך להוריד את התמונות:

#### אופן 1: הורדה ידנית מהאתר

1. פתחו את האתר: https://premium-law-firm-website.vercel.app/
2. **להורדת תמונת הגיבור**:
   - גללו למטה עד התמונה הראשית הגדולה (בצד ימין של הכיתוב "כל לקוח הוא עולם ומלואו")
   - לחצו לחיצה ימנית על התמונה
   - בחרו "Save image as..." / "שמור תמונה בשם..."
   - שמרו את הקובץ בשם: `hero-image.png`

3. **להורדת תמונת הפרופיל**:
   - גללו למטה עד לקטע עם תמונת הפורטרט של עו"ד קריספל
   - לחצו לחיצה ימנית על התמונה
   - בחרו "Save image as..." / "שמור תמונה בשם..."
   - שמרו את הקובץ בשם: `profile-picture.png`

#### אופן 2: הורדה דרך הקישורים המקוריים

אם ברצונכם להוריד ישירות מ-Supabase:

**תמונת הגיבור:**
```
https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/88af29ea-b3ee-4dfc-b3f3-9e6d97d9627a/b1410f47-5a35-4beb-9f31-c86eb54387b1-1769118258285.png?width=1600&height=1600&resize=contain
```

**תמונת הפרופיל:**
```
https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/88af29ea-b3ee-4dfc-b3f3-9e6d97d9627a/profile-picture-1769118268902.png?width=1200&height=1200&resize=contain
```

### היכן לשים את התמונות:

לאחר הורדת התמונות, העתיקו אותן לתיקייה:
```
public/images/
```

המבנה צריך להיראות כך:
```
law-firm-website/
└── public/
    └── images/
        ├── hero-image.png
        └── profile-picture.png
```

---

## שלב 2: העלאה ל-GitHub

### יצירת Repository

1. היכנסו ל-GitHub: https://github.com
2. לחצו על הכפתור הירוק **"New"** או **"New repository"**
3. מלאו את הפרטים:
   - **Repository name**: `law-firm-website` (או כל שם אחר)
   - **Description**: "אתר משרד עורכי דין - עו\"ד יוסף קריספל"
   - בחרו **Public** או **Private** (לפי העדפתכם)
   - **אל תסמנו** "Initialize this repository with a README"
4. לחצו **Create repository**

### העלאת הקבצים

#### דרך 1: דרך ממשק GitHub (קל לשימוש)

1. לאחר יצירת ה-repository, תראו מסך עם הוראות
2. לחצו על **"uploading an existing file"**
3. גררו את כל התיקייה `law-firm-website` (או את כל הקבצים שבתוכה)
4. הוסיפו הודעת commit: "Initial commit - העלאת אתר משרד עורכי דין"
5. לחצו **Commit changes**

#### דרך 2: דרך Git CLI (למתקדמים)

אם יש לכם Git מותקן במחשב:

```bash
# נווטו לתיקיית הפרויקט
cd law-firm-website

# אתחול Git
git init

# הוספת כל הקבצים
git add .

# יצירת commit ראשון
git commit -m "Initial commit - העלאת אתר משרד עורכי דין"

# חיבור ל-repository (החליפו את USERNAME ו-REPO-NAME)
git remote add origin https://github.com/USERNAME/REPO-NAME.git

# העלאה ל-GitHub
git branch -M main
git push -u origin main
```

---

## שלב 3: פריסה ל-GitHub Pages

### הגדרת GitHub Pages

1. היכנסו ל-repository שלכם ב-GitHub
2. לחצו על **Settings** (בתפריט העליון)
3. בצד שמאל, לחצו על **Pages**
4. תחת **Source**, בחרו:
   - **Branch**: `main`
   - **Folder**: `/root` (או `/docs` אם העליתם לתיקייה זו)
5. לחצו **Save**

### בניית האתר לפריסה

לפני שהאתר יעלה, צריך לבנות אותו:

```bash
# התקינו את התלויות (אם עוד לא עשיתם)
npm install

# בנו את האתר
npm run build
```

זה יצור תיקייה בשם `out/` עם כל הקבצים הסטטיים.

### העלאת הקבצים הסטטיים

אם אתם רוצים להשתמש ב-GitHub Pages עם תיקיית `/docs`:

1. שנו את `next.config.js` כך:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  distDir: 'docs', // שנו מ-out ל-docs
}

module.exports = nextConfig
```

2. הריצו שוב:
```bash
npm run build
```

3. העלו את התיקייה `docs/` ל-GitHub

### אוטומציה עם GitHub Actions (מומלץ!)

כדי שהאתר יבנה ויפרוס אוטומטית בכל פעם שתעשו שינוי:

1. צרו תיקייה: `.github/workflows/`
2. צרו קובץ: `.github/workflows/deploy.yml`
3. הדביקו את התוכן הבא:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

4. העלו את הקובץ ל-GitHub
5. האתר יבנה ויפרוס אוטומטית!

---

## שלב 4: גישה לאתר

לאחר שהאתר עלה בהצלחה, תוכלו לגשת אליו בכתובת:

```
https://USERNAME.github.io/REPOSITORY-NAME/
```

לדוגמה, אם שם המשתמש שלכם הוא `johndoe` ושם ה-repository הוא `law-firm-website`:

```
https://johndoe.github.io/law-firm-website/
```

---

## בעיות נפוצות ופתרונות

### התמונות לא מופיעות

**בעיה**: התמונות לא נטענות באתר.

**פתרון**:
1. ודאו שהתמונות נמצאות בתיקייה `public/images/`
2. ודאו שהשמות של הקבצים נכונים: `hero-image.png` ו-`profile-picture.png`
3. נסו לנקות את ה-cache של הדפדפן (Ctrl+Shift+Delete)

### האתר לא עולה

**בעיה**: האתר לא נפתח או מציג שגיאה 404.

**פתרון**:
1. ודאו ש-GitHub Pages מופעל (Settings > Pages)
2. המתינו 5-10 דקות לאחר העלאת הקבצים
3. בדקו שה-branch שנבחר הוא `main` ולא `master`

### CSS לא עובד

**בעיה**: האתר נראה ללא עיצוב.

**פתרון**:
1. ודאו שהרצתם `npm run build` לפני העלאה
2. בדקו ש-`next.config.js` מוגדר עם `output: 'export'`

---

## סיכום מהיר

1. ✅ הורידו את התמונות מהאתר המקורי
2. ✅ שימו אותן בתיקייה `public/images/`
3. ✅ צרו repository ב-GitHub
4. ✅ העלו את כל הקבצים
5. ✅ הפעילו GitHub Pages
6. ✅ גלשו לאתר שלכם!

---

## צריכים עזרה?

אם נתקלתם בבעיה או שיש שאלות, אתם מוזמנים לפתוח Issue ב-GitHub או ליצור איתי קשר.

בהצלחה! 🎉
