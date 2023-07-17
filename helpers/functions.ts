import { setThemeColor } from "state/reducer/common";
export const changeThemeSettingsDashboard = (
  tradeGreen: string,
  tradeRed: string,
  setThemeColor: any,
  ThemeColor: any
) => {
  document.documentElement.style.setProperty("--trade-green", tradeGreen);
  document.documentElement.style.setProperty("--trade-red", tradeRed);
  localStorage.setItem("tradeGreen", tradeGreen);
  localStorage.setItem("tradeRed", tradeRed);
  setThemeColor({
    ...ThemeColor,
    green: tradeGreen,
    red: tradeRed,
  });
};
export const swapGreenToRedAndRedToGeen = (
  setThemeColor: any,
  ThemeColor: any,
  redGreenUpDown: number
) => {
  const tradeGreen = localStorage.getItem("tradeGreen");
  const tradeRed = localStorage.getItem("tradeRed");
  if (redGreenUpDown === 2) {
    localStorage.setItem("chart-up-down", "2");
    setThemeColor({
      green: tradeRed ? tradeRed : "#d63031",
      red: tradeGreen ? tradeGreen : "#32d777",
      redGreenUpDown: redGreenUpDown,
    });
    document.documentElement.style.setProperty(
      "--trade-green",
      tradeRed ? tradeRed : "#d63031"
    );
    document.documentElement.style.setProperty(
      "--trade-red",
      tradeGreen ? tradeGreen : "#32d777"
    );
  } else {
    localStorage.setItem("chart-up-down", "1");
    setThemeColor({
      green: tradeGreen ? tradeGreen : "#32d777",
      red: tradeRed ? tradeRed : "#d63031",
      redGreenUpDown: redGreenUpDown,
    });
    document.documentElement.style.setProperty(
      "--trade-green",
      tradeGreen ? tradeGreen : "#32d777"
    );
    document.documentElement.style.setProperty(
      "--trade-red",
      tradeRed ? tradeRed : "#d63031"
    );
  }
};
export const checkDashboardThemeSettings = (
  setThemeColor: any,
  ThemeColor: any
) => {
  const tradeGreen = localStorage.getItem("tradeGreen");
  const tradeRed = localStorage.getItem("tradeRed");
  const checkRedGreen = localStorage.getItem("chart-up-down");
  if (checkRedGreen === null) {
    localStorage.setItem("chart-up-down", "1");
  }

  if (Number(checkRedGreen) === 2) {
    console.log("Two calling");
    document.documentElement.style.setProperty(
      "--trade-green",
      tradeRed ? tradeRed : "#d63031"
    );
    document.documentElement.style.setProperty(
      "--trade-red",
      tradeGreen ? tradeGreen : "#32d777"
    );

    setThemeColor({
      redGreenUpDown: checkRedGreen ? Number(checkRedGreen) : 2,
      red: tradeGreen ? tradeGreen : "#32d777",
      green: tradeRed ? tradeRed : "#d63031",
    });
  } else {
    console.log("one calling");

    document.documentElement.style.setProperty(
      "--trade-green",
      tradeGreen ? tradeGreen : "#32d777"
    );
    document.documentElement.style.setProperty(
      "--trade-red",
      tradeRed ? tradeRed : "#d63031"
    );

    setThemeColor({
      redGreenUpDown: checkRedGreen ? Number(checkRedGreen) : 1,
      green: tradeGreen ? tradeGreen : "#32d777",
      red: tradeRed ? tradeRed : "#d63031",
    });
  }
};
export const checkDarkMode = (settings: any, dispatch: any) => {
  const theme = localStorage.getItem("theme");
  if (theme === "light") {
    localStorage.setItem("theme", "light");
    dispatch(setThemeColor("light"));
    document.documentElement.setAttribute("data-theme", "light");
    settings.theme_color.map((themeColors: any) => {
      if (!themeColors.value) {
        return;
      }
      document.documentElement.style.setProperty(
        themeColors.name,
        themeColors.value
      );
    });
  } else {
    localStorage.setItem("theme", "dark");
    dispatch(setThemeColor("dark"));
    document.documentElement.setAttribute("data-theme", "dark");
    settings.dark_theme_color.map((themeColors: any) => {
      if (!themeColors.value) {
        return;
      }
      document.documentElement.style.setProperty(
        themeColors.name,
        themeColors.value
      );
    });
  }
};
export const checkDarkModeWithoutSettings = () => {
  const theme = localStorage.getItem("theme");
  if (theme === "light") {
    localStorage.setItem("theme", "light");
    // dispatch(setTheme("light"));

    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    localStorage.setItem("theme", "dark");
    // dispatch(setTheme("dark"));
    document.documentElement.setAttribute("data-theme", "dark");
  }
};
export const darkModeToggle = (settings: any, setTheme: any, dispatch: any) => {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    setTheme(1);
    dispatch(setThemeColor("light"));
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    settings.theme_color.map((theme_color: any) => {
      if (!theme_color.value) {
        return;
      }
      document.documentElement.style.setProperty(
        theme_color.name,
        theme_color.value
      );
    });
  } else {
    setTheme(0);
    dispatch(setThemeColor("dark"));

    document.documentElement.setAttribute("data-theme", "dark");
    settings.dark_theme_color.map((theme_color: any) => {
      if (!theme_color.value) {
        return;
      }
      document.documentElement.style.setProperty(
        theme_color.name,
        theme_color.value
      );
    });
    localStorage.setItem("theme", "dark");
  }
};

export const darkModeToggleDashboard = (dispatch: any) => {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "light");
    dispatch(setThemeColor("light"));
    localStorage.setItem("theme", "light");
  } else {
    dispatch(setThemeColor("dark"));
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
};
export const checkThemeState = (setTheme: any, dispatch: any) => {
  const theme = localStorage.getItem("theme");
  if (theme === "light") {
    setTheme(1);
    // dispatch(setTheme("light"));
  } else {
    setTheme(0);
    // dispatch(setTheme("light"));
  }
};
export const rootThemeCheck = () => {
  const theme = localStorage.getItem("theme");
  if (theme === "light") {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  }
};
