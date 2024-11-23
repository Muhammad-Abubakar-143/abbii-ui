import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="bg-neutral-900 px-4 pt-12 text-neutral-100 md:flex-row">
      <div class="mx-auto grid w-full max-w-6xl grid-cols-2 gap-12 md:grid-cols-[1fr,_175px,_175px,_175px]">
        <div class="flex flex-col items-start gap-4">
          <div class="relative">
            <a
              class="relative z-10 grid h-[52px] w-[52px] place-content-center border-b border-neutral-950 bg-indigo-600 text-white"
              href="/"
            //   style="clip-path: polygon(12px 0%, calc(100% - 12px) 0%, 100% 12px, 100% 100%, calc(100% - 12px) 100%, 12px 100%, 0px 100%, 0px 0px);"
            >
              <svg
                class="h-[34px] w-auto -translate-x-0.5"
                width="90"
                height="90"
                viewBox="0 0 90 90"
              >
                <path
                  d="M49.5 30.5C65.7924 30.5 79 43.7076 79 60H49.5V30.5Z"
                  fill="white"
                ></path>
                <path
                  d="M20 60C20 43.7076 33.2076 30.5 49.5 30.5L49.5 60L20 60Z"
                  fill="white"
                ></path>
                <path
                  d="M79 89.5C62.7076 89.5 49.5 76.2924 49.5 60L79 60L79 89.5Z"
                  fill="white"
                ></path>
                <g filter="url(#filter0_d_328_2)">
                  <rect
                    x="20"
                    y="30.5"
                    width="29.5"
                    height="29.5"
                    fill="white"
                  ></rect>
                </g>
                <path
                  d="M20 60H49.5C49.5 76.2924 36.2924 89.5 20 89.5V60Z"
                  fill="white"
                ></path>
                <path
                  d="M20 15.75C20 7.60379 26.6038 1 34.75 1C42.8962 1 49.5 7.6038 49.5 15.75V30.5H20V15.75Z"
                  fill="white"
                ></path>
                <defs>
                  <filter
                    id="filter0_d_328_2"
                    x="0"
                    y="0.5"
                    width="89.5"
                    height="89.5"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset dx="10"></feOffset>
                    <feGaussianBlur stdDeviation="15"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.879379 0 0 0 0 0.879379 0 0 0 0 0.879379 0 0 0 1 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_328_2"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_328_2"
                      result="shape"
                    ></feBlend>
                  </filter>
                </defs>
              </svg>
            </a>
          </div>
          <span class="text-sm">
            Made with 🍌 by{" "}
            <Link
              target="_blank"
              class="bg-indigo-300 bg-clip-text font-semibold text-transparent"
              href="https://www.tiktok.com/@tomisloading"
            >
              @tomisloading
            </Link>
          </span>
          <span class="max-w-md text-sm text-neutral-400">
            Components subject to copyright and may not be redistributed without
            the written consent of{" "}
            <a
              class="font-medium text-neutral-300 hover:underline"
              href="mailto:help@hover.dev"
            >
              Hover.dev
            </a>
          </span>
        </div>
        <div class="space-y-4">
          <span class="block text-sm font-bold">Socials</span>
          <Link
            target="_blank"
            class="flex items-center gap-2 text-sm text-neutral-300 transition-colors hover:text-indigo-300"
            href="https://www.tiktok.com/@tomisloading"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              role="img"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title></title>
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"></path>
            </svg>{" "}
            <span>TikTok</span>
          </Link>
          <Link
            target="_blank"
            class="flex items-center gap-2 text-sm text-neutral-300 transition-colors hover:text-indigo-300"
            href="https://youtube.com/@tomisloading"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              role="img"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title></title>
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
            </svg>{" "}
            <span>YouTube</span>
          </Link>
          <Link
            target="_blank"
            class="flex items-center gap-2 text-sm text-neutral-300 transition-colors hover:text-indigo-300"
            href="https://www.instagram.com/tomisloading/"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              role="img"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title></title>
              <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path>
            </svg>{" "}
            <span>Instagram</span>
          </Link>
          <Link
            target="_blank"
            class="flex items-center gap-2 text-sm text-neutral-300 transition-colors hover:text-indigo-300"
            href="https://twitter.com/TomIsLoading"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              role="img"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title></title>
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
            </svg>{" "}
            <span>Twitter</span>
          </Link>
          <Link
            target="_blank"
            class="flex items-center gap-2 text-sm text-neutral-300 transition-colors hover:text-indigo-300"
            href="mailto:help@hover.dev"
          >
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>{" "}
            <span>Email</span>
          </Link>
        </div>
        <div class="space-y-4">
          <span class="block text-sm font-bold">Site</span>
          <a
            target="_blank"
            class="flex items-center gap-2 text-sm text-neutral-300 transition-colors hover:text-indigo-300"
            href="/"
          >
            Home
          </a>
          <a
            target="_blank"
            class="flex items-center gap-2 text-sm text-neutral-300 transition-colors hover:text-indigo-300"
            href="/components"
          >
            Components
          </a>
          <a
            target="_blank"
            class="flex items-center gap-2 text-sm text-neutral-300 transition-colors hover:text-indigo-300"
            href="/templates"
          >
            Templates
          </a>
          <a
            target="_blank"
            class="flex items-center gap-2 text-sm text-neutral-300 transition-colors hover:text-indigo-300"
            href="/pricing"
          >
            Pricing
          </a>
          <a
            target="_blank"
            class="flex items-center gap-2 text-sm text-neutral-300 transition-colors hover:text-indigo-300"
            href="/faq"
          >
            FAQ
          </a>
          <a
            target="_blank"
            class="flex items-center gap-2 text-sm text-neutral-300 transition-colors hover:text-indigo-300"
            href="/css-color-palette-generator"
          >
            Color Generator
          </a>
        </div>
        <div class="space-y-4">
          <span class="block text-sm font-bold">Legal</span>
          <a
            target="_blank"
            class="flex items-center gap-2 text-sm text-neutral-300 transition-colors hover:text-indigo-300"
            href="/license"
          >
            License
          </a>
          <a
            target="_blank"
            class="flex items-center gap-2 text-sm text-neutral-300 transition-colors hover:text-indigo-300"
            href="/privacy.html"
          >
            Privacy Policy
          </a>
          <a
            target="_blank"
            class="flex items-center gap-2 text-sm text-neutral-300 transition-colors hover:text-indigo-300"
            href="/terms.html"
          >
            Terms
          </a>
        </div>
      </div>
      <div class="-mx-4 mt-12 border-t-[1px] border-neutral-700 p-4">
        <div class="mx-auto flex max-w-6xl flex-col-reverse items-center justify-between gap-4 text-xs text-neutral-500 sm:flex-row">
          <span>© 2024 Hover Dev, LLC. All rights reserved.</span>
          <div class="flex gap-1">
            <button class="whitespace-nowrap rounded bg-transparent px-4 py-2 font-medium text-neutral-100 transition-all hover:-translate-y-[2px] hover:bg-neutral-800 active:translate-y-0">
              Sign In
            </button>
            <div class="group relative h-fit w-fit ">
              <button
                class="cursor-pointer overflow-hidden font-medium  text-sm py-1.5 px-2.5 bg-indigo-600 text-white flex items-center gap-2 whitespace-nowrap shimmer_shine__jD_i0 z-10 transition-all group-hover:-translate-x-1 group-hover:-translate-y-1 group-active:-translate-x-0 group-active:-translate-y-0"
                // style="width: fit-content; clip-path: polygon(8px 0%, calc(100% - 8px) 0%, 100% 8px, 100% 100%, calc(100% - 8px) 100%, 8px 100%, 0px 100%, 0px 0px);"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="11"
                    width="18"
                    height="11"
                    rx="2"
                    ry="2"
                  ></rect>
                  <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                </svg>
                <span>Unlock Everything</span>
              </button>
              <div
                class="absolute inset-0 z-0 translate-x-0.5 translate-y-0.5 bg-neutral-950"
                // style="clip-path: polygon(8px 0%, calc(100% - 8px) 0%, 100% 8px, 100% 100%, calc(100% - 8px) 100%, 8px 100%, 0px 100%, 0px 0px);"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
