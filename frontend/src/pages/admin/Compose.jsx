import { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../../components/Sidebar';
import TopBar from '../../components/TopBar';
import { Send, Sparkles, Eye, Paperclip, ChevronDown, X, Check } from 'lucide-react';

export default function Compose() {
  const [subject, setSubject] = useState('');
  const [messageType, setMessageType] = useState('circular');
  const [bodyHtml, setBodyHtml] = useState('');
  const [templates, setTemplates] = useState([]);
  const [groups, setGroups] = useState([]);
  const [selectedGroups, setSelectedGroups] = useState([]);
  const [showPreview, setShowPreview] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [aiSuggestion, setAiSuggestion] = useState('');
  const [loadingAi, setLoadingAi] = useState(false);

  useEffect(() => {
    axios.get('/api/v1/templates').then(r => setTemplates(r.data)).catch(() => {});
    axios.get('/api/v1/groups').then(r => setGroups(r.data)).catch(() => {});
  }, []);

  const handleSend = async () => {
    if (!subject || !bodyHtml) return;
    setSending(true);
    try {
      const totalRecipients = selectedGroups.reduce((s, gId) => {
        const g = groups.find(x => x.id === gId);
        return s + (g?.member_count || 0);
      }, 0);
      await axios.post('/api/v1/messages', {
        subject, message_type: messageType, body_html: bodyHtml,
        status: 'sent', recipients_count: totalRecipients || 100
      });
      setSent(true);
      setTimeout(() => { setSent(false); setSubject(''); setBodyHtml(''); setSelectedGroups([]); }, 3000);
    } catch (e) { console.error(e); }
    setSending(false);
  };

  const handleAiSuggest = async () => {
    setLoadingAi(true);
    try {
      const res = await axios.post('/api/v1/ai/suggest', { subject, body: bodyHtml, type: messageType });
      setAiSuggestion(res.data.suggestion);
    } catch (e) { console.error(e); }
    setLoadingAi(false);
  };

  const applyTemplate = (tpl) => {
    setSubject(tpl.subject);
    setBodyHtml(tpl.body_html.replace(/<[^>]+>/g, ''));
    setMessageType(tpl.message_type);
  };

  const toggleGroup = (id) => {
    setSelectedGroups(prev => prev.includes(id) ? prev.filter(g => g !== id) : [...prev, id]);
  };

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      <main className="flex-1 ml-64">
        <TopBar title="Compose Message" />
        <div className="p-8">
          {sent && (
            <div className="mb-6 p-4 rounded-xl bg-green-900/30 border border-green-700 text-green-400 flex items-center gap-3">
              <Check size={20} /> Message sent successfully!
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Composer */}
            <div className="lg:col-span-2 space-y-6">
              {/* Message Type */}
              <div className="card">
                <label className="label-text">Message Type</label>
                <div className="flex flex-wrap gap-2">
                  {['circular','fee','attendance','exam','event','custom'].map(t => (
                    <button key={t} onClick={() => setMessageType(t)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${messageType === t ? 'bg-primary text-foreground' : 'bg-muted text-muted-foreground hover:text-foreground border border-border'}`}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Subject */}
              <div className="card">
                <label className="label-text">Subject</label>
                <input value={subject} onChange={e => setSubject(e.target.value)}
                  placeholder="Enter message subject..." className="input-field" />
              </div>

              {/* Body */}
              <div className="card">
                <div className="flex justify-between items-center mb-2">
                  <label className="label-text mb-0">Message Body</label>
                  <div className="flex gap-2">
                    <button onClick={handleAiSuggest} disabled={loadingAi}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-accent/10 text-accent hover:bg-accent/20 border border-accent/30 transition-colors">
                      <Sparkles size={14} /> {loadingAi ? 'Thinking...' : 'AI Improve'}
                    </button>
                    <button onClick={() => setShowPreview(!showPreview)}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-muted text-foreground hover:text-foreground border border-border transition-colors">
                      <Eye size={14} /> Preview
                    </button>
                  </div>
                </div>
                <textarea value={bodyHtml} onChange={e => setBodyHtml(e.target.value)}
                  rows={8} placeholder="Type your message here..."
                  className="input-field resize-none !h-auto" />
              </div>

              {/* AI Suggestion */}
              {aiSuggestion && (
                <div className="card border-accent/30">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-2 text-accent font-medium text-sm">
                      <Sparkles size={16} /> AI Suggestion
                    </div>
                    <button onClick={() => setAiSuggestion('')} className="text-muted-foreground hover:text-foreground"><X size={16} /></button>
                  </div>
                  <p className="text-foreground text-sm whitespace-pre-wrap mb-4">{aiSuggestion}</p>
                  <button onClick={() => { setBodyHtml(aiSuggestion); setAiSuggestion(''); }}
                    className="btn-primary h-8 px-4 text-xs">Apply Suggestion</button>
                </div>
              )}

              {/* Preview */}
              {showPreview && (
                <div className="card border-blue-900/50">
                  <h3 className="text-sm font-bold text-blue-400 mb-3">📧 Message Preview</h3>
                  <div className="bg-white text-black rounded-lg p-6">
                    <h2 className="text-lg font-bold mb-2">{subject || '(No Subject)'}</h2>
                    <hr className="mb-4" />
                    <div className="text-sm leading-relaxed whitespace-pre-wrap">{bodyHtml || '(Empty body)'}</div>
                    <hr className="mt-6 mb-3" />
                    <p className="text-xs text-muted-foreground">Sri Gowthami Educational Institutions</p>
                  </div>
                </div>
              )}
            </div>

            {/* Right Panel */}
            <div className="space-y-6">
              {/* Recipients */}
              <div className="card">
                <h3 className="text-sm font-bold text-foreground mb-4">Select Recipients</h3>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {groups.map(g => (
                    <label key={g.id} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-muted cursor-pointer transition-colors">
                      <input type="checkbox" checked={selectedGroups.includes(g.id)} onChange={() => toggleGroup(g.id)}
                        className="w-4 h-4 rounded accent-primary" />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-foreground truncate">{g.name}</div>
                        <div className="text-xs text-muted-foreground">{g.member_count} members</div>
                      </div>
                    </label>
                  ))}
                </div>
                {selectedGroups.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-border text-xs text-accent">
                    {selectedGroups.reduce((s, id) => s + (groups.find(g => g.id === id)?.member_count || 0), 0)} total recipients selected
                  </div>
                )}
              </div>

              {/* Quick Templates */}
              <div className="card">
                <h3 className="text-sm font-bold text-foreground mb-4">Quick Templates</h3>
                <div className="space-y-2">
                  {templates.slice(0, 4).map(t => (
                    <button key={t.id} onClick={() => applyTemplate(t)}
                      className="w-full text-left p-3 rounded-lg bg-muted hover:brightness-110 border border-border transition-colors">
                      <div className="text-sm font-medium text-foreground truncate">{t.name}</div>
                      <div className="text-xs text-muted-foreground mt-1 capitalize">{t.message_type}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Send Button */}
              <button onClick={handleSend} disabled={sending || !subject || !bodyHtml}
                className="btn-primary w-full h-12 text-base disabled:opacity-50 disabled:cursor-not-allowed">
                <Send size={18} /> {sending ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
