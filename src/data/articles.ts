export type Category = "Power" | "Prep" | "Tech";

export type Article = {
  slug: string;
  title: string;
  dek: string;
  category: Category;
  readMinutes: number;
  published: string;
  image: string;
  video?: string;
  takeaways: string[];
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "silent-power-home-battery",
    title: "Silent Power: A Home Battery Bank That Actually Lasts",
    dek: "How to size, site, and cycle a wall of lithium so it still works in year twelve — not just the first outage.",
    category: "Power",
    readMinutes: 9,
    published: "2026-08-12",
    image: "/media/battery.jpg",
    video: "/media/battery.mp4",
    takeaways: [
      "Size for critical loads, not the whole house, then add 20% headroom.",
      "Cycle depth and temperature matter more than brand mythology.",
      "A clean install with labeled disconnects is the real safety feature.",
    ],
    body: [
      "Most home battery conversations start with a kilowatt-hour number and end with a brochure. The systems that still work a decade later start somewhere quieter: a list of loads you actually refuse to lose, a wall that stays cool, and a charge schedule that does not treat lithium like a generator tank.",
      "Begin with a critical-load panel. Refrigeration, a well pump or a gravity-fed water path, communications, medical devices, and a few lights. Everything else is a luxury until the bank is proven. A 10–15 kWh usable pack covers a careful household through an overnight outage; 20–30 kWh buys a short multi-day event if solar is feeding it. Nameplate capacity is not usable capacity — plan on 80–90% if you want the cells to age slowly.",
      "Siting is the unglamorous half of longevity. Lithium hates heat more than it hates cold. An interior garage wall, out of direct sun, with a few inches of air behind the cabinets, will outlive a sun-baked exterior shed. Keep the pack off a damp floor. Leave space for a service loop. Put the emergency disconnect where a firefighter can find it without opening a manual.",
      "Cycling is where marketing and chemistry part ways. Daily solar self-consumption at 20–40% depth of discharge is gentle. Repeated 90% dumps to run air conditioning are not. If your utility offers a time-of-use program, a modest evening discharge is useful — and still kinder than treating the wall as a whole-home UPS. Firmware that balances cells and refuses to sit at 100% for weeks is worth more than a glossy app.",
      "Finally, document the system as if you will not be the one standing in front of it at 2 a.m. A laminated one-pager: what stays on, where the breaker is, who to call. Silent power is only silent when the next person can use it.",
    ],
  },
  {
    slug: "field-radio-mesh-networks",
    title: "Field Radio: Mesh Networks When the Grid Goes Dark",
    dek: "A neighborhood comms stack that works without towers, apps, or luck — and the habits that make it useful.",
    category: "Tech",
    readMinutes: 8,
    published: "2026-07-28",
    image: "/media/radio.jpg",
    video: "/media/radio.mp4",
    takeaways: [
      "License-free mesh is a start; a licensed or GMRS fallback is the insurance.",
      "Practice on a Tuesday or the radio will be a paperweight on Saturday.",
      "Power the radio from the same quiet bank that keeps your lights on.",
    ],
    body: [
      "When cellular sites lose backhaul, the phone in your pocket becomes a flashlight with extra steps. Neighborhoods that still talk to each other do it with radios they have already named, charged, and used for something boring — a lost dog, a blocked street, a check-in after a storm drill.",
      "A practical stack has three layers. First, a license-free mesh (LoRa or similar) for short text and node health across a few blocks, with antennas on chimneys not coffee tables. Second, GMRS or amateur voice for distance and for people who will never open an app. Third, one written protocol: who watches the channel, what a check-in sounds like, and when silence means ‘send someone.’",
      "Hardware is less mystical than forums suggest. A weatherproof node, a magnetic-mount antenna with a real ground plane, spare batteries that fit the same charger as your headlamps. Skip the tacticool housings. Label every radio with a call name and a frequency card inside the battery door. Store one kit in a Faraday sleeve if you worry about surge; store the daily radio where you can grab it.",
      "The failure mode is not range. It is people who have never pressed PTT in the rain. Run a ten-minute net every other Sunday. Keep a paper roster. If the mesh app needs a phone, assume the phone is dead and design the voice layer as if that is normal.",
    ],
  },
  {
    slug: "72-hour-kit-rebuilt",
    title: "The 72-Hour Kit, Rebuilt for 2026",
    dek: "Less bunker cosplay, more a bag you would actually carry — water, light, comms, and the boring medicine.",
    category: "Prep",
    readMinutes: 7,
    published: "2026-06-19",
    image: "/media/kit.jpg",
    takeaways: [
      "Water weight wins. Filter plus a collapsible bladder beats twelve bottles.",
      "Medications and copies of IDs are the items people forget until they cannot.",
      "Pack it, walk it, and restock on a calendar — not after the siren.",
    ],
    body: [
      "The classic 72-hour kit failed because it was designed as a photograph. Twelve bottles of water, a thousand calories of granola, a radio with no batteries, and a sense of virtue. Rebuild it as a bag you can lift, a list you can restock, and a set of problems you have already solved once.",
      "Water first. A gravity or squeeze filter rated for protozoa and bacteria, purification tablets as backup, and a two-liter bladder that packs flat. In a shelter-in-place event the kit never leaves the closet; in an evacuation it cannot weigh more than you will carry up stairs. Do not pack a week of canned soup unless you also pack a way to open and heat it.",
      "Light, comms, and documents sit in one inner pouch: a USB-C headlamp, a compact radio, a battery bank that also charges the phone, photocopies of IDs and prescriptions in a dry bag. Cash in small bills. A paper map of two routes out. If anyone in the house takes daily medicine, that is the kit. Everything else is optional.",
      "Walk the bag once a season. Replace filters by date, not by hope. Keep a twin of the pouch in the car if you commute. The point is not to imagine the worst Tuesday. It is to make the ordinary outage — heat, flood, a night without power — uninteresting.",
    ],
  },
  {
    slug: "solar-hail-smoke-winter",
    title: "Solar That Survives Hail, Smoke, and Winter",
    dek: "What actually degrades an array — and the unglamorous specs that keep kilowatts coming in ugly weather.",
    category: "Power",
    readMinutes: 8,
    published: "2026-05-30",
    image: "/media/solar.jpg",
    video: "/media/solar.mp4",
    takeaways: [
      "Hail rating and snow load are not footnotes. Read them before the invoice.",
      "Microinverters isolate a cracked panel; a single string inverter does not.",
      "Smoke and snow are production problems you can design around, not surprises.",
    ],
    body: [
      "A solar array is a weather instrument that happens to make electricity. The panels that still produce after a decade of storms were specified for hail, wind, and snow — then installed by people who torque bolts to the number on the rail, not the number in their memory.",
      "Ask for the hail test, not the brochure photo. Class 4 impact resistance is table stakes in storm country. Tempered glass still cracks; the difference is whether one cell takes the hit or the whole string drops. Module-level electronics (microinverters or optimizers) keep the rest of the roof working when a panel is wounded. They also make shade and snow-shedding less dramatic.",
      "Winter is a geometry problem. A steeper pitch sheds snow and catches a low sun. A flat roof in a lake-effect belt is a ski jump you will climb with a roof rake. Leave access paths. Do not park snow on the array ‘to insulate it.’ Rapid shutdown and labeled conduits are not optional in 2026 — they are how the next crew works without guessing.",
      "Smoke from regional fires is a production haircut, not a death sentence. Output dips; the array does not need a ritual cleaning every time the sky turns beige. Rinse when ash is actually sitting on glass and the forecast is clear. Pair the roof with a battery sized for evening, and a smoky week becomes a dimmer switch instead of a crisis.",
    ],
  },
  {
    slug: "water-first-no-power",
    title: "Water First: Purification That Doesn't Need Power",
    dek: "Gravity, ceramic, and chemical — a stack that still works when the pump, the fridge, and the utility are all quiet.",
    category: "Prep",
    readMinutes: 6,
    published: "2026-04-22",
    image: "/media/water.jpg",
    takeaways: [
      "Assume municipal water is physically there and chemically untrusted after a boil advisory.",
      "A gravity filter plus tablets covers most households without a generator.",
      "Store enough for 72 hours, then treat what you can collect.",
    ],
    body: [
      "Power can wait. Water cannot. The useful question is not ‘how do I desalinate a lake.’ It is ‘what do I drink if the well pump is dead, the city issued a boil notice, or the only source is a rain barrel.’",
      "A gravity ceramic or hollow-fiber filter on the counter handles clear water with no electricity. Tablets or drops handle the cases the filter does not advertise — viruses, or a source you would rather not think about. Boiling remains the honest backup if you have a camp stove and a window. Do not mix bleach by internet folklore; follow the labeled disinfectant and a marked jug.",
      "Storage is unromantic and decisive. Three gallons per person per day is a planning number, not a lifestyle. Rotate it. Keep a collapsible bladder for the moment you can fill from a tanker or a neighbor’s still-running line. If you have a well, a manual or 12-volt pump that does not depend on the house inverter is the difference between a story and a plan.",
      "Taste is not safety, and clear is not clean. Treat first. Then worry about the coffee.",
    ],
  },
  {
    slug: "faraday-firmware-emp",
    title: "Faraday, Firmware, and EMP: What's Worth Shielding",
    dek: "A calm look at surge, solar weather, and the small kit of electronics that actually deserves a metal box.",
    category: "Tech",
    readMinutes: 7,
    published: "2026-03-14",
    image: "/media/faraday.jpg",
    takeaways: [
      "Everyday surge protection is the high-probability win. EMP is the tail risk.",
      "Shield a spare radio, a spare inverter remote, and a paper backup — not the whole house.",
      "A closed metal box with conductive gasket beats a foil burrito.",
    ],
    body: [
      "Electromagnetic panic sells pouches. Physics is pickier. The events that actually kill household electronics are nearby lightning, a sloppy generator hookup, and a utility surge. A coronal mass ejection or a high-altitude EMP is a different class of problem — real enough to plan for at the margin, not real enough to live inside a bunker catalog.",
      "For the probable: a whole-home surge protector at the panel, point-of-use strips on the battery inverter and networking gear, and a generator interlock so you cannot backfeed the street. Unplug the odd museum piece during a thunderstorm if it makes you sleep. That is most of the value.",
      "For the tail: a spare handheld radio, a small solar charge controller, a USB battery, and a flash drive of documents inside a proper Faraday enclosure — continuous metal, lid that seals on a conductive gasket, nothing dangling out. Test it by putting a phone inside and failing to call it. A cookie tin can work; a zipper bag lined with foil often does not.",
      "Firmware is the other fragility. Keep local copies of inverter manuals and config. Know how to run the battery without the cloud app. The apocalypse, if it arrives, will not wait while you reset a password.",
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function relatedArticles(slug: string, limit = 3) {
  const current = getArticle(slug);
  const rest = articles.filter((article) => article.slug !== slug);
  if (!current) return rest.slice(0, limit);
  const same = rest.filter((article) => article.category === current.category);
  const other = rest.filter((article) => article.category !== current.category);
  return [...same, ...other].slice(0, limit);
}

export const featuredSlug = articles[0].slug;
