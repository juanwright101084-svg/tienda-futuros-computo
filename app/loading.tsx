export default function Loading() {
  return (
    <main className="min-h-screen">
      <div className="h-8 border-b border-[#262B36] bg-[#0D131C]" />

      <header className="border-b border-[#262B36] px-6 py-16 text-center">
        <div className="mx-auto h-3 w-32 animate-pulse rounded bg-[#151a24]" />
        <div className="mx-auto mt-4 h-10 w-80 animate-pulse rounded bg-[#151a24]" />
        <div className="mx-auto mt-4 h-4 w-96 animate-pulse rounded bg-[#151a24]" />
      </header>

      <section className="mx-auto max-w-4xl px-6 py-10">
        <div className="mb-8 flex gap-2">
          <div className="h-8 w-32 animate-pulse rounded-sm border border-[#262B36]" />
          <div className="h-8 w-36 animate-pulse rounded-sm border border-[#262B36]" />
        </div>

        <div className="divide-y divide-[#262B36] border-y border-[#262B36]">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex items-center justify-between gap-6 py-5">
              <div className="min-w-0 flex-1">
                <div className="h-4 w-1/3 animate-pulse rounded bg-[#151a24]" />
                <div className="mt-2 h-3 w-2/3 animate-pulse rounded bg-[#151a24]" />
              </div>
              <div className="h-4 w-16 shrink-0 animate-pulse rounded bg-[#151a24]" />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}