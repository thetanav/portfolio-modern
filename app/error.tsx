"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <section className="h-[70vh] w-full flex items-center justify-center">
      <div className="flex-col">
        <h1 className="font-bold text-2xl mb-4 tracking-tighter">
          Oh no, something went wrong.
        </h1>
        <p>
          maybe refresh? If you expected to see something here, let me know
          tanavposwal939@gmail.com.
        </p>
      </div>
    </section>
  );
}
