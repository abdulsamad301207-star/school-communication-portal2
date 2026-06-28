import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useHelp } from '../context/HelpContext';
import { 
  LayoutDashboard, Send, FileText, Users, 
  History, Calendar, BarChart3, Settings, LogOut, HelpCircle 
} from 'lucide-react';

export default function Sidebar() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const helpCtx = useHelp();
  const openCount = helpCtx?.openCount ?? 0;

  const nav = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Compose', path: '/compose', icon: Send },
    { name: 'Templates', path: '/templates', icon: FileText },
    { name: 'Recipients', path: '/recipients', icon: Users },
    { name: 'History', path: '/history', icon: History },
    { name: 'Attendance', path: '/attendance', icon: Calendar },
    { name: 'Reports', path: '/reports', icon: BarChart3 },
    { name: 'Support', path: '/help-requests', icon: HelpCircle, badge: openCount },
    { name: 'Settings', path: '/settings', icon: Settings },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <aside className="w-64 fixed left-0 inset-y-0 bg-background border-r border-border flex flex-col z-50 transition-colors duration-300">
      <div className="h-16 flex items-center px-6 border-b border-border">
        <div className="flex items-center gap-2 text-primary">
          <span className="font-bold text-lg font-heading text-foreground">SG Portal</span>
        </div>
      </div>
      
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {nav.map((item) => {
          const active = location.pathname.startsWith(item.path);
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                active 
                  ? 'bg-primary text-primary-foreground shadow-sm' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <item.icon size={18} />
              <span className="flex-1">{item.name}</span>
              {item.badge > 0 && (
                <span className={`min-w-[20px] h-5 px-1.5 rounded-full text-[11px] font-bold flex items-center justify-center animate-pulse ${
                  active ? 'bg-primary-foreground text-primary' : 'bg-destructive text-destructive-foreground'
                }`}>
                  {item.badge > 99 ? '99+' : item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border bg-card/50">
        <div className="flex items-center gap-3 px-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold uppercase">
            {user?.name?.charAt(0) || 'U'}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-foreground truncate">{user?.name}</div>
            <div className="text-xs text-muted-foreground truncate capitalize">{user?.role?.replace('_', ' ')}</div>
          </div>
        </div>
        <button 
          onClick={handleLogout}
          className="flex w-full items-center gap-3 px-3 py-2 text-sm font-medium text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}
