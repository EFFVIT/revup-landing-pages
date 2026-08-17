/* ============================================================================
   CONSULT FUNNEL — CLIENT CONFIG: Rev Up Hair Restoration

   THIS IS THE ONLY FILE IN THE CONSULT SURFACE THAT DIFFERS PER CLIENT.
   lib/consult.ts, the three API routes, ConsultFunnel, Wordmark, GaTag,
   BookingSummary, both pages and consult.css are byte-identical across every
   repo on the fleet. If you are about to edit one of those for this client,
   the value belongs here instead.

   Every fact below was read from a live system on 2026-08-17, not typed from a
   document. Provenance is on each line.

   WHAT THIS ACCOUNT IS: Rev Up Hair Restoration is a DORMANT SHELL reused as
   an EFFVIT demo sandbox (Joe, 2026-08-17). It is not a client, it is not in
   the registry, it has no wallet and the practice has never logged in. Nothing
   here should be treated as live patient traffic without Joe saying so.
   ========================================================================== */

export const CONSULT = {
  clientId: 'revup',
  practice: 'Rev Up Hair Restoration',

  /* GoHighLevel sub-account. The container must carry GHL_PIT_9xdQIVtA7WxcPqS83Df6
     or every booking call 500s while the page still renders. That PIT was
     minted on 2026-08-17 (integration "EFFVIT Master API", 24 scopes) — this
     sub-account had NO private integration of any kind before that. */
  locationId: '9xdQIVtA7WxcPqS83Df6',
  timezone: 'America/New_York',

  /* CREATED 2026-08-17 by revup_calendars.py. This sub-account had exactly ONE
     calendar ('Consultation Calendar', 30min, id qy3XAAe8EtHHQYrJtdjt) and no
     consult pair at all. The original was left untouched so nothing already
     pointing at it was affected. Both verified by read-back and both returning
     135 live 60-minute slots, first slot more than 24h out. */
  calendars: {
    'in-person': 'zB7ELy0AaqE7FfrWCPGt',
    virtual: 'pDtvB8n5KKbBIvwDXh08',
  },

  /* Read from the calendar's own slotDuration — never asserted. Saying "one
     hour" over a calendar that books 30 minutes is a promise the system of
     record does not keep. */
  durationMinutes: 60,
  durationLabel: '60 minutes',

  /* From the GHL location record (name, address, phone, timezone all read via
     GET /locations/9xdQIVtA7WxcPqS83Df6 on 2026-08-17). */
  address: '145 East Sunrise Highway, Suite 2',
  city: 'Lindenhurst, NY 11757',
  officeShort: 'Lindenhurst',
  inPersonWhere: 'At the Lindenhurst office, 145 East Sunrise Highway, Suite 2.',

  /* HOURS ARE THE FLEET TEST ENVELOPE, NOT THIS PRACTICE'S PUBLISHED HOURS.
     revuphairrestoration.com publishes no hours anywhere — every page was read
     on 2026-08-17 and none states an opening time. The calendars were therefore
     built Mon-Fri 09:00-17:00 with 24h minimum notice, which is the same
     conservative envelope RHRLI was tested on. Inventing hours and printing
     them as the practice's own would be a claim the practice never made, so
     the copy below says only what is true: these are the times the calendar
     currently offers. Replace with real hours when the practice supplies them,
     and update the calendars in the same breath. */
  openDays: 'Times shown are the times this calendar currently offers',
  hoursLine: 'Only times the calendar has actually published are shown.',

  /* NO DNI POOL ON THIS ACCOUNT. DniSwap is deliberately NOT mounted in this
     repo's layout, so this number renders statically and every call from this
     page arrives UNATTRIBUTED. That is a known, stated gap rather than a
     silent one — wiring a pool is a separate piece of work. Number read from
     the GHL location record. */
  phoneDisplay: '(631) 867-0900',
  phoneRaw: '+16318670900',
  phonePlaceholder: '(631) 555-0142',

  siteUrl: 'https://revuphairrestoration.com',
  /* Absolute URLs on the practice site. This repo carries ONLY the consult
     surface — it has no /privacy-policy or /cookie-policy route of its own, so
     a relative path here would 404. Both verified 200 on 2026-08-17. */
  privacyUrl: 'https://revuphairrestoration.com/privacy-policy/',
  termsUrl: 'https://revuphairrestoration.com/terms-of-service/',
  /* null means NO COOKIE POLICY PAGE exists for this practice. The footer
     omits the link rather than pointing at a 404. */
  cookieUrl: null as string | null,
  /* null because the feed is genuinely EMPTY — /wp-json/wp/v2/posts returned 0
     posts on 2026-08-17. The confirmation page renders no "while you wait"
     section at all rather than an empty one. */
  postsApi: null as string | null,

  headline: 'Book your consultation.',
  subhead: '60 minutes with Rev Up Hair Restoration, in person in Lindenhurst or by video. Choose a time below and it is confirmed on the practice calendar straight away.',
  metaDescription: 'Book a 60 minute consultation with Rev Up Hair Restoration. In person in Lindenhurst or by video.',

  /* EMPTY BY DESIGN, awaiting the practice's own photographs.
     No before/after and no identifiable patient — before/after imagery is a
     Meta Account Quality suspension risk across this whole fleet. A stock photo
     of a clinic that is not theirs is a misrepresentation, and a sibling
     client's photo is worse. An empty array renders no photo block at all.
     Add as: ['file-basename', 'alt text'] with the file at public/consult/. */
  photos: [] as [string, string][],

  /* No logo asset in this repo. The practice's mark exists only as a Firebase
     URL on the GHL location record, and hotlinking a third-party storage URL
     into a live page is a dependency nobody controls. Wordmark falls back to a
     text treatment in the practice name, which the fleet image doctrine already
     specifies as a legitimate option rather than a placeholder. */
  wordmarkSrc: null as string | null,
  wordmarkText: 'Rev Up Hair Restoration' as string | null,

  /* NO browser analytics or advertising tag on this page. This is not a
     preference: the page collects a Norwood/Ludwig selection and prior-procedure
     answer, which is health-intent input in a form, and H-26 / §6 failure mode 7
     make a tag here non-waivable at the skill layer. Server-side delivery does
     not launder it (H-32). Set this ONLY on Joe's explicit, recorded direction
     for this specific client — RHRLI's is the only such override on the fleet.

     This repo also mounts NO analytics component in app/layout.tsx at all,
     which is the defect six of the seven clients shipped with on 2026-08-17:
     a repo-local GaTag whose measurement id lives inside the component is
     invisible to a grep of layout.tsx while every route still serves the tag. */
  ga4Id: null as string | null,

  consentVersion: '2026-08-17-v1',
} as const

/* Attribution write-through to the CRM.

   HARD (H-41): match on fieldKey, never on the display name. Names drift per
   sub-account while fieldKey stays byte-identical; matching on names is what
   made 11 of 28 custom values unreachable across the whole fleet.

   ALL SIX FIELDS WERE CREATED ON 2026-08-17 by revup_fields.py. This
   sub-account had EIGHT contact fields and not one of them was attribution
   related — no click id, no UTM of any spelling. Every booking before today
   would have landed with no attribution at all and been invisible to Google
   Ads offline conversions.

   Each was created with `model: contact` stated explicitly, because the UI
   drawer silently defaults to Opportunity, which yields a field whose key still
   reads `gclidof` while nothing ever writes to a contact. Every derived key was
   then VERIFIED by read-back against the live API rather than assumed — GHL
   strips dots and hyphens when deriving a key ("Gclid-Of" -> gclidof), and a
   PUT against an unresolvable key returns 200 and silently discards the value,
   which reads exactly like success.

   Regenerate from the API if the sub-account changes. Never retype it and
   never copy another client's map. */
export const CONSULT_FIELD_MAP: Record<string, string> = {
  gclid: 'contact.gclidof',
  utm_source: 'contact.utm_source',
  utm_medium: 'contact.utm_medium',
  utm_campaign: 'contact.utm_campaign',
  utm_term: 'contact.utm_term',
  utm_content: 'contact.utm_content',

  /* NOT MAPPED, because no field with these keys exists on this sub-account:
     wbraid, gbraid, keyword, matchtype, fbclid, msclkid, campaignid, adgroupid.
     Captured on the page and dropped at the CRM boundary rather than written to
     a guessed key — a PUT with an unresolvable fieldKey returns 200 and
     silently discards the value, which reads as working (H-41). */
}
