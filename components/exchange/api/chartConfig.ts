export function getChartOverrides(theme: any) {
  return {};
}

export const ENABLED_FEATURES = [
  "dont_show_boolean_study_arguments",
  "hide_last_na_study_output",
  "save_chart_properties_to_local_storage",
  "use_localstorage_for_settings",
];
export const DISABLED_FEATURES = [
  "header_symbol_search",
  "header_widget",
  "symbol_info",
  "header_compare",
  "header_chart_type",
  "display_market_status",
  "symbol_search_hot_key",
  "compare_symbol",
  // "border_around_the_chart",
  "remove_library_container_border",
  "header_interval_dialog_button",
  "show_interval_dialog_on_key_press",
  "header_saveload",
  "header_symbol_search_hot_key",
  "header_interval_dropdown",
  "header_undo_redo",
  "header_screenshot",
  "header_settings",
  "header_fullscreen_button",
  "header_indicators",
  "header_interval_dialog_button",
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
  { text: "1m", resolution: 60 },
  { text: "15m", resolution: INTERVAL.MINUTES_15 },
  { text: "6h", resolution: INTERVAL.HOURS_6, description: "6 Hours" },
  { text: "1h", resolution: INTERVAL.HOUR, description: "1 Hour" },
  { text: "7d", resolution: INTERVAL.WEEK, description: "3 Days" },
  { text: "1d", resolution: INTERVAL.DAY, description: "1 Day" },
];
