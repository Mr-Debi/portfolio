import React, { useState, useEffect, createContext, useContext } from 'react';
import profileImg from './assets/profile.png'
import profileResume from './assets/resume.pdf'
import Octopus from './Octopus';



// --- 1. GLOBAL STATE (CONTEXT) ---
const AppContext = createContext();

const translations = {
  en: {
    navProjects: "Projects",
    navPlayground: "Playground",
    navGames: "Games",
    navExperience: "Experience",
    navContact: "Contact",
    heroTitle: "Full Stack Engineer",
    viewWork: "View My Work",
    download: "Download Resume",
    hireMe: "Hire Me 🚀",
    skills: "Technical Arsenal",
    projects: "Featured Projects",
    playground: "Live Code Playground",
    playgroundDesc: "Edit the HTML, CSS, and JS below to see the results update live!",
    gamesTitle: "Live Games Playground",
    gamesDesc: "Play these mini-games and check out the source code in the tabs!",
    seeMoreProjects: "See More Projects ↓",
    hideProjects: "Hide Projects ↑",
    experience: "Professional Experience",
    contact: "Get In Touch",
  },
  hi: {
    navProjects: "प्रोजेक्ट्स",
    navPlayground: "प्लेग्राउंड",
    navGames: "गेम्स",
    navExperience: "अनुभव",
    navContact: "संपर्क",
    heroTitle: "फुल स्टैक इंजीनियर",
    viewWork: "मेरा काम देखें",
    download: "रिज्यूमे डाउनलोड करें",
    hireMe: "मुझे काम पर रखें 🚀",
    skills: "तकनीकी कौशल",
    projects: "प्रमुख प्रोजेक्ट्स",
    playground: "लाइव कोड प्लेग्राउंड",
    playgroundDesc: "लाइव परिणाम देखने के लिए नीचे दिए गए HTML, CSS और JS को संपादित करें!",
    gamesTitle: "लाइव गेम्स प्लेग्राउंड",
    gamesDesc: "इन मिनी-गेम्स को खेलें और टैब में सोर्स कोड देखें!",
    seeMoreProjects: "और प्रोजेक्ट्स देखें ↓",
    hideProjects: "प्रोजेक्ट्स छिपाएं ↑",
    experience: "व्यावसायिक अनुभव",
    contact: "संपर्क करें",
  },
  or: {
    navProjects: "ପ୍ରକଳ୍ପ",
    navPlayground: "ପ୍ଲେଗ୍ରାଉଣ୍ଡ",
    navGames: "ଖେଳ",
    navExperience: "ଅଭିଜ୍ଞତା",
    navContact: "ସମ୍ପର୍କ",
    heroTitle: "ଫୁଲ୍ ଷ୍ଟାକ୍ ଇଞ୍ଜିନିୟର",
    viewWork: "ମୋର କାମ ଦେଖନ୍ତୁ",
    download: "ରିଜ୍ୟୁମେ ଡାଉନଲୋଡ୍ କରନ୍ତୁ",
    hireMe: "ମୋତେ ନିଯୁକ୍ତ କରନ୍ତୁ 🚀",
    skills: "ବୈଷୟିକ କୌଶଳ",
    projects: "ବିଶେଷ ପ୍ରକଳ୍ପ",
    playground: "ଲାଇଭ୍ କୋଡ୍ ପ୍ଲେଗ୍ରାଉଣ୍ଡ",
    playgroundDesc: "ଲାଇଭ୍ ଫଳାଫଳ ଦେଖିବା ପାଇଁ HTML, CSS ଏବଂ JS ସମ୍ପାଦନ କରନ୍ତୁ!",
    gamesTitle: "ଲାଇଭ୍ ଗେମ୍ସ ପ୍ଲେଗ୍ରାଉଣ୍ଡ",
    gamesDesc: "ଏହି ମିନି ଗେମ୍ସ ଖେଳନ୍ତୁ ଏବଂ ଟ୍ୟାବ୍ ରେ ସୋର୍ସ କୋଡ୍ ଦେଖନ୍ତୁ!",
    seeMoreProjects: "ଅଧିକ ପ୍ରକଳ୍ପ ଦେଖନ୍ତୁ ↓",
    hideProjects: "ପ୍ରକଳ୍ପ ଲୁଚାନ୍ତୁ ↑",
    experience: "ବୃତ୍ତିଗତ ଅଭିଜ୍ଞତା",
    contact: "ଯୋଗାଯୋଗ କରନ୍ତୁ",
  }
};

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true);
  const [lang, setLang] = useState('en');
  // for scroll up 
  useEffect(() => {
    // 1. Tell the browser NOT to remember the last scroll position
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    // 2. Force the window to the absolute top of the page
    window.scrollTo(0, 0);
  }, []);
  // --------------------------

  const t = (key) => translations[lang][key];

  return (
    <AppContext.Provider value={{ isDark, setIsDark, lang, setLang, t }}>
      <style>{`
        /* 1. HIDE THE NATIVE SCROLLBAR COMPLETELY */
        ::-webkit-scrollbar {
          width: 0px;
          background: transparent;
        }
        html {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        /* 2. CUSTOM ICON ANIMATIONS */
        @keyframes laptop-open {
          0%, 15% { transform: perspective(400px) rotateX(-85deg); opacity: 0.5; }
          40%, 80% { transform: perspective(400px) rotateX(0deg); opacity: 1; }
          100% { transform: perspective(400px) rotateX(-85deg); opacity: 0.5; }
        }
        @keyframes spin-gear {
          100% { transform: rotate(360deg); }
        }
        @keyframes spark-pop {
          0%, 10% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1.3); }
          90%, 100% { opacity: 0; transform: scale(0.5); }
        }
        @keyframes hammer-hit {
          0%, 20% { transform: rotate(30deg); }
          25% { transform: rotate(-25deg); }
          32% { transform: rotate(10deg); }
          40% { transform: rotate(-5deg); }
          50%, 100% { transform: rotate(0deg); }
        }
      `}</style>

      {/* THE NEW PIKACHU SCROLLBAR INJECTED HERE */}
      <PikachuScrollbar />
      <VisitorStats />
      <div className="App"><Octopus />

      <div className={`min-h-screen font-sans transition-colors duration-1000 ease-in-out ${isDark ? 'bg-slate-900 text-slate-50 selection:bg-blue-500/30' : 'bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 text-stone-800 selection:bg-orange-300/40'}`}>
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HeroSection />
          <Divider />
          <SkillsMatrix />
          <Divider />
          <ProjectsSection />
          <Divider />
          <LiveProjectsSection />
          <Divider />
          <LiveGamesSection />
          <Divider />
          <ExperienceTimeline />
          <Divider />
          <ContactForm />
        </main>
        <Footer />
      </div>
      </div>
    </AppContext.Provider>
  );
}

// --- 2. PIKACHU SCROLLBAR COMPONENT ---
function PikachuScrollbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      const progress = (currentScrollY / scrollHeight) * 100;

      setScrollProgress(progress);
      setIsScrollingDown(currentScrollY > lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Calculate if we are near the 25%, 50%, or 70% mark (giving a 6% visibility window so it stays on screen briefly)
  const showHireMe = 
    (scrollProgress >= 22 && scrollProgress <= 28) ||
    (scrollProgress >= 47 && scrollProgress <= 53) ||
    (scrollProgress >= 67 && scrollProgress <= 73);

  return (
    <div className="fixed right-0 top-0 w-16 h-full pointer-events-none z-[100] hidden sm:block">
      {/* Faint scroll track */}
      <div className="absolute right-4 top-0 w-0 h-full bg-slate-400/20 rounded-full"></div>

      {/* Wrapper that slides up and down (NOT rotated, so text stays readable) */}
      <div
        className="absolute right-0 w-full transition-all duration-100 ease-out flex items-center justify-end pr-2"
        style={{ top: `${scrollProgress}%`, transform: 'translateY(-50%)' }}
      >
        
        {/* The Pop-out Hire Me Button */}
        <a
          href="mailto:debidutta.db@gmail.com?subject=Job%20Opportunity:%20Hiring%20Inquiry"
          className={`absolute right-14 whitespace-nowrap bg-emerald-500 text-white text-sm font-bold py-2 px-4 rounded-full shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 hover:scale-105 pointer-events-auto transition-all duration-300 ease-out ${
            showHireMe 
              ? 'opacity-100 scale-100 translate-x-0' 
              : 'opacity-0 scale-50 translate-x-8 pointer-events-none'
          }`}
        >
          Hire Me! 🚀
        </a>

        {/* Pikachu Image (Rotates independently of the wrapper) */}
        <img
          // src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif"
          src="https://i.pinimg.com/originals/a8/d5/ba/a8d5baeb06fc12c77ccefd0121010d20.gif"
          alt="Climbing Pikachu"
          className="w-10 h-10 object-contain drop-shadow-[0_0_8px_rgba(250,204,21,0.8)] transition-transform duration-100"
          style={{
            transform: isScrollingDown ? 'rotate(0deg)' : 'scaleX(-1) rotate(0deg)'
          }}
        />

      </div>
    </div>
  );
}

// --- 3. CUSTOM ANIMATED SVG ICON COMPONENTS ---
const LaptopIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full stroke-current fill-none" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 10 80 L 90 80 L 95 90 L 5 90 Z" fill="currentColor" stroke="none" className="opacity-20" />
    <path d="M 10 80 L 90 80 L 95 90 L 5 90 Z" />
    <g style={{ transformOrigin: '50px 80px', animation: 'laptop-open 4s ease-in-out infinite' }}>
      <rect x="15" y="25" width="70" height="55" rx="4" />
      <rect x="20" y="30" width="60" height="45" fill="currentColor" stroke="none" className="opacity-30" />
      <path d="M 30 45 L 70 45 M 30 60 L 50 60" strokeWidth="2" className="opacity-50" />
    </g>
  </svg>
);

const GearIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full stroke-current fill-none" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <g style={{ transformOrigin: '50px 50px', animation: 'spin-gear 6s linear infinite' }}>
      <circle cx="50" cy="50" r="22" className="opacity-20" fill="currentColor" />
      <circle cx="50" cy="50" r="22" />
      <circle cx="50" cy="50" r="8" />
      <path d="M50 15 L50 28 M50 72 L50 85 M15 50 L28 50 M72 50 L85 50 M25 25 L35 35 M65 65 L75 75 M25 75 L35 65 M75 25 L65 35" strokeWidth="6" />
    </g>
  </svg>
);

const DatabaseIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full stroke-current fill-none overflow-visible" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <g className="opacity-90">
      <path d="M 25 25 C 25 15, 75 15, 75 25 C 75 35, 25 35, 25 25 Z" fill="currentColor" className="opacity-20" />
      <path d="M 25 25 C 25 15, 75 15, 75 25 C 75 35, 25 35, 25 25 Z" />
      <path d="M 25 25 L 25 50 C 25 60, 75 60, 75 50 L 75 25" />
      <path d="M 25 50 L 25 75 C 25 85, 75 85, 75 75 L 75 50" />
    </g>
    <g style={{ animation: 'spark-pop 2.5s ease-in-out infinite', transformOrigin: '85px 25px' }} className="text-yellow-400 dark:text-yellow-300">
      <path d="M 85 10 L 85 20 M 80 15 L 90 15" stroke="currentColor" />
    </g>
    <g style={{ animation: 'spark-pop 2.5s ease-in-out infinite 1.2s', transformOrigin: '15px 65px' }} className="text-emerald-500 dark:text-emerald-400">
      <path d="M 15 55 L 15 65 M 10 60 L 20 60" stroke="currentColor" />
    </g>
  </svg>
);

const HammerIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full stroke-current fill-none overflow-visible" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="35" cy="75" r="8" fill="currentColor" stroke="none" className="opacity-30" />
    <circle cx="35" cy="75" r="8" />
    <path d="M 31 71 L 39 79" strokeWidth="2" />
    <path d="M 20 90 L 45 65" strokeWidth="6" />
    <g style={{ transformOrigin: '65px 65px', animation: 'hammer-hit 2s ease-in-out infinite' }}>
      <path d="M 65 65 L 65 25" strokeWidth="6" />
      <path d="M 45 25 L 85 25 L 85 15 L 45 15 Z" fill="currentColor" className="opacity-80" stroke="none" />
      <path d="M 45 25 L 85 25 L 85 15 L 45 15 Z" />
    </g>
  </svg>
);

// --- 4. ANIMATED TOGGLE & TILT COMPONENTS ---
function AnimatedThemeToggle({ isDark, toggle }) {
  return (
    <button onClick={toggle} className={`relative w-16 h-8 rounded-full p-1 transition-colors duration-1000 ease-in-out focus:outline-none overflow-hidden ${isDark ? 'bg-slate-700' : 'bg-sky-200'}`} title="Toggle Theme">
      <div className={`absolute inset-0 transition-opacity duration-1000 ${isDark ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute top-2 left-2 w-0.5 h-0.5 bg-white rounded-full animate-pulse" />
        <div className="absolute top-5 left-4 w-1 h-1 bg-white rounded-full animate-pulse delay-75" />
        <div className="absolute top-1 left-6 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-150" />
      </div>
      <div className={`w-6 h-6 rounded-full relative transition-all duration-1000 ease-in-out transform ${isDark ? 'translate-x-8 bg-slate-200 rotate-180' : 'translate-x-0 bg-yellow-400 rotate-0 shadow-[0_0_15px_rgba(250,204,21,0.8)]'}`}>
        <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isDark ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute top-1 left-3 w-1.5 h-1.5 bg-slate-400/60 rounded-full" />
          <div className="absolute top-3 left-1 w-2 h-2 bg-slate-400/40 rounded-full" />
          <div className="absolute bottom-1 right-2 w-1 h-1 bg-slate-400/50 rounded-full" />
        </div>
      </div>
    </button>
  );
}
// --- 4.1 ANIMATED TILT CARD COMPONENTS ---
function TiltCard({ children, className = "" }) {
  const { isDark } = useContext(AppContext);
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  const [glare, setGlare] = useState({ opacity: 0, x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top;  
    const rotateY = (12 * ((x - rect.width / 2) / (rect.width / 2))).toFixed(2);
    const rotateX = (-12 * ((y - rect.height / 2) / (rect.height / 2))).toFixed(2);
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
    setGlare({ opacity: 1, x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setGlare({ opacity: 0, x: 50, y: 50 });
  };

  const glareColor = isDark ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.8)';

  return (
    <div className={`relative transition-all duration-200 ease-out ${className}`} style={{ transform, transformStyle: "preserve-3d" }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className="h-full w-full relative z-10" style={{ transform: "translateZ(30px)" }}>{children}</div>
      <div className="absolute inset-0 pointer-events-none rounded-xl transition-opacity duration-300 z-20" style={{ opacity: glare.opacity, background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, ${glareColor} 0%, rgba(255,255,255,0) 60%)`, mixBlendMode: isDark ? 'screen' : 'overlay' }} />
    </div>
  );
}

// --- 5. MINI CODEPEN COMPONENT (NOW WITH FULLSCREEN!) ---
function MiniCodePen({ title, initialHtml, initialCss, initialJs, isGame = false }) {
  const { isDark } = useContext(AppContext);
  const [html, setHtml] = useState(initialHtml);
  const [css, setCss] = useState(initialCss);
  const [js, setJs] = useState(initialJs);
  const [activeTab, setActiveTab] = useState('result');
  const [srcDoc, setSrcDoc] = useState('');
  
  // NEW: Fullscreen state
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Prevent background from scrolling when a window is fullscreen
  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [isFullscreen]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { margin: 0; padding: 1rem; font-family: system-ui, sans-serif; display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 100vh; background: transparent; overflow: ${isGame || isFullscreen ? 'auto' : 'hidden'}; }
              ${css}
            </style>
          </head>
          <body>
            ${html}
            <script>${js}</script>
          </body>
        </html>
      `);
    }, 250); 
    return () => clearTimeout(timeout);
  }, [html, css, js, isGame, isFullscreen]);

  const tabs = [
    { id: 'result', label: '👁️ Result' },
    { id: 'html', label: '📄 HTML' },
    { id: 'css', label: '🎨 CSS' },
    { id: 'js', label: '⚡ JS' }
  ];

  // Dynamic sizing based on if it's fullscreen, a game, or a standard project
  const heightClass = isFullscreen ? "flex-1" : (isGame ? "h-72 sm:h-80" : "h-48 sm:h-56");
  const scrollClass = isGame || isFullscreen ? "overflow-auto" : "overflow-hidden";

  return (
    <>
      {/* Dark blurred background overlay for Fullscreen mode */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-[150] transition-opacity duration-300" 
          onClick={() => setIsFullscreen(false)}
        ></div>
      )}

      {/* The Main Container */}
      <div className={`flex flex-col transition-all duration-300 overflow-hidden ${
        isFullscreen 
          ? 'fixed inset-2 sm:inset-10 z-[200] rounded-2xl shadow-2xl border-2 ' + (isDark ? 'bg-slate-900 border-slate-600' : 'bg-white border-orange-300')
          : 'relative rounded-xl border shadow-lg h-full ' + (isDark ? 'border-slate-700 bg-slate-800/80' : 'border-orange-200/60 bg-white/70 backdrop-blur-sm shadow-orange-900/5')
      }`}>
        
        {/* Header Bar */}
        <div className={`flex flex-wrap items-center justify-between px-4 py-2 border-b ${isDark ? 'border-slate-700 bg-slate-900/50' : 'border-orange-200 bg-orange-50/50'}`}>
          <h4 className={`font-bold text-sm ${isDark ? 'text-slate-200' : 'text-stone-800'}`}>{title}</h4>
          
          <div className="flex gap-2 items-center mt-2 sm:mt-0">
            {/* Tabs */}
            <div className="flex gap-1 overflow-x-auto pb-1 sm:pb-0 scrollbar-hide">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                    activeTab === tab.id 
                      ? (isDark ? 'bg-blue-600 text-white' : 'bg-orange-500 text-white')
                      : (isDark ? 'text-slate-400 hover:bg-slate-700' : 'text-stone-500 hover:bg-orange-200/50')
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* FULLSCREEN TOGGLE BUTTON */}
            <button 
              onClick={() => setIsFullscreen(!isFullscreen)}
              className={`ml-2 p-1.5 rounded-md transition-all flex-shrink-0 flex items-center justify-center ${
                isDark 
                  ? 'bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white border border-slate-600 hover:border-blue-500' 
                  : 'bg-white hover:bg-orange-500 text-stone-600 hover:text-white border border-orange-300 hover:border-orange-500'
              }`}
              title={isFullscreen ? "Close Fullscreen" : "Open Large Screen"}
            >
              {isFullscreen ? (
                // Collapse Icon
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14h6v6M20 10h-6V4M10 14l-7 7M14 10l7-7"/></svg>
              ) : (
                // Expand Icon
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
              )}
            </button>

          </div>
        </div>

        {/* Code / iframe Area */}
        <div className={`${heightClass} w-full relative`}>
          {activeTab === 'result' && (
            <iframe scrolling={isGame || isFullscreen ? "auto" : "no"} srcDoc={srcDoc} title="Result" sandbox="allow-scripts" className={`w-full h-full bg-slate-50 ${scrollClass}`} />
          )}
          {activeTab === 'html' && (
            <textarea value={html} onChange={(e) => setHtml(e.target.value)} className={`w-full h-full p-4 font-mono text-sm resize-none focus:outline-none bg-slate-900 text-green-400 ${scrollClass}`} spellCheck="false" />
          )}
          {activeTab === 'css' && (
            <textarea value={css} onChange={(e) => setCss(e.target.value)} className={`w-full h-full p-4 font-mono text-sm resize-none focus:outline-none bg-slate-900 text-blue-300 ${scrollClass}`} spellCheck="false" />
          )}
          {activeTab === 'js' && (
            <textarea value={js} onChange={(e) => setJs(e.target.value)} className={`w-full h-full p-4 font-mono text-sm resize-none focus:outline-none bg-slate-900 text-yellow-300 ${scrollClass}`} spellCheck="false" />
          )}
        </div>
      </div>
    </>
  );
}

// --- 6. LIVE GAMES SECTION ---
function LiveGamesSection() {
  const { isDark, t } = useContext(AppContext);

  const games = [
    {
      title: "❌ Tic-Tac-Toe",
      html: `
<h2 id="status">Player X's turn</h2>
<div class="board" id="board">
  <div class="cell" data-index="0"></div><div class="cell" data-index="1"></div><div class="cell" data-index="2"></div>
  <div class="cell" data-index="3"></div><div class="cell" data-index="4"></div><div class="cell" data-index="5"></div>
  <div class="cell" data-index="6"></div><div class="cell" data-index="7"></div><div class="cell" data-index="8"></div>
</div>
<button class="btn" onclick="restart()">Restart Game</button>
      `,
      css: `
h2 { color: #333; margin-bottom: 10px; font-family: sans-serif;}
.board { display: grid; grid-template-columns: repeat(3, 60px); gap: 5px; margin-bottom: 15px; }
.cell { width: 60px; height: 60px; background: #fff; border: 2px solid #ccc; display: flex; justify-content: center; align-items: center; font-size: 2rem; font-weight: bold; cursor: pointer; border-radius: 8px; transition: 0.3s; }
.cell:hover { background: #f0f0f0; }
.win { background: #2ed573; color: white !important; text-decoration: line-through; border-color: #2ed573; }
.btn { padding: 8px 16px; background: #3742fa; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;}
      `,
      js: `
let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;
const status = document.getElementById("status");
const cells = document.querySelectorAll(".cell");

const winConditions = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ];

cells.forEach(cell => cell.addEventListener("click", (e) => {
  const index = e.target.getAttribute("data-index");
  if (board[index] !== "" || !gameActive) return;
  board[index] = currentPlayer;
  e.target.innerText = currentPlayer;
  e.target.style.color = currentPlayer === 'X' ? '#ff4757' : '#1e90ff';
  checkWin();
}));

function checkWin() {
  let roundWon = false;
  let winningCells = [];
  for (let condition of winConditions) {
    let [a, b, c] = condition;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      roundWon = true;
      winningCells = [a, b, c];
      break;
    }
  }
  if (roundWon) {
    status.innerText = \`Player \${currentPlayer} Wins!\`;
    winningCells.forEach(i => cells[i].classList.add("win"));
    gameActive = false;
    return;
  }
  if (!board.includes("")) {
    status.innerText = "It's a Draw!";
    gameActive = false;
    return;
  }
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  status.innerText = \`Player \${currentPlayer}'s turn\`;
}

function restart() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameActive = true;
  status.innerText = "Player X's turn";
  cells.forEach(cell => { cell.innerText = ""; cell.classList.remove("win"); });
}
      `
    },
    {
      title: "🎩 Shell Game (Predict)",
      html: `
<h2 id="msg">Find the red ball!</h2>
<div class="cups-container">
  <div class="shell" onclick="guess(0)">
    <div class="cup">🎩</div><div class="ball" id="b0">🔴</div>
  </div>
  <div class="shell" onclick="guess(1)">
    <div class="cup">🎩</div><div class="ball" id="b1">🔴</div>
  </div>
  <div class="shell" onclick="guess(2)">
    <div class="cup">🎩</div><div class="ball" id="b2">🔴</div>
  </div>
</div>
<button class="btn" onclick="restart()">Shuffle & Restart</button>
      `,
      css: `
h2 { color: #333; margin-bottom: 10px; font-family: sans-serif;}
.cups-container { display: flex; gap: 20px; margin-bottom: 20px; }
.shell { position: relative; width: 60px; height: 80px; cursor: pointer; text-align: center; }
.cup { font-size: 3rem; position: absolute; z-index: 2; transition: transform 0.4s ease; background: transparent; }
.ball { font-size: 1.5rem; position: absolute; bottom: 0; left: 18px; z-index: 1; display: none; }
.lift { transform: translateY(-40px); }
.btn { padding: 8px 16px; background: #ff4757; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;}

@keyframes scramble {
  0% { transform: translateX(0); }
  25% { transform: translateX(30px); }
  50% { transform: translateX(-30px); }
  75% { transform: translateX(15px); }
  100% { transform: translateX(0); }
}
.shuffling { animation: scramble 0.4s ease-in-out 3; }
      `,
      js: `
let ballIndex = Math.floor(Math.random() * 3);
let canPlay = true;
const msg = document.getElementById("msg");
const shells = document.querySelectorAll(".shell");

function guess(index) {
  if(!canPlay) return;
  canPlay = false;
  
  shells.forEach((shell, i) => {
    shell.querySelector('.cup').classList.add('lift');
    if(i === ballIndex) shell.querySelector('.ball').style.display = 'block';
  });

  if(index === ballIndex) {
    msg.innerText = "🎉 You Win! 🎉";
    msg.style.color = "#2ed573";
  } else {
    msg.innerText = "❌ You Lose! ❌";
    msg.style.color = "#ff4757";
  }
}

function restart() {
  canPlay = false;
  msg.innerText = "Shuffling...";
  msg.style.color = "#333";
  
  shells.forEach(shell => {
    shell.querySelector('.cup').classList.remove('lift');
    shell.querySelector('.ball').style.display = 'none';
    shell.classList.add('shuffling');
  });

  setTimeout(() => {
    shells.forEach(shell => shell.classList.remove('shuffling'));
    ballIndex = Math.floor(Math.random() * 3);
    canPlay = true;
    msg.innerText = "Find the red ball!";
  }, 1200);
}
      `
    },
    {
      title: "🐍 Snake & Fruit",
      html: `
<div class="game-header">
  <h3 id="score">Score: 0</h3>
  <div class="action-btns">
    <button id="playBtn" class="btn play-btn" onclick="togglePause()">Play</button>
    <button class="btn restart-btn" onclick="restart()">Restart</button>
  </div>
</div>
<canvas id="canvas" width="240" height="240"></canvas>
<div class="controls">
  <button onclick="setDir('UP')">⬆️</button>
  <div>
    <button onclick="setDir('LEFT')">⬅️</button>
    <button onclick="setDir('DOWN')">⬇️</button>
    <button onclick="setDir('RIGHT')">➡️</button>
  </div>
</div>
      `,
      css: `
.game-header { display: flex; justify-content: space-between; align-items: center; width: 240px; margin-bottom: 8px; }
h3 { margin: 0; font-family: monospace; color: #333; font-size: 1.1rem; }
.action-btns { display: flex; gap: 5px; }
canvas { background: #dff9fb; border: 2px solid #535c68; border-radius: 4px; display: block; margin-bottom: 10px; }
.controls { display: flex; flex-direction: column; align-items: center; margin-bottom: 5px; gap: 5px; }
.controls button { padding: 5px 10px; cursor: pointer; border: none; border-radius: 4px; background: #dfe6e9; font-size: 1.2rem;}
.controls button:active { background: #b2bec3; }
.btn { padding: 4px 10px; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: bold; font-size: 0.85rem; transition: 0.2s;}
.play-btn { background: #2ed573; }
.pause-btn { background: #f39c12; }
.restart-btn { background: #ff4757; }
      `,
      js: `
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const scoreEl = document.getElementById("score");
const playBtn = document.getElementById("playBtn");
let box = 15;
let snake = [{x: 8 * box, y: 8 * box}];
let d = "RIGHT";
let food = { x: Math.floor(Math.random() * 16) * box, y: Math.floor(Math.random() * 16) * box };
let score = 0;
let game = null;
let isPaused = true;
let isGameOver = false;

document.addEventListener("keydown", (e) => {
  if(e.keyCode == 37 && d != "RIGHT") d = "LEFT";
  if(e.keyCode == 38 && d != "DOWN") d = "UP";
  if(e.keyCode == 39 && d != "LEFT") d = "RIGHT";
  if(e.keyCode == 40 && d != "UP") d = "DOWN";
});

function setDir(newD) {
  if(newD == 'LEFT' && d != 'RIGHT') d = 'LEFT';
  if(newD == 'UP' && d != 'DOWN') d = 'UP';
  if(newD == 'RIGHT' && d != 'LEFT') d = 'RIGHT';
  if(newD == 'DOWN' && d != 'UP') d = 'DOWN';
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  for(let i = 0; i < snake.length; i++){
    ctx.fillStyle = (i == 0) ? "#27ae60" : "#2ecc71";
    ctx.fillRect(snake[i].x, snake[i].y, box, box);
    ctx.strokeStyle = "#fff";
    ctx.strokeRect(snake[i].x, snake[i].y, box, box);
  }

  ctx.fillStyle = "#e74c3c";
  ctx.fillRect(food.x, food.y, box, box);

  if(isPaused) return; // Stop movement calculations if paused

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if(d == "LEFT") snakeX -= box;
  if(d == "UP") snakeY -= box;
  if(d == "RIGHT") snakeX += box;
  if(d == "DOWN") snakeY += box;

  // WRAP-AROUND LOGIC (No Walls)
  if(snakeX < 0) snakeX = canvas.width - box;
  else if(snakeX >= canvas.width) snakeX = 0;
  
  if(snakeY < 0) snakeY = canvas.height - box;
  else if(snakeY >= canvas.height) snakeY = 0;

  if(snakeX == food.x && snakeY == food.y){
    score++;
    scoreEl.innerText = "Score: " + score;
    food = { x: Math.floor(Math.random() * 16) * box, y: Math.floor(Math.random() * 16) * box };
  } else {
    snake.pop();
  }

  let newHead = {x: snakeX, y: snakeY};

  // GAME OVER LOGIC (Self Collision)
  if(collision(newHead, snake)){
    clearInterval(game);
    isGameOver = true;
    playBtn.innerText = "Dead";
    playBtn.className = "btn";
    playBtn.style.background = "#576574";
    playBtn.disabled = true;
    scoreEl.innerText = "Score: " + score + " (Over)";
    return;
  }
  
  snake.unshift(newHead);
}

function collision(head, array){
  for(let i = 0; i < array.length; i++){
    if(head.x == array[i].x && head.y == array[i].y) return true;
  }
  return false;
}

function togglePause() {
  if (isGameOver) return;
  if (isPaused) {
    isPaused = false;
    playBtn.innerText = "Pause";
    playBtn.className = "btn pause-btn";
    game = setInterval(draw, 150);
  } else {
    isPaused = true;
    playBtn.innerText = "Play";
    playBtn.className = "btn play-btn";
    clearInterval(game);
  }
}

function restart() {
  clearInterval(game);
  snake = [{x: 8 * box, y: 8 * box}];
  score = 0;
  d = "RIGHT";
  scoreEl.innerText = "Score: 0";
  food = { x: Math.floor(Math.random() * 16) * box, y: Math.floor(Math.random() * 16) * box };
  isGameOver = false;
  isPaused = true;
  playBtn.innerText = "Play";
  playBtn.className = "btn play-btn";
  playBtn.style.background = ""; // reset inline style
  playBtn.disabled = false;
  draw(); // Draw the initial static frame
}

// Initial draw without starting the interval
draw();
window.setDir = setDir;
window.restart = restart;
window.togglePause = togglePause;
      `
    }
  ];

  return (
    <section id="games" className="py-16 md:py-20">
      <h3 className={`text-2xl sm:text-3xl font-bold mb-2 flex items-center gap-3 sm:gap-4 transition-colors duration-1000 ${isDark ? 'text-slate-100' : 'text-stone-800'}`}>
        🎮 {t('gamesTitle')}
      </h3>
      <p className={`mb-10 text-sm sm:text-base transition-colors duration-1000 ${isDark ? 'text-slate-400' : 'text-stone-600'}`}>
        {t('gamesDesc')}
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {games.map((game, i) => (
          <MiniCodePen 
            key={i} 
            title={game.title} 
            initialHtml={game.html} 
            initialCss={game.css} 
            initialJs={game.js} 
            isGame={true} /* <--- THIS KEEPS THE GAMES LARGE */
          />
        ))}
      </div>
    </section>
  );
}

// --- 7. LIVE PROJECTS SECTION (WITH LOAD MORE) ---
function LiveProjectsSection() {
  const { isDark, t } = useContext(AppContext);
  const [visibleCount, setVisibleCount] = useState(3);

  const miniProjects = [
    {
      title: "Hunter's Licence",
      html: `<div class="licence-card">
        <div class="card-inside-left"></div>
        <div class="card-inside-right">
        </div>
        <div class="bar">
            <div>|</div>
            <div>|</div>
            <div>|</div>
            <div>|</div>
            <div>|</div>
            <div>|</div>
            <div>|</div>
            <div>|</div>
            <div>|</div>
            <div>|</div>
            <div>|</div>
            <div>|</div>
            <div>|</div>
            <div>|</div>
            <div>|</div>
            <div>|</div>
            <div>|</div>
            <div>|</div>
        </div>
        <div class="heading">
            <p class="main">Hunter's Licence</p>
            <p class="sub">Hunter's Association</p>
        </div>
        <div class="profile">
            <div class="section-1">
                <!-- <div class="pic"><img src="player6.png" alt=""></div> -->
                <div class="pic">
                    <img src="https://raw.githubusercontent.com/Mr-Debi/codePen_Assets/refs/heads/main/Jin_Woo.png" alt="">
                </div>
                <div class="chip">
                    <div class="chip-line"></div>
                    <div class="chip-line"></div>
                    <div class="chip-line"></div>
                    <div class="chip-main"></div>
                </div>
            </div>
            <div class="section-2">
                <div class="licence-no">
                    <label for="licence-code">Licence No.:</label>
                    <p id="licence_no">401058132519</p>
                </div>

                <div  class="name">
                    <label for="name">Name:</label>
                    <p id="name">Sung Jinwoo</p>
                </div>

                <div class="rank">
                    <label for="rank">Rank:</label>
                    <p id="rank">S</p>
                </div>
                <div class="catagory">
                    <label for="power">Catagory:</label>
                    <table>
                        <tr>
                            <td>--</td>
                            <td>--</td>
                            <td>--</td>
                        </tr>
                        <tr>
                            <td>--</td>
                            <td>--</td>
                            <td>Mage</td>
                        </tr>
                        <tr>
                            <td>--</td>
                            <td>--</td>
                            <td>--</td>
                        </tr>
                    </table>
        
                </div>
            </div>
            
        </div>
        
    </div>`,
      css: `*{
    padding: 0;
    margin: 0;
}
body{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(45deg, #0045e7, #ff2c7d);
}

.licence-card{
    min-height: 250px;
    min-width: 400px;
    /* border: 1px solid red; */
    border-top: 30px solid gray;
    /* border-color: rgba(gray, 0.5); */
    border-bottom: 15px solid gray;
    border-right: 25px solid gray;
    border-radius: 2%;
    /* background: rgb(219, 222, 223); */
    background: rgba(219, 222, 223,1);
    backdrop-filter: blur(10px);
    /* border-left-color: rgb(219, 222, 223); */
    box-shadow: 40px 40px 30px 1px rgba(44, 44, 44, 0.70);
}

/* card left-side border start */
.card-inside-left{
    height: 165px;
    width: 0;
    border: 25px solid transparent;
    border-left: 25px solid gray;
    /* margin-left: 25px; */
    margin-top: 20px;
    overflow: hidden;
    position: absolute;
}
/* card left-side border end */


/* card right-side border start */
.card-inside-right{
    height: 125px;
    /* width: 0; */
    border: 25px solid transparent;
    border-right: 25px solid rgb(219, 222, 223);
    transform: rotate(180deg);
    margin-top: 35px;
    margin-left: 400px;
    display: grid;
    overflow: hidden;
    position: absolute;
}

/* card left-side border start */

/* card top heading start */
.heading{
    overflow: hidden;
    margin-top: -7%;
    margin-left: 5%;
}
/* for (1st) main heading */
.heading >.main{
    display: inline;
    font-size: larger;
    color: aliceblue;
    font-weight: 700;
    text-shadow: 5px 4px 5px black;
}
/* for (2nd) sub heading */
.heading >.sub{
    display: inline;
    margin-left: 20%;
    text-decoration: underline;
    font-size:smaller;
    color: aliceblue;
    font-weight: 500;
    text-shadow: 5px 1px 5px black;
}
/* card top heading end */

/* for profile start */
.profile{
    overflow: hidden;
    display: flex;
}

/* for section-1 start */
.profile>.section-1{
    margin: 5px;
}
.pic{
    height: 150px;
    width: 115px;
    /* background: rgb(44, 43, 43); */
    margin-top: 25px;
    margin-left: 35px;
    /* position: fixed; */
    /* box-shadow: 5px 4px 5px black;    */
    filter: drop-shadow(-15px 0px 15px rgba(0, 0, 0, .90));
    overflow: hidden;
}

.pic img{
    margin-left: -22px;
    width: 160px;
    height: auto;
}

/* for chip start */
.chip{
    overflow: hidden;
    height: 50px;
    width: 75px;
    background-image: linear-gradient(to bottom left, #ffecc7,gold, #d0b978);
    border-radius: 15%;
    margin-top: 15px;
    margin-left: 50px;
    box-shadow: 2px 2px 3px rgb(82, 61, 7);
}

.chip-line{
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 1px;
    background-color: #333;
    /* margin-bottom: 12px; */
    margin-top: 12px;
}
.chip-main{
    position: relative;
    margin-top: -33px;
    margin-left: 25px;
    width: 25px;
    height: 40px;
    border-left: 1px solid #333;
    border-right: 1px solid #333;
    border-radius: 30%;
    /* top: -60px; */
    /* transform: rotateY(90deg); */
    
    /* top: 20px; */
    background-image: linear-gradient(to bottom left, #ffecc7,gold, #d0b978);
}


/* for chip end */
/* for section-1 end */

/* for section-2 start */
.section-2{
    /* border: 1PX SOLID; */
    display: grid;
    margin-left: 5px;
    font-size:medium;
    color: rgb(87, 79, 79);
    font-weight: 700;
    text-shadow: 1px 0px 15px gray;
    height: max-content;
    width: 100%;
    
}

.section-2>.licence-no{
    margin-top: 30px;
    /* border: 1px solid; */
}
.section-2>.name{
    margin-top: 10px;
}
.section-2>.licence-no>p, .section-2>.name>p{
    margin-left: 10px;
    color: black;
    font-style: normal;
    text-shadow: none;
}
.section-2>.rank{
    z-index: 1;
    margin-left:60%;
    margin-top: -84px;
    display: initial;
}

.section-2>.rank>p{
    margin-left: 50px;
    font-size: xxx-large;
    text-shadow: none;
    margin-top: -25px;
    color: rgb(187, 26, 5);
    text-shadow: 5px 4px 5px black;
    font-family: serif;
    overflow: hidden;
}
.section-2>.catagory{
    margin-top: 10px;
}

.section-2>.catagory tr{
    width: fit-content;
}
.section-2>.catagory td{
    border: 1px solid gray;
    width: 70px;
    text-align: center;
    color: rgb(70, 56, 56);
    /* color: black; */
    /* filter: drop-shadow(4px 2px 0px rgba(0, 0, 0, 1)); */
    box-shadow: 0 0 1px 0 black;
    /* text-shadow: 5px 4px 20px black; */

}


/* for section-2 end */

/* for profile end */

/*.bar:nth-child(3){
    overflow: hidden;
    font-size:medium;
    color: gray;
    font-weight: 700;
}*/

/* barcode start*/
.bar{
    display: inline-flex;
    transform: rotate(90deg);
    font-weight: 600;
    font-size: x-large;
    margin-top: 100px;
    margin-left: 365px;
    width: fit-content;
    position: fixed;
}
.bar>div:nth-child(3){
    margin-right: -4px;

}
.bar>div:nth-child(7){
    margin-right: -4px;

}
.bar>div:nth-child(8){
    margin-right: -4px;

}
.bar>div:nth-child(18){
    margin-right: -4px;

}
.bar>div:nth-child(11){
    margin-right: -4px;

}
.bar>div:nth-child(16){
    margin-right: -4px;

}

      /* barcode end*/`,
      js: `// No JS needed for this CSS magic!`
    },
    // {
    //   title: "",
    //   html: ``,
    //   css: ``,
    //   js: `// No JS needed for this CSS magic!`
    // },
    {
      title: "Thor's Hammer Mjolnir",
      html: `<main class="hammer">
            <div class="hammer-head">
              <div class="cube">
                <div class="face front">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div class="face back">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div class="face right"></div>
                <div class="face left"></div>
                <div class="face top"></div>
                <div class="face bottom"></div>
              </div>		
            </div>
            <div class="handle">
              <div></div>
            </div>
          </main>`,
      css: `*{
            margin: 0;
            padding: 0;
            top: 0;
            bottom: 0;
            left: 0;
          }
          body{
            width: 100%;
            height: 100vh;
            align-items: center;
              justify-content: center;
              display: flex;
              background: #111;
          }
          .hammer{
            width: 400px;
            height: 600px;
            /*border: 1px solid white;*/
            align-items: center;
            justify-content: center;
            display: grid;
          }
          .hammer-head{
            width: 300px;
              height: 150px;
              perspective: 1000px;
          }
          .cube{
            width: 100%;
            height: 100%;
            position: relative;
              transform-style: preserve-3d;
              /*transform: rotateX(0deg) rotateY(0deg);*/
              animation: rotateCube 10s infinite linear;

          }
          .face{
            position: absolute;
            width: 260px;
            height: 110px;
            border: 20px solid gray;
            border-style: outset;
              background: darkgray;
              justify-content: center;
              align-items: center;
          }

          .face:nth-child(3){
            width: 160px;
              margin-left: 100px;
          }
          .face:nth-child(4){
            width: 160px;
              margin-right: 100px;
          }

          .front{
            display: flex;
            transform: rotateY(0deg) translateZ(100px);
          }
          .back{
            display: flex;
            transform: rotateY(180deg) translateZ(100px);
          }
          .right{
            transform: rotateY(90deg) translateZ(100px);
          }
          .left{
            transform: rotateY(-90deg) translateZ(100px);
          }
          .top{
            transform: rotateX(90deg) translateZ(100px);
              /* margin-top: 0px; */
              height: 160px;
          }
          .bottom{
            transform: rotateX(90deg) translateZ(100px);
              margin-top: 150px;
              height: 160px;
          }
          .front div, .back div{
            height: 60px;
              width: 25px;
              border: 5px double white;
              border-radius: 100%;
          }
          .front div:nth-child(1), .back div:nth-child(1){
            transform: rotateZ(60deg);
              margin-right: -20px;
              margin-top: 40px;
          }
          .front div:nth-child(2), .back div:nth-child(2){
            margin-top: -10px;
          }

          .front div:nth-child(3), .back div:nth-child(3){
            transform: rotateZ(-60deg);
              margin-left: -20px;
              margin-top: 40px;
          }

          @keyframes rotateCube{
            from{
              transform: rotateX(0deg) rotateY(0deg);
            }
            to{
              transform: rotateX(0deg) rotateY(360deg);
            }
          }
          .handle{
            height: 300px;
              width: 50px;
              background: brown;
              /* border-right: 4px solid navajowhite; */
              /* border-right: groove; */
              border-bottom-right-radius: 30%;
              border-bottom-left-radius: 30%;
              /* margin-left: 50%; */
              /* margin-right: 50%; */
              margin: auto;
              margin-top: -15%;
          }
          .handle div{
              height: 50px;
              width: 30px;
              background: black;
              border-radius: 100%;
              margin: auto;
              margin-top: 475%;
              border-right-style: groove;
              animation: rotateCube 10s infinite linear;
		      }`,
      js: `// No JS needed for this CSS magic!`
    },
    {
      title: "Responsive TubeLight Text",
      html: `<h2 contenteditable="true">HIRE ME</h2>`,
      css: `*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial;
}

body{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #08242c;
}

h2{
    position: relative;
    font-size: 4em;
    letter-spacing: 15px;
    color: #0f333d;
    text-transform: uppercase;
    width: 100%;
    text-align: center;
    -webkit-box-reflect: below 1px linear-gradient(transparent,#0f333d);
    line-height: 0.70em;
    outline: none;
    animation: animate 5s linear infinite;
}

@keyframes animate
{
    0%,18%,20%,50.1%,60%,65.1%,79%,90.1%,92%
    {
        color: #0e3742;
        text-shadow: none;
    }
    18.1%,20.1%,30%,50%,60.1%,65%,80.1%,90%,92.1%,100%
    {
        color: #fff;
        text-shadow: 0 0 10px #03bcf4,
                     0 0 20px #03bcf4,
                     0 0 40px #03bcf4,
                     0 0 80px #03bcf4,
                     0 0 160px #03bcf4;

    }

}`,
      js: `// No JS needed for this CSS magic!`
    },
    {
      title: "Cashel House",
      html: `<main class="cashel">
              <div class="home"> 
                <div class="main-cube">
          <!-- ground floor start -->
                  <div class="face front">
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div class="face back">
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div class="face right">
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div class="face left">
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div class="face top"></div>
                  <div class="face bottom"></div>
            <!-- 4sideface start -->
                  <div class="sideface cF">
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div class="sideface cB">
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div class="sideface cR">
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div class="sideface cL">
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
            <!-- 4sideface end -->

            <!-- 4side bar start -->
                  <div class="sidebar F">
                    <div id="pattern">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="pattern">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="pattern">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="pattern">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="pattern">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="pattern">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="pattern">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="pattern">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="pattern">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div class="sidebar B">
                    <div id="pattern">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="pattern">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="pattern">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="pattern">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="pattern">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="pattern">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="pattern">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="pattern">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="pattern">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div class="sidebar R">
                    <div id="pattern">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="pattern">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="pattern">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="pattern">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="pattern">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="pattern">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div class="sidebar L">
                    <div id="pattern">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="pattern">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="pattern">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="pattern">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="pattern">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="pattern">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
            <!-- 4side bar end -->
          <!-- ground floor end  -->

          <!-- 4corners start -->
                  <div class="front-left topface sidetop1">
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <!-- <div></div> -->
                    </div>	
                  </div>
                  <div class="left-left topface sidetop2">
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <!-- <div></div> -->
                    </div>
                  </div>

                  <div class="front-right topface sidetop1">
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <!-- <div></div> -->
                    </div>
                  </div>
                  <div class="right-left topface sidetop2">
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <!-- <div></div> -->
                    </div>
                  </div>

                  <div class="back-left topface sidetop1">
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <!-- <div></div> -->
                    </div>
                  </div>
                  <div class="left-right topface sidetop2">
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <!-- <div></div> -->
                    </div>
                  </div>

                  <div class="back-right topface sidetop1">
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <!-- <div></div> -->
                    </div>
                  </div>
                  <div class="right-right topface sidetop2">
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <!-- <div></div> -->
                    </div>
                  </div>
          <!-- 4corner end -->

          <!-- top floor start -->
                  <div class="topface frnt">
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div class="topface bak">
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div class="topface rit">
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div class="topface let">
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>

                  <div class="topface top1">
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div class="topface top2">
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div id="roof-top">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>

                  <div class="topface side-left">
                  </div>
                  <div class="topface side-right">
                  </div>

                  <div class="top-left-side-glass">
                    <div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div class="top-right-side-glass">
                    <div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
          <!-- top floor end -->

          <!-- chimni start -->
                  <div class="chimni ft">
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div></div>
                  <div class="chimni bk">
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div></div>
                  <div class="chimni rt">
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div></div>
                  <div class="chimni lf">
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div></div>

                  <div class="chimni up ch1">
                    <div class="vapper">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div class="chimni up ch2">
                    <div class="vapper">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div class="chimni up ch3">
                    <div class="vapper">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
          <!-- chimni end -->

          <!-- all dore & windows start -->
                  <div class="dore d1">
                    <div class="side1">
                      <div></div>
                      <div></div>
                      <div></div>	
                    </div>
                    <div class="side2">
                      <div></div>
                      <div></div>
                      <div></div>	
                    </div>				
                  </div>

                  <div class="window w1">
                    <div class="side1">
                      <div></div>
                      <div></div>
                      <!-- <div></div>	 -->
                    </div>
                    <div class="side2">
                      <div></div>
                      <div></div>
                      <!-- <div></div>	 -->
                    </div>				
                  </div>
                  <div class="window w2">
                    <div class="side1">
                      <div></div>
                      <div></div>
                      <!-- <div></div>	 -->
                    </div>
                    <div class="side2">
                      <div></div>
                      <div></div>
                      <!-- <div></div>	 -->
                    </div>				
                  </div>
                  <div class="window w3">
                    <div class="side1">
                      <div></div>
                      <div></div>
                      <!-- <div></div>	 -->
                    </div>
                    <div class="side2">
                      <div></div>
                      <div></div>
                      <!-- <div></div>	 -->
                    </div>				
                  </div>
                  <div class="window w4">
                    <div class="side1">
                      <div></div>
                      <div></div>
                      <!-- <div></div>	 -->
                    </div>
                    <div class="side2">
                      <div></div>
                      <div></div>
                      <!-- <div></div>	 -->
                    </div>				
                  </div>
                  <div class="window w5">
                    <div class="side1">
                      <div></div>
                      <div></div>
                      <!-- <div></div>	 -->
                    </div>
                    <div class="side2">
                      <div></div>
                      <div></div>
                      <!-- <div></div>	 -->
                    </div>				
                  </div>
                  <div class="window w6">
                    <div class="side1">
                      <div></div>
                      <div></div>
                      <!-- <div></div>	 -->
                    </div>
                    <div class="side2">
                      <div></div>
                      <div></div>
                      <!-- <div></div>	 -->
                    </div>				
                  </div>

                  <div class="dore Td1">
                    <div class="side1">
                      <div></div>
                      <div></div>
                      <div></div>	
                    </div>
                    <div class="side2">
                      <div></div>
                      <div></div>
                      <div></div>	
                    </div>				
                  </div>
                  <div class="window Tw1">
                    <div class="side1">
                      <div></div>
                      <div></div>
                      <!-- <div></div>	 -->
                    </div>
                    <div class="side2">
                      <div></div>
                      <div></div>
                      <!-- <div></div>	 -->
                    </div>				
                  </div>
                  <div class="window Tw2">
                    <div class="side1">
                      <div></div>
                      <div></div>
                      <!-- <div></div>	 -->
                    </div>
                    <div class="side2">
                      <div></div>
                      <div></div>
                      <!-- <div></div>	 -->
                    </div>				
                  </div>
                  <div class="window Tw3">
                    <div class="side1">
                      <div></div>
                      <div></div>
                      <!-- <div></div>	 -->
                    </div>
                    <div class="side2">
                      <div></div>
                      <div></div>
                      <!-- <div></div>	 -->
                    </div>				
                  </div>
                  <div class="window Tw4">
                    <div class="side1">
                      <div></div>
                      <div></div>
                      <!-- <div></div>	 -->
                    </div>
                    <div class="side2">
                      <div></div>
                      <div></div>
                      <!-- <div></div>	 -->
                    </div>				
                  </div>
                  <div class="window Tw5">
                    <div class="side1">
                      <div></div>
                      <div></div>
                      <!-- <div></div>	 -->
                    </div>
                    <div class="side2">
                      <div></div>
                      <div></div>
                      <!-- <div></div>	 -->
                    </div>				
                  </div>
                  <div class="window Tw6">
                    <div class="side1">
                      <div></div>
                      <div></div>
                      <!-- <div></div>	 -->
                    </div>
                    <div class="side2">
                      <div></div>
                      <div></div>
                      <!-- <div></div>	 -->
                    </div>				
                  </div>
          <!-- all dore & windows end -->
                </div>
              </div>				
            </main>`,
      css: `*{
              margin: 0;
              padding: 0;
              top: 0;
              bottom: 0;
              left: 0;
            }
            body{
              height: 100vh;
              width: 100%;
              // display: grid;
              justify-content: center;
              align-items: center;
              background: black;
            }
            .cashel{
              width: 600px;
              height: 700px;
              align-items: center;
              justify-content: center;
              display: grid;
              transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            }
            .home{
              width: 400px;
                height: 50px;
                perspective: 1000px;
            }
            .main-cube{
              width: 100%;
              height: 100%;
              margin-top: 40%;
                margin-left: 11.5%;
              position: relative;
                transform-style: preserve-3d;
                /*transform: rotateX(0deg) rotateY(136deg) rotateZ(0deg);*/
                /*transform: rotateX(-23deg) rotateY(100deg) rotateZ(-49deg);*/
                animation: rotateCube 10s infinite linear;
            }
            .face{
              width: 300px;
              height: 150px;
            }
            
            .face, .topface, .chimni, .sideface, .sidebar{
              position: absolute;
              border-style: outset;
                background: darkgray;
                justify-content: center;
                overflow: hidden;
            }

            .front{
              display: flex;
                transform: rotateY(0deg) translateZ(82px);
            }
            .back{
              display: flex;
                transform: rotateY(180deg) translateZ(82px);
            }
            .right{
              width: 160px;
                margin-left: 100px;
                transform: rotateY(90deg) translateZ(122px);
            }
            .left{
              width: 160px;
                margin-right: 100px;
                transform: rotateY(-90deg) translateZ(82px);
            }
            .top{
                transform: rotateX(90deg) translateZ(114px);
                margin-left: -20px;
                height: 220px;
                width: 340px;
            }
            .bottom{
                transform: rotateX(90deg) translateZ(78px);
                margin-top: 150px;
                height: 160px;
            }

            .sidebar{
              height: 50px;
              width: 340px;
                margin-top: -53px;
                background: transparent;
                border-color: black;
                display: flex;
                  justify-content: space-between;

            }
            #pattern{
              display: grid;
            }

            .sidebar #pattern div{
                height: 10px;
                width: 32px;
                background: linear-gradient(-13deg, white -100%, transparent, white 173%);
                border: 1px solid white;
                margin: 1px;
            }

            .F{
              display: flex;
                transform: rotateY(0deg) translateZ(111px) translateX(-18px);
            }
            .B{
              display: flex;
                transform: rotateY(180deg) translateZ(111px) translateX(17px);
            }
            .R{
              width: 220px;
                margin-left: 100px;
                transform: rotateY(90deg) translateZ(113px);
            }
            .L{
              width: 220px;
                margin-right: 100px;
                transform: rotateY(-90deg) translateZ(128px);
            }

            .frnt{
              display: flex;
                width: 250px;
                height: 130px;
                margin-left: 27px;
                margin-top: -135px;
                transform: rotateY(0deg) translateZ(55px);
            }
            .bak{
                display: flex;
                width: 250px;
                height: 130px;
                margin-left: 27px;
                margin-top: -135px;
                transform: rotateY(180deg) translateZ(83px);
            }
            .rit{
                width: 135px;
                height: 130px;
                margin-left: 7px;
                margin-top: -135px;
                transform: rotateY(90deg) translateZ(204px) translateX(14px);
            }
            .let{
                width: 135px;
                height: 130px;
                margin-left: 7px;
                margin-top: -135px;
                transform: rotateY(-90deg) translateZ(49px) translateX(-14px);
            }

            .side-left, .side-right{
                  margin-left: 7px;
                margin-top: -135px;
                background: transparent;
                border-left: 70px solid transparent;
                border-right: 70px solid transparent;
                border-bottom: 70px solid gray;
                border-style: groove;
                border-top-style: none;
                overflow: hidden;
            }
            .side-left{
              transform: rotateY(-90deg) translateZ(49px) translateY(-185px) translateX(-14px);
            }
            .side-right{
                transform: rotateY(-90deg) translateZ(-202px) translateY(-185px) translateX(-14px);
            }

            .top1, .top2{
                width: 290px;
                height: 120px;
                margin-left: 7px;
                margin-top: -210px;
                background: linear-gradient(52deg,gray,saddlebrown,lightgray);
                display: flex;
                justify-content: space-between;
                border-bottom: none;
                border-top-color: transparent;
                overflow: visible;
                  border-bottom-left-radius: 10px;
                border-bottom-right-radius: 10px;
            }
            .top1{
                transform: translateZ(42px) rotateX(45deg) translateY(-20px);
            }
            .top2{
                transform: translateZ(-70px) rotateX(-45deg) translateY(-20px);
            }
            @keyframes rotateCube{
              from{
                transform: rotateX(0deg) rotateY(0deg);
              }
              to{
                transform: rotateX(0deg) rotateY(360deg);
              }
            }
            .face div div, .topface div div, .chimni div div{
              height: 13px;
              width: 26px;
              border: 1px solid dimgray;
                border-collapse: separate;
                background: bisque;
                background: linear-gradient(403deg,gray -473%,saddlebrown,transparent);
                filter: drop-shadow(2px 1px 2px black);
            }
            .face div div:nth-child(odd), .topface div div:nth-child(odd), .chimni div div:nth-child(odd){
              width: 41px;
                filter: drop-shadow(61px -1px 4px black);
            }
            .left, .right, .let, .rit, .lf, .rt{
              display: flex;
            }
            #roof-top div, #roof-top div{
              height: 10px;
                width: 13px;
                border: 1px solid dimgray;
                background: linear-gradient(64deg,gray -29%,saddlebrown,black);
                  filter: drop-shadow(2px 6px 3px black);
            }
            #roof-top div:last-child{
              border-bottom-left-radius: 25px;
                border-bottom-right-radius: 25px;
            }
            .chimni{
              height: 80px;
              width: 40px;
              border-top: 5px solid black;
            }

            .ft{
              display: flex;
                    margin-left: 27px;
                margin-top: -240px;
                transform: rotateY(0deg) translateZ(-34px) translateX(23px);
            }
            .bk{
                display: flex;
                  margin-left: 27px;
                margin-top: -240px;
                transform: rotateY(180deg) translateZ(65px) translateX(-23px);
            }
            .rt{
                width: 29px;
                margin-left: 7px;
                margin-top: -240px;
                transform: rotateY(90deg) translateZ(70px) translateX(50px);
            }
            .lf{
                  width: 29px;
                margin-left: 7px;
                margin-top: -240px;
                transform: rotateY(-90deg) translateZ(-28px) translateX(-50px);
            }

            .up{
                width: 30px;
                height: 30px;
                margin-left: 7px;
                margin-top: -240px;
              
                border: none;
                display: flex;
                background: transparent;
                overflow: visible;
            }
            .ch1{
              transform: rotateX(0deg) translateZ(-50px) translateX(55px) translateY(-70px);
            }
            .ch2{
              transform: rotateY(140deg) translateZ(70px) translateX(-10px) translateY(-36px);
            }
            .ch3{
              transform: rotateY(45deg) translateZ(7px) translateX(75px) translateY(-70px);
            }
            .up .vapper{
                display: flex;
                width: 0px;
                justify-content: space-evenly;
                position: relative;
                filter: blur(13px);
            }
            .up .vapper div{
              width: 5px;
                height: 37px;
                background: black;
                border: 1px solid transparent;
                filter: drop-shadow(0px 22px 10px whitesmoke);
                animation: up 4s linear infinite;
            }
            .up .vapper div:nth-child(odd){
              margin-top: 45px;
                filter: drop-shadow(3px -43px 12px white);
            }
            .up .vapper div:nth-child(4), .up .vapper div:nth-child(7){
              margin-top: 45px;
                filter: drop-shadow(-13px 65px 100px black);
            }
            .up .vapper div:nth-child(odd), .up .vapper div:nth-child(4), .up .vapper div:nth-child(7){
              animation: up 3s linear infinite;
            }
            @keyframes up{
              0% {
                  transform: translateY(0px);
              }
              25% {
                  transform: translateY(-10px);
              }
              50% {
                  transform: translateY(-20px);
              }
              75% {
                  transform: translateY(-35px);
              }
              100% {
                  transform: translateY(-40px);
              }
            }
            .top-left-side-glass, .top-right-side-glass{
              height: 20px;
              width: 20px;
              border: 3px double white;
              border-radius: 50%;
              display: flex;
                background: #2d195f;			
              overflow: hidden;
            }
            .top-left-side-glass{
              transform: rotateY(-90deg) translateZ(-14px) translateY(-183px) translateX(-13px);
            }

            .top-right-side-glass{
              transform: rotateY(-90deg) translateZ(-267px) translateY(-209px) translateX(-14px);
            }

            .top-left-side-glass div, .top-right-side-glass div{
              height: auto;
              width: 50%;
              display: grid;
              border: 1px solid white;
              margin: -1px;

            }
            .top-left-side-glass div div, .top-right-side-glass div div{
              width: 100%;
                background-color: rgba(255, 255, 255, .15);

            }
            /*.face, .topface{
              background: transparent;
            } */

            .sideface{
              width: 342px;
              height: 30px;
              background: linear-gradient(52deg,gray,saddlebrown,lightgray);
                display: flex;
                justify-content: space-between;
                /*border: none;*/
                overflow: visible;
                  border-bottom-left-radius: 10px;
                border-bottom-right-radius: 10px;
            }
            .sideface #roof-top div, .sideface #roof-top div{
              height: 10px;
                width: 13px;
            }
            .cF{
              display: flex;
              transform: rotateY(0deg) rotateX(45deg) translateX(-18px) translateY(83px) translateZ(92px);
            }
            .cB{
              display: flex;
                transform: rotateY(180deg) rotateX(45deg) translateX(18px) translateY(83px) translateZ(92px);
            }
            .cR{
              width: 225px;
              margin-left: 100px;
              transform: rotateY(90deg) rotateX(45deg) translateX(0px) translateY(82px) translateZ(91px);
            }
            .cL{
              width: 225px;
              transform: rotateY(-90deg) rotateX(45deg) translateX(0px) translateY(96px) translateZ(105px);
            }

            
            .sidetop1, .sidetop2{
                  width: 33px;
                height: fit-content;
                margin-left: 7px;
                background: linear-gradient(52deg,gray,saddlebrown,lightgray);
                display: flex;
                justify-content: space-between;
                border: none;
                border-top-style: groove;
                overflow: visible;
                border-bottom-left-radius: 10px;
                border-bottom-right-radius: 100%;
                margin-top: -15px;
            }
            .front-left{
              transform: translateX(-40px) translateY(8px) translateZ(130px) rotateY(60deg) rotateX(40deg);
            }
            .left-left{
              transform: translateX(-60px) translateY(8px) translateZ(120px) rotateY(60deg) rotateX(-40deg);
            }
            .front-right{
              transform: translateX(320px) translateY(8px) translateZ(120px) rotateY(120deg) rotateX(40deg);
            }
            .right-left{
              transform: translateX(300px) translateY(8px) translateZ(130px) rotateY(120deg) rotateX(-40deg);
            }
            .back-left{
              transform: translateX(-60px) translateY(8px) translateZ(-120px) rotateY(-60deg) rotateX(40deg);
            }
            .left-right{
              transform: translateX(-40px) translateY(8px) translateZ(-130px) rotateY(-60deg) rotateX(-40deg);
            }
            .back-right{
              transform: translateX(300px) translateY(8px) translateZ(-130px) rotateY(-120deg) rotateX(40deg);
            }
            .right-right{
              transform: translateX(320px) translateY(8px) translateZ(-120px) rotateY(-120deg) rotateX(-40deg);
            }

            .dore, .window{
              height: fit-content;
              width: fit-content;
              display: flex;

                /*background: linear-gradient(-13deg, blue -100%, transparent, blue 173%);*/
                background: linear-gradient(42deg, black -44%, transparent, darkgray 430%);
            }
            .dore{
                border: 4px solid brown;
                border-top-right-radius: 34px;
                border-top-left-radius: 34px;
                border-bottom: none;
            }
            .dore div div{
              height: 30px;
              width: 30px;
              background: linear-gradient(-13deg, white -100%, transparent, white 173%);
              border: 1px double black;
            }
            .dore .side1 div:nth-child(1){
              border-top-left-radius: 30px;
            }
            .dore .side2 div:nth-child(1){
              border-top-right-radius: 30px;
            }

            .window{
                border: 2px solid brown;
                border-top-right-radius: 22px;
                border-top-left-radius: 22px;
            }
            .window div div{
              height: 30px;
              width: 20px;
              background: linear-gradient(-13deg, white -100%, transparent, white 173%);
              border: 1px double black;
            }
            .window .side1 div:nth-child(1){
              border-top-left-radius: 20px;
            }
            .window .side2 div:nth-child(1){
              border-top-right-radius: 20px;
            }

            .d1{
              transform: rotateY(0deg) translateZ(82px) translateX(115px);
            }
            .w1{
              transform: rotateY(0deg) translateZ(82px) translateY(-110px) translateX(35px);
            }
            .w2{
              transform:rotateY(0deg) translateZ(82px) translateY(-180px) translateX(220px);
            }
            .w3{
                margin-left: 200px;
                transform: rotateY(90deg) translateZ(82px) translateX(0px) translateY(-252px);
            }
            .w4{
              transform: rotateY(180deg) translateZ(82px) translateY(-320px) translateX(-215px);
            }
            .w5{
              transform: rotateY(180deg) translateZ(82px) translateY(-390px) translateX(-50px);
            }
            .w6{
                transform: rotateY(90deg) translateZ(-23px) translateX(0px) translateY(-460px);
            }

            .Td1{
              margin-top: -645px;
              transform: rotateY(0deg) translateZ(55px) translateX(115px);
            }
            .Tw1{
              transform: rotateY(0deg) translateZ(55px) translateY(-115px) translateX(45px);
            }
            .Tw2{
              transform:rotateY(0deg) translateZ(55px) translateY(-180px) translateX(210px);
            }
            .Tw3{
                margin-left: 200px;
                transform: rotateY(90deg) translateZ(58px) translateX(15px) translateY(-248px);
            }
            .Tw4{
              transform: rotateY(180deg) translateZ(83px) translateY(-316px) translateX(-200px);
            }
            .Tw5{
              transform: rotateY(180deg) translateZ(83px) translateY(-380px) translateX(-65px);
            }
            .Tw6{
                transform: rotateY(90deg) translateZ(4px) translateX(10px) translateY(-446px);
            }`,
      js: `// No JS needed for this CSS magic!`
    },
    {
      title: "Rocket",
      html: `<main>
              <div class="top"></div>

              <div class="middle">
                
              </div>

              <div class="line">
                
              </div>

              <div class="bottom">
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div class="borner"></div>

              <div class="flame">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <!-- <div class="flame2">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div> -->
            </main>`,
      css: `*{
              margin: 0;
              padding: 0;
              top: 0;
              bottom: 0;
              left: 0;
            }
            body{
              width: 100%;
              height: 100vh;
              /* background: linear-gradient(158deg, #011b11,#221717,black,#063406,#06060d,#1f1414); */
              background: rgb(7, 2, 22);
              background-repeat: no-repeat;
              display: inline-grid;
              align-items: center;
              justify-content: center;
            }
            /**/
            body::-webkit-scrollbar {
                display: none;
            }
            @keyframes go{
              0%{
                margin-bottom: -60%;
              }
              25%{
                margin-bottom: -40%;
              }
              50%{
                margin-bottom: -25%;
              }
              75%{
                margin-bottom: -10%;
              }
              100%{
                margin-bottom: 0%;
              }
            }
            /**/
            main{
                /* align-items: center; */
                /* justify-content: center; */
                z-index: 1;
                margin-left: 50%;
                margin-top: -10%;
                height: auto;
                display: grid;
                width: 500px;
                overflow: visible;
                animation: go 10s linear 1;
                zoom: 20%;
            }
            .top, .middle{
              height: 100px;
              width: 100px;
              display: flex;
            }

            .top{
              background: red;
              border: 1px solid red;
              height: 500px;
              border-top-left-radius: 50%;
              border-top-right-radius: 50%;
              overflow: hidden;
            }
            .line{
              border-left: 6px solid white;
                height: 600px;
                width: 100px;
                border-top-left-radius: 50%;
                border-top-right-radius: 50%;
                overflow: hidden;
                margin-top: -680px;
                margin-left: 14px;
                filter: blur(4px);
                position: initial;
            }
            .middle{
              height: 500px;
              border: 1px solid silver;
              background: silver;
              margin-top: -300px;
              border-bottom: none;

            }
            .bottom{
              border: 1px solid silver;
              border-top: none;
              background: silver;
              width: 100px;
              height: 100px;
            }
            .bottom div{
              width: 100px;
              height: 150px;
            }
            .bottom div:nth-child(1){
              height: 50px;
                border: 100px solid transparent;
                border-left: 50px solid gray;
                transform: rotateZ(180deg);
                margin-left: -251px;
                margin-top: -150px;
            }
            .bottom div:nth-child(2){
              height: 50px;
                border: 100px solid transparent;
                border-left: 50px solid gray;
                transform: rotateZ(0deg);
                margin-left: 101px;
                margin-top: -250px;
            }
            .bottom div:nth-child(3){
              height: 50px;
                border: 100px solid transparent;
                border-left: 50px solid gray;
                transform: rotateY(-70deg);
                margin-left: -29px;
                margin-top: -245px;
            }
            .borner{
              width: 100px;
                height: 50px;
                border: 100px solid transparent;
                border-bottom: 60px solid black;
                transform: rotateY(-70deg);
                margin-left: -98px;
                margin-top: -150px;
                z-index: 10;
            }
            .flame{
                display: flex;
                justify-content: space-between;
                width: 100px;
                height: 20px;
                background: yellow;
                filter: blur(20px);
            }
            .flame div{
              width: 10px;
              height: 50px;
              background: yellow;
              filter: blur(20px);
            }
            @keyframes up{
              0%  { 
                transform: translateY(0px);
              }
              25%  { 
                transform: translateY(25px);
              }
              50%  { 
                transform: translateY(50px);
              }
              75%  { 
                transform: translateY(75px);
              }
              100%  { transform: translateY(100px);

              }
            }
            .flame div:nth-child(1){
              animation: up 1s linear infinite;
              filter: drop-shadow(6px 47px 6px orange);

            }
            .flame div:nth-child(2){
              animation: up 5s linear infinite;
            }
            .flame div:nth-child(3){
              animation: up 8s linear infinite;
              filter: drop-shadow(6px 47px 6px red);

            }
            .flame div:nth-child(4){
              animation: up 8s linear infinite;
              filter: drop-shadow(6px 47px 6px yellow);

            }
            .flame div:nth-child(5){
              animation: up 3s linear infinite;
              filter: drop-shadow(6px 47px 6px orange);

            }
            .flame div:nth-child(6){
              animation: up 1s linear infinite;
              filter: drop-shadow(6px 47px 6px yellow);
            }
            .flame div:nth-child(7){
              animation: up 2s linear infinite;
              filter: drop-shadow(6px 47px 6px red);
            }`,
      js: `// No JS needed for this CSS magic!`
    },
    {
      title: "Liquid Drop",
      html: `<div id="liquid_drop">
        <div class="container">
            <div class="drop" style="--clr:#ff0f5b;">
                <div class="content">
                    <h2 id="h2">01</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <a href="#">Read More</a>
                </div>
            </div>
            <div class="drop" style="--clr:#be01fe;">
                <div class="content">
                    <h2 id="h2">02</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <a href="#">Read More</a>
                </div>
            </div>
            <div class="drop" style="--clr:#01b4ff;">
                <div class="content">
                    <h2 id="h2">03</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <a href="#">Read More</a>
                </div>
            </div>
            
        </div>

    </div>`,
      css: `
          *{
              margin: 0;
              padding: 0;
          }
          /* body */
          #liquid_drop{
              display: flex;
              font-family:sans-serif;
              justify-content: center;
              align-items: center;
              
              min-height: 100vh;
              margin: 2% 5%;
              
              /* extra */
              /* background-color: blue; */
          }

          #liquid_drop >.container{
              position: relative;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-wrap: wrap;
              padding: 50px 0;
              gap: 40px 60px;
              
              /* extra */
              /* background-color: brown; */
              /* border: 2px solid; */
          }

          .container .drop{
              position: relative;
              width: 250px;
              height: 250px;
              /* background: transparent; */
              box-shadow: inset 60px 30px 30px rgba(0,0,0,0.05),
              25px 25px 30px rgba(0,0,0,0.08),
              25px 20px 35px rgba(0,0,0,0.09),
              inset -20px -20px 25px rgba(255, 255, 255, 0.9);
              transition: 0.5s ease-in-out;
              display: flex;
              justify-content:center;
              align-items: center;
          }

          .container .drop:nth-child(1){
              border-radius: 60% 40% 51% 49% / 41% 40% 60% 59% ;
              animation-name: anime_1;
              animation-duration: 10s;
              animation-delay: 1s;
              animation-iteration-count:infinite;
              animation-direction: alternate;

          }
          @keyframes anime_1{
              25%{ border-radius: 63% 37% 21% 79% / 66% 58% 42% 34% ;}
              50%{ border-radius: 33% 67% 85% 15% / 50% 32% 68% 50% ;}
              75%{ border-radius: 66% 34% 17% 83% / 35% 70% 30% 65% ;}
              100%{ border-radius: 23% 77% 60% 40% / 26% 44% 56% 74% ;}
          }
          .container .drop:nth-child(2){
              border-radius: 36% 64% 33% 67% / 63% 55% 45% 37% ;
              animation-name: anime_2;
              animation-duration: 10s;
              animation-delay: 1s;
              animation-iteration-count:infinite;
              animation-direction: alternate;


          }
          @keyframes anime_2{
              25%{ border-radius: 32% 68% 53% 47% / 42% 16% 84% 58%   ;}
              50%{ border-radius: 16% 84% 16% 84% / 24% 60% 40% 76%  ;}
              75%{ border-radius: 23% 77% 25% 75% / 80% 16% 84% 20%  ;}
              100%{ border-radius: 33% 67% 85% 15% / 50% 32% 68% 50% ;}
          }

          .container .drop:nth-child(3){
              border-radius: 32% 68% 76% 24% / 47% 41% 59% 53%  ;
              animation-name: anime_3;
              animation-duration: 10s;
              animation-delay: 1s;
              animation-iteration-count:infinite;
              animation-direction: alternate;


          }
          @keyframes anime_3{
              25%{ border-radius: 32% 68% 53% 47% / 89% 70% 30% 11%  ;}
              50%{ border-radius: 76% 24% 53% 47% / 36% 59% 41% 64% }
              75%{ border-radius: 63% 37% 21% 79% / 66% 58% 42% 34% ;}
              100%{ border-radius: 33% 67% 85% 15% / 50% 32% 68% 50% ;}
          }


          .container .drop:hover{
              animation-play-state: paused;
              cursor: pointer;
              /* border-radius: 50%; */

          }

          .container .drop::before{
              content: '';
              position: absolute;
              top: 40px;
              left: 35px;
              width: 25px;
              height: 25px;
              background: #fff;
              border-radius: 50%;
              opacity: 0.9;
          }
          .container .drop::after{
              content: '';
              position: absolute;
              top: 70px;
              left: 55px;
              width: 10px;
              height: 10px;
              background: #fff;
              border-radius: 50%;
              opacity: 0.9;
          }

          .container .drop .content{
              position:relative;
              display: grid;
              justify-content: center;
              align-items: center;
              text-align: center;
              padding: 40px;
              gap: 15px;
          }

          .container .drop .content> #h2{
              position: relative ;
              justify-content: center;
              left: 30%;
              text-align: center;
              align-items: center;
              width: 50px;
              height: 50px;
              background: #eff0f4;
              border-radius: 50%;
              box-shadow: inset 2px 5px 10px rgba(0,0,0,0.1),
              15px 15px 10px rgba(0,0,0,0.05),
              15px 10px 15px rgba(0,0,0,0.025),
              inset -2px -5px 10px rgba(255, 255, 255, 1);
              display: flex;
              font-size: 1.3em;
              color: var(--clr);
          }

          .container .drop .content a{
              
              position: relative;
              padding: 10px 20px;
              border: 1px solid;
              background: var(--clr);
              color: #fff;
              text-decoration: none;
              border-radius: 25px;
              font-weight: 500;
              width:fit-content;
              align-items: center;
              text-align: center;
              justify-content: center;
              left: 15%;
              right: auto;
              text-shadow: 0 2px 2px rgba(0 ,0 ,0 ,0 ,0.25);
              opacity: 0.75;
              transition: 0.5s;

          }
          .container .drop .content a:hover{
              opacity: 1;
          }
          .container .drop .content a::before{
              content: '';
              position: absolute;
              top: 2px;
              width: 65%;
              height: 3px;
              background: rgba(255, 255, 255, 0.5);
              border-radius: 5px;
          }`,
      js: `// No JS needed for this CSS magic!`
    },
    {
      title: "Hot Coffee",
      html: `<div class="container">
        <div class="plate"></div>
        <div class="cup">
              <div class="top">
                  <div class="vapour">
                      <span style="--i:1"></span>
                      <span style="--i:16"></span>
                      <span style="--i:2"></span>
                      <span style="--i:4"></span>
                      <span style="--i:11"></span>
                      <span style="--i:6"></span>
                      <span style="--i:14"></span>
                      <span style="--i:8"></span>
                      <span style="--i:9"></span>
                      <span style="--i:18"></span>
                      <span style="--i:19"></span>
                      <span style="--i:10"></span>
                      <span style="--i:5"></span>
                      <span style="--i:12"></span>
                      <span style="--i:13"></span>
                      <span style="--i:7"></span>
                      <span style="--i:15"></span>
                      <span style="--i:3"></span>
                      <span style="--i:17"></span>
                      <span style="--i:20"></span>
                  </div>
                  <div class="circle">
                      <div class="coffee">
                      </div>
                  </div>
              </div>
            <div class="handle"></div>
        </div>
    </div>`,
      css: `*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(45deg,red,gold);
}

.container{
    position: relative;
    top: 50px;
}

.cup{
    position: relative;
    width: 280px;
    height: 290px;
    background: linear-gradient(to right,#f9f9f9,#d9d9d9);
    border-bottom-left-radius: 45%;
    border-bottom-right-radius: 45%;
    /* border-image: url(images/King_DD.png); */

}

.top{
    position: absolute;
    top: -30px;
    left: 0;
    width: 100%;
    height: 60px;
    background: linear-gradient(to right,#f9f9f9,#d9d9d9);
    border-radius: 50%;
}

.circle{
    position: absolute;
    top: 5px;
    left: 10px;
    width: calc(100% - 20px);
    height: 50px;
    background: linear-gradient(to left,#f9f9f9,#d9d9d9);
    border-radius: 50%;
    overflow: hidden;
}

.coffee
{
    position: absolute;
    top: 15px;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#c57e65,#e28462);
    border-radius: 50%;
}

.handle
{
    position: absolute;
    right: -70px;
    top: 30px;
    width: 150px;
    height: 170px;
    border: 25px solid #d9d9d9;
    border-left: 25px solid transparent;
    border-bottom: 25px solid transparent;
    border-radius: 50%;
    transform: rotate(40deg);
}

.plate{
    position: absolute;
    bottom: -50px;
    left: 50%;
    transform: translateX(-50%);
    width: 500px;
    height: 200px;
    background: linear-gradient(to right,#f9f9f9,#d9d9d9);
    border-radius: 50%;
    box-shadow: 0 35px 35px rgba(0,0,0,0.5);

}

.plate::before
{
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    border-radius: 50%;
    background: linear-gradient(to left,#f9f9f9,#d9d9d9);

}

.plate::after
{
    content: '';
    position: absolute;
    top: 30px;
    left: 30px;
    right: 30px;
    bottom: 30px;
    border-radius: 50%;
    background: radial-gradient(rgba(0,0,0,0.3)25%,transparent,transparent);
}

.vapour{
    position: relative;
    display: flex;
    z-index: 1;
    padding: 0 20px;
}

.vapour span{
    position: relative;
    bottom: 50px;
    display: block;
    margin: 0 2px 50px;
    min-width: 8px;
    height: 120px;
    background: #fff;
    border-radius: 50%;
    animation: animate 5s linear infinite;
    opacity: 0;
    filter: blur(8px);
    animation-delay: calc(var(--i) * -0.5s);
}

@keyframes animate
{
    0%
    {
        transform: translateY(0) scaleX(1);
        opacity: 0;
    }
    15%
    {
        opacity: 1;
    }
    50%
    {
        transform: translateY(-150px) scaleX(5);
    }
    100%
    {
        transform: translateY(-300px) scaleX(10);
    }
}`,
      js: `// No JS needed for this CSS magic!`
    },
    {
      title: "Firefly Background",
      html: `<div class="firefly">
        <div class="container">
            <div class="bubbles">
                <span style="--i:11;"></span>
                <span style="--i:5;"></span>
                <span style="--i:12;"></span>
                <span style="--i:18;"></span>
                <span style="--i:25;"></span>
                <span style="--i:19;"></span>
                <span style="--i:7;"></span>
                <span style="--i:10;"></span>
                <span style="--i:21;"></span>
                <span style="--i:12;"></span>
                <span style="--i:11;"></span>
                <span style="--i:9;"></span>
                <span style="--i:6;"></span>
                <span style="--i:11;"></span>
                <span style="--i:32;"></span>
                <span style="--i:24;"></span>
                <span style="--i:16;"></span>
                <span style="--i:12;"></span>
                <span style="--i:9;"></span>
                <span style="--i:8;"></span>
                <span style="--i:16;"></span>
                <span style="--i:17;"></span>
                <span style="--i:19;"></span>
                <span style="--i:22;"></span>
                <span style="--i:12;"></span>
                <span style="--i:14;"></span>
                <span style="--i:8;"></span>
                <span style="--i:9;"></span>
                <span style="--i:5;"></span>
                <span style="--i:3;"></span>
                <span style="--i:11;"></span>
                <span style="--i:21;"></span>
                <span style="--i:24;"></span>
                <span style="--i:22;"></span>
                <span style="--i:14;"></span>
                <span style="--i:17;"></span>
                <span style="--i:24;"></span>
                <span style="--i:19;"></span>
                <span style="--i:16;"></span>
                <span style="--i:19;"></span>
                <span style="--i:22;"></span>
                <span style="--i:15;"></span>
                <span style="--i:18;"></span>
                <span style="--i:21;"></span>
                <span style="--i:11;"></span>
            </div>
        </div>
    </div>`,
      css: `*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.firefly{
    min-height: 100vh;
    background-color: #0c192c;

    /* margin: 10px; */
}
.firefly .container{
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

.firefly .container .bubbles{
    position: relative;
    display: flex;   
}

.firefly .container .bubbles span{
    position: relative;
    width: 30px;
    height: 30px;
    background: #4fc3dc;
    margin: 0 2px;
    border-radius: 50%;
    box-shadow: 0 0 0 10px #4fc3dc44,
    0 0 50px #4fc3dc,
    0 0 100px #4fc3dc;
    animation: firefly_animate 20s linear infinite;
    animation-duration: calc(120s / var(--i));
}

.firefly .container .bubbles span:nth-child(even){
    /* #ff2d75 */
    background: #ccf760;
    box-shadow: 0 0 0 10px #ccf76044,
    0 0 50px #ccf760,
    0 0 100px #ccf760;
}


@keyframes firefly_animate{
    0%{
        transform: translateY(100vh) scale(0);
    }
    100%{
        transform: translateY(-100vh) scale(1);
    }
}`,
      js: `// No JS needed for this CSS magic!`
    },
    {
      title: "Day & Night Analog Clock",
      html: `
        <div class="clock">
        
        <div class="hour">
            <div class="hr" id="hr"></div>
        </div>

        <div class="min">
            <div class="mn" id="mn"></div>
        </div>

        <div class="sec">
            <div class="sc" id="sc"></div>
        </div>

    </div>

    <div class="toggleClass" onclick="toggleClass()"></div>
    `,
      css: `*
{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}

body
{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #091921;
    transition-duration: 10s;
    
}

/* light mode */
body.light
{
    background: #d1dae3;


}
/* end */

.clock
{
    width: 350px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #091921 url(images/clock.png);
    background-size: cover;
    border: 4px solid #091921;
    border-radius: 50%;
    box-shadow: -8px -8px 15px rgba(255,255,255,0.05),
                20px 20px 20px rgba(0,0,0,0.3),
                inset -8px -8px 15px rgba(255,255,255,0.05),
                inset 20px 20px 20px rgba(0,0,0,0.3); 
}

/* light mode */

body.light .clock
{
    background: #d1dae3 url(images/clock.png);
    background-size: cover;
    border: 4px solid #cad3dc;
    box-shadow: -8px -8px 15px rgba(255,255,255,0.5),
                10px 10px 10px rgba(0,0,0,0.1),
                inset -8px -8px 15px rgba(255,255,255,0.5),
                inset 10px 10px 10px rgba(0,0,0,0.1); 

}
/* end */

.clock::before
{
    content: '';
    position: absolute;
    background:#ff1e;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    z-index: 1000;

}

/* light mode */

body.light .clock::before
{
    background: #008eff;

}
/* end */

.clock .hour,
.clock .min,
.clock .sec
{
    position: absolute;
}

.clock .hour, .hr
{
    width: 160px;
    height: 160px;
}

.clock .min, .mn
{
    width: 190px;
    height: 190px;
}

.clock .sec, .sc
{
    width: 230px;
    height: 230px;
}

.hr, .mn, .sc
{
    display: flex;
    justify-content: center;
    position: absolute;
    border-radius: 50%;
}

.hr::before
{
    content: '';
    position: absolute;
    width: 8px;
    height: 80px;
    background: #ff105e;
    z-index: 10;
    border-radius: 6px 6px 0 0;
}
/* light mode */
body.light .hr::before
{
    background: #49b808;
}
/* End */

.mn::before
{
    content: '';
    position: absolute;
    width: 4px;
    height: 90px;
    background: #fff;
    z-index: 11;
    border-radius: 6px 6px 0 0;
}

/* light mode */
body.light .mn::before
{
    background: #091921;
}
/* End */

.sc::before
{
    content: '';
    position: absolute;
    width: 2px;
    height: 150px;
    background: #ff1e;
    z-index: 12;
    border-radius: 6px 6px 0 0;
}
/* light mode */
body.light .sc::before
{
    background: #008eff;
}
/* End */

/* main IMPORTANT section */
/* toggleClass */
.toggleClass
{
    position:absolute;
    top: 30px;
    right: 150px;
    width: 20px;
    height: 20px;
    font-size: 18px;
    border-radius: 50%;
    background: #d1dae3;
    color: #d1dae3;
    font-family: consolas;
    cursor: pointer;
    display: flex;
    align-items: center;
    /* transition-delay: 1s; */
    transition-duration: 10s;


}

.toggleClass::before
{
    position: absolute;
    left: 25px;
    content: 'Light Mode';
    font-weight: bolder;
    white-space: nowrap;
    
}

/* fxn toggleClass */

body.light .toggleClass
{
    background: #091921;
    color: #091921;
    
}

body.light .toggleClass::before
{

    content: 'Dark Mode';
    font-weight: bolder;

}`,
      js: `
        function toggleClass(){
            const body = document.querySelector('body');
            body.classList.toggle('light');
        }

        const deg = 6;
        const hr = document.querySelector('#hr');
        const mn = document.querySelector('#mn');
        const sc = document.querySelector('#sc'); 


        setInterval(() => {

            let day = new Date();
            let hh = day.getHours() * 30;
            let mm = day.getMinutes() * deg;
            let ss = day.getSeconds() * deg;

            hr.style.transform = \`rotateZ(\${(hh)+(mm/12)}deg)\`;
            mn.style.transform = \`rotateZ(\${mm}deg)\`;
            sc.style.transform = \`rotateZ(\${ss}deg)\`;

        })`,
    },
    {
      title: "Interactive Digital Clock",
      html: `<div id="clock" class="clock">00:00:00</div>`,
      css: `.clock {\n  font-size: 3rem;\n  font-family: monospace;\n  font-weight: bold;\n  color: #333;\n  padding: 20px;\n  border-radius: 10px;\n  background: #f0f0f0;\n  box-shadow: inset 5px 5px 10px #d9d9d9, inset -5px -5px 10px #ffffff;\n}`,
      js: `function updateClock() {\n  const now = new Date();\n  const time = now.toLocaleTimeString('en-US', { hour12: true });\n  document.getElementById('clock').textContent = time;\n}\nsetInterval(updateClock, 1000);\nupdateClock();`
    },
    {
      title: "Minion",
      html: `<div class="box">
        <div class="eye"></div>
        <div class="eye"></div>
        <div class="smilee"></div>
    </div>`,
      css: `*{
    margin: 0;
    padding: 0;
}

body{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: radial-gradient(#f2761e,#ef4921);

}

 .box{
    display: flex;
}

.box .eye{
position: relative;
width: 200px;
height: 200px;
display: block;
background: #fff;
margin: 0 20px;
border-radius: 50%;
box-shadow: 0 5px 45px rgba(0,0,0,0.2),
            inset 0 0 15px #f2761e,
            inset 0 0 25px #f2761e,
            inset 0 0 50px #f2761e;
}

.box .eye::before{
    content: '';
    position: absolute;
    top: 50%;
    left: 40px;
    transform: translate(-50%,-50%);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #000;
    border: 7px solid #2196f9;
}

.box .smilee{
    position: fixed;
    margin-top: 13%;
    width: 500px;
    height: 200px;
    display: flex;
    background: transparent;
    border: 15px solid black;
    border-radius: 50%;
    border-top: hidden;
    border-left: hidden;
    border-right: hidden;
    box-shadow:0 10px 5px #f2762e;

}`,
      js: `document.querySelector('body').addEventListener('mousemove',eyeball)

        function eyeball(){
            const eye = document.querySelectorAll('.eye');
            eye.forEach(function(eye){
                let x= (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);

                let y= (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);

                let radian = Math.atan2(event.pageX - x, event.pageY - y);
                let rotation = (radian * (180 / Math.PI) * -1) + 270;
                eye.style.transform = "rotate("+rotation+"deg)"
            })
        }`
    },
    {
      title: "Rainbow Ring",
      html: ` <div class="loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>`,
      css: `body
{
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #240229;

}

.loader
{
    position: relative;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: linear-gradient(#14ffe9, #ffeb3b, #ff00e0);
    animation: animate 0.5s linear infinite;
}

@keyframes animate 
{
    0%
    {
        transform: rotate(0deg);
    }
    100%
    {
        transform: rotate(360deg)
    } 
}

.loader span
{
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: linear-gradient(#14ffe9, #ffeb3b, #ff00e0);
}

.loader span:nth-child(1)
{
    filter: blur(5px);
}

.loader span:nth-child(2)
{
    filter: blur(10px);
}

.loader span:nth-child(3)
{
    filter: blur(25px);
}

.loader span:nth-child(4)
{
    filter: blur(50px);
}

.loader:after
{
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    background: #240229;
    border-radius: 50%;
}`,
      js: `// No JS needed for this CSS magic!`
    },
    {
      title: "Neon Glowing Button",
      html: `<button class="neon-btn">Hover Me</button>`,
      css: `.neon-btn {\n  padding: 15px 30px;\n  font-size: 1.2rem;\n  color: #0ff;\n  background: transparent;\n  border: 2px solid #0ff;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: 0.3s;\n  text-transform: uppercase;\n  font-weight: bold;\n}\n.neon-btn:hover {\n  background: #0ff;\n  color: #000;\n  box-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #0ff;\n}`,
      js: `// No JS needed for this CSS magic!`
    },
    {
      title: "Animated Loader",
      html: `<div class="loader"></div>`,
      css: `.loader {\n  width: 50px;\n  height: 50px;\n  border: 5px solid #f3f3f3;\n  border-top: 5px solid #3498db;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}`,
      js: `// Pure CSS Loader`
    },
    {
      title: "3D Hover Card",
      html: `<div class="card">Hover Me</div>`,
      css: `.card {\n  width: 150px;\n  height: 200px;\n  background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 15px;\n  font-weight: bold;\n  color: white;\n  transition: transform 0.5s;\n  box-shadow: 0 10px 20px rgba(0,0,0,0.1);\n}\n.card:hover {\n  transform: translateY(-10px) rotateX(10deg) rotateY(10deg);\n  box-shadow: 0 20px 30px rgba(0,0,0,0.2);\n}`,
      js: `// Pure CSS 3D Effect`
    },
    {
      title: "Random Color Generator",
      html: `<div id="box" class="color-box">#3498db</div>\n<button onclick="changeColor()">Generate</button>`,
      css: `.color-box {\n  width: 150px;\n  height: 100px;\n  background: #3498db;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-family: monospace;\n  font-size: 1.5rem;\n  border-radius: 8px;\n  margin-bottom: 15px;\n  transition: 0.3s;\n}\nbutton {\n  padding: 10px 20px;\n  border: none;\n  background: #333;\n  color: white;\n  border-radius: 5px;\n  cursor: pointer;\n}`,
      js: `function changeColor() {\n  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);\n  const box = document.getElementById('box');\n  box.style.background = randomColor;\n  box.textContent = randomColor;\n}`
    },
    {
      title: "Glassmorphism Design",
      html: `<div class="glass">Glass Effect</div>`,
      css: `body {\n  background: linear-gradient(45deg, #4facfe 0%, #00f2fe 100%);\n}\n.glass {\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 16px;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  padding: 40px;\n  color: white;\n  font-size: 1.5rem;\n  font-weight: bold;\n}`,
      js: `// Pure CSS Glass Effect`
    },
    {
      title: "CSS Toggle Switch",
      html: `<label class="switch">\n  <input type="checkbox">\n  <span class="slider"></span>\n</label>`,
      css: `.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n.switch input { opacity: 0; width: 0; height: 0; }\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0; left: 0; right: 0; bottom: 0;\n  background-color: #ccc;\n  transition: .4s;\n  border-radius: 34px;\n}\n.slider:before {\n  position: absolute;\n  content: "";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: .4s;\n  border-radius: 50%;\n}\ninput:checked + .slider {\n  background-color: #2196F3;\n}\ninput:checked + .slider:before {\n  transform: translateX(26px);\n}`,
      js: `// Checkbox state handled via CSS pseudo-selectors`
    },
    {
      title: "Auto Typing Text",
      html: `<h1 id="text" class="typing"></h1>`,
      css: `.typing {\n  font-family: monospace;\n  font-size: 2rem;\n  white-space: nowrap;\n  overflow: hidden;\n  border-right: 3px solid #333;\n  animation: blink 0.7s step-end infinite;\n}\n@keyframes blink {\n  50% { border-color: transparent; }\n}`,
      js: `const text = "Hello, World!";\nlet i = 0;\n\nfunction typeWriter() {\n  if (i < text.length) {\n    document.getElementById("text").innerHTML += text.charAt(i);\n    i++;\n    setTimeout(typeWriter, 150);\n  }\n}\ntypeWriter();`
    },
    {
      title: "Minimal CSS Tooltip",
      html: `<div class="tooltip">Hover Me\n  <span class="tooltiptext">Tooltip Info!</span>\n</div>`,
      css: `.tooltip {\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 120px;\n  background-color: #333;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px 0;\n  position: absolute;\n  z-index: 1;\n  bottom: 150%;\n  left: 50%;\n  margin-left: -60px;\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n  opacity: 1;\n}`,
      js: `// Tooltip purely driven by CSS :hover`
    },
    {
      title: "Range Slider with Value",
      html: `<div class="slider-container">\n  <input type="range" id="myRange" min="1" max="100" value="50">\n  <p>Value: <span id="val">50</span></p>\n</div>`,
      css: `.slider-container {\n  width: 80%;\n  text-align: center;\n  font-family: sans-serif;\n  font-weight: bold;\n  color: #333;\n}\ninput[type=range] {\n  width: 100%;\n}`,
      js: `const slider = document.getElementById("myRange");\nconst output = document.getElementById("val");\n\nslider.oninput = function() {\n  output.innerHTML = this.value;\n}`
    },
    {
      title: "Expanding Search Bar",
      html: `<div class="search-box">\n  <input type="text" placeholder="Search...">\n</div>`,
      css: `.search-box {\n  display: flex;\n  justify-content: center;\n}\ninput {\n  width: 40px;\n  height: 40px;\n  border-radius: 20px;\n  border: 2px solid #333;\n  padding: 0 15px;\n  font-size: 16px;\n  transition: width 0.4s ease-in-out;\n  outline: none;\n}\ninput:focus {\n  width: 250px;\n}`,
      js: `// Click the search bar to see it expand!`
    }
  ];

  const isExpanded = visibleCount >= miniProjects.length;

  const handleToggle = () => {
    if (isExpanded) {
      setVisibleCount(3);
      document.getElementById('playground').scrollIntoView({ behavior: 'smooth' });
    } else {
      setVisibleCount((prev) => Math.min(prev + 9, miniProjects.length));
    }
  };

  return (
    <section id="playground" className="py-16 md:py-20 relative">
      <h3 className={`text-2xl sm:text-3xl font-bold mb-2 flex items-center gap-3 sm:gap-4 transition-colors duration-1000 ${isDark ? 'text-slate-100' : 'text-stone-800'}`}>
        {t('playground')}
      </h3>
      <p className={`mb-10 text-sm sm:text-base transition-colors duration-1000 ${isDark ? 'text-slate-400' : 'text-stone-600'}`}>
        {t('playgroundDesc')}
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 transition-all duration-500">
        {miniProjects.slice(0, visibleCount).map((project, i) => (
          <div key={i} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <MiniCodePen 
              title={project.title} 
              initialHtml={project.html} 
              initialCss={project.css} 
              initialJs={project.js} 
            />
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center sticky bottom-8 z-40">
        <button 
          onClick={handleToggle}
          className={`px-8 py-3 rounded-full font-bold shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 ${
            isDark 
              ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-blue-500/30' 
              : 'bg-orange-500 text-white hover:bg-orange-600 shadow-orange-500/40'
          }`}
        >
          {isExpanded ? t('hideProjects') : t('seeMoreProjects')}
        </button>
      </div>
    </section>
  );
}

// --- 8. REUSABLE SUB-COMPONENTS ---
// --- 8.1 LANGUAGE CHANGING SECTION ---
function Navbar() {
  const { isDark, setIsDark, lang, setLang, t } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggleLang = () => { if (lang === 'en') setLang('hi'); else if (lang === 'hi') setLang('or'); else setLang('en'); };
  const langIcon = lang === 'en' ? 'A' : lang === 'hi' ? 'अ' : 'ଅ';

  return (
    <nav className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-1000 ease-in-out ${isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-orange-50/80 border-orange-200/50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <span className={`text-xl font-bold tracking-tighter transition-colors duration-1000 ${isDark ? 'text-blue-500' : 'text-orange-600'}`}>&lt;Dev.Portfolio /&gt;</span>
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            <a href="#projects" className={`text-sm font-medium transition-colors duration-500 ${isDark ? 'hover:text-blue-500' : 'text-stone-700 hover:text-orange-600'}`}>{t('navProjects')}</a>
            <a href="#playground" className={`text-sm font-medium transition-colors duration-500 ${isDark ? 'hover:text-blue-500' : 'text-stone-700 hover:text-orange-600'}`}>{t('navPlayground')}</a>
            <a href="#games" className={`text-sm font-medium transition-colors duration-500 ${isDark ? 'hover:text-blue-500' : 'text-stone-700 hover:text-orange-600'}`}>{t('navGames')}</a>
            <a href="#contact" className={`text-sm font-medium transition-colors duration-500 ${isDark ? 'hover:text-blue-500' : 'text-stone-700 hover:text-orange-600'}`}>{t('navContact')}</a>
          </div>
          <div className={`flex items-center gap-4 border-l pl-6 transition-colors duration-1000 ${isDark ? 'border-slate-500/30' : 'border-stone-300'}`}>
            <AnimatedThemeToggle isDark={isDark} toggle={() => setIsDark(!isDark)} />
            <button onClick={toggleLang} className={`w-8 h-8 flex items-center justify-center rounded-full font-bold transition-colors duration-500 ${isDark ? 'bg-slate-800 hover:bg-slate-700 text-blue-400' : 'bg-orange-100 hover:bg-orange-200 text-orange-700'}`} title="Change Language">
              {langIcon}
            </button>
          </div>
        </div>
        <button className={`md:hidden text-2xl focus:outline-none transition-colors duration-1000 ${isDark ? 'text-slate-300' : 'text-stone-700'}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </button>
      </div>
      {isOpen && (
        <div className={`md:hidden border-t px-4 py-6 flex flex-col gap-6 shadow-xl transition-colors duration-1000 ${isDark ? 'border-slate-800 bg-slate-900/95' : 'border-orange-100 bg-orange-50/95'}`}>
          <div className={`flex justify-between items-center pb-4 border-b transition-colors duration-1000 ${isDark ? 'border-slate-500/30 text-slate-500' : 'border-stone-300 text-stone-500'}`}>
            <span className="font-medium text-sm">Preferences</span>
            <div className="flex gap-4 items-center">
              <AnimatedThemeToggle isDark={isDark} toggle={() => setIsDark(!isDark)} />
              <button onClick={toggleLang} className={`w-8 h-8 flex items-center justify-center rounded-full font-bold transition-colors duration-500 ${isDark ? 'bg-slate-800 text-blue-400' : 'bg-orange-200 text-orange-700'}`}>{langIcon}</button>
            </div>
          </div>
          <a href="#projects" onClick={() => setIsOpen(false)} className={`text-lg font-medium transition-colors duration-500 ${isDark ? 'hover:text-blue-500' : 'text-stone-800 hover:text-orange-600'}`}>{t('navProjects')}</a>
          <a href="#playground" onClick={() => setIsOpen(false)} className={`text-lg font-medium transition-colors duration-500 ${isDark ? 'hover:text-blue-500' : 'text-stone-800 hover:text-orange-600'}`}>{t('navPlayground')}</a>
          <a href="#games" onClick={() => setIsOpen(false)} className={`text-lg font-medium transition-colors duration-500 ${isDark ? 'hover:text-blue-500' : 'text-stone-800 hover:text-orange-600'}`}>{t('navGames')}</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className={`text-lg font-medium transition-colors duration-500 ${isDark ? 'hover:text-blue-500' : 'text-stone-800 hover:text-orange-600'}`}>{t('navContact')}</a>
        </div>
      )}
    </nav>
  );
}

// --- 8.2 INTRODUCTION SECTION ---
function HeroSection() {
  const { isDark, t } = useContext(AppContext);
  return (
    <section className="py-20 sm:py-24 md:py-32 flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-8 min-h-[80vh]">
      <div className="flex-1 flex flex-col justify-center items-start w-full">
        <p className={`font-mono mb-4 text-sm sm:text-base transition-colors duration-1000 ${isDark ? 'text-blue-500' : 'text-orange-600'}`}>Hi, my name is</p>
        <h1 className={`text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4 leading-tight transition-colors duration-1000 ${isDark ? 'text-slate-100' : 'text-stone-900'}`}>
          DEBIDUTTA BEHERA
        </h1>
        <h2 className={`text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight transition-colors duration-1000 ${isDark ? 'text-slate-400' : 'text-stone-600'}`}>
          {t('heroTitle')}
        </h2>
        <p className={`max-w-2xl text-base sm:text-lg leading-relaxed mb-10 transition-colors duration-1000 ${isDark ? 'text-slate-400' : 'text-stone-600'}`}>
          Results-driven Full Stack Engineer with hands-on experience building scalable backend services, FastAPI, RESTful APIs, and responsive frontend interfaces. I demonstrate strong ownership over the full feature development lifecycle through deployment with a seeker mindset that actively pursues innovative, optimized solutions.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-auto">
          <a href="#projects" className={`w-full sm:w-auto text-center px-6 py-3 text-white font-semibold rounded-lg transition-all duration-500 shadow-lg ${isDark ? 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/20' : 'bg-orange-500 hover:bg-orange-600 shadow-orange-500/30'}`}>
            {t('viewWork')}
          </a>
          <a href="https://github.com/Mr-Debi" target="_blank" rel="noreferrer" className={`w-full sm:w-auto justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-500 flex items-center gap-2 border ${isDark ? 'bg-slate-800 hover:bg-slate-700 text-white border-slate-700 hover:border-slate-600' : 'bg-white/80 hover:bg-white text-stone-800 border-orange-200 shadow-sm backdrop-blur-sm'}`}>
             GitHub ↗
          </a>
          <a href={profileResume} download="Debidutta_Behera_Resume.pdf" className={`w-full sm:w-auto text-center px-6 py-3 font-semibold rounded-lg transition-all duration-500 border ${isDark ? 'bg-transparent hover:bg-slate-800 text-blue-400 border-blue-400/50 hover:border-blue-400' : 'bg-orange-100/50 hover:bg-orange-100 text-orange-700 border-orange-300 hover:border-orange-400'}`}>
            {t('download')}
          </a>
          <a href="mailto:debidutta.db@gmail.com?subject=Job%20Opportunity:%20Hiring%20Inquiry" className={`w-full sm:w-auto text-center px-6 py-3 text-white font-bold rounded-lg transition-all duration-500 shadow-lg ${isDark ? 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/20' : 'bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/30'}`}>
            {t('hireMe')}
          </a>
        </div>
      </div>
      <div className="flex-1 flex justify-center md:justify-end w-full max-w-sm md:max-w-md lg:max-w-lg">
        <div className="relative group">
          <div className={`absolute -inset-1 rounded-full blur opacity-30 group-hover:opacity-70 transition duration-1000 ${isDark ? 'bg-blue-500' : 'bg-orange-500'}`}></div>
          <img src={profileImg} alt="Debidutta Behera" className={`relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-fill rounded-full shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] ${isDark ? 'border-2 border-slate-700' : 'border-2 border-orange-200'}`} />
        </div>
      </div>
    </section>
  );
}
// --- 8.3 SKILLS SECTION ---
function SkillsMatrix() {
  const { isDark, t } = useContext(AppContext);
  const categories = [
    { title: "Frontend", icon: <LaptopIcon />, skills: ["React.js", "TypeScript", "JavaScript (ES6+)", "HTML & CSS", "Responsive Design"] },
    { title: "Backend & APIs", icon: <GearIcon />, skills: ["Python (Advanced)", "Django REST Framework", "FastAPI", "Flask", "RESTful APIs"] },
    { title: "Databases", icon: <DatabaseIcon />, skills: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "Schema Design & Indexing"] },
    { title: "Tools & DevOps", icon: <HammerIcon />, skills: ["Git & GitHub", "CI/CD Principles", "Python Selenium", "PyTest", "GCP (Familiarity)"] }
  ];

  return (
    <section id="skills" className="py-16 md:py-20">
      <h3 className={`text-2xl sm:text-3xl font-bold mb-8 md:mb-10 flex items-center gap-3 sm:gap-4 transition-colors duration-1000 ${isDark ? 'text-slate-100' : 'text-stone-800'}`}>{t('skills')}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {categories.map((cat, i) => (
          <TiltCard key={i} className="h-full">
            <div className={`h-full p-6 rounded-xl border transition-colors duration-1000 ${isDark ? 'bg-slate-800/80 border-slate-700 shadow-xl' : 'bg-white/70 backdrop-blur-sm border-orange-200/60 shadow-lg shadow-orange-900/5'}`}>
              <div className={`w-12 h-12 mb-4 transition-colors duration-1000 ${isDark ? 'text-blue-400' : 'text-orange-500'}`}>
                {cat.icon}
              </div>
              <h4 className={`text-lg sm:text-xl font-semibold mb-4 transition-colors duration-1000 ${isDark ? 'text-slate-100' : 'text-stone-800'}`}>{cat.title}</h4>
              <ul className="space-y-2">
                {cat.skills.map((skill, j) => (
                  <li key={j} className={`flex items-center gap-2 text-sm transition-colors duration-1000 ${isDark ? 'text-slate-400' : 'text-stone-600'}`}>
                    <span className={`min-w-[6px] w-1.5 h-1.5 rounded-full transition-colors duration-1000 ${isDark ? 'bg-blue-500' : 'bg-orange-500'}`}></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
// --- 8.4 PROJECT SECTION ---
function ProjectsSection() {
  const { isDark, t } = useContext(AppContext);
  const projects = [
    {
      title: "Bus Charging Scheduler",
      description: "A scalable, data-driven discrete event simulation engine for EV fleet management, solving critical charging infrastructure bottlenecks.",
      architecture: "Python core logic with Pandas/JSON data handling, coupled with an interactive Streamlit visualization dashboard.",
      feature: "Tunable scoring algorithm proactively resolving station collisions and minimizing wait times across the fleet.",
      tags: ["Python", "Streamlit", "Pandas", "Simulation Engine"],
      demo: "https://bus-charging-scheduler-by-debi.streamlit.app/",
      repo: "https://github.com/Mr-Debi/Bus-Charging-Scheduler"
    },
    {
      title: "Cinema Seat Reservation System",
      description: "A comprehensive booking platform handling concurrent reservations and dynamic seat visualization.",
      architecture: "Django REST Framework backend processing seat-tier logic, paired with a React.js and TypeScript frontend.",
      feature: "Real-time booking transactions and data persistence in a normalized PostgreSQL database, optimizing query performance.",
      tags: ["Python", "Django", "React.js", "TypeScript", "PostgreSQL"],
      demo: "#",
      repo: "#"
    },
    {
      title: "Digital Attendance Tracker",
      description: "A full-stack web portal streamlining HR operations and reducing manual attendance errors.",
      architecture: "Django backend and React.js frontend with TypeScript.",
      feature: "Role-based access control for administrators and employees with secure authentication.",
      tags: ["Python", "Django", "React.js", "MySQL", "PostgreSQL"],
      demo: "#",
      repo: "#"
    },
    {
      title: "AI-Powered Personal Assistant (JARVIS)",
      description: "A voice-activated assistant utilizing Natural Language Processing (NLP) to parse and execute system commands.",
      architecture: "Built using Python NLP and SpeechRecognition libraries.",
      feature: "Implemented robust error-handling that improved command recognition accuracy by 20%.",
      tags: ["Python", "NLP", "SpeechRecognition"],
      demo: "#",
      repo: "#"
    },
    {
      title: "Automated Software Testing Framework",
      description: "A cross-browser automated UI testing framework validating workflows across Chrome, Firefox, and Edge.",
      architecture: "Engineered using Python, Selenium, and PyTest.",
      feature: "Generated structured HTML test reports with automated screenshot capture on failure, enabling faster CI/CD feedback loops.",
      tags: ["Python", "Selenium", "PyTest", "CI/CD"],
      demo: "#",
      repo: "#"
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-20">
      <h3 className={`text-2xl sm:text-3xl font-bold mb-8 md:mb-10 flex items-center gap-3 sm:gap-4 transition-colors duration-1000 ${isDark ? 'text-slate-100' : 'text-stone-800'}`}>{t('projects')}</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {projects.map((project, i) => (
          <TiltCard key={i} className="h-full">
            <div className={`p-6 sm:p-8 rounded-xl border flex flex-col h-full group transition-colors duration-1000 ${isDark ? 'bg-slate-800/80 border-slate-700 shadow-xl' : 'bg-white/70 backdrop-blur-sm border-orange-200/60 shadow-lg shadow-orange-900/5'}`}>
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
                <h4 className={`text-xl sm:text-2xl font-bold transition-colors duration-500 ${isDark ? 'text-slate-100 group-hover:text-blue-400' : 'text-stone-900 group-hover:text-orange-600'}`}>{project.title}</h4>
                <div className={`flex gap-4 text-sm font-mono transition-colors duration-1000 ${isDark ? 'text-blue-400' : 'text-orange-600'}`}>
                  <a href={project.repo} className={`transition-colors duration-500 ${isDark ? 'hover:text-white' : 'hover:text-orange-800'}`}>GitHub</a>
                </div>
              </div>
              <p className={`mb-6 text-sm sm:text-base transition-colors duration-1000 ${isDark ? 'text-slate-400' : 'text-stone-600'}`}>{project.description}</p>
              <div className="space-y-4 mb-8 flex-grow">
                <div>
                  <strong className={`text-xs sm:text-sm block mb-1 transition-colors duration-1000 ${isDark ? 'text-slate-300' : 'text-stone-800'}`}>Architecture:</strong>
                  <p className={`text-xs sm:text-sm leading-relaxed transition-colors duration-1000 ${isDark ? 'text-slate-400' : 'text-stone-600'}`}>{project.architecture}</p>
                </div>
                <div>
                  <strong className={`text-xs sm:text-sm block mb-1 transition-colors duration-1000 ${isDark ? 'text-slate-300' : 'text-stone-800'}`}>Key Feature:</strong>
                  <p className={`text-xs sm:text-sm leading-relaxed transition-colors duration-1000 ${isDark ? 'text-slate-400' : 'text-stone-600'}`}>{project.feature}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, j) => (
                  <span key={j} className={`px-3 py-1 text-xs font-mono rounded-full border transition-colors duration-1000 ${isDark ? 'text-blue-300 bg-blue-900/30 border-blue-800/50' : 'text-orange-700 bg-orange-100/50 border-orange-300/50'}`}>{tag}</span>
                ))}
              </div>

              {/* LIVE DEMO AND GITHUB BUTTONS */}
              <div className="flex gap-3 mt-auto pt-4 border-t transition-colors duration-1000 border-slate-500/20">
                <a href={project.demo} target="_blank" rel="noreferrer" className={`flex-1 text-center px-4 py-2 text-sm font-bold rounded-lg transition-all duration-300 shadow-md flex items-center justify-center gap-1 ${isDark ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-500/20' : 'bg-orange-500 hover:bg-orange-400 text-white shadow-orange-500/30'}`}>
                  Live Demo ↗
                </a>
                <a href={project.repo} target="_blank" rel="noreferrer" className={`flex-1 text-center px-4 py-2 text-sm font-bold rounded-lg transition-all duration-300 border flex items-center justify-center gap-1 ${isDark ? 'bg-transparent border-slate-600 hover:bg-slate-700 text-slate-300' : 'bg-transparent border-orange-300 hover:bg-orange-100 text-orange-700'}`}>
                  GitHub
                </a>
              </div>



            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}

// --- 8.5 WORK EXPERIENCE SECTION ---
function ExperienceTimeline() {
  const { isDark, t } = useContext(AppContext);
  const experiences = [
    {
      role: "Apprentice Trainee - Python Developer",
      company: "Integrated Test Range (ITR), DRDO",
      date: "Jan 2025 - Jan 2026",
      bullets: [
        "Built and maintained Python-based backend services for mission-critical enterprise applications, achieving 99.8% system uptime.",
        "Automated Ul testing protocols using Python Selenium and PyTest, reducing manual testing effort by 40% and deployment errors by 25%.",
        "Optimized frontend/backend Python scripts to eliminate runtime bottlenecks, delivering a 35% reduction in execution time through proactive performance profiling."
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-20">
      <h3 className={`text-2xl sm:text-3xl font-bold mb-8 md:mb-10 flex items-center gap-3 sm:gap-4 transition-colors duration-1000 ${isDark ? 'text-slate-100' : 'text-stone-800'}`}>{t('experience')}</h3>
      <div className={`relative border-l ml-3 sm:ml-4 space-y-10 sm:space-y-12 transition-colors duration-1000 ${isDark ? 'border-slate-700' : 'border-orange-300'}`}>
        {experiences.map((exp, i) => (
          <div key={i} className="relative pl-6 sm:pl-10">
            <div className={`absolute w-4 h-4 rounded-full -left-[8.5px] top-1.5 border-4 transition-colors duration-1000 ${isDark ? 'bg-blue-500 border-slate-900 shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'bg-orange-500 border-orange-100 shadow-[0_0_15px_rgba(249,115,22,0.4)]'}`}></div>
            <h4 className={`text-lg sm:text-xl font-bold transition-colors duration-1000 ${isDark ? 'text-slate-100' : 'text-stone-900'}`}>{exp.role}</h4>
            <div className={`font-mono text-xs sm:text-sm mb-4 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0 transition-colors duration-1000 ${isDark ? 'text-blue-500' : 'text-orange-600'}`}>
              <span>{exp.company}</span>
              <span className={`hidden sm:inline mx-2 transition-colors duration-1000 ${isDark ? 'text-slate-500' : 'text-stone-400'}`}>|</span>
              <span className={`transition-colors duration-1000 ${isDark ? 'text-slate-400 sm:text-blue-400' : 'text-stone-600 sm:text-orange-600'}`}>{exp.date}</span>
            </div>
            <ul className="space-y-3">
              {exp.bullets.map((bullet, j) => (
                <li key={j} className={`text-sm leading-relaxed flex items-start gap-2 transition-colors duration-1000 ${isDark ? 'text-slate-400' : 'text-stone-600'}`}>
                  <span className={`mt-1 transition-colors duration-1000 ${isDark ? 'text-blue-500' : 'text-orange-500'}`}>▹</span> {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- 8.6 MAILING SECTION ---
function ContactForm() {
  const { isDark, t } = useContext(AppContext);
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    const formData = new FormData(e.target);
    formData.append("access_key", "qcgriudtaokxyjaa");
    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await response.json();
      if (data.success) { setStatus('success'); e.target.reset(); } else setStatus('error');
    } catch (error) { setStatus('error'); }
  };

  return (
    <section id="contact" className="py-16 md:py-20 max-w-3xl mx-auto text-center">
      <h3 className={`text-2xl sm:text-3xl font-bold mb-4 flex items-center justify-center gap-3 sm:gap-4 transition-colors duration-1000 ${isDark ? 'text-slate-100' : 'text-stone-800'}`}>{t('contact')}</h3>
      <p className={`mb-4 text-sm sm:text-base px-4 transition-colors duration-1000 ${isDark ? 'text-slate-400' : 'text-stone-600'}`}>I am available for remote, hybrid, and on-site opportunities, ready for immediate joining.</p>
      <p className={`font-mono mb-8 sm:mb-10 text-xs sm:text-sm flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 transition-colors duration-1000 ${isDark ? 'text-slate-300' : 'text-stone-700'}`}>
        <span>📍 Cuttack, Odisha, India</span><span className="hidden sm:inline">|</span>
        <a href="tel:+917978213833" className={`transition-colors duration-500 ${isDark ? 'hover:text-blue-500' : 'hover:text-orange-600'}`}>📞 +91-7978213833</a><span className="hidden sm:inline">|</span>
        <a href="mailto:debidutta.db@gmail.com" className={`transition-colors duration-500 ${isDark ? 'hover:text-blue-500' : 'hover:text-orange-600'}`}>✉️ debidutta.db@gmail.com</a>
      </p>

      {status === 'success' ? (
        <div className={`p-6 sm:p-8 border rounded-xl flex flex-col items-center gap-4 transition-colors duration-1000 ${isDark ? 'bg-emerald-900/20 border-emerald-500/30' : 'bg-emerald-50 border-emerald-200'}`}>
          <div className="text-4xl">✅</div>
          <h4 className={`text-lg sm:text-xl font-bold transition-colors duration-1000 ${isDark ? 'text-emerald-400' : 'text-emerald-700'}`}>Message Sent!</h4>
          <p className={`text-sm sm:text-base transition-colors duration-1000 ${isDark ? 'text-emerald-200/70' : 'text-emerald-600'}`}>I have received your message and will get back to you soon.</p>
          <button onClick={() => setStatus('idle')} className={`mt-2 sm:mt-4 text-sm underline transition-colors duration-1000 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>Send another message</button>
        </div>
      ) : status === 'error' ? (
         <div className={`p-6 sm:p-8 border rounded-xl flex flex-col items-center gap-4 transition-colors duration-1000 ${isDark ? 'bg-red-900/20 border-red-500/30' : 'bg-red-50 border-red-200'}`}>
          <div className="text-4xl">❌</div>
          <h4 className={`text-lg sm:text-xl font-bold transition-colors duration-1000 ${isDark ? 'text-red-400' : 'text-red-700'}`}>Something went wrong.</h4>
          <p className={`text-sm sm:text-base transition-colors duration-1000 ${isDark ? 'text-red-200/70' : 'text-red-600'}`}>Please try again or email me directly.</p>
          <button onClick={() => setStatus('idle')} className={`mt-2 sm:mt-4 text-sm underline transition-colors duration-1000 ${isDark ? 'text-red-400' : 'text-red-600'}`}>Try again</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={`text-left space-y-4 sm:space-y-6 p-6 sm:p-8 rounded-xl border shadow-xl transition-colors duration-1000 ${isDark ? 'bg-slate-800/30 border-slate-700/50' : 'bg-white/70 backdrop-blur-sm border-orange-200/60 shadow-orange-900/5'}`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className={`text-xs sm:text-sm font-medium transition-colors duration-1000 ${isDark ? 'text-slate-300' : 'text-stone-700'}`}>Name</label>
              <input required type="text" id="name" name="name" className={`w-full border rounded-lg px-3 py-2 sm:px-4 sm:py-3 focus:outline-none transition-all duration-1000 text-sm sm:text-base shadow-inner ${isDark ? 'bg-slate-900/50 border-slate-700 text-slate-100 focus:border-blue-500 focus:ring-1 focus:ring-blue-500' : 'bg-white/80 border-orange-200 text-stone-900 focus:border-orange-500 focus:ring-1 focus:ring-orange-500'}`} placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className={`text-xs sm:text-sm font-medium transition-colors duration-1000 ${isDark ? 'text-slate-300' : 'text-stone-700'}`}>Email</label>
              <input required type="email" id="email" name="email" className={`w-full border rounded-lg px-3 py-2 sm:px-4 sm:py-3 focus:outline-none transition-all duration-1000 text-sm sm:text-base shadow-inner ${isDark ? 'bg-slate-900/50 border-slate-700 text-slate-100 focus:border-blue-500 focus:ring-1 focus:ring-blue-500' : 'bg-white/80 border-orange-200 text-stone-900 focus:border-orange-500 focus:ring-1 focus:ring-orange-500'}`} placeholder="john@example.com" />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className={`text-xs sm:text-sm font-medium transition-colors duration-1000 ${isDark ? 'text-slate-300' : 'text-stone-700'}`}>Message</label>
            <textarea required id="message" name="message" rows={4} className={`w-full border rounded-lg px-3 py-2 sm:px-4 sm:py-3 focus:outline-none transition-all duration-1000 resize-none text-sm sm:text-base shadow-inner ${isDark ? 'bg-slate-900/50 border-slate-700 text-slate-100 focus:border-blue-500 focus:ring-1 focus:ring-blue-500' : 'bg-white/80 border-orange-200 text-stone-900 focus:border-orange-500 focus:ring-1 focus:ring-orange-500'}`} placeholder="Hello, I'd like to talk about..."></textarea>
          </div>
          <button type="submit" disabled={status === 'submitting'} className={`w-full flex items-center justify-center gap-2 text-white font-semibold py-3 rounded-lg transition-all duration-500 text-sm sm:text-base shadow-lg ${isDark ? 'bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 shadow-blue-500/20' : 'bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 shadow-orange-500/30'}`}>
            {status === 'submitting' ? 'Sending...' : 'Send Message ✈️'}
          </button>
        </form>
      )}
    </section>
  );
}

// --- 9. LIVE VISITOR & LIKE COUNTER ---
function VisitorStats() {
  const { isDark } = useContext(AppContext);
  const [views, setViews] = useState('...');
  const [likes, setLikes] = useState('...');
  const [hasLiked, setHasLiked] = useState(false);

  // We use a unique namespace for your project
  const NAMESPACE = 'debidutta-portfolio-2026';

  useEffect(() => {
    // 1. Handle Likes State
    if (localStorage.getItem('debi_liked')) {
      setHasLiked(true);
    }

    // 2. Fetch or Increment Views
    if (!sessionStorage.getItem('debi_viewed')) {
      // First time this session: Increment View
      fetch(`https://api.counterapi.dev/v1/${NAMESPACE}/views/up`)
        .then(res => res.json())
        .then(data => {
          setViews(data.count);
          sessionStorage.setItem('debi_viewed', 'true');
        })
        .catch(() => setViews('1k+'));
    } else {
      // Already viewed this session: Just fetch current count
      fetch(`https://api.counterapi.dev/v1/${NAMESPACE}/views`)
        .then(res => res.json())
        .then(data => setViews(data.count))
        .catch(() => setViews('1k+'));
    }

    // 3. Fetch Initial Likes
    fetch(`https://api.counterapi.dev/v1/${NAMESPACE}/likes`)
      .then(res => res.json())
      .then(data => setLikes(data.count))
      .catch(() => setLikes('500+'));
  }, []);

  const handleLike = () => {
    if (hasLiked) return;
    
    // Optimistic UI Update (feels instant)
    setLikes(prev => (typeof prev === 'number' ? prev + 1 : prev));
    setHasLiked(true);
    localStorage.setItem('debi_liked', 'true');

    // API Call to database
    fetch(`https://api.counterapi.dev/v1/${NAMESPACE}/likes/up`)
      .then(res => res.json())
      .then(data => setLikes(data.count))
      .catch(console.error);
  };

  return (
    <div className={`fixed bottom-6 left-6 z-50 flex items-center gap-4 px-5 py-2.5 rounded-full shadow-2xl border backdrop-blur-md transition-all duration-1000 ${
      isDark 
        ? 'bg-slate-800/90 border-slate-700 text-slate-300 shadow-black/50' 
        : 'bg-white/90 border-orange-200 text-stone-700 shadow-orange-900/10'
    }`}>
      {/* Views Counter */}
      <div className="flex items-center gap-2 font-mono text-sm" title="Total Page Views">
        <span className="text-lg">👁️</span>
        <strong className={`transition-colors duration-1000 ${isDark ? 'text-white' : 'text-stone-900'}`}>{views}</strong>
      </div>
      
      {/* Divider */}
      <div className={`w-px h-5 transition-colors duration-1000 ${isDark ? 'bg-slate-600' : 'bg-orange-300'}`}></div>
      
      {/* Like Button */}
      <button 
        onClick={handleLike}
        disabled={hasLiked}
        className={`flex items-center gap-2 font-mono text-sm transition-all duration-300 ${
          hasLiked 
            ? 'text-pink-500 cursor-default drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]' 
            : 'hover:scale-110 active:scale-95 cursor-pointer hover:text-pink-400'
        }`}
        title="Like this portfolio!"
      >
        <span className={`text-lg transition-transform duration-300 ${hasLiked ? 'scale-110' : ''}`}>
          {hasLiked ? '❤️' : '🤍'}
        </span>
        <strong className={`transition-colors duration-1000 ${hasLiked ? 'text-pink-500' : (isDark ? 'text-white' : 'text-stone-900')}`}>
          {likes}
        </strong>
      </button>
    </div>
  );
}

// --- 10. FOOTER SECTION ---
function Footer() {
  const { isDark } = useContext(AppContext);
  return (
    <footer className={`py-6 sm:py-8 text-center border-t px-4 transition-colors duration-1000 ${isDark ? 'border-slate-800' : 'border-orange-200'}`}>
      <div className={`flex justify-center gap-6 mb-4 text-sm sm:text-base transition-colors duration-1000 ${isDark ? 'text-slate-500' : 'text-stone-500'}`}>
        <a href="https://github.com/Mr-Debi" className={`font-medium transition-colors duration-500 ${isDark ? 'hover:text-blue-500' : 'hover:text-orange-600'}`}>GitHub</a>
        <a href="mailto:debidutta.db@gmail.com" className={`font-medium transition-colors duration-500 ${isDark ? 'hover:text-blue-500' : 'hover:text-orange-600'}`}>Email</a>
        <a href="https://www.linkedin.com/in/debidutta-behera-164642275/" className={`font-medium transition-colors duration-500 ${isDark ? 'hover:text-blue-500' : 'hover:text-orange-600'}`}>LinkedIn</a>
        <a href="https://www.instagram.com/" className={`font-medium transition-colors duration-500 ${isDark ? 'hover:text-blue-500' : 'hover:text-orange-600'}`}>Instagram</a>
      </div>
      <p className={`text-xs sm:text-sm font-mono transition-colors duration-1000 ${isDark ? 'text-slate-500' : 'text-stone-400'}`}>Designed & Built by DEBIDUTTA BEHERA &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}

function Divider() {
  const { isDark } = useContext(AppContext);
  return <div className={`h-[1px] w-full bg-gradient-to-r from-transparent to-transparent my-8 sm:my-10 transition-colors duration-1000 ${isDark ? 'via-slate-700' : 'via-orange-300'}`}></div>;
}

