import React from "react";
import AboutProductStyle from "../styles/AboutProduct.module.css";

export default function AboutPage() {
  return (
    <>
      <section className={AboutProductStyle.content}>
        <div className={AboutProductStyle.contentCenter}>
          <div className={AboutProductStyle.ownerProduct}>
            <div className={AboutProductStyle.left}>
              <img src="images/owner.jpg" alt="The Soap Factory CEO" />
            </div>
            <div className={AboutProductStyle.right}>
              <h2>The Owner:</h2>
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
              <img src="images/co-owner.png" alt="The Soap Factory CEO" />
            </div>
            <div className={AboutProductStyle.right}>
              <h2>The Co-Owner:</h2>
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
        </div>
      </section>
    </>
  );
}
