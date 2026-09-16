export default function Loading() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <div className="h-3 w-28 animate-pulse rounded bg-[#151a24]" />

        <div className="mt-10 h-3 w-20 animate-pulse rounded bg-[#151a24]" />
        <div className="mt-3 h-9 w-3/4 animate-pulse rounded bg-[#151a24]" />

        <div className="mt-6 space-y-2">
          <div className="h-4 w-full animate-pulse rounded bg-[#151a24]" />
          <div className="h-4 w-5/6 animate-pulse rounded bg-[#151a24]" />
        </div>

        <div className="mt-10 divide-y divide-[#262B36] border-y border-[#262B36]">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex items-center justify-between py-4">
              <div className="h-3 w-24 animate-pulse rounded bg-[#151a24]" />
              <div className="h-3 w-20 animate-pulse rounded bg-[#151a24]" />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}