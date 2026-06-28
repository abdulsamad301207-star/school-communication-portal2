import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <nav className="h-16 px-8 flex items-center justify-between border-b border-border sticky top-0 bg-background/90 backdrop-blur z-50">
        <div className="text-accent font-bold text-lg tracking-wide">Sri Gowthami Institutions</div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground">
          <a href="#home" className="hover:text-foreground">Home</a>
          <a href="#features" className="hover:text-foreground">Features</a>
          <a href="#how-it-works" className="hover:text-foreground">How It Works</a>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login" className="text-sm font-medium hover:text-accent transition-colors">Parent Portal</Link>
          <Link to="/admin-login" className="btn-primary bg-primary hover:bg-red-700 h-9 px-4 text-sm">Staff Login</Link>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="pt-32 pb-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 space-y-8">
          <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-wider uppercase border border-accent/20">
            Communication Portal
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            One Portal.<br />Every Parent.<br />
            <span className="text-primary">Always Informed.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
            Send circulars, fee reminders, attendance alerts, and exam notices instantly to all parents and students from one place.
          </p>
          <div className="flex items-center gap-4 pt-4">
            <Link to="/admin-login" className="btn-primary h-12 px-8 text-base">Get Started</Link>
            <a href="#how-it-works" className="btn-secondary h-12 px-8 text-base">See How It Works</a>
          </div>
          <div className="flex items-center gap-8 pt-8 text-sm text-muted-foreground font-medium">
            <div className="flex items-center gap-2"><span className="text-accent">✓</span> 500+ parents reached</div>
            <div className="flex items-center gap-2"><span className="text-accent">✓</span> 3 campuses</div>
            <div className="flex items-center gap-2"><span className="text-accent">✓</span> Zero missed notices</div>
          </div>
        </div>
        <div className="flex-1 w-full relative">
          <div className="aspect-square bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl absolute inset-0"></div>
          <div className="card relative z-10 border-border bg-card p-8 aspect-[4/3] flex flex-col justify-center items-center shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
              <span className="text-3xl">📱</span>
            </div>
            <div className="text-xl font-bold text-center mb-2">Instant Delivery</div>
            <div className="text-muted-foreground text-center max-w-xs">Messages reach parents immediately via the secure portal.</div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-24 px-8 bg-card border-y border-border text-center">
        <h2 className="text-3xl md:text-4xl font-bold max-w-3xl mx-auto mb-16">
          Still managing school communication with WhatsApp groups and phone calls?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
          <div className="card">
            <div className="w-12 h-12 rounded-lg bg-destructive/10 text-destructive flex items-center justify-center text-xl mb-6">⏱️</div>
            <h3 className="text-xl font-bold mb-3">Calling wastes hours</h3>
            <p className="text-muted-foreground leading-relaxed">Staff spend entire mornings on the phone for every exam or fee notice.</p>
          </div>
          <div className="card">
            <div className="w-12 h-12 rounded-lg bg-destructive/10 text-destructive flex items-center justify-center text-xl mb-6">💬</div>
            <h3 className="text-xl font-bold mb-3">WhatsApp gets cluttered</h3>
            <p className="text-muted-foreground leading-relaxed">Important notices get buried under photos and unrelated messages.</p>
          </div>
          <div className="card">
            <div className="w-12 h-12 rounded-lg bg-destructive/10 text-destructive flex items-center justify-center text-xl mb-6">📉</div>
            <h3 className="text-xl font-bold mb-3">No delivery records</h3>
            <p className="text-muted-foreground leading-relaxed">No way to prove a parent was notified. Disputes arise constantly.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
