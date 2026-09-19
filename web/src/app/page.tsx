import {
  Server,
  MonitorSmartphone,
  Workflow,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button-link";

const contact = {
  email: "myselfxdeveloper@gmail.com",
  phone: "+92 344 1586424",
  location: "Multan, Punjab, Pakistan",
};

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-2xl border bg-card p-8 sm:p-10">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative space-y-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            MoeenDev · Full-Stack Operations Console
          </span>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            Everything your full-stack app needs,{" "}
            <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
              in one console.
            </span>
          </h1>
          <p className="max-w-2xl text-muted-foreground">
            A production-ready starter platform built with Next.js, FastAPI and a
            background worker pipeline. Manage records, watch service health and
            reach out to the team — all from this single dashboard.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <ButtonLink href="/records">
              Open Records
              <ArrowRight className="ml-2 h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/contact" variant="outline">
              Contact Us
            </ButtonLink>
          </div>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          {
            icon: Server,
            title: "REST API Core",
            subtitle: "FastAPI backend",
            body: "CRUD endpoints, PostgreSQL persistence and Redis-backed caching with async SQLAlchemy and Alembic migrations.",
          },
          {
            icon: MonitorSmartphone,
            title: "Frontend Engine",
            subtitle: "Next.js frontend",
            body: "Server-rendered React with the App Router, TypeScript, Tailwind CSS v4 and shadcn/ui components.",
          },
          {
            icon: Workflow,
            title: "Worker Pipeline",
            subtitle: "ARQ background jobs",
            body: "Async job processing with ARQ and Redis — records are enqueued, processed and updated automatically.",
          },
        ].map((item) => (
          <Card key={item.title}>
            <CardHeader>
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/15 to-cyan-400/15 text-primary ring-1 ring-primary/20">
                <item.icon className="h-5 w-5" />
              </div>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.subtitle}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{item.body}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Console Modules</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>
              <strong className="text-foreground">Records</strong> — create,
              view, update and delete records. New items are automatically
              enqueued for background processing.
            </p>
            <p>
              <strong className="text-foreground">Status</strong> — check the
              health of the API service and verify connections are working.
            </p>
            <p>
              <strong className="text-foreground">Settings</strong> — view
              application configuration and environment details.
            </p>
            <p>
              <strong className="text-foreground">Contact</strong> — reach the
              MoeenDev team directly by email, phone or location.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription>Let&apos;s build something together.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-muted"
            >
              <Mail className="mt-0.5 h-4 w-4 text-primary shrink-0" />
              <span>
                <span className="block text-muted-foreground text-xs">Email</span>
                <span className="font-medium">{contact.email}</span>
              </span>
            </a>
            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className="flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-muted"
            >
              <Phone className="mt-0.5 h-4 w-4 text-primary shrink-0" />
              <span>
                <span className="block text-muted-foreground text-xs">Phone</span>
                <span className="font-medium">{contact.phone}</span>
              </span>
            </a>
            <div className="flex items-start gap-3 rounded-lg p-2">
              <MapPin className="mt-0.5 h-4 w-4 text-primary shrink-0" />
              <span>
                <span className="block text-muted-foreground text-xs">Location</span>
                <span className="font-medium">{contact.location}</span>
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}