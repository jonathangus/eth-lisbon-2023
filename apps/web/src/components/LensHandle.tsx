type Props = {
  handle: string;
};

const LensHandle = ({ handle }: Props) => {
  return (
    <>
      <svg
        className="max-w-full h-auto"
        width="450"
        height="450"
        viewBox="0 0 450 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <linearGradient
            id="rounded-border-transparency-detail"
            x1="-137"
            y1="-236"
            x2="415"
            y2="486"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop offset="1" stop-color="white" stop-opacity="0.2" />
          </linearGradient>
          <clipPath id="outer-rounded-border">
            <rect width="450" height="450" rx="16" fill="white" />
          </clipPath>
        </defs>
        <g>
          <g clip-path="url(#outer-rounded-border)">
            <g id="default-picture">
              <rect
                id="default-picture-background"
                x="0"
                width="450"
                height="450"
                fill="#ABFE2C"
              />
              <g id="default-picture-logo" transform="translate(60,30)">
                <path
                  d="m171.3 315.6.1.2-.3-67a113.6 113.6 0 0 0 99.7 58.6 115 115 0 0 0 48.9-10.8l-5.8-10a103.9 103.9 0 0 1-120.5-25.5l4.3 2.9a77 77 0 0 0 77.9 1l-5.7-10-2 1.1a66.4 66.4 0 0 1-96.5-54c19-1.1-30.8-1.1-12 .1A66.4 66.4 0 0 1 60.9 255l-5.7 10 2.4 1.2a76.1 76.1 0 0 0 79.8-5 103.9 103.9 0 0 1-120.6 25.5l-5.7 9.9a115 115 0 0 0 138.5-32.2c3.8-4.8 7.2-10 10-15.3l.6 66.9v-.4h11Z"
                  fill="#00501e"
                />
                <g id="ez1M8bKaIyB3_to" transform="translate(162 137.5)">
                  <g>
                    <g transform="translate(-165.4 -143.9)">
                      <path
                        d="M185 159.2c-2.4 6.6-9.6 12.2-19.2 12.2-9.3 0-17.3-5.3-19.4-12.4"
                        fill="none"
                        stroke="#00501e"
                        stroke-width="8.3"
                        stroke-linejoin="round"
                      />
                      <g id="ez1M8bKaIyB6_to" transform="translate(160 136.6)">
                        <g transform="translate(0 -1.3)" fill="#00501e">
                          <path
                            d="M124.8 144.7a11.9 11.9 0 1 1-23.8 0 11.9 11.9 0 0 1 23.8 0Z"
                            transform="translate(-154.1 -145)"
                          />
                          <path
                            d="M209.5 144.7a11.9 11.9 0 1 1-23.8 0 11.9 11.9 0 0 1 23.8 0Z"
                            transform="translate(-155 -145)"
                          />
                        </g>
                      </g>
                      <path
                        d="M92.2 142.8c0-14.6 13.8-26.4 30.8-26.4s30.8 11.8 30.8 26.4M177 142.8c0-14.6 13.8-26.4 30.8-26.4s30.8 11.8 30.8 26.4"
                        fill="none"
                        stroke="#00501e"
                        stroke-width="8.3"
                        stroke-linejoin="round"
                      />
                    </g>
                  </g>
                </g>
                <path
                  d="m219.1 70.3-3.2 3.3.1-4.6v-4.7c-1.8-65.4-100.3-65.4-102.1 0l-.1 4.7v4.6l-3.1-3.3-3.4-3.3C59.8 22-10 91.7 35 139.2l3.3 3.4C92.6 196.8 164.9 197 164.9 197s72.3-.2 126.5-54.4l3.3-3.4C339.7 91.7 270 22 222.5 67l-3.4 3.3Z"
                  fill="none"
                  stroke="#00501e"
                  stroke-width="11.2"
                  stroke-miterlimit="10"
                />
              </g>
            </g>
            <rect
              id="bottom-background"
              y="370"
              width="450"
              height="80"
              fill="#ABFE2C"
            />
            <text
              id="handle"
              fill="#00501E"
              text-anchor="middle"
              dominant-baseline="middle"
              x="225"
              y="410"
              font-family="Space Grotesk"
              font-size="18"
              font-weight="500"
              letter-spacing="0em"
            >
              @{handle}.lens
            </text>
            <rect
              id="background-border"
              x="2.5"
              y="2.5"
              width="444"
              height="444"
              rx="13"
              stroke="url(#rounded-border-transparency-detail)"
              stroke-width="5"
            />
            <path
              id="bottom-logo"
              d="M70 423a14 14 0 0 1-13-1c2 1 5 1 8-1l-1-2h-1a9 9 0 0 1-8 0 9 9 0 0 1-4-6c3-1 11-2 17-8v-1a8 8 0 0 0 3-6c0-2-1-4-3-5-1-2-3-3-5-3l-5 1-3-4c-2-2-4-2-6-2s-4 0-5 2l-3 4-5-1-6 3-2 5a8 8 0 0 0 2 6l1 1c6 6 14 7 17 8a9 9 0 0 1-4 6 9 9 0 0 1-9 0l-2 2h1c2 2 5 2 8 1a14 14 0 0 1-13 1h-1l-1 2 1 1c3 1 7 2 10 1a16 16 0 0 0 10-6v6h3v-6a16 16 0 0 0 13 6l7-1 1-1-2-2Zm-27-29v-1c1-4 4-6 6-6 3 0 6 2 6 6v5l2-3h1v-1c3-2 6-1 8 0 2 2 3 6 0 8v1c-7 7-17 7-17 7s-9 0-16-7l-1-1c-3-2-2-6 0-8l4-1 4 1 1 1 3 3-1-4Z"
              fill="#fff"
              fill-opacity=".8"
            />
          </g>
        </g>
      </svg>
    </>
  );
};

export default LensHandle;
