export default function Loading() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="h-3 w-28 animate-pulse rounded bg-[#151a24]" />

        <div className="mt-6 h-9 w-64 animate-pulse rounded bg-[#151a24]" />
        <div className="mt-2 h-4 w-96 animate-pulse rounded bg-[#151a24]" />

        <div className="mt-10 divide-y divide-[#262B36] border-y border-[#262B36]">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex items-center justify-between gap-6 py-5">
              <div className="min-w-0 flex-1">
                <div className="h-4 w-1/3 animate-pulse rounded bg-[#151a24]" />
                <div className="mt-2 h-3 w-2/3 animate-pulse rounded bg-[#151a24]" />
              </div>
              <div className="h-4 w-16 shrink-0 animate-pulse rounded bg-[#151a24]" />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}