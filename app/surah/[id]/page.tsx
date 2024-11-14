/* eslint-disable @typescript-eslint/no-explicit-any */
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  if (parseInt(id) > 114 || parseInt(id) < 1) {
    notFound();
  }

  const response = await fetch(
    `https://raw.githubusercontent.com/semarketir/quranjson/refs/heads/master/source/surah/surah_${id}.json`,
    { cache: "force-cache" }
  );
  const data = await response.json();
  if (!data) notFound();

  const verses: Record<string, any> = data.verse;

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col  space-y-6 text-right p-20">
        {Object.values(verses).map((val: string, id) => (
          <li className="font-semibold text-4xl" key={id}>
            {val}
          </li>
        ))}
      </div>
    </div>
  );
}
