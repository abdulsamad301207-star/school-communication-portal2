import { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../../components/Sidebar';
import TopBar from '../../components/TopBar';
import { Plus, Users as UsersIcon, X, Save } from 'lucide-react';

export default function Recipients() {
  const [groups, setGroups] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', description: '' });

  useEffect(() => { load(); }, []);
  const load = () => axios.get('/api/v1/groups').then(r => setGroups(r.data)).catch(() => {});

  const handleCreate = async () => {
    if (!form.name) return;
    await axios.post('/api/v1/groups', form);
    setForm({ name: '', description: '' });
    setShowForm(false);
    load();
  };

  const colors = ['bg-primary', 'bg-accent', 'bg-blue-600', 'bg-green-600', 'bg-purple-600', 'bg-pink-600'];

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      <main className="flex-1 ml-64">
        <TopBar title="Recipients & Groups" />
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <p className="text-muted-foreground">Manage recipient groups for targeted messaging.</p>
            <button onClick={() => setShowForm(true)} className="btn-primary"><Plus size={18} /> New Group</button>
          </div>

          {showForm && (
            <div className="card mb-8 border-accent/30">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-foreground">Create New Group</h3>
                <button onClick={() => setShowForm(false)} className="text-muted-foreground hover:text-foreground"><X size={20} /></button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="label-text">Group Name</label>
                  <input value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="input-field" placeholder="e.g., Class 10A Parents" />
                </div>
                <div>
                  <label className="label-text">Description</label>
                  <input value={form.description} onChange={e => setForm({...form, description: e.target.value})} className="input-field" placeholder="Brief description..." />
                </div>
              </div>
              <div className="flex gap-3">
                <button onClick={handleCreate} className="btn-primary"><Save size={16} /> Create Group</button>
                <button onClick={() => setShowForm(false)} className="btn-secondary">Cancel</button>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {groups.map((g, i) => (
              <div key={g.id} className="card hover:border-border transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl ${colors[i % colors.length]} flex items-center justify-center text-foreground`}>
                    <UsersIcon size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{g.name}</h3>
                    <p className="text-xs text-muted-foreground">{g.description}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-2xl font-bold text-foreground">{g.member_count}</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Members</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
