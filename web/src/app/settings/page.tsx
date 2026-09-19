"use client";

import { useCallback, useEffect, useState } from "react";
import { api } from "@/lib/api";
import type { AppInfo } from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { WifiOff } from "lucide-react";

export default function SettingsPage() {
  const [appInfo, setAppInfo] = useState<AppInfo | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchInfo = useCallback(async () => {
    setLoading(true);
    try {
      const data = await api.appInfo();
      setAppInfo(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch app info");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchInfo();
  }, [fetchInfo]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground mt-2">
          Application configuration and environment info for the MoeenDev console.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Application Info
            {appInfo && (
              <Badge variant={appInfo.env === "production" ? "default" : "secondary"}>
                {appInfo.env}
              </Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p className="text-sm text-muted-foreground">Loading...</p>
          ) : error && !appInfo ? (
            <div className="space-y-3">
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <WifiOff className="h-4 w-4 shrink-0" />
                Backend not connected — showing frontend defaults. Deployed as a
                standalone Vercel app in demo mode.
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                <div className="rounded-lg border p-4">
                  <p className="text-xs font-medium text-muted-foreground">Name</p>
                  <p className="mt-1 text-sm font-semibold">MoeenDev Console</p>
                </div>
                <div className="rounded-lg border p-4">
                  <p className="text-xs font-medium text-muted-foreground">Environment</p>
                  <p className="mt-1">
                    <Badge variant="secondary">production</Badge>
                  </p>
                </div>
              </div>
            </div>
          ) : appInfo ? (
            <dl className="space-y-3">
              <div className="flex items-center justify-between">
                <dt className="text-sm font-medium">Name</dt>
                <dd className="text-sm text-muted-foreground">{appInfo.name}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-sm font-medium">Environment</dt>
                <dd>
                  <Badge variant={appInfo.env === "production" ? "default" : "secondary"}>
                    {appInfo.env}
                  </Badge>
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-sm font-medium">Version</dt>
                <dd className="text-sm text-muted-foreground">{appInfo.version}</dd>
              </div>
            </dl>
          ) : null}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Frontend Config</CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="space-y-3">
            <div className="flex items-center justify-between">
              <dt className="text-sm font-medium">Framework</dt>
              <dd className="text-sm text-muted-foreground font-mono">Next.js 16</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-sm font-medium">API Base URL</dt>
              <dd className="text-sm text-muted-foreground font-mono">
                {process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000"}
              </dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-sm font-medium">Backend URL</dt>
              <dd className="text-sm text-muted-foreground font-mono">
                {process.env.NEXT_PUBLIC_BACKEND_URL ||
                  process.env.BACKEND_URL ||
                  "not configured"}
              </dd>
            </div>
          </dl>
        </CardContent>
      </Card>
    </div>
  );
}