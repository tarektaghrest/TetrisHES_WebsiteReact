import { useEffect, useState } from "react";

function Logbook() {
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://dev-tetris-hes-so.pantheonsite.io/wp-json/wp/v2/pages?slug=logbook",
      { cache: "no-store" }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) setPage(data[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (!page) return <p>Home page not found</p>;

  return (
    <main>
      <h1>{page.title.rendered}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: page.content.rendered,
        }}
      />
    </main>
  );
}

export default Logbook;
