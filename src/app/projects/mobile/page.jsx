import PagePadding from "../../../../components/server/layout/PagePadding";
import SectionHeader from "../../../../components/server/header/SectionHeader";
import MobileProject from "../../../../components/server/projects-page/MobileProject";
import VerticalSeperator from "../../../../components/server/layout/VerticalSeperator";

import auto1 from "../../../../public/project-screenshots/mobile/autotrader19/autotrader19-1.jpg";

import turktvbox1 from "../../../../public/project-screenshots/mobile/turktvbox/turktvbox-1.jpg";
import turktvbox2 from "../../../../public/project-screenshots/mobile/turktvbox/turktvbox-2.jpg";
import turktvbox3 from "../../../../public/project-screenshots/mobile/turktvbox/turktvbox-3.jpg";
import turktvbox4 from "../../../../public/project-screenshots/mobile/turktvbox/turktvbox-4.jpg";
import turktvbox5 from "../../../../public/project-screenshots/mobile/turktvbox/turktvbox-5.jpg";

export default function MobileProjectsPage() {
  return (
    <section>
      <PagePadding>
        <SectionHeader doubleSideSeperator={true}>
          Mobile Projects
        </SectionHeader>
        <MobileProject
          headerText={"AutoTrader19"}
          imageData={[
            {
              path: auto1,
              caption: "Currencies page",
            },
          ]}
          customAspectRatio={{ aspectRatio: 47 / 100 }}
        >
          Autotrader19 is a platform where you can add cryptocurrency pairs and
          enable the server to automatically communicate with the Binance API to
          perform automated buying and selling. In addition to the server
          component, there is also a mobile application that allows you to
          control the pairs. You can add the cryptocurrency pairs you want to
          track or trade on the platform. For example, you can list pairs such
          as BTC/USDT, ETH/BTC. The automated buying and selling algorithm
          running on the server can automatically execute trades on the Binance
          exchange based on the cryptocurrency pairs you specify. This allows
          for trading based on market fluctuations. Using the mobile application
          provided by Autotrader19, you can control the cryptocurrency pairs you
          have added and the automated trading strategies. With this
          application, you can monitor the market conditions, adjust trading
          strategies, and modify your pairs when necessary.
        </MobileProject>
        <VerticalSeperator></VerticalSeperator>
        <MobileProject
          headerText={"TurkTVBox"}
          imageData={[
            {
              path: turktvbox1,
              caption: "Main page with continue from where you left",
            },
            {
              path: turktvbox2,
              caption: "Anime category",
            },
            {
              path: turktvbox3,
              caption: "Series episode selection & details",
            },
            {
              path: turktvbox4,
              caption: "Season selection & episode selection",
            },
            {
              path: turktvbox5,
              caption: "Video player",
            },
          ]}
        >
          TurkTvBox is a video streaming app with the functionality to save
          where you left off. It scrapes the data from configurable sources. It
          is coded with kotlin and UI with Jetpack Compose.
        </MobileProject>
      </PagePadding>
    </section>
  );
}
