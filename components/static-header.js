import React from "react";
import TjSvg from "../images/tj-logo.svg";

const StaticHeader = () => (
  <>
    <div className="header-main__inner container">
      <div className="header-desktop-left">
        <a
          href="/"
          title="Tommy John Home"
          className="header-logo"
          aria-label="Tommy John Logo"
          tabIndex="0"
        >
          <TjSvg alt="Tommy John Logo" />
        </a>
        <ul className="header-main-menu">
          <li className="header-main-menu-list-item">
            <a
              className="header-main-menu-link"
              data-mobile-hover=""
              href="#"
              title="New Arrivals"
              tabIndex="0"
            >
              New Arrivals
            </a>

            <div className="header-main-child-container">
              <ul className="header-main-child-list container">
                <li className="header-main-child-list-item">
                  <div className="header-main-child-list-header" title="Men">
                    Men
                  </div>

                  <ul className="header-main-grandchild-list">
                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/mens-new-arrivals-1"
                        title="New Arrivals"
                        data-nav-link="new-arrivals"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        New Arrivals
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="header-main-child-list-item">
                  <div className="header-main-child-list-header" title="Women">
                    Women
                  </div>

                  <ul className="header-main-grandchild-list">
                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/womens-new-arrivals"
                        title="New Arrivals"
                        data-nav-link="new-arrivals"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        New Arrivals
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="header-main-child-list-item">
                  <div
                    className="header-main-child-list-header"
                    title="Gift Cards"
                  >
                    Gift Cards
                  </div>

                  <ul className="header-main-grandchild-list">
                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/products/e-gift-card"
                        title="Gift Cards"
                        data-nav-link="new-arrivals"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Gift Cards
                      </a>
                    </li>
                  </ul>
                </li>

                <li
                  className="header-main-child-list-item header-nav-img"
                  data-nav-img="new-arrivals"
                ></li>
              </ul>
            </div>
          </li>

          <li className="header-main-menu-list-item">
            <a
              className="header-main-menu-link"
              data-mobile-hover=""
              href="https://tommyjohn.com/collections/mens-underwear"
              title="Men"
              tabIndex="0"
            >
              Men
            </a>

            <div className="header-main-child-container">
              <ul className="header-main-child-list container">
                <li className="header-main-child-list-item">
                  <div
                    className="header-main-child-list-header"
                    title="What's New"
                  >
                    What's New
                  </div>

                  <ul className="header-main-grandchild-list">
                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/mens-new-arrivals-1"
                        title="New Arrivals"
                        data-nav-link="men"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        New Arrivals
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="header-main-child-list-item">
                  <div
                    className="header-main-child-list-header"
                    title="Underwear"
                  >
                    Underwear
                  </div>

                  <ul className="header-main-grandchild-list">
                    <li className="header-main-grandchild-list-item">
                      <a
                        href="https://tommyjohn.com/collections/mens-underwear"
                        title="All Underwear"
                        data-nav-link="men"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        All Underwear
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="https://tommyjohn.com/collections/underwear-mens-styles-boxer-brief?style=Boxer%20Brief"
                        title="Boxer Brief"
                        data-nav-link="men"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Boxer Brief
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="https://tommyjohn.com/collections/underwear-mens-styles-trunk?style=Trunk"
                        title="Trunk"
                        data-nav-link="men"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Trunk
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="https://tommyjohn.com/collections/underwear-mens-styles-relaxed-fit-boxer-short?style=Relaxed%20Fit%20Boxer"
                        title="Relaxed Fit Boxer"
                        data-nav-link="men"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Relaxed Fit Boxer
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="https://tommyjohn.com/collections/underwear-mens-styles-square-cut?style=Square%20Cut"
                        title="Square Cut"
                        data-nav-link="men"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Square Cut
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="https://tommyjohn.com/collections/underwear-mens-styles-brief?style=Brief"
                        title="Brief"
                        data-nav-link="men"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Brief
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="https://tommyjohn.com/collections/mens-legging?style=Legging"
                        title="Legging"
                        data-nav-link="men"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Legging
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/sleekheat-long-johns"
                        title="Long John"
                        data-nav-link="men"
                        data-nav-link-img="https://cdn.shopify.com/s/files/1/2964/7474/t/265/assets/4f769d5d821b--W_Nav_blank_small.jpg?3917544"
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Long John
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/mens-underwear-packs"
                        title="Packs"
                        data-nav-link="men"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Packs
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="header-main-child-list-item">
                  <div
                    className="header-main-child-list-header"
                    title="Undershirts"
                  >
                    Undershirts
                  </div>

                  <ul className="header-main-grandchild-list">
                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/mens-undershirts"
                        title="All Undershirts"
                        data-nav-link="men"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        All Undershirts
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/undershirts-mens-styles-crew-neck?style=Crew Neck"
                        title="Crew Neck"
                        data-nav-link="men"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Crew Neck
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/undershirts-mens-styles-high-v-neck?style=High V-Neck"
                        title="High V-Neck"
                        data-nav-link="men"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        High V-Neck
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/undershirts-mens-styles-deep-v-neck?style=Deep V-Neck"
                        title="Deep V-Neck"
                        data-nav-link="men"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Deep V-Neck
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="https://tommyjohn.com/collections/undershirts-mens-styles-tank?style=Tank"
                        title="Tank"
                        data-nav-link="men"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Tank
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/mens-undershirt-packs"
                        title="Packs"
                        data-nav-link="men"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Packs
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="header-main-child-list-item">
                  <div
                    className="header-main-child-list-header"
                    title="Lounge &amp; Sleep"
                  >
                    Lounge &amp; Sleep
                  </div>

                  <ul className="header-main-grandchild-list">
                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/loungewear"
                        title="All Lounge &amp; Sleep"
                        data-nav-link="men"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        All Lounge &amp; Sleep
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/mens-lounge-packs-section"
                        title="Packs"
                        data-nav-link="men"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Packs
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="header-main-child-list-item">
                  <div className="header-main-child-list-header" title="Socks">
                    Socks
                  </div>

                  <ul className="header-main-grandchild-list">
                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/mens-socks"
                        title="All Socks"
                        data-nav-link="men"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        All Socks
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/over-the-calf-dress-socks"
                        title="Over the Calf Dress Sock"
                        data-nav-link="men"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Over the Calf Dress Sock
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/calf-socks"
                        title="Calf Sock"
                        data-nav-link="men"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Calf Sock
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/ankle-sock"
                        title="Ankle Sock"
                        data-nav-link="men"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Ankle Sock
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/no-show-sock"
                        title="No Show Sock"
                        data-nav-link="men"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        No Show Sock
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/youth-socks-men-section"
                        title="Youth Socks Men section"
                        data-nav-link="men"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Youth Socks Men section
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="header-main-child-list-item">
                  <div
                    className="header-main-child-list-header"
                    title="Clothing"
                  >
                    Clothing
                  </div>

                  <ul className="header-main-grandchild-list">
                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/all-clothing"
                        title="All Clothing"
                        data-nav-link="men"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        All Clothing
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/mens-socks"
                        title="Socks"
                        data-nav-link="men"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Socks
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/mens-tees-polos"
                        title="Tees &amp; Polos"
                        data-nav-link="men"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Tees &amp; Polos
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/stay-tucked-dress-shirts"
                        title="Button Down Shirts"
                        data-nav-link="men"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Button Down Shirts
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/mens-hoodies-jackets"
                        title="Hoodies &amp; Jackets"
                        data-nav-link="men"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Hoodies &amp; Jackets
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/pants-and-shorts"
                        title="Pants &amp; Shorts"
                        data-nav-link="men"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Pants &amp; Shorts
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/clothing-packs"
                        title="Packs"
                        data-nav-link="men"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Packs
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="header-main-child-list-item">
                  <div
                    className="header-main-child-list-header"
                    title="Collections"
                  >
                    Collections
                  </div>

                  <ul className="header-main-grandchild-list">
                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/all-mens-collections"
                        title="All Collections"
                        data-nav-link="men"
                        data-nav-link-img="https://cdn.shopify.com/s/files/1/2964/7474/t/265/assets/6f10744d96f9--W_Nav_blank_small.jpg?3917543"
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        All Collections
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/mens-second-skin"
                        title="Second Skin"
                        data-nav-link="men"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Second Skin
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/cool-cotton"
                        title="Cool Cotton"
                        data-nav-link="men"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Cool Cotton
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/mens-air"
                        title="Air"
                        data-nav-link="men"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Air
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/mens-go-anywhere"
                        title="Go Anywhere®"
                        data-nav-link="men"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Go Anywhere®
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/mens-360-sport"
                        title="360 Sport"
                        data-nav-link="men"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        360 Sport
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/sleekheat-long-johns"
                        title="SleekHeat™"
                        data-nav-link="men"
                        data-nav-link-img="https://cdn.shopify.com/s/files/1/2964/7474/t/265/assets/4f769d5d821b--W_Nav_blank_small.jpg?3917544"
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        SleekHeat™
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/mens-cotton-basics"
                        title="Cotton Basics"
                        data-nav-link="men"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Cotton Basics
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/kevin-harts-favorites"
                        title="TJ x Kevin Hart"
                        data-nav-link="men"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        TJ x Kevin Hart
                      </a>
                    </li>
                  </ul>
                </li>

                <li
                  className="header-main-child-list-item header-nav-img"
                  data-nav-img="men"
                ></li>
              </ul>
            </div>
          </li>

          <li className="header-main-menu-list-item">
            <a
              className="header-main-menu-link"
              data-mobile-hover=""
              href="https://tommyjohn.com/collections/womens-underwear"
              title="Women"
              tabIndex="0"
            >
              Women
            </a>

            <div className="header-main-child-container">
              <ul className="header-main-child-list container">
                <li className="header-main-child-list-item">
                  <div
                    className="header-main-child-list-header"
                    title="What's New"
                  >
                    What's New
                  </div>

                  <ul className="header-main-grandchild-list">
                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/womens-new-arrivals"
                        title="New Arrivals"
                        data-nav-link="women"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        New Arrivals
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="header-main-child-list-item">
                  <div
                    className="header-main-child-list-header"
                    title="Underwear"
                  >
                    Underwear
                  </div>

                  <ul className="header-main-grandchild-list">
                    <li className="header-main-grandchild-list-item">
                      <a
                        href="https://tommyjohn.com/collections/womens-underwear"
                        title="All Panties"
                        data-nav-link="women"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        All Panties
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="https://tommyjohn.com/collections/underwear-womens-styles-boyshort?style=Boyshort"
                        title="Boyshort"
                        data-nav-link="women"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Boyshort
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="https://tommyjohn.com/collections/womens-high-rise-brief?style=high-rise-brief"
                        title="High Rise Brief"
                        data-nav-link="women"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        High Rise Brief
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="https://tommyjohn.com/collections/underwear-womens-styles-brief?style=Brief"
                        title="Brief"
                        data-nav-link="women"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Brief
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="https://tommyjohn.com/collections/underwear-womens-styles-cheeky?style=Cheeky"
                        title="Cheeky"
                        data-nav-link="women"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Cheeky
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="https://tommyjohn.com/collections/underwear-womens-styles-thong?style=Thong"
                        title="Thong"
                        data-nav-link="women"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Thong
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/underwear-womens-styles-slip-shorts?style=Slip Shorts"
                        title="Slip Shorts"
                        data-nav-link="women"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Slip Shorts
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/womens-camisoles"
                        title="Camisole"
                        data-nav-link="women"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Camisole
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/womens-sleekheat"
                        title="Long Johns"
                        data-nav-link="women"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Long Johns
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="header-main-child-list-item">
                  <div className="header-main-child-list-header" title="Bras">
                    Bras
                  </div>

                  <ul className="header-main-grandchild-list">
                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/bras"
                        title="Shop All Bras"
                        data-nav-link="women"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Shop All Bras
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="header-main-child-list-item">
                  <div
                    className="header-main-child-list-header"
                    title="Lounge &amp; Sleep"
                  >
                    Lounge &amp; Sleep
                  </div>

                  <ul className="header-main-grandchild-list">
                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/womens-loungewear"
                        title="All Lounge &amp; Sleep"
                        data-nav-link="women"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        All Lounge &amp; Sleep
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/womens-lounge-section"
                        title="Loungewear"
                        data-nav-link="women"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Loungewear
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/womens-sleepwear"
                        title="Sleepwear"
                        data-nav-link="women"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Sleepwear
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/womens-lounge-packs-section"
                        title="Sets"
                        data-nav-link="women"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Sets
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/womens-socks"
                        title="Socks"
                        data-nav-link="women"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Socks
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="header-main-child-list-item">
                  <div
                    className="header-main-child-list-header"
                    title="Clothing"
                  >
                    Clothing
                  </div>

                  <ul className="header-main-grandchild-list">
                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/womens-all-clothing"
                        title="All Clothing"
                        data-nav-link="women"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        All Clothing
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/womens-tees-polos"
                        title="Tops &amp; Tees"
                        data-nav-link="women"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Tops &amp; Tees
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/womens-button-down-shirts"
                        title="Button Down Shirts"
                        data-nav-link="women"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Button Down Shirts
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/womens-hoodies-jackets"
                        title="Hoodies &amp; Jackets"
                        data-nav-link="women"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Hoodies &amp; Jackets
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/womens-pants-shorts"
                        title="Pants &amp; Shorts"
                        data-nav-link="women"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Pants &amp; Shorts
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/leggings"
                        title="Leggings"
                        data-nav-link="women"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Leggings
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/womens-socks"
                        title="Socks"
                        data-nav-link="women"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Socks
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="header-main-child-list-item">
                  <div
                    className="header-main-child-list-header"
                    title="Collections"
                  >
                    Collections
                  </div>

                  <ul className="header-main-grandchild-list">
                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/womens-second-skin"
                        title="Second Skin"
                        data-nav-link="women"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Second Skin
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/womens-cool-cotton"
                        title="Cool Cotton"
                        data-nav-link="women"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Cool Cotton
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/air-womens-collection"
                        title="Air"
                        data-nav-link="women"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Air
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/womens-air-invisibles-slip-shorts"
                        title="Air Invisibles™"
                        data-nav-link="women"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Air Invisibles™
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/womens-go-anywhere%C2%AE"
                        title="Go Anywhere®"
                        data-nav-link="women"
                        data-nav-link-img="https://cdn.shopify.com/s/files/1/2964/7474/t/265/assets/b095b7e60294--W_Nav_blank_small.jpg?3917545"
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Go Anywhere®
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/womens-sleekheat"
                        title="SleekHeat™"
                        data-nav-link="women"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        SleekHeat™
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/eniko-hart-favorites"
                        title="TJ x Kevin Hart"
                        data-nav-link="women"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        TJ x Kevin Hart
                      </a>
                    </li>
                  </ul>
                </li>

                <li
                  className="header-main-child-list-item header-nav-img"
                  data-nav-img="women"
                ></li>
              </ul>
            </div>
          </li>

          <li className="header-main-menu-list-item">
            <a
              className="header-main-menu-link"
              data-mobile-hover=""
              href="#"
              title="Underwear"
              tabIndex="0"
            >
              Underwear
            </a>

            <div className="header-main-child-container">
              <ul className="header-main-child-list container">
                <li className="header-main-child-list-item">
                  <div className="header-main-child-list-header" title="Men">
                    Men
                  </div>

                  <ul className="header-main-grandchild-list">
                    <li className="header-main-grandchild-list-item">
                      <a
                        href="https://tommyjohn.com/collections/mens-underwear"
                        title="All Underwear"
                        data-nav-link="underwear"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        All Underwear
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/underwear-mens-styles-boxer-brief?style=Boxer Brief"
                        title="Boxer Brief"
                        data-nav-link="underwear"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Boxer Brief
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/underwear-mens-styles-relaxed-fit-boxer-short?style=Relaxed Fit Boxer"
                        title="Relaxed Fit Boxer"
                        data-nav-link="underwear"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Relaxed Fit Boxer
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/underwear-mens-styles-trunk?style=Trunk"
                        title="Trunk"
                        data-nav-link="underwear"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Trunk
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/underwear-mens-styles-square-cut?style=Square Cut"
                        title="Square Cut"
                        data-nav-link="underwear"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Square Cut
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/underwear-mens-styles-brief?style=Brief"
                        title="Brief"
                        data-nav-link="underwear"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Brief
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/mens-legging?style=Legging"
                        title="Legging"
                        data-nav-link="underwear"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Legging
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/sleekheat-long-johns"
                        title="Long John"
                        data-nav-link="underwear"
                        data-nav-link-img="https://cdn.shopify.com/s/files/1/2964/7474/t/265/assets/4f769d5d821b--W_Nav_blank_small.jpg?3917544"
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Long John
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/mens-underwear-packs"
                        title="Packs"
                        data-nav-link="underwear"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Packs
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="header-main-child-list-item">
                  <div className="header-main-child-list-header" title="Women">
                    Women
                  </div>

                  <ul className="header-main-grandchild-list">
                    <li className="header-main-grandchild-list-item">
                      <a
                        href="https://tommyjohn.com/collections/womens-underwear"
                        title="All Panties"
                        data-nav-link="underwear"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        All Panties
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/underwear-womens-styles-boyshort?style=Boyshort"
                        title="Boyshort"
                        data-nav-link="underwear"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Boyshort
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/underwear-womens-styles-brief?style=Brief"
                        title="Brief"
                        data-nav-link="underwear"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Brief
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="https://tommyjohn.com/collections/womens-high-rise-brief?style=high-rise-brief"
                        title="High Rise Brief"
                        data-nav-link="underwear"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        High Rise Brief
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/underwear-womens-styles-cheeky?style=Cheeky"
                        title="Cheeky"
                        data-nav-link="underwear"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Cheeky
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/underwear-womens-styles-thong?style=Thong"
                        title="Thong"
                        data-nav-link="underwear"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Thong
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/womens-slip-shorts"
                        title="Slip Short"
                        data-nav-link="underwear"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Slip Short
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/womens-camisoles"
                        title="Camisole"
                        data-nav-link="underwear"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Camisole
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/womens-sleekheat"
                        title="Long John"
                        data-nav-link="underwear"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Long John
                      </a>
                    </li>
                  </ul>
                </li>

                <li
                  className="header-main-child-list-item header-nav-img"
                  data-nav-img="underwear"
                ></li>
              </ul>
            </div>
          </li>

          <li className="header-main-menu-list-item">
            <a
              className="header-main-menu-link"
              data-mobile-hover=""
              href="#"
              title="Bras"
              tabIndex="0"
            >
              Bras
            </a>

            <div className="header-main-child-container">
              <ul className="header-main-child-list container">
                <li className="header-main-child-list-item">
                  <div className="header-main-child-list-header" title="Bras">
                    Bras
                  </div>

                  <ul className="header-main-grandchild-list">
                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/bras"
                        title="Shop All Bras"
                        data-nav-link="bras"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Shop All Bras
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/pages/bras"
                        title="Shop By Style"
                        data-nav-link="bras"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Shop By Style
                      </a>
                    </li>
                  </ul>
                </li>

                <li
                  className="header-main-child-list-item header-nav-img"
                  data-nav-img="bras"
                ></li>
              </ul>
            </div>
          </li>

          <li className="header-main-menu-list-item">
            <a
              className="header-main-menu-link"
              data-mobile-hover=""
              href="#"
              title="Packs"
              tabIndex="0"
            >
              Packs
            </a>

            <div className="header-main-child-container">
              <ul className="header-main-child-list container">
                <li className="header-main-child-list-item">
                  <div className="header-main-child-list-header" title="Men">
                    Men
                  </div>

                  <ul className="header-main-grandchild-list">
                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/mens-pack"
                        title="All Men's"
                        data-nav-link="packs"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        All Men's
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/mens-underwear-packs"
                        title="Underwear"
                        data-nav-link="packs"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Underwear
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/mystery-packs"
                        title="Mystery Packs"
                        data-nav-link="packs"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Mystery Packs
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/mens-undershirt-packs"
                        title="Undershirt"
                        data-nav-link="packs"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Undershirt
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/mens-lounge-packs"
                        title="Lounge &amp; Sleep"
                        data-nav-link="packs"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Lounge &amp; Sleep
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/mens-packs-section-tees"
                        title="Tee"
                        data-nav-link="packs"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Tee
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/sampler-packs-2"
                        title="Sampler"
                        data-nav-link="packs"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Sampler
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/cotton-basic-packs-1"
                        title="Cotton Basic"
                        data-nav-link="packs"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Cotton Basic
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="header-main-child-list-item">
                  <div className="header-main-child-list-header" title="Women">
                    Women
                  </div>

                  <ul className="header-main-grandchild-list">
                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/womens-packs"
                        title="All Women's"
                        data-nav-link="packs"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        All Women's
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/womens-underwear-packs"
                        title="Underwear"
                        data-nav-link="packs"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Underwear
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/womens-mystery-packs"
                        title="Mystery Packs"
                        data-nav-link="packs"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Mystery Packs
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/womens-sleepwear-sets-section"
                        title="Pajama"
                        data-nav-link="packs"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Pajama
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/lounge-packs-1"
                        title="Lounge"
                        data-nav-link="packs"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Lounge
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/camisole-packs-1"
                        title="Camisole"
                        data-nav-link="packs"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Camisole
                      </a>
                    </li>

                    <li className="header-main-grandchild-list-item">
                      <a
                        href="/collections/sampler-packs-1"
                        title="Sampler"
                        data-nav-link="packs"
                        data-nav-link-img=""
                        data-nav-link-copy=""
                        tabIndex="0"
                      >
                        Sampler
                      </a>
                    </li>
                  </ul>
                </li>

                <li
                  className="header-main-child-list-item header-nav-img"
                  data-nav-img="packs"
                ></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </>
);

export default StaticHeader;
