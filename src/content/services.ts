import type { Service } from "@/types";

export const services: Service[] = [
  // 1. House Removals/Flat Removals
  {
    id: "house-removals",
    slug: "house-removals",
    name: "House Removals/Flat Removals",
    title: "House Removals/Flat Removals",
    shortDescription:
      "Reliable, affordable removals for houses, flats and apartments, handled with care from collection to delivery across the UK.",
    description:
      "Moving home is one of life's most significant milestones. Our dedicated house and flat removals service is engineered to make the entire transition smooth, punctual, and stress-free. Whether moving between single-bedroom city flats, multi-storey maisonettes, or detached family homes, our experienced moving teams handle every possession with maximum diligence. We operate clean Luton box vans equipped with hydraulic tail lifts, transit blankets, load-securing straps, and furniture dollies to ensure complete cargo stability during motorway and urban transit. From navigating narrow stairwells to placing furniture directly into your chosen rooms, our professional crews handle all demanding heavy lifting with transparent pricing and full goods in transit protection.",
    benefits: [
      "Dedicated two-man or three-man professional loading crew",
      "Full Luton box vans equipped with hydraulic tail lifts",
      "Quilted transit blankets, webbing straps, and mattress protectors included",
      "Careful room-of-choice placement at your destination property",
      "Flexible completion day scheduling and weekend availability",
      "Transparent fixed-rate quotes with zero hidden mileage fees",
    ],
    features: [
      "Dedicated two-man or three-man professional loading crew",
      "Full Luton box vans equipped with hydraulic tail lifts",
      "Quilted transit blankets, webbing straps, and mattress protectors included",
      "Careful room-of-choice placement at your destination property",
      "Flexible completion day scheduling and weekend availability",
      "Transparent fixed-rate quotes with zero hidden mileage fees",
    ],
    faqs: [
      {
        question:
          "How do you protect my furniture during a house or flat move?",
        answer:
          "All items are wrapped in thick, quilted removal blankets inside the van and secured to internal load rails using heavy-duty ratchet straps to prevent shifting during transit.",
      },
      {
        question:
          "Can you accommodate moves with narrow staircases or no lift access?",
        answer:
          "Yes. Our teams are experienced in negotiating multi-storey walk-ups, narrow communal hallways, and tight staircases. Let us know the floor levels when booking so we allocate the appropriate crew.",
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
          "We provide advice on packing materials and supply specialized double-walled boxes, heavy bubble wrap, and packing tape upon request ahead of your scheduled move date.",
      },
    ],
    relatedServiceSlugs: [
      "man-and-van",
      "furniture-assembly-and-dismantling",
      "packing-and-moving-assistance",
    ],
    seo: {
      title:
        "House & Flat Removals UK | Reliable Domestic Moving | AB Removals",
      description:
        "Professional, affordable house, flat, and apartment removals across the UK. Experienced 2-man and 3-man crews, Luton vans with tail lifts, and full transit care.",
    },
  },

  // 2. Office and Commercial Removals
  {
    id: "office-and-commercial-removals",
    slug: "office-and-commercial-removals",
    name: "Office and Commercial Removals",
    title: "Office and Commercial Removals",
    shortDescription:
      "Efficient office relocations and commercial transport for businesses, including desks, IT equipment, archive crates and workspace furniture.",
    description:
      "Relocating an office or commercial workspace requires meticulous planning, absolute punctuality, and dependable execution to keep business downtime to a minimum. Our commercial removals service is tailored for companies of all sizes, from creative studios and retail units to corporate offices. We handle the organized removal, safe transport, and accurate placement of workstations, executive desks, conference suites, filing cabinets, and sensitive IT equipment including desktop monitors and network printers. We offer out-of-hours, evening, and weekend relocations so your business operations remain uninterrupted.",
    benefits: [
      "Out-of-hours and weekend scheduling to ensure zero operational downtime",
      "Careful handling of sensitive IT hardware, monitors, and servers",
      "Systematic department labeling and office manifest tracking",
      "Commercial crate transport and desk dismantling/reassembly",
      "Full compliance with building access and loading bay rules",
      "Transparent itemized invoicing for company accounting",
    ],
    features: [
      "Out-of-hours and weekend scheduling to ensure zero operational downtime",
      "Careful handling of sensitive IT hardware, monitors, and servers",
      "Systematic department labeling and office manifest tracking",
      "Commercial crate transport and desk dismantling/reassembly",
      "Full compliance with building access and loading bay rules",
      "Transparent itemized invoicing for company accounting",
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
          "Yes. We provide clear, itemized business invoices suitable for commercial accounting and corporate expense tracking with complete company registration details.",
      },
      {
        question: "Can you dismantle and rebuild multiple office desk pods?",
        answer:
          "Yes. Our team can disassemble bench desking, meeting tables, and partition screens, reassembling them according to your new floor plan.",
      },
    ],
    relatedServiceSlugs: [
      "furniture-assembly-and-dismantling",
      "waste-removal-and-disposal",
      "heavy-and-bulky-item-transportation",
    ],
    seo: {
      title: "Office & Commercial Removals UK | Business Relocation Logistics",
      description:
        "Reliable office removals and business moves across the UK. Weekend and out-of-hours options, IT equipment handling, and zero operational downtime.",
    },
  },

  // 3. Furniture Removals and Delivery
  {
    id: "furniture-removals-and-delivery",
    slug: "furniture-removals-and-delivery",
    name: "Furniture Removals and Delivery",
    title: "Furniture Removals and Delivery",
    shortDescription:
      "Safe collection and delivery for sofas, beds, wardrobes, dining sets and bulky furniture from homes, stores, and online marketplaces.",
    description:
      "Purchasing or moving bulky furniture should never be a logistical headache. Our dedicated furniture removals and delivery service provides swift, professional transport for large pieces including modular corner sofas, solid wood dining tables, mattresses, multi-door wardrobes, and chests of drawers. Whether collecting items purchased on eBay or Facebook Marketplace, picking up flat-pack goods from retail warehouses, or retrieving furniture from self-storage, our porters carry your items directly into your room of choice with total care.",
    benefits: [
      "Door-to-door collection from retail outlets, storage units, and private sellers",
      "Direct coordination with online marketplace sellers (eBay, Gumtree, Marketplace)",
      "Protective padded wrapping and strap immobilization during transit",
      "Safe room-of-choice placement rather than kerbside drop-offs",
      "Evening and weekend collection slots to suit seller availability",
      "Multi-stop consolidated runs available for multiple collection points",
    ],
    features: [
      "Door-to-door collection from retail outlets, storage units, and private sellers",
      "Direct coordination with online marketplace sellers (eBay, Gumtree, Marketplace)",
      "Protective padded wrapping and strap immobilization during transit",
      "Safe room-of-choice placement rather than kerbside drop-offs",
      "Evening and weekend collection slots to suit seller availability",
      "Multi-stop consolidated runs available for multiple collection points",
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
      "furniture-assembly-and-dismantling",
      "store-collections-and-deliveries",
      "heavy-and-bulky-item-transportation",
    ],
    seo: {
      title: "Furniture Removals & Delivery UK | Sofas, Beds & Bulky Items",
      description:
        "Fast furniture removals and doorstep delivery across the UK. Stores, Marketplace, eBay, and storage units handled with protective van transport.",
    },
  },

  // 4. Man and Van Services
  {
    id: "man-and-van",
    slug: "man-and-van",
    name: "Man and Van Services",
    title: "Man and Van Services",
    shortDescription:
      "Flexible local and nationwide moves, furniture transport and small deliveries; driver-assisted or full loading crews.",
    description:
      "Our agile man and van service offers the ideal combination of flexibility, speed, and cost efficiency for relocations and cargo transfers. Perfect for studio flat relocations, room moves, shared tenancies, or urgent same-day transport across local and nationwide routes. You can choose a driver-assisted booking or a dedicated two-man crew to manage all heavy lifting. Operating modern Luton and high-roof vans, we easily access narrow residential streets and restricted parking areas where large commercial lorries cannot.",
    benefits: [
      "Driver-assisted or full two-person / three-person loading options",
      "Hourly rate flexibility or transparent fixed-price quotes",
      "Fast response times for same-day and urgent transport requests",
      "Compact vehicle access for narrow urban streets and parking bays",
      "Long-distance nationwide transport between all major UK cities",
      "Heavy items secured with ratchet straps and quilted pads",
    ],
    features: [
      "Driver-assisted or full two-person / three-person loading options",
      "Hourly rate flexibility or transparent fixed-price quotes",
      "Fast response times for same-day and urgent transport requests",
      "Compact vehicle access for narrow urban streets and parking bays",
      "Long-distance nationwide transport between all major UK cities",
      "Heavy items secured with ratchet straps and quilted pads",
    ],
    faqs: [
      {
        question:
          "What is the difference between driver-assisted and a two-man crew?",
        answer:
          "Driver assistance includes the driver actively helping you carry and load items. A two-man crew provides two movers who handle all the physical lifting together.",
      },
      {
        question: "Is there a minimum booking duration for man and van jobs?",
        answer:
          "Our standard local booking carries a minimum hire window of 2 hours, with transparent pricing charged thereafter in clear increments.",
      },
      {
        question:
          "Can I travel in the front passenger seat of the van during transit?",
        answer:
          "Subject to cab seat availability, one passenger may travel in the front cab alongside the driver at no extra charge.",
      },
      {
        question: "Do you undertake long-distance nationwide journeys?",
        answer:
          "Yes. We regularly operate direct transit routes connecting major hubs across England, Wales, and Scotland with fixed door-to-door transit quotes.",
      },
    ],
    relatedServiceSlugs: [
      "house-removals",
      "student-and-small-moves",
      "nationwide-and-long-distance-removals",
    ],
    seo: {
      title: "Man and Van Services UK | Reliable Local & Nationwide Moves",
      description:
        "Fast, flexible man and van hire across the UK. Driver assistance or full loading crew options, clear rates, and secure Luton van transport.",
    },
  },

  // 5. Furniture Assembly and Dismantling
  {
    id: "furniture-assembly-and-dismantling",
    slug: "furniture-assembly-and-dismantling",
    name: "Furniture Assembly and Dismantling",
    title: "Furniture Assembly and Dismantling",
    shortDescription:
      "Expert dismantling and rebuild of wardrobes, beds, tables and desks for safe transit through doors and stairwells.",
    description:
      "Large furniture items often present the greatest obstacle on move day. Multi-door wardrobes, ottoman storage beds, bunk beds, and extending dining tables frequently cannot pass through doorways or stairwells in one piece. Our skilled dismantling and assembly service eliminates this challenge. Equipped with comprehensive toolkits, our movers carefully take down complex flat-pack and custom furniture, label all fixings in organizer pouches, and reconstruct each piece precisely in your new home.",
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
          "No. Our team brings comprehensive tool kits including cordless screwdrivers, hex drivers, levels, and rubber mallets. We organize and preserve your existing fixings.",
      },
      {
        question:
          "What happens if a piece of furniture cannot fit through the door?",
        answer:
          "If a bulky item cannot fit safely through a doorway, our team will evaluate and dismantle key components on-site with your approval before carrying it through.",
      },
      {
        question: "Can this service be added on the day of the move?",
        answer:
          "We recommend requesting dismantling when booking to ensure adequate time is scheduled, but our crew will always accommodate on-the-day requests whenever schedule allows.",
      },
    ],
    relatedServiceSlugs: [
      "house-removals",
      "furniture-removals-and-delivery",
      "office-and-commercial-removals",
    ],
    seo: {
      title: "Furniture Assembly & Dismantling UK | Flat-Pack Specialists",
      description:
        "Professional flat-pack dismantling and furniture reassembly service across the UK. Safe bed, wardrobe, and desk take-down for stress-free move days.",
    },
  },

  // 6. Student and Small Moves
  {
    id: "student-and-small-moves",
    slug: "student-and-small-moves",
    name: "Student and Small Moves",
    title: "Student and Small Moves",
    shortDescription:
      "Cost-effective moves for university students, flatshares, studio apartments and small room relocations across the UK.",
    description:
      "Starting university, switching term halls, moving into private student lets, or relocating a single room should be affordable and straightforward. Our student and small moves service provides budget-conscious rates designed specifically for lighter loads, suitcases, study desks, storage trunks, and personal belongings. We offer door-to-door transport between home and university campuses nationwide, with driver assistance to help make move days easy.",
    benefits: [
      "Affordable rates tailored for student budgets and room relocations",
      "Direct campus-to-home and inter-university nationwide transfers",
      "Assistance with carrying boxes, trunks, and study desks",
      "Flexible scheduling around university term dates and tenancy turnovers",
      "Option for joint moves with friends or flatmates to split costs",
      "Fast booking with transparent fixed rates and zero hidden charges",
    ],
    features: [
      "Affordable rates tailored for student budgets and room relocations",
      "Direct campus-to-home and inter-university nationwide transfers",
      "Assistance with carrying boxes, trunks, and study desks",
      "Flexible scheduling around university term dates and tenancy turnovers",
      "Option for joint moves with friends or flatmates to split costs",
      "Fast booking with transparent fixed rates and zero hidden charges",
    ],
    faqs: [
      {
        question: "Can two students share a van to split the cost?",
        answer:
          "Yes. If you and a friend are moving between the same areas or campuses, you can book a single van together and share the transport cost.",
      },
      {
        question: "Do you move belongings into university halls of residence?",
        answer:
          "Yes. We deliver directly to campus accommodation loading bays and assist you in carrying your belongings up to your room.",
      },
      {
        question: "Can you transport items to and from student storage units?",
        answer:
          "Yes. We routinely collect from and deliver to student storage facilities during summer breaks and gap terms.",
      },
      {
        question: "How much luggage can fit in the van for a student move?",
        answer:
          "Even our standard van easily accommodates 20–30 boxes, suitcases, computer monitors, bicycles, and small bedroom furniture.",
      },
    ],
    relatedServiceSlugs: [
      "man-and-van",
      "storage-transportation",
      "nationwide-and-long-distance-removals",
    ],
    seo: {
      title:
        "Student & Small Moves UK | University Relocations & Room Transfers",
      description:
        "Affordable student moves and small apartment relocations across the UK. Campus-to-campus and term-time luggage transport with driver assistance.",
    },
  },

  // 7. Store Collections and Deliveries
  {
    id: "store-collections-and-deliveries",
    slug: "store-collections-and-deliveries",
    name: "Store Collections and Deliveries",
    title: "Store Collections and Deliveries",
    shortDescription:
      "Same-day and scheduled collection from major retail stores, trade counters, warehouses and hardware centers straight to your door.",
    description:
      "Avoid expensive multi-week retail delivery waits and fragile courier mishandling. Our store collections and deliveries service picks up your purchased goods directly from major retailers such as IKEA, B&Q, Wickes, DFS, Costco, and trade warehouses. Whether you bought timber, appliances, home decor, or building materials, our drivers collect your order at the customer collection bay, strap it securely, and deliver directly to your residential or commercial address.",
    benefits: [
      "Fast same-day or next-day collection from retail distribution bays",
      "Direct pickup from IKEA, B&Q, DFS, Wickes, Currys, and trade centers",
      "Carry-in service directly into your home or commercial premises",
      "Heavy-duty Luton vans with tail lifts for heavy and palletized goods",
      "Assistance with inspecting goods at point of collection",
      "Clear upfront pricing with no courier parcel size restrictions",
    ],
    features: [
      "Fast same-day or next-day collection from retail distribution bays",
      "Direct pickup from IKEA, B&Q, DFS, Wickes, Currys, and trade centers",
      "Carry-in service directly into your home or commercial premises",
      "Heavy-duty Luton vans with tail lifts for heavy and palletized goods",
      "Assistance with inspecting goods at point of collection",
      "Clear upfront pricing with no courier parcel size restrictions",
    ],
    faqs: [
      {
        question:
          "What information do I need to provide for a store collection?",
        answer:
          "Provide the store location, your collection reference or order number, and your delivery address. We will coordinate collection at the retailer's trade counter.",
      },
      {
        question:
          "Can you collect heavy building supplies from hardware stores?",
        answer:
          "Yes. We can collect timber, plasterboard, tiles, tools, and kitchen units from B&Q, Wickes, and trade merchants.",
      },
      {
        question: "Will the driver bring the store goods inside my home?",
        answer:
          "Yes. Unlike standard freight couriers who drop kerbside, our crew will carry your purchases inside your property.",
      },
      {
        question: "Can you collect from multiple shops in one booking?",
        answer:
          "Yes. We can plan a multi-stop itinerary to collect goods from multiple stores before delivering everything to your door.",
      },
    ],
    relatedServiceSlugs: [
      "furniture-removals-and-delivery",
      "appliance-removals",
      "heavy-and-bulky-item-transportation",
    ],
    seo: {
      title: "Store Collections & Deliveries UK | IKEA, B&Q & Retail Pickups",
      description:
        "Fast store collection and home delivery service across the UK. Same-day pickups from IKEA, B&Q, DFS, and warehouses delivered into your home.",
    },
  },

  // 8. Appliance Removals
  {
    id: "appliance-removals",
    slug: "appliance-removals",
    name: "Appliance Removals",
    title: "Appliance Removals",
    shortDescription:
      "Safe, upright transportation for washing machines, American fridge-freezers, ovens, dishwashers and commercial kitchen units.",
    description:
      "Transporting major domestic and commercial appliances requires specialist equipment, careful upright handling, and experienced movers. Tipping refrigeration units or mishandling washing machine drums during transit can result in costly internal damage. Our appliance removals service utilizes hydraulic tail-lift Luton vans, heavy-duty appliance sack barrows, and thick protective padded covers. We transport your white goods upright, strapped securely, and place them carefully into your designated kitchen or utility space.",
    benefits: [
      "Upright transit for fridge-freezers to protect compressor mechanisms",
      "Hydraulic tail lift vans for smooth loading of 100kg+ appliances",
      "Heavy-duty stair-climbing barrows and padded transit blankets",
      "Disconnection and transit preparation guidance for washing machines",
      "Safe room-of-choice positioning in kitchens and utility areas",
      "Full transit insurance coverage for high-value appliances",
    ],
    features: [
      "Upright transit for fridge-freezers to protect compressor mechanisms",
      "Hydraulic tail lift vans for smooth loading of 100kg+ appliances",
      "Heavy-duty stair-climbing barrows and padded transit blankets",
      "Disconnection and transit preparation guidance for washing machines",
      "Safe room-of-choice positioning in kitchens and utility areas",
      "Full transit insurance coverage for high-value appliances",
    ],
    faqs: [
      {
        question: "Do fridge-freezers need to be defrosted before moving?",
        answer:
          "Yes. We recommend defrosting and emptying your fridge-freezer at least 24 hours prior to transit to prevent water leaks and interior damage.",
      },
      {
        question: "Can you move heavy American-style double fridge-freezers?",
        answer:
          "Yes. Our crew is experienced in transporting large American-style refrigerators using tail lifts and padded transit jackets.",
      },
      {
        question: "Do you disconnect and reconnect plumbed washing machines?",
        answer:
          "We can disconnect standard screw-on water inlet hoses. Reconnection to existing plumbing can be carried out where standard fittings are accessible.",
      },
      {
        question: "Can you remove old broken appliances for disposal?",
        answer:
          "Yes. As a licensed waste carrier, we can safely collect and transport old appliances to authorized WEEE recycling facilities.",
      },
    ],
    relatedServiceSlugs: [
      "furniture-removals-and-delivery",
      "heavy-and-bulky-item-transportation",
      "waste-removal-and-disposal",
    ],
    seo: {
      title: "Appliance Removals UK | Washing Machines, Fridges & Cookers",
      description:
        "Professional appliance removals across the UK. Safe upright transport for American fridges, washing machines, and cookers using tail-lift vans.",
    },
  },

  // 9. Packing and Moving Assistance
  {
    id: "packing-and-moving-assistance",
    slug: "packing-and-moving-assistance",
    name: "Packing and Moving Assistance",
    title: "Packing and Moving Assistance",
    shortDescription:
      "Full or partial packing support, double-walled boxes, bubble wrap and experienced porters to prepare your home for moving day.",
    description:
      "Packing up an entire house or apartment is often the most time-consuming aspect of any move. Our packing and moving assistance service takes the strain off your shoulders. Our trained team carefully wraps delicate glassware, china, artwork, and electronics using double-walled corrugated cartons, acid-free tissue paper, and heavy-duty bubble wrap. We systematically label every box by room and contents, streamlining unpacking at your new property.",
    benefits: [
      "Full house packing service or fragile-only kitchen/glassware packing",
      "Commercial-grade double-walled removal boxes and packing tape",
      "Clear room-by-room box labeling and inventory tracking",
      "Specialist wardrobe cartons for hanging clothes without creasing",
      "Bubble wrapping of artwork, mirrors, TVs, and fragile ornaments",
      "Saves you dozens of hours of stressful preparation before move day",
    ],
    features: [
      "Full house packing service or fragile-only kitchen/glassware packing",
      "Commercial-grade double-walled removal boxes and packing tape",
      "Clear room-by-room box labeling and inventory tracking",
      "Specialist wardrobe cartons for hanging clothes without creasing",
      "Bubble wrapping of artwork, mirrors, TVs, and fragile ornaments",
      "Saves you dozens of hours of stressful preparation before move day",
    ],
    faqs: [
      {
        question: "Can I book packing assistance the day before my move?",
        answer:
          "Yes. We typically schedule full home packing for the day immediately before your move date to ensure everything is boxed and ready for loading.",
      },
      {
        question: "Do you provide all packing materials and boxes?",
        answer:
          "Yes. When you book packing assistance, we provide all double-walled cartons, bubble wrap, packing paper, and tape required.",
      },
      {
        question: "How do you protect fragile glassware and china?",
        answer:
          "Every item of glassware and china is individually wrapped in clean packing paper and cushioned with bubble wrap inside reinforced double-walled boxes.",
      },
      {
        question: "Do you unpack items at the destination address?",
        answer:
          "Yes. We can assist with unpacking fragile boxes onto flat surfaces at your new home upon request.",
      },
    ],
    relatedServiceSlugs: [
      "house-removals",
      "furniture-assembly-and-dismantling",
      "storage-transportation",
    ],
    seo: {
      title: "Packing & Moving Assistance UK | Professional Removals Packing",
      description:
        "Full and fragile packing services across the UK. Quality double-walled boxes, bubble wrap, and experienced packing teams for stress-free moves.",
    },
  },

  // 10. Storage Transportation
  {
    id: "storage-transportation",
    slug: "storage-transportation",
    name: "Storage Transportation",
    title: "Storage Transportation",
    shortDescription:
      "Seamless door-to-unit transport for self-storage facilities, container yards and commercial archive repositories across the UK.",
    description:
      "Whether you are between house contracts, decluttering before renovation, or storing seasonal business inventory, our storage transportation service bridges your home and storage facility. We collect your furniture and boxes, transport them safely, and pack them neatly into your storage unit (such as Big Yellow, Safestore, Lok'nStore, or local storage yards) maximizing every cubic meter of your rental unit so you do not overpay for excess space.",
    benefits: [
      "Collection and delivery to all major UK self-storage providers",
      "Expert storage unit stacking to maximize paid cubic volume",
      "Protective dust sheets, mattress bags, and furniture covers",
      "Direct transit between properties with intermediate storage stops",
      "Loading assistance for storage pod containers and lockers",
      "Flexible return collection when you are ready to move out",
    ],
    features: [
      "Collection and delivery to all major UK self-storage providers",
      "Expert storage unit stacking to maximize paid cubic volume",
      "Protective dust sheets, mattress bags, and furniture covers",
      "Direct transit between properties with intermediate storage stops",
      "Loading assistance for storage pod containers and lockers",
      "Flexible return collection when you are ready to move out",
    ],
    faqs: [
      {
        question: "Do I need to be present at the storage facility?",
        answer:
          "If you have already arranged unit access and key authorization, we can handle the delivery with facility staff. Otherwise, we meet you on-site.",
      },
      {
        question: "Can your team help stack the storage unit efficiently?",
        answer:
          "Yes. Our movers stack heavy items and furniture at the base, filling vertical space safely so you get the maximum value out of your unit size.",
      },
      {
        question:
          "Can you move goods out of storage and deliver to my new house?",
        answer:
          "Yes. We regularly carry out moves from storage units to new homes once property completion or refurbishment is finished.",
      },
      {
        question:
          "Can you deliver part of my load to storage and part to my home?",
        answer:
          "Yes. We can execute split-delivery routes, taking designated items to your storage locker and the remainder to your new home.",
      },
    ],
    relatedServiceSlugs: [
      "house-removals",
      "man-and-van",
      "student-and-small-moves",
    ],
    seo: {
      title:
        "Storage Transportation UK | Moves to Big Yellow, Safestore & Units",
      description:
        "Reliable removals to and from UK self-storage facilities. Efficient unit packing, furniture protection, and direct door-to-storage transit.",
    },
  },

  // 11. Waste Removal and Disposal
  {
    id: "waste-removal-and-disposal",
    slug: "waste-removal-and-disposal",
    name: "Waste Removal and Disposal",
    title: "Waste Removal and Disposal",
    shortDescription:
      "Licensed clearance and ethical disposal of unwanted furniture, appliances, garage clutter and general household rubbish.",
    description:
      "Clearing out unwanted clutter, broken household appliances, old mattresses, or accumulated garage junk can quickly become exhausting. Our ethical waste removal and disposal service provides an efficient, heavy-lifting alternative to hiring an expensive skip that requires council permits and manual loading. As an Environment Agency registered waste carrier, we carry items from lofts, basements, and garages, sorting salvageable items for donation and disposing of waste legally at authorized recycling centers.",
    benefits: [
      "Environment Agency registered waste carrier (Licence Ref: CBDU489120)",
      "Skip hire alternative with zero council permit fees or driveway blockage",
      "Full heavy lifting from lofts, basements, sheds, and upper floors",
      "Ethical recycling, sorting, and charity diversion where feasible",
      "Electronic waste transfer documentation provided upon completion",
      "Premises swept clean and left tidy following clearance completion",
    ],
    features: [
      "Environment Agency registered waste carrier (Licence Ref: CBDU489120)",
      "Skip hire alternative with zero council permit fees or driveway blockage",
      "Full heavy lifting from lofts, basements, sheds, and upper floors",
      "Ethical recycling, sorting, and charity diversion where feasible",
      "Electronic waste transfer documentation provided upon completion",
      "Premises swept clean and left tidy following clearance completion",
    ],
    faqs: [
      {
        question: "Do you have a registered Waste Carrier Licence?",
        answer:
          "Yes. We operate in strict adherence with Environment Agency regulations (Licence Ref: CBDU489120) and dispose of waste only at authorized facilities.",
      },
      {
        question: "Why choose your clearance service instead of a skip?",
        answer:
          "Unlike skip hire, our team does all the heavy carrying, you do not need expensive council highway permits, and your driveway remains completely clear.",
      },
      {
        question: "What items can you not take for disposal?",
        answer:
          "We cannot accept hazardous substances such as raw chemicals, asbestos, loose paint tins, motor oils, or medical clinical waste.",
      },
      {
        question: "Do you tidy up after clearing the property?",
        answer:
          "Yes. Once loading is complete, our crew carries out a broom sweep of the cleared room, garage, or driveway to leave the area clean.",
      },
    ],
    relatedServiceSlugs: [
      "house-removals",
      "office-and-commercial-removals",
      "appliance-removals",
    ],
    seo: {
      title: "Waste Removal & Disposal UK | Licensed Rubbish Clearance",
      description:
        "Licensed property clearance and bulky waste disposal across the UK. Ethical recycling, skip alternative, and heavy lifting included.",
    },
  },

  // 12. Heavy and Bulky Item Transportation
  {
    id: "heavy-and-bulky-item-transportation",
    slug: "heavy-and-bulky-item-transportation",
    name: "Heavy and Bulky Item Transportation",
    title: "Heavy and Bulky Item Transportation",
    shortDescription:
      "Specialist transport for oversized, weighty items including upright pianos, cast-iron baths, gym equipment and solid oak furniture.",
    description:
      "Certain possessions demand specialized lifting gear, hydraulic vehicle equipment, and seasoned movers. Moving upright pianos, multi-station gym machines, commercial displays, marble dining tables, or cast-iron garden ornaments without proper equipment risks serious injury and property damage. Our heavy and bulky item service pairs 3.5T Luton vans equipped with 500kg tail lifts with heavy-duty piano dollies, lifting harnesses, and load-securing rails to transport high-mass cargo safely.",
    benefits: [
      "500kg hydraulic cantilever tail lift platform for smooth ground loading",
      "Specialist piano dollies, lifting harnesses, and heavy-duty ramps",
      "Quilted transit jackets and heavy webbing ratchet straps",
      "Two-person and three-person heavy-lift teams trained in safe moving",
      "Protection for wooden floors, tiles, doorways, and thresholds",
      "Transparent fixed-price quotations based on item weight and access",
    ],
    features: [
      "500kg hydraulic cantilever tail lift platform for smooth ground loading",
      "Specialist piano dollies, lifting harnesses, and heavy-duty ramps",
      "Quilted transit jackets and heavy webbing ratchet straps",
      "Two-person and three-person heavy-lift teams trained in safe moving",
      "Protection for wooden floors, tiles, doorways, and thresholds",
      "Transparent fixed-price quotations based on item weight and access",
    ],
    faqs: [
      {
        question: "Can your team move an upright piano?",
        answer:
          "Yes. We transport upright pianos using specialized heavy-duty piano dollies, protective quilted covers, and our 500kg hydraulic tail lift.",
      },
      {
        question: "Can you move heavy commercial gym equipment?",
        answer:
          "Yes. We regularly transport treadmills, cable crossovers, squat racks, and weight plates, dismantling and securing components where necessary.",
      },
      {
        question: "How do you protect my home flooring from heavy items?",
        answer:
          "We lay down heavy-duty neoprene floor runners and use non-marking rubberized dolly wheels to safeguard hardwood, laminate, and carpeted floors.",
      },
      {
        question: "Is there a weight limit for single items you can transport?",
        answer:
          "Our hydraulic tail lift handles individual items up to 500kg. Please provide details on stairs or doorway restrictions when requesting a quote.",
      },
    ],
    relatedServiceSlugs: [
      "furniture-removals-and-delivery",
      "appliance-removals",
      "special-collections-and-deliveries",
    ],
    seo: {
      title: "Heavy & Bulky Item Transportation UK | Pianos, Gyms & Safe Moves",
      description:
        "Specialist heavy item removals across the UK. Upright pianos, gym equipment, and bulky furniture transported with 500kg tail-lift Luton vans.",
    },
  },

  // 13. Special Collections and Deliveries
  {
    id: "special-collections-and-deliveries",
    slug: "special-collections-and-deliveries",
    name: "Special Collections and Deliveries",
    title: "Special Collections and Deliveries",
    shortDescription:
      "Bespoke courier and haulage for high-value antiques, fine art, exhibition stands, trade shows and sensitive consignments.",
    description:
      "When cargo demands exceptional attention, white-glove handling, or non-standard transit coordination, our special collections and deliveries service provides bespoke solutions. We cater to art galleries, antique collectors, auction houses, exhibition organizers, and stage productions. With dedicated single-consignment transit (no co-loading or cross-docking), your fragile and high-value items travel directly under full supervision with complete security and transit protection.",
    benefits: [
      "Dedicated direct transit with zero shared-load or co-loading risks",
      "White-glove care for fine art, antique furniture, and auction items",
      "Exhibition stand, event showcase, and trade show transport",
      "Timed collection and delivery slots coordinated with event venues",
      "Padded transit blankets, bubble wrap, and vibration-dampening floor pads",
      "Comprehensive £50,000 Goods in Transit insurance protection",
    ],
    features: [
      "Dedicated direct transit with zero shared-load or co-loading risks",
      "White-glove care for fine art, antique furniture, and auction items",
      "Exhibition stand, event showcase, and trade show transport",
      "Timed collection and delivery slots coordinated with event venues",
      "Padded transit blankets, bubble wrap, and vibration-dampening floor pads",
      "Comprehensive £50,000 Goods in Transit insurance protection",
    ],
    faqs: [
      {
        question:
          "Do you deliver to exhibition and conference centers across the UK?",
        answer:
          "Yes. We deliver to major event venues such as ExCeL London, the NEC Birmingham, and Manchester Central, adhering strictly to venue delivery timetables.",
      },
      {
        question:
          "How do you protect valuable antiques and artwork during transit?",
        answer:
          "High-value pieces are individually wrapped in protective cushioning, secured to tie-rails with soft webbing straps, and protected against vibration on cushioned floors.",
      },
      {
        question: "Can you collect items directly from auction houses?",
        answer:
          "Yes. We collect lots from UK auction houses (such as Bonhams, Christie's, and regional salerooms), presenting official release notes on your behalf.",
      },
      {
        question: "Is my cargo insured during a special delivery?",
        answer:
          "Yes. All consignments are covered under our comprehensive £50,000 Goods in Transit insurance policy with full door-to-door protection.",
      },
    ],
    relatedServiceSlugs: [
      "furniture-removals-and-delivery",
      "heavy-and-bulky-item-transportation",
      "nationwide-and-long-distance-removals",
    ],
    seo: {
      title:
        "Special Collections & Deliveries UK | Antiques, Art & Exhibitions",
      description:
        "Dedicated transport for high-value antiques, fine art, auction purchases, and exhibition stands across the UK. Direct white-glove transit care.",
    },
  },

  // 14. Nationwide and Long-Distance Removals
  {
    id: "nationwide-and-long-distance-removals",
    slug: "nationwide-and-long-distance-removals",
    name: "Nationwide and Long-Distance Removals",
    title: "Nationwide and Long-Distance Removals",
    shortDescription:
      "Direct door-to-door relocations across England, Scotland and Wales with dedicated vehicles, zero co-loading and fixed quotes.",
    description:
      "Relocating inter-city or across regions requires a transport team that guarantees prompt timing and direct transit. Unlike national freight networks that store your furniture in intermediate regional warehouses or co-load with unrelated clients, our nationwide removals service provides dedicated door-to-door transit. The van loaded at your collection address drives directly to your destination anywhere in the UK mainland, ensuring complete accountability, zero cross-dock delays, and seamless communications throughout the journey.",
    benefits: [
      "Dedicated direct haulage with zero intermediate warehouse storage",
      "Direct transit connecting London, Birmingham, Manchester, Leeds, Scotland & Wales",
      "Fixed transparent quotes with all motorway tolls and mileage included",
      "Live transit tracking updates and driver direct contact",
      "Two-man professional loading and room-of-choice unloading",
      "Flexible booking dates with weekend availability",
    ],
    features: [
      "Dedicated direct haulage with zero intermediate warehouse storage",
      "Direct transit connecting London, Birmingham, Manchester, Leeds, Scotland & Wales",
      "Fixed transparent quotes with all motorway tolls and mileage included",
      "Live transit tracking updates and driver direct contact",
      "Two-man professional loading and room-of-choice unloading",
      "Flexible booking dates with weekend availability",
    ],
    faqs: [
      {
        question:
          "Do you share van space with other clients on long-distance moves?",
        answer:
          "No. You get a dedicated vehicle exclusively for your belongings. We do not co-load with other clients, guaranteeing direct transit with zero mix-ups.",
      },
      {
        question:
          "Are motorway tolls and fuel included in the long-distance quote?",
        answer:
          "Yes. Our fixed-rate long-distance quotes include all fuel, mileage, and scheduled motorway tolls with zero surprise surcharges.",
      },
      {
        question: "How long does a long-distance move usually take?",
        answer:
          "Most journeys between major UK cities (e.g., London to Manchester or Birmingham) are completed same-day. Overnight transit can be arranged for distant locations.",
      },
      {
        question:
          "Can I travel in the van with the driver on a long-distance relocation?",
        answer:
          "Yes. Subject to cab seat availability, one passenger can travel in the passenger cab with the driver at no extra charge.",
      },
    ],
    relatedServiceSlugs: [
      "house-removals",
      "man-and-van",
      "office-and-commercial-removals",
    ],
    seo: {
      title:
        "Nationwide & Long-Distance Removals UK | Direct UK Inter-City Moves",
      description:
        "Dedicated nationwide and long-distance removals across the UK. Direct door-to-door transit between London, Manchester, Birmingham, Scotland & Wales.",
    },
  },
];
