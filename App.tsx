import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Terminal, 
  Target, 
  Award, 
  CheckCircle2, 
  Clock, 
  Users, 
  ChevronDown, 
  Star,
  Lock,
  ArrowRight,
  Menu,
  X,
  CreditCard,
  Play,
  DollarSign,
  Briefcase,
  Globe,
  MessageCircle,
  AlertTriangle
} from 'lucide-react';
import { AiAssistant } from './components/AiAssistant';
import { Currency, CurriculumWeek, Testimonial, PaymentStatus } from './types';

// --- DATA CONSTANTS ---

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Emmanuel Adebayo",
    role: "Junior Penetration Tester",
    location: "Lagos, Nigeria",
    image: "https://picsum.photos/seed/emm/150/150",
    content: "I didn't know anything about Linux before this. The 30,000 Naira investment got me a job that pays 10x that monthly. The instructor breaks it down so simply.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Computer Science Student",
    location: "USA",
    image: "https://picsum.photos/seed/sarah/150/150",
    content: "Most $20 courses are just slides. This was hands-on from Day 1. I hacked my first (authorized) machine in Week 3. Insane value.",
    rating: 5
  },
  {
    id: 3,
    name: "Chinedu Okeke",
    role: "Freelance Bug Hunter",
    location: "Abuja, Nigeria",
    image: "https://picsum.photos/seed/chin/150/150",
    content: "Honestly, I thought it was a scam because it was so cheap. But the curriculum is solid. The Nmap and Burp Suite sections are world-class.",
    rating: 5
  },
  {
    id: 4,
    name: "David Chen",
    role: "IT Support Specialist",
    location: "Canada",
    image: "https://picsum.photos/seed/david/150/150",
    content: "Perfect for beginners. I moved from IT support to the security team in my company after showing them the certificate and my capstone project.",
    rating: 5
  },
  {
    id: 5,
    name: "Zainab Ibrahim",
    role: "Network Intern",
    location: "Kano, Nigeria",
    image: "https://picsum.photos/seed/zainab/150/150",
    content: "The mentorship is real. The community support helped me fix my Kali Linux installation in minutes. Highly recommended for absolute beginners.",
    rating: 5
  }
];

const CURRICULUM: CurriculumWeek[] = [
  {
    week: 1,
    title: "Setting The Stage & Linux Mastery",
    description: "Build your hacking lab and master the command line.",
    topics: ["VirtualBox & Kali Linux Setup", "Linux File System & Permissions", "Essential BASH Scripting", "Networking 101 for Hackers"]
  },
  {
    week: 2,
    title: "Reconnaissance & Scanning",
    description: "Learn how to find targets and map networks like a pro.",
    topics: ["Passive vs Active Recon", "Google Dorking Secrets", "Nmap Advanced Scanning", "Identifying Live Hosts & Services"]
  },
  {
    week: 3,
    title: "Web Application Hacking",
    description: "The most lucrative skill. Learn to break websites.",
    topics: ["OWASP Top 10 Overview", "SQL Injection (SQLi) Deep Dive", "Cross-Site Scripting (XSS)", "Burp Suite Fundamentals"]
  },
  {
    week: 4,
    title: "System Hacking & Capstone",
    description: "Gain access, maintain persistence, and cover tracks.",
    topics: ["Password Cracking (Hydra/John)", "Metasploit Framework", "Privilege Escalation Basics", "Final Capture The Flag (CTF) Project"]
  }
];

const VIDEOS = [
  {
    id: 1,
    title: "Course Preview: Setting up Kali Linux",
    thumbnail: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Placeholder
  },
  {
    id: 2,
    title: "How I Made $500 in 1 Hour (Bug Bounty)",
    thumbnail: "https://images.unsplash.com/photo-1563206767-5b1d972d9fb7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Placeholder
  },
  {
    id: 3,
    title: "Student Success Stories 2024",
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Placeholder
  }
];

const LOGO_URL = "https://lh3.googleusercontent.com/pw/AP1GczO2k_t863C9QyF-tM0o_vT5W3uW1qS59M0s3k36S6P8zB2rJ4w6_vT5W3uW1qS59M0s3k36S6P8zB2rJ4w6=w250-h250-s-no-gm";

// --- SUB COMPONENTS ---

const Header = ({ onEnroll }: { onEnroll: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-brand-darker/90 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={LOGO_URL} alt="JT Logo" className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-brand-orange" />
          <span className="font-mono font-bold text-xl sm:text-2xl tracking-tighter text-white">
            <span className="text-brand-orange">Ethical</span>Hacker
          </span>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#money" className="text-gray-300 hover:text-brand-orange transition text-sm font-medium">Career & Money</a>
          <a href="#curriculum" className="text-gray-300 hover:text-brand-orange transition text-sm font-medium">Curriculum</a>
          <a href="#videos" className="text-gray-300 hover:text-brand-orange transition text-sm font-medium">Previews</a>
          <button 
            onClick={onEnroll}
            className="bg-white text-brand-darker hover:bg-gray-100 px-5 py-2 rounded-full font-bold text-sm transition transform hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          >
            Start Learning
          </button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-darker border-b border-white/10 absolute w-full p-4 flex flex-col gap-4 shadow-xl z-50">
          <a href="#money" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 py-2">Make Money</a>
          <a href="#curriculum" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 py-2">Curriculum</a>
          <a href="#videos" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 py-2">Videos</a>
          <button onClick={() => { setMobileMenuOpen(false); onEnroll(); }} className="bg-brand-orange text-white text-center py-3 rounded-lg font-bold">Enroll Now</button>
        </div>
      )}
    </nav>
  );
};

const CountdownTimer = () => {
  // Hardcoded for demo purposes to always show some urgency
  return (
    <div className="flex gap-4 text-center">
      <div>
        <div className="bg-slate-800 rounded-lg p-2 min-w-[50px] border border-slate-700">
          <span className="text-xl font-mono font-bold text-brand-orange">02</span>
        </div>
        <span className="text-[10px] text-gray-500 uppercase">Days</span>
      </div>
      <div>
        <div className="bg-slate-800 rounded-lg p-2 min-w-[50px] border border-slate-700">
          <span className="text-xl font-mono font-bold text-brand-orange">14</span>
        </div>
        <span className="text-[10px] text-gray-500 uppercase">Hours</span>
      </div>
      <div>
        <div className="bg-slate-800 rounded-lg p-2 min-w-[50px] border border-slate-700">
          <span className="text-xl font-mono font-bold text-brand-orange">35</span>
        </div>
        <span className="text-[10px] text-gray-500 uppercase">Mins</span>
      </div>
    </div>
  );
}

const Hero = ({ onEnroll }: { onEnroll: () => void }) => {
  const [email, setEmail] = useState('');

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Pass email to enrollment flow effectively
      onEnroll();
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Matrix Effect Placeholder */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-brand-darker/95 via-brand-darker/80 to-brand-darker"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-4 py-1.5 rounded-full mb-6 animate-pulse">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              <span className="text-red-400 text-xs sm:text-sm font-bold tracking-wide uppercase">Only 15 Slots Remaining for December Batch</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6 leading-tight">
              Launch Your <span className="text-brand-orange">$100k+</span> <br/>
              Cybersecurity Career.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-8 leading-relaxed mx-auto lg:mx-0">
              The complete "Zero to Hero" Ethical Hacking roadmap. Learn to hack (legally), secure systems, and get paid for it in just 30 days.
            </p>

            {/* Lead Gen Form in Hero */}
            <div className="max-w-md mx-auto lg:mx-0 bg-slate-900/80 p-1 rounded-xl border border-white/10 mb-8 backdrop-blur-sm">
              <form onSubmit={handleHeroSubmit} className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email address..." 
                  className="flex-1 bg-transparent text-white px-4 py-3 focus:outline-none placeholder:text-gray-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="bg-brand-orange hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-bold transition flex items-center justify-center gap-2 whitespace-nowrap">
                  Join Now <ArrowRight size={18} />
                </button>
              </form>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500">
               <div className="flex items-center gap-2">
                 <CheckCircle2 size={16} className="text-green-500" /> 100% Beginner Friendly
               </div>
               <div className="flex items-center gap-2">
                 <CheckCircle2 size={16} className="text-green-500" /> Certificate Included
               </div>
            </div>
          </div>

          {/* Hero Image / Video Placeholder */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
             <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl shadow-brand-orange/20 bg-slate-900 aspect-video group cursor-pointer" onClick={() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition flex items-center justify-center z-10">
                   <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center shadow-lg shadow-orange-500/50 transform group-hover:scale-110 transition">
                      <Play fill="white" className="ml-1 text-white" />
                   </div>
                </div>
                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="Hacking Lab" className="w-full h-full object-cover" />
                <div className="absolute bottom-4 left-4 z-10 bg-black/70 px-3 py-1 rounded text-xs font-mono text-white border border-white/10">
                   Preview: Week 1 Lab
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const MoneySection = () => {
  return (
    <section id="money" className="py-20 bg-brand-dark relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-2 block">Why Learn This?</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ethical Hacking is a <span className="text-green-500">Goldmine</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">This isn't just a hobby. It's one of the highest-paying skills in the tech world today. Here is how our students make money:</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           {/* Bug Bounty */}
           <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 relative hover:-translate-y-2 transition duration-300">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                 <DollarSign size={100} className="text-green-500" />
              </div>
              <div className="w-12 h-12 bg-green-900/20 rounded-xl flex items-center justify-center mb-6 text-green-500">
                 <Target size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">1. Bug Bounties</h3>
              <p className="text-gray-400 mb-4 text-sm">Companies like Facebook, Google, and Uber pay hackers to find weak spots. You get paid per bug.</p>
              <ul className="text-sm text-gray-300 space-y-2">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-brand-orange"/> Avg per bug: $500 - $5,000</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-brand-orange"/> Work from anywhere</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-brand-orange"/> No boss, no schedule</li>
              </ul>
           </div>

           {/* Freelancing */}
           <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 relative hover:-translate-y-2 transition duration-300">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                 <Globe size={100} className="text-blue-500" />
              </div>
              <div className="w-12 h-12 bg-blue-900/20 rounded-xl flex items-center justify-center mb-6 text-blue-500">
                 <Briefcase size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">2. Freelancing</h3>
              <p className="text-gray-400 mb-4 text-sm">Offer security audits and penetration testing services to small businesses on Upwork and Fiverr.</p>
              <ul className="text-sm text-gray-300 space-y-2">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-brand-orange"/> Rate: $50 - $150 / hour</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-brand-orange"/> High demand, low supply</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-brand-orange"/> Build your own agency</li>
              </ul>
           </div>

           {/* Full Time Job */}
           <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 relative hover:-translate-y-2 transition duration-300">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                 <ShieldCheck size={100} className="text-purple-500" />
              </div>
              <div className="w-12 h-12 bg-purple-900/20 rounded-xl flex items-center justify-center mb-6 text-purple-500">
                 <Award size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">3. Cyber Security Analyst</h3>
              <p className="text-gray-400 mb-4 text-sm">Get hired by banks, tech companies, and government agencies to protect their data.</p>
              <ul className="text-sm text-gray-300 space-y-2">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-brand-orange"/> Junior Salary: ₦300k - ₦600k/mo</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-brand-orange"/> Career stability</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-brand-orange"/> Rapid promotion path</li>
              </ul>
           </div>
        </div>
      </div>
    </section>
  );
}

const VideoSection = () => {
  return (
    <section id="videos" className="py-20 bg-brand-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Sneak Peek Inside</h2>
            <p className="text-gray-400">See exactly what you'll be learning. No fluff, just skills.</p>
          </div>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-brand-orange font-bold hover:text-orange-400 flex items-center gap-2">
            Visit our YouTube Channel <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {VIDEOS.map((video) => (
            <a key={video.id} href={video.url} target="_blank" rel="noopener noreferrer" className="group block bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-brand-orange transition-all">
              <div className="relative aspect-video">
                <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:opacity-80 transition" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition">
                    <Play fill="white" size={20} className="text-white ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-white font-bold group-hover:text-brand-orange transition line-clamp-2">{video.title}</h3>
                <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                  <span>10 mins</span>
                  <span>•</span>
                  <span>Free Preview</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section className="py-20 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-brand-orange/50 transition duration-300">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-blue-500">
              <Terminal size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">100 Practical Labs</h3>
            <p className="text-gray-400">No boring theory. You'll set up your own hacking lab and practice attacks on real-world simulations.</p>
          </div>
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-brand-orange/50 transition duration-300">
            <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-6 text-green-500">
              <ShieldCheck size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Beginner Friendly</h3>
            <p className="text-gray-400">Designed for people with ZERO experience. We explain every concept from the ground up.</p>
          </div>
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-brand-orange/50 transition duration-300">
            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 text-purple-500">
              <Award size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Certification Included</h3>
            <p className="text-gray-400">Earn a verifiable certificate of completion to boost your CV and LinkedIn profile.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const CurriculumSection = () => {
  return (
    <section id="curriculum" className="py-24 bg-brand-darker relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">What You Will <span className="text-brand-orange">Master</span></h2>
          <p className="text-gray-400">A structured 4-week roadmap to go from novice to capable hacker.</p>
        </div>

        <div className="space-y-6">
          {CURRICULUM.map((week, idx) => (
            <div key={idx} className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-brand-orange transition-all duration-300">
              <div className="absolute -left-3 top-8 w-6 h-6 bg-brand-orange rounded-full border-4 border-brand-darker hidden md:block z-10"></div>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <span className="inline-block px-4 py-1 bg-slate-800 text-brand-orange font-mono font-bold rounded text-sm">WEEK 0{week.week}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-orange transition-colors">{week.title}</h3>
                  <p className="text-gray-400 mb-4">{week.description}</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {week.topics.map((topic, tIdx) => (
                      <div key={tIdx} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle2 size={16} className="text-brand-orange flex-shrink-0" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Don't Just Take Our Word For It</h2>
          <p className="text-gray-400">Join a community of successful graduates.</p>
        </div>

        {/* Scrolling Marquee / Grid for Mobile */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:bg-slate-800 transition duration-300">
              <div className="flex items-center gap-4 mb-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border border-slate-600" />
                <div>
                  <h4 className="text-white font-bold">{t.name}</h4>
                  <p className="text-xs text-brand-orange">{t.role}</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">{t.location}</p>
                </div>
              </div>
              <div className="flex text-yellow-500 mb-3">
                {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed italic">"{t.content}"</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
           <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 px-4 py-2 rounded-full border border-green-500/20">
              <Users size={16} />
              <span className="font-mono text-sm">Join 500+ active students in the Discord</span>
           </div>
        </div>
      </div>
    </section>
  );
};

const PricingSection = ({ onEnroll }: { onEnroll: () => void }) => {
  const [currency, setCurrency] = useState<Currency>(Currency.NGN);

  return (
    <section id="pricing" className="py-24 bg-brand-darker relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-900/20 via-transparent to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Invest In Your Future</h2>
          
          <div className="flex flex-col items-center gap-4">
            <CountdownTimer />
            <p className="text-red-500 text-sm font-bold mt-4 animate-pulse">⚠️ Price increases in 2 days!</p>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <span className={`text-sm font-bold ${currency === Currency.USD ? 'text-white' : 'text-gray-500'}`}>USD ($)</span>
            <button 
              onClick={() => setCurrency(prev => prev === Currency.USD ? Currency.NGN : Currency.USD)}
              className="w-14 h-7 bg-slate-700 rounded-full p-1 relative transition-colors"
            >
              <div className={`w-5 h-5 bg-brand-orange rounded-full shadow-lg transform transition-transform ${currency === Currency.NGN ? 'translate-x-7' : 'translate-x-0'}`}></div>
            </button>
            <span className={`text-sm font-bold ${currency === Currency.NGN ? 'text-white' : 'text-gray-500'}`}>NGN (₦)</span>
          </div>
        </div>

        <div className="bg-slate-900 border-2 border-brand-orange rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl shadow-orange-900/20">
           <div className="absolute top-0 right-0 bg-brand-orange text-white text-xs font-bold px-4 py-2 rounded-bl-xl uppercase tracking-wider">
             Best Seller
           </div>

           <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8 border-b border-white/10 pb-8">
             <div>
               <h3 className="text-2xl font-bold text-white">Full Access Pass</h3>
               <p className="text-gray-400 mt-1">Everything you need to start hacking.</p>
             </div>
             <div className="text-center md:text-right">
                <div className="text-gray-500 line-through text-lg font-mono">
                  {currency === Currency.USD ? '$150' : '₦150,000'}
                </div>
                <div className="text-5xl md:text-6xl font-black text-white tracking-tight">
                  {currency === Currency.USD ? '$20' : '₦30,000'}
                </div>
                <div className="text-green-500 font-bold text-sm mt-1">85% OFF - Limited Time</div>
             </div>
           </div>

           <div className="grid md:grid-cols-2 gap-6 mb-10">
             <ul className="space-y-4">
               <li className="flex items-center gap-3 text-gray-300">
                 <CheckCircle2 size={20} className="text-brand-orange" />
                 <span>4 Weeks of Structured Content</span>
               </li>
               <li className="flex items-center gap-3 text-gray-300">
                 <CheckCircle2 size={20} className="text-brand-orange" />
                 <span>10+ Hands-on Labs</span>
               </li>
               <li className="flex items-center gap-3 text-gray-300">
                 <CheckCircle2 size={20} className="text-brand-orange" />
                 <span>Lifetime Access to Materials</span>
               </li>
             </ul>
             <ul className="space-y-4">
               <li className="flex items-center gap-3 text-gray-300">
                 <CheckCircle2 size={20} className="text-brand-orange" />
                 <span>Private Discord Community</span>
               </li>
               <li className="flex items-center gap-3 text-gray-300">
                 <CheckCircle2 size={20} className="text-brand-orange" />
                 <span>Certificate of Completion</span>
               </li>
               <li className="flex items-center gap-3 text-gray-300">
                 <CheckCircle2 size={20} className="text-brand-orange" />
                 <span>Weekly Q&A Sessions</span>
               </li>
             </ul>
           </div>

           <button 
             onClick={onEnroll}
             className="w-full bg-brand-orange hover:bg-orange-600 text-white font-bold text-xl py-5 rounded-xl transition-all transform hover:scale-[1.02] shadow-xl flex items-center justify-center gap-3"
           >
             <Lock size={24} />
             Enroll Now - Secure Your Spot
           </button>
           
           <p className="text-center text-gray-500 text-sm mt-6 flex items-center justify-center gap-2">
             <Clock size={14} /> 30-Day Money Back Guarantee
           </p>
        </div>
      </div>
    </section>
  );
}

const Footer = () => (
  <footer className="bg-brand-darker border-t border-white/5 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-2">
         <div className="w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center font-bold text-white text-xs">JT</div>
         <span className="text-gray-400 font-mono text-sm">© 2024 ZeroToHacker Academy</span>
      </div>
      <div className="flex gap-6 text-sm text-gray-500">
        <a href="#" className="hover:text-white transition">Privacy Policy</a>
        <a href="#" className="hover:text-white transition">Terms of Service</a>
        <a href="#" className="hover:text-white transition">Contact</a>
      </div>
      <div className="flex items-center gap-2 text-gray-500 text-sm">
        <CreditCard size={16} />
        <span>Secured by Paystack</span>
      </div>
    </div>
  </footer>
);

// --- MODAL COMPONENTS ---

const PaymentModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [status, setStatus] = useState<PaymentStatus>('details');
  const [form, setForm] = useState({ name: '', email: '', phone: '' });

  if (!isOpen) return null;

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email) {
      // Logic to save lead details would go here
      setStatus('processing');
      // Simulate Paystack loading
      setTimeout(() => {
        setStatus('success');
      }, 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white">
          <X size={24} />
        </button>

        {status === 'details' && (
          <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-2">Final Step</h3>
            <p className="text-gray-400 text-sm mb-6">Enter your details to generate your receipt and access key.</p>
            
            <form onSubmit={handleDetailsSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-brand-orange focus:outline-none"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={e => setForm({...form, name: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-brand-orange focus:outline-none"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})}
                  required
                />
              </div>
              <div>
                 <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Phone (For WhatsApp)</label>
                 <input 
                   type="tel" 
                   className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-brand-orange focus:outline-none"
                   placeholder="+234..."
                   value={form.phone}
                   onChange={e => setForm({...form, phone: e.target.value})}
                 />
              </div>

              <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg mt-6 flex items-center justify-center gap-2 transition">
                <CreditCard size={20} /> Pay ₦30,000 via Paystack
              </button>
              
              <p className="text-center text-xs text-gray-500 flex items-center justify-center gap-1">
                <Lock size={10} /> Secured by Paystack
              </p>
            </form>
          </div>
        )}

        {status === 'processing' && (
          <div className="p-12 text-center flex flex-col items-center justify-center h-[400px]">
             <div className="w-16 h-16 border-4 border-brand-orange border-t-transparent rounded-full animate-spin mb-6"></div>
             <h3 className="text-xl font-bold text-white">Contacting Paystack...</h3>
             <p className="text-gray-400 mt-2">Please do not close this window.</p>
          </div>
        )}

        {status === 'success' && (
          <div className="p-8 text-center bg-gradient-to-b from-green-900/20 to-slate-900">
             <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
                <CheckCircle2 size={40} className="text-white" />
             </div>
             <h3 className="text-2xl font-bold text-white mb-2">Welcome Aboard!</h3>
             <p className="text-gray-300 mb-8">Payment Successful. Your login details have been sent to <b>{form.email}</b>.</p>
             
             <div className="bg-slate-800/50 p-4 rounded-xl border border-white/10 mb-6">
                <p className="text-sm text-brand-orange font-bold mb-3 animate-pulse">👇 IMPORTANT: NEXT STEP</p>
                <button 
                  onClick={() => window.open('https://whatsapp.com', '_blank')}
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition shadow-lg"
                >
                  <MessageCircle size={24} /> Join Class WhatsApp Group
                </button>
                <p className="text-xs text-gray-500 mt-3">Click above to join the mentors and other students.</p>
             </div>

             <button onClick={onClose} className="text-gray-400 hover:text-white text-sm underline">
               Close Window
             </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEnrollClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-brand-darker font-sans text-white selection:bg-brand-orange selection:text-white">
      <Header onEnroll={handleEnrollClick} />
      <main>
        <Hero onEnroll={handleEnrollClick} />
        <MoneySection />
        <Features />
        <VideoSection />
        <CurriculumSection />
        <TestimonialsSection />
        <PricingSection onEnroll={handleEnrollClick} />
      </main>
      <Footer />
      <AiAssistant />
      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
