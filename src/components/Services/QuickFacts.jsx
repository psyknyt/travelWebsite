import React from "react";

const QuickFacts = () => {
  return (
    <div className="rounded-lg flex flex-col justify-start items-start mr-auto">
      <h2 className="text-lg font-bold mb-4">Quick Facts</h2>
      <ul className="list-disc list-inside text-sm space-y-2">
        <li>
          <span className="font-semibold">Duration:</span> 7 Days / 6 Nights
        </li>
        <li>
          <span className="font-semibold">Highest Point:</span> 11,675 ft (Har
          Ki Dun Valley)
        </li>
        <li>
          <span className="font-semibold">Distance:</span> 47 km (round trip)
        </li>
        <li>
          <span className="font-semibold">Difficulty:</span> Easy to Moderate
        </li>
        <li>
          <span className="font-semibold">Temperature:</span>
          <ul className="ml-4 list-none">
            <li>Day: 10℃ to 15℃</li>
            <li>Night: 2℃ to -5℃</li>
          </ul>
        </li>
        <li>
          <span className="font-semibold">Starting Point:</span> Sankri Village
        </li>
        <li>
          <span className="font-semibold">Base Camp:</span> Sankri (reachable
          from Dehradun)
        </li>
        <li>
          <span className="font-semibold">Nearest Railway Station:</span>{" "}
          Dehradun
        </li>
        <li>
          <span className="font-semibold">Nearest Airport:</span> Jolly Grant
          Airport, Dehradun
        </li>
        <li>
          <span className="font-semibold">ATM:</span> Last ATM is in Purola
          before you start the trek
        </li>
        <li>
          <span className="font-semibold">Best Time to Visit:</span> April to
          Mid-June and October to Mid-November
        </li>
      </ul>
    </div>
  );
};

export default QuickFacts;
