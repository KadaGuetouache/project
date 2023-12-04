import React from "react";
import "../styles/footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="block-1">
        <h3 className="logo">Lama.</h3>
        <p>
          Ipsum elit non consequatur omnis vero explicabo labore qui Recusandae
          sapiente cupiditate sequi quibusdam ullam. Expedita exercitationem
          quae numquam voluptates eaque autem provident Fuga non consequatur
          veritatis laudantium omnis. Consequatur
        </p>
        <div className="social-media">
          <ul>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  focusable="false"
                  viewBox="0 0 50 50"
                  color='var(--token-6da53f93-be19-43ac-93d9-69aacbf6a948, rgb(153, 162, 158)) /* {"name":"sageDark / sageDark-11"} */'
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  focusable="false"
                  viewBox="0 0 50 50"
                  color='var(--token-6da53f93-be19-43ac-93d9-69aacbf6a948, rgb(153, 162, 158)) /* {"name":"sageDark / sageDark-11"} */'
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  focusable="false"
                  viewBox="0 0 50 50"
                  color='var(--token-6da53f93-be19-43ac-93d9-69aacbf6a948, rgb(153, 162, 158)) /* {"name":"sageDark / sageDark-11"} */'
                >
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  focusable="false"
                  viewBox="0 0 50 50"
                  color='var(--token-6da53f93-be19-43ac-93d9-69aacbf6a948, rgb(153, 162, 158)) /* {"name":"sageDark / sageDark-11"} */'
                >
                  <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="block-2">
        <h3>useful links</h3>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Man Fashion</a>
          </li>
          <li>
            <a href="#">Accessories</a>
          </li>
          <li>
            <a href="#">Order Tracking</a>
          </li>
          <li>
            <a href="#">Wishlist</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
          <li>
            <a href="#">Women Fashion</a>
          </li>
          <li>
            <a href="#">Kids Fashion</a>
          </li>
          <li>
            <a href="#">My Account</a>
          </li>
          <li>
            <a href="#">Terms</a>
          </li>
        </ul>
      </div>
      <div className="block-3">
        <h3>Contact</h3>
        <div className="address">
          <p>622 Dixie Path, South Tobinchester 98633</p>
        </div>
        <div className="phone">
          <p>+1 235 5698</p>
        </div>
        <div className="email">
          <p>contact@kadaguetouache.dev</p>
        </div>
        <div className="payment-gateways">
          <div>
            <img
              src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/master-173035bc8124581983d4efa50cf8626e8553c2b311353fbf67485f9c1a2b88d1.svg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/american_express-2264c9b8b57b23b0b0831827e90cd7bcda2836adc42a912ebedf545dead35b20.svg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/visa-319d545c6fd255c9aad5eeaad21fd6f7f7b4fdbdb1a35ce83b89cca12a187f00.svg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/discover-cc9808e50193c7496e7a5245eb86d5e06f02e2476c0fe70f2c40016707d35461.svg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/apple_pay-f6db0077dc7c325b436ecbdcf254239100b35b70b1663bc7523d7c424901fa09.svg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/google_pay-c66a29c63facf2053bf69352982c958e9675cabea4f2f7ccec08d169d1856b31.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
