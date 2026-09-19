import { RecordList } from "@/components/records/record-list";

export default function RecordsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Records</h1>
        <p className="text-muted-foreground mt-2">
          Manage your records inside the MoeenDev console. New records are
          automatically processed by the background worker — or stored locally
          in demo mode while the backend is offline.
        </p>
      </div>
      <RecordList />
    </div>
  );
}
