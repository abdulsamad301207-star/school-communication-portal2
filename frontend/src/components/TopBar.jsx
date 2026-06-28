import { Bell, Search } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function TopBar({ title }) {
  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-8 sticky top-0 z-40 transition-colors duration-300">
      <h1 className="text-xl font-bold font-heading text-foreground">{title}</h1>
      
      <div className="flex items-center gap-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <input 
            type="text" 
            placeholder="Search..." 
            className="h-10 pl-10 pr-4 w-64 rounded-lg bg-background border border-input text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-ring focus:ring-1 focus:ring-ring transition-colors duration-200"
          />
        </div>
        
        <ThemeToggle />
        
        <button className="relative text-muted-foreground hover:text-foreground transition-colors duration-200">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-destructive rounded-full"></span>
        </button>
      </div>
    </header>
  );
}
