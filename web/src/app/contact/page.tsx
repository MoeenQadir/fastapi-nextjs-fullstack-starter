import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button-link";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with the MoeenDev team — email, phone or location.",
};

const contact = {
  email: "myselfxdeveloper@gmail.com",
  phone: "+92 344 1586424",
  phoneHref: "+923441586424",
  location: "Multan, Punjab, Pakistan",
};

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
        <p className="text-muted-foreground mt-2">
          Have a project in mind or just want to say hello? Reach out to the
          MoeenDev team and let&apos;s build something great together.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/15 to-cyan-400/15 text-primary ring-1 ring-primary/20">
              <Mail className="h-5 w-5" />
            </div>
            <CardTitle>Email</CardTitle>
            <CardDescription>For work inquiries</CardDescription>
          </CardHeader>
          <CardContent>
            <a
              href={`mailto:${contact.email}`}
              className="text-sm font-medium text-primary hover:underline break-all"
            >
              {contact.email}
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/15 to-cyan-400/15 text-primary ring-1 ring-primary/20">
              <Phone className="h-5 w-5" />
            </div>
            <CardTitle>Phone</CardTitle>
            <CardDescription>WhatsApp available</CardDescription>
          </CardHeader>
          <CardContent>
            <a
              href={`tel:${contact.phoneHref}`}
              className="text-sm font-medium text-primary hover:underline"
            >
              {contact.phone}
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/15 to-cyan-400/15 text-primary ring-1 ring-primary/20">
              <MapPin className="h-5 w-5" />
            </div>
            <CardTitle>Location</CardTitle>
            <CardDescription>Based locally, working globally</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm font-medium">{contact.location}</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Send className="h-5 w-5 text-primary" />
            Send a Message
          </CardTitle>
          <CardDescription>
            This opens your email client with the address pre-filled.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ButtonLink
            href={`mailto:${contact.email}?subject=Project inquiry — MoeenDev console`}
          >
            <Mail className="mr-2 h-4 w-4" />
            Email the team
          </ButtonLink>
          <div className="mt-6 flex items-center gap-2 rounded-lg border border-primary/25 bg-primary/10 px-4 py-3 text-sm text-foreground">
            <Clock className="h-4 w-4 shrink-0 text-primary" />
            Usually replies within 24 hours — available for freelance &amp;
            full-time roles.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}