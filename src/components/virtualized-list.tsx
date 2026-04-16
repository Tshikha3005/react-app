import { useState, useEffect, useRef, useTransition } from "react";
import { Table } from "antd";

interface SearchResult {
  id: string;
  name: string;
  email: string;
}

export default function SearchTable() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isPending, startTransition] = useTransition();

  const cache = useRef<Record<string, SearchResult[]>>({});
  const controllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (!query) return;

    const timer = setTimeout(async () => {
      // ✅ cache
      if (cache.current[query]) {
        setResults(cache.current[query]);
        return;
      }

      // ✅ cancel previous request
      if (controllerRef.current) {
        controllerRef.current.abort();
      }

      const controller = new AbortController();
      controllerRef.current = controller;

      try {
        const res = await fetch(`/api/search?q=${query}`, {
          signal: controller.signal,
        });

        const data: SearchResult[] = await res.json();

        cache.current[query] = data;

        startTransition(() => {
          setResults(data);
        });
      } catch (err) {
        if (err instanceof Error && err.name !== "AbortError") {
          console.error(err);
        }
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  const columns = [
    { title: "Name", dataIndex: "name" },
    { title: "Email", dataIndex: "email" },
  ];

  return (
    <div>
      <input
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {isPending && <p>Rendering...</p>}

      <Table
        dataSource={results}
        columns={columns}
        rowKey="id"
        pagination={false}
      />
    </div>
  );
}
