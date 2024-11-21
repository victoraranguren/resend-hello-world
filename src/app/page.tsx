"use client";

export default function Home() {
  const onSubmit = async (e: FormDataEvent) => {
    e.preventDefault();
    const body = { firstName: "Victor", to: "victoraranguren.dev@gmail.com" };

    const res = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });

    const data = await res.json();

    console.log(data);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <form onSubmit={onSubmit}>
          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
}
