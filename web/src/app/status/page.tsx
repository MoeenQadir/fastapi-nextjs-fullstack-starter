"use client";

import { useCallback, useEffect, useState } from "react";
import { api } from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Wifi, WifiOff } from "lucide-react";

export default function StatusPage() {
  const [health, setHealth] = useState<{ status: string } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const checkHealth = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await api.health();
      setHealth(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to reach API");
      setHealth(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    checkHealth();
  }, [checkHealth]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Status</h1>
        <p className="text-muted-foreground mt-2">
          Live health check of the MoeenDev services.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Frontend Console
              <Badge variant="default">Healthy</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              The Next.js console is serving normally on Vercel.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              API Service
              {loading ? (
                <Badge variant="secondary">Checking...</Badge>
              ) : health?.status === "ok" ? (
                <Badge variant="default">
                  <Wifi className="mr-1 h-3 w-3" />
                  Healthy
                </Badge>
              ) : (
                <Badge variant="secondary">
                  <WifiOff className="mr-1 h-3 w-3" />
                  Offline · Demo
                </Badge>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {error ? (
              <p className="text-sm text-muted-foreground">
                The FastAPI backend isn&apos;t connected right now, so MoeenDev
                runs in demo mode with local data.
              </p>
            ) : health ? (
              <p className="text-sm text-muted-foreground">
                API is responding normally.
              </p>
            ) : (
              <p className="text-sm text-muted-foreground">Checking connection...</p>
            )}
            <Button variant="outline" size="sm" className="mt-4" onClick={checkHealth}>
              Refresh
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
