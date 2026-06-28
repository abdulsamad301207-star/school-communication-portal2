import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ArrowRight, Lock, Home } from 'lucide-react';

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
    <div className="min-h-screen flex bg-background">
      {/* Left panel */}
      <div className="hidden lg:flex flex-1 flex-col justify-center items-center p-12 bg-gradient-to-br from-background to-card border-r border-border">
        <div className="max-w-md text-center">
          <div className="w-20 h-20 mx-auto rounded-2xl bg-primary flex items-center justify-center mb-8 shadow-2xl shadow-primary/20">
            <Lock className="text-primary-foreground w-10 h-10" />
          </div>
          <h1 className="text-4xl font-bold font-heading text-foreground mb-4">Staff Portal</h1>
          <p className="text-muted-foreground text-lg mb-12">Manage all school communication securely from one centralized dashboard.</p>
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-3 text-foreground"><span className="text-accent">✓</span> Compose rich circulars</div>
            <div className="flex items-center gap-3 text-foreground"><span className="text-accent">✓</span> Automated attendance alerts</div>
            <div className="flex items-center gap-3 text-foreground"><span className="text-accent">✓</span> Track live delivery status</div>
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex flex-col justify-center p-8 sm:p-12 lg:p-24 relative bg-background">
        <div className="w-full max-w-sm mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl font-bold font-heading text-foreground mb-2">Welcome back</h2>
            <p className="text-muted-foreground">Sign in to your staff account</p>
          </div>

          {error && (
            <div className="mb-6 p-3 rounded-lg bg-destructive/10 border border-destructive/50 text-destructive text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="label-text">Email Address</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="staff@sgei.edu.in" 
                className="input-field"
              />
            </div>
            <div>
              <label className="label-text">Password</label>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••" 
                className="input-field"
              />
            </div>
            
            <button type="submit" className="btn-primary w-full mt-8">
              Sign In <ArrowRight size={18} />
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-border">
            <div className="text-sm text-muted-foreground mb-3">Demo Credentials:</div>
            <div className="flex gap-2">
              <button type="button" onClick={() => fillDemo('admin@sgei.edu.in', 'Admin@123')} className="px-3 py-1.5 text-xs font-medium rounded bg-card border border-border hover:border-accent transition-colors text-foreground">Admin</button>
              <button type="button" onClick={() => fillDemo('teacher@sgei.edu.in', 'Teacher@123')} className="px-3 py-1.5 text-xs font-medium rounded bg-card border border-border hover:border-accent transition-colors text-foreground">Teacher</button>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between text-sm">
            <Link to="/" className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
              <Home size={14} /> Back to Home
            </Link>
            <Link to="/login" className="text-accent hover:text-accent-foreground font-medium transition-colors">
              Parent / Student Portal →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
