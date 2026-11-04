import { writeFileSync } from 'node:fs';

const slugs = [
  'emergency-electrical-services',
  'electrical-panel-upgrades',
  'electrical-code-violation-corrections',
  'ev-charger-installation',
  'electrical-repairs',
  'circuit-breaker-repair-and-replacement',
  'wiring-and-rewiring',
  'cloth-wiring-replacement',
  'fuse-box-upgrades',
  'gfci-outlet-installation',
  'electrical-inspections',
  'smoke-and-carbon-monoxide-detector-installation',
  'indoor-lighting',
  'outlets-and-switches',
  'aluminum-wiring-replacement',
  'dedicated-circuits',
  'ceiling-fan-installation',
  'led-lighting-upgrades',
  'outdoor-lighting',
  'landscape-lighting',
  'security-lighting',
  'commercial-electrical-services',
  'data-and-ethernet-wiring',
  'parking-lot-lighting',
  'smart-home-wiring',
  'fixture-and-chandelier-installation',
  'electrical-troubleshooting',
];

const titles = {
  'emergency-electrical-services': 'Emergency Electrical Services',
  'electrical-panel-upgrades': 'Electrical Panel Upgrades',
  'electrical-code-violation-corrections': 'Electrical Code Violation Corrections',
  'ev-charger-installation': 'EV Charger Installation',
  'electrical-repairs': 'Electrical Repairs',
  'circuit-breaker-repair-and-replacement': 'Circuit Breaker Repair and Replacement',
  'wiring-and-rewiring': 'Wiring and Rewiring',
  'cloth-wiring-replacement': 'Cloth Wiring Replacement',
  'fuse-box-upgrades': 'Fuse Box Upgrades',
  'gfci-outlet-installation': 'GFCI Outlet Installation',
  'electrical-inspections': 'Electrical Inspections',
  'smoke-and-carbon-monoxide-detector-installation':
    'Smoke and Carbon Monoxide Detector Installation',
  'indoor-lighting': 'Indoor Lighting',
  'outlets-and-switches': 'Outlets and Switches',
  'aluminum-wiring-replacement': 'Aluminum Wiring Replacement',
  'dedicated-circuits': 'Dedicated Circuits',
  'ceiling-fan-installation': 'Ceiling Fan Installation',
  'led-lighting-upgrades': 'LED Lighting Upgrades',
  'outdoor-lighting': 'Outdoor Lighting',
  'landscape-lighting': 'Landscape Lighting',
  'security-lighting': 'Security Lighting',
  'commercial-electrical-services': 'Commercial Electrical Services',
  'data-and-ethernet-wiring': 'Data and Ethernet Wiring',
  'parking-lot-lighting': 'Parking Lot Lighting',
  'smart-home-wiring': 'Smart Home Wiring',
  'fixture-and-chandelier-installation': 'Fixture and Chandelier Installation',
  'electrical-troubleshooting': 'Electrical Troubleshooting',
};

const summaries = {
  'emergency-electrical-services':
    'When power loss, sparking, or burning odors create an immediate safety concern, you need a calm, skilled response. We isolate hazards, stabilize the system, and explain follow-up repairs or upgrades.',
  'electrical-panel-upgrades':
    'Modern panels support today’s appliances, EV charging, and workshop loads while improving overcurrent protection. We evaluate your service size, panel condition, and grounding before recommending an upgrade path.',
  'electrical-code-violation-corrections':
    'Inspection findings can feel overwhelming. We review violation notices, map them to NEC-aligned corrections, and document completed work for re-inspection when required.',
  'ev-charger-installation':
    'Level 2 home and business chargers need the right circuit size, location, and disconnecting means. We coordinate load calculations, wiring routes, and manufacturer requirements.',
  'electrical-repairs':
    'From dead outlets to damaged circuits, repairs start with accurate diagnosis so symptoms do not return. We repair or replace components to restore safe, reliable power.',
  'circuit-breaker-repair-and-replacement':
    'Breakers protect wire and equipment. We identify whether nuisance tripping stems from overload, a failing breaker, or a fault on the branch circuit.',
  'wiring-and-rewiring':
    'Partial or whole-home rewiring addresses aging insulation, insufficient capacity, and ungrounded circuits. We plan paths that minimize disruption to finished spaces.',
  'cloth-wiring-replacement':
    'Vintage cloth-insulated wiring can become brittle and pose fire risk. We replace affected runs and upgrade devices to current safety standards.',
  'fuse-box-upgrades':
    'Fuse panels may lack modern protection and space for new circuits. We migrate to breaker panels with appropriate service capacity.',
  'gfci-outlet-installation':
    'GFCI protection reduces shock risk near water and outdoors. We install and test GFCI receptacles and breakers where codes and best practices require them.',
  'electrical-inspections':
    'Inspections support real estate transactions, insurance reviews, and peace of mind. We document visible conditions and recommend prioritized corrections.',
  'smoke-and-carbon-monoxide-detector-installation':
    'Proper detector placement and interconnection save lives. We install hardwired and battery-backed units to manufacturer and code guidance.',
  'indoor-lighting':
    'Layered indoor lighting improves comfort and task visibility. We install recessed, track, and fixture lighting with dimming where desired.',
  'outlets-and-switches':
    'We add, relocate, and upgrade outlets and switches—including USB and tamper-resistant devices—for convenience and safety.',
  'aluminum-wiring-replacement':
    'Aluminum branch wiring needs correct terminations or replacement. We evaluate COPALUM-style remediation or rewiring based on your home’s condition.',
  'dedicated-circuits':
    'Large appliances and workshops need circuits sized for continuous load. We run dedicated lines from the panel to the point of use.',
  'ceiling-fan-installation':
    'Fans require rated boxes and balanced mounting. We install fans, remotes, and controls while verifying support and switching.',
  'led-lighting-upgrades':
    'LED retrofits cut energy use and heat. We match drivers, dimmers, and color temperature for each space.',
  'outdoor-lighting':
    'Exterior lighting improves safety and curb appeal. We install wet-location fixtures, photocells, and timers.',
  'landscape-lighting':
    'Low-voltage landscape lighting highlights paths and plantings. We layout transformers, wiring, and fixtures for even illumination.',
  'security-lighting':
    'Motion-activated and dusk-to-dawn lighting deters trespass and improves camera visibility. We aim fixtures to reduce glare for neighbors.',
  'commercial-electrical-services':
    'Retail, office, and light industrial spaces need reliable power and maintenance. We handle tenant improvements, lighting retrofits, and power distribution.',
  'data-and-ethernet-wiring':
    'Structured cabling supports networks and PoE devices. We run Cat6/Cat6a to patch panels and work areas with clean terminations.',
  'parking-lot-lighting':
    'Lot and pole lighting improves safety after dark. We service fixtures, ballasts/LED drivers, and photocontrols for consistent coverage.',
  'smart-home-wiring':
    'Smart switches, panels, and hubs need neutral wires and proper loads. We prepare circuits and enclosures for your chosen ecosystem.',
  'fixture-and-chandelier-installation':
    'Heavy fixtures demand secure mounting and correct supply wiring. We install chandeliers, pendants, and specialty fixtures safely.',
  'electrical-troubleshooting':
    'Intermittent faults need methodical testing—not guesswork. We trace circuits, measure loads, and isolate defects efficiently.',
};

function related(i) {
  return [slugs[(i + 1) % 27], slugs[(i + 2) % 27], slugs[(i + 5) % 27]];
}

const services = slugs.map((slug, i) => {
  const title = titles[slug];
  const lower = title.toLowerCase();
  return {
    slug,
    title,
    shortLabel: title,
    metaDescription: `Professional ${lower} for homes and businesses. Safe, code-conscious work from Ace Electric LLC. Request a quote.`,
    h1: title,
    summary: summaries[slug],
    warningSigns: [
      'You notice recurring issues such as tripping breakers, warm devices, or flickering lights.',
      'Outlets or switches feel loose, spark, or only work intermittently.',
      'You are planning a remodel, new appliance, or equipment that increases electrical load.',
      'An inspection or insurance review flagged concerns you want corrected promptly.',
    ],
    process: [
      'Contact us with a brief description of the issue or project goals.',
      'We schedule a site visit or assessment to inspect relevant circuits and equipment.',
      'You receive a clear scope of work and quote before work begins.',
      'Licensed electricians complete the work, test circuits, and walk you through the results.',
    ],
    faqs: [
      {
        question: `When should I schedule ${lower}?`,
        answer:
          'Schedule as soon as symptoms affect safety, daily use, or a deadline such as a sale or tenant move-in. Early assessment often reduces cost and downtime.',
      },
      {
        question: 'Will you pull permits if they are required?',
        answer:
          'When permits apply to your project, we coordinate permitting and inspections as part of the scope we agree on with you.',
      },
      {
        question: 'How long does a typical project take?',
        answer:
          'Timing depends on access, materials, and complexity. After the assessment we provide a realistic schedule for your specific job.',
      },
      {
        question: 'Can you coordinate with other trades?',
        answer:
          'Yes. We often work alongside HVAC, low-voltage, and general contractors so rough-in and finish stages stay aligned.',
      },
    ],
    relatedSlugs: related(i),
  };
});

writeFileSync('src/data/services/entries.json', JSON.stringify(services, null, 2));
console.log('Generated', services.length, 'services');
