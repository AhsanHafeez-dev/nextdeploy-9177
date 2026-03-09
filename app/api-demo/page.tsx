"use client";

import { useState, useEffect } from "react";

interface ApiResponse {
  id: number;
  name: string;
  description: string;
  status: "active" | "inactive";
  createdAt: string;
}

export default function ApiDemoPage() {
  const [responses, setResponses] = useState<ApiResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedEndpoint, setSelectedEndpoint] = useState("/api/users");
  const [responseData, setResponseData] = useState<string>("");

  const endpoints = [
    { path: "/api/users", method: "GET", description: "Get all users" },
    { path: "/api/users/1", method: "GET", description: "Get user by ID" },
    { path: "/api/posts", method: "GET", description: "Get all posts" },
    { path: "/api/health", method: "GET", description: "Health check" },
    { path: "/api/echo", method: "POST", description: "Echo request data" },
  ];

  const fetchApi = async (endpoint: string, method: string = "GET") => {
    setLoading(true);
    try {
      const url = `${window.location.origin}${endpoint}`;
      const options: RequestInit = {
        method,
        headers: {
          "Content-Type": "application/json",
        },
      };

      if (method === "POST") {
        options.body = JSON.stringify({
          message: "Hello from NextDeploy!",
          timestamp: new Date().toISOString(),
        });
      }

      const response = await fetch(url, options);
      const data = await response.json();

      setResponseData(JSON.stringify(data, null, 2));
      
      setResponses(prev => [{
        id: Date.now(),
        name: endpoint,
        description: `${method} request`,
        status: response.ok ? "active" : "inactive",
        createdAt: new Date().toISOString(),
      }, ...prev.slice(0, 4)]);
    } catch (error) {
      setResponseData(JSON.stringify({ error: "Failed to fetch API" }, null, 2));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApi("/api/health");
  }, []);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            API Demo
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Test the built-in API routes of this Next.js application. All endpoints are fully functional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* API Endpoints */}
          <div className="bg-card rounded-3xl p-8 shadow-lg border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Available Endpoints
            </h2>

            <div className="space-y-4 mb-8">
              {endpoints.map((endpoint, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    selectedEndpoint === endpoint.path
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary/50 hover:bg-secondary"
                  }`}
                  onClick={() => setSelectedEndpoint(endpoint.path)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          endpoint.method === "GET"
                            ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400"
                            : "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400"
                        }`}>
                          {endpoint.method}
                        </span>
                        <code className="font-mono text-foreground">
                          {endpoint.path}
                        </code>
                      </div>
                      <p className="text-muted-foreground mt-2">{endpoint.description}</p>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center">
                      <span className="text-muted-foreground">→</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                const endpoint = endpoints.find(e => e.path === selectedEndpoint);
                if (endpoint) {
                  fetchApi(endpoint.path, endpoint.method);
                }
              }}
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <span className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></span>
                  Testing API...
                </span>
              ) : (
                "Test Selected Endpoint"
              )}
            </button>
          </div>

          {/* Response Display */}
          <div className="space-y-8">
            <div className="bg-gray-900 rounded-3xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">API Response</h2>
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm">Live</span>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 overflow-auto">
                <pre className="text-green-400 font-mono text-sm">
                  {responseData || "Click an endpoint to see the response..."}
                </pre>
              </div>

              <div className="mt-6 flex items-center justify-between text-gray-400 text-sm">
                <div>Status: {loading ? "Loading..." : "Ready"}</div>
                <div>Content-Type: application/json</div>
              </div>
            </div>

            {/* Recent Requests */}
            <div className="bg-card rounded-3xl p-8 shadow-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Recent Requests
              </h2>

              {responses.length > 0 ? (
                <div className="space-y-4">
                  {responses.map((response) => (
                    <div
                      key={response.id}
                      className="flex items-center justify-between p-4 rounded-xl border border-border hover:bg-secondary transition-colors"
                    >
                      <div>
                        <div className="font-medium text-foreground">
                          {response.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {response.description}
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          response.status === "active"
                            ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400"
                            : "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400"
                        }`}>
                          {response.status}
                        </span>
                        <div className="text-sm text-muted-foreground">
                          {new Date(response.createdAt).toLocaleTimeString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  No requests yet. Test an endpoint to see results here.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* API Documentation */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            API Documentation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                How It Works
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                  All API routes are located in the <code>/app/api</code> directory
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                  Routes are serverless functions that run on Vercel
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                  Automatic TypeScript support for request/response types
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                  Built-in error handling and validation
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Best Practices
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-green-500 dark:text-green-400 mr-2">✓</span>
                  Use proper HTTP methods (GET, POST, PUT, DELETE)
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 dark:text-green-400 mr-2">✓</span>
                  Implement rate limiting for production
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 dark:text-green-400 mr-2">✓</span>
                  Add authentication for protected routes
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 dark:text-green-400 mr-2">✓</span>
                  Include comprehensive error responses
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}