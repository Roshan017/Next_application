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
        venue: "CUSAT Innovation Hub",
        description: "48-hour hackathon for innovative developers.",
        overview:
          "Hackathon X brings together developers, designers, and innovators to build impactful solutions within 48 hours.",
        organiser: "Tech Community Kochi",
        abt_the_organiser:
          "Tech Community Kochi is a grassroots developer community promoting innovation and collaboration.",
        fee: 200,
        mode: "Offline",
        tags: ["hackathon", "coding", "innovation", "students"],
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      },
      {
        name: "CodeFest 2025",
        dateTime: new Date("2025-04-05T10:30:00"),
        location: "Bangalore",
        venue: "Bangalore International Exhibition Centre",
        description: "Annual coding festival with workshops and contests.",
        overview:
          "CodeFest is a large-scale developer festival featuring coding contests, workshops, and tech talks.",
        organiser: "CodeFest India",
        abt_the_organiser:
          "CodeFest India organizes nationwide developer-focused events.",
        fee: 150,
        mode: "Offline",
        tags: ["coding", "competition", "festival"],
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      },
      {
        name: "DevCon Summit",
        dateTime: new Date("2025-05-12T11:00:00"),
        location: "Hyderabad",
        venue: "HICC Convention Center",
        description: "Conference for full-stack and cloud developers.",
        overview:
          "DevCon Summit covers full-stack development, cloud, DevOps, and AI trends.",
        organiser: "DevCon Global",
        abt_the_organiser:
          "DevCon Global hosts international conferences for software professionals.",
        fee: 300,
        mode: "Offline",
        tags: ["conference", "fullstack", "cloud", "devops"],
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b",
      },
      {
        name: "AI Builders Meetup",
        dateTime: new Date("2025-02-20T18:00:00"),
        location: "Chennai",
        venue: "IIT Madras Research Park",
        description: "Meetup focused on real-world AI applications.",
        overview:
          "An evening meetup where AI practitioners share real-world implementations.",
        organiser: "AI Builders India",
        abt_the_organiser:
          "AI Builders India is a community of ML engineers and researchers.",
        fee: 0,
        mode: "Hybrid",
        tags: ["ai", "machine-learning", "meetup"],
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      },
      {
        name: "Open Source Sprint",
        dateTime: new Date("2025-03-25T09:30:00"),
        location: "Remote",
        venue: "Online (GitHub & Discord)",
        description: "Contribute to open-source projects with mentors.",
        overview:
          "A collaborative sprint focused on contributing to open-source software.",
        organiser: "Open Source Collective",
        abt_the_organiser:
          "Open Source Collective supports and funds open-source contributors.",
        fee: 0,
        mode: "Online",
        tags: ["open-source", "github", "community"],
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      },
      {
        name: "Web3 Workshop",
        dateTime: new Date("2025-04-18T14:00:00"),
        location: "Mumbai",
        venue: "WeWork BKC",
        description: "Hands-on workshop on blockchain and Web3.",
        overview:
          "A practical workshop covering blockchain fundamentals and Web3 architecture.",
        organiser: "Web3 Mumbai",
        abt_the_organiser:
          "Web3 Mumbai promotes decentralized technologies and developer learning.",
        fee: 400,
        mode: "Offline",
        tags: ["web3", "blockchain", "crypto"],
        image: "https://images.unsplash.com/photo-1644088379091-d574269d422f",
      },
      {
        name: "Frontend Masters Live",
        dateTime: new Date("2025-06-01T10:00:00"),
        location: "Pune",
        venue: "Pune Tech Park",
        description: "Advanced frontend techniques and best practices.",
        overview:
          "An advanced session on React, performance optimization, and UI architecture.",
        organiser: "Frontend Masters",
        abt_the_organiser:
          "Frontend Masters provides in-depth frontend education led by experts.",
        fee: 250,
        mode: "Offline",
        tags: ["frontend", "react", "ui-ux"],
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      },
      {
        name: "Backend Engineering Bootcamp",
        dateTime: new Date("2025-05-20T09:00:00"),
        location: "Delhi",
        venue: "Delhi Startup Hub",
        description: "Deep dive into scalable backend architectures.",
        overview:
          "An intensive bootcamp focused on backend system design and scalability.",
        organiser: "Backend Guild",
        abt_the_organiser:
          "Backend Guild is a professional network for backend engineers.",
        fee: 350,
        mode: "Offline",
        tags: ["backend", "system-design", "databases"],
        image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f",
      },
      {
        name: "Cloud Native Dev Day",
        dateTime: new Date("2025-06-15T11:30:00"),
        location: "Trivandrum",
        venue: "Technopark Phase 3",
        description: "Kubernetes, DevOps, and cloud-native tooling.",
        overview:
          "A full-day event focused on Kubernetes and cloud-native development.",
        organiser: "Cloud Native Kerala",
        abt_the_organiser:
          "Cloud Native Kerala is a regional cloud-native community.",
        fee: 200,
        mode: "Offline",
        tags: ["cloud", "kubernetes", "devops"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      },
    ];

    await Event.insertMany(events);
    console.log("✅ 9 events with venue, tags & mode inserted");

    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
}

seedEvents();
