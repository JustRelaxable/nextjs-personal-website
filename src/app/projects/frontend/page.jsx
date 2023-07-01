import PagePadding from "../../../../components/server/layout/PagePadding";
import SectionHeader from "../../../../components/server/header/SectionHeader";
import MobileProject from "../../../../components/server/projects-page/MobileProject";
import VerticalSeperator from "../../../../components/server/layout/VerticalSeperator";

import movies1 from "../../../../public/project-screenshots/frontend/movies-to-watch/movies-to-watch-1.png";
import movies2 from "../../../../public/project-screenshots/frontend/movies-to-watch/movies-to-watch-2.png";
import movies3 from "../../../../public/project-screenshots/frontend/movies-to-watch/movies-to-watch-3.png";
import movies4 from "../../../../public/project-screenshots/frontend/movies-to-watch/movies-to-watch-4.png";
import movies5 from "../../../../public/project-screenshots/frontend/movies-to-watch/movies-to-watch-5.png";

import nasa1 from "../../../../public/project-screenshots/frontend/nasa-apod/nasa-apod-1.png";
import nasa2 from "../../../../public/project-screenshots/frontend/nasa-apod/nasa-apod-2.png";
import nasa3 from "../../../../public/project-screenshots/frontend/nasa-apod/nasa-apod-3.png";
import nasa4 from "../../../../public/project-screenshots/frontend/nasa-apod/nasa-apod-4.png";
import nasa5 from "../../../../public/project-screenshots/frontend/nasa-apod/nasa-apod-5.png";

import sticker1 from "../../../../public/project-screenshots/frontend/sticker-shop/sticker-shop-1.png";
import sticker2 from "../../../../public/project-screenshots/frontend/sticker-shop/sticker-shop-2.png";
import sticker3 from "../../../../public/project-screenshots/frontend/sticker-shop/sticker-shop-3.png";
import sticker4 from "../../../../public/project-screenshots/frontend/sticker-shop/sticker-shop-4.png";
import sticker5 from "../../../../public/project-screenshots/frontend/sticker-shop/sticker-shop-5.png";
import sticker6 from "../../../../public/project-screenshots/frontend/sticker-shop/sticker-shop-6.png";

import moria1 from "../../../../public/project-screenshots/frontend/moria-health-tourism/moria-1.png";
import moria2 from "../../../../public/project-screenshots/frontend/moria-health-tourism/moria-2.png";
import moria3 from "../../../../public/project-screenshots/frontend/moria-health-tourism/moria-3.png";
import moria4 from "../../../../public/project-screenshots/frontend/moria-health-tourism/moria-4.png";

export default function FrontendProjectsPage() {
  return (
    <section>
      <PagePadding>
        <SectionHeader doubleSideSeperator={true}>
          Frontend Projects
        </SectionHeader>
        <MobileProject
          headerText={"Movies to Watch"}
          imageData={[
            {
              path: movies1,
              caption: "Main page, suggestion fetched from imdb",
            },
            { path: movies2, caption: "Searching a movie, fetched from imdb" },
            { path: movies3, caption: "Movie details" },
            {
              path: movies4,
              caption: "Pagination after certain number of movies",
            },
            { path: movies5, caption: "Page 2" },
          ]}
          customAspectRatio={{ aspectRatio: 778 / 1534 }}
        >
          Movies to Watch is a website designed to help users create and manage
          a personal library of movies. The website integrates with a
          comprehensive movie database, such as IMDb, to provide a wide range of
          movies for users to choose from when adding to their library. Users
          can search for specific movies by title. Each movie entry in the
          library or search results might display essential information such as
          the title, release year, synopsis, cast and crew, rating, and possibly
          trailers or reviews.
        </MobileProject>
        <VerticalSeperator></VerticalSeperator>
        <MobileProject
          headerText={"Nasa Apod"}
          imageData={[
            {
              path: nasa1,
              caption: "Main page, random event fetched from nasa api",
            },
            { path: nasa2, caption: "Mobile menu" },
            { path: nasa3, caption: "Requesting custom date event" },
            {
              path: nasa4,
              caption: "About page",
            },
            { path: nasa5, caption: "Requesting another random event" },
          ]}
          customAspectRatio={{ aspectRatio: 778 / 1534 }}
        >
          The NASA Astronomy Picture of the Day website is a platform that
          showcases a different astronomy-related image or photograph every day,
          selected by NASA. By clicking the Another Random Event! button, the
          website generates a random date and event, allowing users to explore
          pictures from various days in history. This feature adds an element of
          surprise and discovery to the browsing experience. Users can input a
          specific date, such as their birthday or any other significant date,
          to see the astronomy picture associated with that particular day. This
          feature provides a personalized experience and allows users to connect
          with astronomical events that hold personal meaning to them. Each
          displayed image comes with accompanying details, including a
          description or explanation of the astronomy subject matter, as well as
          relevant information about the date, location, or event captured in
          the picture. This helps users gain insights and learn more about the
          celestial objects and phenomena depicted in the images.
        </MobileProject>
        <VerticalSeperator></VerticalSeperator>
        <MobileProject
          headerText={"Sticker Shop"}
          imageData={[
            {
              path: sticker1,
              caption: "Main page",
            },
            { path: sticker2, caption: "Products showcase" },
            { path: sticker3, caption: "Product page" },
            {
              path: sticker4,
              caption: "Product added to cart notification",
            },
            { path: sticker5, caption: "Cart page" },
            { path: sticker6, caption: "Mobile menu screen" },
          ]}
          customAspectRatio={{ aspectRatio: 778 / 1534 }}
        >
          The Sticker Shop is an online platform that offers a collection of
          stickers and digital patterns for potential buyers. The website has a
          catalog/gallery where users can browse through various stickers and
          digital patterns available for purchase. These items may be organized
          into categories or themes to facilitate easy searching and browsing.
          Each sticker or digital pattern listing includes details such as an
          image, product description, pricing, and any additional information
          about the product. This allows potential buyers to learn more about
          the items before making a purchase. Users can add desired stickers or
          digital patterns to their virtual shopping cart. This feature allows
          them to select multiple items before proceeding to the checkout
          process. The website will likely have a secure checkout process where
          users can review their selected items, enter their shipping
          information, and choose a payment method.
        </MobileProject>
        <VerticalSeperator></VerticalSeperator>
        <MobileProject
          headerText={"Moria Health Tourism"}
          imageData={[
            {
              path: moria1,
              caption: "Main page",
            },
            { path: moria2, caption: "Why moria section" },
            { path: moria3, caption: "Latest blog posts section" },
            {
              path: moria4,
              caption: "Footer section",
            },
          ]}
          customAspectRatio={{ aspectRatio: 778 / 1534 }}
        >
          The Moria Health Tourism is a health tourism website focuses on
          providing information and promoting various medical tourism services
          and destinations. The website's homepage serves as an introduction and
          provides an overview of the services and destinations offered. It
          features high-quality images, captivating headlines, and concise
          descriptions to capture visitors' attention. The website will have a
          dedicated contact section where potential patients can reach out for
          inquiries, request more information, or initiate the booking process.
          This includes a contact form, phone numbers, email addresses.
        </MobileProject>
      </PagePadding>
    </section>
  );
}
