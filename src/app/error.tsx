"use client";

type Props = {
  error: Error;
  reset: () => void;
};

export default function Error({
  reset,
}: Props) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1>Something went wrong.</h1>

      <button onClick={reset}>
        Try Again
      </button>
    </div>
  );
}