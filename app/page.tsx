import Link from "next/link";
import Image from "next/image";

export default function Home() {
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
            <Link href="/contact" className="text-gray-700 hover:text-gold-600 transition">צור קשר</Link>
            <a href="tel:0523849777" className="bg-gold-600 text-white px-6 py-2 rounded-lg hover:bg-gold-700 transition">
              052-384-9777
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm text-gold-600 font-semibold mb-4">
                עו"ד יוסף קריספל — משרד עורכי דין
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
                כל לקוח הוא עולם ומלואו
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                משרד בוטיק המתמקד בכם - ליווי משפטי אישי עם מחויבות, דיוק והבנה מעמיקה. 
                השקט הנפשי שלכם מתחיל כאן.
              </p>
              <div className="flex gap-4">
                <Link 
                  href="/contact"
                  className="bg-gold-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gold-700 transition"
                >
                  קבעו פגישת ייעוץ
                </Link>
                <Link 
                  href="/#practice-areas"
                  className="border-2 border-gold-600 text-gold-600 px-8 py-4 rounded-lg font-semibold hover:bg-gold-50 transition"
                >
                  תחומי עיסוק
                </Link>
              </div>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="/images/hero-image.png"
                alt="עו\"ד יוסף קריספל"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-gold-600 mb-2">20+</div>
              <div className="text-gray-600">שנות ניסיון</div>
              <div className="text-sm text-gray-500 mt-2">מומחיות ללא פשרות</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-xl font-bold text-gray-900 mb-2">יו"ר ועדת ירושה</div>
              <div className="text-gray-600">בלשכת עורכי הדין</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-xl font-bold text-gray-900 mb-2">מגשר ובורר מוסמך</div>
              <div className="text-gray-600">מעל 20 שנות ניסיון</div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section id="practice-areas" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="text-gold-600 font-semibold mb-2">המומחיות שלנו</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">תחומי עיסוק</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              משרדנו מעניק מטריית שירותים משפטיים רחבה בתחומי המשפט האזרחי והמסחרי, 
              תוך התמחות עמוקה בדיני משפחה וירושה.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <Link 
                key={index}
                href={area.link}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition group"
              >
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-gold-600 transition">
                  {area.title}
                </h3>
                <p className="text-gray-600 mb-6">{area.description}</p>
                <span className="text-gold-600 font-semibold">למידע נוסף ←</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[600px]">
              <Image
                src="/images/profile-picture.png"
                alt="עו\"ד יוסף קריספל פורטרט"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <div className="bg-gold-50 border-r-4 border-gold-600 p-6 mb-8">
                <p className="text-xl italic text-gray-700">
                  "אני מאמין שכל אדם ראוי לייצוג משפטי המשלב מקצועיות ללא פשרות עם הבנה אנושית עמוקה."
                </p>
                <p className="text-gray-600 mt-4 font-semibold">עו"ד יוסף קריספל</p>
              </div>
              
              <div className="text-gold-600 font-semibold mb-2">הניסיון שעושה את ההבדל</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                מקצועיות, נחישות והבנה אנושית
              </h2>
              <p className="text-gray-600 mb-6">
                עו"ד יוסף קריספל מביא עמו מעל 20 שנות ניסיון משפטי עשיר ומגוון. 
                כיו"ר ועדת ירושה בלשכת עורכי הדין וכסגן יו"ר ועדת בוררות, 
                הוא נמצא בחזית העשייה המשפטית בישראל.
              </p>
              <p className="text-gray-600 mb-6">
                המשרד פועל במודל של "בוטיק", המאפשר להעניק לכל לקוח יחס אישי, 
                זמינות גבוהה וליווי צמוד של עו"ד קריספל עצמו בכל שלבי ההליך.
              </p>
              <Link 
                href="/about"
                className="inline-block bg-gold-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gold-700 transition"
              >
                קראו עוד אודות המשרד
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="text-gold-600 font-semibold mb-2">זמינים עבורכם</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">צרו קשר לתיאום פגישה</h2>
          <p className="text-xl text-gray-600 mb-12">
            משרדנו זמין עבורכם לכל שאלה או צורך משפטי. 
            השאירו פרטים או צרו קשר ישיר לקביעת פגישת ייעוץ אישית.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a href="tel:0523849777" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="text-3xl mb-2">📞</div>
              <div className="font-semibold text-gray-900 mb-2">טלפון ישיר</div>
              <div className="text-gold-600">052-384-9777</div>
            </a>
            <a href="https://wa.me/972523849777" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="text-3xl mb-2">💬</div>
              <div className="font-semibold text-gray-900 mb-2">וואטסאפ</div>
              <div className="text-gold-600">שלחו לנו הודעה</div>
            </a>
            <a href="mailto:office@krispelaw.com" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="text-3xl mb-2">✉️</div>
              <div className="font-semibold text-gray-900 mb-2">דוא"ל משרד</div>
              <div className="text-gold-600">office@krispelaw.com</div>
            </a>
          </div>

          <Link 
            href="/contact"
            className="inline-block bg-gold-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gold-700 transition"
          >
            מלאו טופס יצירת קשר
          </Link>
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

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/972523849777?text=שלום עו״ד קריספל, אשמח לקבל מידע נוסף בנוגע ל..."
        className="fixed bottom-8 left-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="text-2xl">💬</span>
      </a>
    </div>
  );
}

const practiceAreas = [
  {
    title: "צוואות וירושות",
    description: "תכנון מוקפד וליווי מקצועי בסכסוכי ירושה, עריכת צוואות וניהול עיזבונות ברגישות ובדיוק.",
    icon: "📜",
    link: "/practice-areas/wills-inheritance"
  },
  {
    title: "בוררות וגישור",
    description: "פתרון מחלוקות מחוץ לכותלי בית המשפט בדרכי שלום, תוך שמירה על יחסים ותוצאה הוגנת.",
    icon: "🤝",
    link: "/practice-areas/mediation"
  },
  {
    title: "ייפוי כוח מתמשך",
    description: "הסדרת עתידכם האישי והכלכלי לשלוות נפש מלאה, תוך שמירה על כבודכם ורצונכם האישי.",
    icon: "📋",
    link: "/practice-areas/power-of-attorney"
  },
  {
    title: "חוזים והסכמים",
    description: "עריכת חוזים מסחריים ופרטיים ברמה הגבוהה ביותר, ליווי משא ומתן והגנה משפטית מקיפה.",
    icon: "📄",
    link: "/practice-areas/contracts"
  },
  {
    title: "מקרקעין",
    description: "ליווי עסקאות נדל\"ן מורכבות, רכישה ומכירה של נכסים, הסכמי שכירות וליווי יזמים.",
    icon: "🏢",
    link: "/practice-areas/real-estate"
  },
  {
    title: "דיני משפחה",
    description: "ליווי רגיש ומקצועי בתהליכי גירושין, משמורת ילדים, הסכמי ממון וחלוקת רכוש.",
    icon: "👨‍👩‍👧‍👦",
    link: "/practice-areas/family-law"
  }
];
