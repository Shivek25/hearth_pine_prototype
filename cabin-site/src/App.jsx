import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Calendar, MapPin, Coffee, Wifi, 
  Wind, Sun, Star, ArrowRight, Instagram, 
  Facebook, Mail, ChevronDown, ChevronUp, 
  Gift, Heart, Trees, Home
} from 'lucide-react';

// --- Assets & Data ---

const THEME = {
  colors: {
    primary: "bg-stone-900",
    secondary: "bg-green-900",
    accent: "bg-amber-700",
    textMain: "text-stone-800",
    textLight: "text-stone-100",
    bgLight: "bg-stone-50",
    bgWarm: "bg-orange-50/50"
  }
};

const CABINS = [
  {
    id: 1,
    name: "The A-Frame Lookout",
    price: 250,
    capacity: "2 Guests",
    description: "Perched on a ridge with panoramic valley views. Features a wood-fired hot tub and skylights for stargazing.",
    image: "https://images.unsplash.com/photo-1449156493391-d2cfa28e468b?q=80&w=2072&auto=format&fit=crop",
    amenities: ["Hot Tub", "Fire Pit", "Off-Grid Solar"]
  },
  {
    id: 2,
    name: "River's Edge Yurt",
    price: 185,
    capacity: "4 Guests",
    description: "Steps away from the rushing creek. A luxurious circular dwelling with a full wrap-around deck.",
    image: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?q=80&w=2070&auto=format&fit=crop",
    amenities: ["Riverside", "Wood Stove", "Kitchenette"]
  },
  {
    id: 3,
    name: "Forest Glass House",
    price: 320,
    capacity: "2 Guests",
    description: "Immerse yourself completely in nature with floor-to-ceiling glass walls. Maximum privacy, maximum nature.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop",
    amenities: ["Panoramic Views", "Outdoor Shower", "King Bed"]
  }
];

const FAQS = [
  { question: "Is there electricity and WiFi?", answer: "Our cabins are solar-powered. There is enough power for lights and charging devices, but we encourage a digital detox. There is no WiFi, but cell service is available at the main lodge." },
  { question: "Are pets allowed?", answer: "Yes! We are dog-friendly. We just ask that dogs remain on a leash while on the main trails to protect local wildlife." },
  { question: "How do I access the cabins?", answer: "You will park at our welcome center. From there, it is a short 5-10 minute hike to your cabin. We provide wagons for your luggage." },
  { question: "What should I pack?", answer: "Bring sturdy hiking boots, layers for cool evenings, and your favorite food to cook. We provide all linens, firewood, and basic cooking essentials." }
];

// --- Components ---

const Button = ({ children, variant = "primary", onClick, className = "" }) => {
  const baseStyle = "px-6 py-3 rounded-full font-medium transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-stone-900 text-white hover:bg-stone-800 shadow-lg",
    secondary: "bg-white text-stone-900 border border-stone-200 hover:bg-stone-50",
    accent: "bg-amber-700 text-white hover:bg-amber-800",
    outline: "border-2 border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white"
  };
  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-12 max-w-2xl mx-auto px-4">
    <h3 className="text-amber-700 font-bold uppercase tracking-widest text-sm mb-3">{subtitle}</h3>
    <h2 className="text-3xl md:text-4xl font-serif text-stone-900">{title}</h2>
    <div className="w-20 h-1 bg-amber-700 mx-auto mt-6 rounded-full"></div>
  </div>
);

// --- Page Components ---

const HomePage = ({ navigateToBooking }) => (
  <div className="animate-fade-in">
    {/* Hero */}
    <div className="relative h-[85vh] w-full overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop" 
        alt="Mountain Cabin" 
        className="absolute inset-0 w-full h-full object-cover brightness-[0.65]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6 flex items-center gap-2 text-amber-300 font-medium tracking-widest uppercase">
          <Trees size={20} />
          <span>Disconnect to Reconnect</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight">
          Find Your Wild <br /> Sanctuary
        </h1>
        <p className="text-lg md:text-xl text-stone-200 mb-10 max-w-2xl leading-relaxed">
          Luxury eco-cabins designed for slow living. Immerse yourself in the forest without sacrificing comfort.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button variant="accent" onClick={navigateToBooking} className="w-full sm:w-auto">
            Book Your Stay
          </Button>
          <Button variant="secondary" className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white hover:text-stone-900">
            View Cabins
          </Button>
        </div>
      </div>
    </div>

    {/* Intro Stats */}
    <div className="bg-stone-900 text-stone-100 py-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-stone-700">
        <div className="p-4">
          <Wind className="w-8 h-8 mx-auto mb-4 text-amber-500" />
          <h3 className="text-xl font-serif mb-2">100% Off-Grid</h3>
          <p className="text-stone-400 text-sm">Powered by solar, sustained by nature.</p>
        </div>
        <div className="p-4">
          <MapPin className="w-8 h-8 mx-auto mb-4 text-amber-500" />
          <h3 className="text-xl font-serif mb-2">Secluded Locations</h3>
          <p className="text-stone-400 text-sm">Hidden on 50 acres of private forest.</p>
        </div>
        <div className="p-4">
          <Star className="w-8 h-8 mx-auto mb-4 text-amber-500" />
          <h3 className="text-xl font-serif mb-2">Luxury Amenities</h3>
          <p className="text-stone-400 text-sm">Premium linens, hot tubs, and local coffee.</p>
        </div>
      </div>
    </div>

    {/* Featured Cabins */}
    <section className="py-24 bg-stone-50">
      <SectionHeader title="Our Dwellings" subtitle="Choose Your Escape" />
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {CABINS.map(cabin => (
          <div key={cabin.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={cabin.image} 
                alt={cabin.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-stone-900">
                ${cabin.price} / night
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-serif text-stone-900 mb-2">{cabin.name}</h3>
              <p className="text-stone-600 text-sm mb-4 line-clamp-2">{cabin.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {cabin.amenities.map(am => (
                  <span key={am} className="text-xs bg-stone-100 text-stone-600 px-2 py-1 rounded-md">{am}</span>
                ))}
              </div>
              <Button onClick={navigateToBooking} variant="outline" className="w-full text-sm">Check Availability</Button>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Experience Teaser */}
    <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
      <div className="max-w-6xl mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-serif mb-6">More Than Just a Place to Sleep</h2>
          <p className="text-stone-400 mb-8 leading-relaxed">
            We partner with local guides and artisans to curate experiences that connect you to the land. From guided foraging walks to private chef dinners cooked over an open fire.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center text-amber-500"><Coffee size={16}/></div>
              <span>Locally roasted morning coffee delivery</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center text-amber-500"><Sun size={16}/></div>
              <span>Private yoga decks in the forest</span>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1519395612519-58132638e47a?q=80&w=900&auto=format&fit=crop" className="rounded-2xl translate-y-8" alt="Campfire"/>
          <img src="https://images.unsplash.com/photo-1543315579-d100c50d603a?q=80&w=900&auto=format&fit=crop" className="rounded-2xl" alt="Coffee"/>
        </div>
      </div>
    </section>
  </div>
);

const OurStoryPage = () => (
  <div className="pt-32 pb-24 px-4 bg-stone-50 min-h-screen">
    <div className="max-w-4xl mx-auto">
      <SectionHeader title="Our Story" subtitle="Born in the Wild" />
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-stone-100">
        <div className="float-right ml-8 mb-8 w-full md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=2076&auto=format&fit=crop" 
            alt="Founders hiking" 
            className="rounded-xl shadow-lg"
          />
          <p className="text-center text-xs text-stone-500 mt-2 italic">Founders, 2023</p>
        </div>
        <p className="text-stone-600 leading-relaxed mb-6 text-lg">
          It started with a simple craving: silence. Living in the city, we found ourselves constantly connected, always notified, and rarely present.
        </p>
        <p className="text-stone-600 leading-relaxed mb-6">
          We spent three years searching for the perfect plot of land. It had to be secluded, yet accessible. It had to be wild, yet welcoming. When we found these 50 acres of old-growth pine forest, we knew we were home.
        </p>
        <p className="text-stone-600 leading-relaxed mb-6">
          Hearth & Pine was built with a "nature-first" philosophy. We didn't clear-cut; we built around the trees. We don't use grid power; we harvest the sun. Every cabin is positioned to ensure you feel like the only person on earth.
        </p>
        <h4 className="text-xl font-serif text-stone-900 mt-8 mb-4">Our Commitment</h4>
        <ul className="list-disc pl-5 text-stone-600 space-y-2">
          <li>1% of all revenue goes to local forest conservation.</li>
          <li>All toiletries are biodegradable and locally sourced.</li>
          <li>We employ local staff at living wages.</li>
        </ul>
      </div>
    </div>
  </div>
);

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="pt-32 pb-24 px-4 bg-stone-50 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <SectionHeader title="Frequently Asked Questions" subtitle="Good to Know" />
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl border border-stone-100 shadow-sm overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-stone-50 transition-colors"
              >
                <span className="font-serif text-lg text-stone-900">{faq.question}</span>
                {openIndex === index ? <ChevronUp className="text-amber-700"/> : <ChevronDown className="text-stone-400"/>}
              </button>
              <div className={`px-6 overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-stone-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const GiftPage = () => (
  <div className="pt-32 pb-24 px-4 bg-stone-50 min-h-screen">
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div>
        <div className="inline-block p-3 bg-amber-100 text-amber-800 rounded-full mb-6">
          <Gift size={24} />
        </div>
        <h2 className="text-4xl font-serif text-stone-900 mb-6">Give the Gift of Quiet</h2>
        <p className="text-stone-600 text-lg mb-8">
          Memories last longer than things. Purchase a digital voucher for a friend or loved one. Valid for 2 years from purchase date.
        </p>
        <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm mb-8">
          <div className="flex justify-between items-center mb-4 border-b border-stone-100 pb-4">
            <span className="font-medium">Weekend Escape</span>
            <span className="font-bold text-amber-700">$500</span>
          </div>
          <div className="flex justify-between items-center mb-4 border-b border-stone-100 pb-4">
            <span className="font-medium">Mid-Week Recharge</span>
            <span className="font-bold text-amber-700">$350</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">Custom Amount</span>
            <span className="font-bold text-stone-400">You Choose</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-stone-100">
        <h3 className="text-2xl font-serif mb-6">Purchase Voucher</h3>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">Select Amount</label>
            <select className="w-full p-3 bg-stone-50 border border-stone-200 rounded-lg">
              <option>$100</option>
              <option>$250</option>
              <option>$500</option>
              <option>Custom</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">From</label>
              <input type="text" placeholder="Your Name" className="w-full p-3 bg-stone-50 border border-stone-200 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">To</label>
              <input type="text" placeholder="Recipient Name" className="w-full p-3 bg-stone-50 border border-stone-200 rounded-lg" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">Message</label>
            <textarea placeholder="Write a personal note..." className="w-full p-3 bg-stone-50 border border-stone-200 rounded-lg h-24"></textarea>
          </div>
          <Button variant="primary" className="w-full">Proceed to Checkout</Button>
        </form>
      </div>
    </div>
  </div>
);

const PartnerPage = () => (
  <div className="pt-32 pb-24 px-4 bg-stone-900 text-stone-100 min-h-screen">
    <div className="max-w-4xl mx-auto text-center mb-16">
      <SectionHeader title="Partner With Us" subtitle="Landowners" />
      <p className="text-stone-400 text-lg max-w-2xl mx-auto">
        Do you own scenic land? We partner with landowners to install low-impact, sustainable cabins. We handle the bookings, management, and cleaning. You collect passive income.
      </p>
    </div>
    
    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
      {[
        { title: "Low Impact", desc: "No permanent foundations. Our cabins tread lightly on your land." },
        { title: "Full Management", desc: "We handle guest communication, cleaning, and maintenance." },
        { title: "Shared Revenue", desc: "Transparent profit-sharing models designed for long-term partnership." }
      ].map((item, idx) => (
        <div key={idx} className="bg-stone-800 p-8 rounded-xl border border-stone-700">
          <h3 className="text-xl font-serif text-white mb-3">{item.title}</h3>
          <p className="text-stone-400">{item.desc}</p>
        </div>
      ))}
    </div>

    <div className="max-w-2xl mx-auto bg-white text-stone-900 p-8 rounded-2xl">
      <h3 className="text-2xl font-serif mb-6 text-center">Inquire About Partnership</h3>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid md:grid-cols-2 gap-4">
          <input type="text" placeholder="First Name" className="w-full p-3 bg-stone-50 border border-stone-200 rounded-lg" />
          <input type="text" placeholder="Last Name" className="w-full p-3 bg-stone-50 border border-stone-200 rounded-lg" />
        </div>
        <input type="email" placeholder="Email Address" className="w-full p-3 bg-stone-50 border border-stone-200 rounded-lg" />
        <input type="text" placeholder="Property Location (City, State)" className="w-full p-3 bg-stone-50 border border-stone-200 rounded-lg" />
        <textarea placeholder="Tell us about your land..." className="w-full p-3 bg-stone-50 border border-stone-200 rounded-lg h-32"></textarea>
        <Button variant="primary" className="w-full">Submit Inquiry</Button>
      </form>
    </div>
  </div>
);

// --- Global UI Components ---

const BookingModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl animate-scale-up">
        <div className="bg-stone-900 text-white p-6 flex justify-between items-center">
          <h3 className="text-xl font-serif">Book Your Stay</h3>
          <button onClick={onClose}><X size={20}/></button>
        </div>
        <div className="p-6">
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("This would connect to the booking engine."); onClose(); }}>
            <div>
              <label className="block text-xs font-bold uppercase text-stone-500 mb-1">Dates</label>
              <div className="flex gap-2">
                <input type="date" className="w-full p-3 border border-stone-200 rounded-lg text-stone-700"/>
                <input type="date" className="w-full p-3 border border-stone-200 rounded-lg text-stone-700"/>
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-stone-500 mb-1">Guests</label>
              <select className="w-full p-3 border border-stone-200 rounded-lg bg-white text-stone-700">
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
              </select>
            </div>
             <div>
              <label className="block text-xs font-bold uppercase text-stone-500 mb-1">Cabin Preference</label>
              <select className="w-full p-3 border border-stone-200 rounded-lg bg-white text-stone-700">
                <option>Any Available</option>
                <option>The A-Frame Lookout</option>
                <option>River's Edge Yurt</option>
                <option>Forest Glass House</option>
              </select>
            </div>
            <Button variant="accent" className="w-full mt-4">Search Availability</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'story', label: 'Our Story' },
    { id: 'faq', label: 'FAQ' },
    { id: 'gift', label: 'Gift a Stay' },
    { id: 'partner', label: 'Partner' },
  ];

  const handleNav = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="font-sans antialiased text-stone-800 bg-stone-50 selection:bg-amber-200">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div 
            onClick={() => handleNav('home')} 
            className={`flex items-center gap-2 cursor-pointer ${scrolled || activePage !== 'home' ? 'text-stone-900' : 'text-white'}`}
          >
            <div className="w-10 h-10 bg-amber-700 rounded-lg flex items-center justify-center text-white">
              <Trees size={24} />
            </div>
            <span className="font-serif text-xl font-bold tracking-tight">Hearth & Pine</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`text-sm font-medium tracking-wide hover:text-amber-600 transition-colors ${
                  (scrolled || activePage !== 'home') ? 'text-stone-600' : 'text-stone-200'
                } ${activePage === link.id ? 'text-amber-600' : ''}`}
              >
                {link.label}
              </button>
            ))}
            <Button 
              variant="primary" 
              onClick={() => setBookingOpen(true)}
              className="px-5 py-2 text-sm"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden ${(scrolled || activePage !== 'home') ? 'text-stone-900' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-stone-900 flex flex-col items-center justify-center space-y-8 animate-fade-in">
          <button className="absolute top-6 right-6 text-white" onClick={() => setMobileMenuOpen(false)}>
            <X size={32} />
          </button>
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="text-2xl font-serif text-white hover:text-amber-500 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <Button variant="accent" onClick={() => { setMobileMenuOpen(false); setBookingOpen(true); }}>
            Book Your Stay
          </Button>
        </div>
      )}

      {/* Booking Modal */}
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />

      {/* Main Content Router */}
      <main className="min-h-screen">
        {activePage === 'home' && <HomePage navigateToBooking={() => setBookingOpen(true)} />}
        {activePage === 'story' && <OurStoryPage />}
        {activePage === 'faq' && <FAQPage />}
        {activePage === 'gift' && <GiftPage />}
        {activePage === 'partner' && <PartnerPage />}
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-stone-800 pb-12">
          <div>
            <div className="flex items-center gap-2 text-white mb-6">
              <div className="w-8 h-8 bg-amber-700 rounded-md flex items-center justify-center">
                <Trees size={18} />
              </div>
              <span className="font-serif text-lg font-bold">Hearth & Pine</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Curated off-grid cabins designed for the modern escaper. Disconnect from the noise, reconnect with the wild.
            </p>
            <div className="flex gap-4">
              <Instagram size={20} className="hover:text-white cursor-pointer"/>
              <Facebook size={20} className="hover:text-white cursor-pointer"/>
              <Mail size={20} className="hover:text-white cursor-pointer"/>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li onClick={() => handleNav('home')} className="cursor-pointer hover:text-amber-500">Cabins</li>
              <li onClick={() => handleNav('story')} className="cursor-pointer hover:text-amber-500">Our Story</li>
              <li onClick={() => handleNav('gift')} className="cursor-pointer hover:text-amber-500">Gift Cards</li>
              <li className="cursor-pointer hover:text-amber-500">Local Guide</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-3 text-sm">
              <li onClick={() => handleNav('faq')} className="cursor-pointer hover:text-amber-500">FAQ</li>
              <li className="cursor-pointer hover:text-amber-500">Contact Us</li>
              <li className="cursor-pointer hover:text-amber-500">Terms of Service</li>
              <li className="cursor-pointer hover:text-amber-500">Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-sm mb-4">Subscribe for last-minute availability and seasonal offers.</p>
            <div className="flex">
              <input type="email" placeholder="Email address" className="bg-stone-800 border-none text-white px-4 py-2 rounded-l-md w-full focus:ring-1 focus:ring-amber-700 outline-none" />
              <button className="bg-amber-700 text-white px-4 py-2 rounded-r-md hover:bg-amber-800">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 pt-8 text-xs text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 Hearth & Pine Hospitality Group. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for the wild.</p>
        </div>
      </footer>
      
      {/* Global CSS for animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-up {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        .animate-scale-up { animation: scale-up 0.3s ease-out forwards; }
      `}</style>
    </div>
  );
}