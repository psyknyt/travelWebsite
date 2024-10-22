import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const FAQAccordion = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (index) => {
    setOpen(open === index ? 0 : index); // Toggle open/close on click
  };

  // Data for FAQs
  const faqData = [
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
  ];

  return (
    <div className="w-full mx-auto my-8">
      {faqData.map((menu, index) => (
        <Accordion
          key={index}
          open={open === index + 1}
          icon={<Icon id={index + 1} open={open} />}
          className="border-b-[1px] border-gray-300 pb-2"
        >
          <AccordionHeader
            onClick={() => handleOpen(index + 1)}
            className={`font-normal pb-0 ${
              open === index + 1 ? "text-red-400 text-lg" : " text-sm  "
            }`}
          >
            {menu.menuName}
          </AccordionHeader>
          <AccordionBody>
            <ul className="list-none pl-0 gap-1">
              {menu.items.map((item, i) => (
                <li
                  key={i}
                  className="py-1 px-2 font-normal transition-all duration-300 ease-in-out hover:bg-gray-100 flex justify-start items-start cursor-pointer w-full"
                >
                  {item}
                </li>
              ))}
            </ul>
          </AccordionBody>
        </Accordion>
      ))}
    </div>
  );
};

// Icon component for Accordion
const Icon = ({ id, open }) => {
  return (
    <span>
      {open === id ? (
        <svg
          className="w-4 h-4 rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      ) : (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 15l7-7 7 7"
          ></path>
        </svg>
      )}
    </span>
  );
};

export default FAQAccordion;
