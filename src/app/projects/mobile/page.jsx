import PagePadding from "../../../../components/server/layout/PagePadding";
import SectionHeader from "../../../../components/server/header/SectionHeader";
import MobileProject from "../../../../components/server/projects-page/MobileProject";
import VerticalSeperator from "../../../../components/server/layout/VerticalSeperator";

import auto1 from "../../../../public/project-screenshots/mobile/autotrader19/autotrader19-1.jpg";

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
      </PagePadding>
    </section>
  );
}
