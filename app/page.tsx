import { redirect } from 'next/navigation'

/* This app serves exactly one surface: /c/consult. There is no marketing site
   here — revuphairrestoration.com is the practice's own WordPress install on
   cPanel and is unrelated to this deployment. Anything landing on the root is
   sent to the booking page rather than shown an empty Next.js default. */
export default function Home() {
  redirect('/c/consult')
}
