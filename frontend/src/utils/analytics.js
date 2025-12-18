import ReactGA from 'react-ga4';

// Your Google Analytics Measurement ID
const TRACKING_ID = "G-6RVSHBKN2Y";

// Initialize Google Analytics
export const initGA = () => {
  ReactGA.initialize(TRACKING_ID, {
    gtagOptions: {
      send_page_view: false
    }
  });
  console.log('Google Analytics initialized');
};

// Track page views
export const logPageView = () => {
  const page = window.location.pathname + window.location.search;
  ReactGA.send({ hitType: "pageview", page: page });
  console.log('Page view logged:', page);
};

// Track custom events
export const logEvent = (category, action, label = '') => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
  console.log('Event logged:', { category, action, label });
};

// Track button clicks
export const trackButtonClick = (buttonName) => {
  logEvent('Button', 'Click', buttonName);
};

// Track section views (when user scrolls to a section)
export const trackSectionView = (sectionName) => {
  logEvent('Section', 'View', sectionName);
};

// Track project clicks
export const trackProjectClick = (projectName) => {
  logEvent('Project', 'Click', projectName);
};