export const checkDarkMode = () => {
  const theme = localStorage.getItem("theme");
  if (theme === "light") {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  }
};

export const darkModeToggle = () => {
  const theme = localStorage.getItem("theme");
  console.log(theme, "</button>");
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
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