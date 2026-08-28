import seek1Src from "@/assets/seek1.jpg";
import seek2Src from "@/assets/seek2.jpg";
import seek3Src from "@/assets/seek3.jpg";
import seek4Src from "@/assets/seek4.jpg";
import seek5Src from "@/assets/seek5.jpg";
import seek6Src from "@/assets/seek6.jpg";
import seek7Src from "@/assets/seek7.jpg";
import seek8Src from "@/assets/seek8.jpg";
import seek9Src from "@/assets/seek9.jpg";
import logoSrc from "@/assets/seek-logo.svg";
import heroSrc from "@/assets/seek-hero.jpg";

const seek1 = { url: seek1Src };
const seek2 = { url: seek2Src };
const seek3 = { url: seek3Src };
const seek4 = { url: seek4Src };
const seek5 = { url: seek5Src };
const seek6 = { url: seek6Src };
const seek7 = { url: seek7Src };
const seek8 = { url: seek8Src };
const seek9 = { url: seek9Src };
const logo = { url: logoSrc };
const hero = { url: heroSrc };


export const company = {
  name: "Seek Security",
  founded: 2019,
  founders: "the Orren family",
  base: "Pierre van Ryneveld, Centurion",
  address: {
    street: "78 Van Ryneveld Ave",
    suburb: "Pierre van Ryneveld",
    city: "Centurion",
    postalCode: "0157",
    country: "South Africa",
  },
  office: { label: "012 881 8091", tel: "+27128818091" },
  controlRoom: { label: "071 324 0605", tel: "+27713240605", whatsapp: "27713240605" },
  mission:
    "To provide clients with peace of mind through professional, reliable and effective security services while building long-term relationships with clients, contractors and property developers.",
  vision:
    "To expand nationally and become a preferred security provider while maintaining high standards of professionalism, discipline, service delivery and technology.",
};

export const whatsappLink = (message?: string) =>
  `https://wa.me/${company.controlRoom.whatsapp}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

export const images = {
  hero,
  team: seek2,
  tacticalTraining: seek3,
  medicalScene: seek1,
  nightResponse: seek4,
  fleetSunset: seek5,
  guards: seek6,
  incidentNight: seek7,
  communityEvent: seek8,
  emergencyScene: seek9,
  logo,
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  body: string;
  points: string[];
  image?: { url: string };
  alt?: string;
};

export const services: Service[] = [
  {
    slug: "armed-response",
    title: "Armed Response",
    short: "Armed reaction officers dispatched from our control room to your address.",
    body: "Armed response officers are dispatched by our control room to attend alarm activations, panic signals and incidents on site. Reaction vehicles are marked, radio-linked and crewed by armed officers.",
    points: [
      "Alarm and panic activation response",
      "Marked, radio-linked reaction vehicles",
      "Armed reaction officers on duty",
      "Control room dispatch and feedback",
    ],
    image: seek3,
    alt: "Seek Security armed reaction officers deployed alongside a marked response vehicle",
  },
  {
    slug: "rapid-response-unit",
    title: "Rapid Response / RRU",
    short: "A dedicated rapid response unit for incidents that need immediate presence.",
    body: "Our Rapid Response Unit supports armed response with additional crews for incidents that require extra manpower, area saturation or follow-up on scene.",
    points: [
      "Dedicated RRU crews",
      "Incident and follow-up support",
      "Area patrol and saturation",
      "Coordinated with control room",
    ],
    image: seek4,
    alt: "Seek Security response vehicle with emergency lighting on scene at night",
  },
  {
    slug: "security-guarding",
    title: "Security Guarding",
    short: "Domestic, commercial, industrial and mining guarding deployments.",
    body: "Guarding is deployed to suit the site: residential properties, commercial premises, industrial facilities and mining operations. Officers are trained, supervised and supported by our control room.",
    points: [
      "Domestic and residential guarding",
      "Commercial and retail premises",
      "Industrial sites and facilities",
      "Mining operations",
    ],
    image: seek6,
    alt: "Seek Security guarding personnel lined up on parade with company vehicles",
  },
  {
    slug: "vip-protection",
    title: "VIP Protection & Bodyguarding",
    short: "Close protection for individuals, families and visiting principals.",
    body: "Close protection officers provide discreet, professional cover for principals, families and visiting guests, drawing on military and security industry experience.",
    points: [
      "Close protection officers",
      "Bodyguarding for individuals and families",
      "Event and travel movements",
      "Discreet, professional conduct",
    ],
    image: seek2,
    alt: "Seek Security armed protection team standing in front of a company vehicle",
  },
  {
    slug: "high-risk-escorts",
    title: "High-Risk & High-Value Escorts",
    short: "Escorting people, vehicles and high-value product in transit.",
    body: "Escort teams accompany high-risk movements and high-value product in transit, with route planning, escort vehicles and armed officers.",
    points: [
      "High-risk escorts",
      "High-value product escorts",
      "Route planning and escort vehicles",
      "Armed escort officers",
    ],
    image: seek5,
    alt: "Seek Security branded response fleet parked in a row at sunset",
  },
  {
    slug: "cctv-and-alarm-monitoring",
    title: "Offsite CCTV & Alarm Monitoring",
    short: "Real-time offsite camera monitoring and alarm signal monitoring, 24/7.",
    body: "Our control room monitors alarm signals and offsite real-time CCTV feeds around the clock, escalating to armed response when a signal or camera event requires attention.",
    points: [
      "Offsite real-time CCTV monitoring",
      "Alarm signal monitoring",
      "24/7 control room cover",
      "Escalation to armed response",
    ],
    image: seek7,
    alt: "Seek Security patrol vehicle attending an incident on a road at night",
  },
  {
    slug: "medical-response",
    title: "Medical Response",
    short: "Medical response support at incidents and emergencies on scene.",
    body: "Medical response is provided alongside our security operations, with crews assisting on scene and coordinating with emergency services where required.",
    points: [
      "Medical response on scene",
      "Coordination with emergency services",
      "Support at incidents and accidents",
      "Control room dispatch",
    ],
    image: seek1,
    alt: "Seek Security response vehicle alongside an ambulance at a roadside incident",
  },
  {
    slug: "vehicle-tracking",
    title: "Vehicle Tracking",
    short: "Vehicle tracking for private, fleet and commercial vehicles.",
    body: "Vehicle tracking gives you visibility of your vehicles and supports recovery efforts when a vehicle is taken, backed by our control room.",
    points: [
      "Private and fleet vehicle tracking",
      "Control room visibility",
      "Support for recovery efforts",
      "Modern tracking technology",
    ],
  },
  {
    slug: "event-security",
    title: "Event Security",
    short: "Security planning and deployment for events and gatherings.",
    body: "Event deployments cover access control, crowd presence, patrols and a visible security footprint appropriate to the venue and audience.",
    points: [
      "Access control at entrances",
      "Visible patrols and presence",
      "Vehicle and parking oversight",
      "Coordination with organisers",
    ],
    image: seek8,
    alt: "Seek Security branded vehicles and gazebos at a community event",
  },
  {
    slug: "investigations",
    title: "Investigations",
    short: "Investigation services for incidents, losses and internal matters.",
    body: "Investigations are handled discreetly by experienced personnel, covering incident follow-up, losses and internal matters for private and business clients.",
    points: [
      "Incident investigations",
      "Loss and shrinkage matters",
      "Internal investigations",
      "Discreet handling and reporting",
    ],
  },
  {
    slug: "security-equipment-installation",
    title: "Security Equipment Installation",
    short: "Installation of security equipment suited to the site and risk.",
    body: "We install security equipment as part of a tailored solution, so that monitoring, response and physical security work together rather than in isolation.",
    points: [
      "Equipment specified per site",
      "Installed to work with monitoring",
      "Modern security technology",
      "Supported after installation",
    ],
  },
  {
    slug: "psira-security-guard-training",
    title: "PSIRA Security Guard Training",
    short: "PSIRA security guard training for people entering the industry.",
    body: "We provide PSIRA security guard training, drawing on the military and security industry experience within the company.",
    points: [
      "PSIRA security guard training",
      "Instructors with industry experience",
      "Discipline and professional standards",
      "Practical, site-relevant instruction",
    ],
    image: seek9,
    alt: "Seek Security personnel working alongside emergency services at night",
  },
];

export const differentiators = [
  {
    title: "Tailored Solutions",
    body: "Security is specified around your property, risk and routine rather than sold as a fixed package.",
  },
  {
    title: "Military & Industry Experience",
    body: "The company draws on military, security and corporate security experience, in place since 2019.",
  },
  {
    title: "Proactive Risk Management",
    body: "Threat and risk are managed before an incident, not only reacted to after the fact.",
  },
  {
    title: "Modern Technology",
    body: "Monitoring, tracking and offsite CCTV technology support officers in the field.",
  },
  {
    title: "24/7 Monitoring & Support",
    body: "Our control room is contactable around the clock and dispatches response as required.",
  },
  {
    title: "Integrity & Transparency",
    body: "Professionalism, integrity, loyalty and transparent communication with every client.",
  },
];

/* Only areas supported by the company's own information: the base of
 * operations, plus the stated intention to expand nationally. */
export const serviceAreas = {
  base: "Pierre van Ryneveld, Centurion",
  note: "Our office and control room are based in Pierre van Ryneveld, Centurion. Deployments outside this area are arranged directly with our team — call the control room to confirm cover for your address or site.",
};
