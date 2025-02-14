export const Footer = () => {
  return (
    <>
      <footer className="bg-[#141414]" id="footer">
        <div className="max-w-[1200px] m-auto mt-24">
          <div className="text-white flex gap-4 pt-24 border-b-2 border-gray-600 pb-16">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="135"
              height="17"
              viewBox="0 0 135 17"
              fill="none"
              className="hover:cursor-pointer duration-300"
            >
              <g clip-path="url(#clip0_1_189)">
                <path
                  d="M4.80677 9.15228C4.63319 8.89805 4.39285 8.52339 4.08575 8.02831L3.4849 7.02477L3.38476 7.09502V16.7591H0V0.240827H3.14443L8.34174 7.89785L9.01268 9.03185C9.26638 9.4801 9.46666 9.81462 9.61353 10.0354L9.68363 9.96515V0.240827H13.1185V16.7591H10.0141L4.80677 9.15228ZM30.7433 9.68415C30.7725 11.0591 30.4262 12.4159 29.7419 13.608C29.1157 14.6871 28.195 15.5644 27.0881 16.1369C25.9325 16.7079 24.6613 17.0048 23.3729 17.0048C22.0845 17.0048 20.8133 16.7079 19.6577 16.1369C18.5582 15.5614 17.6447 14.6843 17.024 13.608C16.3396 12.4159 15.9933 11.0591 16.0226 9.68415V7.32583C15.9933 5.95088 16.3396 4.59406 17.024 3.40198C17.6459 2.32063 18.5631 1.43977 19.6677 0.863023C20.8233 0.292073 22.0945 -0.00488281 23.3829 -0.00488281C24.6713 -0.00488281 25.9425 0.292073 27.0981 0.863023C28.205 1.43551 29.1257 2.3129 29.7519 3.39195C30.4362 4.58402 30.7825 5.94084 30.7533 7.3158V9.68415H30.7433ZM26.8478 6.79395C26.875 6.2794 26.8005 5.76454 26.6287 5.27889C26.4568 4.79325 26.191 4.3464 25.8464 3.96397C25.5225 3.63024 25.1323 3.36844 24.701 3.19556C24.2698 3.02268 23.807 2.94257 23.3429 2.96043C22.8787 2.94257 22.416 3.02268 21.9847 3.19556C21.5534 3.36844 21.1632 3.63024 20.8393 3.96397C20.4947 4.3464 20.2289 4.79325 20.057 5.27889C19.8852 5.76454 19.8107 6.2794 19.8379 6.79395V10.216C19.8107 10.7306 19.8852 11.2455 20.057 11.7311C20.2289 12.2167 20.4947 12.6636 20.8393 13.046C21.1632 13.3797 21.5534 13.6415 21.9847 13.8144C22.416 13.9873 22.8787 14.0674 23.3429 14.0496C23.807 14.0674 24.2698 13.9873 24.701 13.8144C25.1323 13.6415 25.5225 13.3797 25.8464 13.046C26.191 12.6636 26.4568 12.2167 26.6287 11.7311C26.8005 11.2455 26.875 10.7306 26.8478 10.216V6.79395ZM33.6273 0.240827H41.218V3.25145H39.2953V13.7987H41.218V16.8093H33.6273V13.7987H35.5701V3.20128H33.6273V0.190649V0.240827ZM48.0676 10.216C48.0371 10.7309 48.11 11.2467 48.282 11.7328C48.454 12.2189 48.7217 12.6655 49.0691 13.046C49.3948 13.3772 49.7853 13.6374 50.2161 13.8101C50.647 13.9828 51.1088 14.0643 51.5726 14.0496C52.0324 14.0843 52.4942 14.0188 52.9264 13.8577C53.3585 13.6966 53.7507 13.4437 54.0761 13.1163C54.6846 12.2969 54.9763 11.2845 54.8973 10.2662H58.282C58.3176 11.537 58.0244 12.7955 57.4308 13.9191C56.891 14.9019 56.0719 15.7018 55.0775 16.2172C54.0368 16.7502 52.8814 17.019 51.7128 17H51.3322C50.0476 17.0208 48.7768 16.7317 47.627 16.157C46.5457 15.5997 45.6536 14.7336 45.0634 13.6682C44.4023 12.4366 44.0775 11.0518 44.1221 9.65405V7.32583C44.0874 5.95463 44.412 4.59827 45.0634 3.39195C45.655 2.31752 46.5457 1.43882 47.627 0.863023C48.7416 0.278416 49.9842 -0.0182263 51.2421 -2.34679e-05H51.5726C52.7583 -0.0203084 53.9319 0.241052 54.9974 0.762668C55.9953 1.2569 56.8221 2.04003 57.3707 3.0106C57.9778 4.16204 58.2747 5.45225 58.232 6.75381H54.697C54.7668 5.73498 54.4722 4.72454 53.8658 3.90375C53.5671 3.56789 53.197 3.3034 52.7828 3.12973C52.3686 2.95606 51.9209 2.87763 51.4724 2.90021C51.0117 2.8858 50.553 2.96758 50.1254 3.14034C49.6979 3.3131 49.3109 3.57308 48.9889 3.90375C48.643 4.28525 48.3762 4.73197 48.2043 5.21784C48.0324 5.70372 47.9587 6.21903 47.9875 6.73374V10.1558L48.0676 10.216ZM61.086 16.7591V0.240827H72.7224L72.3118 3.25145H64.7712V6.8642H71.781V9.87483H64.7712V13.889H72.3919L72.8025 16.8996H61.086V16.7591ZM75.4562 16.7591V0.240827H79.2115V13.6783H85.991L86.4016 16.7591H75.4862H75.4562ZM97.8778 13.5076H91.3486L90.1969 16.7591H86.6219L92.6304 0.240827H97.0566L103.065 16.7591H99.1395L97.8778 13.5076ZM92.3299 10.6877H96.8964C96.3089 8.87463 95.5812 6.71702 94.7133 4.21485H94.5931L92.3299 10.6877ZM109.564 9.14224C109.391 8.88801 109.15 8.50667 108.843
7.99821L108.242 6.99466L108.142 7.06491V16.7591H104.757V0.240827H107.902L113.159 7.89785L113.85 9.03185C114.104 9.4801 114.304 9.81462 114.451 10.0354L114.521 9.96515V0.240827H117.906V16.7591H114.762L109.564 9.14224ZM127.59 0.230791C128.88 0.212176 130.155 0.508378 131.305 1.09384C132.412 1.66633 133.332 2.54371 133.959 3.62276C134.643 4.81484 134.989 6.17165 134.96 7.54661V9.44331C134.989 10.8183 134.643 12.1751 133.959 13.3672C133.332 14.4462 132.412 15.3236 131.305 15.8961C130.155 16.4815 128.88 16.7777 127.59 16.7591H121.341V0.240827H127.59V0.230791ZM125.066 13.7886H127.59C128.054 13.8065 128.516 13.7264 128.948 13.5535C129.379 13.3806 129.769 13.1188 130.093 12.7851C130.438 12.4027 130.704 11.9558 130.875 11.4702C131.047 10.9845 131.122 10.4697 131.095 9.95511V7.02477C131.122 6.51022 131.047 5.99535 130.875 5.50971C130.704 5.02407 130.438 4.57721 130.093 4.19478C129.769 3.86105 129.379 3.59926 128.948 3.42638C128.516 3.25349 128.054 3.17338 127.59 3.19124H125.066V13.7987V13.7886Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_189">
                  <rect width="135" height="17" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className="text-gray-600">
              © 2018 Noiceland™, all rights reserved
            </span>
          </div>
          <div className="flex text-white flex-col text-sm">
            <div className="flex items-end justify-between text-sm pt-16">
              <ul className="flex flex-col gap-3">
                <li className="text-xs text-gray-600">Categories</li>
                <li className="hover:text-gray-400 hover:cursor-pointer duration-300">
                  Animation
                </li>
                <li className="hover:text-gray-400 hover:cursor-pointer duration-300">
                  Interactive design
                </li>
              </ul>
              <ul className="flex flex-col gap-3">
                <li className="hover:text-gray-400 hover:cursor-pointer duration-300">
                  Architecture
                </li>
                <li className="hover:text-gray-400 hover:cursor-pointer duration-300">
                  Miscellaneous
                </li>
              </ul>
              <ul className="flex flex-col gap-3">
                <li className="hover:text-gray-400 hover:cursor-pointer duration-300">
                  Graphic design
                </li>
                <li className="hover:text-gray-400 hover:cursor-pointer duration-300">
                  Photography
                </li>
              </ul>
              <ul className="flex flex-col gap-3">
                <li className="hover:text-gray-400 hover:cursor-pointer duration-300">
                  Illustration
                </li>
                <li className="hover:text-gray-400 hover:cursor-pointer duration-300">
                  Product design
                </li>
              </ul>
              <div>
                <h3 className="text-xs text-gray-600">
                  Subscribe to newsletter
                </h3>
                <br />
                <div className="flex justify-center">
                  <input
                    type="email"
                    placeholder="EMAIL ADDRESS"
                    className="px-6 py-4"
                  ></input>
                  <button className="uppercase bg-black px-6 border-2 border-black hover:bg-gray-400 hover:border-gray-400 hover:text-gray-950 duration-300 ">
                    send
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between w-2/4 pt-16 pb-20">
                <ul className="flex flex-col gap-3">
                  <li className="text-xs text-gray-600">Information</li>
                  <li className="hover:text-gray-400 hover:cursor-pointer duration-300">
                    About
                  </li>
                  <li className="hover:text-gray-400 hover:cursor-pointer duration-300">
                    contact
                  </li>
                  <li className="hover:text-gray-400 hover:cursor-pointer duration-300">
                    learns
                  </li>
                </ul>
                <ul className="flex flex-col gap-3">
                  <li className="text-xs text-gray-600">Follow us</li>
                  <li className="hover:text-gray-400 hover:cursor-pointer duration-300">
                    Instagram
                  </li>
                  <li className="hover:text-gray-400 hover:cursor-pointer duration-300">
                    Facebook
                  </li>
                  <li className="hover:text-gray-400 hover:cursor-pointer duration-300">
                    Twitter
                  </li>
                </ul>
                <ul className="flex flex-col gap-3">
                  <li className="text-xs text-gray-600">Template</li>
                  <li className="hover:text-gray-400 hover:cursor-pointer duration-300">
                    Image License Info
                  </li>
                  <li className="hover:text-gray-400 hover:cursor-pointer duration-300">
                    Powered by Webflow
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
