/** Unique warning signs, process steps, FAQs, meta, and examples per service slug. */
export const contentBySlug = {
  'emergency-electrical-services': {
    metaDescription:
      '24/7 response for sparking panels, partial power loss, and burning smells in Albuquerque homes and businesses.',
    example: 'Restore safe power after a storm tripped the main or a branch arc at the meter.',
    warningSigns: [
      'You smell hot plastic or burning near the panel, outlets, or appliances.',
      'Part of the building lost power while other circuits still work.',
      'Outlets or switches spark, buzz, or feel warm to the touch.',
      'Water contact with wiring, fixtures, or the panel after a leak or flood.',
    ],
    process: [
      'Call with what you see, smell, or hear—we triage safety first.',
      'We isolate the hazard, shut down affected circuits, and test before energizing.',
      'We explain immediate repairs versus follow-up work you can schedule.',
      'We document findings and next steps for insurance or landlords when needed.',
    ],
    faqs: [
      {
        question: 'What counts as an electrical emergency?',
        answer:
          'Active sparking, smoke, shock risk, total power loss with no utility outage, or equipment you cannot safely de-energize. When in doubt, shut off the main if you can do so safely and call.',
      },
      {
        question: 'Should I shut off my main breaker?',
        answer:
          'If you can reach it without risk and symptoms are worsening, yes. Do not touch the panel if there is water, fire, or visible damage—wait for help.',
      },
      {
        question: 'Can you make temporary power safe until a full repair?',
        answer:
          'Often we can stabilize the system the same visit, then schedule parts or permit work if the full fix takes longer.',
      },
      {
        question: 'Do you coordinate with the utility?',
        answer:
          'We work on your side of the meter. If the issue is service equipment, we tell you when PNM or the utility must be involved.',
      },
    ],
  },
  'electrical-panel-upgrades': {
    metaDescription:
      'Panel and service upgrades for older Albuquerque homes adding EV chargers, AC, or workshop loads.',
    example: 'Replace a full 100A fuse panel with a labeled 200A breaker panel before an EV charger install.',
    warningSigns: [
      'The panel is warm, corroded, or uses fuses instead of modern breakers.',
      'Breakers trip when you run the dryer, AC, and kitchen at the same time.',
      'You are adding an EV charger, hot tub, or shop equipment with no spare spaces.',
      'A home sale or insurance review flagged the panel age or condition.',
    ],
    process: [
      'Review your current service size, panel brand, and planned loads.',
      'Lay out options: like-for-like replacement versus service upgrade.',
      'Pull permits when required and coordinate utility disconnect if needed.',
      'Install, label circuits, test, and walk you through the new layout.',
    ],
    faqs: [
      {
        question: 'Do I need a full service upgrade or just a new panel?',
        answer:
          'That depends on your utility service size and future loads. We measure what you have and what you plan to add before recommending either path.',
      },
      {
        question: 'How long will I be without power?',
        answer:
          'Many panel swaps are same-day with a planned utility disconnect window. Larger upgrades may take longer—we give you a schedule before work starts.',
      },
      {
        question: 'Will my circuits stay labeled?',
        answer:
          'Yes. We label breakers to match rooms and major appliances so future work is easier.',
      },
      {
        question: 'Can you add spaces for an EV charger later?',
        answer:
          'We often upsize the panel or leave dedicated spaces when you know a charger is coming soon.',
      },
    ],
  },
  'electrical-code-violation-corrections': {
    metaDescription:
      'Correct NEC and local code findings from home sales, rentals, and commercial inspections in New Mexico.',
    example: 'Fix open grounds, missing GFCI in a kitchen, and unsupported cables called out on a buyer inspection report.',
    warningSigns: [
      'You received a written list of violations from an inspector or city official.',
      'A real estate deal is on hold until electrical items are cleared.',
      'Prior DIY work left exposed splices, wrong breakers, or ungrounded outlets.',
      'A tenant or insurer asked for documented corrections.',
    ],
    process: [
      'Review the violation notice and walk the property against each item.',
      'Quote corrections in priority order (life safety first).',
      'Complete work to current code and leave evidence for re-inspection.',
      'Provide photos or invoices for closing or compliance files.',
    ],
    faqs: [
      {
        question: 'Do you work from my inspection report?',
        answer:
          'Yes. Bring the report—we map each line item to a repair and note anything that needs permit or utility involvement.',
      },
      {
        question: 'Can you meet a closing deadline?',
        answer:
          'We schedule urgent sale-related work when our calendar allows. Share your date early so we can plan permits and materials.',
      },
      {
        question: 'Will you sign off for the inspector?',
        answer:
          'We perform the repairs; the authority having jurisdiction re-inspects. We document work so re-inspection is straightforward.',
      },
      {
        question: 'What if the report lists “consult an electrician”?',
        answer:
          'We investigate those items, explain root cause, and quote fixes rather than masking symptoms.',
      },
    ],
  },
  'ev-charger-installation': {
    metaDescription:
      'Level 2 EV charger installs with load calculations, dedicated circuits, and manufacturer-ready wiring.',
    example: '240V circuit from panel to garage for a Grizzl-E or ChargePoint with proper breaker size and disconnect.',
    warningSigns: [
      'You ordered a charger and need a dedicated circuit the panel cannot support yet.',
      'An extension cord or 120V outlet is your only charging option today.',
      'Your panel has no open spaces or trips when the dryer and AC run together.',
      'HOA or landlord requires a permitted, hardwired installation.',
    ],
    process: [
      'Confirm charger specs, cable route, and parking location.',
      'Calculate load and panel capacity; upgrade if required.',
      'Run conduit or cable, install breaker, outlet or hardwire, and test.',
      'Leave labeling and instructions for breaker and reset procedures.',
    ],
    faqs: [
      {
        question: 'Do I need a panel upgrade for an EV charger?',
        answer:
          'Not always. We verify service size and existing load before recommending a dedicated circuit or panel work.',
      },
      {
        question: 'Can you install the charger I already bought?',
        answer:
          'Yes, if it is UL-listed and we can wire to the manufacturer requirements for amperage and disconnect.',
      },
      {
        question: 'Indoor garage versus outdoor post?',
        answer:
          'Both are common. Outdoor runs need wet-location materials and often longer conduit paths—we quote each layout.',
      },
      {
        question: 'Are permits required?',
        answer:
          'Many jurisdictions require permits for new 240V circuits. We include permitting when it applies to your address.',
      },
    ],
  },
  'electrical-repairs': {
    metaDescription:
      'Diagnose and fix dead outlets, damaged circuits, and failing devices without unnecessary rewiring.',
    example: 'Trace a dead kitchen counter circuit to a failed GFCI upstream in the garage.',
    warningSigns: [
      'One room or circuit lost power while the rest of the house works.',
      'Outlets work intermittently or only when something is plugged in a certain way.',
      'Lights dim when a major appliance starts.',
      'You see scorch marks, melted plastic, or a breaker that will not reset.',
    ],
    process: [
      'Listen to symptoms and test at the panel and first affected device.',
      'Isolate the fault—device, connection, or cable—not guess-and-replace.',
      'Repair or replace only what failed and verify load is normal.',
      'Test GFCI/AFCI protection and show you what was wrong.',
    ],
    faqs: [
      {
        question: 'Is there a minimum service call?',
        answer:
          'We quote after understanding the scope. Simple device swaps differ from multi-room troubleshooting—we explain before we start billed work.',
      },
      {
        question: 'Can you fix aluminum or cloth wiring while you are here?',
        answer:
          'If we find legacy wiring, we tell you whether a spot repair is safe or a larger replacement is the right fix.',
      },
      {
        question: 'Why does my breaker keep tripping?',
        answer:
          'Overload, a failing breaker, or a fault on the circuit. We measure and test to find which—not just swap breakers blindly.',
      },
      {
        question: 'Do you repair commercial tenant spaces?',
        answer:
          'Yes, for light commercial power and lighting when access and permits allow.',
      },
    ],
  },
  'circuit-breaker-repair-and-replacement': {
    metaDescription:
      'Replace nuisance-tripping or overheating breakers and match the right type for your panel.',
    example: 'Swap a counterfeit or wrong-brand breaker for an OEM match after repeated trips on a laundry circuit.',
    warningSigns: [
      'A breaker trips repeatedly under normal use.',
      'The breaker feels hot or smells when it trips.',
      'You hear buzzing from the panel when certain loads run.',
      'Someone installed the wrong brand or type of breaker in your panel.',
    ],
    process: [
      'Identify panel manufacturer and acceptable breaker types.',
      'Test the branch circuit for overload versus ground fault.',
      'Replace breakers or correct connections as needed.',
      'Verify trip settings and label the circuit.',
    ],
    faqs: [
      {
        question: 'Can I use any breaker that fits?',
        answer:
          'No. Panels are listed for specific breaker families. We install only compatible breakers.',
      },
      {
        question: 'Is a tripping breaker always bad?',
        answer:
          'Sometimes the breaker is doing its job on an overloaded or faulted circuit. We test the circuit before replacing the breaker.',
      },
      {
        question: 'Should I upgrade to AFCI or GFCI breakers?',
        answer:
          'When code or room type requires it, yes. We recommend upgrades during remodels or when protection is missing.',
      },
      {
        question: 'Can you replace breakers in a live panel safely?',
        answer:
          'We follow lockout and PPE practices and de-energize when the work requires it.',
      },
    ],
  },
  'wiring-and-rewiring': {
    metaDescription:
      'Partial or whole-home rewiring for remodels, additions, and ungrounded circuits in older Albuquerque homes.',
    example: 'Rewire a kitchen remodel with new 20A small-appliance circuits and grounded boxes.',
    warningSigns: [
      'Rooms still have two-prong outlets or ungrounded three-prong adapters.',
      'You are opening walls for a remodel and find brittle or damaged cable.',
      'Insurance or an inspector flagged ungrounded or undersized wiring.',
      'You need new circuits for an addition, ADU, or finished basement.',
    ],
    process: [
      'Walk the property and mark circuits on a simple map.',
      'Plan paths that minimize drywall damage—or coordinate with your GC.',
      'Pull new cable, boxes, and devices to current code.',
      'Test grounds, polarity, and AFCI/GFCI where required.',
    ],
    faqs: [
      {
        question: 'Do I have to rewire the entire house?',
        answer:
          'Not always. We recommend full rewiring when insulation is failing widely; partial rewiring works when damage is localized.',
      },
      {
        question: 'Can you work in occupied homes?',
        answer:
          'Yes. We schedule by area, protect floors, and restore power to essential circuits each night when possible.',
      },
      {
        question: 'Will you coordinate with my contractor?',
        answer:
          'We often rough-in before drywall and trim-out after—share your build schedule with us.',
      },
      {
        question: 'How do you handle asbestos or lead paint eras?',
        answer:
          'We follow safe work practices and tell you when abatement specialists should precede electrical work.',
      },
    ],
  },
  'cloth-wiring-replacement': {
    metaDescription:
      'Replace brittle cloth-insulated branch circuits before connections fail in attics and walls.',
    example: 'Replace cloth-insulated feeds to bedrooms where insulation is cracking at the panel lugs.',
    warningSigns: [
      'You see frayed cloth insulation at outlets or in the attic.',
      'Insulation flakes off when devices are moved or replaced.',
      'An insurer or inspector noted cloth wiring on a report.',
      'You smell hot dust near switches on cloth-wired circuits.',
    ],
    process: [
      'Locate active cloth runs with minimal invasive inspection.',
      'Quote replacement routing—often attic and basement paths.',
      'Remove abandoned cloth and install modern NM or conduit as appropriate.',
      'Update devices and breakers to match new wire type and load.',
    ],
    faqs: [
      {
        question: 'Is all cloth wiring dangerous?',
        answer:
          'Age and condition matter. Brittle insulation and poor terminations are the usual drivers for replacement.',
      },
      {
        question: 'Can you replace one circuit at a time?',
        answer:
          'Yes. Many homeowners prioritize kitchens, baths, and bedrooms first.',
      },
      {
        question: 'Will walls need to be opened?',
        answer:
          'We prefer attic, crawl, and basement routes. Occasionally a small access hole is needed—we discuss that upfront.',
      },
      {
        question: 'Does replacement help with insurance?',
        answer:
          'Carriers vary. Documented removal of cloth wiring often satisfies underwriting requests—check with your agent.',
      },
    ],
  },
  'fuse-box-upgrades': {
    metaDescription:
      'Move from fuse panels to modern breaker panels with correct service capacity and labeling.',
    example: 'Upgrade a 60A fuse box to a 125A or 200A breaker panel before central AC replacement.',
    warningSigns: [
      'You still screw in fuses instead of resetting breakers.',
      'Fuses blow when you run modern appliances together.',
      'The panel has no main disconnect or lacks spare capacity.',
      'You cannot add AFCI, GFCI, or dedicated circuits to the old box.',
    ],
    process: [
      'Document existing loads and utility service size.',
      'Select a panel with enough spaces for today and near-term plans.',
      'Coordinate power off, swap equipment, and reconnect circuits.',
      'Label every circuit and test before restoring full power.',
    ],
    faqs: [
      {
        question: 'Are fuses unsafe?',
        answer:
          'Fuses can protect wire when sized correctly, but old panels often lack space, grounding, and modern protection devices.',
      },
      {
        question: 'Will my power be off all day?',
        answer:
          'Many upgrades finish in one day with a scheduled utility disconnect. We tell you the expected window.',
      },
      {
        question: 'Can tenants stay in the building?',
        answer:
          'For short outages, yes with notice. Multi-unit buildings need a coordinated schedule—we help plan it.',
      },
      {
        question: 'Do you dispose of the old panel?',
        answer:
          'We remove old equipment from the workspace. Scrap and recycling follow local practice.',
      },
    ],
  },
  'gfci-outlet-installation': {
    metaDescription:
      'GFCI outlets and breakers for kitchens, baths, garages, and outdoor receptacles.',
    example: 'Protect bathroom vanity and laundry with GFCI devices and test downstream kitchen outlets.',
    warningSigns: [
      'Outlets near sinks lack test/reset buttons but code expects GFCI protection.',
      'Outdoor or garage outlets are standard receptacles without weather protection.',
      'A GFCI trips often and will not reset—possibly protecting a fault downstream.',
      'You are remodeling a kitchen or bath and need compliant small-appliance circuits.',
    ],
    process: [
      'Identify which locations require GFCI by code and use.',
      'Choose receptacle, breaker, or both for the layout.',
      'Install, wire LINE/LOAD correctly, and test trip and reset.',
      'Mark downstream protected outlets on the cover plate or panel.',
    ],
    faqs: [
      {
        question: 'GFCI outlet or GFCI breaker?',
        answer:
          'Both work. Breakers protect the whole circuit; receptacles can be easier when the panel is far away.',
      },
      {
        question: 'Why will my GFCI not reset?',
        answer:
          'There may be a ground fault downstream, moisture, or a failed device. We test the circuit before replacing the GFCI.',
      },
      {
        question: 'Do older kitchens need updates on sale?',
        answer:
          'Many buyers and inspectors expect GFCI within six feet of sinks—we bring layouts up to current standards.',
      },
      {
        question: 'Can one GFCI protect multiple outlets?',
        answer:
          'Yes, when wired on the LOAD side. We test every protected outlet after installation.',
      },
    ],
  },
  'electrical-inspections': {
    metaDescription:
      'Visual electrical assessments for buyers, sellers, landlords, and maintenance planning.',
    example: 'Pre-listing walkthrough noting panel age, missing AFCI, and recommended smoke detector updates.',
    warningSigns: [
      'You are buying or selling and need clarity beyond a one-line inspection note.',
      'A tenant reported shocks, warm plates, or flickering lights.',
      'You manage several rentals and want a baseline condition report.',
      'You plan a major remodel and want to know panel capacity first.',
    ],
    process: [
      'Walk visible electrical systems—panel, devices, smoke/CO, exterior.',
      'Note safety priorities versus cosmetic or future upgrades.',
      'Provide a plain-language summary with photos when helpful.',
      'Quote corrections separately if you want us to perform the work.',
    ],
    faqs: [
      {
        question: 'Is this the same as a city inspection?',
        answer:
          'No. We provide an assessment for your decision-making; official inspections are done by the authority having jurisdiction.',
      },
      {
        question: 'Do you open the panel cover?',
        answer:
          'When safe and permitted, yes—to inspect breakers, labeling, and signs of overheating.',
      },
      {
        question: 'Can you inspect a commercial suite?',
        answer:
          'Yes for light commercial tenant spaces. Heavy industrial requires scoped proposals.',
      },
      {
        question: 'Will you give a pass/fail for a sale?',
        answer:
          'We describe conditions and priorities rather than pass/fail—lenders and inspectors have their own checklists.',
      },
    ],
  },
  'smoke-and-carbon-monoxide-detector-installation': {
    metaDescription:
      'Hardwired and battery-backed smoke and CO detectors with correct placement and interconnection.',
    example: 'Interlinked smoke/CO units on each level with bedroom hallway coverage per current guidance.',
    warningSigns: [
      'Detectors are past manufacturer date or missing where bedrooms branch off hallways.',
      'You only have battery sticks and want hardwired interconnection.',
      'CO sources (garage, gas appliances) are not covered on each level.',
      'Landlord or STR rules require documented life-safety devices.',
    ],
    process: [
      'Review floor plan and fuel-burning appliances for CO risk.',
      'Place smoke and CO units to current location rules.',
      'Run interconnect wire or wireless links as designed.',
      'Test all units and show you maintenance and replacement dates.',
    ],
    faqs: [
      {
        question: 'How often should detectors be replaced?',
        answer:
          'Follow manufacturer dates—often 7–10 years for smoke, shorter for some CO sensors. We note dates at install.',
      },
      {
        question: 'Can you use my existing wiring?',
        answer:
          'Often yes on retrofits. We verify the interconnect type and voltage before reusing old cables.',
      },
      {
        question: 'Do I need CO if I have no gas?',
        answer:
          'Electric homes still benefit near attached garages and sleeping areas when code or insurers ask for CO coverage.',
      },
      {
        question: 'Are wireless linked kits acceptable?',
        answer:
          'Listed wireless systems can meet interconnection needs where new wire is impractical—we match product listings to your layout.',
      },
    ],
  },
  'indoor-lighting': {
    metaDescription:
      'Recessed, pendant, and fixture lighting with dimming, switching, and load-matched LED retrofits.',
    example: 'Add dimmable cans and a fan-rated box in a vaulted living room with fireplace accent lighting.',
    warningSigns: [
      'Rooms feel dim or rely on a single ceiling bulb in a large space.',
      'You are remodeling and want recessed or under-cabinet lighting planned early.',
      'Old dimmers buzz or fail with new LED bulbs.',
      'You need fan-rated boxes or extra switching for multi-zone lighting.',
    ],
    process: [
      'Talk through how you use each room and desired light layers.',
      'Plan circuit loads, dimmer compatibility, and switch locations.',
      'Rough-in wiring and boxes before drywall when part of a remodel.',
      'Trim out fixtures, aim cans, and verify dimming performance.',
    ],
    faqs: [
      {
        question: 'Can you fix humming LED dimmers?',
        answer:
          'Usually by matching listed dimmers to the bulb or driver—we test combinations before finish.',
      },
      {
        question: 'Do recessed cans require insulation contact ratings?',
        answer:
          'In insulated ceilings, yes. We select IC-rated housings or keep clearance as required.',
      },
      {
        question: 'Can you add smart switches later?',
        answer:
          'We can pull neutrals and size boxes during rough-in to support smart switches when you choose them.',
      },
      {
        question: 'Do you supply fixtures?',
        answer:
          'You often pick fixtures; we install owner-supplied or recommend spec for weight and heat.',
      },
    ],
  },
  'outlets-and-switches': {
    metaDescription:
      'Add, move, or upgrade outlets and switches—including USB, tamper-resistant, and three-way layouts.',
    example: 'Add a recessed media box with duplex and Ethernet behind a wall-mounted TV.',
    warningSigns: [
      'You need outlets where furniture or counters block existing ones.',
      'Switches control the wrong fixture or lack a three-way at both doors.',
      'Plugs fall out of worn receptacles—a loose connection risk.',
      'You want USB, tamper-resistant, or weather-resistant devices in specific rooms.',
    ],
    process: [
      'Mark desired locations and check which walls allow fishing or surface raceway.',
      'Confirm circuit capacity before adding heavy loads.',
      'Install boxes, cable, and devices to code clearances.',
      'Test polarity, grounding, and GFCI/AFCI protection where required.',
    ],
    faqs: [
      {
        question: 'Can you add an outlet without visible wire?',
        answer:
          'Often we fish through walls or use listed raceway. Concrete or log homes need different approaches—we survey first.',
      },
      {
        question: 'Why do my outlets feel warm?',
        answer:
          'Loose connections, overload, or failing devices. We replace and test rather than ignore warmth.',
      },
      {
        question: 'Can you convert a switch to control a fan and light?',
        answer:
          'Yes with the right fan control, travelers, or smart switches—we match wiring to the fixture you have.',
      },
      {
        question: 'Are two-prong outlets legal?',
        answer:
          'They still exist in old work but are ungrounded. We recommend grounding or GFCI labeling where full rewiring waits.',
      },
    ],
  },
  'aluminum-wiring-replacement': {
    metaDescription:
      'Remediate or replace 1970s aluminum branch circuits with safe terminations or new copper runs.',
    example: 'Replace aluminum feeds to kitchen and bath outlets with copper homeruns to the panel.',
    warningSigns: [
      'Your home was built in the 1960s–70s and outlets show “AL” or silver-colored branch wire.',
      'Outlets or switches feel warm or show signs of overheating at screws.',
      'Insurers require remediation or copper pigtailing before binding coverage.',
      'You see incompatible devices or purple wire nuts on aluminum conductors.',
    ],
    process: [
      'Identify which circuits are aluminum versus copper.',
      'Recommend COPALUM-style remediation, listed connectors, or full replacement.',
      'Update devices rated for aluminum where they remain in service.',
      'Document work for insurers or inspectors.',
    ],
    faqs: [
      {
        question: 'Is aluminum wiring always a fire hazard?',
        answer:
          'Problems concentrate at terminations and incompatible devices. Proper remediation or replacement addresses those failure points.',
      },
      {
        question: 'Is pigtailing enough?',
        answer:
          'Listed remediation methods can be acceptable when done correctly. We advise replacement when wire is damaged or widely accessed.',
      },
      {
        question: 'Will you work with my insurance company?',
        answer:
          'We provide documentation of remediation; your agent confirms what they require.',
      },
      {
        question: 'Can I mix copper and aluminum in the panel?',
        answer:
          'Only with proper terminations and listed methods—we avoid ad-hoc splices in the panel.',
      },
    ],
  },
  'dedicated-circuits': {
    metaDescription:
      'Dedicated lines for appliances, workshops, HVAC, and equipment that cannot share general-purpose circuits.',
    example: '30A circuit for a laundry pair or 20A homerun for a home office server rack.',
    warningSigns: [
      'Major appliances share a circuit with lights and trip the breaker often.',
      'You are installing a tankless water heater, kiln, or shop equipment with nameplate amps.',
      'Code or the appliance manual requires a dedicated circuit.',
      'Voltage drop causes dimming when a single load starts.',
    ],
    process: [
      'Read equipment nameplate or manual for amperage and breaker size.',
      'Verify panel spaces and service capacity.',
      'Run homerun cable or conduit to the appliance location.',
      'Terminate, label the breaker, and test under load when safe.',
    ],
    faqs: [
      {
        question: 'What appliances need dedicated circuits?',
        answer:
          'Many refrigerators, microwaves, laundry equipment, and fixed HVAC units do. Manuals and code tables define requirements.',
      },
      {
        question: 'Can you add a subpanel instead?',
        answer:
          'For shops and garages with many loads, a subpanel can be cleaner—we compare options in the quote.',
      },
      {
        question: 'How far can a run be?',
        answer:
          'Long runs need voltage-drop checks—we size wire accordingly, not only breaker amperage.',
      },
      {
        question: 'Do you install the appliance cord?',
        answer:
          'We terminate at the outlet or disconnect; appliance cord connections follow manufacturer steps, often by the installer or owner.',
      },
    ],
  },
  'ceiling-fan-installation': {
    metaDescription:
      'Ceiling fan mounting on rated boxes, balancing, and switching for light kits and remotes.',
    example: 'Replace a light-only box with a fan-rated brace and install a downrod fan with wall control.',
    warningSigns: [
      'The existing box wobbles or was never rated for fan weight.',
      'You want a fan where only a light fixture hung before.',
      'Remote or dual-switch control does not match the fan you purchased.',
      'High ceilings need an extension downrod and proper support.',
    ],
    process: [
      'Confirm ceiling structure and choose a fan-rated box or brace.',
      'Assemble fan, downrod, and light kit per manufacturer steps.',
      'Wire switching for fan, light, or single control as requested.',
      'Balance blades, test speeds, and verify no wobble at runtime.',
    ],
    faqs: [
      {
        question: 'Can any light box hold a fan?',
        answer:
          'No. Fans need listed fan boxes or braces. We upgrade support before hanging the fan.',
      },
      {
        question: 'Do I need two wall switches?',
        answer:
          'Optional. We can wire separate fan and light switches, remotes, or combined controls—tell us your preference.',
      },
      {
        question: 'Can you install outdoor-rated fans?',
        answer:
          'Yes on covered patios when listing and damp/wet ratings match the location.',
      },
      {
        question: 'Will you haul away the old fixture?',
        answer:
          'We remove the old fixture from the ceiling. Disposal of owner property follows your preference.',
      },
    ],
  },
  'led-lighting-upgrades': {
    metaDescription:
      'LED retrofits, drivers, and dimmer compatibility for lower energy use and better light quality.',
    example: 'Replace halogen cans with retrofit LED trims and matched dimmers in a living area.',
    warningSigns: [
      'Bulbs burn out quickly or flicker on existing dimmers.',
      'Recessed cans run hot or use high-wattage incandescent trims.',
      'Commercial troffers or exterior wall packs still use legacy lamps.',
      'You want specific color temperature for retail, office, or home offices.',
    ],
    process: [
      'Inventory fixture types and current dimmer or ballast gear.',
      'Select LED products or drivers that list dimmer compatibility.',
      'Retrofit or replace housings and lamps as needed.',
      'Verify dimming range, no flicker, and acceptable light levels.',
    ],
    faqs: [
      {
        question: 'Can I keep my existing cans?',
        answer:
          'Often yes with retrofit LED modules. Failed housings get replaced individually.',
      },
      {
        question: 'What color temperature should I use?',
        answer:
          'Warm 2700–3000K is common in homes; 3500–4000K in offices and kitchens. We sample options when unsure.',
      },
      {
        question: 'Do LED upgrades need new circuits?',
        answer:
          'Usually no—LED loads are lower. We still verify dimmer and driver pairing.',
      },
      {
        question: 'Can you do parking or pole LED retrofits?',
        answer:
          'Yes for many commercial fixtures—see parking lot lighting for large site work.',
      },
    ],
  },
  'outdoor-lighting': {
    metaDescription:
      'Porch, sconce, and security-friendly exterior fixtures with weather-rated boxes and controls.',
    example: 'Pair carriage lanterns on flanking garage doors with photocell and correct wet-location boxes.',
    warningSigns: [
      'Exterior fixtures are rusted, full of water, or missing gaskets.',
      'You need lighting at entries, paths, or decks for safety.',
      'Old mercury-vapor or halogen floods use excessive energy.',
      'HOA or design rules require matching fixture styles.',
    ],
    process: [
      'Choose fixture locations and switching (manual, timer, photocell).',
      'Install listed wet-location boxes and seal penetrations.',
      'Run cable in protected paths and GFCI-protect where required.',
      'Aim fixtures to reduce glare onto neighbors and streets.',
    ],
    faqs: [
      {
        question: 'Do outdoor outlets need GFCI?',
        answer:
          'Yes in most residential locations. We protect receptacles and sometimes use in-use covers.',
      },
      {
        question: 'Can you add a photocell for dusk-to-dawn?',
        answer:
          'Yes on many circuits—either at the fixture or a listed photocell switch location.',
      },
      {
        question: 'Are LED bulbs OK in enclosed outdoor fixtures?',
        answer:
          'Only if the LED is rated for enclosed fixtures—we match listing to the housing.',
      },
      {
        question: 'Do you install holiday or string light circuits?',
        answer:
          'We install permanent switched outlets where seasonal lighting plugs in safely.',
      },
    ],
  },
  'landscape-lighting': {
    metaDescription:
      'Low-voltage path, accent, and tree lighting with transformers sized for your yard layout.',
    example: 'Zone a front walk with path lights and uplights on cottonwoods from a timed transformer.',
    warningSigns: [
      'Dark walkways or steps cause trip hazards.',
      'Old landscape lights are corroded or buried splices fail after rain.',
      'You want to highlight architecture, walls, or trees without blinding glare.',
      'Transformer hums, overheats, or is undersized for added fixtures.',
    ],
    process: [
      'Walk the property at dusk to see dark zones and glare.',
      'Layout zones, wire runs, and transformer wattage with headroom.',
      'Install conduit where required and bury listed low-voltage cable.',
      'Aim fixtures, set timers, and show you how to adjust seasonally.',
    ],
    faqs: [
      {
        question: 'Low voltage versus line voltage?',
        answer:
          'Most residential accent lighting is 12V low voltage—safer for DIY-friendly paths. Line voltage is used for some commercial bollards.',
      },
      {
        question: 'Can you repair existing systems?',
        answer:
          'Yes—corroded sockets, cut cables, and failed transformers are common fixes.',
      },
      {
        question: 'Will landscape lighting bother neighbors?',
        answer:
          'We aim fixtures down and shield glare. Timers keep light off late night when you prefer.',
      },
      {
        question: 'Do you maintain systems seasonally?',
        answer:
          'We can rebury wires, replace lamps, and reset timers on service calls—ask when scheduling.',
      },
    ],
  },
  'security-lighting': {
    metaDescription:
      'Motion floods, entry lighting, and aimed fixtures that improve visibility without light trespass.',
    example: 'Dual-head LED motion floods above a garage with aimed cutoff for the street.',
    warningSigns: [
      'Side yards or driveways stay dark when motion would help.',
      'Old motion sensors false-trigger or never shut off.',
      'Cameras need even light—not harsh shadows from a single flood.',
      'Neighbors complain about glare from poorly aimed fixtures.',
    ],
    process: [
      'Identify coverage gaps and mounting heights.',
      'Select motion, dusk-to-dawn, or switched control.',
      'Install listed outdoor boxes and seal all penetrations.',
      'Aim and adjust sensitivity, time delay, and cutoff.',
    ],
    faqs: [
      {
        question: 'Do motion lights need a neutral?',
        answer:
          'Many modern LEDs do for the sensor—we verify wiring before install.',
      },
      {
        question: 'Can security lighting tie to cameras?',
        answer:
          'We provide power and mounting points; camera integration is usually IT or alarm vendor scope.',
      },
      {
        question: 'What about dark-sky rules?',
        answer:
          'We shield and aim fixtures downward when HOA or municipal guidance applies.',
      },
      {
        question: 'Can one switch control multiple floods?',
        answer:
          'Yes, with proper load totals and wiring—we design for your layout.',
      },
    ],
  },
  'commercial-electrical-services': {
    metaDescription:
      'Tenant improvements, distribution, and maintenance for retail, office, and light industrial sites.',
    example: 'New circuits for a 480V disconnect, transformers, and safety bollards in a bay.',
    warningSigns: [
      'Lease build-out needs power for equipment, signage, or POS.',
      'Lighting is uneven or ballasts fail across a sales floor.',
      'Panel schedules are missing and breakers are mislabeled.',
      'Production equipment trips breakers under normal shift load.',
    ],
    process: [
      'Review plans, landlord requirements, and permit path with your GC.',
      'Coordinate shutdown windows with tenants or production.',
      'Install distribution, devices, and lighting to agreed scope.',
      'Provide as-built labels and test results for closeout.',
    ],
    faqs: [
      {
        question: 'Do you work after hours?',
        answer:
          'Many TI projects need night or weekend work—we schedule when the site requires it.',
      },
      {
        question: 'Can you label our panel?',
        answer:
          'Yes—accurate labels are part of maintenance and TI closeout.',
      },
      {
        question: 'Do you handle three-phase power?',
        answer:
          'We service light commercial three-phase distribution within our licensed scope.',
      },
      {
        question: 'Who pulls permits?',
        answer:
          'We coordinate permits when they are in our scope; landlords sometimes pull shell permits separately.',
      },
    ],
  },
  'data-and-ethernet-wiring': {
    metaDescription:
      'Cat6 and Cat6a structured cabling for offices, Wi-Fi access points, and PoE devices.',
    example: 'Homerun Cat6 from a patch panel to desk drops and an access point in a ceiling.',
    warningSigns: [
      'Wi-Fi mesh cannot fix dead zones caused by missing wire to AP locations.',
      'Cables are exposed, crushed in doors, or terminated with DIY keystone mistakes.',
      'You are opening walls for remodel and want low-voltage rough-in at the same time.',
      'PoE cameras or phones reboot when multiple devices share one cable.',
    ],
    process: [
      'Map drop locations, rack or panel home, and pathway (plenum, conduit, or cable tray).',
      'Pull cable with bend-radius and separation from power as required.',
      'Terminate, test, and label both ends.',
      'Leave slack and documentation for your IT team or MSP.',
    ],
    faqs: [
      {
        question: 'Do you certify cable with a tester?',
        answer:
          'We verify continuity and pairs; formal certification reports can be scoped when required.',
      },
      {
        question: 'Can you share a wall with electrical?',
        answer:
          'Separation rules apply—we follow listing and code for low-voltage alongside power.',
      },
      {
        question: 'Do you install racks and patch panels?',
        answer:
          'Yes for small commercial IDF/closet builds within our scope.',
      },
      {
        question: 'Is fiber in scope?',
        answer:
          'Basic fiber terminations may be referred to specialists—ask when planning backbone links.',
      },
    ],
  },
  'parking-lot-lighting': {
    metaDescription:
      'Repair and retrofit pole, shoebox, and area lighting for safer lots and facades.',
    example: 'LED retrofit on twin shoebox heads on a site pole with photocell control.',
    warningSigns: [
      'Dark spots in the lot or fixtures out on several poles.',
      'Tenants or customers report poor visibility at night.',
      'Ballasts or drivers fail repeatedly on the same circuit.',
      'Energy bills stay high on legacy metal halide or HPS heads.',
    ],
    process: [
      'Survey poles, circuits, and control (photocell, timer, contactor).',
      'Quote lamp/ballast replacement or LED retrofit kits.',
      'Schedule lift access and power off with property manager.',
      'Relamp, aim fixtures, and verify even coverage after dark when possible.',
    ],
    faqs: [
      {
        question: 'Do you rent lifts?',
        answer:
          'We coordinate bucket or lift access when height requires it—cost is part of the quote.',
      },
      {
        question: 'Can you add new poles?',
        answer:
          'New poles often involve civil and utility coordination—we scope separately from lamp work.',
      },
      {
        question: 'Who controls the photocell?',
        answer:
          'Often on each fixture or a contactor in a panel—we trace control before replacing heads.',
      },
      {
        question: 'Are LED retrofits worth it?',
        answer:
          'Lower maintenance and energy use are common drivers—we match retrofit kits to your housings.',
      },
    ],
  },
  'smart-home-wiring': {
    metaDescription:
      'Neutrals, load ratings, and panel space for smart switches, panels, and hubs.',
    example: 'Add neutrals in switch boxes and a dedicated circuit for a smart load center.',
    warningSigns: [
      'Smart switches flicker or will not pair because neutrals are missing.',
      'You want a smart panel but lack spaces or correct feeder capacity.',
      'Heavy smart loads share circuits with refrigerators or microwaves.',
      'Old three-way wiring confuses DIY smart switch installs.',
    ],
    process: [
      'Review devices you plan to use and their wiring requirements.',
      'Upgrade switch boxes, neutrals, or circuits where needed.',
      'Install listed devices—we coordinate with your integrator if you use one.',
      'Test loads so motors and LEDs behave with smart controls.',
    ],
    faqs: [
      {
        question: 'Do you configure the app?',
        answer:
          'We focus on safe power and wiring; app pairing is usually owner or integrator work unless scoped.',
      },
      {
        question: 'Can you install a smart breaker panel?',
        answer:
          'Yes when the product is listed and we have manufacturer guidance for your service size.',
      },
      {
        question: 'Will smart switches work with my LED bulbs?',
        answer:
          'Compatibility varies—we note minimum load requirements and recommend tested pairings.',
      },
      {
        question: 'Do you install whole-home battery backup?',
        answer:
          'Battery and generator interlocks are scoped separately—ask when planning backup power.',
      },
    ],
  },
  'fixture-and-chandelier-installation': {
    metaDescription:
      'Secure mounting and wiring for chandeliers, pendants, and heavy decorative fixtures.',
    example: 'Brace a dining room box for a two-tier chandelier and align switch legs for dimming.',
    warningSigns: [
      'The fixture you bought exceeds the weight rating of the existing box.',
      'High ceilings need scaffolding or long ladders for safe mounting.',
      'Multiple pendants need aligned spacing and one switch group.',
      'Old wiring lacks ground or support for a heavy canopy.',
    ],
    process: [
      'Weigh fixture and confirm box, brace, or hook listing.',
      'Assemble manufacturer parts and plan wire length for canopy cover.',
      'Hang, wire, and balance multi-point fixtures.',
      'Test dimmers and bulb types recommended by the fixture maker.',
    ],
    faqs: [
      {
        question: 'Do you assemble the chandelier?',
        answer:
          'Yes for typical residential fixtures—we follow the maker steps for arms and shades.',
      },
      {
        question: 'Can you move the box location?',
        answer:
          'Relocating requires new cable and often drywall repair—we quote that as a separate task.',
      },
      {
        question: 'Are LED bulbs required?',
        answer:
          'Many fixtures allow LED or incandescent within wattage limits—we note limits on install.',
      },
      {
        question: 'Do you install fans and chandeliers on the same switch?',
        answer:
          'Usually they need separate controls—we wire according to manufacturer and code.',
      },
    ],
  },
  'electrical-troubleshooting': {
    metaDescription:
      'Systematic diagnosis for intermittent power loss, nuisance trips, and mystery voltage drops.',
    example: 'Find a loose neutral causing dimming when the AC compressor starts.',
    warningSigns: [
      'Problems come and go and other contractors guessed without finding root cause.',
      'One appliance causes lights to dip or GFCI devices to trip.',
      'You hear buzzing only under certain loads or times of day.',
      'Non-contact testers show odd results at multiple outlets.',
    ],
    process: [
      'Document symptoms, timing, and recent changes or new equipment.',
      'Measure at panel and affected points—load, neutral, and ground.',
      'Isolate the fault to a device, splice, or cable segment.',
      'Repair and retest under the same conditions that caused the symptom.',
    ],
    faqs: [
      {
        question: 'How is troubleshooting billed?',
        answer:
          'We explain our diagnostic approach and rates before extended testing. Many faults are found within the first visit.',
      },
      {
        question: 'Do you use thermal imaging?',
        answer:
          'Visual and meter testing are standard; thermal tools help on some commercial calls when scoped.',
      },
      {
        question: 'Can troubleshooting find non-electrical issues?',
        answer:
          'Sometimes symptoms come from appliances or utility events—we tell you when the fault is outside our trade.',
      },
      {
        question: 'Will you fix it the same day?',
        answer:
          'When parts are on the truck and access is clear, yes. Otherwise we quote follow-up with what we found.',
      },
    ],
  },
};
