import type { Area } from "@/types";

export const areas: Area[] = [
  {
    id: "london",
    slug: "london",
    name: "London",
    region: "Greater London",
    county: "Greater London",
    postcodePrefixes: ["E", "EC", "N", "NW", "SE", "SW", "W", "WC"],
    intro:
      "We provide scheduled residential removals and dedicated man and van transit across all London boroughs and postal districts. Rather than operating fixed depot offices in every borough, our mobile fleet provides direct, punctual door-to-door transit between London properties and connections across the UK.",
    description:
      "We provide scheduled residential removals and dedicated man and van transit across all London boroughs and postal districts. Rather than operating fixed depot offices in every borough, our mobile fleet provides direct, punctual door-to-door transit between London properties and connections across the UK.",
    localNotes: {
      parking:
        "Controlled Parking Zones (CPZs) and Red Routes require advance planning; customers are advised to apply for temporary parking suspension dispensations from their local London borough council allow 5–10 working days for council parking suspension dispensations.",
      access:
        "London presents distinct access profiles, from multi-floor Victorian conversions with narrow internal stairs to modern riverside high-rises requiring dedicated service lift bookings.",
      typicalRoutes:
        "Frequent transit corridors include the M25 orbital ring, North Circular (A406), South Circular (A205), and direct motorway connections via the M1, M4, and M11.",
    },
    faqs: [
      {
        question:
          "Do your vehicles operate in London's ULEZ and Congestion Charge zones?",
        answer:
          "Yes. Our modern removals vans comply with London's Ultra Low Emission Zone (ULEZ) standards. Any applicable Congestion Charge fees are discussed transparently upon quote confirmation our Euro-6 vehicles are 100% compliant with zero clean air charges.",
      },
      {
        question: "How do you manage parking outside London terraced flats?",
        answer:
          "We coordinate loading in marked pay-and-display or resident bays, and recommend securing a temporary parking suspension through your local council ahead of time.",
      },
      {
        question:
          "Can you carry furniture up multiple flights of stairs in older London buildings?",
        answer:
          "Yes. Our porters are experienced in navigating tight spiral staircases, communal landings, and high-rise walk-ups with heavy furniture.",
      },
    ],
  },
  {
    id: "birmingham",
    slug: "birmingham",
    name: "Birmingham",
    region: "West Midlands",
    county: "West Midlands",
    postcodePrefixes: ["B"],
    intro:
      "Our removals and logistics service connects Birmingham and the wider West Midlands conurbation with destinations nationwide. Our agile Luton vans provide dedicated transport for homes, apartments, student lets, and offices without relying on traditional depot middlemen.",
    description:
      "Our removals and logistics service connects Birmingham and the wider West Midlands conurbation with destinations nationwide. Our agile Luton vans provide dedicated transport for homes, apartments, student lets, and offices without relying on traditional depot middlemen.",
    localNotes: {
      parking:
        "Central Birmingham operates a Clean Air Zone (CAZ); on-street parking in the city core requires Pay & Display or resident permits, while suburban avenues typically offer easier kerbside van access our Euro-6 fleet is fully exempt from Birmingham CAZ fees.",
      access:
        "Properties range from city-centre canal-side loft apartments with barrier access to traditional suburban semi-detached driveways across Solihull, Harborne, and Sutton Coldfield.",
      typicalRoutes:
        "Strategic transit links through Spaghetti Junction (M6 J6), the M5, M42 orbital corridor, and the Aston Expressway (A38M).",
    },
    faqs: [
      {
        question:
          "Do you service moves from Birmingham universities and student residences?",
        answer:
          "Yes. We regularly handle student room and studio moves across the University of Birmingham, Aston, and BCU campuses with prompt loading.",
      },
      {
        question:
          "How do you handle moves into central Birmingham apartment complexes?",
        answer:
          "We arrange access with on-site concierges and building managers, utilizing loading docks and service lifts to transfer items smoothly.",
      },
      {
        question:
          "Can you transport items from Birmingham directly to London or the North?",
        answer:
          "Yes. We operate frequent direct motorway journeys via the M6 and M1 corridors, offering dedicated non-stop transfers.",
      },
    ],
  },
  {
    id: "manchester",
    slug: "manchester",
    name: "Manchester",
    region: "Greater Manchester",
    county: "Greater Manchester",
    postcodePrefixes: ["M"],
    intro:
      "We deliver professional domestic removals and agile man and van transport throughout Greater Manchester. From high-density city-centre developments to leafier suburbs in Didsbury, Chorlton, and Salford Quays, we provide direct transit tailored to your schedule.",
    description:
      "We deliver professional domestic removals and agile man and van transport throughout Greater Manchester. From high-density city-centre developments to leafier suburbs in Didsbury, Chorlton, and Salford Quays, we provide direct transit tailored to your schedule.",
    localNotes: {
      parking:
        "City centre streets (Northern Quarter, Ancoats, Deansgate) have strict loading restrictions; early morning loading is frequently advantageous early morning or weekend slots avoid peak loading restrictions.",
      access:
        "Modern high-rise residential towers often require advance security desk clearance and service lift booking, whereas red-brick terraces feature straightforward kerbside doors.",
      typicalRoutes:
        "Primary transit via the M60 orbital motorway, M602 into central corridors, M56 southwards, and M62 towards Yorkshire and Merseyside.",
    },
    faqs: [
      {
        question:
          "Do you cover relocations in the Northern Quarter and Ancoats?",
        answer:
          "Yes. Our drivers are accustomed to the one-way street networks and loading bays common throughout Manchester's urban regeneration districts.",
      },
      {
        question:
          "Can you provide two or three porters for Manchester apartment moves?",
        answer:
          "Yes. We can allocate multi-person crews to carry bulky sofas, bed bases, and wardrobes up stairwells or via passenger lifts.",
      },
      {
        question: "How quickly can I book a man and van in Manchester?",
        answer:
          "We accommodate short-notice bookings subject to current vehicle schedule, and recommend booking 5 to 7 days ahead for weekend dates.",
      },
    ],
  },
  {
    id: "leeds",
    slug: "leeds",
    name: "Leeds",
    region: "West Yorkshire",
    county: "West Yorkshire",
    postcodePrefixes: ["LS"],
    intro:
      "Serving Leeds and the West Yorkshire area, our moving services cater to householders, students, and businesses seeking prompt, professional van transport. We offer scheduled collections and direct onward transit across the UK.",
    description:
      "Serving Leeds and the West Yorkshire area, our moving services cater to householders, students, and businesses seeking prompt, professional van transport. We offer scheduled collections and direct onward transit across the UK.",
    localNotes: {
      parking:
        "Central Leeds inner loop and pedestrianised zones require planned vehicle access; outer districts such as Headingley and Chapel Allerton offer on-street residential bays scheduled outside peak city transit windows.",
      access:
        "Back-to-back terraced properties and converted textile mills frequently have steep staircases and shared courtyards that require careful item handling.",
      typicalRoutes:
        "Direct connection to the M1 southbound, M62 trans-Pennine route, M621 city access spur, and the A1(M) northbound corridor.",
    },
    faqs: [
      {
        question:
          "Do you undertake student room moves around Headingley and Hyde Park?",
        answer:
          "Yes. We specialize in student relocations across Leeds, offering cost-effective man and van options for term-time changeovers.",
      },
      {
        question:
          "Can you dismantle large wardrobes in Leeds back-to-back terraces?",
        answer:
          "Yes. Our team carries full tool kits to disassemble and reconstruct wardrobes and bed frames that cannot pass through narrow stairs.",
      },
      {
        question: "What van sizes do you operate across West Yorkshire?",
        answer:
          "We operate versatile 3.5-tonne Luton box vans fitted with hydraulic tail lifts and ample tie-down points for complete house loads.",
      },
    ],
  },
  {
    id: "glasgow",
    slug: "glasgow",
    name: "Glasgow",
    region: "Scotland",
    county: "Lanarkshire",
    postcodePrefixes: ["G"],
    intro:
      "Providing dedicated removals and long-distance transport connecting Glasgow with the rest of the UK. Our mobile service eliminates logistics complexity for homeowners and flat-dwellers across the West of Scotland.",
    description:
      "Providing dedicated removals and long-distance transport connecting Glasgow with the rest of the UK. Our mobile service eliminates logistics complexity for homeowners and flat-dwellers across the West of Scotland.",
    localNotes: {
      parking:
        "Glasgow City Centre operates a Low Emission Zone (LEZ); tenement streets in the West End and Southside require careful parking alignment our vehicles meet Scottish LEZ standards for seamless access.",
      access:
        "Traditional sandstone tenements feature wide 'wally close' tiled entries but multiple flights of stone stairs, requiring physical stamina and careful padding.",
      typicalRoutes:
        "Transit connects via the M8 running through central Glasgow, M74 heading south toward Carlisle and England, and M77 towards Ayrshire.",
    },
    faqs: [
      {
        question: "How do you navigate high-floor tenement stairs in Glasgow?",
        answer:
          "Our crews are experienced with multi-storey tenement stairwells, carrying items systematically with furniture straps and dollies.",
      },
      {
        question:
          "Can you arrange cross-border moves from Glasgow down to England?",
        answer:
          "Yes. Direct long-distance journeys down the M74/M6 corridor to Manchester, Birmingham, and London are routinely scheduled.",
      },
      {
        question: "Are your vehicles compliant with the Glasgow LEZ?",
        answer:
          "Yes. Our vehicles comply with Scottish Low Emission Zone standards for uninterrupted city centre access.",
      },
    ],
  },
  {
    id: "liverpool",
    slug: "liverpool",
    name: "Liverpool",
    region: "Merseyside",
    county: "Merseyside",
    postcodePrefixes: ["L"],
    intro:
      "Our removals and man and van services provide reliable door-to-door transport throughout Liverpool and Merseyside. We move flats, suburban homes, student accommodation, and commercial spaces with careful loading and transparent rates.",
    description:
      "Our removals and logistics service connects Liverpool and the Merseyside conurbation with nationwide destinations. Our agile vans provide dedicated door-to-door transport without relying on depot middlemen.",
    localNotes: {
      parking:
        "Liverpool city centre and waterfront developments feature designated loading spaces; residential areas like Crosby and Aigburth generally provide accessible driveway parking loading permits are arranged with building management concierge desks.",
      access:
        "Dockland apartment blocks require key fob access and concierge lift reservations, while classic Georgian Quarter properties feature elevated front steps.",
      typicalRoutes:
        "Key arterial routes include the M62 linking eastward to Manchester, Queensway & Kingsway Mersey Tunnels, and the A580 East Lancs Road.",
    },
    faqs: [
      {
        question: "Do you service moves across the Wirral and Mersey Tunnels?",
        answer:
          "Yes. We regularly transport loads through the Mersey Tunnels to Birkenhead, Wallasey, and the wider Wirral peninsula.",
      },
      {
        question: "Can you assist with student moves around Smithdown Road?",
        answer:
          "Yes. We provide flexible hourly and fixed-quote bookings for students moving between university halls and private shared lets.",
      },
      {
        question:
          "How do you protect fragile items during transit from Liverpool?",
        answer:
          "Possessions are wrapped with padded transit blankets, immobilized with heavy straps, and cushioned securely within the Luton van.",
      },
    ],
  },
  {
    id: "bristol",
    slug: "bristol",
    name: "Bristol",
    region: "South West",
    county: "Bristol",
    postcodePrefixes: ["BS"],
    intro:
      "We deliver high-quality moving services across Bristol and the South West. From historic Georgian squares to vibrant modern harbourside apartments, our mobile crews provide stress-free transport locally and nationwide.",
    description:
      "We deliver high-quality moving services across Bristol and the South West. Our agile Luton vans provide prompt, secure door-to-door transit for homes and businesses.",
    localNotes: {
      parking:
        "Bristol operates a central Clean Air Zone (CAZ); Clifton and Redland hills have active Resident Parking Schemes (RPS) requiring daily visitor permits or parking waivers visitor vouchers or council dispensations ensure direct roadside access.",
      access:
        "Clifton and Totterdown are characterized by steep inclines, narrow Victorian roads, and elevated basement lightwells requiring controlled manual carrying.",
      typicalRoutes:
        "Primary links via the M4 eastbound toward London, M5 northbound toward the Midlands, and M32 feeding straight into the city centre.",
    },
    faqs: [
      {
        question: "Are your vans compliant with the Bristol Clean Air Zone?",
        answer:
          "Yes. Our vehicles comply with clean air regulations, ensuring seamless transit throughout central Bristol without penalty charges.",
      },
      {
        question: "Can your vans negotiate steep Clifton streets?",
        answer:
          "Our experienced drivers are skilled in parking and safely securing vehicles on steep slopes, using chocks and level loading procedures.",
      },
      {
        question:
          "Do you transport furniture from Bristol to London or South Wales?",
        answer:
          "Yes. We frequently run direct transit routes along the M4 corridor connecting Bristol to Cardiff, Newport, Reading, and London.",
      },
    ],
  },
  {
    id: "sheffield",
    slug: "sheffield",
    name: "Sheffield",
    region: "South Yorkshire",
    county: "South Yorkshire",
    postcodePrefixes: ["S"],
    intro:
      "Serving Sheffield and South Yorkshire with dependable, friendly removals. We navigate Sheffield's distinct topography with robust vehicles and careful packing for home relocations and single-item transport.",
    description:
      "Serving Sheffield and South Yorkshire with dependable removals. We navigate Sheffield's distinct topography with robust Luton vans and careful packing for home and office moves.",
    localNotes: {
      parking:
        "Inner Sheffield has Clean Air Zone (CAZ) controls; hilly suburbs such as Crookes and Walkley have tight street parking where vans must park conscientiously Euro-6 compliance ensures zero daily clean air tariffs.",
      access:
        "Hilly terrain often means steep front garden steps, split-level floor plans, and tiered terrace properties requiring steady team handling.",
      typicalRoutes:
        "Convenient access via the M1 (Junctions 31 to 35), Sheffield Parkway (A57), and A61 trans-Pennine route toward Manchester.",
    },
    faqs: [
      {
        question:
          "Can you handle properties with long outdoor garden steps in Sheffield?",
        answer:
          "Yes. We assess outdoor access beforehand and supply enough helpers to safely manage split-level paths and tiered garden steps.",
      },
      {
        question: "Do you service student accommodation in Sheffield?",
        answer:
          "Yes. We support University of Sheffield and Sheffield Hallam students with fast, reliable term-time moves.",
      },
      {
        question: "Can you move heavy machinery or pianos in South Yorkshire?",
        answer:
          "We transport upright pianos and heavy furniture using specialist dollies and tail-lift Luton vans we safely transport upright models up to 250kg with tail lifts and dollies.",
      },
    ],
  },
  {
    id: "edinburgh",
    slug: "edinburgh",
    name: "Edinburgh",
    region: "Scotland",
    county: "City of Edinburgh",
    postcodePrefixes: ["EH"],
    intro:
      "We provide bespoke removals connecting Scotland's capital with routes across the UK. Handling Georgian townhouses, tenement flats, and modern developments with care and punctual coordination.",
    description:
      "Providing removals and long-distance transport connecting Edinburgh with destinations across the UK. Handling Old Town and New Town properties with specialized loading care.",
    localNotes: {
      parking:
        "The Edinburgh LEZ is fully enforced; New Town and Old Town operate strict parking permit bays and cobbles requiring council dispensation we recommend applying for council dispensations 10 days in advance.",
      access:
        "Historic Old Town wynds and New Town flagstone steps involve extensive manual carrying and stone staircases without elevator access.",
      typicalRoutes:
        "Major corridors include the Edinburgh City Bypass (A720), M8 toward Glasgow, M9 toward Stirling, and the A1 south towards Newcastle.",
    },
    faqs: [
      {
        question: "How do you handle moves into top-floor New Town flats?",
        answer:
          "Our teams are prepared for stone spiral stairs and wide central tenement stairways, using heavy-duty blankets and secure lifting straps.",
      },
      {
        question:
          "Do you offer direct removal services from Edinburgh down to London?",
        answer:
          "Yes. We specialize in non-stop, direct-transit UK cross-border moves down the A1 or M74/M6 motorway networks.",
      },
      {
        question: "Can you coordinate parking on cobbled streets?",
        answer:
          "We arrange parking dispensations where necessary and position the van to minimize carry distance across cobbles.",
      },
    ],
  },
  {
    id: "cardiff",
    slug: "cardiff",
    name: "Cardiff",
    region: "Wales",
    county: "South Glamorgan",
    postcodePrefixes: ["CF"],
    intro:
      "Our removals service supports residents and businesses across Cardiff and South Wales. Whether moving home locally or orchestrating a long-distance relocation across the border into England, we ensure a seamless transit.",
    description:
      "Our removals and man and van service supports residents and businesses across Cardiff and South Wales with prompt, direct door-to-door transport.",
    localNotes: {
      parking:
        "Central Cardiff (Cathays, Roath, Canton) features dense residential parking zones; visitor vouchers or council notices are recommended on move days visitor parking vouchers are recommended on move days.",
      access:
        "Victorian terraced streets are standard in student and family suburbs, while Cardiff Bay developments feature underground car parks with height restrictions.",
      typicalRoutes:
        "Direct highway transit along the M4 corridor across the Severn Bridge, A470 north toward the Valleys, and A48 peripheral distributor.",
    },
    faqs: [
      {
        question:
          "Do you undertake moves from Cardiff across the border into England?",
        answer:
          "Yes. We frequently haul domestic and commercial loads over the Prince of Wales Bridge along the M4 toward Bristol, Reading, and London.",
      },
      {
        question: "Can your vans fit into Cardiff Bay underground car parks?",
        answer:
          "Standard Luton vans cannot enter low-clearance underground garages; in these cases, we position at designated ground-level loading bays.",
      },
      {
        question: "Do you assist with student moves around Cathays?",
        answer:
          "Yes. We support Cardiff University students with fast, affordable man and van room moves during academic transition periods.",
      },
    ],
  },
  {
    id: "newcastle-upon-tyne",
    slug: "newcastle-upon-tyne",
    name: "Newcastle upon Tyne",
    region: "Tyne and Wear",
    county: "Tyne and Wear",
    postcodePrefixes: ["NE"],
    intro:
      "Serving Newcastle upon Tyne and the North East with professional removals. We transport home goods, flat contents, and commercial assets safely across local streets and nationwide highways.",
    description:
      "Serving Newcastle upon Tyne and the North East with professional removals. We transport home goods and flat contents safely across local streets and nationwide highways.",
    localNotes: {
      parking:
        "Newcastle operates a central Clean Air Zone (CAZ); Jesmond and Heaton feature narrow terraced streets with permit parking controls our fleet meets Clean Air Zone standards with zero daily tariffs.",
      access:
        "Tyneside flats are distinctive with double front doors and separate external staircases that require measured furniture carrying.",
      typicalRoutes:
        "Fast transit via the A1(M) motorway, A19 coastal route, and the iconic Tyne Bridge (A167) crossing.",
    },
    faqs: [
      {
        question: "How do you handle moving in classic Tyneside flats?",
        answer:
          "Our crew is experienced with the unique layout of upper and lower Tyneside flats, navigating separate narrow stairways safely.",
      },
      {
        question:
          "Can you transport items from Newcastle to London or Scotland?",
        answer:
          "Yes. We operate direct long-distance hauls north into Edinburgh or south down the A1 corridor to Leeds and London.",
      },
      {
        question:
          "Do you provide protective equipment for coastal rain and weather?",
        answer:
          "Our vans are fully weatherproof box bodies, and all goods are wrapped with thick moisture-resistant blankets.",
      },
    ],
  },
  {
    id: "nottingham",
    slug: "nottingham",
    name: "Nottingham",
    region: "East Midlands",
    county: "Nottinghamshire",
    postcodePrefixes: ["NG"],
    intro:
      "We offer flexible removals and man and van services throughout Nottingham and the East Midlands. Perfect for family relocations, city-centre apartment changes, and retail collections.",
    description:
      "We offer flexible removals and man and van services throughout Nottingham and the East Midlands. Reliable door-to-door transit for homes and workplaces.",
    localNotes: {
      parking:
        "The Lace Market and Hockley areas have tight pedestrian and tram-shared streets; suburban avenues in West Bridgford and Beeston offer straightforward kerbside loading loading is coordinated outside tram lane operational hours.",
      access:
        "Converted industrial lace mills often feature long internal corridors, while suburban estates offer level private driveways.",
      typicalRoutes:
        "Convenient access via the M1 (Junctions 24 to 26), A52 connecting to Derby, and A453 Remembrance Way.",
    },
    faqs: [
      {
        question:
          "Do you service moves around Nottingham Trent and University of Nottingham?",
        answer:
          "Yes. We support students with term-time room moves, luggage transport, and furniture delivery across both campuses.",
      },
      {
        question: "How do you coordinate moves in tramway zones?",
        answer:
          "We plan arrivals carefully to avoid obstructing Nottingham Express Transit (NET) routes and park in designated side bays.",
      },
      {
        question: "Can you provide packing boxes ahead of time?",
        answer:
          "Yes. We can deliver quality packing materials to your Nottingham address in advance upon request standard moving box packs start from £25 with delivery included.",
      },
    ],
  },
  {
    id: "leicester",
    slug: "leicester",
    name: "Leicester",
    region: "East Midlands",
    county: "Leicestershire",
    postcodePrefixes: ["LE"],
    intro:
      "Delivering prompt home removals and cargo transport across Leicester and Leicestershire. Our mobile crews take care of all heavy lifting, packing, and safe transit.",
    description:
      "Delivering prompt home removals and cargo transport across Leicester and Leicestershire. Our mobile crews handle heavy lifting and secure transit.",
    localNotes: {
      parking:
        "Inner city streets around Clarendon Park and Highfields are tightly parked terraced avenues; outer areas like Oadby and Wigston feature spacious driveways temporary resident bay waivers are advised for smooth move days.",
      access:
        "Mix of Victorian brick terraces, university student halls, and new-build housing estates with standard hallway dimensions.",
      typicalRoutes:
        "Direct connection to the M1 (Junction 21), M69 towards Coventry, and A46 bypass around the city.",
    },
    faqs: [
      {
        question: "Can you dismantle beds and wardrobes in Leicester homes?",
        answer:
          "Yes. Our crew brings power tools to take down and rebuild large furniture pieces that cannot navigate tight doorways.",
      },
      {
        question: "Do you service office moves in Leicester?",
        answer:
          "Yes. We support small to medium enterprises with out-of-hours commercial relocations and equipment transport.",
      },
      {
        question: "How far in advance should I book in Leicester?",
        answer:
          "We advise booking 1 to 2 weeks ahead, though last-minute van bookings can often be slotted in depending on schedule.",
      },
    ],
  },
  {
    id: "southampton",
    slug: "southampton",
    name: "Southampton",
    region: "Hampshire",
    county: "Hampshire",
    postcodePrefixes: ["SO"],
    intro:
      "Providing dependable removals across Southampton, the Solent region, and Hampshire. We move homes, flats, and marine/commercial cargo with punctual, dedicated vehicle allocation.",
    description:
      "Providing dependable removals across Southampton and Hampshire. We move homes, flats, and commercial items with dedicated vehicle allocation.",
    localNotes: {
      parking:
        "Port and docklands traffic can influence central loading times; residential areas in Portswood and Bassett require awareness of resident parking bays routes are planned around cruise and ferry peak traffic windows.",
      access:
        "Modern waterfront apartments require lift coordination, whereas suburban family properties generally offer convenient driveway access.",
      typicalRoutes:
        "Rapid transit links via the M3 northbound to London, M27 running along the South Coast, and the A33 artery.",
    },
    faqs: [
      {
        question: "Do you transport goods from Southampton up to London?",
        answer:
          "Yes. The M3 corridor offers a quick direct route for same-day and scheduled moves between Southampton and Greater London.",
      },
      {
        question: "Can you collect items from Southampton storage units?",
        answer:
          "Yes. We collect goods from all local self-storage facilities and deliver them to your residential or business premises.",
      },
      {
        question: "Are your vans equipped with tail lifts for heavy cargo?",
        answer:
          "Yes. Our 3.5t Luton vans feature hydraulic tail lifts that lift up to 500kg safely from road level.",
      },
    ],
  },
  {
    id: "portsmouth",
    slug: "portsmouth",
    name: "Portsmouth",
    region: "Hampshire",
    county: "Hampshire",
    postcodePrefixes: ["PO"],
    intro:
      "Serving Portsea Island and the surrounding South Coast towns with dedicated removals. We tackle compact island street layouts with agile vans and experienced handling.",
    description:
      "Serving Portsea Island and Portsmouth with dedicated removals. We handle compact island streets with agile vans and experienced crews.",
    localNotes: {
      parking:
        "As the UK's most densely populated city, on-street parking in Southsea and Fratton is notoriously tight; advance space reservation is crucial advance reservation of resident bays is recommended.",
      access:
        "Victorian terraced houses with narrow front gardens and steep stairs require methodical, two-person maneuvering of sofas and beds.",
      typicalRoutes:
        "Island ingress and egress is concentrated across the M275, A2030 (Eastern Road), and A3(M) northward through the South Downs.",
    },
    faqs: [
      {
        question: "How do you manage parking in tight Southsea streets?",
        answer:
          "We advise parking your personal cars outside the house beforehand to hold space for the removals van, and we arrive early to secure loading access.",
      },
      {
        question: "Can you transport items onto the Isle of Wight?",
        answer:
          "We can coordinate ferry crossings to the Isle of Wight upon request, subject to ferry booking terms ferry crossing fares are quoted transparently at actual operator cost.",
      },
      {
        question: "Do you assist with student moves for Portsmouth University?",
        answer:
          "Yes. We support university students with term changeover moves across Southsea and campus accommodation.",
      },
    ],
  },
  {
    id: "coventry",
    slug: "coventry",
    name: "Coventry",
    region: "West Midlands",
    county: "West Midlands",
    postcodePrefixes: ["CV"],
    intro:
      "Reliable removals and man and van services operating across Coventry and Warwickshire. From city centre student blocks to suburban homes in Earlsdon and Kenilworth, we ensure safe transit.",
    description:
      "Reliable removals and man and van services operating across Coventry and Warwickshire. Safe door-to-door transit for homes and offices.",
    localNotes: {
      parking:
        "Coventry inner ring road access is straightforward; residential parking permit zones operate in central Earlsdon and near Coventry University convenient dual-carriageway access connects all suburbs.",
      access:
        "Mix of high-density student towers with secure loading areas and traditional detached/semi-detached suburban avenues.",
      typicalRoutes:
        "Outstanding motorway connections via the M6, M69 toward Leicester, A45, and A46 linking south toward Warwick and Leamington Spa.",
    },
    faqs: [
      {
        question:
          "Do you service Coventry University and Warwick University campuses?",
        answer:
          "Yes. We regularly move students between halls of residence, private student flats, and home addresses across the UK.",
      },
      {
        question:
          "Can you move business equipment in Coventry's industrial estates?",
        answer:
          "Yes. We provide commercial van haulage for small business offices, light workshops, and storage facilities.",
      },
      {
        question: "Do you offer fixed quotes for Coventry moves?",
        answer:
          "Yes. We provide fixed, transparent quotes based on your inventory and route so you know the full cost in advance.",
      },
    ],
  },
  {
    id: "reading",
    slug: "reading",
    name: "Reading",
    region: "Berkshire",
    county: "Berkshire",
    postcodePrefixes: ["RG"],
    intro:
      "Connecting the Thames Valley tech corridor with destinations UK-wide. Our professional removals teams move family homes, executive flats, and corporate offices across Reading.",
    description:
      "Connecting Reading and the Thames Valley with destinations UK-wide. Professional removals for family homes, executive flats, and offices.",
    localNotes: {
      parking:
        "Town centre riverside complexes have strict security gates and loading bays; residential areas like Caversham require resident permit considerations council dispensations can be secured for town-centre pedestrian zones.",
      access:
        "High-density modern apartment buildings with designated loading bays, alongside riverside detached homes with longer driveways.",
      typicalRoutes:
        "Key transit along the M4 motorway (Junctions 10 to 12) toward London and Bristol, A33 corridor toward Basingstoke, and A329(M).",
    },
    faqs: [
      {
        question:
          "How long does a move between Reading and London typically take?",
        answer:
          "Transit down the M4 corridor usually takes 60 to 90 minutes depending on peak traffic times, allowing for rapid same-day moves.",
      },
      {
        question: "Can you collect flat-pack furniture from nearby retailers?",
        answer:
          "Yes. We collect large furniture orders from retail hubs and IKEA Reading (Calcot), delivering directly to your room of choice.",
      },
      {
        question: "Are your drivers experienced with Reading's one-way system?",
        answer:
          "Yes. Our drivers know the inner distribution road (IDR) and arrange delivery timings to avoid rush-hour bottlenecks.",
      },
    ],
  },
  {
    id: "milton-keynes",
    slug: "milton-keynes",
    name: "Milton Keynes",
    region: "Buckinghamshire",
    county: "Buckinghamshire",
    postcodePrefixes: ["MK"],
    intro:
      "Delivering fast, well-organized removals across Milton Keynes and North Buckinghamshire. The city's unique grid road design ensures swift van mobility and reliable appointment times.",
    description:
      "Delivering fast removals across Milton Keynes and North Buckinghamshire. Grid-road efficiency ensures swift van access and punctuality.",
    localNotes: {
      parking:
        "Milton Keynes grid roads (H and V roads) offer exceptional access; central business district parking is pay-and-display, while residential estates (estates/grid squares) feature ample parking bays dedicated estate loading areas provide direct door-to-van carrying.",
      access:
        "Purpose-built modern houses and low-rise apartments with level pathways and wide doors provide some of the easiest removal access in the UK.",
      typicalRoutes:
        "Direct access via the M1 motorway (Junctions 13 and 14), A5 dual carriageway running north-south, and A421 toward Bedford and Oxford.",
    },
    faqs: [
      {
        question: "Why are moves in Milton Keynes generally faster?",
        answer:
          "The grid-road layout avoids urban congestion and most homes offer generous parking and level pathways straight to the front door.",
      },
      {
        question:
          "Can you transport items between Milton Keynes and London or Birmingham?",
        answer:
          "Yes. Positioned halfway on the M1 corridor, we provide quick direct transit between MK and both major metropolises.",
      },
      {
        question:
          "Do you assemble flat-pack beds and wardrobes in Milton Keynes?",
        answer:
          "Yes. We offer complete furniture dismantling and reconstruction so your home is fully set up on move day.",
      },
    ],
  },
  {
    id: "brighton",
    slug: "brighton",
    name: "Brighton",
    region: "East Sussex",
    county: "East Sussex",
    postcodePrefixes: ["BN"],
    intro:
      "Providing characterful removals across Brighton, Hove, and the Sussex coast. We manage coastal hills, regency architecture, and narrow mews streets with specialized care.",
    description:
      "Providing removals across Brighton, Hove, and the Sussex coast. Handling Regency squares, coastal hills, and narrow mews streets with specialized care.",
    localNotes: {
      parking:
        "Brighton & Hove has comprehensive Controlled Parking Zones (CPZ) across almost all residential streets; reserving a van suspension through the council is strongly recommended council bay suspensions are advised for dense seafront streets.",
      access:
        "Regency townhouses feature tall, narrow flights of stairs and lower-ground lightwell basements requiring physical agility and protective blankets.",
      typicalRoutes:
        "Direct road connection via the A23/M23 northward toward London and Gatwick Airport, and the coastal A27 running east-west.",
    },
    faqs: [
      {
        question:
          "How do you manage parking outside Brighton Regency townhouses?",
        answer:
          "We strongly recommend applying for a council bay suspension in advance; otherwise, we arrive early to coordinate legal loading in adjacent bays.",
      },
      {
        question:
          "Can you move furniture down into basement garden flats in Hove?",
        answer:
          "Yes. Our porters are experienced in negotiating narrow basement steps and lightwell entries with bulky furniture.",
      },
      {
        question: "Do you provide moving services between Brighton and London?",
        answer:
          "Yes. We frequently run the A23/M23 route between Brighton and London, offering direct same-day domestic relocations.",
      },
    ],
  },
  {
    id: "northampton",
    slug: "northampton",
    name: "Northampton",
    region: "Northamptonshire",
    county: "Northamptonshire",
    postcodePrefixes: ["NN"],
    intro:
      "Delivering dependable removals and freight transport throughout Northampton and the East Midlands logistics hub. We provide full house removals and agile man and van support.",
    description:
      "Delivering dependable removals and freight transport throughout Northampton. Experienced crews providing safe door-to-door transit.",
    localNotes: {
      parking:
        "Town centre parking is managed by West Northamptonshire Council; residential areas like Abington and Kingsthorpe feature straightforward on-street loading on-street loading permits are available from the local council.",
      access:
        "Mix of traditional Victorian terraced homes and sprawling modern housing developments with generous driveway clearances.",
      typicalRoutes:
        "Superb central UK transit via the M1 (Junctions 15, 15A, and 16), A45 dual carriageway, and A43 linking toward Oxford.",
    },
    faqs: [
      {
        question:
          "Do you provide business relocations in Northampton industrial parks?",
        answer:
          "Yes. We service commercial premises and logistics facilities across Brackmills, Grange Park, and Round Spinney.",
      },
      {
        question: "Can you provide a two-man crew for a Northampton home move?",
        answer:
          "Yes. Our standard house removals service includes two or three experienced porters to manage all lifting and van packing.",
      },
      {
        question:
          "How far in advance should I confirm my booking in Northampton?",
        answer:
          "We recommend confirming your date 7 to 10 days in advance, but we also accommodate same-week requests whenever slots open.",
      },
    ],
  },
  {
    id: "derby",
    slug: "derby",
    name: "Derby",
    region: "East Midlands",
    county: "Derbyshire",
    postcodePrefixes: ["DE"],
    intro:
      "Serving Derby and Derbyshire with professional removals and transport. From city centre apartments to country homes in the Peak District foothills, we deliver goods safely.",
    description:
      "Serving Derby and Derbyshire with professional removals. Safe domestic and commercial transport across local and national routes.",
    localNotes: {
      parking:
        "Derby does not have a charging Clean Air Zone for standard vans; residential parking schemes apply around Derby city centre and the university district resident visitor scratchcards ensure legal kerbside van parking.",
      access:
        "Properties range from city-centre mill conversions with passenger lifts to spacious suburban residences in Mickleover and Allestree.",
      typicalRoutes:
        "Primary transit routes include the A38 connecting south to Birmingham, A52 toward Nottingham, and M1 (Junction 25) east of the city.",
    },
    faqs: [
      {
        question: "Do you service moves from Derby out into the Peak District?",
        answer:
          "Yes. We service rural locations, cottages, and towns across Derbyshire with experienced drivers and well-maintained vans.",
      },
      {
        question:
          "Can you move heavy engineering or home workshop equipment in Derby?",
        answer:
          "Yes. Our hydraulic tail lifts and heavy-duty dollies allow safe handling of bulky workshop items and domestic tools.",
      },
      {
        question: "Do you offer transparent fixed-price quotes in Derby?",
        answer:
          "Yes. We provide fixed written quotes with zero hidden mileage or weekend surcharges.",
      },
    ],
  },
  {
    id: "plymouth",
    slug: "plymouth",
    name: "Plymouth",
    region: "Devon",
    county: "Devon",
    postcodePrefixes: ["PL"],
    intro:
      "Connecting Britain's Ocean City with nationwide removals routes. We handle residential moves, naval family relocations, and student accommodation across Plymouth and South Devon.",
    description:
      "Connecting Plymouth and South Devon with nationwide removals routes. Punctual, secure transport for domestic and commercial moves.",
    localNotes: {
      parking:
        "The Barbican and historic Hoe feature narrow cobbled streets; suburban districts in Plympton and Plymstock feature wider road access harbour access is coordinated with port authority protocols.",
      access:
        "Elevated waterfront apartments with lift facilities, alongside Victorian terraced houses with narrow front gate approaches.",
      typicalRoutes:
        "Primary arterial corridor via the A38 Expressway linking eastward to Exeter and the M5 motorway network.",
    },
    faqs: [
      {
        question:
          "Do you handle long-distance moves from Plymouth up to the Midlands or London?",
        answer:
          "Yes. Long-distance relocations up the A38 and M5 corridor to Bristol, Birmingham, and London are routinely undertaken.",
      },
      {
        question:
          "Can you move naval personnel and military families in Plymouth?",
        answer:
          "Yes. We provide organized, punctual domestic moves for armed forces personnel relocating to and from Plymouth bases.",
      },
      {
        question:
          "How do you protect furniture on long-distance trips from Devon?",
        answer:
          "Items are individually wrapped with thick padded removal blankets and strapped securely to internal van rails.",
      },
    ],
  },
  {
    id: "stoke-on-trent",
    slug: "stoke-on-trent",
    name: "Stoke-on-Trent",
    region: "Staffordshire",
    county: "Staffordshire",
    postcodePrefixes: ["ST"],
    intro:
      "Delivering practical removals and man and van services across the Potteries and Staffordshire. We move homes, pottery workshops, and businesses with efficiency and careful handling.",
    description:
      "Delivering practical removals and man and van services across Stoke-on-Trent and Staffordshire with experienced crews and Luton vans.",
    localNotes: {
      parking:
        "The six towns (Hanley, Burslem, Stoke, Fenton, Longton, Tunstall) feature varied street parking; residential terrace streets are narrow but generally accessible spacious driveways and residential lanes provide good van clearance.",
      access:
        "Classic Victorian terraced homes with direct pavement doorways, and detached suburban housing across Trentham and Newcastle-under-Lyme.",
      typicalRoutes:
        "Superb transit via the M6 motorway (Junctions 15 and 16), A500 'D-road' linking the city, and A50 toward Derby and the East Midlands.",
    },
    faqs: [
      {
        question:
          "Do you move fragile ceramics and delicate pottery collections in Stoke?",
        answer:
          "Yes. We take extra care with fragile porcelain and ceramics, using premium bubble wrap, boxes, and gentle handling.",
      },
      {
        question: "Can you assist with student moves at Keele University?",
        answer:
          "Yes. We service student accommodation and private rentals around Keele University and Staffordshire University.",
      },
      {
        question: "What vehicle do you use for house moves in Stoke?",
        answer:
          "We deploy 3.5t Luton vans with 500kg tail lifts, providing ample volume for standard 1-to-3 bedroom home contents.",
      },
    ],
  },
  {
    id: "wolverhampton",
    slug: "wolverhampton",
    name: "Wolverhampton",
    region: "West Midlands",
    county: "West Midlands",
    postcodePrefixes: ["WV"],
    intro:
      "Providing dependable home and commercial removals across Wolverhampton and the Black Country. Our local experience guarantees punctual loading and direct transit nationwide.",
    description:
      "Providing dependable home and commercial removals across Wolverhampton and the Black Country with dedicated Luton van transport.",
    localNotes: {
      parking:
        "City centre streets operate pay-and-display schemes; residential areas such as Tettenhall and Penn offer straightforward suburban driveway parking off-peak loading avoids pedestrian zone restrictions.",
      access:
        "Suburban semi-detached houses with wide access, alongside high-density multi-storey apartment blocks near the city core.",
      typicalRoutes:
        "Direct connection to the M54 heading west toward Shropshire, M6 to the east, and the A4150 ring road.",
    },
    faqs: [
      {
        question: "Do you service moves between Wolverhampton and Birmingham?",
        answer:
          "Yes. We regularly manage short-haul relocations across the West Midlands conurbation with rapid turnaround.",
      },
      {
        question: "Can you provide two helpers to carry furniture upstairs?",
        answer:
          "Yes. Our two-man and three-man teams take care of all heavy lifting and place items directly into your designated rooms.",
      },
      {
        question: "Are my goods protected during the move?",
        answer:
          "All items in our care are protected by padded transit blankets, heavy straps, and goods in transit cover protected by £50,000 Goods in Transit insurance cover.",
      },
    ],
  },
  {
    id: "swansea",
    slug: "swansea",
    name: "Swansea",
    region: "Wales",
    county: "West Glamorgan",
    postcodePrefixes: ["SA"],
    intro:
      "Serving Swansea, the Gower Peninsula, and South West Wales with dedicated removals. We move homes, coastal holiday lets, and student apartments with dependable care.",
    description:
      "Serving Swansea, the Gower Peninsula, and South West Wales with dedicated removals and careful van packing.",
    localNotes: {
      parking:
        "Uplands and Brynmill feature densely parked terraced streets; Swansea Marina offers dedicated residential loading areas advance notice ensures legal loading bays in coastal areas.",
      access:
        "Steep hillside streets in Townhill and Mount Pleasant require skilled van placement, while modern Marina apartments feature lift access.",
      typicalRoutes:
        "Main route via the M4 motorway western terminus (Junctions 44 to 47) and the A483 Fabian Way entry corridor.",
    },
    faqs: [
      {
        question:
          "Do you service student moves for Swansea University's Bay and Singleton campuses?",
        answer:
          "Yes. We handle student moves across both campuses and private rentals throughout Brynmill and Uplands.",
      },
      {
        question: "Can you transport items out to the Gower Peninsula?",
        answer:
          "Yes. We service villages and properties across the Gower with drivers accustomed to narrow rural lanes.",
      },
      {
        question: "Do you move households from Swansea across to England?",
        answer:
          "Yes. We frequently haul furniture along the M4 corridor to Bristol, the Midlands, and Greater London.",
      },
    ],
  },
  {
    id: "oxford",
    slug: "oxford",
    name: "Oxford",
    region: "Oxfordshire",
    county: "Oxfordshire",
    postcodePrefixes: ["OX"],
    intro:
      "Delivering high-standard removals and specialized transport across Oxford and Oxfordshire. We navigate historic university streets, low-emission rules, and family homes with meticulous care.",
    description:
      "Delivering high-standard removals across Oxford and Oxfordshire. We navigate historic city streets and low-emission zones with meticulous care.",
    localNotes: {
      parking:
        "Oxford operates a Zero Emission Zone (ZEZ) pilot in the historic core and widespread Controlled Parking Zones; loading access must be carefully coordinated routes are planned around Oxford Zero Emission Zone requirements.",
      access:
        "Historic college properties and Victorian terraced houses in Jericho and East Oxford have narrow doorways and steep flights of stairs.",
      typicalRoutes:
        "Direct connection to the A34 dual carriageway linking north to the M40 (Junction 9) and south to the M4, plus the A40 ring road.",
    },
    faqs: [
      {
        question:
          "Are your vans able to access central Oxford despite low emission rules?",
        answer:
          "We coordinate loading in accordance with city council regulations, arranging permissible access routes or parking just outside restricted zones.",
      },
      {
        question:
          "Do you handle academic book collections and fragile library furniture?",
        answer:
          "Yes. We use heavy-duty book crates, protective wrapping, and careful handling for personal libraries and academic studies.",
      },
      {
        question: "How long does a move between Oxford and London take?",
        answer:
          "Via the M40, transit typically takes between 60 and 90 minutes, making same-day relocations straightforward.",
      },
    ],
  },
  {
    id: "cambridge",
    slug: "cambridge",
    name: "Cambridge",
    region: "Cambridgeshire",
    county: "Cambridgeshire",
    postcodePrefixes: ["CB"],
    intro:
      "Providing careful removals and man and van transport throughout Cambridge and the surrounding science parks. We handle townhouses, university accommodations, and family residences with precision.",
    description:
      "Providing careful removals throughout Cambridge and surrounding science parks. Handling townhouses and university accommodations with precision.",
    localNotes: {
      parking:
        "Historic city centre roads are pedestrianised or access-controlled with rising bollards; residential streets in Mill Road and Romsey have tight terraced parking bollard lowering passes are arranged with local city marshals.",
      access:
        "Narrow corridors and preserved timber doorways in historic properties require careful furniture protection; new science hub developments feature generous loading docks.",
      typicalRoutes:
        "Direct road access via the M11 motorway to London, A14 connecting to the Midlands and East Coast, and A428 toward Bedford.",
    },
    faqs: [
      {
        question:
          "How do you navigate Cambridge's rising bollards and restricted streets?",
        answer:
          "We liaise with Cambridge City Council and college porters to obtain bollard access codes and loading permits ahead of moving day.",
      },
      {
        question:
          "Can you move laboratory or tech equipment from Cambridge Science Park?",
        answer:
          "We transport standard office tech, monitors, and light commercial equipment with anti-shock blankets and tail-lift loading.",
      },
      {
        question: "Do you assist with university student relocations?",
        answer:
          "Yes. We support Cambridge collegiate students with end-of-term and postgraduate room moves across the UK.",
      },
    ],
  },
  {
    id: "norwich",
    slug: "norwich",
    name: "Norwich",
    region: "Norfolk",
    county: "Norfolk",
    postcodePrefixes: ["NR"],
    intro:
      "Serving Norwich and East Anglia with reliable removals and nationwide transport. We manage the city's medieval streets, modern developments, and broadland properties with dependable care.",
    description:
      "Serving Norwich and Norfolk with reliable removals and nationwide transport. Punctual, safe moving for homes and businesses.",
    localNotes: {
      parking:
        "Norwich Lanes area features cobbled, pedestrian-friendly streets requiring specific loading time slots; the Golden Triangle has resident permit bays morning loading windows provide legal access to historic lanes.",
      access:
        "Historic buildings with low beams and twisting staircases require dismantling of large wardrobes and bed frames before moving.",
      typicalRoutes:
        "Transit via the A11 dual carriageway toward Cambridge and London, A47 linking east-west, and the Norwich Northern Distributor Road (A1270).",
    },
    faqs: [
      {
        question: "Do you service relocations between Norwich and London?",
        answer:
          "Yes. The A11/M11 corridor provides a reliable direct route, allowing same-day door-to-door transit between Norwich and London.",
      },
      {
        question:
          "Can your team dismantle flat-pack furniture in the Golden Triangle?",
        answer:
          "Yes. Our movers carry power tools to take down and rebuild furniture in tight terraced bedrooms.",
      },
      {
        question:
          "Do you service student moves at the University of East Anglia (UEA)?",
        answer:
          "Yes. We regularly assist UEA students with room moves, storage transfers, and long-distance relocations.",
      },
    ],
  },
  {
    id: "exeter",
    slug: "exeter",
    name: "Exeter",
    region: "Devon",
    county: "Devon",
    postcodePrefixes: ["EX"],
    intro:
      "Our removals service connects Exeter and Devon with destinations across the South West and the entire UK. We provide professional home moving, student transport, and furniture collection.",
    description:
      "Our removals service connects Exeter and Devon with destinations nationwide. Professional home moving and furniture collection with Luton vans.",
    localNotes: {
      parking:
        "Central Exeter streets near the Cathedral and Quay require careful parking coordination; suburban St Leonards and Pennsylvania have permit schemes quay vehicular access is pre-cleared with harbour managers.",
      access:
        "Georgian townhouses and historic city centre flats feature elevated steps, while modern housing in Cranbrook offers level driveway access.",
      typicalRoutes:
        "Excellent transit via the southern terminus of the M5 motorway, A30 toward Cornwall, and A38 toward Plymouth.",
    },
    faqs: [
      {
        question:
          "Do you offer moves between Exeter and London or the Midlands?",
        answer:
          "Yes. With the M5 directly accessible, we run regular direct transit journeys connecting Exeter to Bristol, Birmingham, and London.",
      },
      {
        question:
          "Can you assist with moves for University of Exeter students?",
        answer:
          "Yes. We support students moving to and from Streatham and St Luke's campuses with flexible van options.",
      },
      {
        question: "How do you protect furniture during moves in Devon?",
        answer:
          "We wrap all furniture in thick removal blankets, securing everything with heavy-duty ratchet straps inside the van.",
      },
    ],
  },
  {
    id: "york",
    slug: "york",
    name: "York",
    region: "North Yorkshire",
    county: "North Yorkshire",
    postcodePrefixes: ["YO"],
    intro:
      "Delivering high-care removals across historic York and North Yorkshire. We navigate ancient medieval gates, narrow cobbled streets, and suburban developments with careful driving and expert packing.",
    description:
      "Delivering high-care removals across historic York and North Yorkshire. Expert navigation and careful furniture handling for domestic and office moves.",
    localNotes: {
      parking:
        "Historic city centre walls enforce vehicle access restrictions (footstreets hours); permits or early-morning access waivers are essential deliveries are scheduled before 10:30 AM before pedestrian footstreets close.",
      access:
        "Medieval timber-framed buildings and narrow Georgian properties have low ceilings and tight staircases; modern suburban areas offer easy driveway parking.",
      typicalRoutes:
        "Rapid transit connections via the A64 dual carriageway linking to the A1(M) and M1 motorways, plus the A1237 outer ring road.",
    },
    faqs: [
      {
        question:
          "How do you handle moving in York's pedestrianised footstreets zone?",
        answer:
          "We schedule arrivals outside restricted hours (typically before 10:30 AM or after 5:00 PM) or arrange council access permits.",
      },
      {
        question: "Do you service moves for University of York students?",
        answer:
          "Yes. We support students across Campus West, Campus East, and private shared housing with cost-effective man and van services.",
      },
      {
        question:
          "Can you transport items from York down to London or Manchester?",
        answer:
          "Yes. We provide direct motorway transit via the A64, A1(M), and M62 corridors with door-to-door delivery.",
      },
    ],
  },
];
