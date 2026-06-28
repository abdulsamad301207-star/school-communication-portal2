import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ArrowRight, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

export default function PortalLogin() {
  const [tab, setTab] = useState('parent'); // 'parent' or 'student'
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const creds = tab === 'parent' 
        ? { email: userId, password } 
        : { roll_number: userId, password };
      await login(creds);
      navigate('/portal/inbox');
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  const fillDemo = () => {
    if (tab === 'parent') {
      setUserId('rajesh.sharma@sgei.edu.in');
      setPassword('Parent@123');
    } else {
      setUserId('STU001');
      setPassword('Student@123');
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }} 
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-40 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]"
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md bg-card/60 backdrop-blur-2xl rounded-3xl border border-border/50 p-10 shadow-2xl shadow-primary/10 relative overflow-hidden"
      >
        {/* Decorative accent */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient-x"></div>

        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="text-center mb-10">
          <motion.div variants={fadeInUp} className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 text-primary rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-inner border border-primary/20">
            <GraduationCap size={40} />
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold font-heading text-foreground mb-2 tracking-tight">Access Portal</motion.h2>
          <motion.p variants={fadeInUp} className="text-muted-foreground font-medium">Enter your registered credentials</motion.p>
        </motion.div>

        {/* Animated Tabs */}
        <motion.div variants={fadeInUp} className="relative flex p-1 bg-background/50 backdrop-blur-md rounded-xl mb-8 border border-border/50">
          {tab === 'student' && (
            <motion.div layoutId="activeTab" className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-card rounded-lg shadow-sm right-1" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
          )}
          {tab === 'parent' && (
            <motion.div layoutId="activeTab" className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-card rounded-lg shadow-sm left-1" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
          )}
          
          <button 
            onClick={() => setTab('parent')}
            className={`flex-1 py-3 text-sm font-bold rounded-lg transition-colors relative z-10 ${tab === 'parent' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
          >
            Parent
          </button>
          <button 
            onClick={() => setTab('student')}
            className={`flex-1 py-3 text-sm font-bold rounded-lg transition-colors relative z-10 ${tab === 'student' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
          >
            Student
          </button>
        </motion.div>

        <AnimatePresence mode="wait">
          {error && (
            <motion.div 
              initial={{ opacity: 0, height: 0, mb: 0 }} 
              animate={{ opacity: 1, height: 'auto', mb: 24 }} 
              exit={{ opacity: 0, height: 0, mb: 0 }}
              className="p-4 rounded-xl bg-destructive/10 border border-destructive/50 text-destructive text-sm font-medium text-center flex items-center justify-center gap-2 overflow-hidden"
            >
              <span className="text-lg">⚠️</span> {error}
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleLogin} className="space-y-6">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeInUp}>
              <label className="label-text">
                {tab === 'parent' ? 'Registered Email Address' : 'Student Roll Number'}
              </label>
              <input 
                type="text" 
                required
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder={tab === 'parent' ? 'parent@email.com' : 'e.g., STU001'} 
                className="input-field h-12 text-base bg-background/50"
              />
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-6">
              <label className="label-text">Password</label>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••" 
                className="input-field h-12 text-base bg-background/50"
              />
            </motion.div>
            
            <motion.button 
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              className="btn-primary w-full h-14 text-lg mt-8 shadow-xl shadow-primary/20"
            >
              Secure Login <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </form>

        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
          className="mt-8 pt-6 border-t border-border/50 text-center text-sm font-medium text-muted-foreground"
        >
          <button onClick={fillDemo} className="px-4 py-2 rounded-lg bg-background/50 border border-border/50 hover:bg-accent/10 hover:text-accent hover:border-accent/30 transition-all">
            Use Demo {tab === 'parent' ? 'Parent' : 'Student'} Credentials
          </button>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-10 flex items-center justify-center gap-6 text-sm font-medium text-muted-foreground"
      >
        <Link to="/" className="hover:text-foreground transition-colors flex items-center gap-1">← Back to Home</Link>
        <span className="text-border/50">|</span>
        <span>Staff? <Link to="/admin-login" className="text-primary hover:text-accent transition-colors">Admin Login</Link></span>
      </motion.div>
    </div>
  );
}
