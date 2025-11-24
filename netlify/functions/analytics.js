const fs = require('fs').promises;
const path = require('path');

// Path to store analytics data
const DATA_FILE = '/tmp/analytics.json';

// Initialize analytics data
const initAnalytics = () => ({
    totalViews: 0,
    uniqueVisitors: 0,
    lastVisit: null,
    visitors: [],
    startDate: new Date().toISOString()
});

// Read analytics data
const readAnalytics = async () => {
    try {
        const data = await fs.readFile(DATA_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        // If file doesn't exist, return initial data
        return initAnalytics();
    }
};

// Write analytics data
const writeAnalytics = async (data) => {
    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
};

exports.handler = async (event, context) => {
    // Set CORS headers
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Content-Type': 'application/json'
    };

    // Handle OPTIONS request for CORS
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: ''
        };
    }

    try {
        // GET - Retrieve analytics
        if (event.httpMethod === 'GET') {
            const analytics = await readAnalytics();
            return {
                statusCode: 200,
                headers,
                body: JSON.stringify(analytics)
            };
        }

        // POST - Track page view
        if (event.httpMethod === 'POST') {
            const { visitorId, browser, device, isUnique } = JSON.parse(event.body);

            let analytics = await readAnalytics();
            const timestamp = new Date().toISOString();

            // Increment total views
            analytics.totalViews += 1;

            // Increment unique visitors if this is a new visitor
            if (isUnique) {
                analytics.uniqueVisitors += 1;
            }

            // Update last visit
            analytics.lastVisit = timestamp;

            // Add visitor record
            analytics.visitors.unshift({
                timestamp,
                browser,
                device,
                visitorId,
                isUnique
            });

            // Keep only last 100 visitors
            if (analytics.visitors.length > 100) {
                analytics.visitors = analytics.visitors.slice(0, 100);
            }

            // Save updated analytics
            await writeAnalytics(analytics);

            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({
                    success: true,
                    totalViews: analytics.totalViews,
                    uniqueVisitors: analytics.uniqueVisitors
                })
            };
        }

        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Method not allowed' })
        };

    } catch (error) {
        console.error('Analytics error:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: 'Internal server error' })
        };
    }
};
