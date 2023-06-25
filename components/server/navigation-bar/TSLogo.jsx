import Link from "next/link";
import styles from "./TSLogo.module.css";
export default function TSLogo() {
  return (
    <Link href="/" className={styles.link}>
      <svg
        className={styles.icon}
        width="65.031"
        height="56.919"
        viewBox="0 0 65.031 56.919"
      >
        <defs>
          <filter
            id="ts-icon-a"
            x="15.085"
            y="17.453"
            width="22.414"
            height="23.878"
            filterUnits="userSpaceOnUse"
          >
            <feOffset input="SourceAlpha" />
            <feGaussianBlur stdDeviation="1.5" result="b" />
            <feFlood floodColor="#0acdff" />
            <feComposite operator="in" in2="b" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter
            id="ts-icon-c"
            x="29.696"
            y="17.453"
            width="19.234"
            height="23.895"
            filterUnits="userSpaceOnUse"
          >
            <feOffset input="SourceAlpha" />
            <feGaussianBlur stdDeviation="1.5" result="d" />
            <feFlood floodColor="#0acdff" />
            <feComposite operator="in" in2="d" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter
            id="ts-icon-e"
            x="0"
            y="0"
            width="65.031"
            height="56.919"
            filterUnits="userSpaceOnUse"
          >
            <feOffset input="SourceAlpha" />
            <feGaussianBlur stdDeviation="3" result="f" />
            <feFlood floodColor="#0acdff" />
            <feComposite operator="in" in2="f" />
            <feComposite in="SourceGraphic" />
          </filter>
        </defs>
        <g transform="translate(-21.025 -7.912)">
          <g
            className={styles["ts-icon-d"]}
            transform="matrix(1, 0, 0, 1, 21.03, 7.91)"
          >
            <path
              className={styles["ts-icon-a"]}
              d="M97.022,165.3h11.852l-5.9,4.209v10.169"
              transform="translate(-77.44 -142.84)"
            />
          </g>
          <g
            className={styles["ts-icon-c"]}
            transform="matrix(1, 0, 0, 1, 21.03, 7.91)"
          >
            <path
              className={styles["ts-icon-a"]}
              d="M115.956,165.3H107.5l8.455,13.895H107.5"
              transform="translate(-72.42 -142.84)"
            />
          </g>
          <g
            className={styles["ts-icon-b"]}
            transform="matrix(1, 0, 0, 1, 21.03, 7.91)"
          >
            <path
              className={styles["ts-icon-a"]}
              d="M42.125,17.412H64.89L76.471,36.537,64.89,55.331H42.125L30.61,36.537Z"
              transform="translate(-21.03 -7.91)"
            />
          </g>
        </g>
      </svg>
    </Link>
  );
}
