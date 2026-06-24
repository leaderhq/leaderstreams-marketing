import type { MetadataRoute } from 'next';

/**
 * PWA manifest — makes LeaderStreams installable ("Add to Home Screen") with a
 * standalone, app-like shell. Next serves this at /manifest.webmanifest.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'LeaderStreams',
    short_name: 'LeaderStreams',
    description:
      'Social scheduling for field leaders. Schedule and publish to every platform for your whole team from one calendar.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#ffffff',
    theme_color: '#06163E',
    categories: ['business', 'productivity'],
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      {
        src: '/icon-maskable-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
