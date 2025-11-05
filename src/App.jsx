import React, { useState } from 'react';
import { 
    Menu, X, Scale, Users, Briefcase, PenTool, Home, Vote, 
    Lightbulb, Building, MapPin, Phone, Mail, CheckCircle,
    ArrowRight, ChevronDown
} from 'lucide-react';

// --- shadcn/ui-inspired Components (self-contained) ---
// We define these helper components to easily reuse modern styles.

/**
 * A modern, styled button component.
 */
const Button = React.forwardRef(({ className = '', variant = 'default', size = 'default', ...props }, ref) => {
    const variants = {
        default: 'bg-amber-500 text-slate-900 hover:bg-amber-400',
        outline: 'border border-amber-500 text-amber-500 hover:bg-amber-500/10',
        ghost: 'text-amber-500 hover:bg-amber-500/10',
        link: 'text-amber-500 underline-offset-4 hover:underline',
    };
    const sizes = {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-3 rounded-md',
        lg: 'h-11 px-8 rounded-md',
    };
    return (
        <button
            className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${variants[variant]} ${sizes[size]} ${className}`}
            ref={ref}
            {...props}
        />
    );
});

/**
 * A modern, styled card component.
 */
const Card = React.forwardRef(({ className = '', ...props }, ref) => (
    <div
        ref={ref}
        className={`rounded-xl border border-slate-700 bg-slate-800 text-slate-100 shadow-lg transition-all duration-300 hover:border-amber-500 ${className}`}
        {...props}
    />
));

const CardHeader = React.forwardRef(({ className = '', ...props }, ref) => (
    <div ref={ref} className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />
));

const CardTitle = React.forwardRef(({ className = '', ...props }, ref) => (
    <h3 ref={ref} className={`font-semibold leading-none tracking-tight ${className}`} {...props} />
));

const CardDescription = React.forwardRef(({ className = '', ...props }, ref) => (
    <p ref={ref} className={`text-sm text-slate-400 ${className}`} {...props} />
));

const CardContent = React.forwardRef(({ className = '', ...props }, ref) => (
    <div ref={ref} className={`p-6 pt-0 ${className}`} {...props} />
));

/**
 * A modern, styled input component.
 */
const Input = React.forwardRef(({ className = '', ...props }, ref) => (
    <input
        className={`flex h-10 w-full rounded-md border border-slate-600 bg-slate-800 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-0 ${className}`}
        ref={ref}
        {...props}
    />
));

/**
 * A modern, styled textarea component.
 */
const Textarea = React.forwardRef(({ className = '', ...props }, ref) => (
    <textarea
        className={`flex min-h-[80px] w-full rounded-md border border-slate-600 bg-slate-800 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-0 ${className}`}
        ref={ref}
        {...props}
    />
));

// --- Page Section Components ---

/**
 * Header and Navigation
 */
const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About Us', href: '#about' },
        { name: 'Practice Areas', href: '#practice-areas' },
        { name: 'Our Team', href: '#team' },
        { name: 'Insights', href: '#insights' }, // Added
        { name: 'FAQ', href: '#faq' }, // Added
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className="bg-slate-900/80 shadow-md sticky top-0 z-50 backdrop-blur-sm">
            <nav className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo / Firm Name */}
                   {/* Logo / Firm Name */}
<a href="#home" className="flex-shrink-0 flex items-center">
    <img
        className="block h-14 w-auto"  /* You can adjust h-14 (3.5rem) if it's too big or small */
        src="/logo.png"
        alt="A. Muchemi Muthee & Co. Advocates logo"
    />
</a>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="font-medium text-slate-300 hover:text-amber-500 transition-colors">
                                {link.name}
                            </a>
                        ))}
                    </div>
                    
                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center">
                        <Button onClick={() => window.location.href = '#contact'} className="ml-6">
                            Book Consultation
                        </Button>
                    </div>
                    
                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-amber-500 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500"
                            aria-controls="mobile-menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>
            
            {/* Mobile Menu (conditionally rendered) */}
            {isMobileMenuOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                             <a 
                                key={link.name} 
                                href={link.href} 
                                className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-slate-900 hover:bg-amber-500"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                    <div className="pt-4 pb-3 border-t border-slate-700">
                        <Button onClick={() => {
                            window.location.href = '#contact';
                            setIsMobileMenuOpen(false);
                        }} className="w-full">
                            Book Consultation
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
};

/**
 * Hero Section
 */
/**
 * Hero Section
 */
const HeroSection = () => (
    <section id="home" className="relative bg-slate-900 overflow-hidden h-[90vh] min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
            <img 
                className="w-full h-full object-cover" 
                src="/nairobi-skyline.jpg"  /* <--- THIS IS THE CHANGE */
                alt="Nairobi skyline at night"
                onError="this.src='https://placehold.co/1920x1080/0f172a/eab308?text=Image+Not+Found'"
            />
            {/* This is the dark overlay to make text readable */}
            <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"></div>
        </div>
        
        <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
            <div className="max-w-2xl">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                    Expert Legal Guidance.
                    <span className="block text-amber-500">Client-Centered Solutions.</span>
                </h1>
                <p className="mt-4 text-xl sm:text-2xl font-medium text-slate-300">
                    "Res ipsa loquitur." <span className="italic text-lg">(The thing speaks for itself)</span>
                </p>
                <p className="mt-6 text-lg text-slate-300 max-w-lg">
                    We provide unwavering professional guidance, grounded in integrity and expertise, to deliver expeditious, cost-effective, and client-centered solutions.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
                    <Button onClick={() => window.location.href = '#contact'} size="lg">
                        Book a Consultation
                    </Button>
                    <Button onClick={() => window.location.href = '#practice-areas'} variant="outline" size="lg">
                        Explore Our Services
                    </Button>
                </div>
            </div>
        </div>
    </section>
);

/**
 * About / Values Section
 */
const AboutSection = () => (
    <section id="about" className="py-16 sm:py-24 bg-slate-900 text-slate-100">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-base font-semibold text-amber-500 tracking-wide uppercase">Our Firm</h2>
                <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Our Commitment to You</p>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-300">
                    Founded on a mission to be a trusted legal partner, we are dedicated to addressing the diverse needs of our clients with precision and reliability.
                </p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {[
                    { title: 'Integrity', description: 'Upholding the highest ethical standards, ensuring transparency, honesty, and fairness in all our dealings.', icon: <CheckCircle className="h-6 w-6" /> },
                    { title: 'Client-Centric', description: 'Our clients\' needs are at the core of our decision-making, prioritizing and meeting their unique requirements.', icon: <Users className="h-6 w-6" /> },
                    { title: 'Collaboration', description: 'Believing in the power of collaboration, working seamlessly with our clients to achieve shared goals.', icon: <Briefcase className="h-6 w-6" /> },
                    { title: 'Professionalism', description: 'Maintaining a high level of professionalism in all interactions, ensuring respect, courtesy, and diligence.', icon: <Scale className="h-6 w-6" /> }
                ].map((item) => (
                    <div key={item.title} className="text-center">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-500/10 text-amber-500 mx-auto">
                            {item.icon}
                        </div>
                        <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                        <p className="mt-2 text-base text-slate-400">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

/**
 * Practice Areas Section
 */
const PracticeAreasSection = () => {
    const areas = [
        { title: 'Constitutional Law', description: 'Interpreting the constitution, addressing government structure, and fundamental rights.', icon: <Scale className="h-8 w-8 text-amber-500" /> },
        { title: 'Public Interest Litigation', description: 'Handling legal matters involving government entities and regulatory compliance.', icon: <Users className="h-8 w-8 text-amber-500" /> },
        { title: 'Commercial Law', description: 'Supporting businesses from contract drafting and negotiation to dispute resolution.', icon: <Briefcase className="h-8 w-8 text-amber-500" /> },
        { title: 'Legislative Drafting', description: 'Specializing in policy formulation and drafting sound policies, Bills, & Regulations.', icon: <PenTool className="h-8 w-8 text-amber-500" /> },
        { title: 'Land Law', description: 'Navigating property rights, land transactions, disputes, and conveyancing.', icon: <Home className="h-8 w-8 text-amber-500" /> },
        { title: 'Electoral Law & Disputes', description: 'Advising on election laws and representing clients in electoral disputes.', icon: <Vote className="h-8 w-8 text-amber-500" /> },
        { title: 'Intellectual Property Law', description: 'Safeguarding innovations by securing and enforcing trademarks, copyrights, and patents.', icon: <Lightbulb className="h-8 w-8 text-amber-500" /> },
        { title: 'Employment Law', description: 'Legal support for employers and employees, from contracts to HR policies.', icon: <Briefcase className="h-8 w-8 text-amber-500" /> },
        { title: 'County Governments', description: 'Assisting clients in navigating development approvals, payments, and notices.', icon: <Building className="h-8 w-8 text-amber-500" /> },
    ];

    return (
        <section id="practice-areas" className="py-16 sm:py-24 bg-slate-900/95">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-amber-500 tracking-wide uppercase">What We Do</h2>
                    <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Our Practice Areas</p>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-300">
                        We offer comprehensive legal support across a wide range of specialized fields.
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {areas.map((area) => (
                        <Card key={area.title}>
                            <CardHeader className="flex-row items-center gap-4">
                                {area.icon}
                                <CardTitle className="text-white text-xl">{area.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>{area.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

/**
 * Our Team Section
 */
const TeamSection = () => (
    <section id="team" className="py-16 sm:py-24 bg-slate-900">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-base font-semibold text-amber-500 tracking-wide uppercase">Our Experts</h2>
                <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Meet Our Legal Team</p>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-300">
                    A dedicated team of professionals committed to pragmatic, client-oriented solutions.
                </p>
            </div>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                {/* Team Member 1 */}
                <Card className="flex flex-col sm:flex-row gap-8 p-6 md:p-8 bg-slate-800 border-slate-700 hover:border-amber-500">
                    <div className="sm:flex-shrink-0">
                        <img className="h-48 w-48 rounded-lg object-cover shadow-lg mx-auto" 
                             src="/muchemi.png" 
                             alt="Alexander Muchemi Muthee"
                             onError="this.src='https://placehold.co/400x400/1e293b/eab308?text=Image+Not+Found'"/>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white">Alexander Muchemi Muthee</h3>
                        <p className="text-lg font-medium text-amber-500">Lead Partner & Founder</p>
                        <p className="mt-4 text-base text-slate-300">
                            Admitted in 2014, holds an LLB (Hons) from Moi University, a Post-Graduate Diploma in Project Management, and is a Certified PPP Professional.
                        </p>
                        <p className="mt-3 text-base text-slate-400">
                            Extensive experience in private practice and as a pioneer County Attorney for Laikipia County. Member of the LSK and Amnesty International.
                        </p>
                    </div>
                </Card>
                
                {/* Team Member 2 */}
                <Card className="flex flex-col sm:flex-row gap-8 p-6 md:p-8 bg-slate-800 border-slate-700 hover:border-amber-500">
                    <div className="sm:flex-shrink-0">
                        <img className="h-48 w-48 rounded-lg object-cover shadow-lg mx-auto" 
                             src="/mose.png" 
                             alt="Emmanuel Moses Wachira Muthee"
                             onError="this.src='https://placehold.co/400x400/1e293b/eab308?text=Image+Not+Found'"/>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white">Emmanuel Moses Wachira Muthee</h3>
                        <p className="text-lg font-medium text-amber-500">Associate</p>
                        <p className="mt-4 text-base text-slate-300">
                            Admitted in 2021, holds an LLB (Hons) from the University of Nairobi and is an LLM candidate in IP and Technology Law. An admitted Patent Agent with KIPI.
                        </p>
                        <p className="mt-3 text-base text-slate-400">
                            Active experience in litigation across land, family, constitutional, commercial, and employment law, with a special interest in Technology Transfer and IP.
                        </p>
                    </div>
                </Card>
            </div>
        </div>
    </section>
);

/**
 * NEW: Insights (Blog) Section
 */
const InsightsSection = () => {
    const insights = [
        {
            category: 'Commercial Law',
            title: 'Navigating the 2024 Kenyan Data Protection Act Amendments',
            description: 'The latest amendments introduce significant changes for businesses. We break down what you need to know to stay compliant.',
            imgSrc: 'https://placehold.co/600x400/1e293b/eab308?text=Legal+Update',
            href: '#',
        },
        {
            category: 'Land Law',
            title: 'E-Conveyancing in Kenya: Progress and Pitfalls',
            description: 'The digitization of land transactions promises efficiency, but new challenges have emerged. Here is our expert analysis.',
            imgSrc: 'https://placehold.co/600x400/1e293b/eab308?text=Property+Law',
            href: '#',
        },
        {
            category: 'Intellectual Property',
            title: 'Protecting Your Brand: A Guide to Trademarks in East Africa',
            description: 'Your brand is your most valuable asset. Learn the essential steps for trademark registration and protection in the EAC.',
            imgSrc: 'https://placehold.co/600x400/1e293b/eab308?text=IP+Law',
            href: '#',
        },
    ];

    return (
        <section id="insights" className="py-16 sm:py-24 bg-slate-900/95">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-amber-500 tracking-wide uppercase">Our Expertise</h2>
                    <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Legal Insights & Updates</p>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-300">
                        Stay informed with our latest articles, analyses, and legal commentary from our expert team.
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {insights.map((item) => (
                        <Card key={item.title} className="flex flex-col">
                            <img 
                                src={item.imgSrc} 
                                alt={item.title} 
                                className="rounded-t-xl h-48 w-full object-cover"
                                onError="this.src='https://placehold.co/600x400/1e293b/eab308?text=Image+Not+Found'"
                            />
                            <CardHeader>
                                <CardDescription className="text-amber-500 font-medium">{item.category}</CardDescription>
                                <CardTitle className="text-white text-xl">{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <CardDescription>{item.description}</CardDescription>
                            </CardContent>
                            <div className="p-6 pt-0">
                                <Button variant="link" className="px-0 group">
                                    Read More <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};


/**
 * Testimonials Placeholder Section
 */
const TestimonialsSection = () => (
    <section id="testimonials" className="py-16 sm:py-24 bg-amber-500 text-slate-900">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                    What Our Clients Say
                </h2>
                <div className="mt-10 max-w-3xl mx-auto">
                    <p className="text-2xl font-medium italic">
                        "This section is ready to feature powerful testimonials from your satisfied clients, building trust and credibility with new prospects."
                    </p>
                    <p className="mt-4 text-lg font-semibold">- A Future Satisfied Client</p>
                </div>
            </div>
        </div>
    </section>
);

/**
 * NEW: FAQ Section
 */
const FaqSection = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const faqs = [
        {
            question: "What should I expect during my first consultation?",
            answer: "Your first consultation is an opportunity for us to understand your legal issue in detail. You should bring any relevant documents, and we will provide an initial assessment of your case, discuss potential strategies, and outline the next steps. This meeting is confidential."
        },
        {
            question: "How are your legal fees structured?",
            answer: "We offer transparent and flexible fee structures tailored to your needs. This can include fixed fees for specific services (like conveyancing or contracts), hourly rates for complex litigation, or retainers for ongoing corporate advisory. We will discuss and agree on all fees upfront before any work begins."
        },
        {
            question: "What is a Commissioner for Oaths and a Notary Public?",
            answer: "A Commissioner for Oaths is authorized to administer oaths and take affidavits (sworn statements) for use in legal proceedings in Kenya. A Notary Public has additional authority to certify and authenticate documents for use internationally, such as academic certificates, corporate documents, or property deeds."
        },
        {
            question: "Do you handle cases outside of Nairobi and Ruiru?",
            answer: "Yes. While our primary office is in Ruiru, we represent clients across Kenya. We are equipped to handle matters in various High Courts and Magistrate's Courts throughout the country, leveraging technology and our professional networks to provide seamless representation."
        }
    ];

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <section id="faq" className="py-16 sm:py-24 bg-slate-900">
            <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-amber-500 tracking-wide uppercase">We're Here to Help</h2>
                    <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Frequently Asked Questions</p>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-300">
                        Quick answers to common questions about our services and processes.
                    </p>
                </div>
                <div className="mt-16 space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="rounded-xl border border-slate-700 bg-slate-800 shadow-lg">
                            <button
                                onClick={() => toggleFaq(index)}
                                className="flex justify-between items-center w-full p-6 text-left"
                            >
                                <span className="text-lg font-medium text-white">{faq.question}</span>
                                <ChevronDown
                                    className={`h-6 w-6 text-amber-500 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
                                />
                            </button>
                            <div
                                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                            >
                                <div className="overflow-hidden">
                                    <p className="px-6 pb-6 text-base text-slate-300">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


/**
 * Contact Section
 */
const ContactSection = () => {
    const [formSuccess, setFormSuccess] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Simulate form submission
        setFormSuccess(true);
        
        // Reset form after a few seconds
        setTimeout(() => {
            event.target.reset();
            setFormSuccess(false);
        }, 5000);
    };

    return (
        <section id="contact" className="py-16 sm:py-24 bg-slate-900/95">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Get In Touch</h2>
                        <p className="mt-4 text-xl text-slate-300">
                            We are here to help. Reach out to us to schedule a consultation and discuss your legal needs.
                        </p>
                        <div className="mt-10 space-y-6">
                            {[
                                { title: 'Our Office', lines: ['Room T14, Premier Northpark Building,', 'Eastern Bypass, Ruiru, Kenya.'], icon: <MapPin className="h-6 w-6 text-amber-500" /> },
                                { title: 'Call Us', lines: ['+254 722 746 293', '+254 714 094 094'], hrefs: ['tel:+254722746293', 'tel:+254714094094'], icon: <Phone className="h-6 w-6 text-amber-500" /> },
                                { title: 'Email Us', lines: ['info@muchemilaw.com'], hrefs: ['mailto:info@muchemilaw.com'], icon: <Mail className="h-6 w-6 text-amber-500" /> }
                            ].map((item) => (
                                <div key={item.title} className="flex gap-4">
                                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-slate-800 rounded-lg">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                                        {item.lines.map((line, index) => (
                                            item.hrefs ? (
                                                <a key={index} href={item.hrefs[index]} className="block text-base text-slate-300 hover:text-amber-500">{line}</a>
                                            ) : (
                                                <p key={index} className="text-base text-slate-300">{line}</p>
                                            )
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Contact Form */}
                    <Card className="p-8 bg-slate-800 border-slate-700">
                        <form id="contact-form" className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-300">Full Name</label>
                                <Input type="text" name="name" id="name" autoComplete="name" required className="mt-1" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-300">Email Address</label>
                                <Input id="email" name="email" type="email" autoComplete="email" required className="mt-1" />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-slate-300">Subject</label>
                                <Input type="text" name="subject" id="subject" required className="mt-1" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-300">Message</label>
                                <Textarea id="message" name="message" rows="4" required className="mt-1" />
                            </div>
                            
                            {formSuccess ? (
                                <div className="flex items-center space-x-2 rounded-md bg-green-500/10 p-3 text-green-400">
                                    <CheckCircle className="h-5 w-5" />
                                    <p className="text-sm font-medium">Message sent! We will be in touch soon.</p>
                                </div>
                            ) : (
                                <div>
                                    <Button type="submit" className="w-full" size="lg">
                                        Send Message
                                    </Button>
                                </div>
                            )}
                        </form>
                    </Card>
                </div>
            </div>
        </section>
    );
};

/**
 * Footer
 */
const Footer = () => (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Column 1: About */}
                <div className="md:col-span-1">
                    <a href="#home" className="flex-shrink-0 flex items-center">
                        <div>
                            <span className="text-2xl font-bold text-white">A. Muchemi Muthee</span>
                            <span className="block text-sm font-medium text-amber-500 -mt-1">& Co. Advocates</span>
                        </div>
                    </a>
                    <p className="mt-4 text-base">
                        Commissioner for Oaths and Notary Public.
                    </p>
                    <p className="mt-2 text-base italic">
                        "Res ipsa loquitur."
                    </p>
                </div>
                
                {/* Column 2: Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white tracking-wider uppercase">Quick Links</h3>
                    <ul className="mt-4 space-y-2">
                        <li><a href="#home" className="hover:text-amber-500 transition-colors">Home</a></li>
                        <li><a href="#about" className="hover:text-amber-500 transition-colors">About Us</a></li>
                        <li><a href="#practice-areas" className="hover:text-amber-500 transition-colors">Practice Areas</a></li>
                        <li><a href="#team" className="hover:text-amber-500 transition-colors">Our Team</a></li>
                        <li><a href="#insights" className="hover:text-amber-500 transition-colors">Insights</a></li>
                        <li><a href="#faq" className="hover:text-amber-500 transition-colors">FAQ</a></li>
                        <li><a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a></li>
                    </ul>
                </div>
                
                {/* Column 3: Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold text-white tracking-wider uppercase">Contact Info</h3>
                    <ul className="mt-4 space-y-3">
                        <li className="flex gap-3">
                            <MapPin className="flex-shrink-0 h-6 w-6 text-amber-500/70" />
                            <span>Room T14, Premier Northpark Building, Eastern Bypass, Ruiru, Kenya.</span>
                        </li>
                        <li className="flex gap-3">
                            <Phone className="flex-shrink-0 h-6 w-6 text-amber-500/70" />
                            <span><a href="tel:+254722746293" className="hover:text-amber-500 transition-colors">+254 722 746 293</a></span>
                        </li>
                        <li className="flex gap-3">
                            <Mail className="flex-shrink-0 h-6 w-6 text-amber-500/70" />
                            <span><a href="mailto:info@muchemilaw.com" className="hover:text-amber-500 transition-colors">info@muchemilaw.com</a></span>
                        </li>
                    </ul>
                </div>
            </div>
            
            {/* Footer Bottom */}
            <div className="mt-12 border-t border-slate-800 pt-8 text-center">
                <p className="text-base">
                    &copy; {new Date().getFullYear()} A. Muchemi Muthee & Co. Advocates. All Rights Reserved.
                </p>
            </div>
        </div>
    </footer>
);


/**
 * Main App Component
 */
export default function App() {
    return (
        <div className="bg-slate-900 text-slate-100 antialiased font-sans">
            <Header />
            <main>
                <HeroSection />
                <AboutSection />
                <PracticeAreasSection />
                <TeamSection />
                <InsightsSection />
                <TestimonialsSection />
                <FaqSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}