"use client";
import Link from "next/link";
import { surahs as data } from "./data";
import { useState, useEffect } from "react";

export default function Home() {
  const title: string = `
    .88888.                                        888888ba             dP    88888888b                     dP
  d8\'   \`8b                                       88    \`8b            88    88                            88
  88     88  dP    dP 88d888b. .d8888b. 88d888b. a88aaaa8P' dP    dP d8888P a88aaaa    .d8888b. .d8888b. d8888P .d8888b. 88d888b.
  88  db 88  88    88 88\'  \`88 88\'  \`88 88\'  \`88  88   \`8b. 88    88   88    88        88'  \`88 Y8ooooo.   88   88ooood8 88'  \`88
  Y8.  Y88P  88.  .88 88       88.  .88 88    88  88    .88 88.  .88   88    88        88.  .88       88   88   88.  ... 88
  \`8888PY8b \`88888P' dP       \`88888P8 dP    dP  88888888P \`88888P'   dP    dP        \`88888P8 \`88888P'   dP   \`88888P' dP
  `;

  const [query, setQuery] = useState("");
  const [filteredSurahs, setFilteredSurahs] = useState(data);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const searchQuery = query.toLowerCase();
      const results = data.filter((surah) =>
        surah.title.toLowerCase().includes(searchQuery)
      );
      setFilteredSurahs(results);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <div className="space-y-4 p-5">
      <pre className="text-[0.2rem] select-none">{title}</pre>
      <div>
        <h1>Welcome to &quot;Quran but Faster&quot;</h1>
        <p>Read quran with faster speed, optimized, fine-tuned</p>
      </div>
      <div className="space-y-2">
        <h1 className="">Surah Explorer</h1>

        <input
          type="text"
          className="border-2 border-blue-600 px-2"
          placeholder="Search for a surah..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <div className="grid grid-cols-3 gap-2 lg:grid-cols-4">
          {filteredSurahs.length > 0 ? (
            filteredSurahs.map((v, i) => (
              <Link
                prefetch={true}
                key={i}
                href={`surah/${i + 1}`}
                className="hover:underline container p-4 rounded-lg border-2 border-black hover:bg-black/5"
              >
                <p>{v.title}</p>
              </Link>
            ))
          ) : (
            <p>No surahs found for &quot;{query}&quot;</p>
          )}
        </div>
      </div>
    </div>
  );
}
