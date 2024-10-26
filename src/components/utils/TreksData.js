import QuickFacts from "../Services/QuickFacts";

export const treksData = [
  {
    name: "Kedarkantha Trek",
    title: "Kedarkantha Trek - Gods Own Land",
    tourCode: "122132131",
    price: "₹3999",
    overview: {
      title: "Kedarkantha Trek Overview",
      paragraphs: [
        "Kedarkantha Trek is one of the most famous winter treks in India. The trek starts from a village called Sankri in the Uttarkashi district and gains the maximum height of 12,500 feet (3,800 m) at the Kedarkantha Peak. There are other routes that can connect you to the Kedarkantha Peak, like an eastern ridge, western ridge, and Phulara ridge. But, the villages connected to these areas are not much explored so most of the trekkers use the Sankri route.",
        "Being a winter trek, the Kedarkantha Trek receives heavy snowfall and is one of the best treks for beginners. It is not a short trek, it takes around 5-6 days to the summit and back (if you are starting from Dehradun). Kedarkantha trek is located in the range of Govind Wildlife Sanctuary in Uttarkashi district of Uttarakhand and the best time to visit is from December to April.",
        "As soon as you arrive at Sankri, you start to capture the wonderful views of the mountains and the diverse flora & fauna of the area. With these amazing imagery in mind, you move forward to Juda ka Talab from Sanakri and you see clearings in the middle of the forest, multiple colors, meadow, and sun rays shining down the lovely forest will make you mesmerized and amazed.",
        "A stunning view of snow capped ranges like Har ki Dun from Juda ka Talab will make you feel lost in the beauty of nature. In winters, Juda ka Talab is completely frozen due to a minimum temperature of -7 degrees, and this lake is also known as a frozen lake of India.",
        "Finally going from base camp Juda ka Talab to Kedarkantha peak is one of the best feelings in the world. To witness the beauty of the sun rising from the peak can bring joy to your mundane life. This is just magical to see such a splendid view that strikes you at once.",
        "In addition, you can explore more at the Sankri village while we stop there for a few hours. On your way to the Sankri village, you can also visit a village called Lakhamandal. Based on ancient beliefs, this village keeps a mythological history of Mahabharata. According to this belief, the fifth brother of Pandava named Sahadeva visited this place and buried lakhs of Shivling under the range of this village and much more.",
        "In order to reach Kedarkantha trek from Delhi, you need to travel to Dehradun and catch the bus to Sankri from Dehradun Railway Station.",
      ],
    },
    duraton: "5 Days",
    altitude: 12500,
    Grade: ["Easy", "Moderate"],
    location: {
      state: "Uttarakhand",
      district: "Uttarkashi",
      wildlifeSanctuary: "Govind Wildlife Sanctuary",
    },
    highlights: [
      "Sankri village",
      "Juda ka Talab",
      "Kedarkantha Peak",
      "Har ki Dun views",
      "Frozen lake at Juda ka Talab",
      "Sunrise at Kedarkantha Peak",
    ],
    bestTimeToVisit: ["December", "January", "February", "March", "April"],
    itinerary: [
      {
        day: "Day 1",
        title: "Dehradun to Sankri",
        description: `The Kedarkantha Trek starts from Dehradun city, where trekkers will be picked up at 6:30 am from Dehradun ISBT. 
    We begin the journey towards Sankri, which is located 230 km from Dehradun and takes approximately 7-8 hours by road. 
    The drive offers stunning views of the Himalayan mountains and passes through Mussoorie, Purola, and Mori before reaching Sankri. 
    On the way, trekkers pass through Govind National Park, which is home to diverse flora and fauna.

    Once we arrive at Sankri, trekkers will check into The Crazy Mountaineers Homestay. 
    This is where you’ll rest and prepare for the next day's trek.`,
        briefOverview: {
          altitude: "6,400 feet",
          driveDistance: "230 km, approx. 8 hours",
          arrivalTime: "5:00 pm",
          network: "Jio & BSNL (limited)",
        },
      },
      {
        day: "Day 2",
        title: "Sankri to Juda ka Talab",
        description: `After breakfast, the trek officially begins as we move towards Juda ka Talab via Sor village. 
    The distance of the trek is about 4 km, taking around 5 hours. The trail passes through dense pine forests, 
    maple trees, a few streams, and opens out to beautiful meadows. Juda ka Talab is an ideal camping destination with a lake on one side 
    and thick forests on the other, making it a serene spot to camp for the night.`,
        briefOverview: {
          altitude: "6,400 feet to 9,100 feet",
          trekDistance: "4 km, approx. 5 hours",
          highlights:
            "Trail passes through dense pine forests, maple trees, and meadows",
          stay: "Tents",
        },
      },
      {
        day: "Day 3",
        title: "Juda ka Talab to Kedarkantha Base",
        description: `The third day of the trek takes us from Juda ka Talab to the Kedarkantha base camp, located at an altitude of 11,250 feet. 
    The 4 km trek will take around 2.5 hours. The trail is easy and scenic, passing through the dense forests of Oak & Pine. 
    If trekking in winter, snow begins to appear around the 10,400 feet mark. 
    At the base camp, the evening sky is dotted with stars, offering mesmerizing views of the surrounding peaks.`,
        briefOverview: {
          altitude: "9,100 feet to 11,250 feet",
          trekDistance: "4 km, approx. 2.5 hours",
          highlights:
            "Snow-capped peaks like Bandarpoonch, Swargarohini, Kala Nag visible",
          stay: "Tents",
        },
      },
      {
        day: "Day 4",
        title: "Kedarkantha Base to Kedarkantha Peak & Descent to Base Camp",
        description: `The fourth day is the summit day! We ascend from 11,250 feet to 12,500 feet to reach the Kedarkantha Peak. 
    The trek to the peak takes about 3 hours, and from the top, trekkers can enjoy a breathtaking 360-degree view of the snow-clad Himalayan ranges. 
    After spending some time at the summit, we descend back to the base camp near Juda Ka Talab.`,
        briefOverview: {
          altitude: "11,250 feet to 12,500 feet to 8,900 feet",
          trekDistance: "6 km, approx. 7 hours",
          highlights:
            "Spectacular summit views, descent to base camp by afternoon",
          stay: "Tents",
        },
      },
      {
        day: "Day 5",
        title: "Juda Camp to Sankri via Hargawn & Return to Dehradun",
        description: `On the final day, we descend from Juda Camp to Sankri via Hargawn. The 4 km trek takes approximately 3 hours. 
    Once back at Sankri, trekkers will be driven back to Dehradun, completing the trek. The 200 km journey back to Dehradun 
    will take around 8 hours, and you'll reach Dehradun by late evening.`,
        briefOverview: {
          altitude: "8,900 feet to 6,400 feet",
          trekDistance: "4 km, approx. 3 hours",
          driveDistance: "200 km, approx. 8 hours",
        },
      },
    ],
    QuickFacts: {
      duration: "7 Days / 6 Nights",
      highestPoint: "11,675 ft (Har Ki Dun Valley)",
      distance: "47 km (round trip)",
      difficulty: "Easy to Moderate",
      temperature: {
        day: "10℃ to 15℃",
        night: "2℃ to -5℃",
      },
      startingPoint: "Sankri Village",
      baseCamp: "Sankri (reachable from Dehradun)",
      nearest: {
        railwayStation: "Dehradun",
        airport: "Jolly Grant Airport, Dehradun",
      },
      atm: "Last ATM is in Purola before you start the trek",
      bestTimeToVisit: ["April to Mid-June", "October to Mid-November"],
    },
    howToReach: {
      byAir:
        "Jolly Grant Airport in Dehradun is about 25 km from the city. Daily flights from Delhi are available.",
      byTrain: [
        {
          name: "Nandadevi Express",
          trainNo: 12205,
          departure: "11:50 PM",
          arrival: "5:40 AM",
        },
        {
          name: "Dehradun Express",
          trainNo: 12687,
          departure: "9:10 PM",
          arrival: "5:00 AM",
        },
      ],
      byBus:
        "Regular bus services from ISBT Kashmere Gate, Delhi, to Dehradun ISBT.",
    },
    essentials: [
      {
        category: "Backpack & Rain Cover",
        items: [
          "Backpack & rain cover (50 - 60 ltr) with comfortable shoulder straps",
          "Day pack + rain cover (20 - 30 ltr) if hiring a mule or porter",
        ],
      },
      {
        category: "Walking Gear",
        items: [
          "Walking stick (At least one advisable)",
          "Head torch - 1 Nos.",
          "Water bottle/Hydration pack - 2 bottles of one litre each",
          "Hydration pack users: 1 hydration pack + 1 litre bottle",
          "Carry at least one thermos flask",
          "Snacks: Energy bars, dry fruits, electral/ors",
        ],
      },
      {
        category: "Personal Medical Kit",
        items: ["Consult your doctor"],
      },
      {
        category: "Clothing",
        items: [
          "2 Full sleeves T-shirts (Non-cotton)",
          "1 Fleece T-shirt",
          "1 Fleece jacket (Alternative: woollen sweater)",
          "1 Down feather / Hollofil jacket",
          "Wind & waterproof jacket & pants - 1 Pair",
          "Thermal inners (upper and lower) - 1 Pair",
          "2 Synthetic trek pants (avoid shorts, fitting denims, capris)",
          "1 Poncho",
        ],
      },
      {
        category: "Head Protection",
        items: [
          "1 Sun cap (covering the neck as well)",
          "1 Woollen cap",
          "1 Balaclava",
          "1 Neck-gaiters",
          "Sunglasses (dark with side cover, U/V protected)",
          "For spectacles wearers: (A) Contact lenses, (B) Photochromatic glasses",
        ],
      },
      {
        category: "Footwear",
        items: [
          "1 Pair of trekking shoes (waterproof, high ankle with good grip)",
          "1 Pair of floaters/flip-flops (optional)",
          "5 Pairs of cotton socks",
          "3 Pairs of woollen socks",
          "1 Pair of gaiters (will be notified if required)",
        ],
      },
      {
        category: "Hand Protection",
        items: [
          "1 Pair of waterproof gloves",
          "1 Pair of fleece/woollen gloves",
        ],
      },
      {
        category: "Personal Utilities",
        items: [
          "Sunscreen cream",
          "Hand sanitizer",
          "Moisturiser",
          "Antibacterial powder",
          "Toilet paper & wipes",
          "Toothbrush and toothpaste",
          "Lip balm",
          "Quick dry towel",
        ],
      },
    ],
    costTerms: {
      inclusions: [
        "Accommodation (Home stay, Camping)",
        "All vegetarian nutritious meals on trek (Veg. + Organic Food)",
        "Breakfast, Lunch, Tea/Snacks, Hot soup, Dinner, coffee",
        "Trek equipment: High-quality Dome tents (Triple/Quad sharing), Sleeping bags, Sleeping mattress, Liner, Kitchen tent, Dining tent, Utensils, Toilet tents, Helper, Kitchen team, Oxygen cylinders, Microspikes, Gaiters, and crampons (if required)",
        "Local Team, Cooks, Porters, First aid box",
        "Technical equipment for safety, Walkie-talkies for communication",
        "Good experience with Hindi, English guide",
        "All necessary permits and entry fees",
        "First aid medical kits, stretcher, and oxygen cylinder",
        "Mountaineering qualified & professional trek Leader, guide, and Support staff (Certified Team)",
        "24X7 Customer Service with a 50+ Professional Team",
        "100% Safety",
        "No Hidden Charges",
        "Transport from Dehradun to Sankri and return (According to itinerary) on additional charges (+2000 INR per head)",
        "Pickup Points: Dehradun Railway Station (6:30 AM to 7:00 AM), Drop Points: Dehradun Railway Station (4:30 PM to 6:00 PM)",
        "All transfers in a shared taxi",
      ],

      exclusions: [
        "Any kind of personal expenses",
        "Food during the transit (Dehradun to Sankri & Sankri to Dehradun)",
        "Insurance",
        "Mules or porter to carry personal luggage",
        "Anything not specifically mentioned under the inclusions",
        "Any kind of emergency evacuation charges",
        "GST 5%",
      ],

      additionalNotes: [
        {
          note: "For groups of 5+ members, transportation is available from Dehradun to Dehradun. For smaller groups, you will be shifted with another group if available, otherwise, your package will be from Sankri to Sankri.",
        },
        {
          note: "Personal luggage should be carried by the trekker. However, if you wish to offload your backpack, you can give it to a mule.",
        },
        {
          offloadingCharges: {
            advance: "INR 1200 if paid online 10 days in advance",
            onSpot: "INR 2000 if informed after reaching Sankri",
            weightLimit:
              "Backpack cannot weigh more than 11 kg and must have a waterproof cover. Suitcases/strolleys/bags are not allowed.",
          },
        },
      ],
    },
    importantNotes: [
      "Backpack offloading costs INR 1200 online (10 days in advance), INR 2000 on-site",
      "Group transport is arranged for 5+ members; otherwise, you may be shifted to another group",
    ],
    faqData: [
      {
        menuName: "What is the distance of the KedarKantha trek from Sankri?",
        items: [
          "The total distance from Sankri to Kedarkantha Peak & back is 23 Km.",
        ],
      },
      {
        menuName: "Is there any Temple on the summit of the trek?",
        items: [
          "Kedarkantha trek should not be confused with Kedarnath trek. There is no temple at the peak but you will find a small shrine dedicated to Lord Shiva.",
        ],
      },
      {
        menuName: "What is the nearest ATM from Sankri?",
        items: [
          "The last ATM on the way to Sankri is located in Mori, but sometimes due to network or cash problems, the withdrawal becomes difficult.",
          "Before Mori, you will also find an ATM in Purola.",
          "To avoid any last minute hassles and unnecessary problems, it is advised to withdraw cash from any ATM in Dehradun.",
        ],
      },
      {
        menuName: "What is the snowfall time in Kedarkantha?",
        items: [
          "You can expect to see good snow in Kedarkantha if you plan your trip from mid-December to early April.",
        ],
      },
      {
        menuName: "What is the altitude of KedarKantha?",
        items: [
          "The maximum altitude of the Kedarkantha trek at the peak is 12,500 ft. (3,800m) above sea level.",
        ],
      },
      {
        menuName: "Can I visit Kedarkantha in summer?",
        items: [
          "Yes, of course, the Kedarkantha trek is a 12-month trek, and you can visit here at any point in time.",
        ],
      },
      {
        menuName: "Kedarkantha Trek Cancellation Policies",
        items: [
          "Cancellations prior to 24 days from the start of the trek:",
          "- Book any other trek till one year or get 95% refund (Note: If the trek charges are more, the balance needs to be paid by the trekker).",
          "",
          "Cancellations between 24 days and 14 days to the start of the trek:",
          "- Choose to go for the same trek, with any other batch, till year or get 70% refund.",
          "",
          "Cancellations between 14 days and 10 days to the start of the trek:",
          "- Choose to go on the same trek, in the same season, with any other batch or get 50% refund.",
          "",
          "Cancellations less than 10 days to the start of the trek:",
          "- Transfer your trek (same trek, same batch) to your friend. No cash refund.",
          "",
          "Note:",
          "- Change of trek batch is dependent on the availability of seats in the batch.",
          "- In case of transferring a trek to a friend, he/she should satisfy all the mandatory requirements put forward by THE CRAZY MOUNTAINEERS.",
          "- THE CRAZY MOUNTAINEERS holds the right to change/cancel the policies, without prior notice.",
        ],
      },
    ],
  },
  // {
  //   name: "Rupin Pass Trek",
  //   overview:
  //     "The Rupin Pass Trek is a thrilling high-altitude trek that crosses the Rupin River and takes you from Uttarakhand to Himachal Pradesh. The trek starts from Dhaula in Uttarakhand at 5,100 feet and reaches a height of 15,300 feet at the Rupin Pass, ending in Sangla. It offers stunning views of waterfalls, hanging villages, snow bridges, and alpine meadows.",
  //   difficulty: "Moderate to Difficult",
  //   altitude: 15300, // feet
  //   location: {
  //     state: "Uttarakhand & Himachal Pradesh",
  //     startPoint: "Dhaula (Uttarakhand)",
  //     endPoint: "Sangla (Himachal Pradesh)",
  //   },
  //   highlights: [
  //     "Dhaula village",
  //     "Rupin waterfall",
  //     "Snow bridges",
  //     "Kinnaur Temple",
  //     "Meadows of Sangla Kanda",
  //     "View of Kinner Kailash",
  //   ],
  //   bestTimeToVisit: ["May", "June", "September", "October"],
  //   itinerary: [
  //     {
  //       day: 1,
  //       route: "Dehradun to Dhaula",
  //       description:
  //         "200 km drive from Dehradun to Dhaula through beautiful mountain roads.",
  //       altitude: { start: 2000, end: 5100 }, // feet
  //       distance: "200 km",
  //       travelTime: "8-9 hours",
  //       accommodation: "Homestay",
  //       network: "Limited connectivity (BSNL)",
  //     },
  //     {
  //       day: 2,
  //       route: "Dhaula to Sewa",
  //       description:
  //         "Trek along the Rupin River, passing through forests and small hamlets to reach Sewa village.",
  //       altitude: { start: 5100, end: 6300 }, // feet
  //       distance: "9 km",
  //       travelTime: "6 hours",
  //       accommodation: "Homestay",
  //     },
  //     {
  //       day: 3,
  //       route: "Sewa to Jhaka",
  //       description:
  //         "Trek through beautiful villages, apple orchards, and forests to reach Jhaka, a hanging village.",
  //       altitude: { start: 6300, end: 8700 }, // feet
  //       distance: "8 km",
  //       travelTime: "5-6 hours",
  //       accommodation: "Tents",
  //     },
  //     {
  //       day: 4,
  //       route: "Jhaka to Dhanderas Thatch",
  //       description:
  //         "Trek through snow bridges and dense forests to reach the base camp, Dhanderas Thatch.",
  //       altitude: { start: 8700, end: 11680 }, // feet
  //       distance: "11 km",
  //       travelTime: "6-7 hours",
  //       accommodation: "Tents",
  //     },
  //     {
  //       day: 5,
  //       route: "Dhanderas Thatch to Upper Waterfall Camp",
  //       description:
  //         "Climb through snow patches and reach the Upper Waterfall Camp.",
  //       altitude: { start: 11680, end: 13200 }, // feet
  //       distance: "3.5 km",
  //       travelTime: "4 hours",
  //       accommodation: "Tents",
  //     },
  //     {
  //       day: 6,
  //       route: "Upper Waterfall Camp to Rupin Pass to Ronti Gad",
  //       description: "Summit Rupin Pass and descend to Ronti Gad.",
  //       altitude: { start: 13200, peak: 15300, end: 13000 }, // feet
  //       distance: "10 km",
  //       travelTime: "10 hours",
  //       accommodation: "Tents",
  //     },
  //     {
  //       day: 7,
  //       route: "Ronti Gad to Sangla",
  //       description:
  //         "Descend through alpine meadows to Sangla village in Himachal Pradesh.",
  //       altitude: { start: 13000, end: 8900 }, // feet
  //       distance: "12 km",
  //       travelTime: "6 hours",
  //       accommodation: "Homestay",
  //     },
  //   ],
  //   howToReach: {
  //     byAir:
  //       "Jolly Grant Airport in Dehradun is about 25 km from the city. Flights from Delhi are available.",
  //     byTrain: [
  //       {
  //         name: "Nandadevi Express",
  //         trainNo: 12205,
  //         departure: "11:50 PM",
  //         arrival: "5:40 AM",
  //       },
  //       {
  //         name: "Dehradun Express",
  //         trainNo: 12687,
  //         departure: "9:10 PM",
  //         arrival: "5:00 AM",
  //       },
  //     ],
  //     byBus:
  //       "Regular bus services from ISBT Kashmere Gate, Delhi, to Dehradun ISBT.",
  //   },
  //   essentials: {
  //     gear: [
  //       "Backpack & rain cover (50-60 L)",
  //       "Walking stick",
  //       "Head torch",
  //       "Water bottle",
  //       "Energy bars, dry fruits",
  //       "Personal medical kit",
  //     ],
  //     clothing: [
  //       "Non-cotton full sleeve t-shirts",
  //       "Fleece jacket",
  //       "Down feather jacket",
  //       "Waterproof jacket & pants",
  //       "Trek pants",
  //       "Woolen socks",
  //     ],
  //     footwear: [
  //       "Waterproof trekking shoes (high ankle)",
  //       "Cotton socks",
  //       "Flip-flops",
  //     ],
  //     accessories: ["Sun cap", "Woolen cap", "Sunglasses", "Trekking pole"],
  //   },
  //   cost: {
  //     inclusions: [
  //       "Accommodation (Homestay, Camping)",
  //       "Vegetarian meals",
  //       "Trek equipment",
  //       "First aid and oxygen cylinders",
  //       "Experienced trek leader",
  //       "Transport from Dehradun to Dhaula and return from Sangla",
  //     ],
  //     exclusions: [
  //       "Personal expenses",
  //       "Food during transit",
  //       "Insurance",
  //       "Mules or porters",
  //       "Emergency evacuation charges",
  //       "GST 5%",
  //     ],
  //   },
  //   importantNotes: [
  //     "Backpack offloading available at extra cost",
  //     "Group transport is arranged for 5+ members",
  //   ],
  // },
  // {
  //   name: "Gaumukh Tapovan Trek",
  //   overview:
  //     "The Gaumukh Tapovan Trek derives its name from Cow’s Mouth as earlier it used to look like a Cow’s mouth and the river Bhagirathi emerging out of it. The trek begins at Gagotri and follows through the rich forest diversity which gradually decreases as we climb higher to our destination. While on Gaumukh Tapovan Trek, you will be able to get clear views of the magnificent Mount Shivling & Bhagirathi Mastiff.",
  //   journey:
  //     "The Journey of Gaumukh Tapovan Trek begins from Rishikesh. The trekkers will travel from Rishikesh to Gangotri via road. Gangotri is located on the banks of river Bhagirathi.",
  //   trail:
  //     "The trek begins with walking on a marked trail that goes through the Gangotri National Park. You will see many pine trees that grow in this area and will be able to camp near the holy Bhagirathi river that will accompany you for the entire trek.",
  //   highlights: [
  //     "Views of Mount Shivling and Bhagirathi Mastiff",
  //     "Walk through Gangotri National Park",
  //     "Camping near Bhagirathi River",
  //     "Breathtaking sunrise views",
  //     "Mount Manda at 6,200 m",
  //     "Final climb with loose rocks and thrilling experience",
  //   ],
  //   itinerary: [
  //     {
  //       day: 1,
  //       description: "Dehradun to Gangotri",
  //       altitude: "10,170 ft",
  //       distance: "241 Km drive - approx. 8 hours",
  //       notes: [
  //         "Pickup from Dehradun ISBT",
  //         "Network - Available",
  //         "Stay at Guest House",
  //       ],
  //     },
  //     {
  //       day: 2,
  //       description: "Acclimatisation at Gangotri",
  //       altitude: "10,170 ft",
  //       activities: [
  //         "Explore local area",
  //         "Visit Gangotri Temple",
  //         "Network available",
  //         "Stay at Guest House",
  //       ],
  //     },
  //     {
  //       day: 3,
  //       description: "Gangotri to Chirbassa",
  //       altitude: "11,680 ft",
  //       trek: "9 Km walk - 5 to 6 hours",
  //       highlights: "Trekking through Gangotri National Park",
  //     },
  //     {
  //       day: 4,
  //       description: "Chirbassa to Bhojwasa",
  //       altitude: "12,430 ft",
  //       trek: "5 Km walk - 2 to 3 hours",
  //       highlights: "View of Mount Shivling",
  //     },
  //     {
  //       day: 5,
  //       description: "Bhojwasa to Gaumukh Tapovan",
  //       altitude: "14,600 ft",
  //       trek: "5 to 6 hours",
  //       difficulty: "Difficult trail with loose rocks",
  //       highlights: [
  //         "Gaumukh glacier",
  //         "Views of Mount Shivling, Mount Meru, Bhagirathi peaks",
  //       ],
  //     },
  //     {
  //       day: 6,
  //       description: "Tapovan to Chirbassa",
  //       altitude: "11,680 ft",
  //       trek: "6 to 7 hours",
  //       difficulty: "Difficult trail",
  //       highlights: "Descend on rocky trail",
  //     },
  //     {
  //       day: 7,
  //       description: "Chirbassa to Gangotri",
  //       altitude: "10,170 ft",
  //       trek: "9 Km walk - 4 to 5 hours",
  //       highlights: "Moderate to easy trail",
  //     },
  //     {
  //       day: 8,
  //       description: "Gangotri to Dehradun",
  //       distance: "241 Km drive - approx. 8 hours",
  //       notes: "Reach Dehradun by evening",
  //     },
  //   ],
  //   howToReach: {
  //     byAir:
  //       "Jolly Grant Airport is the airport serving Dehradun, located about 25 km from the city. There is a daily flight from Delhi to Dehradun.",
  //     byTrain: [
  //       {
  //         train: "Nandadevi Express",
  //         number: 12205,
  //         departure: "11:50 pm",
  //         arrival: "5:40 am",
  //       },
  //       {
  //         train: "Dehradun Express",
  //         number: 12687,
  //         departure: "9:10 pm",
  //         arrival: "5:00 am",
  //       },
  //     ],
  //     byBus:
  //       "There is regular bus service from Delhi to Dehradun, from Delhi’s ISBT Kashmere Gate. We suggest taking government buses for reliability.",
  //   },
  //   costTerms: {
  //     inclusions: [
  //       "Accommodation (Homestay, Camping)",
  //       "Meals while on trek (Veg.+ Egg)",
  //       "Trek equipment: Sleeping bag, mattress, tent, etc.",
  //       "All necessary permits and entry fees",
  //       "First aid medical kits, stretcher, oxygen cylinder",
  //       "Mountaineering qualified trek leader, guide, and support staff",
  //       "Transport from Dehradun to Sankri and return",
  //     ],
  //     exclusions: [
  //       "Personal expenses",
  //       "Food during transit",
  //       "Insurance",
  //       "Mules or porters for personal luggage",
  //       "Emergency evacuation charges",
  //     ],
  //     backpackOffloading: {
  //       advancePayment: 1200,
  //       onSpotPayment: 1500,
  //     },
  //   },
  //   essentials: [
  //     "Backpack & rain cover (50-60 ltr)",
  //     "Trekking shoes (waterproof, high ankle)",
  //     "T-shirts, fleece jacket, thermal inners",
  //     "Trekking pants, windproof jacket",
  //     "Sunglasses, woolen socks, gloves",
  //     "Sunscreen, lip balm, personal medical kit",
  //   ],
  //   cancellationPolicy: {
  //     prior24Days: "95% refund or rebook any trek within one year.",
  //     between24To14Days: "70% refund or choose another batch.",
  //     between14To10Days:
  //       "50% refund or switch to another batch in the same season.",
  //     lessThan10Days: "Transfer to a friend, no refund.",
  //   },
  // },
  // {
  //   name: "Dayara Bugyal Trek",
  //   overview:
  //     "Dayara Bugyal, located in Uttarakhand, is a beautiful yet lesser-known trek in India. It is famous for its alpine meadows and the stunning views of the Gangotri, Bandarpooch & Black Peak. The trek starts from Rithal, a quaint village located about 42 km from Uttarkashi, and reaches a maximum altitude of 12,100 feet.",
  //   difficulty: "Easy to Moderate",
  //   altitude: 12100, // feet
  //   location: {
  //     state: "Uttarakhand",
  //     district: "Uttarkashi",
  //     wildlifeSanctuary: null,
  //   },
  //   highlights: [
  //     "Rithal Village",
  //     "Alpine meadows",
  //     "Gangotri & Bandarpooch Peaks",
  //     "Silver and Gold Oak Trees",
  //     "Dodiatal Lake Trail",
  //   ],
  //   bestTimeToVisit: ["May", "June", "September", "October"],
  //   itinerary: [
  //     {
  //       day: 1,
  //       route: "Dehradun to Raithal",
  //       description:
  //         "Drive 180 km to Raithal village, a beautiful location surrounded by greenery. On the way, catch glimpses of Shrikanth Peak and the Gangotri Range.",
  //       altitude: { start: 4400, end: 7400 },
  //       distance: "180 km",
  //       travelTime: "6-7 hours",
  //       accommodation: "Guesthouse/Homestay",
  //       network: "Airtel, Idea, BSNL",
  //     },
  //     {
  //       day: 2,
  //       route: "Raithal to Gui",
  //       description:
  //         "Trek through oak tree jungles to Gui campsite with gradual ascents and stunning views of Gangotri and Shrikanth Peak.",
  //       altitude: { start: 7400, end: 9500 },
  //       distance: "3.5 km",
  //       travelTime: "4-5 hours",
  //       accommodation: "Camping",
  //     },
  //     {
  //       day: 3,
  //       route: "Gui to Chelapada",
  //       description:
  //         "A short 3 km trek to Chelapada, a beautiful campsite with a small stream and views of Bandarpoonch Peak.",
  //       altitude: { start: 9500, end: 9800 },
  //       distance: "3 km",
  //       travelTime: "2 hours",
  //       accommodation: "Camping",
  //     },
  //     {
  //       day: 4,
  //       route: "Chelapada to Dayara Top and back to Gui",
  //       description:
  //         "Climb to the highest point of the trek at 12,100 feet, crossing vast alpine meadows with colorful flowers. Return to Gui after enjoying the mesmerizing views of the Dodiatal Range and Bandarpoonch Peak.",
  //       altitude: { start: 9800, end: 12100 },
  //       distance: "12 km",
  //       travelTime: "6-7 hours",
  //       accommodation: "Camping",
  //     },
  //     {
  //       day: 5,
  //       route: "Gui to Raithal",
  //       description:
  //         "Easy descent back to Raithal village, the starting point of the trek.",
  //       altitude: { start: 9900, end: 7400 },
  //       distance: "3.5 km",
  //       travelTime: "2 hours",
  //       accommodation: "Guesthouse",
  //     },
  //     {
  //       day: 6,
  //       route: "Raithal to Dehradun",
  //       description:
  //         "Drive back to Dehradun alongside the Bhagirathi River, enjoying the scenic views of Uttarakhand.",
  //       distance: "180 km",
  //       travelTime: "6-7 hours",
  //     },
  //   ],
  // },
];
