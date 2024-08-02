import React, { useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  AiFillApi,
  AiFillHome,
  AiOutlineHeart,
  AiOutlineMenu,
  AiOutlineMessage,
  AiOutlineShop,
  AiOutlineStar,
} from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import { BsBookmarks, BsCameraReels, BsGlobe } from "react-icons/bs";

import SuggestedAccounts from "./SuggestedAccounts";
import Discover from "./Discover";
import Footer from "./Footer";
import useAuthStore from "../store/authStore";

const Sidebar: NextPage = () => {
  const [showSidebar, setShowSidebar] = useState<Boolean>(true);
  const { pathname } = useRouter();
  const { fetchAllUsers, allUsers }: any = useAuthStore();

  const activeLink =
    "flex items-center gap-3 hover:bg-gray-200 dark:hover:bg-gray-200 p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#F51997] rounded";

  const normalLink =
    "flex items-center gap-3 hover:bg-gray-200 dark:hover:bg-gray-200 p-3 justify-center xl:justify-start cursor-pointer font-semibold rounded";

  return (
    <div>
      <div
        className="block xl:hidden m-2 ml-4 mt-3 text-xl"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
      </div>
      {showSidebar && (
        <div className="xl:w-[350px] w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3 ">
          <div className="xl:border-b-2 border-gray-200 xl:pb-4">
            <Link href="/">
              <div className={pathname === "/" ? activeLink : normalLink}>
                <p className="text-2xl">
                  <AiFillHome />
                </p>
                <span className="capitalize text-xl hidden xl:block">
                  For You
                </span>
              </div>
            </Link>
            <Link href="/">
              <div className={pathname === "/" ? activeLink : normalLink}>
                <p className="text-2xl">
                  <AiOutlineHeart />
                </p>
                <span className="capitalize text-xl hidden xl:block">
                  Seek Help
                </span>
              </div>
            </Link>
            <Link href="/">
              <div className={pathname === "/" ? activeLink : normalLink}>
                <p className="text-2xl">
                  <AiOutlineMessage />
                </p>
                <span className="capitalize text-xl hidden xl:block">
                  Telegram
                </span>
              </div>
            </Link>
            <Link href="/">
              <div className={pathname === "/" ? activeLink : normalLink}>
                <p className="text-2xl">
                  <AiFillApi />
                </p>
                <span className="capitalize text-xl hidden xl:block">AD</span>
              </div>
            </Link>
          </div>

          <Discover />
          {/* <SuggestedAccounts
            fetchAllUsers={fetchAllUsers}
            allUsers={allUsers}
          /> */}
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
