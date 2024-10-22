import React from "react";

import BookingForm from "./BookingForm";
import FAQAccordion from "./FAQAccordion";
import QuickFacts from "./QuickFacts";
import EssentialItems from "./EssentialItems";
import TrekTerms from "./TrekTerms";
import HowToReach from "./HowToReach";
import ReviewForm from "./ReviewForm";

// image imports
import kedarkanthaTrek from "../../assets/Kedarkantha_Trek_thumb.jpg";
import dyaraBuyalTrek from "../../assets/Dayara_Bugyal_Trek_thumb.jpg";
import jammuKashmir from "../../assets/jammu-kashmir.jpg";
import himachalPradesh from "../../assets/himachal-pradesh.jpg";
import DeoriTalTrek from "../../assets/Deoria_Tal_Chopta_Chandrashila_Trek_thumb.jpg";
import kedarnathTrek from "../../assets/Kedarnath_Yatra_thumb.jpg";
import harKiDunTrek from "../../assets/Har_Ki_Dun_Trek_thumb.jpg";
import gaumukhTapovanTrek from "../../assets/Gaumukh_Tapovan_thumb.jpg";
import { IoPricetagOutline } from "react-icons/io5";
import { CiBarcode } from "react-icons/ci";
import trekMap from "../../assets/maps/Kedarkantha-Trek-Route-Map.jpg";

const ServicePage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[80%] mx-auto max-w-[1200px] text-sm font-inter tracking-wide">
      <div className="flex w-full justify-start items-start font-bold text-[30px] tracking-wide font-inter py-5">
        Har ki Dun Trek
      </div>
      <div className="flex w-full h-fit md:h-[50vh] flex-col md:flex-row justify-between items-center gap-1 rounded-xl ">
        <div className="flex flex-col w-full md:w-[65%] h-full rounded-xl md:rounded-none md:rounded-tl-xl md:rounded-bl-xl overflow-hidden">
          <img
            src={kedarkanthaTrek}
            className="w-full h-full  transition-all duration-500 ease-in-out rounded-tl-xl rounded-bl-xl items-center justify-center object-cover object-center hover:scale-110"
          />
        </div>
        <div className="flex flex-col w-full md:w-[35%] h-full gap-1 overflow-hidden rounded-tr-xl rounded-br-xl ">
          <div className="w-full h-1/2 overflow-hidden">
            <img
              src={harKiDunTrek}
              className="w-full hover:scale-110  transition-all duration-500 ease-in-out h-full items-center justify-center object-cover object-center"
            />
          </div>
          <div className="flex flex-row justify-center items-center w-full h-1/2 gap-1">
            <div className="w-1/2 h-full overflow-hidden">
              <img
                src={harKiDunTrek}
                className="w-full hover:scale-110 h-full items-center justify-center object-cover object-center transition-all duration-500 ease-in-out"
              />
            </div>
            <div className="w-1/2 h-full overflow-hidden relative">
              <img
                src={harKiDunTrek}
                className="w-full hover:scale-110 h-full items-center justify-center object-cover object-center transition-all duration-500 ease-in-out"
              />
              <div className="absolute bottom-0 right-5 mb-2 rounded-xl text-sm px-4 py-2 bg-gray-700 text-white hover:bg-gray-600  transition-all duration-300 ease-in-out cursor-pointer">
                See all
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  flex-col lg:flex-row justify-between items-start gap-4 py-5 h-fit">
        <div className="flex flex-col justify-center items-center overflow-y-auto w-full lg:w-[70%]">
          <div className="flex justify-between items-start w-[50%] mr-auto">
            <div className="flex justify-start items-center py-5 w-full gap-2">
              <div className="flex w-[45px] h-[45px]  flex-row justify-center items-center px-2 py-2 rounded-lg border-[2px] border-gray-300">
                <CiBarcode className="" />
              </div>
              <div className="flex flex-col text-sm font-inter tracking-wider">
                <div className="font-normal">Tour Code</div>
                <div className="font-light text-xs text-gray-500">
                  121312321
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center py-5 w-full gap-2">
              <div className="flex w-[45px] h-[45px]  flex-row justify-center items-center px-2 py-2 rounded-lg border-[2px] border-gray-300">
                <IoPricetagOutline className="" />
              </div>
              <div className="flex flex-col text-sm font-inter tracking-wider">
                <div className="font-normal">Price</div>
                <div className="font-light text-xs text-gray-500">
                  from ₹2000
                </div>
              </div>
            </div>
            {/* <div className="flex justify-start items-center py-5 w-full gap-2">
          <div className="flex w-[45px] h-[45px]  flex-row justify-center items-center px-2 py-2 rounded-lg border-[2px] border-gray-300">
            <IoPricetagOutline className="" />
          </div>
          <div className="flex flex-col text-sm font-inter tracking-wider">
            <div className="font-normal">Price</div>
            <div className="font-light text-xs text-gray-500">from ₹2000</div>
          </div>
        </div> */}
          </div>
          <div className="flex flex-col font-inter justify-between items-start w-full mr-auto">
            <div className="heading text-[30px] flex justify-start items-start mb-10 font-semibold tracking-wider">
              Description
            </div>
            <div className="flex flex-col gap-8 w-full text-[14px]  tracking-wider py-5">
              <div className="sub-heading text-[20px] flex justify-start items-start font-semibold tracking-wider">
                Har ki Dun overview
              </div>
              <p>
                Kedarkantha Trek is one of the most famous winter treks in
                India. The trek starts from a village called Sankri in the
                Uttarkashi district and gains the maximum height of 12,500 feet
                (3,800 m) at the Kedarkantha Peak. There are other routes that
                can connect you to the Kedarkantha Peak, like an eastern ridge,
                western ridge, and Phulara ridge. But, the villages connected to
                these areas are not much explored so most of the trekkers use
                the Sankri route.
              </p>
              <p>
                Being a winter trek, the Kedarkantha Trek receives heavy
                snowfall and is one of the best treks for beginners. It is not a
                short trek, it takes around 5-6 days to the summit and back (if
                you are starting from Dehradun). Kedarkantha trek is located in
                the range of Govind Wildlife Sanctuary in Uttarkashi district of
                Uttarakhand and the best time to visit is from December to
                April.
              </p>
              <p>
                As soon as you arrive at Sankri, you start to capture the
                wonderful views of the mountains and the diverse flora & fauna
                of the area. With these amazing imagery in mind, you move
                forward to Juda ka Talab from Sanakri and you see clearings in
                the middle of the forest, multiple colors, meadow, and sun rays
                shining down the lovely forest will make you mesmerized and
                amazed.
              </p>
              <p>
                A stunning view of snow capped ranges like Har ki dun from Juda
                ka Talab will make you feel lost in the beauty of nature. In
                winters, Juda ka Talab is completely frozen due to a minimum
                temperature of -7 degrees, and this lake is also known as a
                frozen lake of India.
              </p>
              <p>
                Finally going from base camp Juda ka Talab to Kedarkantha peak
                is one of the best feelings in the world. To witness the beauty
                of the sun rising from the peak can bring joy to your mundane
                life. This is just magical to see such a splendid view that
                strikes you at once.
              </p>
              <p>
                In addition, you can explore more at the Sankri village while we
                stop there for a few hours. On your way to the Sankri village,
                you can also visit a village called Lakhamandal. Based on
                ancient beliefs, this village keeps a mythological history of
                Mahabharata. According to this belief, the fifth brother of
                Pandava named Sahadeva visited this place and buried lakhs of
                Shivling under the range of this village and much more.
              </p>
              <p>
                In order to reach Kedarkantha trek from Delhi, you need to
                travel to Dehradun and catch the bus to Sankri from Dehradun
                Railway Station.
              </p>
            </div>
          </div>
          <div className="w-full h-full flex flex-col justify-between items-center gap-4">
            <div className="w-full flex justify-start items-start">
              A rough map of Kedarkantha Trek Route, not to scale.
            </div>
            <img
              className="w-full h-full object-contain rounded-md"
              src={trekMap}
              alt="trek-map"
            />
          </div>
          <QuickFacts />
          <HowToReach />
          <EssentialItems />
          <TrekTerms />
          <FAQAccordion />
          <ReviewForm />
        </div>
        <BookingForm />
        {/* <div className="w-[30%] sticky top-4 right-0 rounded-xl h-[50vh] border-[2px] border-gray-300 ml-4">
          <div className="">Booking form</div>
        </div> */}
      </div>
    </div>
  );
};

export default ServicePage;
