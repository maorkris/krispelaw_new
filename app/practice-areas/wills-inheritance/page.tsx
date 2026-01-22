import Link from "next/link";

export default function WillsInheritance() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gold-600">יוסף קריספל</span>
            <span className="text-sm text-gray-600">משרד עורכי דין</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-gold-600 transition">דף הבית</Link>
            <Link href="/about" className="text-gray-700 hover:text-gold-600 transition">אודות</Link>
            <Link href="/#practice-areas" className="text-gold-600 font-semibold">תחומי עיסוק</Link>
            <Link href="/contact" className="text-gray-700 hover:text-gold-600 transition">צור קשר</Link>
            <a href="tel:0523849777" className="bg-gold-600 text-white px-6 py-2 rounded-lg hover:bg-gold-700 transition">
              052-384-9777
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-gold-50 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="text-4xl mb-6">📜</div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">צוואות וירושות</h1>
          <p className="text-xl text-gray-600">
            ליווי מקצועי ורגיש בכל הנוגע לתכנון עתיד המשפחה וניהול עיזבונות
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              הליווי המשפטי המקיף בתחום הירושות
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              תחום הירושות והצוואות הוא אחד התחומים המורכבים והרגישים ביותר במשפט האזרחי. 
              הוא משלב היבטים משפטיים, רגשיים ומשפחתיים, ודורש טיפול מקצועי ורגיש במיוחד.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-12">השירותים שאנו מעניקים</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-bold text-gray-900 mb-3">📝 עריכת צוואות</h4>
                <p className="text-gray-600">
                  תכנון והכנת צוואות מפורטות המבטיחות שרצונכם יתממש בדיוק כפי שתכננתם
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-bold text-gray-900 mb-3">⚖️ סכסוכי ירושה</h4>
                <p className="text-gray-600">
                  ייצוג משפטי בסכסוכים על חלוקת עיזבון, עם שאיפה לפתרונות מאוזנים
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-bold text-gray-900 mb-3">📋 צווי קיום</h4>
                <p className="text-gray-600">
                  ליווי בהליכי קבלת צו קיום צוואה ורישום צו ירושה
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-bold text-gray-900 mb-3">💼 ניהול עיזבונות</h4>
                <p className="text-gray-600">
                  טיפול מקצועי בכל ההיבטים של ניהול עיזבון, כולל חובות ונכסים
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-12">למה חשוב לעבוד עם מומחה?</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              תחום הירושות כולל היבטים משפטיים מורכבים רבים - מסיבוכים מיסויים ועד חלוקת 
              נכסים בין יורשים. עבודה עם עורך דין מנוסה מבטיחה:
            </p>
            
            <ul className="space-y-3 mb-12">
              <li className="flex items-start gap-3">
                <span className="text-gold-600 text-xl">✓</span>
                <span className="text-gray-600">הכנת צוואה תקפה משפטית המבטאת נאמנה את רצונכם</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-600 text-xl">✓</span>
                <span className="text-gray-600">מזעור סכסוכים עתידיים בין בני משפחה</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-600 text-xl">✓</span>
                <span className="text-gray-600">אופטימיזציה של היבטים מיסויים</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold-600 text-xl">✓</span>
                <span className="text-gray-600">ייצוג אפקטיבי בהליכים משפטיים במקרה של מחלוקת</span>
              </li>
            </ul>

            <div className="bg-gold-50 border-r-4 border-gold-600 p-8 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">הניסיון שלנו</h3>
              <p className="text-gray-600 leading-relaxed">
                עו"ד יוסף קריספל משמש כיו"ר ועדת ירושה בלשכת עורכי הדין, ובעל ניסיון של מעל 
                20 שנה בטיפול בתיקי ירושה מורכבים. הוא ליווה מאות משפחות בתהליכים אלו, תוך 
                שמירה על רגישות וכבוד למצב המשפחתי הייחודי של כל לקוח.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gold-600 text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">צריכים ייעוץ בנושא ירושות?</h2>
          <p className="text-xl mb-8 opacity-90">
            אנו כאן כדי לעזור לכם לתכנן את העתיד או לנווט בהליכים קיימים
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="/contact"
              className="bg-white text-gold-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              קבעו פגישת ייעוץ
            </Link>
            <a 
              href="tel:0523849777"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gold-600 transition"
            >
              052-384-9777
            </a>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            תחומי עיסוק נוספים
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/practice-areas/mediation" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">בוררות וגישור</h3>
              <p className="text-gray-600 mb-4">
                פתרון מחלוקות מחוץ לבית המשפט
              </p>
              <span className="text-gold-600 font-semibold">למידע נוסף ←</span>
            </Link>
            
            <Link href="/practice-areas/power-of-attorney" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">ייפוי כוח מתמשך</h3>
              <p className="text-gray-600 mb-4">
                הסדרת עתידכם האישי והכלכלי
              </p>
              <span className="text-gold-600 font-semibold">למידע נוסף ←</span>
            </Link>
            
            <Link href="/practice-areas/family-law" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="text-3xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">דיני משפחה</h3>
              <p className="text-gray-600 mb-4">
                ליווי רגיש בהליכי גירושין ומשפחה
              </p>
              <span className="text-gold-600 font-semibold">למידע נוסף ←</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-2xl font-bold text-gold-400 mb-4">יוסף קריספל</div>
              <p className="text-gray-400 mb-4">
                משרד בוטיק המתמקד בליווי משפטי אישי ומקצועי בתחומי המשפחה, הירושה והמקרקעין.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">ניווט מהיר</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-gold-400 transition">דף הבית</Link></li>
                <li><Link href="/about" className="hover:text-gold-400 transition">אודות המשרד</Link></li>
                <li><Link href="/#practice-areas" className="hover:text-gold-400 transition">תחומי עיסוק</Link></li>
                <li><Link href="/contact" className="hover:text-gold-400 transition">יצירת קשר</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">תחומי עיסוק</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/practice-areas/wills-inheritance" className="hover:text-gold-400 transition">צוואות וירושות</Link></li>
                <li><Link href="/practice-areas/mediation" className="hover:text-gold-400 transition">בוררות וגישור</Link></li>
                <li><Link href="/practice-areas/power-of-attorney" className="hover:text-gold-400 transition">ייפוי כוח מתמשך</Link></li>
                <li><Link href="/practice-areas/real-estate" className="hover:text-gold-400 transition">מקרקעין</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">צור קשר</h4>
              <ul className="space-y-2 text-gray-400">
                <li>טלפון<br/><a href="tel:0523849777" className="hover:text-gold-400 transition">052-384-9777</a></li>
                <li>דוא"ל<br/><a href="mailto:office@krispelaw.com" className="hover:text-gold-400 transition">office@krispelaw.com</a></li>
                <li>מיקום<br/>תל אביב / חיפה (בתיאום מראש)</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2026 עו"ד יוסף קריספל. כל הזכויות שמורות.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-gray-400 hover:text-gold-400 transition text-sm">מדיניות פרטיות</Link>
              <Link href="/accessibility" className="text-gray-400 hover:text-gold-400 transition text-sm">הצהרת נגישות</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
