import React from "react";

const HowToReach = () => {
  return (
    <div className="p-4 ">
      <h1 className="text-3xl font-bold mb-4">How to Reach</h1>

      {/* By Air Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">By Air</h2>
        <p className="mb-2">
          Jolly Grant Airport is the airport serving Dehradun, located about 25
          km from the city. There is a daily flight from Delhi to Dehradun.
        </p>
      </section>

      {/* By Train Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">By Train</h2>
        <p className="mb-2">Take the overnight train to Dehradun from Delhi:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Nandadevi Express</strong> - Train no: 12205 (Departure:
            11:50 PM; Arrival: 5:40 AM)
          </li>
          <li>
            <strong>Dehradun Express</strong> - Train no: 12687 (Departure: 9:10
            PM; Arrival: 5:00 AM)
          </li>
        </ul>
      </section>

      {/* By Bus Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">By Bus</h2>
        <p className="mb-2">
          There is regular bus service from Delhi to Dehradun, from Delhi's ISBT
          Kashmere Gate.
        </p>
        <p className="mb-2">
          We suggest you take only government buses from ISBT Kashmere Gate.
          Private buses operate from outside ISBT, but they are not as
          trustworthy.
        </p>
        <p className="mb-2">
          Buses usually drop you at Dehradun ISBT, from where you need to come
          to Dehradun Railway Station.
        </p>
      </section>

      {/* Pickup Information Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Pickup Information</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            5 to 8 Members: Bolero, 8+ Members: Tempo Traveller or similar
            vehicles will pick you up from Dehradun Railway Station at 6:00 AM.
          </li>
          <li>Pick-up is included in the cost of the trek.</li>
          <li>You will reach Sankri by 5:00 PM.</li>
          <li>
            Food from Dehradun to Sankri is not included in the trek cost.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default HowToReach;
