export default function StatusBadge({ status }) {
  const styles = {
    sent: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-300 dark:border-green-800',
    delivered: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-300 dark:border-green-800',
    pending: 'bg-amber-900/30 text-amber-400 border border-amber-800',
    scheduled: 'bg-accent/20 text-accent border border-accent/30',
    failed: 'bg-destructive/10 text-destructive border border-destructive/30',
    draft: 'bg-muted text-foreground border border-border',
    read: 'bg-blue-900/30 text-blue-400 border border-blue-800'
  };

  const labels = {
    sent: 'Sent ✓',
    delivered: 'Delivered ✓',
    pending: 'Pending ⏳',
    scheduled: 'Scheduled ⏰',
    failed: 'Failed ❌',
    draft: 'Draft 📝',
    read: 'Read 👀'
  };

  const currentStyle = styles[status] || styles.draft;
  const currentLabel = labels[status] || status;

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${currentStyle}`}>
      {currentLabel}
    </span>
  );
}
