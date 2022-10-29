/**
 *
 * Put theme settings to local storage
 * @param {*} themeSettings
 * @returns
 */
function putThemeSettings(themeSettings) {
  return localStorage.setItem("themeSettings", themeSettings);
}

/**
 *
 * Get theme settings from local storage
 * @returns
 */
function getThemeSettings() {
  return localStorage.getItem("themeSettings");
}

/**
 *
 * Put locale settings to local storage
 * @param {*} localeSettings
 * @returns
 */
function putLocaleSettings(localeSettings) {
  return localStorage.setItem("localeSettings", localeSettings);
}

/**
 *
 * Get locale settings from local storage
 * @returns
 */
function getLocaleSettings() {
  return localStorage.getItem("localeSettings");
}

export {
  putThemeSettings,
  getThemeSettings,
  putLocaleSettings,
  getLocaleSettings,
};
