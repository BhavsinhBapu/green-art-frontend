export const COLORS = {
  light: {
    greenDark: "#7F9C3E",
    greenLight: "#97C653",
    redDark: "#E4786D",
    redLight: "#ffcccf",
    blueDark: "#87a5b8",
    blueLight: "#76a7c6",
  },
  dark: {
    bg: "#1b262d",
    greenDark: "#6A833A",
    greenLight: "#404b28",
    redDark: "#8A3A3B",
    redLight: "#6e3030",
    blueDark: "#5e7d90",
    blueLight: "#5B91B2",
  },
  black: {
    bg: "#000000",
    greenDark: "#49592A",
    greenLight: "#30381F",
    redDark: "#612A2C",
    redLight: "#482121",
    blueDark: "#4C6575",
    blueLight: "#4C7896",
  },
  grayscale1: "#FBFCFE",
  grayscale2: "#F5F6F7",
  grayscale3: "#E6EAEB",
  grayscale4: "#DBDFE3",
  grayscale5: "#BFC3C6",
  grayscale6: "#A4A9AC",
  grayscale7: "#7E8486",
  grayscale8: "#646B6E",
  grayscale9: "#485054",
  grayscale10: "#253135",
  grayscale11: "#212D31",
  grayscale12: "#1B272B",
  grayscale13: "#152023",
  grayscale14: "#111B1E",
  grayscale15: "#0C171A",
};
export const LIGHT_THEME_STYLE = {
  bg: "#FBFBFB",
  crosshair: "#888888",
  short: COLORS.light.redDark,
  shortFill: COLORS.light.redLight,
  long: COLORS.light.greenDark,
  longFill: COLORS.light.greenLight,
  cta: "#FBFBFB",
  ctaHighlight: "#F5F5F5",
  alert: "#FFD506",
  category: "light",
  grid: "#E6E6E6",
  lineColor: "#555",
  textColor: "#999",
  transparency: 60,

  // new added
  chartHorizontalLine: "#40484b",
  chartVerticalLine: "#40484b",
  barOuterBorderColorUpColor: "#328240",
  barOuterBorderColorDownColor: "#914834",
  barOuterBorderColorBorderColor: "#C400CB",
  barOuterBorderColorBorderUpColor: "#328240",
  barOuterBorderColorBorderDownColor: "#914834",

  ordersVis: {
    ask: {
      lineColor: COLORS.light.redDark,
      bodyTextColor: COLORS.light.redDark,
      quantityTextColor: COLORS.light.redDark,
      cancelButtonIconColor: COLORS.light.redDark,
      bodyBorderColor: COLORS.light.redDark,
      quantityBorderColor: COLORS.light.redDark,
      cancelButtonBorderColor: COLORS.light.redDark,
      bodyBackgroundColor: COLORS.grayscale2,
      quantityBackgroundColor: COLORS.grayscale2,
      cancelButtonBackgroundColor: COLORS.grayscale2,
    },
    bid: {
      lineColor: COLORS.light.greenDark,
      bodyTextColor: COLORS.light.greenDark,
      quantityTextColor: COLORS.light.greenDark,
      cancelButtonIconColor: COLORS.light.greenDark,
      bodyBorderColor: COLORS.light.greenDark,
      quantityBorderColor: COLORS.light.greenDark,
      cancelButtonBorderColor: COLORS.light.greenDark,
      bodyBackgroundColor: COLORS.grayscale2,
      quantityBackgroundColor: COLORS.grayscale2,
      cancelButtonBackgroundColor: COLORS.grayscale2,
    },
  },
  posVis: {
    lineColor: COLORS.grayscale7,
    bodyTextColor: COLORS.grayscale7,
    quantityTextColor: COLORS.grayscale7,
    cancelButtonIconColor: COLORS.grayscale7,
    bodyBorderColor: COLORS.grayscale6,
    quantityBorderColor: COLORS.grayscale6,
    cancelButtonBorderColor: COLORS.grayscale6,
    bodyBackgroundColor: COLORS.grayscale2,
    quantityBackgroundColor: COLORS.grayscale2,
    cancelButtonBackgroundColor: COLORS.grayscale2,
  },
  alerts: {
    lineColor: COLORS.light.blueDark,
    bodyTextColor: COLORS.light.blueDark,
    quantityTextColor: COLORS.light.blueDark,
    cancelButtonIconColor: COLORS.light.blueDark,
    bodyBorderColor: COLORS.light.blueLight,
    quantityBorderColor: COLORS.light.blueLight,
    cancelButtonBorderColor: COLORS.light.blueLight,
    bodyBackgroundColor: "#FBFBFB",
    quantityBackgroundColor: "#FBFBFB",
    cancelButtonBackgroundColor: "#FBFBFB",
  },
};

// export const DARK_THEME_STYLE = {
//   bg: COLORS.dark.bg,
//   crosshair: '#626c73',
//   short: COLORS.dark.redDark,
//   shortFill: COLORS.dark.redLight,
//   long: COLORS.dark.greenDark,
//   longFill: COLORS.dark.greenLight,
//   cta: '#363D52',
//   ctaHighlight: '#414A67',
//   alert: '#FFD506',
//   category: 'dark',
//   grid: '#28343C',
//   lineColor: '#555',
//   textColor: '#999',
//   transparency: 65,
//   ordersVis: {
//     ask: {
//       lineColor: COLORS.dark.redDark,
//       bodyTextColor: COLORS.dark.redDark,
//       quantityTextColor: COLORS.dark.redDark,
//       cancelButtonIconColor: COLORS.dark.redDark,
//       bodyBorderColor: COLORS.dark.redLight,
//       quantityBorderColor: COLORS.dark.redLight,
//       cancelButtonBorderColor: COLORS.dark.redLight,
//       bodyBackgroundColor: COLORS.dark.bg,
//       quantityBackgroundColor: COLORS.dark.bg,
//       cancelButtonBackgroundColor: COLORS.dark.bg,
//     },
//     bid: {
//       lineColor: COLORS.dark.greenDark,
//       bodyTextColor: COLORS.dark.greenDark,
//       quantityTextColor: COLORS.dark.greenDark,
//       cancelButtonIconColor: COLORS.dark.greenDark,
//       bodyBorderColor: COLORS.dark.greenLight,
//       quantityBorderColor: COLORS.dark.greenLight,
//       cancelButtonBorderColor: COLORS.dark.greenLight,
//       bodyBackgroundColor: COLORS.dark.bg,
//       quantityBackgroundColor: COLORS.dark.bg,
//       cancelButtonBackgroundColor: COLORS.dark.bg,
//     },
//   },
//   posVis: {
//     lineColor: COLORS.grayscale6,
//     bodyTextColor: COLORS.grayscale7,
//     quantityTextColor: COLORS.grayscale7,
//     cancelButtonIconColor: COLORS.grayscale7,
//     bodyBorderColor: COLORS.grayscale8,
//     quantityBorderColor: COLORS.grayscale8,
//     cancelButtonBorderColor: COLORS.grayscale8,
//     bodyBackgroundColor: COLORS.grayscale11,
//     quantityBackgroundColor: COLORS.grayscale11,
//     cancelButtonBackgroundColor: COLORS.grayscale11,
//   },
//   alerts: {
//     lineColor: COLORS.dark.blueDark,
//     bodyTextColor: COLORS.dark.blueDark,
//     quantityTextColor: COLORS.dark.blueDark,
//     cancelButtonIconColor: COLORS.dark.blueDark,
//     bodyBorderColor: COLORS.dark.blueLight,
//     quantityBorderColor: COLORS.dark.blueLight,
//     cancelButtonBorderColor: COLORS.dark.blueLight,
//     bodyBackgroundColor: COLORS.dark.bg,
//     quantityBackgroundColor: COLORS.dark.bg,
//     cancelButtonBackgroundColor: COLORS.dark.bg,
//   },
// };

// export const BLACK_THEME_STYLE = {
//   bg: COLORS.black.bg,
//   crosshair: '#2B2F33',
//   short: COLORS.black.redDark,
//   shortFill: COLORS.black.redLight,
//   long: COLORS.black.greenDark,
//   longFill: COLORS.black.greenLight,
//   cta: COLORS.black.bg,
//   ctaHighlight: COLORS.grayscale9,
//   alert: '#FFD506',
//   category: 'dark',
//   grid: '#0D1012',
//   lineColor: '#555',
//   textColor: COLORS.grayscale9,
//   transparency: 65,
//   ordersVis: {
//     ask: {
//       lineColor: COLORS.black.redDark,
//       bodyTextColor: COLORS.black.redDark,
//       quantityTextColor: COLORS.black.redDark,
//       cancelButtonIconColor: COLORS.black.redDark,
//       bodyBorderColor: COLORS.black.redLight,
//       quantityBorderColor: COLORS.black.redLight,
//       cancelButtonBorderColor: COLORS.black.redLight,
//       bodyBackgroundColor: COLORS.black.bg,
//       quantityBackgroundColor: COLORS.black.bg,
//       cancelButtonBackgroundColor: COLORS.black.bg,
//     },
//     bid: {
//       lineColor: COLORS.black.greenDark,
//       bodyTextColor: COLORS.black.greenDark,
//       quantityTextColor: COLORS.black.greenDark,
//       cancelButtonIconColor: COLORS.black.greenDark,
//       bodyBorderColor: COLORS.black.greenLight,
//       quantityBorderColor: COLORS.black.greenLight,
//       cancelButtonBorderColor: COLORS.black.greenLight,
//       bodyBackgroundColor: COLORS.black.bg,
//       quantityBackgroundColor: COLORS.black.bg,
//       cancelButtonBackgroundColor: COLORS.black.bg,
//     },
//   },
//   posVis: {
//     lineColor: COLORS.grayscale8,
//     bodyTextColor: COLORS.grayscale7,
//     quantityTextColor: COLORS.grayscale7,
//     cancelButtonIconColor: COLORS.grayscale7,
//     bodyBorderColor: COLORS.grayscale8,
//     quantityBorderColor: COLORS.grayscale8,
//     cancelButtonBorderColor: COLORS.grayscale8,
//     bodyBackgroundColor: COLORS.grayscale15,
//     quantityBackgroundColor: COLORS.grayscale15,
//     cancelButtonBackgroundColor: COLORS.grayscale15,
//   },
//   alerts: {
//     lineColor: COLORS.black.blueDark,
//     bodyTextColor: COLORS.black.blueDark,
//     quantityTextColor: COLORS.black.blueDark,
//     cancelButtonIconColor: COLORS.black.blueDark,
//     bodyBorderColor: COLORS.black.blueLight,
//     quantityBorderColor: COLORS.black.blueLight,
//     cancelButtonBorderColor: COLORS.black.blueLight,
//     bodyBackgroundColor: COLORS.black.bg,
//     quantityBackgroundColor: COLORS.black.bg,
//     cancelButtonBackgroundColor: COLORS.black.bg,
//   },
// };

export const ETHFINEX_THEME_STYLE = {
  bg: "#211B28", // main background color
  crosshair: "#657474", // cross line color when mouse hover
  short: "#9a4348", // colors.black.redDark,
  shortFill: "#9a4348", // colors.black.redLight,
  long: "#97C653", // colors.black.greenDark,
  longFill: "#97C653", // colors.black.greenLight,
  cta: "#9b9ebe", // colors.black.bg,
  ctaHighlight: COLORS.grayscale5,
  alert: "#FFD506",
  category: "dark",
  grid: "rgba(152, 168, 186, 0.2)",
  lineColor: "#454145", // footer top border color
  textColor: "#8d8d8d", // all text color
  transparency: 65,

  // new added
  chartHorizontalLine: "#40484b",
  chartVerticalLine: "#40484b",
  barOuterBorderColorUpColor: "#328240",
  barOuterBorderColorDownColor: "#914834",
  barOuterBorderColorBorderColor: "#C400CB",
  barOuterBorderColorBorderUpColor: "#328240",
  barOuterBorderColorBorderDownColor: "#914834",

  ordersVis: {
    ask: {
      lineColor: COLORS.black.redDark,
      bodyTextColor: COLORS.black.redDark,
      quantityTextColor: COLORS.black.redDark,
      cancelButtonIconColor: COLORS.black.redDark,
      bodyBorderColor: COLORS.black.redLight,
      quantityBorderColor: COLORS.black.redLight,
      cancelButtonBorderColor: COLORS.black.redLight,
      bodyBackgroundColor: COLORS.black.bg,
      quantityBackgroundColor: COLORS.black.bg,
      cancelButtonBackgroundColor: COLORS.black.bg,
    },
    bid: {
      lineColor: COLORS.black.greenDark,
      bodyTextColor: COLORS.black.greenDark,
      quantityTextColor: COLORS.black.greenDark,
      cancelButtonIconColor: COLORS.black.greenDark,
      bodyBorderColor: COLORS.black.greenLight,
      quantityBorderColor: COLORS.black.greenLight,
      cancelButtonBorderColor: COLORS.black.greenLight,
      bodyBackgroundColor: COLORS.black.bg,
      quantityBackgroundColor: COLORS.black.bg,
      cancelButtonBackgroundColor: COLORS.black.bg,
    },
  },
  posVis: {
    lineColor: COLORS.grayscale8,
    bodyTextColor: COLORS.grayscale7,
    quantityTextColor: COLORS.grayscale7,
    cancelButtonIconColor: COLORS.grayscale7,
    bodyBorderColor: COLORS.grayscale8,
    quantityBorderColor: COLORS.grayscale8,
    cancelButtonBorderColor: COLORS.grayscale8,
    bodyBackgroundColor: COLORS.grayscale15,
    quantityBackgroundColor: COLORS.grayscale15,
    cancelButtonBackgroundColor: COLORS.grayscale15,
  },
  alerts: {
    lineColor: COLORS.black.blueDark,
    bodyTextColor: COLORS.black.blueDark,
    quantityTextColor: COLORS.black.blueDark,
    cancelButtonIconColor: COLORS.black.blueDark,
    bodyBorderColor: COLORS.black.blueLight,
    quantityBorderColor: COLORS.black.blueLight,
    cancelButtonBorderColor: COLORS.black.blueLight,
    bodyBackgroundColor: COLORS.black.bg,
    quantityBackgroundColor: COLORS.black.bg,
    cancelButtonBackgroundColor: COLORS.black.bg,
  },
};
export const THEMES = {
  LIGHT_THEME: "light-theme",
  //   BLACK_THEME: 'black-theme',
  //   DARK_THEME: 'dark-theme',
  // order matters, this one must be the last
  ETHFINEX_THEME: "dark-theme",
};

export const THEME_MAP = {
  [THEMES.LIGHT_THEME]: LIGHT_THEME_STYLE,
  //   [THEMES.DARK_THEME]: DARK_THEME_STYLE,
  //   [THEMES.BLACK_THEME]: BLACK_THEME_STYLE,
  [THEMES.ETHFINEX_THEME]: ETHFINEX_THEME_STYLE,
};
export function getCurrentStyle(theme = "dark-theme") {
  return THEME_MAP[theme];
}
export function getChartOverrides(theme: any) {
  const style = getCurrentStyle(theme);
  return {
    // "paneProperties.background": style.bg,
    // "paneProperties.vertGridProperties.color": style.chartHorizontalLine, // main chart vertical line color
    // "paneProperties.horzGridProperties.color": style.chartVerticalLine, // main chart horizontal line color
    // "paneProperties.crossHairProperties.color": style.crosshair,
    // "scalesProperties.backgroundColor": style.bg,
    // "scalesProperties.lineColor": style.textColor,
    // "scalesProperties.textColor": style.textColor,
    // "symbolWatermarkProperties.color": "rgba(0, 0, 0, 0)",
    // Note
    // LINESTYLE_SOLID = 0
    // LINESTYLE_DOTTED = 1
    // LINESTYLE_DASHED = 2
    // LINESTYLE_LARGE_DASHED = 3
    // Note
    // 'paneProperties.vertGridProperties.style': 0,
    // 'paneProperties.horzGridProperties.style': 0,
    // 'paneProperties.crossHairProperties.width': 2,
    // 'paneProperties.crossHairProperties.style': 0,
    // "mainSeriesProperties.style": 9,
    // //  Candles styles
    // "mainSeriesProperties.hollowCandleStyle.upColor":
    //   style.barOuterBorderColorUpColor, // line chart bar inner background color
    // "mainSeriesProperties.hollowCandleStyle.downColor":
    //   style.barOuterBorderColorDownColor, // line chart bar inner background color
    // "mainSeriesProperties.hollowCandleStyle.drawWick": true,
    // "mainSeriesProperties.hollowCandleStyle.drawBorder": true,
    // "mainSeriesProperties.hollowCandleStyle.borderColor":
    //   style.barOuterBorderColorBorderColor,
    // "mainSeriesProperties.hollowCandleStyle.borderUpColor":
    //   style.barOuterBorderColorBorderUpColor, // line chart bar outer border color
    // "mainSeriesProperties.hollowCandleStyle.borderDownColor":
    //   style.barOuterBorderColorBorderDownColor, // line chart bar outer border color
    // "mainSeriesProperties.hollowCandleStyle.wickUpColor": style.long,
    // "mainSeriesProperties.hollowCandleStyle.wickDownColor": style.short,
    // "study_Overlay@tv-basicstudies.barStyle.upColor": "blue",
    // "study_Overlay@tv-basicstudies.barStyle.downColor": "blue",
    // "study_Overlay@tv-basicstudies.lineStyle.color": "blue",
    // "study_Overlay@tv-basicstudies.areaStyle.color1": "blue",
    // "study_Overlay@tv-basicstudies.areaStyle.color2": "blue",
    // "study_Overlay@tv-basicstudies.areaStyle.linecolor": "blue",
  };
}
export function getChartStudiesOverrides(theme: any) {
  const style = getCurrentStyle(theme);
  return {
    // "volume.volume.color.0": style.short,
    // "volume.volume.color.1": style.long,
    // "volume.volume.transparency": style.transparency,
  };
}
export const ENABLED_FEATURES = [
  "dont_show_boolean_study_arguments",
  "hide_last_na_study_output",
  "save_chart_properties_to_local_storage",
  "use_localstorage_for_settings",
];
export const DISABLED_FEATURES = [
  "header_symbol_search",
  "symbol_info",
  "header_compare",
  "header_chart_type",
  "display_market_status",
  "symbol_search_hot_key",
  "compare_symbol",
  "border_around_the_chart",
  "remove_library_container_border",
  "symbol_info",
  "header_interval_dialog_button",
  "show_interval_dialog_on_key_press",
  "header_saveload",
  "header_symbol_search",
  "header_symbol_search_hot_key",
];

export const INTERVAL = {
  MINUTES_5: "5",
  MINUTES_15: "15",
  MINUTES_30: "30",
  HOUR: "60",
  HOURS_3: "180",
  HOURS_6: "360",
  HOURS_12: "720",
  DAY: "D",
  WEEK: "W",
};
export const TIME_FRAMES = [
  // { text: "3y", resolution: INTERVAL.DAY, description: "3 Years" },
  // { text: "1y", resolution: INTERVAL.DAY, description: "1 Year" },
  // { text: "3m", resolution: INTERVAL.DAY, description: "3 Months" },
  // { text: "1m", resolution: 240, description: "1 Month" },
  // { text: "7d", resolution: 120, description: "7 Days" },
  // { text: "3d", resolution: INTERVAL.MINUTES_30, description: "3 Days" },
  // { text: "1d", resolution: INTERVAL.MINUTES_15, description: "1 Day" },
  // { text: "6h", resolution: INTERVAL.MINUTES_5, description: "6 Hours" },
  // { text: '1h', resolution: INTERVAL.MINUTE, description: '1 Hour' },
];
export function getLoadingScreenStyle(theme: any) {
  const style = getCurrentStyle(theme);
  return {
    // backgroundColor: style.bg,
    // foregroundColor: style.textColor,
  };
}
export const getBackgroundColor = (theme: any) => getCurrentStyle(theme).bg;
