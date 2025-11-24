import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Analytics = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [analytics, setAnalytics] = useState({
        totalViews: 0,
        uniqueVisitors: 0,
        lastVisit: null,
        visitors: []
    });

    const CORRECT_PASSWORD = "Nishant8867@";

    useEffect(() => {
        // Load analytics data from server
        if (isAuthenticated) {
            loadAnalytics();
        }
    }, [isAuthenticated]);

    const loadAnalytics = async () => {
        try {
            // Try to fetch from server first
            const response = await fetch('/.netlify/functions/analytics');
            if (response.ok) {
                const data = await response.json();
                setAnalytics(data);
                return;
            }
        } catch (error) {
            console.error('Failed to fetch from server:', error);
        }

        // Fallback to localStorage
        const storedData = localStorage.getItem("portfolioAnalytics");
        if (storedData) {
            setAnalytics(JSON.parse(storedData));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === CORRECT_PASSWORD) {
            setIsAuthenticated(true);
            setError("");
        } else {
            setError("Incorrect password. Please try again.");
            setPassword("");
        }
    };

    const formatDate = (timestamp) => {
        if (!timestamp) return "N/A";
        const date = new Date(timestamp);
        return date.toLocaleString();
    };

    if (!isAuthenticated) {
        return (
            <div className="w-full min-h-screen bg-primary flex items-center justify-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-tertiary p-8 rounded-2xl max-w-md w-full shadow-card"
                >
                    <h2 className={`${styles.sectionHeadText} text-center mb-8`}>
                        Analytics Dashboard
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="text-white font-medium mb-2 block">
                                Enter Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="bg-primary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium w-full"
                                placeholder="Enter password"
                                autoFocus
                            />
                        </div>
                        {error && (
                            <p className="text-red-500 text-sm">{error}</p>
                        )}
                        <button
                            type="submit"
                            className="bg-[#915EFF] py-3 px-8 rounded-xl outline-none w-full text-white font-bold shadow-md shadow-primary hover:bg-[#7c4ee0] transition-colors"
                        >
                            Access Dashboard
                        </button>
                    </form>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="w-full min-h-screen bg-primary px-6 py-10">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex justify-between items-center mb-10">
                        <h1 className={`${styles.sectionHeadText}`}>
                            Portfolio Analytics
                        </h1>
                        <button
                            onClick={() => setIsAuthenticated(false)}
                            className="bg-tertiary py-2 px-6 rounded-lg text-white font-medium hover:bg-[#1a1a2e] transition-colors"
                        >
                            Logout
                        </button>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-tertiary p-6 rounded-2xl shadow-card"
                        >
                            <h3 className="text-secondary text-sm font-medium mb-2">Total Views</h3>
                            <p className="text-white text-4xl font-bold">{analytics.totalViews}</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-tertiary p-6 rounded-2xl shadow-card"
                        >
                            <h3 className="text-secondary text-sm font-medium mb-2">Unique Visitors</h3>
                            <p className="text-white text-4xl font-bold">{analytics.uniqueVisitors}</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-tertiary p-6 rounded-2xl shadow-card"
                        >
                            <h3 className="text-secondary text-sm font-medium mb-2">Last Visit</h3>
                            <p className="text-white text-lg font-medium">
                                {formatDate(analytics.lastVisit)}
                            </p>
                        </motion.div>
                    </div>

                    {/* Visitor Details Table */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-tertiary p-6 rounded-2xl shadow-card"
                    >
                        <h2 className="text-white text-2xl font-bold mb-6">Recent Visitors</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm sm:text-base">
                                <thead>
                                    <tr className="border-b border-secondary">
                                        <th className="text-left text-secondary py-3 px-4">#</th>
                                        <th className="text-left text-secondary py-3 px-4">Timestamp</th>
                                        <th className="text-left text-secondary py-3 px-4">Browser</th>
                                        <th className="text-left text-secondary py-3 px-4">Device</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {analytics.visitors && analytics.visitors.length > 0 ? (
                                        analytics.visitors.slice(0, 20).map((visitor, index) => (
                                            <tr key={index} className="border-b border-secondary/20">
                                                <td className="text-white py-3 px-4">{index + 1}</td>
                                                <td className="text-white py-3 px-4">{formatDate(visitor.timestamp)}</td>
                                                <td className="text-white py-3 px-4">{visitor.browser || "Unknown"}</td>
                                                <td className="text-white py-3 px-4">{visitor.device || "Unknown"}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="4" className="text-center text-secondary py-8">
                                                No visitor data available yet
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Analytics;
