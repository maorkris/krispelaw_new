import Link from "next/link";
import Image from "next/image";

export default function About() {
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
            <Link href="/about" className="text-gold-600 font-semibold">אודות</Link>
            <Link href="/#practice-areas" className="text-gray-700 hover:text-gold-600 transition">תחומי עיסוק</Link>
            <Link href="/contact" className="text-gray-700 hover:text-gold-600 transition">צור קשר</Link>
            <a href="tel:0523849777" className="bg-gold-600 text-white px-6 py-2 rounded-lg hover:bg-gold-700 transition">
              052-384-9777
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-gold-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">אודות המשרד</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            מעל 20 שנות ניסיון בהובלת תיקים משפטיים מורכבים עם מחויבות אישית לכל לקוח
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
            <div className="relative h-[600px]">
              <Image
                src="/images/profile-picture.png"
                alt="עו\"ד יוסף קריספל"
                fill
                className="object-contain"
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                עו"ד יוסף קריספל
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                עו"ד יוסף קריספל הינו עורך דין מנוסה ובעל שם בתחום המשפט האזרחי והמסחרי, 
                עם התמחות מיוחדת בדיני משפחה, ירושה ומקרקעין. הוא משמש כיו"ר ועדת ירושה 
                בלשכת עורכי הדין וכסגן יו"ר ועדת בוררות, ומוביל את העשייה המשפטית בתחומים אלו.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                עם מעל 20 שנות ניסיון, עו"ד קריספל ליווה מאות לקוחות פרטיים וחברות בהליכים 
                משפטיים מורכבים, תוך שמירה על גישה אישית ומקצועית לכל תיק. 
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                הרקע הצבאי שלו ביחידה מובחרת בחיל הים מקנה לו כלים ייחודיים של תכנון 
                אסטרטגי, עמידה בלחצים ונחישות בהשגת מטרות.
              </p>
              
              <div className="bg-gold-50 border-r-4 border-gold-600 p-6 mt-8">
                <p className="text-lg italic text-gray-700">
                  "אני מאמין שכל אדם ראוי לייצוג משפטי המשלב מקצועיות ללא פשרות עם הבנה 
                  אנושית עמוקה. הצלחת הלקוח היא הצלחתי."
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">הערכים המנחים אותנו</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">מקצועיות</h3>
                <p className="text-gray-600">
                  ידע משפטי מעמיק, עדכון מתמיד ושליטה מלאה בכל היבטי התיק
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl mb-4">❤️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">אמפתיה</h3>
                <p className="text-gray-600">
                  הבנה עמוקה של המצב האישי והרגשי של הלקוח ומתן מענה הולם
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl mb-4">💪</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">נחישות</h3>
                <p className="text-gray-600">
                  עמידה איתנה על זכויות הלקוח ופעולה בלתי מתפשרת להשגת המטרה
                </p>
              </div>
            </div>
          </div>

          {/* Qualifications */}
          <div className="bg-gray-50 rounded-lg p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">הסמכות ותפקידים</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <span className="text-gold-600 text-2xl">✓</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">יו"ר ועדת ירושה</h4>
                  <p className="text-gray-600">בלשכת עורכי הדין בישראל</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-gold-600 text-2xl">✓</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">סגן יו"ר ועדת בוררות</h4>
                  <p className="text-gray-600">בלשכת עורכי הדין</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-gold-600 text-2xl">✓</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">בורר ומגשר מוסמך</h4>
                  <p className="text-gray-600">בכל תחומי המשפט האזרחי</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-gold-600 text-2xl">✓</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">חבר לשכת עורכי הדין</h4>
                  <p className="text-gray-600">מאז שנת 2000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gold-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">מוכנים לשיחה?</h2>
          <p className="text-xl mb-8 opacity-90">
            צרו קשר עוד היום לתיאום פגישת ייעוץ ללא התחייבות
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-gold-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              שלחו הודעה
            </Link>
            <a 
              href="tel:0523849777"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gold-600 transition"
            >
              חייגו עכשיו
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
