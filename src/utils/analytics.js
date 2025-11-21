// Analytics tracking utility
export const trackPageView = () => {
    try {
        // Get existing analytics data
        const storedData = localStorage.getItem("portfolioAnalytics");
        let analytics = storedData ? JSON.parse(storedData) : {
            totalViews: 0,
            uniqueVisitors: 0,
            lastVisit: null,
            visitors: []
        };

        // Get visitor info
        const userAgent = navigator.userAgent;
        const browser = getBrowser(userAgent);
        const device = getDevice(userAgent);
        const timestamp = new Date().toISOString();

        // Check if this is a unique visitor
        const visitorId = getVisitorId();
        const isUniqueVisitor = !localStorage.getItem(`visitor_${visitorId}`);

        if (isUniqueVisitor) {
            analytics.uniqueVisitors += 1;
            localStorage.setItem(`visitor_${visitorId}`, "true");
        }

        // Update analytics
        analytics.totalViews += 1;
        analytics.lastVisit = timestamp;
        analytics.visitors.unshift({
            timestamp,
            browser,
            device,
            visitorId
        });

        // Keep only last 100 visitors
        if (analytics.visitors.length > 100) {
            analytics.visitors = analytics.visitors.slice(0, 100);
        }

        // Save to localStorage
        localStorage.setItem("portfolioAnalytics", JSON.stringify(analytics));
    } catch (error) {
        console.error("Analytics tracking error:", error);
    }
};

// Get browser name from user agent
const getBrowser = (userAgent) => {
    if (userAgent.includes("Firefox")) return "Firefox";
    if (userAgent.includes("Chrome")) return "Chrome";
    if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) return "Safari";
    if (userAgent.includes("Edge")) return "Edge";
    if (userAgent.includes("Opera")) return "Opera";
    return "Unknown";
};

// Get device type from user agent
const getDevice = (userAgent) => {
    if (/mobile/i.test(userAgent)) return "Mobile";
    if (/tablet/i.test(userAgent)) return "Tablet";
    return "Desktop";
};

// Generate a simple visitor ID
const getVisitorId = () => {
    let visitorId = localStorage.getItem("visitorId");
    if (!visitorId) {
        visitorId = `visitor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        localStorage.setItem("visitorId", visitorId);
    }
    return visitorId;
};
