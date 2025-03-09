import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Welcome to HacktivSpace</h1>
      <p className="text-muted-foreground mt-2">
        Your hub for research, innovation, and cybersecurity.
      </p>
    </main>
  );
}
