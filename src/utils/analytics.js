// Analytics tracking utility using Netlify Functions
export const trackPageView = async () => {
    try {
        // Don't track if on analytics page
        if (window.location.pathname === '/admin-analytics') {
            return;
        }

        // Get visitor info
        const userAgent = navigator.userAgent;
        const browser = getBrowser(userAgent);
        const device = getDevice(userAgent);
        const visitorId = getVisitorId();

        // Check if this is a unique visitor
        const visitorKey = `visitor_${visitorId}`;
        const isUnique = !localStorage.getItem(visitorKey);

        if (isUnique) {
            localStorage.setItem(visitorKey, new Date().toISOString());
        }

        // Send to serverless function
        const response = await fetch('/.netlify/functions/analytics', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                visitorId,
                browser,
                device,
                isUnique
            })
        });

        if (response.ok) {
            const data = await response.json();
            console.log('📊 Page view tracked:', data);
        }
    } catch (error) {
        console.error('Analytics tracking error:', error);
        // Fallback to localStorage if server fails
        trackPageViewLocal();
    }
};

// Fallback to localStorage tracking
const trackPageViewLocal = () => {
    try {
        const storedData = localStorage.getItem("portfolioAnalytics");
        let analytics = storedData ? JSON.parse(storedData) : {
            totalViews: 0,
            uniqueVisitors: 0,
            lastVisit: null,
            visitors: []
        };

        const userAgent = navigator.userAgent;
        const browser = getBrowser(userAgent);
        const device = getDevice(userAgent);
        const timestamp = new Date().toISOString();
        const visitorId = getVisitorId();
        const isUniqueVisitor = !localStorage.getItem(`visitor_${visitorId}`);

        if (isUniqueVisitor) {
            analytics.uniqueVisitors += 1;
            localStorage.setItem(`visitor_${visitorId}`, timestamp);
        }

        analytics.totalViews += 1;
        analytics.lastVisit = timestamp;
        analytics.visitors.unshift({
            timestamp,
            browser,
            device,
            visitorId,
            isUnique: isUniqueVisitor
        });

        if (analytics.visitors.length > 100) {
            analytics.visitors = analytics.visitors.slice(0, 100);
        }

        localStorage.setItem("portfolioAnalytics", JSON.stringify(analytics));
    } catch (error) {
        console.error('Local analytics error:', error);
    }
};

// Fetch analytics from server
export const fetchAnalytics = async () => {
    try {
        const response = await fetch('/.netlify/functions/analytics');
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.error('Fetch analytics error:', error);
    }

    // Fallback to localStorage
    const storedData = localStorage.getItem("portfolioAnalytics");
    return storedData ? JSON.parse(storedData) : {
        totalViews: 0,
        uniqueVisitors: 0,
        lastVisit: null,
        visitors: []
    };
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
        visitorId = `visitor_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
        localStorage.setItem("visitorId", visitorId);
    }
    return visitorId;
};
