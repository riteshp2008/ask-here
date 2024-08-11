"use client";
import React, { useState, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Bot } from "lucide-react";

export default function Component() {
  const [link, setLink] = useState<string>("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!link) return;
    router.push(`/chat/${encodeURIComponent(link)}`);
  };

  return (
    <div className="flex min-h-[100dvh] flex-col bg-gray-900">
      <main className="container mx-auto flex flex-1 flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-md space-y-6">
          <div className="text-center">
            <Bot className="w-24 h-24 mx-auto text-white mb-3" />
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
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
              className="block w-full rounded-md border-input bg-gray-700 px-3 py-2 text-foreground shadow-sm focus:border-primary focus:ring-primary"
              value={link}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setLink(e.target.value)
              }
            />
            <Button
              type="submit"
              className="inline-flex w-full justify-center rounded-md bg-gray-950 px-3 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Chat with Bot
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}
