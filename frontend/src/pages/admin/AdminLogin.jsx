import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ArrowRight, Lock, Home } from 'lucide-react';
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
      staggerChildren: 0.1
    }
  }
};

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login({ email, password });
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  const fillDemo = (e, p) => {
    setEmail(e);
    setPassword(p);
  };

  return (
    <div className="min-h-screen flex bg-background overflow-hidden relative">
      
      {/* Background glow effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }} 
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-40 -right-40 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[150px]"
        />
      </div>

      {/* Left panel - Glassmorphic Hero */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hidden lg:flex flex-1 flex-col justify-center items-center p-12 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-card/80 to-background/20 backdrop-blur-3xl border-r border-border/50"></div>
        <div className="max-w-md text-center relative z-10">
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-10 shadow-2xl shadow-primary/30"
          >
            <Lock className="text-white w-12 h-12" />
          </motion.div>
          <h1 className="text-5xl font-bold font-heading text-foreground mb-6 leading-tight">Staff Portal</h1>
          <p className="text-muted-foreground text-xl mb-12 leading-relaxed">Manage all school communication securely from one beautifully crafted dashboard.</p>
          
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-6 text-left bg-card/40 p-8 rounded-3xl border border-border/50 backdrop-blur-md">
            <motion.div variants={fadeInUp} className="flex items-center gap-4 text-foreground font-medium"><div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">✓</div> Compose rich circulars</motion.div>
            <motion.div variants={fadeInUp} className="flex items-center gap-4 text-foreground font-medium"><div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">✓</div> Automated attendance alerts</motion.div>
            <motion.div variants={fadeInUp} className="flex items-center gap-4 text-foreground font-medium"><div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">✓</div> Track live delivery status</motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right panel - Login Form */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="flex-1 flex flex-col justify-center p-8 sm:p-12 lg:p-24 relative z-10"
      >
        <div className="w-full max-w-md mx-auto">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeInUp} className="mb-12">
              <h2 className="text-4xl font-bold font-heading text-foreground mb-3">Welcome back</h2>
              <p className="text-muted-foreground text-lg">Sign in to your staff account to continue</p>
            </motion.div>

            {error && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-8 p-4 rounded-xl bg-destructive/10 border border-destructive/50 text-destructive text-sm font-medium flex items-center gap-3">
                <span className="text-xl">⚠️</span> {error}
              </motion.div>
            )}

            <form onSubmit={handleLogin} className="space-y-6">
              <motion.div variants={fadeInUp}>
                <label className="label-text">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="staff@sgei.edu.in" 
                  className="input-field h-12 text-base bg-card/50 backdrop-blur-sm"
                />
              </motion.div>
              <motion.div variants={fadeInUp}>
                <label className="label-text">Password</label>
                <input 
                  type="password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" 
                  className="input-field h-12 text-base bg-card/50 backdrop-blur-sm"
                />
              </motion.div>
              
              <motion.button 
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="btn-primary w-full h-14 text-lg mt-8 shadow-xl shadow-primary/20"
              >
                Sign In <ArrowRight size={20} />
              </motion.button>
            </form>

            <motion.div variants={fadeInUp} className="mt-10 pt-8 border-t border-border/50">
              <div className="text-sm font-medium text-muted-foreground mb-4">Demo Credentials:</div>
              <div className="flex gap-3">
                <button type="button" onClick={() => fillDemo('admin@sgei.edu.in', 'Admin@123')} className="px-4 py-2 text-xs font-bold rounded-lg bg-card border border-border/50 hover:border-accent hover:bg-accent/5 transition-colors text-foreground flex-1">Admin Demo</button>
                <button type="button" onClick={() => fillDemo('teacher@sgei.edu.in', 'Teacher@123')} className="px-4 py-2 text-xs font-bold rounded-lg bg-card border border-border/50 hover:border-accent hover:bg-accent/5 transition-colors text-foreground flex-1">Teacher Demo</button>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8 flex items-center justify-between text-sm font-medium">
              <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Home size={16} /> Back to Home
              </Link>
              <Link to="/login" className="text-accent hover:text-accent-foreground transition-colors">
                Parent / Student Portal →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
