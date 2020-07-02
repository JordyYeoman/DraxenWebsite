import React from "react";
import { motion } from "framer-motion";

// #FF00CB - purple/pink

// #A682FF - light purple

// #5DB1FF - light blue

const HUDCircle = () => {
  return (
    <div className="BG-HUD-Circle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1699.14 1547.63"
        className="layer1"
        style={{ overflow: "visible" }}
      >
        <motion.g
          initial={{ rotate: 0, transformOrigin: "center" }}
          animate={{ rotate: 40, transformOrigin: "0 0" }}
          transition={{ yoyo: Infinity, duration: 4, ease: "easeInOut" }}
          id="Layer_1"
          data-name="Layer 1"
        >
          <path
            fill="rgba(93, 177, 255,0.5)"
            class="cls-2"
            d="M1942.56,2223.22c-170.82,0-309.75-139-309.75-309.82s138.93-309.79,309.75-309.79,309.83,139,309.83,309.79S2113.46,2223.22,1942.56,2223.22Zm0-560.08c-138,0-250.3,112.24-250.3,250.26s112.33,250.3,250.3,250.3,250.38-112.3,250.38-250.3S2080.61,1663.14,1942.56,1663.14Z"
            transform="translate(-1093.03 -1194.26)"
          />

          <path
            fill="rgba(93, 177, 255,0.5)"
            class="cls-4"
            d="M2122.51,2611.77l-34.45-134.12c156.48-40.22,290.44-145.14,367.44-287.84l121.94,65.86C2482.1,2432.22,2316.33,2562,2122.51,2611.77ZM2661.17,1973l-138-11.85q1.92-23.62,1.92-47.71h138.62C2663.74,1933.46,2662.93,1953.38,2661.17,1973Zm-145-162.28c-28.28-158.92-122.82-300.33-259.44-388l74.84-116.58c169,108.41,285.95,283.47,321,480.29Zm-482-472.72c-15.63-2.44-31.49-4.32-47.59-5.49l10.09-138.21q29.92,2.23,59.13,6.85Z"
            transform="translate(-1093.03 -1194.26)"
          />
          <path
            fill="rgba(58, 10, 186,0.5)"
            class="cls-5"
            d="M1942.56,2405a514.8,514.8,0,0,1-58.09-3.29l10.9-93.86c137.49,15.9,283.23-45,367.36-159.32l76.11,56C2246.38,2330.07,2098.24,2405,1942.56,2405Zm-109.44-12.18a490.29,490.29,0,0,1-226.51-120.54l64.58-68.91a395.61,395.61,0,0,0,182.92,97.31Zm598.42-427.65-93.9-9.77a404.91,404.91,0,0,0,2.16-42h94.38A500.3,500.3,0,0,1,2431.54,1965.15Zm-875-145.42-91.83-22.11a460,460,0,0,1,15-49.95l88.85,32A377.19,377.19,0,0,0,1556.54,1819.73Zm718.21-124a398.87,398.87,0,0,0-155-137.8l42.15-84.53a493.91,493.91,0,0,1,191.81,170.41Zm-587.7-86.33-60.89-72.27c133.64-112.45,325.69-145.05,488.26-84.49l-33,88.54C1950.25,1492.28,1794.82,1518.67,1687.05,1609.41Z"
            transform="translate(-1093.03 -1194.26)"
          />
        </motion.g>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1699.14 1547.63"
        style={{ overflow: "visible" }}
      >
        <motion.g
          initial={{ rotate: 0, transformOrigin: "center" }}
          animate={{ rotate: 40, transformOrigin: "0 0" }}
          transition={{
            yoyo: Infinity,
            duration: 4,
            ease: "easeInOut",
            delay: 2,
          }}
          delay={2}
        >
          <path
            fill="rgba(166, 130, 255, 0.5)"
            class="cls-3"
            d="M1942.64,2741.89c-223.3,0-434.18-85.89-593.78-241.88l-4.89-4.81,4.73-4.81,290.28-297,4.8,4.73a425.26,425.26,0,0,0,298.86,121.7c235.72,0,427.45-191.77,427.45-427.45v-6.81h422.08v6.81C2792.17,2360.75,2411,2741.89,1942.64,2741.89ZM1363.2,2495c156.48,150.55,362,233.32,579.44,233.32,458.62,0,832.22-371.28,835.91-829.1H2383.63c-3.6,240.09-200.07,434.26-441,434.26-113.69,0-221.22-42.87-303.42-120.86Zm-226-332.18-2.16-6.45a848.64,848.64,0,0,1-42-263.75c0-186.41,59.21-363.4,171.3-511.82l4.09-5.45,5.44,4.09,331.31,250.3-4.09,5.4c-56.24,74.56-86,163.49-86,257.27a428,428,0,0,0,21.07,132.85l2.09,6.49Zm134-768.4c-107.68,144.94-164.48,317-164.48,498.2a835.86,835.86,0,0,0,39.25,253L1521.12,2023a445.27,445.27,0,0,1-19.62-130.6c0-94.46,29.24-184.2,84.68-260Z"
            transform="translate(-1093.03 -1194.26)"
          />
        </motion.g>
      </svg>
    </div>
  );
};

export default HUDCircle;
