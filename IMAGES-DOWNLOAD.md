# 📸 הורדת תמונות לאתר

## תמונות נדרשות

האתר שלכם משתמש בשתי תמונות עיקריות שצריך להוריד מהאתר המקורי.

---

## 1. תמונת הגיבור הראשית (Hero Image)

**שם הקובץ**: `hero-image.png`  
**מיקום**: `/public/images/hero-image.png`

### קישור להורדה:
```
https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/88af29ea-b3ee-4dfc-b3f3-9e6d97d9627a/b1410f47-5a35-4beb-9f31-c86eb54387b1-1769118258285.png?width=1600&height=1600&resize=contain
```

### איך להוריד:
1. העתיקו את הקישור למעלה
2. הדביקו אותו בשורת הכתובות של הדפדפן
3. לחצו Enter
4. התמונה תיפתח - לחצו לחיצה ימנית ובחרו "שמור תמונה בשם" (Save Image As)
5. שמרו בשם: `hero-image.png`

**או:**
1. גשו לאתר: https://premium-law-firm-website.vercel.app/
2. מצאו את התמונה הראשית (בצד ימין של הכותרת הראשית)
3. לחצו לחיצה ימנית על התמונה
4. בחרו "שמור תמונה בשם"
5. שמרו בשם: `hero-image.png`

---

## 2. תמונת הפרופיל (Profile Picture)

**שם הקובץ**: `profile-picture.png`  
**מיקום**: `/public/images/profile-picture.png`

### קישור להורדה:
```
https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/88af29ea-b3ee-4dfc-b3f3-9e6d97d9627a/profile-picture-1769118268902.png?width=1200&height=1200&resize=contain
```

### איך להוריד:
1. העתיקו את הקישור למעלה
2. הדביקו אותו בשורת הכתובות של הדפדפן
3. לחצו Enter
4. התמונה תיפתח - לחצו לחיצה ימנית ובחרו "שמור תמונה בשם" (Save Image As)
5. שמרו בשם: `profile-picture.png`

**או:**
1. גשו לאתר: https://premium-law-firm-website.vercel.app/
2. גללו למטה עד לקטע "מקצועיות, נחישות והבנה אנושית"
3. מצאו את תמונת הפורטרט של עו"ד קריספל
4. לחצו לחיצה ימנית על התמונה
5. בחרו "שמור תמונה בשם"
6. שמרו בשם: `profile-picture.png`

---

## 📁 היכן לשים את התמונות

לאחר שהורדתם את שתי התמונות, העתיקו אותן לתיקייה:

```
law-firm-website/
└── public/
    └── images/
        ├── hero-image.png        ← שימו כאן
        └── profile-picture.png   ← שימו כאן
```

### צעדים:
1. פתחו את תיקיית הפרויקט `law-firm-website`
2. פתחו את תיקיית `public`
3. פתחו את תיקיית `images` (אם היא לא קיימת, צרו אותה)
4. העתיקו את שתי התמונות שהורדתם לתיקייה זו
5. ודאו שהשמות **בדיוק** כמו שרשום:
   - `hero-image.png`
   - `profile-picture.png`

---

## ✅ בדיקה

לאחר שהעתקתם את התמונות, ודאו שהמבנה נראה כך:

```
law-firm-website/
├── app/
├── public/
│   └── images/
│       ├── hero-image.png       ✓
│       └── profile-picture.png  ✓
├── package.json
└── README.md
```

---

## 🚀 מוכנים להמשיך

לאחר שהורדתם את התמונות והעתקתם אותן לתיקייה הנכונה, אתם מוכנים:

1. לבנות את האתר: `npm run build`
2. להעלות את הקבצים ל-GitHub
3. לפרוס את האתר ב-GitHub Pages

למידע נוסף, ראו את הקובץ `SETUP-INSTRUCTIONS.md`

---

## ❓ שאלות נפוצות

**ש: מה אם התמונות לא נטענות?**  
ת: ודאו שהשמות של הקבצים נכונים בדיוק ושהם נמצאים בתיקייה `public/images/`

**ש: האם אני יכול להשתמש בתמונות אחרות?**  
ת: כן! פשוט שמרו אותן באותם שמות והעתיקו לאותה תיקייה.

**ש: התמונות גדולות מדי - האם אני צריך לקטין אותן?**  
ת: Next.js יקטין אותן אוטומטית, אבל תוכלו גם לעשות זאת ידנית אם תרצו.

---

בהצלחה! 🎉
