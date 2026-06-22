const NAVY = '#06163E';
const GREEN = '#5CAC23';
const BLUE = '#1862EA';

interface QueuePost {
  platform: string;
  platformColor: string;
  time: string;
  day: string;
  text: string;
  status: 'scheduled' | 'published' | 'draft';
}

const POSTS: QueuePost[] = [
  {
    platform: 'LI',
    platformColor: '#0a66c2',
    day: 'Mon',
    time: '9:00 AM',
    text: 'Three new leaders joined Summit this week. Watch this team grow. 🚀',
    status: 'published',
  },
  {
    platform: 'FB',
    platformColor: '#1877f2',
    day: 'Mon',
    time: '12:00 PM',
    text: 'Consistency is the only business plan that never fails.',
    status: 'published',
  },
  {
    platform: 'IG',
    platformColor: '#e1306c',
    day: 'Tue',
    time: '8:00 AM',
    text: 'Behind the scenes of our Monday team call. This is momentum.',
    status: 'scheduled',
  },
  {
    platform: 'X',
    platformColor: '#000000',
    day: 'Tue',
    time: '2:00 PM',
    text: 'The best time to build your network was 5 years ago. Second best: now.',
    status: 'scheduled',
  },
  {
    platform: 'LI',
    platformColor: '#0a66c2',
    day: 'Wed',
    time: '9:00 AM',
    text: 'Q2 recognition coming soon. Who made the leaderboard this quarter?',
    status: 'draft',
  },
];

const STATUS_COLOR: Record<QueuePost['status'], { bg: string; text: string; label: string }> = {
  published: { bg: 'rgba(92,172,35,0.15)', text: GREEN, label: 'Published' },
  scheduled: { bg: 'rgba(24,98,234,0.15)', text: BLUE, label: 'Scheduled' },
  draft: { bg: 'rgba(255,255,255,0.08)', text: '#9ca3af', label: 'Draft' },
};

export function PostQueueMock() {
  return (
    <div
      aria-hidden="true"
      style={{
        width: 340,
        maxWidth: '100%',
        background: '#f6f8fb',
        borderRadius: 18,
        boxShadow: '0 24px 64px rgba(6,22,62,0.18), 0 2px 8px rgba(6,22,62,0.08)',
        overflow: 'hidden',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      {/* App header bar */}
      <div style={{ background: NAVY, padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <div style={{ width: 22, height: 3, borderRadius: 2, background: BLUE }} />
          <div style={{ width: 17, height: 3, borderRadius: 2, background: '#fff', marginLeft: 3 }} />
          <div style={{ width: 12, height: 3, borderRadius: 2, background: GREEN, marginLeft: 6 }} />
        </div>
        <span style={{ color: '#fff', fontWeight: 700, fontSize: 14, letterSpacing: '-0.3px' }}>
          Leader<span style={{ color: GREEN }}>Streams</span>
        </span>
        <div style={{ flex: 1 }} />
        <div style={{
          width: 28, height: 28, borderRadius: '50%',
          background: BLUE, display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 11, fontWeight: 700, color: '#fff',
        }}>JD</div>
      </div>

      {/* Queue header */}
      <div style={{ padding: '12px 18px 8px', background: '#fff', borderBottom: '1px solid #e5e7eb' }}>
        <div style={{ fontSize: 11, color: '#9ca3af', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Content Queue
        </div>
        <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginTop: 2 }}>This Week</div>
        <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
          {['All', 'Scheduled', 'Published'].map((tab, i) => (
            <div
              key={tab}
              style={{
                padding: '3px 10px',
                borderRadius: 20,
                fontSize: 11,
                fontWeight: 600,
                background: i === 0 ? NAVY : '#f3f4f6',
                color: i === 0 ? '#fff' : '#6b7280',
              }}
            >
              {tab}
            </div>
          ))}
        </div>
      </div>

      {/* Post queue */}
      <div style={{ padding: '8px 0' }}>
        {POSTS.map((post, i) => {
          const statusStyle = STATUS_COLOR[post.status];
          return (
            <div
              key={i}
              style={{
                padding: '9px 18px',
                borderBottom: i < POSTS.length - 1 ? '1px solid #f0f2f7' : 'none',
                display: 'flex',
                alignItems: 'flex-start',
                gap: 10,
              }}
            >
              {/* Platform badge */}
              <div style={{
                marginTop: 2,
                width: 28,
                height: 28,
                borderRadius: 8,
                background: post.platformColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 9,
                fontWeight: 800,
                color: '#fff',
                flexShrink: 0,
                letterSpacing: '0.02em',
              }}>
                {post.platform}
              </div>

              {/* Post content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: NAVY,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}>
                  {post.text}
                </div>
                <div style={{ display: 'flex', gap: 6, marginTop: 4, alignItems: 'center' }}>
                  <span style={{ fontSize: 10.5, color: '#9ca3af', fontWeight: 600 }}>{post.day}</span>
                  <span style={{ fontSize: 10.5, color: '#d1d5db' }}>·</span>
                  <span style={{ fontSize: 10.5, color: '#9ca3af' }}>{post.time}</span>
                </div>
              </div>

              {/* Status badge */}
              <div style={{
                padding: '2px 8px',
                borderRadius: 20,
                fontSize: 9.5,
                fontWeight: 700,
                background: statusStyle.bg,
                color: statusStyle.text,
                flexShrink: 0,
                marginTop: 2,
              }}>
                {statusStyle.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* Compose bar */}
      <div style={{
        padding: '10px 18px',
        borderTop: '1px solid #e5e7eb',
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
      }}>
        <div style={{
          width: 20, height: 20, borderRadius: '50%',
          background: GREEN,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <span style={{ color: '#fff', fontSize: 13, lineHeight: 1, fontWeight: 700 }}>+</span>
        </div>
        <span style={{ fontSize: 12, color: '#9ca3af' }}>Add to queue…</span>
      </div>
    </div>
  );
}
