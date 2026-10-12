import type { FAQ } from "@/types";

export const faqs: FAQ[] = [
  {
    id: "booking-notice",
    category: "booking",
    question: "How far in advance should I book my move?",
    answer:
      "We recommend booking 1 to 2 weeks in advance to secure your preferred date and time, especially for peak weekend slots. However, we also cater to same-day and urgent bookings subject to van and crew schedule.",
  },
  {
    id: "booking-deposit",
    category: "booking",
    question: "Do I need to pay a deposit to secure my booking?",
    answer:
      "A booking deposit policy applies to confirm vehicle and crew allocation [TODO: confirm deposit requirements e.g. whether a deposit is required, amount or percentage, and refund conditions].",
  },
  {
    id: "service-inclusions",
    category: "services",
    question: "What is included with your removals and man and van service?",
    answer:
      "Every booking includes a clean, fully equipped 3.5t Luton box van with hydraulic tail lift, a professional driver/porter who assists with loading, quilted transit blankets, and heavy-duty tie-down straps. Additional helpers can be added to your booking as required.",
  },
  {
    id: "minimum-hours",
    category: "pricing",
    question: "Is there a minimum booking time for hourly bookings?",
    answer:
      "For hourly hire jobs, a minimum booking window applies [TODO: confirm minimum booking hours e.g. 2 hours minimum], after which time is calculated in clear increments.",
  },
  {
    id: "cancellation-policy",
    category: "booking",
    question: "What happens if I need to cancel or reschedule my move?",
    answer:
      "We understand that moving dates can shift due to delayed property completion or tenancy changes. Notice periods and fee terms apply for cancellations or date changes [TODO: confirm cancellation policy and notice window e.g. 48 hours notice for full refund].",
  },
  {
    id: "items-moved",
    category: "services",
    question: "What items can you move, and are there any prohibited items?",
    answer:
      "We transport domestic and commercial furniture, boxed possessions, appliances, mattresses, and shop stock. We strictly cannot transport hazardous items including open containers of petrol, gas canisters, paint thinners, illegal substances, or livestock [TODO: confirm full restricted items list].",
  },
  {
    id: "specialist-items",
    category: "services",
    question:
      "Can you move heavy specialist items like pianos or gym equipment?",
    answer:
      "Yes. We transport upright pianos, multi-gym equipment, and commercial appliances using tail lifts, heavy-duty dollies, and piano straps. Please inform us during quotation so we allocate suitable equipment and team size.",
  },
  {
    id: "waste-clearance",
    category: "services",
    question: "Do you offer property clearances and rubbish removal?",
    answer:
      "Yes. Our waste removal and property clearance service clears unwanted furniture, appliances, and non-hazardous junk from houses, garages, sheds, and commercial premises.",
  },
  {
    id: "waste-duty-of-care",
    category: "services",
    question: "How do you ensure waste is disposed of legally and responsibly?",
    answer:
      "We strictly adhere to UK waste regulations and hold an Environment Agency waste carrier registration [TODO: confirm Environment Agency licence number]. Goods are sorted, reusable items are donated where possible, and non-reusable waste is tipped only at authorized commercial recycling facilities.",
  },
  {
    id: "transit-insurance",
    category: "general",
    question: "Are my items covered by insurance while in transit?",
    answer:
      "All goods professionally handled and secured within our vehicles are protected by Goods in Transit insurance and Public Liability indemnity [TODO: confirm goods in transit and public liability coverage limits e.g. £50,000 Goods in Transit, £1,000,000 Public Liability, and excess terms].",
  },
  {
    id: "parking-responsibility",
    category: "general",
    question: "Who is responsible for parking permits and loading bay access?",
    answer:
      "Customers are responsible for providing legal parking or arranging temporary parking bay suspensions with their local council outside both pickup and destination addresses. Any unavoidable parking penalty charges incurred due to lack of arranged parking will be charged to the customer [TODO: confirm parking penalty terms].",
  },
  {
    id: "toll-congestion-charges",
    category: "pricing",
    question:
      "Are toll roads, London Congestion Charge, and Clean Air Zones included in the quote?",
    answer:
      "Our vehicles are compliant with standard clean air and ULEZ regulations. Road tolls (such as the Dartford Crossing or M6 Toll) and the London Congestion Charge are addressed in your quote [TODO: confirm whether ULEZ and Congestion Charge are billed additionally or bundled into fixed quotes].",
  },
];
