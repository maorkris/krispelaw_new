import Link from "next/link";

export default function RealEstate() {
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
          <div className="text-4xl mb-6">🏢</div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">מקרקעין ונדל"ן</h1>
          <p className="text-xl text-gray-600">
            ליווי משפטי מקיף בכל שלבי עסקת הנדל"ן
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            מומחיות בדיני מקרקעין
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            תחום המקרקעין והנדל"ן מצריך ידע משפטי מעמיק והבנה של השוק הנוכחי. 
            אנו מספקים ליווי מלא ומקצועי בכל היבטי עסקאות הנדל"ן.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold text-gray-900 mb-3">רכישה ומכירה</h4>
              <p className="text-gray-600">
                ליווי משפטי מלא בעסקאות קנייה ומכירה של נכסי מקרקעין
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold text-gray-900 mb-3">הסכמי שכירות</h4>
              <p className="text-gray-600">
                עריכה ובדיקת הסכמי שכירות למגורים ולמסחר
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold text-gray-900 mb-3">פרויקטים יזמיים</h4>
              <p className="text-gray-600">
                ליווי משפטי של פרויקטי בניה ופינוי בינוי
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold text-gray-900 mb-3">סכסוכי שכנים</h4>
              <p className="text-gray-600">
                פתרון מחלוקות בנושאי זכויות בנייה וגבולות מקרקעין
              </p>
            </div>
          </div>

          <div className="bg-gold-50 border-r-4 border-gold-600 p-8 mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4">הניסיון שלנו</h3>
            <p className="text-gray-600 leading-relaxed">
              עו"ד יוסף קריספל מביא עמו ניסיון רב בתחום המקרקעין והנדל"ן, כולל ליווי 
              של עסקאות נדל"ן מורכבות, פרויקטים יזמיים ופתרון סכסוכי מקרקעין.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-6">למה חשוב ליווי משפטי?</h3>
          <ul className="space-y-3 mb-12">
            <li className="flex items-start gap-3">
              <span className="text-gold-600 text-xl">✓</span>
              <span className="text-gray-600">בדיקת תקינות משפטית של הנכס</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold-600 text-xl">✓</span>
              <span className="text-gray-600">מניעת סיכונים ומלכודות משפטיות</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold-600 text-xl">✓</span>
              <span className="text-gray-600">הגנה על האינטרסים שלכם</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold-600 text-xl">✓</span>
              <span className="text-gray-600">ליווי בכל שלבי העסקה עד לרישום בטאבו</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gold-600 text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">מתכננים עסקת נדל"ן?</h2>
          <p className="text-xl mb-8 opacity-90">
            נשמח ללוות אתכם בכל שלב
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="/contact"
              className="bg-white text-gold-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              קבעו פגישה
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-2xl font-bold text-gold-400 mb-4">יוסף קריספל</div>
              <p className="text-gray-400">משרד בוטיק המתמקד בליווי משפטי אישי ומקצועי.</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">ניווט מהיר</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-gold-400 transition">דף הבית</Link></li>
                <li><Link href="/about" className="hover:text-gold-400 transition">אודות</Link></li>
                <li><Link href="/#practice-areas" className="hover:text-gold-400 transition">תחומי עיסוק</Link></li>
                <li><Link href="/contact" className="hover:text-gold-400 transition">צור קשר</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">תחומי עיסוק</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/practice-areas/wills-inheritance" className="hover:text-gold-400 transition">צוואות וירושות</Link></li>
                <li><Link href="/practice-areas/mediation" className="hover:text-gold-400 transition">בוררות וגישור</Link></li>
                <li><Link href="/practice-areas/real-estate" className="hover:text-gold-400 transition">מקרקעין</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">צור קשר</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="tel:0523849777" className="hover:text-gold-400 transition">052-384-9777</a></li>
                <li><a href="mailto:office@krispelaw.com" className="hover:text-gold-400 transition">office@krispelaw.com</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">© 2026 עו"ד יוסף קריספל. כל הזכויות שמורות.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
