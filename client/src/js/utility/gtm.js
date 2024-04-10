// gtm.js
import TagManager from "react-gtm-module";

const gtmId = process.env.GTM_TAG;

export const initializeTagManager = () => {
  TagManager.initialize({ gtmId });
};

