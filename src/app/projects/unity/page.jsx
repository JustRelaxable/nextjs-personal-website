import ImageShowcase from "../../../../components/client/ImageShowcase";
import SectionHeader from "../../../../components/server/header/SectionHeader";
import PagePadding from "../../../../components/server/layout/PagePadding";
import styles from "./page.module.css";

import emily1 from "../../../../public/project-screenshots/unity/emilys-adventures/emily-adventures-1.webp";
import emily2 from "../../../../public/project-screenshots/unity/emilys-adventures/emily-adventures-2.webp";
import emily3 from "../../../../public/project-screenshots/unity/emilys-adventures/emily-adventures-3.webp";
import emily4 from "../../../../public/project-screenshots/unity/emilys-adventures/emily-adventures-4.webp";
import emily5 from "../../../../public/project-screenshots/unity/emilys-adventures/emily-adventures-5.webp";
import emily6 from "../../../../public/project-screenshots/unity/emilys-adventures/emily-adventures-6.png";
import emily7 from "../../../../public/project-screenshots/unity/emilys-adventures/emily-adventures-7.png";
import emily8 from "../../../../public/project-screenshots/unity/emilys-adventures/emily-adventures-8.png";

import sand1 from "../../../../public/project-screenshots/unity/sand-wars/sand-wars-1.webp";
import sand2 from "../../../../public/project-screenshots/unity/sand-wars/sand-wars-2.webp";
import sand3 from "../../../../public/project-screenshots/unity/sand-wars/sand-wars-3.webp";

import night1 from "../../../../public/project-screenshots/unity/night-city/night-city-1.png";
import night2 from "../../../../public/project-screenshots/unity/night-city/night-city-2.png";
import night3 from "../../../../public/project-screenshots/unity/night-city/night-city-3.jpg";
import night4 from "../../../../public/project-screenshots/unity/night-city/night-city-4.jpg";
import night5 from "../../../../public/project-screenshots/unity/night-city/night-city-5.jpg";

import airport1 from "../../../../public/project-screenshots/unity/airport-check/airport-check-1.png";
import airport2 from "../../../../public/project-screenshots/unity/airport-check/airport-check-2.png";
import airport3 from "../../../../public/project-screenshots/unity/airport-check/airport-check-3.png";
import airport4 from "../../../../public/project-screenshots/unity/airport-check/airport-check-4.png";

import rescue1 from "../../../../public/project-screenshots/unity/rescue-boat/rescue-boat-1.png";
import rescue2 from "../../../../public/project-screenshots/unity/rescue-boat/rescue-boat-2.png";
import rescue3 from "../../../../public/project-screenshots/unity/rescue-boat/rescue-boat-3.png";

import goal1 from "../../../../public/project-screenshots/unity/goal-em-all/goal-em-all-1.jpg";
import goal2 from "../../../../public/project-screenshots/unity/goal-em-all/goal-em-all-2.jpg";
import goal3 from "../../../../public/project-screenshots/unity/goal-em-all/goal-em-all-3.jpg";

import clonez1 from "../../../../public/project-screenshots/unity/clonez/clonez-1.png";
import clonez2 from "../../../../public/project-screenshots/unity/clonez/clonez-2.png";
import clonez3 from "../../../../public/project-screenshots/unity/clonez/clonez-3.png";
import clonez4 from "../../../../public/project-screenshots/unity/clonez/clonez-4.png";
import clonez5 from "../../../../public/project-screenshots/unity/clonez/clonez-5.png";

import gos1 from "../../../../public/project-screenshots/unity/gos/gos-1.png";
import gos2 from "../../../../public/project-screenshots/unity/gos/gos-2.png";
import gos3 from "../../../../public/project-screenshots/unity/gos/gos-3.png";
import gos4 from "../../../../public/project-screenshots/unity/gos/gos-4.png";

import hunt1 from "../../../../public/project-screenshots/unity/vr-hunt/vr-hunt-1.png";
import hunt2 from "../../../../public/project-screenshots/unity/vr-hunt/vr-hunt-2.png";
import hunt3 from "../../../../public/project-screenshots/unity/vr-hunt/vr-hunt-3.png";

import pull1 from "../../../../public/project-screenshots/unity/paper-pull/paper-pull-1.png";
import pull2 from "../../../../public/project-screenshots/unity/paper-pull/paper-pull-2.png";
import pull3 from "../../../../public/project-screenshots/unity/paper-pull/paper-pull-3.png";

import awakening1 from "../../../../public/project-screenshots/unity/the-awakening/the-awakening-1.png";
import awakening2 from "../../../../public/project-screenshots/unity/the-awakening/the-awakening-2.png";
import awakening3 from "../../../../public/project-screenshots/unity/the-awakening/the-awakening-3.png";
import awakening4 from "../../../../public/project-screenshots/unity/the-awakening/the-awakening-4.png";

import cryto1 from "../../../../public/project-screenshots/unity/crypto-run/crypto-run-1.png";
import cryto2 from "../../../../public/project-screenshots/unity/crypto-run/crypto-run-2.png";
import cryto3 from "../../../../public/project-screenshots/unity/crypto-run/crypto-run-3.png";

import fixit1 from "../../../../public/project-screenshots/unity/fix-it/fix-it-1.png";
import fixit2 from "../../../../public/project-screenshots/unity/fix-it/fix-it-2.png";
import fixit3 from "../../../../public/project-screenshots/unity/fix-it/fix-it-3.png";

import flappy1 from "../../../../public/project-screenshots/unity/flappy-bird-remix/flappy-bird-remix-1.png";
import flappy2 from "../../../../public/project-screenshots/unity/flappy-bird-remix/flappy-bird-remix-2.png";

import twisted1 from "../../../../public/project-screenshots/unity/twisted-dungeons/twisted-dungeons-1.png";
import twisted2 from "../../../../public/project-screenshots/unity/twisted-dungeons/twisted-dungeons-2.png";

import ProjectDescription from "../../../../components/server/projects-page/ProjectDescription";
import VerticalSeperator from "../../../../components/server/layout/VerticalSeperator";
import DesktopProject from "../../../../components/server/projects-page/DesktopProject";
import MobileProject from "../../../../components/server/projects-page/MobileProject";
export default function UnityProjectsPage() {
  return (
    <section className={styles.background}>
      <PagePadding>
        <SectionHeader doubleSideSeperator={true}>Unity Projects</SectionHeader>
        <DesktopProject
          headerText={"Emily's Adventures"}
          imageData={[
            { path: emily1, caption: "Emily's backyard" },
            { path: emily2, caption: "Giant's living room" },
            { path: emily3, caption: "Camp area of Piggy's Island" },
            { path: emily4, caption: "Piano puzzle" },
            { path: emily5, caption: "Graveyard area of Piggy's Island" },
            { path: emily6, caption: "Piggy" },
            { path: emily7, caption: "Golf level windmill" },
            { path: emily8, caption: "Emily's forest" },
          ]}
        >
          The Adventures of Emily is a 3rd person adventure-puzzle game mainly
          inspired by the classic bedtime stories for children. In The
          Adventures of Emily, each chapter and level looks and feels different,
          inheriting and reflecting several elements from the stories. Gameplay
          and narrative is designed to work together to immerse the player in
          the game world by increasing engagement and creating a game flow.
        </DesktopProject>

        <VerticalSeperator></VerticalSeperator>
        <DesktopProject
          headerText={"Sand Wars Card Game"}
          imageData={[
            { path: sand1, caption: "Sand Wars logo" },
            { path: sand2, caption: "Gameplay screen" },
            { path: sand3, caption: "Gameplay screen" },
          ]}
        >
          Sand Wars is a captivating mobile card game that offers both
          singleplayer and multiplayer adventures. As players battle their way
          across the coast, they must strategically build their deck by
          collecting powerful cards and utilizing three unique resources. With a
          combination of strategy and luck, players can aim to demolish their
          opponent's castle and establish themselves as the ultimate conqueror
          of the island. The game features an engaging and free-to-play
          experience, stunning graphics, real-time multiplayer duels, and an
          array of surprises including dragons and various attacks. By upgrading
          their resources, players unlock new powers. Sand Wars provides an
          immersive card-based combat experience that challenges players to
          adapt to different strategies and emerge victorious.
        </DesktopProject>

        <VerticalSeperator></VerticalSeperator>

        <DesktopProject
          headerText={"Night City Drive"}
          imageData={[
            { path: night1, caption: "Blue car drifting" },
            { path: night2, caption: "Blue car drifting" },
            { path: night3, caption: "Camera mode on red car" },
            { path: night4, caption: "Mobile gameplay screen" },
            { path: night5, caption: "Decal showcase" },
          ]}
        >
          Night City Endless Drive is an immersive car simulation game
          specifically designed for Android devices. Its primary objective is to
          provide players with a relaxing and enjoyable experience as they
          cruise along the long roads of the Night City. With a focus on
          creating a serene atmosphere, players can sit back, unwind, and embark
          on a journey through the city. Night City Endless Drive promises to
          provide players with a serene and engaging journey through a
          captivating virtual city. So, fasten your seatbelts, relax, and get
          ready for an unforgettable drive through the captivating Night City
          scenery.
        </DesktopProject>

        <VerticalSeperator></VerticalSeperator>

        <MobileProject
          headerText={"Airport Check"}
          imageData={[
            { path: airport1, caption: "Tap to play screen" },
            { path: airport2, caption: "Passaport control" },
            { path: airport3, caption: "Accepted animation" },
            { path: airport4, caption: "Rejected animation" },
          ]}
        >
          Airport Check is an immersive airport security control simulation game
          exclusively designed for Android devices. Its core objective is to
          provide players with a realistic experience of checking and confirming
          passports of passengers. Prepare to join the queue and ensure your
          passports are ready as we embark on an exciting journey together.
          Airport Check promises an engaging simulation of airport security
          control. So, join the line, have your passports ready, and prepare for
          an exciting journey as you fulfill the important role of an airport
          security officer.
        </MobileProject>

        <VerticalSeperator></VerticalSeperator>

        <MobileProject
          headerText={"Rescue Boat"}
          imageData={[
            { path: rescue1, caption: "Successful finish screen" },
            { path: rescue2, caption: "Jumping from platform" },
            { path: rescue3, caption: "Rescuing drowning people" },
          ]}
        >
          Rescue Boat is an immersive simulated boat rescue game that puts
          players in the role of rescue boat pilots on the vast sea. Your
          mission is to navigate through the treacherous waters and save
          individuals who have fallen overboard. As you embark on this
          challenging rescue operation, be prepared to encounter numerous
          dangerous sharks lurking in the sea. Swiftly maneuver your boat,
          ensuring you steer clear of these perilous predators. Success in the
          game hinges upon safely transferring the individuals who have fallen
          into the sea to the designated finish line.
        </MobileProject>

        <VerticalSeperator></VerticalSeperator>

        <MobileProject
          headerText={"Goal'em All"}
          imageData={[
            { path: goal1, caption: "Shooting the ball" },
            { path: goal2, caption: "Explosion effects" },
            { path: goal3, caption: "Collecting money" },
          ]}
        >
          Goal'em All is an action-packed game where your ultimate objective is
          to defeat every opponent in your path using your soccer ball skills.
          Get ready to showcase your ball control and precision as you take on
          challengers from all directions. To maximize your chances of success,
          aim to strike the barrels scattered throughout the game. These barrels
          hold valuable currency that can be used to enhance your gameplay
          experience. By collecting money from hitting the barrels, you can
          unlock upgrades, power-ups, and other exciting features to aid you in
          your quest for victory.
        </MobileProject>

        <VerticalSeperator></VerticalSeperator>

        <DesktopProject
          headerText={"Clonez"}
          imageData={[
            { path: clonez1, caption: "Main character jump animation" },
            { path: clonez2, caption: "Fourth level jets" },
            { path: clonez3, caption: "Third level houses" },
            { path: clonez4, caption: "Tutorial level" },
            { path: clonez5, caption: "Main menu screen" },
          ]}
        >
          Clonez is an immersive 3D desktop platform puzzle game that challenges
          players to navigate through intricate levels using the unique ability
          of our ninja protagonist to clone himself. Prepare to embark on a
          mind-bending adventure as you strategically utilize the power of
          cloning to overcome various obstacles and conquer each level. With the
          ability to create clones, you can solve complex puzzles, activate
          switches, reach distant platforms, and navigate treacherous paths that
          would be otherwise impossible to traverse alone.
        </DesktopProject>

        <VerticalSeperator></VerticalSeperator>

        <DesktopProject
          headerText={"VR Hunt"}
          imageData={[
            { path: hunt1, caption: "Hunting chicken" },
            { path: hunt2, caption: "Hunting cow" },
            { path: hunt3, caption: "Hunting pig" },
          ]}
        >
          VR Hunt offers an exhilarating virtual reality experience where
          players can immerse themselves in the thrill of shotgun shooting.
          Whether you're honing your skills or challenging your friends, this
          shotgun sports game has something for everyone. The game provides a
          diverse range of hunting experiences, such as chicken hunt & cow hunt.
          No matter the season, the virtual hunting grounds are always open,
          allowing you to embark on exciting hunting adventures at any time.
          Take aim, feel the weight of the shotgun, and unleash your shooting
          prowess.
        </DesktopProject>

        <VerticalSeperator></VerticalSeperator>

        <MobileProject
          headerText={"GoS Calculator"}
          imageData={[
            { path: gos1, caption: "Main menu screen" },
            { path: gos2, caption: "Vizier selection screen" },
            { path: gos3, caption: "Vizier stats screen" },
            { path: gos4, caption: "Vizier stats screen" },
          ]}
        >
          The Calculator App for Game of Sultans is a handy tool designed to
          enhance your gameplay experience in the popular mobile game. With a
          range of useful features, this app is your ultimate companion for
          managing resources, optimizing strategies, and maximizing your success
          in the game.
          <br />
          From calculating resource production rates to determining the most
          efficient upgrades, the calculator app empowers you to make informed
          decisions that will propel your empire to new heights. Gain valuable
          insights into the game's mechanics, plan your actions wisely, and stay
          one step ahead of your competitors.
        </MobileProject>

        <VerticalSeperator></VerticalSeperator>

        <MobileProject
          headerText={"Paper Pull"}
          imageData={[
            { path: pull1, caption: "Inspecting opponent" },
            { path: pull2, caption: "Paper tear" },
            { path: pull3, caption: "Pulling the paper" },
          ]}
        >
          Paper Pull is an engaging and thrilling game inspired by popular
          TikTok challenges. The objective is simple: unroll the toilet paper
          across a table, place a cup of water on the last sheet, and face off
          against an opponent sitting on the opposite side. Holding the roll,
          each player must carefully reel in the toilet paper without spilling
          the water. The first player to successfully complete this task emerges
          as the victorious winner. Paper Pull offers a fun and interactive
          challenge suitable for players of all ages.
        </MobileProject>

        <VerticalSeperator></VerticalSeperator>

        <MobileProject
          headerText={"The Awakening"}
          imageData={[
            { path: awakening1, caption: "Login screen" },
            { path: awakening2, caption: "Character customization screen" },
            { path: awakening3, caption: "Town screen" },
            { path: awakening4, caption: "Prototype clan wars screen" },
          ]}
        >
          The Awakening is the culmination of over a year's worth of dedicated
          work, resulting in an immersive mobile multiplayer idle game. Designed
          with a client-server based structure, this project draws inspiration
          from popular web-based games such as Darkorbit, Ikariam, and Facebook
          farming games. However, it aims to provide a simplified and easily
          understandable gameplay experience suitable for mobile devices.
        </MobileProject>
        <VerticalSeperator></VerticalSeperator>

        <MobileProject
          headerText={"Crypto Run"}
          imageData={[
            { path: cryto1, caption: "Deciding according to the chart" },
            { path: cryto2, caption: "Finish multiplier screen" },
            { path: cryto3, caption: "Collecting bitcoins" },
          ]}
        >
          Crypto Run is an immersive mobile game that grants you the chance to
          unleash your skills and talents while exploring the intricate realm of
          digital currencies. Prepare yourself for an exciting adventure where
          you'll become a master of crypto trading, acquiring the ability to
          identify profitable investment opportunities. From assessing the
          potential risks and rewards of diverse crypto assets to making
          strategic decisions about promotions, your expertise and knowledge
          will be put to the test. Embark on an exhilarating challenge as you
          conquer the crypto market, accumulating wealth and financial success
          along the way with this hypercasual game.
        </MobileProject>
        <VerticalSeperator></VerticalSeperator>

        <MobileProject
          headerText={"Fix-it"}
          imageData={[
            { path: fixit1, caption: "Broken glass" },
            { path: fixit2, caption: "Broken remote" },
            { path: fixit3, caption: "Repair me bubble" },
          ]}
        >
          Fix It: Fix It is a game that puts you in the role of a skilled repair
          person. Are you ready to take on the challenge of fixing broken items
          around the house? You can put your handyman skills to the test and
          restore the items to their former glory. Step into the room and
          carefully examine the surroundings to locate the broken items. Each
          item will have specific points that need repair. Grab your virtual
          glue and apply it precisely to the broken parts of the items, ensuring
          a strong bond and seamless restoration.
        </MobileProject>
        <VerticalSeperator></VerticalSeperator>

        <MobileProject
          headerText={"Flappy Bird Remix"}
          imageData={[
            { path: flappy1, caption: "Gameplay screen" },
            { path: flappy2, caption: "Gameplay screen" },
          ]}
        >
          Flappy Bird Remake brings back the addictive gameplay and nostalgic
          charm of the classic mobile game. Get ready to test your reflexes and
          embark on an exhilarating journey through challenging obstacles. In
          this remake of the beloved game, you'll guide a bird through a series
          of narrow gaps between pipes. Tap the screen to make the bird flap its
          wings and navigate its way to victory. Be careful though, as even the
          slightest misstep can lead to a collision and game over! Each tap
          requires precise timing and coordination, as you strive to achieve the
          highest score and claim your spot on the leaderboard.
        </MobileProject>
        <VerticalSeperator></VerticalSeperator>

        <DesktopProject
          headerText={"Twisted Dungeons"}
          imageData={[
            { path: twisted1, caption: "Boss fight" },
            { path: twisted2, caption: "Collecting insanity orbs" },
          ]}
        >
          Twisted Dungeon invites you to embark on a captivating adventure in a
          2D puzzle game. Assume the role of a charming ghost as you navigate
          through intricate mazes, collecting valuable orbs along the way.
          However, beware, for failing to gather orbs will cause the controls to
          reverse, presenting a delightful challenge that will test your skills
          and strategic thinking. With its endearing graphics and immersive
          gameplay, Twisted Dungeon provides a delightful and engaging
          experience. Each level requires careful planning and precise execution
          to successfully navigate the maze and secure the orbs. As the controls
          reverse, you'll need to adapt your thinking and approach, adding an
          extra layer of difficulty to the game.
        </DesktopProject>
      </PagePadding>
    </section>
  );
}
