import './globals.css'

/* ============================================================================
   ROOT LAYOUT — Rev Up Hair Restoration

   DELIBERATELY EMPTY OF TAGS. This repo mounts no analytics component, no
   advertising pixel, no chat widget and no DNI swapper.

   That is the whole point. On 2026-08-17 six of the seven repos on this fleet
   were found mounting a repo-local `GaTag`/`GtmTags` component in this exact
   file, with the GA4 measurement id living INSIDE the component — so a grep of
   layout.tsx for `G-`, `GTM-`, `gtag` or `fbq` came back clean on all six while
   every route still served a browser analytics tag. The only honest check is
   the rendered HTML of the real page.

   The single route this app serves collects a Norwood/Ludwig selection and a
   prior-procedure answer. That is health-intent input in a form, which makes a
   browser analytics or advertising tag here non-waivable under H-26 / §6
   failure mode 7. Server-side delivery would not launder it either (H-32).

   If a tag is ever wanted on this app, it goes through `CONSULT.ga4Id` in
   lib/consult.config.ts on Joe's explicit recorded direction, so the override
   is a one-line auditable config value rather than a quiet import added here.
   ========================================================================== */

export const metadata = {
  robots: { index: false, follow: false },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
