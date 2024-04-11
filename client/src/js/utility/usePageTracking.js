import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import TagManager from "react-gtm-module";

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    console.log('usePageTracking: pageview event')
    TagManager.dataLayer({
      dataLayer: {
        event: "pageview",
        page: location.pathname + location.search,
      },
    });

    // Trigger the first pageview manually
    TagManager.dataLayer({
      dataLayer: {
        event: "pageview",
        page: window.location.pathname + window.location.search,
      },
    });

    // Clean up function to remove the listener
    return () => {
      // No need to clean up since there's no listener with useLocation()
    };
  }, [location]);
};

export default usePageTracking;
