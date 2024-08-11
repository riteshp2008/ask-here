"use client";
import React, { useState, FormEvent, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Component() {
  const [link, setLink] = useState<string>("");
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsReady(true);
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (link && isReady) {
      const encodedUrl = encodeURIComponent(link);
      router.push(`/${encodedUrl}`);
    }
  };

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <main className="container mx-auto flex flex-1 flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-md space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Chat with our AI Bot
            </h1>
            <p className="mt-3 text-muted-foreground">
              Paste a link and let our AI bot analyze it for you.
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <Input
              type="url"
              placeholder="Paste a link here..."
              className="block w-full rounded-md border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-primary focus:ring-primary"
              value={link}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setLink(e.target.value)
              }
            />
            <Button
              type="submit"
              className="inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Chat with Bot
            </Button>
          </form>
        </div>
      </main>
      <footer className="bg-muted py-2 text-center text-muted-foreground">
        <p>&copy; 2024 askhere | All rights reserved</p>
      </footer>
    </div>
  );
}
