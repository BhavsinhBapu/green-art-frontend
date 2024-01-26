import React, { useState, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";
import { dropdownTabs, tabs } from "helpers/core-constants";

interface Tab {
  type: string;
  label: string;
  link: string;
}

const ReportTabMenu: React.FC = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const [visibleTabs, setVisibleTabs] = useState<Tab[]>([]);
  const [visibleDropdownTabs, setVisibleDropdownTabs] = useState<Tab[]>([]);

  const updateTabsVisibility = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1400) {
      setVisibleTabs(tabs.slice(0, 6));
      setVisibleDropdownTabs(dropdownTabs.slice(6, 11));
    } else if (screenWidth >= 1200) {
      setVisibleTabs(tabs.slice(0, 5));
      setVisibleDropdownTabs(dropdownTabs.slice(5, 11));
    } else if (screenWidth >= 992) {
      setVisibleTabs(tabs.slice(0, 4));
      setVisibleDropdownTabs(dropdownTabs.slice(4, 11));
    } else if (screenWidth >= 768) {
      setVisibleTabs(tabs.slice(0, 3));
      setVisibleDropdownTabs(dropdownTabs.slice(3, 11));
    } else if (screenWidth >= 576) {
      setVisibleTabs(tabs.slice(0, 2));
      setVisibleDropdownTabs(dropdownTabs.slice(2, 11));
    } else {
      setVisibleTabs([]);
      setVisibleDropdownTabs(dropdownTabs);
    }
  };

  useEffect(() => {
    // Initial update
    updateTabsVisibility();

    // Update on window resize
    const handleResize = () => {
      updateTabsVisibility();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container-4xl ">
      <ul className="report-overview-tab-menu" style={{ overflow: "visible" }}>
        {visibleTabs.map((tab) => (
          <Link key={tab.type} href={tab.link}>
            <li className={router.query.type === tab.type ? "active" : ""}>
              <a href={tab.link}>{t(tab.label)}</a>
            </li>
          </Link>
        ))}
        {visibleDropdownTabs.length > 0 && (
          <li className="nav-item dropdown">
            <a
              className="dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {t("More")}
            </a>
            <ul
              className="dropdown-menu report-navbar-dropdown-menu-custom"
              aria-labelledby="navbarDropdown"
            >
              {visibleDropdownTabs.map((tab) => (
                <li key={tab.type}>
                  <Link href={tab.link}>
                    <a
                      className={`dropdown-item ${
                        router.query.type === tab.type ? "active" : ""
                      }`}
                    >
                      {t(tab.label)}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        )}
      </ul>
    </div>
  );
};

export default ReportTabMenu;
