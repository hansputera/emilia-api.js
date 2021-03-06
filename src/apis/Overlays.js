const { get } = require("node-superfetch");
const { version } = require("../../package.json");

/**
* @class Overlays
*/
class Overlays {

  constructor(token, baseURL) {
    /** @access private */
    this.token = token;
    /** @access private */
    this.baseURL = baseURL;
  }

  /**
    * Draws a "approved" stamp over an image
    * @param {string} image - A URL to an image
    * @returns {Promise<buffer>}
    */
  async approved(image) {
    if (typeof image !== "string") throw new Error("[EMILIA-API-ERROR] Missing parameter image or that image isn't a string.");
    const { body } = await get(`${this.baseURL}/approved`)
      .set("Authorization", `Bearer ${this.token}`)
      .set("User-Agent", `Emilia-API Wrapper v${version}`)
      .query({ image });
    return body;
  }

  /**
    * Draws a "rejected" stamp over an image
    * @param {string} image - A URL to an image
    * @returns {Promise<buffer>}
    */
  async rejected(image) {
    if (typeof image !== "string") throw new Error("[EMILIA-API-ERROR] Missing parameter image or that image isn't a string.");
    const { body } = await get(`${this.baseURL}/rejected`)
      .set("Authorization", `Bearer ${this.token}`)
      .set("User-Agent", `Emilia-API Wrapper v${version}`)
      .query({ image });
    return body;
  }

  /**
    * Draws an image over a halloween border
    * @param {string} image - A URL to an image
    * @returns {Promise<buffer>}
    */
  async halloween(image) {
    if (typeof image !== "string") throw new Error("[EMILIA-API-ERROR] Missing parameter image or that image isn't a string.");
    const { body } = await get(`${this.baseURL}/halloween`)
      .set("Authorization", `Bearer ${this.token}`)
      .set("User-Agent", `Emilia-API Wrapper v${version}`)
      .query({ image });
    return body;
  }

  /**
    * Draws an image over Bob Ross canvas
    * @param {string} image - A URL to an image
    * @returns {Promise<buffer>}
    */
  async bobRoss(image) {
    if (typeof image !== "string") throw new Error("[EMILIA-API-ERROR] Missing parameter image or that image isn't a string.");
    const { body } = await get(`${this.baseURL}/bob-ross`)
      .set("Authorization", `Bearer ${this.token}`)
      .set("User-Agent", `Emilia-API Wrapper v${version}`)
      .query({ image });
    return body;
  }

}

module.exports = Overlays;
