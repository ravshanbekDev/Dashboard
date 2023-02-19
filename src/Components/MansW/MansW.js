import React from "react";
import Tom from "../../Images/img1.png";
import MattDamon from "../../Images/img2.png";
import RobertDowney from "../../Images/img3.png";
import ChristianBale from "../../Images/img4.png";
import HenryCavil from "../../Images/img5.png";
import ChrisEvans from "../../Images/img6.png";
import SamSmith from "../../Images/img6.png";
import SteveRogers from "../../Images/img7.png";
import Mans from "../Mans/Mans";

export default function MansW() {
  return (
    <div>
      <Mans Img={Tom} caption={"Contact Email not Linked"} title={"Updated 1 day ago"} customer={"Tom Cruise"} on={"on 24.05.2019"} date={"May 26, 2019"} dateNum={"6:30 PM"} btnName={"High"} color={true}/>

      <Mans Img={MattDamon} caption={"Adding Images to Featured Posts"} title={"Updated 1 day ago"} customer={"Matt Damon"} on={"on 24.05.2019"} date={"May 26, 2019"} dateNum={"8:00 AM"} btnName={"low"} color={false}/>

      <Mans Img={RobertDowney} caption={"When will I be charged this month?"} title={"Updated 1 day ago"} customer={"Robert Downey"} on={"on 24.05.2019"} date={"May 26, 2019"} dateNum={"7:30 PM"} btnName={"High"} color={true}/>

      <Mans Img={ChristianBale} caption={"Payment not going through"} title={"Updated 2 days ago"} customer={"Christian Bale"} on={"on 24.05.2019"} date={"May 25, 2019"} dateNum={"5:00 PM"} btnName={"Normal"} style={{
        background: "#29CC97",
      }}/>

      <Mans Img={HenryCavil} caption={"Unable to add replies"} title={"Updated 2 days ago"} customer={"Henry Cavil"} on={"on 24.05.2019"} date={"May 25, 2019"} dateNum={"4:00 PM"} btnName={"High"} color={true}/>

      <Mans Img={ChrisEvans} caption={"Downtime since last week"} title={"Updated 3 days ago"} customer={"Chris Evans"} on={"on 23.05.2019"} date={"May 25, 2019"} dateNum={"2:00 PM"} btnName={"Normal"} style={{
        background: "#29CC97",
      }}/>

      <Mans Img={SamSmith} caption={"Referral Bonus"} title={"Updated 4 day ago"} customer={"Sam Smith"} on={"on 22.05.2019"} date={"May 25, 2019"} dateNum={"11:30 AM"} btnName={"low"} color={false}/>

      <Mans Img={SteveRogers} caption={"How do I change my password?"} title={"Updated 6 days ago"} customer={"Steve Rogers"} on={"on 21.05.2019"} date={"May 24, 2019"} dateNum={"1:00 PM"} btnName={"Normal"} style={{
        background: "#29CC97",
      }}/>
    </div>
  );
}
