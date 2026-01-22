import Link from "next/link";

export default function Contact() {
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
            <Link href="/#practice-areas" className="text-gray-700 hover:text-gold-600 transition">תחומי עיסוק</Link>
            <Link href="/contact" className="text-gold-600 font-semibold">צור קשר</Link>
            <a href="tel:0523849777" className="bg-gold-600 text-white px-6 py-2 rounded-lg hover:bg-gold-700 transition">
              052-384-9777
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-gold-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">צרו קשר</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            נשמח לעמוד לרשותכם ולענות על כל שאלה. אנחנו כאן בשבילכם.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <a href="tel:0523849777" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">טלפון ישיר</h3>
              <p className="text-gold-600 font-semibold mb-2">052-384-9777</p>
              <p className="text-gray-600 text-sm">זמינים לשיחה</p>
            </a>
            
            <a href="https://wa.me/972523849777" target="_blank" rel="noopener noreferrer" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">וואטסאפ</h3>
              <p className="text-gold-600 font-semibold mb-2">שלחו הודעה</p>
              <p className="text-gray-600 text-sm">מענה מהיר</p>
            </a>
            
            <a href="mailto:office@krispelaw.com" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition text-center">
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">דוא"ל</h3>
              <p className="text-gold-600 font-semibold mb-2">office@krispelaw.com</p>
              <p className="text-gray-600 text-sm">נשיב בהקדם</p>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">שלחו לנו הודעה</h2>
            <p className="text-gray-600 mb-8">
              מלאו את הפרטים הבאים ונחזור אליכם בהקדם האפשרי
            </p>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  שם מלא *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none"
                  placeholder="הזינו את שמכם המלא"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                  טלפון *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none"
                  placeholder="הזינו מספר טלפון"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  דוא"ל *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none"
                  placeholder="הזינו כתובת דוא״ל"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  הודעה *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none resize-none"
                  placeholder="ספרו לנו על הצורך המשפטי שלכם..."
                />
              </div>
              
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  required
                  className="mt-1"
                />
                <label htmlFor="privacy" className="text-sm text-gray-600">
                  אני מאשר/ת קבלת פנייה חוזרת בהתאם ל<Link href="/privacy" className="text-gold-600 underline">מדיניות הפרטיות</Link>
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gold-600 text-white py-4 rounded-lg font-semibold hover:bg-gold-700 transition"
              >
                שלחו הודעה
              </button>
              
              <p className="text-sm text-gray-500 text-center">
                🔒 המידע שלכם מאובטח ומוגן
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Office Info */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">המשרד שלנו</h2>
            <p className="text-gray-600">
              אנו מקבלים לקוחות במשרדים בתל אביב וחיפה בתיאום מראש
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">📍 תל אביב</h3>
              <p className="text-gray-600 mb-4">
                המשרד המרכזי שלנו ממוקם בתל אביב, בלב העיר
              </p>
              <p className="text-sm text-gold-600 font-semibold">
                *הכתובת המדויקת תימסר בתיאום פגישה
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">📍 חיפה</h3>
              <p className="text-gray-600 mb-4">
                משרד נוסף בחיפה לנוחות לקוחותינו מהצפון
              </p>
              <p className="text-sm text-gold-600 font-semibold">
                *בתיאום מראש בלבד
              </p>
            </div>
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
