import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const stats = [
  { label: "Commits this week", value: "—", change: "Connect GitHub to start" },
  { label: "Open PRs", value: "—", change: "Connect GitHub to start" },
  { label: "Avg cycle time", value: "—", change: "Connect GitHub to start" },
  { label: "Sprint velocity", value: "—", change: "Connect GitHub to start" },
];

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-semibold text-slate-900">Dashboard</h1>
          <Badge variant="outline" className="text-xs">Setup required</Badge>
        </div>
        <p className="text-slate-500">
          Connect your GitHub account to start tracking developer metrics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-500">
                {stat.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold text-slate-900 mb-1">{stat.value}</div>
              <p className="text-xs text-slate-400">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-dashed border-2 border-slate-200">
        <CardContent className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-2xl mb-4">
            🔗
          </div>
          <h2 className="text-lg font-semibold text-slate-900 mb-2">
            Connect GitHub to get started
          </h2>
          <p className="text-slate-500 text-sm max-w-sm mb-6">
            Sign in with your GitHub account to start ingesting commits, pull requests, and team activity data.
          </p>
          <div className="px-4 py-2 bg-slate-900 text-white text-sm rounded-lg cursor-not-allowed opacity-60">
            Sign in with GitHub (available Day 3)
          </div>
        </CardContent>
      </Card>
    </div>
  );
}