import "dotenv/config";
import { Event } from "../models/events.ts";
import { ConnectDB } from "../lib/mongoose.ts";

async function seedEvents() {
  try {
    await ConnectDB();

    await Event.deleteMany({});
    console.log("🧹 Existing events cleared");

    const events = [
      {
        name: "Hackathon X",
        dateTime: new Date("2025-03-10T09:00:00"),
        location: "Kochi",
        description: "48-hour hackathon for innovative developers.",
        fee: 200,
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      },
      {
        name: "CodeFest 2025",
        dateTime: new Date("2025-04-05T10:30:00"),
        location: "Bangalore",
        description: "Annual coding festival with workshops and contests.",
        fee: 150,
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      },
      {
        name: "DevCon Summit",
        dateTime: new Date("2025-05-12T11:00:00"),
        location: "Hyderabad",
        description: "Conference for full-stack and cloud developers.",
        fee: 300,
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b",
      },
      {
        name: "AI Builders Meetup",
        dateTime: new Date("2025-02-20T18:00:00"),
        location: "Chennai",
        description: "Meetup focused on real-world AI applications.",
        fee: 0,
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      },
      {
        name: "Open Source Sprint",
        dateTime: new Date("2025-03-25T09:30:00"),
        location: "Remote",
        description: "Contribute to open-source projects with mentors.",
        fee: 0,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      },
      {
        name: "Web3 Workshop",
        dateTime: new Date("2025-04-18T14:00:00"),
        location: "Mumbai",
        description: "Hands-on workshop on blockchain and Web3.",
        fee: 400,
        image: "https://images.unsplash.com/photo-1644088379091-d574269d422f",
      },
      {
        name: "Frontend Masters Live",
        dateTime: new Date("2025-06-01T10:00:00"),
        location: "Pune",
        description: "Advanced frontend techniques and best practices.",
        fee: 250,
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      },
      {
        name: "Backend Engineering Bootcamp",
        dateTime: new Date("2025-05-20T09:00:00"),
        location: "Delhi",
        description: "Deep dive into scalable backend architectures.",
        fee: 350,
        image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f",
      },
      {
        name: "Cloud Native Dev Day",
        dateTime: new Date("2025-06-15T11:30:00"),
        location: "Trivandrum",
        description: "Kubernetes, DevOps, and cloud-native tooling.",
        fee: 200,
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      },
    ];

    await Event.insertMany(events);
    console.log("✅ 9 events with date & time inserted");

    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
}

seedEvents();
