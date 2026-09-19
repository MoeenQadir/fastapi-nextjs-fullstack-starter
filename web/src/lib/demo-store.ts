import type { Record, RecordCreate, RecordUpdate } from "./api";

const STORAGE_KEY = "moeendev-records";

function uid(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `rec_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
}

export function seedRecords(): Record[] {
  const now = new Date();
  const at = (days: number) =>
    new Date(now.getTime() - days * 24 * 60 * 60 * 1000).toISOString();

  return [
    {
      id: uid(),
      name: "Welcome aboard 🚀",
      description:
        "This is demo data running in your browser. Connect the FastAPI backend to sync with a real database.",
      status: "completed",
      created_at: at(2),
      updated_at: at(1),
    },
    {
      id: uid(),
      name: "Background worker pipeline",
      description:
        "Records push through pending → processing → completed via ARQ + Redis.",
      status: "processing",
      created_at: at(1),
      updated_at: at(1),
    },
    {
      id: uid(),
      name: "API health check",
      description: "Status page pings /health to verify the backend is reachable.",
      status: "pending",
      created_at: at(0),
      updated_at: at(0),
    },
  ];
}

function read(): Record[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as Record[];
  } catch {
    return [];
  }
}

function write(items: Record[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export const demoStore = {
  list(): { items: Record[]; total: number } {
    let items = read();
    if (items.length === 0) {
      items = seedRecords();
      write(items);
    }
    return { items, total: items.length };
  },

  create(data: RecordCreate): Record {
    const now = new Date().toISOString();
    const item: Record = {
      id: uid(),
      name: data.name,
      description: data.description ?? null,
      status: data.status ?? "pending",
      created_at: now,
      updated_at: now,
    };
    write([item, ...read()]);
    return item;
  },

  update(id: string, data: RecordUpdate): Record {
    const items = read();
    const index = items.findIndex((r) => r.id === id);
    if (index === -1) {
      throw new Error("Record not found in demo store");
    }
    const updated: Record = {
      ...items[index],
      ...data,
      description: data.description !== undefined ? data.description : items[index].description,
      updated_at: new Date().toISOString(),
    };
    items[index] = updated;
    write(items);
    return updated;
  },

  delete(id: string): void {
    write(read().filter((r) => r.id !== id));
  },
};