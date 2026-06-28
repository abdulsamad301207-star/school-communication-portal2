import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navbar - Glassmorphic */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="h-16 px-8 flex items-center justify-between border-b border-border/50 sticky top-0 bg-background/70 backdrop-blur-xl z-50"
      >
        <div className="text-accent font-bold text-lg tracking-wide flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center text-accent text-sm">SGI</div>
          Sri Gowthami Institutions
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80">
          <a href="#home" className="hover:text-foreground transition-colors">Home</a>
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login" className="text-sm font-medium hover:text-accent transition-colors">Parent Portal</Link>
          <Link to="/admin-login" className="btn-primary bg-primary hover:opacity-90 h-9 px-4 text-sm shadow-lg shadow-primary/20">Staff Login</Link>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-24 px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10 mix-blend-multiply dark:mix-blend-lighten animate-pulse duration-1000"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] -z-10 mix-blend-multiply dark:mix-blend-lighten"></div>

        {/* Hero Text content */}
        <motion.div 
          className="flex-1 space-y-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeInUp} className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-wider uppercase border border-accent/20 backdrop-blur-sm shadow-sm">
            Next-Gen Communication Portal
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight font-heading">
            One Portal.<br />Every Parent.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Always Informed.</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-lg leading-relaxed font-medium">
            Send circulars, fee reminders, attendance alerts, and exam notices instantly to all parents and students from one intelligent dashboard.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 pt-4">
            <Link to="/admin-login" className="btn-primary h-14 px-8 text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-transform">Get Started</Link>
            <a href="#how-it-works" className="btn-secondary h-14 px-8 text-lg border-border/50 hover:bg-muted/50 backdrop-blur-sm">See How It Works</a>
          </motion.div>
          <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-8 pt-8 text-sm text-muted-foreground font-semibold">
            <div className="flex items-center gap-2"><span className="flex items-center justify-center w-5 h-5 rounded-full bg-accent/20 text-accent text-xs">✓</span> 500+ parents reached</div>
            <div className="flex items-center gap-2"><span className="flex items-center justify-center w-5 h-5 rounded-full bg-accent/20 text-accent text-xs">✓</span> 3 campuses</div>
            <div className="flex items-center gap-2"><span className="flex items-center justify-center w-5 h-5 rounded-full bg-accent/20 text-accent text-xs">✓</span> Zero missed notices</div>
          </motion.div>
        </motion.div>

        {/* Hero Illustration - Floating Glassmorphic Card */}
        <motion.div 
          className="flex-1 w-full relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="card relative z-10 border-border/40 bg-card/60 backdrop-blur-xl p-10 aspect-[4/3] flex flex-col justify-center items-center shadow-2xl shadow-primary/10 rounded-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-accent/5 rounded-3xl pointer-events-none"></div>
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-8 shadow-lg shadow-accent/20"
            >
              <span className="text-4xl text-white">📱</span>
            </motion.div>
            <div className="text-2xl font-bold text-center mb-3 font-heading">Instant Delivery</div>
            <div className="text-muted-foreground text-center max-w-sm text-lg leading-relaxed">Messages reach parents immediately via the secure portal, completely bypassing WhatsApp clutter.</div>
            
            {/* Floating badges */}
            <motion.div 
               animate={{ y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute -right-6 top-1/4 bg-card border border-border shadow-xl rounded-xl p-3 flex items-center gap-3 backdrop-blur-md"
            >
               <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center">✓</div>
               <div className="text-sm font-bold">Sent to 10A</div>
            </motion.div>
            <motion.div 
               animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
               className="absolute -left-6 bottom-1/4 bg-card border border-border shadow-xl rounded-xl p-3 flex items-center gap-3 backdrop-blur-md"
            >
               <div className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center">📊</div>
               <div className="text-sm font-bold">100% Read</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Problem Statement - Bento Grid */}
      <section className="py-32 px-8 relative">
        <div className="absolute inset-0 bg-muted/30 skew-y-3 -z-10 origin-top-left"></div>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight font-heading">
              Still managing school communication with WhatsApp groups?
            </h2>
            <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
              We replaced the chaos of spreadsheets and group chats with a streamlined, professional dashboard.
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
            {/* Large Card */}
            <motion.div variants={fadeInUp} className="card md:col-span-2 md:row-span-2 bg-gradient-to-br from-card to-muted/50 border-border/50 hover:border-primary/50 transition-colors p-10 flex flex-col justify-between group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors"></div>
              <div>
                <div className="w-14 h-14 rounded-2xl bg-destructive/10 text-destructive flex items-center justify-center text-2xl mb-8">📉</div>
                <h3 className="text-3xl font-bold mb-4 font-heading">No Delivery Records</h3>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                  With WhatsApp or standard SMS, there is no way to prove a parent was notified. Disputes over fee deadlines and attendance arise constantly. Our portal tracks every single delivery and read receipt.
                </p>
              </div>
            </motion.div>

            {/* Small Card 1 */}
            <motion.div variants={fadeInUp} className="card bg-card border-border/50 hover:border-accent/50 transition-colors p-8 flex flex-col justify-center group relative overflow-hidden">
               <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-colors"></div>
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center text-xl mb-6">⏱️</div>
              <h3 className="text-xl font-bold mb-2 font-heading">Calling Wastes Hours</h3>
              <p className="text-muted-foreground leading-relaxed">Staff spend entire mornings on the phone for every exam or fee notice.</p>
            </motion.div>

            {/* Small Card 2 */}
            <motion.div variants={fadeInUp} className="card bg-card border-border/50 hover:border-primary/50 transition-colors p-8 flex flex-col justify-center group relative overflow-hidden">
               <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors"></div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl mb-6">💬</div>
              <h3 className="text-xl font-bold mb-2 font-heading">Cluttered Groups</h3>
              <p className="text-muted-foreground leading-relaxed">Important notices get buried under photos and unrelated parent messages.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 px-8 border-t border-border bg-card text-center text-muted-foreground text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="font-bold text-foreground">Sri Gowthami Institutions</div>
            <div>© 2026 Next Level Builder. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
