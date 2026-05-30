import React, { useState, useEffect, createContext, useContext } from 'react';
import profileImg from './assets/profile.png'
import profileResume from './assets/resume.pdf'


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
      <div className="absolute right-4 top-0 w-1 h-full bg-slate-400/20 rounded-full"></div>

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
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif"
          alt="Climbing Pikachu"
          className="w-10 h-10 object-contain drop-shadow-[0_0_8px_rgba(250,204,21,0.8)] transition-transform duration-100"
          style={{
            transform: isScrollingDown ? 'rotate(-90deg)' : 'scaleX(-1) rotate(-90deg)'
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
      title: "1. Neon Glowing Button",
      html: `<button class="neon-btn">Hover Me</button>`,
      css: `.neon-btn {\n  padding: 15px 30px;\n  font-size: 1.2rem;\n  color: #0ff;\n  background: transparent;\n  border: 2px solid #0ff;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: 0.3s;\n  text-transform: uppercase;\n  font-weight: bold;\n}\n.neon-btn:hover {\n  background: #0ff;\n  color: #000;\n  box-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #0ff;\n}`,
      js: `// No JS needed for this CSS magic!`
    },
    {
      title: "2. Animated Loader",
      html: `<div class="loader"></div>`,
      css: `.loader {\n  width: 50px;\n  height: 50px;\n  border: 5px solid #f3f3f3;\n  border-top: 5px solid #3498db;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}`,
      js: `// Pure CSS Loader`
    },
    {
      title: "3. Interactive Digital Clock",
      html: `<div id="clock" class="clock">00:00:00</div>`,
      css: `.clock {\n  font-size: 3rem;\n  font-family: monospace;\n  font-weight: bold;\n  color: #333;\n  padding: 20px;\n  border-radius: 10px;\n  background: #f0f0f0;\n  box-shadow: inset 5px 5px 10px #d9d9d9, inset -5px -5px 10px #ffffff;\n}`,
      js: `function updateClock() {\n  const now = new Date();\n  const time = now.toLocaleTimeString('en-US', { hour12: false });\n  document.getElementById('clock').textContent = time;\n}\nsetInterval(updateClock, 1000);\nupdateClock();`
    },
    {
      title: "4. 3D Hover Card",
      html: `<div class="card">Hover Me</div>`,
      css: `.card {\n  width: 150px;\n  height: 200px;\n  background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 15px;\n  font-weight: bold;\n  color: white;\n  transition: transform 0.5s;\n  box-shadow: 0 10px 20px rgba(0,0,0,0.1);\n}\n.card:hover {\n  transform: translateY(-10px) rotateX(10deg) rotateY(10deg);\n  box-shadow: 0 20px 30px rgba(0,0,0,0.2);\n}`,
      js: `// Pure CSS 3D Effect`
    },
    {
      title: "5. Random Color Generator",
      html: `<div id="box" class="color-box">#3498db</div>\n<button onclick="changeColor()">Generate</button>`,
      css: `.color-box {\n  width: 150px;\n  height: 100px;\n  background: #3498db;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-family: monospace;\n  font-size: 1.5rem;\n  border-radius: 8px;\n  margin-bottom: 15px;\n  transition: 0.3s;\n}\nbutton {\n  padding: 10px 20px;\n  border: none;\n  background: #333;\n  color: white;\n  border-radius: 5px;\n  cursor: pointer;\n}`,
      js: `function changeColor() {\n  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);\n  const box = document.getElementById('box');\n  box.style.background = randomColor;\n  box.textContent = randomColor;\n}`
    },
    {
      title: "6. Glassmorphism Design",
      html: `<div class="glass">Glass Effect</div>`,
      css: `body {\n  background: linear-gradient(45deg, #4facfe 0%, #00f2fe 100%);\n}\n.glass {\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 16px;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  padding: 40px;\n  color: white;\n  font-size: 1.5rem;\n  font-weight: bold;\n}`,
      js: `// Pure CSS Glass Effect`
    },
    {
      title: "7. CSS Toggle Switch",
      html: `<label class="switch">\n  <input type="checkbox">\n  <span class="slider"></span>\n</label>`,
      css: `.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n.switch input { opacity: 0; width: 0; height: 0; }\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0; left: 0; right: 0; bottom: 0;\n  background-color: #ccc;\n  transition: .4s;\n  border-radius: 34px;\n}\n.slider:before {\n  position: absolute;\n  content: "";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: .4s;\n  border-radius: 50%;\n}\ninput:checked + .slider {\n  background-color: #2196F3;\n}\ninput:checked + .slider:before {\n  transform: translateX(26px);\n}`,
      js: `// Checkbox state handled via CSS pseudo-selectors`
    },
    {
      title: "8. Auto Typing Text",
      html: `<h1 id="text" class="typing"></h1>`,
      css: `.typing {\n  font-family: monospace;\n  font-size: 2rem;\n  white-space: nowrap;\n  overflow: hidden;\n  border-right: 3px solid #333;\n  animation: blink 0.7s step-end infinite;\n}\n@keyframes blink {\n  50% { border-color: transparent; }\n}`,
      js: `const text = "Hello, World!";\nlet i = 0;\n\nfunction typeWriter() {\n  if (i < text.length) {\n    document.getElementById("text").innerHTML += text.charAt(i);\n    i++;\n    setTimeout(typeWriter, 150);\n  }\n}\ntypeWriter();`
    },
    {
      title: "9. Minimal CSS Tooltip",
      html: `<div class="tooltip">Hover Me\n  <span class="tooltiptext">Tooltip Info!</span>\n</div>`,
      css: `.tooltip {\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 120px;\n  background-color: #333;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px 0;\n  position: absolute;\n  z-index: 1;\n  bottom: 150%;\n  left: 50%;\n  margin-left: -60px;\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n  opacity: 1;\n}`,
      js: `// Tooltip purely driven by CSS :hover`
    },
    {
      title: "10. Range Slider with Value",
      html: `<div class="slider-container">\n  <input type="range" id="myRange" min="1" max="100" value="50">\n  <p>Value: <span id="val">50</span></p>\n</div>`,
      css: `.slider-container {\n  width: 80%;\n  text-align: center;\n  font-family: sans-serif;\n  font-weight: bold;\n  color: #333;\n}\ninput[type=range] {\n  width: 100%;\n}`,
      js: `const slider = document.getElementById("myRange");\nconst output = document.getElementById("val");\n\nslider.oninput = function() {\n  output.innerHTML = this.value;\n}`
    },
    {
      title: "11. Expanding Search Bar",
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

function ProjectsSection() {
  const { isDark, t } = useContext(AppContext);
  const projects = [
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
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}

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

function Footer() {
  const { isDark } = useContext(AppContext);
  return (
    <footer className={`py-6 sm:py-8 text-center border-t px-4 transition-colors duration-1000 ${isDark ? 'border-slate-800' : 'border-orange-200'}`}>
      <div className={`flex justify-center gap-6 mb-4 text-sm sm:text-base transition-colors duration-1000 ${isDark ? 'text-slate-500' : 'text-stone-500'}`}>
        <a href="https://github.com/Mr-Debi" className={`font-medium transition-colors duration-500 ${isDark ? 'hover:text-blue-500' : 'hover:text-orange-600'}`}>GitHub</a>
        <a href="mailto:debidutta.db@gmail.com" className={`font-medium transition-colors duration-500 ${isDark ? 'hover:text-blue-500' : 'hover:text-orange-600'}`}>Email</a>
      </div>
      <p className={`text-xs sm:text-sm font-mono transition-colors duration-1000 ${isDark ? 'text-slate-500' : 'text-stone-400'}`}>Designed & Built by DEBIDUTTA BEHERA &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}

function Divider() {
  const { isDark } = useContext(AppContext);
  return <div className={`h-[1px] w-full bg-gradient-to-r from-transparent to-transparent my-8 sm:my-10 transition-colors duration-1000 ${isDark ? 'via-slate-700' : 'via-orange-300'}`}></div>;
}