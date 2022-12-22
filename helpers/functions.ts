export const checkDarkMode = (settings: any) => {
  const theme = localStorage.getItem("theme");
  if (theme === "light") {
    localStorage.setItem("theme", "light");
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
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  }
};
export const darkModeToggle = (settings: any) => {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    settings.theme_color.map((theme_color: any) => {
      if (!theme_color.value) {
        return;
      }
      document.documentElement.style.setProperty(
        theme_color.name,
        theme_color.value
      );
    });
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  } else {
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

export const darkModeToggleDashboard = () => {
  const theme = localStorage.getItem("theme");
  console.log(theme, "</button>");
  if (theme === "dark") {
    // document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  } else {
    // document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
};
