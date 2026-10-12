import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "house-removals",
    slug: "house-removals",
    name: "House Removals",
    title: "House Removals",
    shortDescription:
      "Reliable, affordable removals for houses, flats and apartments, handled with care from collection to delivery.",
    description:
      "Moving home is one of life's most significant milestones, and our dedicated house removals service is engineered to make the entire transition smooth, punctual, and entirely stress-free. Whether you are transitioning between single-bedroom city flats, moving out of a student apartment, or relocating an entire multi-storey family home, our experienced moving teams handle every single possession with the utmost diligence and care. We understand that your furniture, sentimental family heirlooms, fragile glassware, and everyday essentials represent immense personal value. That is why our modern 3.5-tonne Luton box vans arrive fully equipped with heavy-duty quilted transit blankets, commercial-grade ratchet tie-down straps, and specialized furniture dollies to ensure complete stability while traveling along UK motorways and urban routes. From negotiating narrow Victorian stairwells and tight communal hallways to carefully positioning heavy sofas, wardrobes, and kitchen appliances into your designated rooms, our professional two-man and three-man crews manage all demanding physical labour. We work methodically around your official property completion schedule, providing transparent communication throughout transit and ensuring that everything arrives safely at your new destination postcode. With flexible booking windows, transparent fixed-rate quotes, and comprehensive goods in transit protection, you can focus on settling comfortably into your new home while our reliable team takes care of the haulage logistics from doorstep to doorstep.",
    benefits: [
      "Dedicated two-man or three-man professional loading crew",
      "Full 3.5-tonne Luton box vans equipped with hydraulic tail lifts",
      "Quilted transit blankets, webbing straps, and mattress protectors included",
      "Careful room-of-choice placement at your destination property",
      "Flexible completion day scheduling and weekend availability",
      "Transparent quotes with zero hidden mileage or fuel surcharges",
    ],
    features: [
      "Dedicated two-man or three-man professional loading crew",
      "Full 3.5-tonne Luton box vans equipped with hydraulic tail lifts",
      "Quilted transit blankets, webbing straps, and mattress protectors included",
      "Careful room-of-choice placement at your destination property",
      "Flexible completion day scheduling and weekend availability",
      "Transparent quotes with zero hidden mileage or fuel surcharges",
    ],
    faqs: [
      {
        question: "How do you protect my furniture during a house move?",
        answer:
          "All items are wrapped in thick, quilted removal blankets inside the van and secured to internal load rails using heavy-duty ratchet straps to prevent shifting during transit.",
      },
      {
        question:
          "Can you accommodate moves with narrow staircases or no lifts?",
        answer:
          "Yes. Our teams are experienced in negotiating multi-storey walk-ups, narrow communal hallways, and tight staircases. Please let us know the floor levels when booking so we allocate sufficient crew.",
      },
      {
        question:
          "What happens if there is a delay with key collection on completion day?",
        answer:
          "We understand that key handovers can be delayed. We maintain flexible route coordination and wait with your goods safely loaded in the van until access to your new home is granted.",
      },
      {
        question: "Do you supply cardboard moving boxes and packing supplies?",
        answer:
          "We provide advice on packing materials and can supply specialized boxes, bubble wrap, and packing tape upon request ahead of your scheduled move date [TODO: confirm packing materials pricing].",
      },
    ],
    relatedServiceSlugs: [
      "man-and-van",
      "furniture-dismantling-and-assembly",
      "waste-removal-and-property-clearance",
    ],
    seo: {
      title: "House Removals Services | Reliable Home Moves UK | AB Removals",
      description:
        "Professional, affordable house, flat, and apartment removals across the UK. Experienced 2-man crews, Luton vans with tail lifts, and complete transit care.",
    },
  },
  {
    id: "man-and-van",
    slug: "man-and-van",
    name: "Man and Van Services",
    title: "Man and Van Services",
    shortDescription:
      "Flexible local and nationwide moves, furniture transport and small deliveries; driver-only or with experienced helpers.",
    description:
      "Our agile man and van service offers the ideal combination of flexibility, speed, and cost efficiency for relocations and cargo transfers that do not require an oversized removal lorry. Specially suited for studio flat relocations, student room moves, shared house tenancies, or urgent same-day transport across local and nationwide transit routes, our service is tailored exactly to the scope of your requirements. You can choose a driver-only booking if you prefer to manage the loading yourself, or select one or two experienced porters to take care of all heavy lifting, carrying, and secure van packing. Because we operate modern, fuel-efficient Luton and long-wheelbase vans, we can access narrow residential streets, cul-de-sacs, and height-restricted loading bays where large commercial trucks struggle to park legally. We treat every transport run with the same rigorous care as a full-scale domestic removal, utilizing protective blankets, heavy-duty sack barrows, and load-securing straps to keep your possessions immobile throughout motorway transit. Whether you need a short cross-town furniture shuttle or a direct intercity transfer between London, Birmingham, Manchester, Leeds, or Bristol, our man and van service delivers prompt timing, friendly drivers, and straightforward pricing that keeps you in complete control of your moving budget with zero hidden fees.",
    benefits: [
      "Driver-only or assisted one-man / two-man loading configurations",
      "Hourly rate flexibility or transparent fixed-price quotes",
      "Fast response times for same-day and urgent transport requests",
      "Compact vehicle access for narrow urban streets and parking bays",
      "Long-distance nationwide transport between all major UK cities",
      "Heavy items secured with ratchet straps and quilted pads",
    ],
    features: [
      "Driver-only or assisted one-man / two-man loading configurations",
      "Hourly rate flexibility or transparent fixed-price quotes",
      "Fast response times for same-day and urgent transport requests",
      "Compact vehicle access for narrow urban streets and parking bays",
      "Long-distance nationwide transport between all major UK cities",
      "Heavy items secured with ratchet straps and quilted pads",
    ],
    faqs: [
      {
        question: "Can I choose between a driver-only and a multi-man crew?",
        answer:
          "Yes. You can book a working driver who assists with all lifting, a driver-only option for self-loaders, or a full two-man crew for heavier bulky items.",
      },
      {
        question: "Is there a minimum booking duration for man and van jobs?",
        answer:
          "Our standard local booking carries a minimum hire window of [TODO: confirm minimum hours e.g. 2 hours], with transparent pricing charged thereafter in clear increments.",
      },
      {
        question:
          "Can I travel in the passenger seat of the van during transit?",
        answer:
          "Subject to seat availability and driver insurance terms, one passenger may usually travel in the front cab alongside the driver [TODO: confirm passenger travel policy].",
      },
      {
        question: "Do you undertake long-distance nationwide journeys?",
        answer:
          "Yes. We regularly operate direct transit routes connecting major hubs across England, Wales, and Scotland with fixed door-to-door transit quotes.",
      },
    ],
    relatedServiceSlugs: [
      "house-removals",
      "furniture-collection-and-delivery",
      "single-item-transport",
    ],
    seo: {
      title: "Man and Van Services UK | Reliable Local & Nationwide Moves",
      description:
        "Fast, flexible man and van hire across the UK. Driver-assisted or full loading crew options, clear hourly rates, and secure Luton van transport.",
    },
  },
  {
    id: "furniture-collection-and-delivery",
    slug: "furniture-collection-and-delivery",
    name: "Furniture Collection and Delivery",
    title: "Furniture Collection and Delivery",
    shortDescription:
      "Sofas, beds, wardrobes, tables, mattresses and bulky items from homes, furniture shops, storage units and online marketplaces.",
    description:
      "Purchasing bulky or fragile furniture from high-street stores, independent retailers, self-storage facilities, or private online sellers should never be a stressful logistical challenge. Our dedicated furniture collection and delivery service bridges the gap, providing swift, professional transport for large pieces including modular corner sofas, solid oak dining tables, double and king-size mattresses, multi-door wardrobes, and chest of drawers. If you have bought an item on eBay, Facebook Marketplace, or Gumtree, coordinating collection can be difficult; we liaise directly on collection timings, inspect the goods upon collection for exterior transit safety, and load them securely using protective padded wraps and tie-downs. Similarly, if you are collecting flat-pack goods from retail warehouses such as IKEA or retrieving surplus items from a self-storage locker, our team takes the strenuous physical work out of the equation. We do not just leave heavy parcels kerbside; our porters carry your items directly into your ground-floor hallway or upper-floor room of choice, ensuring your walls, banisters, and flooring are completely protected. With flexible weekend and evening collection slots, you never have to rent a van or risk damaging your private vehicle boot again. We offer transparent tracking updates throughout transit, and our courteous drivers will contact you thirty minutes prior to arrival so you never have to wait around wondering when your delivery will arrive.",
    benefits: [
      "Door-to-door collection from retail outlets, storage units, and private sellers",
      "Direct coordination with online marketplace sellers (eBay, Marketplace)",
      "Protective padded wrapping and strap immobilization during transit",
      "Safe room-of-choice placement rather than kerbside drop-offs",
      "Evening and weekend collection slots to suit seller availability",
      "Multi-item consolidated runs available for multiple collection stops",
    ],
    features: [
      "Door-to-door collection from retail outlets, storage units, and private sellers",
      "Direct coordination with online marketplace sellers (eBay, Marketplace)",
      "Protective padded wrapping and strap immobilization during transit",
      "Safe room-of-choice placement rather than kerbside drop-offs",
      "Evening and weekend collection slots to suit seller availability",
      "Multi-item consolidated runs available for multiple collection stops",
    ],
    faqs: [
      {
        question:
          "Can you collect items from IKEA, DFS, or other furniture retailers?",
        answer:
          "Yes. We collect customer orders from major retail distribution centers, warehouses, and independent showrooms, bringing them straight to your home.",
      },
      {
        question:
          "How do you handle collections bought via Facebook Marketplace or eBay?",
        answer:
          "Provide us with the seller's contact details and address; we will coordinate convenient collection times, inspect items on collection, and deliver directly to your door.",
      },
      {
        question:
          "Will you bring the furniture upstairs into my specific room?",
        answer:
          "Yes. Our crew will carry your furniture into your chosen room, provided stairways and hallways offer adequate clearance for the dimensions of the item.",
      },
      {
        question:
          "Can you pick up items from multiple collection addresses on one trip?",
        answer:
          "Yes. We can plan multi-drop routes to collect items from different sellers or stores before completing the final delivery run.",
      },
    ],
    relatedServiceSlugs: [
      "furniture-dismantling-and-assembly",
      "man-and-van",
      "house-removals",
    ],
    seo: {
      title: "Furniture Collection & Delivery UK | Sofas, Beds & Bulky Items",
      description:
        "Fast furniture collection and doorstep delivery across the UK. Stores, Marketplace, eBay, and storage units handled with protective van transport.",
    },
  },
  {
    id: "office-and-commercial-removals",
    slug: "office-and-commercial-removals",
    name: "Office and Commercial Removals",
    title: "Office and Commercial Removals",
    shortDescription:
      "Efficient office relocations and commercial transport for businesses of all sizes, including furniture, equipment and desks.",
    description:
      "Relocating an office or commercial workspace requires meticulous planning, absolute punctuality, and dependable execution to keep business disruption and team downtime to an absolute minimum. Our commercial removals service is engineered specifically for companies of all sizes, from boutique creative agencies and independent retailers to expanding corporate branch offices. We handle the organized removal, safe transportation, and accurate placement of workstations, executive desks, ergonomic chairs, conference suites, filing cabinets, archive cartons, and sensitive IT equipment including desktop monitors, servers, and network printers. Our movers follow strict labeling and manifest procedures to ensure that department assets remain grouped together logically, allowing your IT and operations teams to set up workstations rapidly at the new commercial premises. To ensure your regular trading hours are completely unaffected, we offer out-of-hours scheduling, including evening, overnight, and weekend relocations. Every phase of the transit is handled by trained commercial movers using specialist heavy-duty skateboards, pump trucks, and tail-lift Luton vans, with goods secured according to commercial transit safety standards. We provide comprehensive risk assessments and method statements where required by commercial landlords, and supply heavy-duty commercial lidded crates to keep confidential documents completely secure during transit. Trust our professional logistics team to transfer your operational base securely, punctually, and with total business continuity in mind.",
    benefits: [
      "Out-of-hours and weekend scheduling to ensure zero operational downtime",
      "Careful handling of sensitive IT hardware, monitors, and servers",
      "Systematic color-coded labeling and department manifest tracking",
      "Specialist crate transport, desk dismantling, and boardroom relocations",
      "Full compliance with commercial building access and loading bay rules",
      "Dedicated account coordination with transparent fixed commercial quotes",
    ],
    features: [
      "Out-of-hours and weekend scheduling to ensure zero operational downtime",
      "Careful handling of sensitive IT hardware, monitors, and servers",
      "Systematic color-coded labeling and department manifest tracking",
      "Specialist crate transport, desk dismantling, and boardroom relocations",
      "Full compliance with commercial building access and loading bay rules",
      "Dedicated account coordination with transparent fixed commercial quotes",
    ],
    faqs: [
      {
        question: "Can commercial removals take place over the weekend?",
        answer:
          "Yes. We routinely execute office relocations on Friday evenings, Saturdays, and Sundays so your staff can resume regular operations first thing on Monday morning.",
      },
      {
        question: "How do you protect office computer equipment and monitors?",
        answer:
          "IT hardware is individually wrapped with protective cushioning, packed into reinforced crates, and secured in the van with anti-static and shock-absorbing blankets.",
      },
      {
        question:
          "Can you provide commercial invoices and VAT receipts for company accounting?",
        answer:
          "Yes. We provide clear, itemized business invoices suitable for commercial accounts and corporate expense tracking [TODO: confirm business VAT registration status].",
      },
      {
        question: "Can you dismantle and rebuild multiple office desk pods?",
        answer:
          "Yes. Our team can disassemble bench desking, meeting tables, and partition screens, reassembling them according to your new floor plan.",
      },
    ],
    relatedServiceSlugs: [
      "furniture-dismantling-and-assembly",
      "waste-removal-and-property-clearance",
      "man-and-van",
    ],
    seo: {
      title: "Office & Commercial Removals UK | Business Relocation Logistics",
      description:
        "Reliable office removals and business moves across the UK. Weekend and out-of-hours options, IT equipment handling, and zero operational downtime.",
    },
  },
  {
    id: "furniture-dismantling-and-assembly",
    slug: "furniture-dismantling-and-assembly",
    name: "Furniture Dismantling and Assembly",
    title: "Furniture Dismantling and Assembly",
    shortDescription:
      "Dismantling and reassembly of beds, wardrobes, desks and tables to ensure safe transit and hassle-free move days.",
    description:
      "Large, cumbersome furniture items often present the greatest hurdle on moving day. Multi-door wardrobes, ottoman storage beds, bunk bed frames, extending dining tables, and modular corner desks simply cannot pass through standard UK residential doorways, narrow Victorian stairs, or compact passenger lifts in one piece. Forcing assembled furniture through tight spaces risks catastrophic damage to structural timber joints, doorframes, and freshly painted walls. Our skilled dismantling and assembly service eliminates this challenge completely. Equipped with professional battery-powered tools, hex keys, screwdrivers, and torque wrenches, our technicians carefully take down complex flat-pack and custom furniture pieces before loading. We meticulously label panels, secure all bolts, cam-locks, dowels, and shelf pins in dedicated organizer pouches, and tape related components securely together for transit. At your destination address, we reconstruct each piece precisely in your designated room, ensuring stability, plumb alignment, and solid re-tightening. We also inspect all mechanical runners, drawer alignments, and hinges upon rebuild, ensuring every piece operates smoothly and sits level on your new flooring without wobble or surface strain. Whether you are dealing with challenging IKEA PAX wardrobe configurations, heavy wooden bunk beds, or executive boardroom desks, our experienced assembly service saves you hours of exhausting frustration and guarantees that your essential bedroom and living furniture is fully usable on your very first night in your new home.",
    benefits: [
      "Expert disassembly of flat-pack wardrobes, ottoman beds, and tables",
      "Full reassembly and structural realignment at your destination address",
      "Preservation and bagging of all fixings, bolts, brackets, and dowels",
      "Prevents costly transit and doorway damage to both furniture and walls",
      "Equipped with comprehensive commercial cordless tool kits",
      "Available alongside any domestic removal or furniture delivery service",
    ],
    features: [
      "Expert disassembly of flat-pack wardrobes, ottoman beds, and tables",
      "Full reassembly and structural realignment at your destination address",
      "Preservation and bagging of all fixings, bolts, brackets, and dowels",
      "Prevents costly transit and doorway damage to both furniture and walls",
      "Equipped with comprehensive commercial cordless tool kits",
      "Available alongside any domestic removal or furniture delivery service",
    ],
    faqs: [
      {
        question:
          "Can you reassemble IKEA flat-pack furniture like PAX wardrobes?",
        answer:
          "Yes. Our crew has extensive practical experience assembling and dismantling IKEA flat-pack furniture, including multi-door PAX wardrobes and MALM bed frames.",
      },
      {
        question: "Do I need to supply tools or hardware fixings?",
        answer:
          "No. Our team brings comprehensive tool kits including cordless screwdrivers, hex drivers, levels, and rubber mallets. We organize and preserve your existing screws and bolts.",
      },
      {
        question:
          "What happens if a piece of furniture cannot fit through the door?",
        answer:
          "If a bulky item cannot fit safely through a doorway or stairwell, our team will evaluate and dismantle key components on-site with your approval before carrying it through.",
      },
      {
        question: "Can this service be added on the day of the move?",
        answer:
          "We recommend requesting dismantling when booking to ensure adequate time is scheduled, but our crew will always accommodate on-the-day requests whenever schedule allows.",
      },
    ],
    relatedServiceSlugs: [
      "house-removals",
      "furniture-collection-and-delivery",
      "man-and-van",
    ],
    seo: {
      title: "Furniture Dismantling & Assembly UK | Wardrobes, Beds & Desks",
      description:
        "Professional flat-pack dismantling and furniture reassembly service across the UK. Safe bed, wardrobe, and desk take-down for stress-free move days.",
    },
  },
  {
    id: "waste-removal-and-property-clearance",
    slug: "waste-removal-and-property-clearance",
    name: "Waste Removal and Property Clearance",
    title: "Waste Removal and Property Clearance",
    shortDescription:
      "Removal of unwanted furniture, bulky items and general waste from homes, flats, garages and offices, with responsible disposal through appropriate waste facilities.",
    description:
      "Clearing out unwanted clutter, broken household appliances, old mattresses, worn sofas, or accumulated garage junk can quickly become exhausting and overwhelming. Our ethical waste removal and property clearance service provides an efficient, heavy-lifting alternative to hiring an expensive roadside skip that requires council permits, street bay suspensions, and manual loading. We serve homeowners preparing a property for sale, landlords clearing rentals between tenancies, bereaved families requiring compassionate probate clearances, and businesses clearing office storage rooms. Our clearance teams arrive on-site, carry all designated items directly from your loft, basement, garage, garden shed, or upper-floor flat, and load them into our spacious clearance vehicles with zero physical exertion required on your part. We are deeply committed to environmental responsibility: unwanted items are systematically sorted, and reusable furniture or appliances are diverted toward local charity reuse schemes where feasible. All non-salvageable waste is transported exclusively to licensed commercial waste transfer stations and authorized recycling facilities, strictly complying with UK waste duty-of-care legislation. Our clearance crew provides official electronic waste transfer notes upon request, confirming the legal chain of custody and giving you total legal documentation that your rubbish was processed through authorized facilities. You never have to worry about rogue fly-tipping; we provide a tidy, thorough, and responsible clearance service that leaves your property clear, swept clean, and ready for its next chapter.",
    benefits: [
      "Full heavy lifting and clearing from lofts, basements, and upper flats",
      "Skip hire alternative with no council highway permits or skip permits required",
      "Environmentally responsible sorting, recycling, and charity diversion",
      "Disposal exclusively at licensed commercial waste transfer stations",
      "Domestic, garage, shed, garden, and commercial office clearances",
      "Premises swept clean and left tidy following clearance completion",
    ],
    features: [
      "Full heavy lifting and clearing from lofts, basements, and upper flats",
      "Skip hire alternative with no council highway permits or skip permits required",
      "Environmentally responsible sorting, recycling, and charity diversion",
      "Disposal exclusively at licensed commercial waste transfer stations",
      "Domestic, garage, shed, garden, and commercial office clearances",
      "Premises swept clean and left tidy following clearance completion",
    ],
    faqs: [
      {
        question: "Do you have a registered Waste Carrier Licence?",
        answer:
          "We operate in strict adherence with Environment Agency waste carrier regulations and dispose of goods only at authorized commercial transfer stations [TODO: confirm Environment Agency registration number].",
      },
      {
        question: "Why choose your clearance service instead of hiring a skip?",
        answer:
          "Unlike skip hire, our service includes all manual lifting, avoids skip council permit fees on public roads, and takes up zero permanent driveway space.",
      },
      {
        question: "What types of items can you not collect or dispose of?",
        answer:
          "We cannot collect hazardous materials such as asbestos, raw chemicals, automotive oils, paint cans, or medical waste [TODO: confirm full restricted items list].",
      },
      {
        question: "Do you sweep and tidy up after clearing the property?",
        answer:
          "Yes. Once loading is complete, our crew carries out a broom sweep of the cleared room, garage, or driveway to leave the area tidy and respectable.",
      },
    ],
    relatedServiceSlugs: [
      "house-removals",
      "office-and-commercial-removals",
      "man-and-van",
    ],
    seo: {
      title:
        "Waste Removal & Property Clearance UK | Licensed Rubbish Clearance",
      description:
        "Responsible house, flat, and garage clearance across the UK. Ethical disposal of bulky furniture and waste through licensed recycling facilities.",
    },
  },
];
