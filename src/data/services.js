/**
 * Single source of truth for the three services — drives the home page cards,
 * the header dropdown, the footer links, and the detail page at each slug.
 *
 * Copy here is grounded in what the business already states publicly (pricing,
 * the FAQ, and the service areas). Don't add certifications, guarantees, or
 * statistics unless MJAMV can actually back them up.
 */

export const SERVICES = [
  {
    slug: 'ocular-inspection',
    name: 'Ocular Inspection',
    short: 'Ocular Inspection',
    formValue: 'inspection',
    price: 1000,
    featured: false,
    tagline: 'An on-site assessment of your system before anyone quotes you a number.',
    cardDesc:
      'An on-site assessment of your kitchen exhaust system to determine the scope of work before we give you a final quote.',
    heading: 'Know what your system needs before you commit to anything',
    body: [
      'No two kitchens carry the same grease load. A quote given over the phone is a guess, and guesses are how jobs end with a revised invoice halfway through.',
      'An ocular inspection puts our crew on site to look at the actual system — the hood, the filters, how far the ductwork runs, and what condition the rooftop blower is in. From that we can tell you the real scope of work and give you a final quote you can plan around.',
      'If you go ahead with a cleaning, the inspection has already told us exactly what we are walking into, which is why the number you approve is the number you pay.',
    ],
    includes: [
      'On-site assessment of the full exhaust run',
      'Review of hood, filters, ductwork, and rooftop blower',
      'Scope of work identified and explained',
      'Final quote based on what is actually there',
      'Recommended cleaning interval for your volume',
    ],
    faqs: [
      {
        q: 'Do I need an inspection before a cleaning?',
        a: 'It is how we arrive at an accurate quote. For systems we already service on a schedule, we usually know the system well enough to skip straight to the clean.',
      },
      {
        q: 'What happens if the system needs repairs?',
        a: 'The inspection will surface it. Belt and motor issues fall under our minor repairs service, and we can usually handle them while we are already working on the system.',
      },
    ],
  },
  {
    slug: 'kitchen-exhaust-cleaning',
    name: 'Kitchen Exhaust Cleaning',
    short: 'Kitchen Exhaust Cleaning',
    formValue: 'exhaust',
    price: 6500,
    featured: true,
    tagline:
      'Complete exhaust system cleaning for commercial kitchens across Metro Manila.',
    cardDesc:
      'Complete cleaning of the system — hoods, grease filters, interior ductwork, and rooftop blowers — degreased top to bottom to reduce fire risk and restore airflow.',
    heading: 'Grease removed from the whole system, not just the parts you can see',
    body: [
      'Grease does not stop at the hood. It travels the full length of the exhaust path — through the filters, up the interior ductwork, and out to the blower on your roof — and every layer it leaves behind is fuel sitting directly above an open flame.',
      'We clean the entire run: the hood canopy, the grease filters, the interior ductwork, and the rooftop exhaust fan. The standard we clean to is bare metal — exposed surfaces visible with no heavy grease remaining, which is the same bar your fire inspector and insurer are measuring against.',
      'Most systems take 4 to 6 hours depending on size and how thick the build-up has gotten. We schedule around your service hours so the kitchen is ready for the next prep.',
    ],
    includes: [
      'Hood canopy degreasing, inside and out',
      'Grease filter removal, soaking, and cleaning',
      'Interior ductwork cleaned along the accessible run',
      'Rooftop exhaust fan and blower housing',
      'Work area protected and cleaned up afterward',
    ],
    faqs: [
      {
        q: 'How often should the system be cleaned?',
        a: 'It depends on your cooking volume and what you cook — high-volume frying builds grease far faster than a light-use kitchen. An ocular inspection tells us where your system actually stands and what interval makes sense for it.',
      },
      {
        q: 'Will you need to shut down the kitchen?',
        a: 'The exhaust system has to be off while we work, so we schedule in the gap between close and prep. Most kitchens are back online before the next morning delivery arrives.',
      },
    ],
  },
  {
    slug: 'minor-repairs',
    name: 'Minor Repairs',
    short: 'Minor Repairs',
    formValue: 'repairs',
    price: null,
    featured: false,
    tagline: 'Belt and motor work on exhaust systems, handled while we are already on site.',
    cardDesc:
      'Motor belt timing adjustments, belt replacement, and motor replacement, handled while we are already working on your system.',
    heading: 'Keep the system pulling air, not just clean',
    body: [
      'A spotless duct does nothing if the blower has stopped moving air properly. Belts slip and wear, timing drifts, and motors eventually fail — usually without anyone noticing until the kitchen starts holding smoke.',
      'We handle the mechanical side of the exhaust system: motor belt timing adjustments, belt replacement, and motor replacement. Because we are already on the roof for the cleaning, these repairs rarely need a separate visit or a separate mobilisation charge.',
      'Repairs are priced after we have seen the system, since the part and the labour depend entirely on what has failed.',
    ],
    includes: [
      'Motor belt timing adjustment',
      'Belt replacement',
      'Motor replacement',
      'Assessment of blower condition during cleaning',
      'Priced after inspection, no blind estimates',
    ],
    faqs: [
      {
        q: 'How much do repairs cost?',
        a: 'It depends on the part and the work involved, so we quote after seeing the system. An ocular inspection or a scheduled cleaning is usually when these issues get identified.',
      },
      {
        q: 'Do you handle major mechanical work?',
        a: 'We cover minor repairs — belts, timing, and motor replacement on exhaust systems. Anything structural or beyond that scope, we will tell you plainly rather than take it on.',
      },
    ],
  },
];

export const SERVICE_BY_SLUG = Object.fromEntries(SERVICES.map((s) => [s.slug, s]));
