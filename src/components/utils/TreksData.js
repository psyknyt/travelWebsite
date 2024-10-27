import harKiDunMap from "../../assets/maps/Har-Ki-Dun-Trek-Map.jpg";
import KedarKanthaMap from "../../assets/maps/Kedarkantha-Trek-Route-Map.jpg";
import GaumukhTapovanMap from "../../assets/maps/Gaumukh-Tapovan-Trek-Map.png";
import NagTibbaMap from "../../assets/maps/Nag-Tibba-Map.png";

export const treksData = [
  {
    name: "Kedarkantha Trek",
    title: "Kedarkantha Trek - Gods Own Land",
    tourCode: "122132131",
    price: "₹ 3,999",
    mapImg: KedarKanthaMap,
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
    altitude: "12,500",
    Grade: ["Easy", "Moderate"],
    location: {
      state: "Uttarakhand",
      region: "Uttarkashi",
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
      byBus: [
        {
          type: "text",
          content:
            "Regular bus services from ISBT Kashmere Gate, Delhi, to Dehradun ISBT.",
        },
      ],
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
    ],
    trekCancellation: {
      menuName: "Trek Cancellation Policies",
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
  },
  {
    name: "Har Ki Dun Trek",
    title: "Har Ki Dun Trek - The Stairway to Heaven",
    tourCode: "122132132",
    price: "₹10,499",
    overview: {
      title: "Har Ki Dun Trek Overview",
      paragraphs: [
        "Har Ki Dun literally stands for the Valley of Lord Shiva, where 'Har' means Shiva and 'Dun' means Valley. Amidst this beautiful valley lies the 3000-year-old Har Ki Dun village, which attracts visitors due to its ancient temples and villages. These isolated villages, located in this peaceful valley, remain untouched by modern civilization.",

        "Situated in the Garhwal Himalayas of the Uttarakhand state in India, the Har Ki Dun trek captivates visitors with its tall, snow-clad peaks and alpine vegetation. Once you reach the destination, you will catch a glimpse of the stunning Swargarohini peak.",

        "Legend has it that Yudhishthira, one of the five brothers of the Pandavas from the Mahabharata, climbed this peak on his way to heaven. Har Ki Dun Trek is one of the oldest treks in the valley of gods, starting from Taluka and lasting for a week.",

        "During the trek, the soothing sound of the flowing river, the chirping of birds, green trees, and majestic mountains will make you fall in love with nature all over again. The frequent ascents and descents keep the Har Ki Dun adventure alive, and on a clear night, the stars in the sky will make you feel like you're roaming through the galaxy—a fabulous experience not to be missed.",

        "Har Ki Dun Trek is great for beginners as well as intermediate level trekkers. The valley remains covered with snow from December to March. While most people choose to trek during the summer, it's a multi-seasonal trek that can also be enjoyed in winter.",
      ],
    },
    mapImg: harKiDunMap,
    duraton: "7 Days",
    altitude: "11,200",
    Grade: ["Easy"],
    location: {
      state: "Uttarakhand",
      region: "Sankri",
      wildlifeSanctuary: "",
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
        description: `Your first day of the Har ki Dun trek will start with a 10-hour drive from Dehradun to Sankri Village. You need to reach the Dehradun Railway Station or ISBT by 8:00 am. To reach Dehradun on time, you can book an overnight bus or cab from Delhi to Dehradun.

Passing through Mussoorie- the Queen of the Hills on to Uttarkashi district, you will cross Naugaon, Purola, Mori, and Netwar before finally reaching village Sankri- the first stop on the trek. The route is picturesque with pine trees and the road runs parallel to the mighty Tons river. We would stop on the way to have lunch somewhere.

After reaching Purola, you should make all your important phone calls as after that the signal becomes weak and only BSNL network is available with limited connectivity. Upon reaching Sankri, you can freshen up at the Crazy Mountaineer’s homestay & you will get ample of time to explore nearby places and markets.

In-case you need last-minute shopping for your trek, trekking essentials, garments & equipment are available at the Sankri market,`,
        briefOverview: [
          "220 km drive by NH 507",
          "Altitude: 6,400 feet.",
          "Last ATM- Purola",
          "Small shops available for trekking gears",
          "BSNL network with limited connectivity",
          "Crazy Mountaineers Homestay at Sankri",
          "Breakfast and lunch excluded, dinner included",
          "Trekkers will be picked from Dehradun at 8:00 am",
          "Expected arrival time at Sankri – 4:00 pm .",
        ],
      },
      {
        day: "Day 2",
        title: "Sankri to Chilurgad (Pavani Gharat) via Taluka",
        description: `On the second day we will drive from Sankri to Taluka in the morning. It will be a short drive of 12 km and takes about one hour. On reaching Taluka village, the trekkers will be given refreshments for the hike. You will start your descent to the banks of river Tons and the trail will enter a level walkthrough conifers forest until you reach the first cemented bridge.

After crossing the river by the bridge, the trail then leads up to a wooden bridge where you can fill your water bottles & move further. The trail provides a beautiful setting for clicking photographs. By lunchtime, we will approach the rest point.

Moving ahead, the fields of potato, maize, and millets will fall on the way and soon we will be nearing our first campsite as the sun begins to dip at Chillurgad which is a green clearing at the banks of super.`,
        briefOverview: [
          "Sankri to Taluka - 12 km drive of about an hour",
          "Taluka Altitude - 7,000 ft",
          "Taluka to Chillurgad",
          "Altitude - 8,200 ft",
          "Trek Distance: 10 km",
          "Trek Time: 6 hours approx",
          "Trek Level: Easy level walk and gradual ascent in most parts",
          "Riverside camping in Govind National Park forests",
        ],
      },
      {
        day: "Day 3",
        title: "Chillurgad To Simantra Via Osla Village",
        description: `From Chillurgad to Simantra is about a distance of 9 Km and takes around 8 hours. On the trail you will cross hydroelectricity run chafing units. These are used by the local villagers for processing millets and maize by removing husk from them and grinding them to obtain flour.

As you move forward you will find beautiful views of harvested lands and wooden huts that are used for storage purposes by the locals. The trail then turns for an ascent from where you can get breathtaking views of the Dhauladhar Range right in front of you.

Soon we will be reaching a green stretch of Simantra which will be our campsite for day 2.`,
        briefOverview: [
          "Altitude - 9,800 ft",
          "Trek Distance: 9 km",
          "Trek Time: 8 hours",
          "Spring water points",
          "Trek Level: Steeper ascent along with well distributed level walks and inclines",
          "Camping in meadows overlooking mountains",
        ],
      },
      {
        day: "Day 4",
        title: "Simantra To Har Ki Dun And Back To Simantra",
        description: `On Day 4 we will push for Har ki Dun Village, on reaching the Har ki Dun, you can view the famous Swargarohini peak (The stairway to heaven). After spending some time at the village, we would head back to Simantra.`,
        briefOverview: [
          "Altitude: 11,768 ft",
          "Trek Distance: 10 km",
          "Trek Time: 9 hours",
          "Spring water points",
          "Level trek with forest walk combined with gradual inclines",
          "Riverside camp stay in the valley",
          "Snow Peaks in View: Swargarohini, Hata Peak, Black Peak etc.",
        ],
      },
      {
        day: "Day 5",
        title: "Simantra To Chillurgad Via Osla",
        description: `On day 5 we would go back from Simantra To Chillurgad Via Osla walking on the same trail we came from.`,
        briefOverview: [
          "Trek Distance: 9 km",
          "Total Trek Time: 8 hours",
          "Spring water points",
          "Riverside camping at Govind National Park forests",
        ],
      },
      {
        day: "Day 6",
        title: "Chilluragad To Taluka And 12 Kms. Drive To Sankri",
        description: `A 5 hour trek to Taluka will start in the morning, climbing down by the familiar trail, stopping at familiar rest points. The car waits at the end of the dirt road to drive back base camp-wards. Climbing down is generally easier but, stressing out with quick steps is not advised. On reaching Sankri, we will have tea and dinner at the Crazy Mountaineer Homestay.`,
        briefOverview: [
          "Trek Time around 5 hours",
          "Trek Distance about 10 km",
          "Spring water points",
          "Drive from Taluka to Sankri - 12 km",
          "Driving Time around an hour",
          "Stay at The Crazy Mountaineers Homestay",
        ],
      },
      {
        day: "Day 7",
        title: "Sankri to Dehradun",
        description: `The journey will end with a 10 hour drive from Sankri to Dehradun. Breakfast will be provided in the morning`,
        briefOverview: [
          "Distance: around 220 km drive",
          "Drive Time: approximately 10 hours",
          "Breakfast is included",
          "Drop at Dehradun Railway Station or ISBT",
        ],
      },
    ],
    QuickFacts: {},
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
      byBus: [
        {
          type: "text",
          content:
            "There is regular bus service from Delhi to Dehradun. You can board a bus from ISBT Kashmiri Gate. We would suggest you to take only government buses from ISBT Kashmiri.",
        },
        {
          type: "text",
          content:
            "The bus would drop you at Dehradun ISBT. From there, you will be picked up by us.",
        },
        {
          type: "header",
          content: "You will reach Sankari village around 4:00 PM",
          subitems: [
            "Our Tata Sumo or similar vehicles will pick you up from Dehradun Railway Station or Dehradun ISBT at 8:00 AM.",
            "Pick-up is included in the cost of the trek.",
            "You will reach Sankri by 4:00 PM.",
          ],
        },
      ],
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
        "Meals while on trek (Veg. + Egg)",
        "All necessary entry fees and permits",
        "Accommodation: Guest house, Home stay, camping during Trek",
        "Mountaineering qualified & professional trek Leader, guide, cook and Support staff",
        "First aid medical kits, stretcher, and oxygen cylinder",
        "Trek equipment: Sleeping bag, mattress, tent (twin sharing), kitchen & dining tent, toilet tent, utensils, and crampon (if required)",
        "TCMountaineer Staff Insurance",
        "Porters/mules to carry central equipment",
      ],
      exclusions: [
        "Any kind of personal expenses",
        "Food during the transit",
        "Mules or porter to carry personal luggage",
        "Insurance",
        "Any kind of emergency evacuation charges",
        "Anything not specifically mentioned under the inclusions",
      ],
      additionalNotes: [
        {
          note: "Normally, The Crazy Mountaineers expect you to carry your personal luggage on your own. If you wish to offload your backpack, you can give it to a mule.",
        },
        {
          offloadingCharges: {
            advance:
              "INR 1500/- if you make an online payment, 10 days in advance",
            onSpot: "INR 1800/- if you inform us after reaching Sankri",
            weightLimit:
              "The backpack cannot weigh more than 11 kg. Backpack should have a waterproof cover. Suitcases/strolleys/bags will not be allowed.",
          },
        },
      ],
    },
    importantNotes: [],
    faqData: [],
    trekCancellation: {
      menuName: "Trek Cancellation Policies",
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
  },
  {
    name: "Gaumukh Tapovan",
    title: "Gaumukh Tapovan Trek - Origin of Ganga",
    tourCode: "122132133",
    price: "₹ 15,399",
    overview: {
      title: "Gaumukh Tapovan Trek - Overview",
      paragraphs: [
        "The Gaumukh Tapovan Trek derives its name from Cow’s Mouth as earlier it used to look like a Cow’s mouth and the river Bhagirathi emerging out of it. The trek begins at Gangotri and follows through the rich forest diversity which gradually decreases as we climb higher to our destination. While on Gaumukh Tapovan Trek, you will be able to get clear views of the magnificent Mount Shivling & Bhagirathi Mastiff.",
        "The Journey of Gaumukh Tapovan Trek begins from Rishikesh. The trekkers will travel from Rishikesh to Gangotri via road. Gangotri is located on the banks of river Bhagirathi.",
        "The trek begins with walking on a marked trail that goes through the Gangotri National Park. You will see many pine trees that grow in this area and will be able to camp near the holy Bhagirathi river that will accompany you for the entire trek.",
        "The beautiful sunrise in the morning will surely take your breath away, you will be able to view the beautiful illuminated mountain peaks when the sunlight hits them for the first time in the morning.",
        "The magnificent Mount Manda which has an altitude of 6,200 m is one of the major attractions of the Gaumukh Tapovan Trek. As you inch forward towards the destination, the tree line gradually starts decreasing and the trek starts to get a bit difficult.",
        "You will be able to catch glimpses of Bhagirathi 1, 2 & 3 mountains. When pushing towards the highest point of the trek at 14,600 ft, the trail gradually becomes smaller and smaller before it finally disappears.",
        "Your final steps towards the highest point of the Gaumukh Tapovan trek will take you on a thrilling experience. You will have to walk on huge mountain boulders and small loose rocks and therefore it is very important to have good quality shoes on you.",
        "Climbing to Tapovan is the most difficult part of the trek with loose rocks and a high chance of rockfall, so make sure to move quickly and carefully. After you cross the rocky surface, you will be able to get your first breathtaking view of the massive Mount Shivling.",
      ],
    },
    mapImg: GaumukhTapovanMap,
    duraton: "8 Days",
    altitude: "14,235",
    Grade: ["Moderate", "Difficult"],
    location: {
      state: "Uttarakhand",
      region: "Uttarkashi",
      wildlifeSanctuary: "",
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
        title: "Dehradun to Gangotri",
        description: `The first day of the Gaumukh Tapovan Trek starts with a 241 Km drive from Dehradun to Gangotri which takes around 8 hours, the drive will be full of the beautiful scenic beauty of the Himalayas as we cross Mussoorie, Dhanauti and Chamba to finally arrive at Uttarkashi.

Uttarkashi is also known as the land of gods, it lies on the banks of the holy Bhagirathi river and you will find my temples in this area. Upon your arrival at Gangotri, you can explore the local market which remains full of pilgrims. Overnight stay will be at a guest house.`,
        briefOverview: [
          "Altitude: 10,170 ft.",
          "241 Km drive - approx. 8 hours",
          "Pickup from Dehradun ISBT",
          "Network - Available",
          "Stay at Guest House",
        ],
      },
      {
        day: "Day 2",
        title: "Acclimatisation at Gangotri",
        description: `This day of the Gaumukh Tapovan Trek will be reserved for acclimatization as you are now at 10,100 feet above sea level and it will take your body a little time to adjust to the weather conditions at higher altitudes.

You can explore the local area and also visit one of the Char Dhams - The Gangotri Temple which was built in the 18th century. You can also visit the famous Bhagirathshila, the place where King Bhagirath worshipped Lord Shiva or the Pandava Gufa where the Pandavas from Mahabharata are believed to have rested. The night will be spent in the rest house as we prepare to begin our trek the next morning.`,
        briefOverview: [
          "Altitude: 10,170 ft.",
          "Explore the local area at Gangotri.",
          "Visit the Gangotri Temple.",
          "Network - Available.",
          "Stay at a guest house.",
        ],
      },
      {
        day: "Day 3",
        title: "Gangotri to Chirbassa",
        description: `Today we will start our trek. As we walk into the Gangotri National Park you will find yourself surrounded by the pine forest with the Bhagirathi river & the majestic Sudarshan Parbat (around 21,350 ft.) as your accomplice throughout the trek. There will be gradual ascents during the trek but overall it will be an easy 4 to 5 hours of trek.

The campsite for today is a scenic location, camping under the pine trees with the Bhagirathi river flowing nearby. From here you will be able to catch the first glimpse of Bhagirathi I, II and III. Overnight stay at camps.`,
        briefOverview: [
          "Altitude: 11,680 ft.",
          "Trekking through Gangotri National Park.",
          "9 km walk for about 5 to 6 hours.",
        ],
      },
      {
        day: "Day 4",
        title: "Chirbassa to Bhojwasa",
        description: `Today is probably the easiest day of the trek, after you wake up to the stunning view of the sun rays hitting the mountain peaks, we will get ready to walk again.


There will be gradual assents as we trek for a short distance of about 5 km which will take around 2-3 hours of time. As we keep walking further on the trail, you will be able to catch better views of the Bhagirathi sister peaks.

Soon you will see a lot of Birch trees, this is a sign that we have reached Bhojwasa which will be our campsite for today. This wide part of the valley will give your first view of Mount Shivling. You can spend your day exploring the area around you. Night stay at tents.`,
        briefOverview: [
          "Altitude: 12,430 ft.",
          "View of Mount Shivling.",
          "5 km walk for about 2 to 3 hours.",
          "Stay in tents.",
        ],
      },
      {
        day: "Day 5",
        title: "Bhojwasa to Gaumukh Tapovan",
        description: `Eat well, fill water bottles, carry energy bars.. Today is the longest day of the trek. Gaumukh is located at the end of the Gangotri Glacier from where the Holy Ganges originate. Gaumukh gets its name because the river seemed to originate from a cave that looked like a cow’s mouth in the past.

The trail will start to get difficult as we start to push towards Gaumukh. The rocky mountains make it difficult to walk on so watch your step carefully. The female trail is full of rocks that are loose and difficult to walk on but once you cross it, you will realize that it was totally worth it. You will be pleased to view the majestic Mount Shiviling standing tall in front of you along with Mount Meru & Bhagirathi sister peaks. Overnight stay at tents.`,
        briefOverview: [
          "Altitude: 14,600 ft.",
          "Difficult trail.",
          "5-6 hours of trekking.",
          "Stay in tents.",
        ],
      },
      {
        day: "Day 6",
        title: "Tapovan to Chirbassa",
        description: `When you wake up in the morning, your eyes will be treated with a beautiful sunrise. With the sun rays hitting Mount Shivling and the nearby peaks, this mesmerizing view will remain with you for a lifetime. Make sure to fill your water bottles as there are no water sources on the way.

Again we walk over the same rocky path and descending down a rocky trail is more difficult than climbing up. Move slowly and watch your step. After the rocky trail, we will be trekking for another 6-7 hours along the Bhagirathi river till we reach Chirbassa and back to the same pine forests. We will be spending the night in tents.`,
        briefOverview: [
          "Altitude: 11,680 ft.",
          "Difficult trail.",
          "6-7 hours of trekking.",
          "Stay in tents.",
        ],
      },
      {
        day: "Day 7",
        title: "Chirbasa to Gangotri",
        description: `Today is the last day of the trek, we will be walking for about 4 to 5 hours to trace our steps back to Gangotri. As we once again enter the Gangotri National Park you will find the same pine trees and streams that we saw at the start of the Gaumukh Tapovan Trek. Lunch, Dinner and stay at Guest House.`,
        briefOverview: [
          "Altitude: 10,170 ft.",
          "Moderate to easy trail.",
          "9 Km trek, 4-5 hours of walking.",
          "Stay at guest house.",
        ],
      },
      {
        day: "Day 8",
        title: "Gangotri to Dehradun",
        description: `Today we will be departing back to Dehradun along with the great memories of Gaumukh, Mount Shivling and the Bhagirathi sister peaks. The 241 Km ride along the same Bhagirathi river that accompanied us on the trek will take about 8 hours and we will reach Dehradun by evening.`,
        briefOverview: [
          "240 Km drive, about 8 hours.",
          "Reach Dehradun by evening.",
        ],
      },
    ],
    QuickFacts: {},
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
      byBus: [
        {
          type: "text",
          content:
            "There is regular bus service from Delhi to Dehradun. You can board a bus from ISBT Kashmiri Gate. We would suggest you to take only government buses from ISBT Kashmiri.",
        },
        {
          type: "text",
          content:
            "The bus would drop you at Dehradun ISBT. From there, you will be picked up by us.",
        },
        {
          type: "header",
          content: "You will reach Sankri village around 5:00 PM",
          subitems: [
            "Our Tata Sumo or similar vehicles will pick you up from Dehradun Railway Station or Dehradun ISBT at 6:00 AM.",
            "Pick-up is included in the cost of the trek.",
            "You will reach Sankri by 5:00 PM.",
            "Food from Dehradun to Sankri is not included in the trek cost.",
          ],
        },
      ],
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
          "Walking stick (at least one advisable)",
          "Head torch - 1 Nos.",
          "Water bottle/Hydration pack - 2 bottles of one litre each",
          "Hydration pack users: 1 hydration pack + 1 litre bottle",
          "Carry at least one thermos flask",
          "Snacks: Energy bars, dry fruits, electral/ORS",
        ],
      },
      {
        category: "Personal Medical Kit",
        items: ["Consult your doctor"],
      },
      {
        category: "Clothing",
        items: [
          "2 Full sleeves T-shirts (non-cotton)",
          "1 Fleece T-shirt",
          "1 Fleece jacket (alternative: woollen sweater)",
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
          "1 Neck gaiter",
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
        "Accommodation: Home stay, Camping",
        "Meals while on trek (Veg. + Egg)",
        "Trek equipment: Sleeping bag, mattress, tent (twin sharing), kitchen & dining tent, toilet tent, utensils, and crampon (if required)",
        "All necessary permits and entry fees",
        "First aid medical kits, stretcher, and oxygen cylinder",
        "Mountaineering qualified & professional trek Leader, guide, cook, and Support staff",
        "Transport from Dehradun to Sankri and return (according to itinerary)",
        "Mules to carry the central luggage",
      ],
      exclusions: [
        "Any kind of personal expenses",
        "Food during the transit",
        "Insurance",
        "Mules or porter to carry personal luggage",
        "Anything not specifically mentioned under the inclusions",
        "Any kind of emergency evacuation charges",
      ],
      additionalNotes: [
        {
          note: "Normally, The Crazy Mountaineers expect you to carry your personal luggage on your own. If you wish to offload your backpack, you can give it to a mule.",
        },
        {
          offloadingCharges: {
            advance:
              "INR 1200/- if you make an online payment, 10 days in advance",
            onSpot: "INR 1500/- if you inform us after reaching Sankri",
            weightLimit:
              "The backpack cannot weigh more than 11 kg. Backpack should have a waterproof cover. Suitcases/strolleys/bags will not be allowed.",
          },
        },
      ],
    },
    importantNotes: [],
    faqData: [
      {
        menuName: "Is Gaumukh Trek difficult?",
        items: [
          "This trek falls in the category of moderate to difficult and therefore you need to be mentally as well as physically fit to do this trek.",
        ],
      },
      {
        menuName: "Best Time to do Gaumukh Tapovan?",
        items: [
          "Pre monsoons - May & June and post monsoon from August - October is the best time to visit Gaumukh Tapovan Trek",
        ],
      },
      {
        menuName: "How is the network connectivity on Gaumukh Tapovan Trek?",
        items: [
          "No networks will be available throughout the trek and therefore you are advised to attend all important calls in Gangotri.",
        ],
      },
      {
        menuName: "Can beginners join this trek?",
        items: [
          " This trek can be a little difficult for beginners and therefore not recommended.",
        ],
      },
      {
        menuName: "How to reach Gaumukh Trek from Delhi?",
        items: [
          "Gaumukh trek starts from Gangotri, to reach gangotri from Delhi, you can hire a taxi or board a bus which are easily available at the national capital.",
        ],
      },
    ],
    trekCancellation: {
      menuName: "Trek Cancellation Policies",
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
  },
  {
    name: "Rupin Pass Trek",
    title: "Rupin Pass Trek - Origin of Ganga",
    tourCode: "122132134",
    price: "₹ 16,899",
    overview: {
      title: "Rupin Pass Trek - Overview",
      paragraphs: [
        "The Rupin Pass trek is a glacial crossover from the state of Uttarakhand to Himachal Pradesh. The trek begins with a drive from Dehradun to Dhaula, which is a 130km long journey by road and ends at Sangla village in Himachal Pradesh. Dhaula is located at an altitude of 5,100 ft. The Rupin Pass trek boasts a max altitude of 15,300 ft. That's a massive gain in altitude, and therefore trekkers need to be prepared for this moderate to difficult grade trek as trekkers will have to cover about 10km each day.",
        "Rupin Pass is one of the best treks when it comes to diversity of sceneries & sudden changes in the trail. At one point, you might be climbing a steep trail that would suddenly change into an easy walk.",
        "The trek is full of surprises at every step, which includes the Jhaka Village, also known as the hanging village. The unique position of the village on the edge of the mountain makes it appear as if the village was hanging through the cliff.",
        "Apart from this, you will encounter a number of snow bridges, deep dark forests of fir, oak & rhododendron, waterfalls that appear to be falling from the sky, and the view of majestic Kinner Kailash at the end of the Rupin Pass Trek will surely leave you spellbound.",
      ],
    },
    mapImg: "",
    duraton: "8 Days",
    distance: "52 km",
    altitude: "15,250",
    Grade: ["Difficult"],
    location: {
      state: "Uttarakhand",
      region: "Uttarkashi",
      wildlifeSanctuary: "",
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
        title: "Dehradun to Dhaula (Rupin Pass Trek Itenary)",
        description: `The first day of the trek begins with a 190 km long ride from Dehradun to Dhaula and takes around 7 hours. The ride will be filled with the scenic beauty of the mountains. You will pass through the queen of hills - Mussooriee, Purola, Mori & Naitwar as we drive alongside the Yamuna river. Upon arrival at Dhaula you will be served hot dinner by The Crazy Mountaineers team.s`,
        briefOverview: [
          "Altitude: 5,500 ft",
          "190 km drive by NH 507 - approx 7 hours",
          "Pickup from Dehradun railway station at 6:30 am, in a Tata Sumo or a similar vehicle",
          "Breakfast and lunch excluded, dinner included",
          "Last ATM: Purola",
          "No networks are available",
          "Overnight stay in tent",
        ],
      },
      {
        day: "Day 2",
        title: "Dhaula to Sewa",
        description: `Today, we will start walking. It's going to be a long trek of 11 km until we reach Sewa. The trail is an easy path so it is not going to be a tiring walk.

As we leave Dhaula, the trail will enter a climb for about 200 m. but after this, it's an easy level walk. You will be able to view the Rupin river flowing into its bed.

Rupin pass gives you a surprise at every turn, you will find yourself walking surrounded by apple & apricot trees. When we reach Sewa, you can explore the village and the famous Kinnaur temple that is located here. Tonight we will camp outside the Sewa village near the Rupin River.`,
        briefOverview: [
          "Altitude: 6,300 ft",
          "11 km trek, 5 hrs",
          "Moderate level of ascent",
          "Mobile network available only BSNL",
          "Water available on the way",
          "Hot lunch at camp site",
          "Visit the village temple in the evening beautified with medals and coins",
          "Stay in tents",
        ],
      },
      {
        day: "Day 3",
        title: " Sewa to Bawta",
        description: `Today, you will get used to ups and downs of the trek as today’s trail is a bit difficult. Listen carefully what you trek guide has to say as the route is prone to landslides. The variation in the trail also makes it a bit difficult.

The hike today will give you a brief glimpse of the surprises that Rupin Pass trek has to offer. You will be walking through the crop farms and then suddenly enter a dense forest. Soon you will be crossing a bridge that connects the states of Uttarakhand and Himachal Pradesh. The bridge does not belong to either of the two states and hence referred to as “No Man’s Place”.

Walking under the shade of walnut trees on a steep trail we will soon reach Batwa and rest for the day.`,
        briefOverview: [
          "Altitude: 6,888 ft",
          "6 km trek, 4 hrs",
          "Moderate level of the walk with some ascents",
          "No Man’s Place - Uttarakhand and Himachal Pradesh border",
          "Trekking in Deep Forest",
          "Hot lunch at camp site",
          "Stay in tents",
        ],
      },
      {
        day: "Day 4",
        title: "Bawta to Jakha",
        description: `Muster all your energy and prepare yourself for today as we cross the highest and the last village of the trek. The trail is a continuous ascent for 4 to 5 hours and you will need all your energy to walk on this trail full of twists and turns.

The trail is a moderate ascent and after reaching Jiksun the trail will start descending. Walking through the dense forest you will find a wooden bridge form where the trail will suddenly enter into a zig zag walk. Overnight stay in tents.`,
        briefOverview: [
          "Altitude: 8,700 ft",
          "5 km trek, 4 hrs",
          "Difficult trail with steep climb",
          "Highest and the last village of Rupin Pass trek",
          "BSNL network is available",
          "Hot lunch at camp site",
          "Overnight stay at camps",
        ],
      },
      {
        day: "Day 5",
        title: " Jakha to Dandreyash Thatch",
        description: `Waking up in the morning we will start moving on a well defined trail through the Jakha village and enter a forest again. Walking further the scenery of the places starts changing as we encounter snow patches on the way. Soon we will be crossing our first snow bridge over Rupin. Walking down further you will encounter a wooden bridge.

About an hour of walk from here, walking carefully on the rocky path will take you to another forest of Rhododendron trees. As we keep walking few more kilometeres we will reach Saruwas Thatch. The view form here is absolutely mersmerizing you will be able to see the the Rupin waterfall in a distance, as you continue walking on the snow patches you will once again enter the forest. Moving further up you will find yourself surrounded with eternal bliss, thousands of waterfalls below you will hypnotize you for a while.

As we move down towards the valley, you will cross beautiful green meadows and after crossing some snow bridges, you will reach Dhanderas Thach. Overnight stay in camps.`,
        briefOverview: [
          "Altitude: 11,680 ft",
          "11 km trek, 8 hrs",
          "Trail surrounded by Silver birches (Bhoj trees), Rhododendrons (white, pink, purple)",
          "Packed lunch will be given",
          "Stay in tent",
        ],
      },
      {
        day: "Day 6",
        title: "Dhanderas Thatch to Upper Waterfall camp",
        description: `The altitude from Dhanderas to Upper waterfall rises quickly and is enough to make you vulnerable to Altitude Mountain Sickness. Pay attention to the trek leader as you will be briefed about how to cross the snowy trail ahead.

Walking further on the trek, we will reach Dhanderas base. Crossing the many rvulets of Rupin as we push further you will see the train enter thick snowy region. Paying attention to your trek leader will help you navigate this area safely. Soon we will cross the last snow bridge which is a picturesque sight in itself. A short steep climb from the bridge will take us to our campsite for tonight.`,
        briefOverview: [
          "Altitude: 13,120 ft",
          "3.5 km trek, 3.5 hrs",
          "Hot lunch at camp site",
          "Stay in Camps",
        ],
      },
      {
        day: "Day 7",
        title: "Upper Waterfall to Rupin Pass to Ronti gad",
        description: `The altitude from Dhanderas to Upper waterfall rises quickly and is enough to make you vulnerable to Altitude Mountain Sickness. Pay attention to the trek leader as you will be briefed about how to cross the snowy trail ahead.

Walking further on the trek, we will reach Dhanderas base. Crossing the many rvulets of Rupin as we push further you will see the train enter thick snowy region. Paying attention to your trek leader will help you navigate this area safely. Soon we will cross the last snow bridge which is a picturesque sight in itself. A short steep climb from the bridge will take us to our campsite for tonight.`,
        briefOverview: [
          "Altitude: 13,420 ft",
          "9 km trek, 10 hrs",
          "Carry enough hot water from the camp site; water sources are limited",
          "Packed lunch will be given",
          "Overnight stay in tents",
        ],
      },
      {
        day: "Day 8",
        title: "Ronti gad to Sangla",
        description: `The last day of the Rupin Pass Trek will start with a steep downward decent and the altitude drops rapidly. If someone ever told you that climbing up is easier than climbing down, Rupin Pass Trek sets a perfect example for this

Listen to your trek leader carefully and follow his instructions to avoid injury. As we keep walking down the trail, we will exit the Ronti Gad valley & will be able to view the magnificent Mount Kinner Kailash.

Our next stop will be a lake near the lake of Sangla Kanda. The route from there will enter a steep descent once again, 30 minutes of walking will take you to Baspa Village and another 20 minutes from Bapsa, you will reach Sangla. Your trek ends here.

You can hire a vehicle from Sangla to Shimla which is not included in the trek price.`,
        briefOverview: [
          "Altitude: 8,800 ft",
          "12 km trek, 8 hrs",
          "Book a vehicle to Shimla & make accommodation plans accordingly",
        ],
      },
    ],
    QuickFacts: {},
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
      byBus: [
        {
          type: "text",
          content:
            "There is regular bus service from Delhi to Dehradun, from Delhi’s ISBT Kashmere Gate. We would suggest you to take only government buses from ISBT Kashmere Gate. Private buses ply from outside ISBT and they are not trustworthy.",
        },
        {
          type: "text",
          content:
            "Usually, buses drop you at Dehradun ISBT. From there, you have to come to Dehradun Railway Station.",
        },
        {
          type: "header",
          content: "You will reach Dhaula by 5:00 PM",
          subitems: [
            "THE CRAZY MOUNTAINEERS Tata Sumo or similar vehicles will pick you up from Dehradun Railway Station at 6:00 AM.",
            "Pick-up is included in the cost of the trek.",
            "You will reach Dhaula by 5:00 PM.",
            "Food from Dehradun to Dhaula is not included in the trek cost.",
          ],
        },
      ],
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
          "Walking stick (at least one advisable)",
          "Head torch - 1 Nos.",
          "Water bottle/Hydration pack - 2 bottles of one litre each",
          "Hydration pack users: 1 hydration pack + 1 litre bottle",
          "Carry at least one thermos flask",
          "Snacks: Energy bars, dry fruits, electral/ORS",
        ],
      },
      {
        category: "Personal Medical Kit",
        items: ["Consult your doctor"],
      },
      {
        category: "Clothing",
        items: [
          "2 Full sleeves T-shirts (non-cotton)",
          "1 Fleece T-shirt",
          "1 Fleece jacket (alternative: woollen sweater)",
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
          "1 Neck gaiter",
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
        "Accommodation: Home stay, Camping",
        "Meals while on trek (Veg. + Egg)",
        "Trek equipment: Sleeping bag, mattress, tent (twin sharing), kitchen & dining tent, toilet tent, utensils, and crampon (if required)",
        "All necessary permits and entry fees",
        "First aid medical kits, stretcher, and oxygen cylinder",
        "Mountaineering qualified & professional trek Leader, guide, and Support staff",
        "Transport from Dehradun to Sankri and return (according to itinerary)",
        "Mules to carry the central luggage",
      ],
      exclusions: [
        "Any kind of personal expenses",
        "Food during the transit",
        "Insurance",
        "Mules or porter to carry personal luggage",
        "Anything not specifically mentioned under the inclusions",
        "Any kind of emergency evacuation charges",
      ],
      additionalNotes: [
        {
          note: "Normally, THE CRAZY MOUNTAINEERS expect you to carry your personal luggage on your own. If you wish to offload your backpack, you can give it to a mule.",
        },
        {
          offloadingCharges: {
            advance:
              "INR 1200/- if you make an online payment, 10 days in advance",
            onSpot: "INR 1500/- if you inform us after reaching Sankri",
            weightLimit:
              "The backpack cannot weigh more than 11 kgs. Backpack should have a waterproof cover. Suitcases/strolleys/bags will not be allowed.",
          },
        },
      ],
    },
    importantNotes: [],
    faqData: [
      {
        menuName: "Is Gaumukh Trek difficult?",
        items: [
          "This trek falls in the category of moderate to difficult and therefore you need to be mentally as well as physically fit to do this trek.",
        ],
      },
      {
        menuName: "Best Time to do Gaumukh Tapovan?",
        items: [
          "Pre monsoons - May & June and post monsoon from August - October is the best time to visit Gaumukh Tapovan Trek",
        ],
      },
      {
        menuName: "How is the network connectivity on Gaumukh Tapovan Trek?",
        items: [
          "No networks will be available throughout the trek and therefore you are advised to attend all important calls in Gangotri.",
        ],
      },
      {
        menuName: "Can beginners join this trek?",
        items: [
          " This trek can be a little difficult for beginners and therefore not recommended.",
        ],
      },
      {
        menuName: "How to reach Gaumukh Trek from Delhi?",
        items: [
          "Gaumukh trek starts from Gangotri, to reach gangotri from Delhi, you can hire a taxi or board a bus which are easily available at the national capital.",
        ],
      },
    ],
    trekCancellation: {
      menuName: "Trek Cancellation Policies",
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
  },
  {
    name: "Dayara Bugyal Trek",
    title: "Dayara Bugyal Trek - Walk The Medows",
    tourCode: "122132135",
    price: "₹  8,999",
    mapImg: "",
    overview: {
      title: "Dayara Bugyal Trek Overview",
      paragraphs: [
        "Dayara Bugyal, in spite of its exquisite beauty, is one of the lesser-known treks in India. Bugyal, a Hindi word, refers to the alpine meadows that are at a high altitude of about 12,000 feet. Dayara Bugyal is a short trek of 22 Kms that begins from Rithal as a base camp which is located about 42 km from Uttarkashi.",

        "It is a beautiful village with greenery everywhere you look. The difficulty level of Dayara Bugyal trek is easy to moderate and this makes it a great choice for beginners. On your way to Dyara Bugyal Top, you will be able to catch glimpses of beautiful meadows, views of the Gangotri, Bandarpooch & Black Peak. You will also find a trail that leads to Dodiatal which is a freshwater lake and the origin of the Assi Ganga river.",

        "The highest point of the trek comes at the Dyara Bugyal top which is at a height of 12,100 feet. During the summers, the beauty of the green meadows, grassy turfs & snow-clad peaks in the distance makes up for a mesmerizing sight.",

        "In order to reach Dayara Bugyal from Delhi, you need to come to Dehradun and catch a bus to Uttarkashi. From there, you need to make your way to Rithal village located 42 km from Uttarkashi which is the base camp for this trek.",
      ],
    },
    duraton: "6 Days",
    distance: "23 km",
    altitude: "12,100",
    Grade: ["Easy", "Moderate"],
    location: {
      state: "Uttarakhand",
      region: "Raithal",
      wildlifeSanctuary: "",
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
        title: "Dehradun to Raithal (Dayara Bugyal Trek Itenary)",
        description: `The first day of the Dayara Bugiyal Trek begins with a drive to a village called Rithal which is about 42 km away from Uttarkashi. The village is a beautiful location with lush greenery. On your way to Rithal, you will get glimpses of the Shrikanth Peak and Gangotri range.

The 180 Km ride will take about 6-7 hours and you can explore the village upon your arrival. Overnight stay at guesthouse/homestay.`,
        briefOverview: [
          "Altitude: 7,400 ft",
          "Drive: 180 km (6-7 hours)",
          "Network is available (Airtel, Idea, BSNL)",
          "Pick-up from Dehradun railway station",
          "Stay in guest house/homestay",
        ],
      },
      {
        day: "Day 2",
        title: "Raithal to Gui",
        description: `Today we will start walking early in the morning, the trail starts with a walk throught the jungle of silver & gold oak trees. The trail is pretty much simple and the campsite always remains in the line of sight. The trail will enter an ascend and the 3.5 Km walk will take around 4 to 5 hours to reach the campsite.

The campsite at Gui is located in a beautiful picturesque location, surrounded by alpine trees and tall mountains. You will get clearer views of Gangotri & Shrikanth Peak. Overnight stay at camp.`,
        briefOverview: [
          "Altitude: 7,400 to 9,500 ft",
          "Distance: 3.5 km, will take 4-5 hours",
          "Gradual ascend throughout",
          "Overnight stay in tents",
        ],
      },
      {
        day: "Day 3",
        title: "Gui to Chelapada",
        description: `On the third day of the Dayara Bugyal trek, we will make our way to the next camping site at Chelapada. Today is a short day and we will only hike for 3 Km which will take 2 hours. At the campsite, you will find a small stream folwing and will be able to get a clear view of the Bandarpoonch Peak.

Upon your arrival at the Chelapada campsite during the afternoon, you can walk around and explore the area.`,
        briefOverview: [
          "Altitude: 9,500 to 9,800 ft",
          "Distance: 3 km, 2 hours",
          "Stay in tents",
        ],
      },
      {
        day: "Day 4",
        title: "Chelapada to Dayara top and back Gui",
        description: `Today is the day when we will scale the Dayara Top, the highest point of the trek at 12,000 feet and return back to the campsite. The trail will enter the forest but will gradually open up and you will be able to see vast expanses of meadows with colourful flowers growing everywhere.

Walking on this beautiful area and looking at the beautiful mountain ranges you will finally reach closer to the top. The final trial will be a steep climb so watch your step and walk carefully.

Upon reaching the top, you will find yourself standing in front of the majestic Dodiatal Range. You will see the tall Bandarpoonch peak standing tall at a distance. After spending some time at the top we will trace our way back to the campsite at Gui.`,
        briefOverview: [
          "Altitude: 9,800 ft to 12,100 ft",
          "Total Distance: 12 km, 6-7 hours",
          "Stay at Gui campsite",
        ],
      },
      {
        day: "Day 5",
        title: "Gui to Raithal",
        description: `On the fifth day of the Dayara Bugyal Trek, we will make our way back to the Rithal village. It is going to be an easy descent and we will be back in the same beautiful village from where we started this amazing journey.`,
        briefOverview: [
          "Altitude: 9,900 ft to 7,400 ft",
          "Distance: 3.5 km, 2 hours",
          "Stay in guest house",
        ],
      },
      {
        day: "Day 6",
        title: " Raithal to Dehradun",
        description: `Today is the last day of the trek and we say goodbye to Rithal in the morning and leave for Dehradun. Riding alongside the Bhagirathi river, the ride will take around 7 hours and you will reach Dehradun by evening with all the beautiful memories of the trek.`,
        briefOverview: [
          "6-7 hoursdrive to Dehradun",
          "Reach Dehradun by evening",
        ],
      },
    ],
    QuickFacts: {},
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
      byBus: [
        {
          type: "text",
          content:
            "There is regular bus service from Delhi to Dehradun, from Delhi ISBT Kashmere Gate. We would suggest you to take only government buses from ISBT Kashmere Gate. Private buses ply from outside ISBT and they are not trustworthy.",
        },
        {
          type: "text",
          content:
            "Usually, buses drop you at Dehradun ISBT. From there, you have to come to Dehradun Railway Station.",
        },
        {
          type: "header",
          content: "You will reach Raithal by 2:00 PM",
          subitems: [
            "THE CRAZY MOUNTAINEERS Tata Sumo or similar vehicles will pick you up from Dehradun Railway Station at 6:00 AM.",
            "Pick-up is included in the cost of the trek.",
            "You will reach Raithal by 2:00 PM.",
          ],
        },
      ],
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
          "1 Pair of gaiters (The Crazy Mountaineers team will notify if required)",
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
        "Accommodation (Guest house, Home stay, Camping)",
        "Meals while on trek (Veg.) (Egg included)",
        "Trek equipment",
        "Permits",
        "First aid medical kits and oxygen cylinder",
        "Qualified & experienced trek Leader, Guide, and Support staff",
        "Transport is not included, but we can arrange from Haridwar to Joshimath and return",
      ],
      exclusions: [
        "Any kind of personal expenses",
        "Food during the transit",
        "Insurance",
        "Mules or porter to carry personal luggage",
        "Anything not specifically mentioned under the head 'Price Includes'",
      ],
      additionalNotes: [
        {
          note: "Normally, THE CRAZY MOUNTAINEERS expect you to carry your personal luggage on your own. However, if you wish to offload your backpack, you can give it to a mule.",
        },
        {
          offloadingCharges: {
            advance: "INR 1200 if paid online 10 days in advance",
            onSpot: "INR 1500 if informed after reaching Joshimath",
            weightLimit:
              "The backpack cannot weigh more than 11 kgs and must have a waterproof cover. Suitcases/strolleys/bags are not allowed.",
          },
        },
        {
          bookingInfo:
            "To book a Trek/adventure program, please use our online booking form, or alternatively, you can call us. For confirmation of your tour, you will need to wire a deposit and an initial payment.",
        },
      ],
    },
    faqData: [],
    trekCancellation: {
      menuName: "Trek Cancellation Policies",
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
  },
  {
    name: "Nag TIbba Trek",
    title: "Nag TIbba Trek - Walk The Medows",
    tourCode: "122132136",
    price: "₹  3,500",
    mapImg: NagTibbaMap,
    overview: {
      title: "Nag TIbba Trek Overview",
      paragraphs: [
        "Nag Tibba trek is one of the best weekend treks for beginners. Generally, the Nag Tibba stands for Serpent peak, is one of the tallest peaks under the Himalayas of the Garhwal range in the nearby Mussoorie region of Uttarakhand. Nag Tibba range counts amongst three primary ranges of the lesser Himalayas including Dhauladhar and the Pir Panjal.",
        "During the trek, you will find yourself at an altitude of 3025 meters. Naag Tibba trek starts from the village named Panthwari. With an excellent and attractive sight view, this is the best trek for adventure and thrill. It takes around one to two days to complete. This is good for those who want to enjoy real natural beauty in a short span of time.",
        "At the mid of the Nag Tibba trek route, trekkers go through the dense forest trail where you will see Alpine, Cedar, and Rhododendron forests. The beautiful meadows, waterfalls, and snowfall during winter keep your eyes thrilled and your heart mesmerized. The sunset view from the camping site will surely make you happier than ever before.",
        "Nag Tibba trek can be done any time of the year. This is a beautiful place for camping where the trekkers can go easily without any atmospheric hurdles. This trek is suitable for summer, spring, as well as winters. Nag Tibba trek can also be called one of the safest treks for beginners and full of thrills for experienced trekkers too.",
        "A temple is found at the top of the peak from where you can have a breathtaking view of other Himalayan mountain ranges too, such as Banarpunch, Kedarnath peak, Gangotri peak, Swargarohini, Black peak, and the snowcapped peak of Chanabang.",
      ],
    },
    duraton: "2 Days",
    distance: "16 km",
    altitude: "9,910",
    Grade: ["Easy"],
    location: {
      state: "Uttarakhand",
      region: "Kanthgodam/Haldwani",
      wildlifeSanctuary: "",
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
        title: "Kathgodam to Lohajung",
        description: `Day one of the Roopkund Trek starts with a 210 Km drive through the Kumaon region and takes about 10 hours. The road passes through the deep valley of Shivalik Mountain ranges and coniferous forests. We will be crossing Deval village where you can shop for any amenities that you might require for the trek. The last part of the journey from Deval to Lohajung is very exciting with breathtaking views and curved roads. Overnight stay at Lohajung guest house/ homestay.`,
        briefOverview: [
          "Altitude: 7,660 ft.",
          "Distance: 210 Km drive, approximately 10 hours.",
          "Network: Available.",
          "Pickup from Kathgodam Railway Station.",
          "Overnight stay in Guest house.",
        ],
      },
      {
        day: "Day 2",
        title:
          "Camp 1 to Nag Tibba top and return to Pantwari Village and drive to Dehradun",
        description: `On the second day we will start early as we have a long day ahead of us. We start hiking to the Nag Tibba top after having breakfast around 5 am in the morning. The trail once again passes through the dense forest cover and if you are here in winters, you will find the trail completely covered with snow and therefore it becomes a bit difficult to find the trail during winters. After walking for around 30 minutes, we will reach two clearings surrounded by the forest. From here the trail once again levels out and is easy to cover.

As we walk forward we find the Nag Tibba Temple which is located at the base of Nag Tibba Hill. On a clear day, you can see the beautiful view of the Garhwal Himalayan range.

As we move on the trail once again enter into forest along with a steep descent. This part of the trail is a bit challenging and makes it a good summit experience. Near the top, we will reach the flag marking of Nag tibba summit.

From the summit, the view of the amazing Garhwal Himalayas will surely take your breath away. You will be able to view the famous ice-capped ranges of Gangotri, Kedarnath, Kala Nag, Bandarpoonch, and others.

After spending some time at the Nag Tibba Peak we will make our way back to the camp where we will have lunch and head for Panthwari. We will reach Panthwari village by late evening and drive back to Dehradun which will take around 5 hours.`,
        briefOverview: [
          "Altitude: 7,400 to 9,500 ft",
          "Distance: 3.5 km, will take 4-5 hours",
          "Gradual ascend throughout",
          "Overnight stay in tents",
        ],
      },
    ],
    QuickFacts: {},
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
      byBus: [
        {
          type: "text",
          content:
            "There is regular bus service from Delhi to Dehradun, departing from Delhi's ISBT Kashmere Gate. We would suggest taking only government buses from ISBT Kashmere Gate. Private buses, which operate from outside ISBT, are less reliable.",
        },
        {
          type: "text",
          content:
            "Usually, buses drop you at Dehradun ISBT. From there, you will need to proceed to Dehradun Railway Station.",
        },
        {
          type: "header",
          content: "Travel from Dehradun to Sankri",
          subitems: [
            "THE CRAZY MOUNTAINEERS will arrange a Tata Sumo or similar vehicle to pick you up from Dehradun Railway Station at 6:00 AM.",
            "The pick-up is included in the cost of the trek.",
            "You will reach Sankri by approximately 5:00 PM.",
          ],
        },
        {
          type: "text",
          content:
            "Note: Food from Dehradun to Sankri is not included in the trek cost.",
        },
      ],
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
          "1 Pair of gaiters (The Crazy Mountaineers team will notify if required)",
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
        "Meals while on trek (Veg. + Egg)",
        "Trek equipment: Sleeping bag, mattress, tent (twin sharing), kitchen & dining tent, toilet tent, utensils, and crampon (if required)",
        "All necessary permits and entry fees",
        "First aid medical kits, stretcher, and oxygen cylinder",
        "Mountaineering qualified & professional trek leader, guide, and support staff",
        "Transport from Dehradun to Sankri and return (according to itinerary)",
        "Mules to carry the central luggage",
      ],
      exclusions: [
        "Any kind of personal expenses",
        "Food during the transit",
        "Insurance",
        "Mules or porter to carry personal luggage",
        "Anything not specifically mentioned under the head 'Inclusions'",
        "Any kind of emergency evacuation charges",
      ],
      additionalNotes: [
        {
          note: "Normally, THE CRAZY MOUNTAINEERS expect you to carry your personal luggage on your own. However, if you wish to offload your backpack, you can give it to a mule.",
        },
        {
          offloadingCharges: {
            advance: "INR 1200 if paid online 10 days in advance",
            onSpot: "INR 1500 if informed after reaching Sankri",
            weightLimit:
              "The backpack cannot weigh more than 11 kgs and must have a waterproof cover. Suitcases/strolleys/bags are not allowed.",
          },
        },
        {
          bookingInfo:
            "To book a Trek/adventure program, please use our online booking form, or alternatively, you can call us. For confirmation of your tour, you will need to wire a deposit and an initial payment.",
        },
      ],
    },
    faqData: [],
    trekCancellation: {
      menuName: "Trek Cancellation Policies",
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
  },
  {
    name: "Roopkund Trek",
    title: "Roopkund Trek - Say yes to new challenges",
    tourCode: "122132137",
    price: "₹ 9,499",
    overview: {
      title: "Roopkund Trek - Overview",
      paragraphs: [
        "The Rupin Pass trek is a glacial crossover from the state of Uttarakhand to Himachal Pradesh. The trek begins with a drive from Dehradun to Dhaula, which is a 130km long journey by road and ends at Sangla village in Himachal Pradesh. Dhaula is located at an altitude of 5,100 ft. The Rupin Pass trek boasts a max altitude of 15,300 ft. That's a massive gain in altitude, and therefore trekkers need to be prepared for this moderate to difficult grade trek as trekkers will have to cover about 10km each day.",
        "Rupin Pass is one of the best treks when it comes to diversity of sceneries & sudden changes in the trail. At one point, you might be climbing a steep trail that would suddenly change into an easy walk.",
        "The trek is full of surprises at every step, which includes the Jhaka Village, also known as the hanging village. The unique position of the village on the edge of the mountain makes it appear as if the village was hanging through the cliff.",
        "Apart from this, you will encounter a number of snow bridges, deep dark forests of fir, oak & rhododendron, waterfalls that appear to be falling from the sky, and the view of majestic Kinner Kailash at the end of the Rupin Pass Trek will surely leave you spellbound.",
      ],
    },
    mapImg: "",
    duraton: "8 Days",
    distance: "53 km",
    altitude: "15,696",
    Grade: ["Difficult", "Moderate"],
    location: {
      state: "Uttarakhand",
      region: "Uttarkashi",
      wildlifeSanctuary: "",
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
        title: "Dehradun to Dhaula (Rupin Pass Trek Itenary)",
        description: `The first day of the trek begins with a 190 km long ride from Dehradun to Dhaula and takes around 7 hours. The ride will be filled with the scenic beauty of the mountains. You will pass through the queen of hills - Mussooriee, Purola, Mori & Naitwar as we drive alongside the Yamuna river. Upon arrival at Dhaula you will be served hot dinner by The Crazy Mountaineers team.s`,
        briefOverview: [
          "Altitude: 7,660 ft.",
          "Distance: 210 Km drive, approximately 10 hours.",
          "Network: Available.",
          "Pickup from Kathgodam Railway Station.",
          "Overnight stay in Guest house.",
        ],
      },
      {
        day: "Day 2",
        title: "Lohargunj to Didna Village",
        description: `Today after having breakfast, we will start walking. The trail at the beginning is simple and flat, and we will be crossing Wan & Kulling villages. Kulling is a masterpiece of nature. You can spot various exotic birds in this beautiful village which has a very low population. 

As we keep walking further, we will climb down to the bed of the river called Neel Ganga and cross the bridge over the river. After crossing the bridge the trail starts to get a bit steeper. Soon we will reach the Didna village which is at an altitude of 8000 ft. above the sea level. Overnight stay in camps`,
        briefOverview: [
          "Trekking Distance: 7 Km",
          "Highest Altitude: 8,050 ft.",
          "Network: Available",
          "Stay at Didna Village.",
        ],
      },
      {
        day: "Day 3",
        title: "Didna Village to Ali Bugyal",
        description: `Today we will be passing through the beautiful village of Ali Bugyal, located at an high altitude of 11,000 ft. We will leave Didna to climb up to Ali Bugyal on a slightly ascending trail. There is another trail that goes to Ali Bugyal from the village which is shorter but steeper. You will be able to spot the beautiful trees of Oak, Birch and Rhododendron on the way. 

As we reach closer to our destination the tree line starts to shrink gradually and you will find open grasslands in the area. As you reach the top of Ali Bugyal, you will find a vast open meadow and if the weather is clear you will also be able to spot Mount Trishul & Mrighthuni. The trek will take around 4 hours to complete and we will spend the night in camps.`,
        briefOverview: [
          "Trekking Distance: 11 Km",
          "Highest Altitude: 11,300 ft.",
          "Overnight stay in camps.",
        ],
      },
      {
        day: "Day 4",
        title: "Ali Bugyal to Patar Nachauni via Bedni Bugyal and Ghora Lotani",
        description: `On the fourth day of the Roopkund trek we will start walking in the morning and our destination will be Gora Lutami, one of the most beautiful camping spots of the area. As we keep climbing further you will see the drastic changes in weather and the thinning of air which has less oxygen to breathe as we inch closer to 12,800 ft. 

After trekking for 10 km we will finally arrive at our camping destination for today at Gora Lutami. We will spend some time acclimatizing and the night would be spent at camps.`,
        briefOverview: [
          "Trekking Distance: 10 Km",
          "Highest Altitude: 12,800 ft.",
          "Easy Trail",
          "Overnight stay in camps.",
        ],
      },
      {
        day: "Day 5",
        title: "Ghora lotani to Bhagwabasa",
        description: `Today we will wake up early in the morning as we have a very long day ahead of us. After having our breakfast we will start walking on a steep trail and will cover approximately 10 Km. Our destination for today is Bagubasa which is located at an extremely high altitude of 14,000 ft. 

We will visit the Kalu Vinayak temple located on the same trail. Make sure to carry hot water to drink and wear proper clothes to reduce the chances of Altitude Mountain Sickness (AMS). Walk slowly and steadily on the slippery spots.

As we keep climbing the air will start to get even thinner and that might cause headaches and stomach pain but dont worry as we can rest if needed. Once you reach the temple, you will be able to spot the Roopkund Lake which is the final destination of our trek. We will follow a trail to Bhagubasa which is located about a kilometer away from the temple. Overnight stay at Bhagubasa.`,
        briefOverview: [
          "Trekking Distance: 10 Km",
          "Highest Altitude: 14,100 ft.",
          "Visit Kaluvinayak Temple",
          "Steep trail",
          "Overnight stay in camps.",
        ],
      },
      {
        day: "Day 6",
        title: "Bhagwabasa to Roopkund and back to Bedni Bugyal",
        description: `We wake up early in the morning and after having breakfast, we will push to our final destination - Roopkund. The path is easy but the high altitude makes it difficult to cover 5 Km to the Roopkund Lake at 16,000 ft. 

As we reach the lake, and if you are lucky, you might be able to spot hundreds of human skeletons on the bed of the lake. It is believed that a king and his fellowmen were travelling to Nanda Devi but a hailstorm caused this devastation.

From this point we walk further on a steep trail to reach Nanda Devi Temple. After spending some time at the temple, we will start descending back to Bhagwabasa. If you think it would be easier to descend than it was to ascend, then you are mistaken. Walk very slowly and carefully as the steep downward trail increases the chances of disbalance and falling down.

This is one of the most difficult days of the Roopkund trek and we will be climbing down through Ghora Lotani all the way down to Bedni Bugyal. Overnight stay in camps.`,
        briefOverview: [
          "Trekking Distance: 15 Km",
          "Highest Altitude: 16,000 ft.",
          "Overnight stay at Bedni Bugyal.",
        ],
      },
      {
        day: "Day 7",
        title: "Bedni bugyal to Loharjung",
        description: `Today is the last day when you will have to walk on the Roopkund trek. It's another long day and we will retrace our steps back through the same trail we came from. Once again we will cross Neel Ganga through Wan village and back to Lohajung. The travelling distance is around 15 Km and a 10 hour walk.`,
        briefOverview: [
          "Trekking Distance: 15 Km",
          "Trekking Time: 10 Hours",
          "Stay at Lohajung.",
        ],
      },
      {
        day: "Day 8",
        title: "Loharjung to kathgodam",
        description: `Today is the last day of the Roopkund trek. The drive from Lohajung will take you back to Kathgodam and you will be dropped at the railway station. The 210 Km long drive will take 10 hours to complete.`,
        briefOverview: [
          "Driving Distance: 210 Km",
          "Driving Time: 10 Hours",
          "Drop off at Kathgodam Railway Station.",
        ],
      },
    ],
    QuickFacts: {},
    howToReach: {
      byAir:
        "You can take a flight from Delhi to Dehradun. From Dehradun, you can take a train to Kathgodam or drive there. The Naini Jan Shatabdi leaves at 3:45 pm, and the Kathgodam Express leaves at 11:25 pm. From Kathgodam, you can take a taxi to Lohajung, which is the base camp. The taxi journey takes approximately 7 hours and 45 minutes.",

      byTrain: [
        {
          name: "Ranikhet Express",
          trainNo: 15013,
          departure: "10:40 PM",
          arrival: "5:30 AM",
          additionalInfo:
            "Takes approximately 7 hours, 45 minutes by taxi from Kathgodam to Lohajung.",
        },
        {
          name: "Uttar Sampark Kranti Express",
          trainNo: 15035,
          departure: "4:00 PM",
          arrival: "10:40 PM",
          additionalInfo:
            "Takes approximately 7 hours, 45 minutes by taxi from Kathgodam to Lohajung.",
        },
      ],

      byBus: [
        {
          type: "text",
          content:
            "Regular buses leave from ISBT Delhi Anand Vihar Station for Nainital. These are government buses that are punctual and trustworthy.",
        },
        {
          type: "text",
          content:
            "Get down at the Haldwani railway station and take a taxi from there to Lohajung. Haldwani Railway Station is only 4 km from Kathgodam Railway Station.",
        },
        {
          type: "header",
          content: "Reaching Lohajung by Bus",
          subitems: [
            "From Haldwani Railway Station, take a taxi to Lohajung. The taxi journey takes approximately 7 hours and 45 minutes.",
          ],
        },
      ],
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
          "Walking stick (at least one advisable)",
          "Head torch - 1 Nos.",
          "Water bottle/Hydration pack - 2 bottles of one litre each",
          "Hydration pack users: 1 hydration pack + 1 litre bottle",
          "Carry at least one thermos flask",
          "Snacks: Energy bars, dry fruits, electral/ORS",
        ],
      },
      {
        category: "Personal Medical Kit",
        items: ["Consult your doctor"],
      },
      {
        category: "Clothing",
        items: [
          "2 Full sleeves T-shirts (non-cotton)",
          "1 Fleece T-shirt",
          "1 Fleece jacket (alternative: woollen sweater)",
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
          "1 Neck gaiter",
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
        "Accommodation: Home stay, Camping",
        "Meals while on trek (Veg. + Egg)",
        "Trek equipment: Sleeping bag, mattress, tent (twin sharing), kitchen & dining tent, toilet tent, utensils, and crampon (if required)",
        "All necessary permits and entry fees",
        "First aid medical kits, stretcher, and oxygen cylinder",
        "Mountaineering qualified & professional trek Leader, guide, and Support staff",
        "Transport from Dehradun to Sankri and return (according to itinerary)",
        "Mules to carry the central luggage",
      ],
      exclusions: [
        "Any kind of personal expenses",
        "Food during the transit",
        "Insurance",
        "Mules or porter to carry personal luggage",
        "Anything not specifically mentioned under the inclusions",
        "Any kind of emergency evacuation charges",
      ],
      additionalNotes: [
        {
          note: "Normally, THE CRAZY MOUNTAINEERS expect you to carry your personal luggage on your own. If you wish to offload your backpack, you can give it to a mule.",
        },
        {
          offloadingCharges: {
            advance:
              "INR 1200/- if you make an online payment, 10 days in advance",
            onSpot: "INR 1500/- if you inform us after reaching Sankri",
            weightLimit:
              "The backpack cannot weigh more than 11 kgs. Backpack should have a waterproof cover. Suitcases/strolleys/bags will not be allowed.",
          },
        },
      ],
    },
    importantNotes: [],
    faqData: [],
    trekCancellation: {
      menuName: "Trek Cancellation Policies",
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
  },
  {
    name: "Valley of flowers",
    title: "Valley of flowers - Walk The Medows",
    tourCode: "122132138",
    price: "₹  8,999",
    mapImg: "",
    overview: {
      title: "Valley of flowers Overview",
      paragraphs: [
        "The Valley of Flowers trek is one of the most beautiful treks in India. It is located on the way to Hemkund Sahib in the Govind Ghat region. Hemkund Sahib is an important pilgrim location for both Sikh & Hindu religion. Hemkund is a lake situated at a high altitude of 4,392 m and there is a Gurudwara and a temple of Lord Lakshman built on the banks of the lake. It is believed that Guru Govind Singh, the tenth guru of Sikhs meditated on the bank of this lake.",
        "The Blue Primula, which is one of the most beautiful Himalayan flowers, can be spotted growing wild all over the valley of flowers. The best time to visit this picturesque Valley of Flowers is during the months of July & August.",
      ],
    },
    duraton: "6 Days",
    distance: "37 km",
    altitude: "14,100",
    Grade: ["Easy"],
    location: {
      state: "Uttarakhand",
      region: "Chamoli",
      wildlifeSanctuary: "",
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
        title: "Kathgodam to Lohajung",
        description: `Govind Ghat is the base camp for valley of flowers trek and Hemkund Sahib, being an important pilgrim location, Govind Ghat is visited by thousands of devotees each year. You will be picked up from Haridwar Railway Station and are expected to arrive during the evening. The 290 Km journey will take around 10 hour to complete. Upon arrival, overnight stay will be at the guest house.`,
        briefOverview: [
          "Driving Distance - 290 Km",
          "Driving Time - 10 Hours",
          "Max Altitude - 6,700 ft.",
          "Network - Available",
          "Stay at the Guest House",
        ],
      },
      {
        day: "Day 2",
        title: "Govindghat to Ghangaria via Pulna & Govind ghat",
        description: `Our first destination for today will be Pulna which is located at a distance of 4 Km from Govind Ghat. Porters and ponies can be hired from Pulna for the trek. Beyond Pulna we will walk along the Lakshman Ganga river, walking on a stone-paved gradually ascending path.

The trail is full of majestic views of mountains, waterfalls and water streams. The trail at the end gets much steeper and harder as we close on our final destination of the day towards Ghangharia about 9 Km away from Pulna.`,
        briefOverview: [
          "Trekking Distance - 13 Km",
          "Trekking Time - 5 Hours",
          "Network - BSNL",
          "Stay at Guest House",
        ],
      },
      {
        day: "Day 3",
        title: "Ghangaria - Hemkund Sahib - Ghangaria.",
        description: `Today is an exciting day as we are scheduled to visit the highest Gurdwara in the world - Hemkund Sahib at an altitude of 4,330 m. Ghangaria is the base camp for both Hemkund Sahib and the valley of flowers. We will be trekking up to Hemkund Sahib and coming back to Ghangaria which will take about 10 hours.

We will start walking early in the morning amidst the panoramic views of mountain ranges and cross a melting glacier which has laid frozen for years. After we reach the Hemkund Sahib Gurudwara, you will be able to spot the famous Hemkund Lake, which remains frozen almost half of the year. After spending some time at the Gurudwara we will be heading back to Ghangaria`,
        briefOverview: [
          "Trekking Distance - 4km",
          "Trekking Time - 10 hours",
          "Max Altitude - 11,500 ft.",
          "Overnight stay at the guest house",
        ],
      },
      {
        day: "Day 4",
        title: " Ghangaria - Valley of Flowers - Ghangaria",
        description: `Govind Ghat is the base camp for valley of flowers trek and Hemkund Sahib, being an important pilgrim location, Govind Ghat is visited by thousands of devotees each year. You will be picked up from Haridwar Railway Station and are expected to arrive during the evening. The 290 Km journey will take around 10 hour to complete. Upon arrival, overnight stay will be at the guest house.`,
        briefOverview: [
          "Trekking Distance - 10 Km",
          "Trekking Time - 8 Hours",
          "Max Altitude - 14,100 ft.",
          "Overnight stay at guest the house",
        ],
      },
      {
        day: "Day 5",
        title: "Ghangaria - GovindGhat",
        description: `Today we will be trekking back to Govind Ghat form Ghangaria. 13 Km trek will take around 5 hours. Since we will be spending the day at Govind Ghat, you have an option to hire a cab and visit the Badrinath Temple which is located at a distance of 25 km from Govind Ghat and the taxi will take about 1 hour to reach.`,
        briefOverview: [
          "Trekking Distance - 13 km.",
          "Trekking Time - 5 hours",
        ],
      },
      {
        day: "Day 6",
        title: "Departure Day",
        description: `Today is the last day of the valley of flowers trek. We will be driving back the same route 290 Km back to Haridwar railway station where you will be dropped.`,
        briefOverview: ["Driving Distance - 290 Km", "Driving Time - 10 Hours"],
      },
    ],
    QuickFacts: {},
    howToReach: {
      byAir:
        "Jolly Grant Airport in Dehradun serves as the nearest airport to Haridwar. Direct flights from Mumbai and Delhi, as well as connecting flights from other cities, are available. Local transportation is available from the airport to reach Haridwar by road from Dehradun.",

      byTrain: [
        {
          name: "Haridwar Railway Station",
          description:
            "Haridwar has its own railway station, connecting it well to major cities like Delhi, Kolkata, Mumbai, Dehradun, Jaipur, Ahmedabad, Patna, Gaya, Varanasi, Bhubaneswar, Puri, and Kochi through various express trains.",
        },
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

      byBus: [
        {
          type: "text",
          content:
            "Haridwar is accessible by road from Delhi, Haryana, UP, Punjab, and other parts of Uttarakhand. A number of state and private buses connect Haridwar to these locations with frequent, economical services.",
        },
        {
          type: "text",
          content:
            "For visitors traveling to Dehradun, regular buses are available from Delhi’s ISBT Kashmere Gate. We recommend choosing government buses from ISBT Kashmere Gate, as private buses operating from outside ISBT may be less reliable.",
        },
        {
          type: "header",
          content: "Travel from Dehradun to Sankri",
          subitems: [
            "THE CRAZY MOUNTAINEERS will arrange a Tata Sumo or similar vehicle to pick you up from Dehradun Railway Station at 6:00 AM.",
            "The pick-up is included in the trek cost.",
            "You will reach Sankri by approximately 5:00 PM.",
          ],
        },
        {
          type: "text",
          content:
            "Note: Food from Dehradun to Sankri is not included in the trek cost.",
        },
      ],
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
          "1 Pair of gaiters (The Crazy Mountaineers team will notify if required)",
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
        "Meals while on trek (Veg. + Egg)",
        "Trek equipment: Sleeping bag, mattress, tent (twin sharing), kitchen & dining tent, toilet tent, utensils, and crampon (if required)",
        "All necessary permits and entry fees",
        "First aid medical kits, stretcher, and oxygen cylinder",
        "Mountaineering qualified & professional trek leader, guide, and support staff",
        "Transport from Dehradun to Sankri and return (according to itinerary)",
        "Mules to carry the central luggage",
      ],
      exclusions: [
        "Any kind of personal expenses",
        "Food during the transit",
        "Insurance",
        "Mules or porter to carry personal luggage",
        "Anything not specifically mentioned under the head 'Inclusions'",
        "Any kind of emergency evacuation charges",
      ],
      additionalNotes: [
        {
          note: "Normally, THE CRAZY MOUNTAINEERS expect you to carry your personal luggage on your own. However, if you wish to offload your backpack, you can give it to a mule.",
        },
        {
          offloadingCharges: {
            advance: "INR 1200 if paid online 10 days in advance",
            onSpot: "INR 1500 if informed after reaching Sankri",
            weightLimit:
              "The backpack cannot weigh more than 11 kgs and must have a waterproof cover. Suitcases/strolleys/bags are not allowed.",
          },
        },
        {
          bookingInfo:
            "To book a Trek/adventure program, please use our online booking form, or alternatively, you can call us. For confirmation of your tour, you will need to wire a deposit and an initial payment.",
        },
      ],
    },
    faqData: [],
    trekCancellation: {
      menuName: "Trek Cancellation Policies",
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
  },
];
