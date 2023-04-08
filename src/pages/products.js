import React from "react";
import AboutProductStyle from "../styles/AboutProduct.module.css";

export default function ProductsPage() {
  return (
    <>
      <section className={AboutProductStyle.contentProducts}>
        <div className={AboutProductStyle.contentCenter}>
          <div className={AboutProductStyle.ownerProduct}>
            <div className={AboutProductStyle.left}>
              <img
                src="images/butter-almond-soap.jpg"
                alt="Butter Almond Soap"
              />
            </div>
            <div className={AboutProductStyle.right}>
              <h2>Butter Almond Soap:</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ac bibendum quam, vel finibus leo. Morbi mattis, odio
                sed fermentum convallis, dolor lorem porta magna, eu consequat
                lorem magna a turpis. Vivamus ultrices elit risus, at egestas
                enim tempus non. Vivamus molestie lacinia dui in tincidunt.
                Morbi vulputate accumsan scelerisque. Nunc justo turpis, blandit
                ac vestibulum congue, ullamcorper mattis orci.
              </p>
            </div>
          </div>
          <div className={AboutProductStyle.ownerProduct}>
            <div className={AboutProductStyle.left}>
              <img src="images/rose-gold-soap.jpg" alt="Rose-Gold Soap" />
            </div>
            <div className={AboutProductStyle.right}>
              <h2>Rose-Gold Soap:</h2>
              <p>
                Curabitur tellus erat, commodo at dapibus ac, tempus quis justo.
                Suspendisse tempor arcu risus, at euismod nisi ullamcorper id.
                Sed eros quam, elementum at consequat sit amet, fringilla sed
                metus. Sed laoreet fermentum augue. Quisque viverra magna vitae
                vehicula sodales. Mauris scelerisque pellentesque maximus.
                Praesent sed augue luctus, sollicitudin tortor at, aliquam ex.
              </p>
            </div>
          </div>
          <div className={AboutProductStyle.ownerProduct}>
            <div className={AboutProductStyle.left}>
              <img src="images/luxury-soap.jpg" alt="Luxury Soap" />
            </div>
            <div className={AboutProductStyle.right}>
              <h2>Luxury Soap:</h2>
              <p>
                Vivamus nisl elit, mollis ut magna sit amet, luctus pulvinar
                velit. Nam egestas velit diam, efficitur lobortis magna pretium
                a. Mauris eu posuere nisi, in condimentum tortor. In consectetur
                blandit lacus ut pellentesque. Pellentesque habitant morbi
                tristique senectus et netus et malesuada fames ac turpis
                egestas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
