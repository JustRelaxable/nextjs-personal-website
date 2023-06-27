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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo in
          vitae turpis massa sed elementum. Purus ut faucibus pulvinar elementum
          integer enim neque. Sit amet aliquam id diam maecenas ultricies mi
          eget mauris. Est ante in nibh mauris. Elementum curabitur vitae nunc
          sed velit. Vulputate odio ut enim blandit volutpat maecenas volutpat.
          <br />
          Enim sit amet venenatis urna cursus eget nunc scelerisque. Adipiscing
          elit pellentesque habitant morbi tristique senectus et netus et. Magna
          ac placerat vestibulum lectus mauris ultrices eros in. Id volutpat
          lacus laoreet non curabitur gravida arcu. Sed euismod nisi porta lorem
          mollis aliquam. Donec enim diam vulputate ut. Sed viverra tellus in
          hac habitasse platea dictumst.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo in
          vitae turpis massa sed elementum. Purus ut faucibus pulvinar elementum
          integer enim neque. Sit amet aliquam id diam maecenas ultricies mi
          eget mauris. Est ante in nibh mauris. Elementum curabitur vitae nunc
          sed velit. Vulputate odio ut enim blandit volutpat maecenas volutpat.
          <br />
          Enim sit amet venenatis urna cursus eget nunc scelerisque. Adipiscing
          elit pellentesque habitant morbi tristique senectus et netus et. Magna
          ac placerat vestibulum lectus mauris ultrices eros in. Id volutpat
          lacus laoreet non curabitur gravida arcu. Sed euismod nisi porta lorem
          mollis aliquam. Donec enim diam vulputate ut. Sed viverra tellus in
          hac habitasse platea dictumst.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo in
          vitae turpis massa sed elementum. Purus ut faucibus pulvinar elementum
          integer enim neque. Sit amet aliquam id diam maecenas ultricies mi
          eget mauris. Est ante in nibh mauris. Elementum curabitur vitae nunc
          sed velit. Vulputate odio ut enim blandit volutpat maecenas volutpat.
          <br />
          Enim sit amet venenatis urna cursus eget nunc scelerisque. Adipiscing
          elit pellentesque habitant morbi tristique senectus et netus et. Magna
          ac placerat vestibulum lectus mauris ultrices eros in. Id volutpat
          lacus laoreet non curabitur gravida arcu. Sed euismod nisi porta lorem
          mollis aliquam. Donec enim diam vulputate ut. Sed viverra tellus in
          hac habitasse platea dictumst.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo in
          vitae turpis massa sed elementum. Purus ut faucibus pulvinar elementum
          integer enim neque. Sit amet aliquam id diam maecenas ultricies mi
          eget mauris. Est ante in nibh mauris. Elementum curabitur vitae nunc
          sed velit. Vulputate odio ut enim blandit volutpat maecenas volutpat.
          <br />
          Enim sit amet venenatis urna cursus eget nunc scelerisque. Adipiscing
          elit pellentesque habitant morbi tristique senectus et netus et. Magna
          ac placerat vestibulum lectus mauris ultrices eros in. Id volutpat
          lacus laoreet non curabitur gravida arcu. Sed euismod nisi porta lorem
          mollis aliquam. Donec enim diam vulputate ut. Sed viverra tellus in
          hac habitasse platea dictumst.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo in
          vitae turpis massa sed elementum. Purus ut faucibus pulvinar elementum
          integer enim neque. Sit amet aliquam id diam maecenas ultricies mi
          eget mauris. Est ante in nibh mauris. Elementum curabitur vitae nunc
          sed velit. Vulputate odio ut enim blandit volutpat maecenas volutpat.
          <br />
          Enim sit amet venenatis urna cursus eget nunc scelerisque. Adipiscing
          elit pellentesque habitant morbi tristique senectus et netus et. Magna
          ac placerat vestibulum lectus mauris ultrices eros in. Id volutpat
          lacus laoreet non curabitur gravida arcu. Sed euismod nisi porta lorem
          mollis aliquam. Donec enim diam vulputate ut. Sed viverra tellus in
          hac habitasse platea dictumst.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo in
          vitae turpis massa sed elementum. Purus ut faucibus pulvinar elementum
          integer enim neque. Sit amet aliquam id diam maecenas ultricies mi
          eget mauris. Est ante in nibh mauris. Elementum curabitur vitae nunc
          sed velit. Vulputate odio ut enim blandit volutpat maecenas volutpat.
          <br />
          Enim sit amet venenatis urna cursus eget nunc scelerisque. Adipiscing
          elit pellentesque habitant morbi tristique senectus et netus et. Magna
          ac placerat vestibulum lectus mauris ultrices eros in. Id volutpat
          lacus laoreet non curabitur gravida arcu. Sed euismod nisi porta lorem
          mollis aliquam. Donec enim diam vulputate ut. Sed viverra tellus in
          hac habitasse platea dictumst.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo in
          vitae turpis massa sed elementum. Purus ut faucibus pulvinar elementum
          integer enim neque. Sit amet aliquam id diam maecenas ultricies mi
          eget mauris. Est ante in nibh mauris. Elementum curabitur vitae nunc
          sed velit. Vulputate odio ut enim blandit volutpat maecenas volutpat.
          <br />
          Enim sit amet venenatis urna cursus eget nunc scelerisque. Adipiscing
          elit pellentesque habitant morbi tristique senectus et netus et. Magna
          ac placerat vestibulum lectus mauris ultrices eros in. Id volutpat
          lacus laoreet non curabitur gravida arcu. Sed euismod nisi porta lorem
          mollis aliquam. Donec enim diam vulputate ut. Sed viverra tellus in
          hac habitasse platea dictumst.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo in
          vitae turpis massa sed elementum. Purus ut faucibus pulvinar elementum
          integer enim neque. Sit amet aliquam id diam maecenas ultricies mi
          eget mauris. Est ante in nibh mauris. Elementum curabitur vitae nunc
          sed velit. Vulputate odio ut enim blandit volutpat maecenas volutpat.
          <br />
          Enim sit amet venenatis urna cursus eget nunc scelerisque. Adipiscing
          elit pellentesque habitant morbi tristique senectus et netus et. Magna
          ac placerat vestibulum lectus mauris ultrices eros in. Id volutpat
          lacus laoreet non curabitur gravida arcu. Sed euismod nisi porta lorem
          mollis aliquam. Donec enim diam vulputate ut. Sed viverra tellus in
          hac habitasse platea dictumst.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo in
          vitae turpis massa sed elementum. Purus ut faucibus pulvinar elementum
          integer enim neque. Sit amet aliquam id diam maecenas ultricies mi
          eget mauris. Est ante in nibh mauris. Elementum curabitur vitae nunc
          sed velit. Vulputate odio ut enim blandit volutpat maecenas volutpat.
          <br />
          Enim sit amet venenatis urna cursus eget nunc scelerisque. Adipiscing
          elit pellentesque habitant morbi tristique senectus et netus et. Magna
          ac placerat vestibulum lectus mauris ultrices eros in. Id volutpat
          lacus laoreet non curabitur gravida arcu. Sed euismod nisi porta lorem
          mollis aliquam. Donec enim diam vulputate ut. Sed viverra tellus in
          hac habitasse platea dictumst.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo in
          vitae turpis massa sed elementum. Purus ut faucibus pulvinar elementum
          integer enim neque. Sit amet aliquam id diam maecenas ultricies mi
          eget mauris. Est ante in nibh mauris. Elementum curabitur vitae nunc
          sed velit. Vulputate odio ut enim blandit volutpat maecenas volutpat.
          <br />
          Enim sit amet venenatis urna cursus eget nunc scelerisque. Adipiscing
          elit pellentesque habitant morbi tristique senectus et netus et. Magna
          ac placerat vestibulum lectus mauris ultrices eros in. Id volutpat
          lacus laoreet non curabitur gravida arcu. Sed euismod nisi porta lorem
          mollis aliquam. Donec enim diam vulputate ut. Sed viverra tellus in
          hac habitasse platea dictumst.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo in
          vitae turpis massa sed elementum. Purus ut faucibus pulvinar elementum
          integer enim neque. Sit amet aliquam id diam maecenas ultricies mi
          eget mauris. Est ante in nibh mauris. Elementum curabitur vitae nunc
          sed velit. Vulputate odio ut enim blandit volutpat maecenas volutpat.
          <br />
          Enim sit amet venenatis urna cursus eget nunc scelerisque. Adipiscing
          elit pellentesque habitant morbi tristique senectus et netus et. Magna
          ac placerat vestibulum lectus mauris ultrices eros in. Id volutpat
          lacus laoreet non curabitur gravida arcu. Sed euismod nisi porta lorem
          mollis aliquam. Donec enim diam vulputate ut. Sed viverra tellus in
          hac habitasse platea dictumst.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo in
          vitae turpis massa sed elementum. Purus ut faucibus pulvinar elementum
          integer enim neque. Sit amet aliquam id diam maecenas ultricies mi
          eget mauris. Est ante in nibh mauris. Elementum curabitur vitae nunc
          sed velit. Vulputate odio ut enim blandit volutpat maecenas volutpat.
          <br />
          Enim sit amet venenatis urna cursus eget nunc scelerisque. Adipiscing
          elit pellentesque habitant morbi tristique senectus et netus et. Magna
          ac placerat vestibulum lectus mauris ultrices eros in. Id volutpat
          lacus laoreet non curabitur gravida arcu. Sed euismod nisi porta lorem
          mollis aliquam. Donec enim diam vulputate ut. Sed viverra tellus in
          hac habitasse platea dictumst.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo in
          vitae turpis massa sed elementum. Purus ut faucibus pulvinar elementum
          integer enim neque. Sit amet aliquam id diam maecenas ultricies mi
          eget mauris. Est ante in nibh mauris. Elementum curabitur vitae nunc
          sed velit. Vulputate odio ut enim blandit volutpat maecenas volutpat.
          <br />
          Enim sit amet venenatis urna cursus eget nunc scelerisque. Adipiscing
          elit pellentesque habitant morbi tristique senectus et netus et. Magna
          ac placerat vestibulum lectus mauris ultrices eros in. Id volutpat
          lacus laoreet non curabitur gravida arcu. Sed euismod nisi porta lorem
          mollis aliquam. Donec enim diam vulputate ut. Sed viverra tellus in
          hac habitasse platea dictumst.
        </MobileProject>
        <VerticalSeperator></VerticalSeperator>

        <MobileProject
          headerText={"Flappy Bird Remix"}
          imageData={[
            { path: flappy1, caption: "Gameplay screen" },
            { path: flappy2, caption: "Gameplay screen" },
          ]}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo in
          vitae turpis massa sed elementum. Purus ut faucibus pulvinar elementum
          integer enim neque. Sit amet aliquam id diam maecenas ultricies mi
          eget mauris. Est ante in nibh mauris. Elementum curabitur vitae nunc
          sed velit. Vulputate odio ut enim blandit volutpat maecenas volutpat.
          <br />
          Enim sit amet venenatis urna cursus eget nunc scelerisque. Adipiscing
          elit pellentesque habitant morbi tristique senectus et netus et. Magna
          ac placerat vestibulum lectus mauris ultrices eros in. Id volutpat
          lacus laoreet non curabitur gravida arcu. Sed euismod nisi porta lorem
          mollis aliquam. Donec enim diam vulputate ut. Sed viverra tellus in
          hac habitasse platea dictumst.
        </MobileProject>
        <VerticalSeperator></VerticalSeperator>

        <DesktopProject
          headerText={"Twisted Dungeons"}
          imageData={[
            { path: twisted1, caption: "Boss fight" },
            { path: twisted2, caption: "Collecting insanity orbs" },
          ]}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo in
          vitae turpis massa sed elementum. Purus ut faucibus pulvinar elementum
          integer enim neque. Sit amet aliquam id diam maecenas ultricies mi
          eget mauris. Est ante in nibh mauris. Elementum curabitur vitae nunc
          sed velit. Vulputate odio ut enim blandit volutpat maecenas volutpat.
          <br />
          Enim sit amet venenatis urna cursus eget nunc scelerisque. Adipiscing
          elit pellentesque habitant morbi tristique senectus et netus et. Magna
          ac placerat vestibulum lectus mauris ultrices eros in. Id volutpat
          lacus laoreet non curabitur gravida arcu. Sed euismod nisi porta lorem
          mollis aliquam. Donec enim diam vulputate ut. Sed viverra tellus in
          hac habitasse platea dictumst.
        </DesktopProject>
      </PagePadding>
    </section>
  );
}
