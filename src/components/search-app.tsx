import React, { useEffect, useState, useTransition } from "react";

export const SearchApp = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value); // urgent update
  };

  // API optimization
  // UI performance
  // User experience

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!query) return;

      const res = await fetch(`/api/search?q=${query}`);
      const data = await res.json();

      startTransition(() => {
        setResults(data);
      });
    }, 300); // debounce

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div>
      <h2>Search App</h2>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
      />
      {isPending && <p>Loading...</p>}
      <ul>
        {results.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
