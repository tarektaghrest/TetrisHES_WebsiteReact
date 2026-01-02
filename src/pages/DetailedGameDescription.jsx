import { useEffect, useState } from "react";


function DetailedGameDescription() {
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);



  useEffect(() => {
    fetch(
      "https://dev-tetris-hes-so.pantheonsite.io/wp-json/wp/v2/pages?slug=detailed-game-description/ ",
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

  // Event Delegation for Image Clicks
  const handleContentClick = (e) => {
    if (e.target.tagName === "IMG") {
      e.preventDefault();
      setSelectedImage(e.target.src);
    }
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (!page) return <p>Home page not found</p>;
  return (
    <main>
      <h1>{page.title.rendered}</h1>
      <div
        className="detailed-content"
        onClick={handleContentClick}
        dangerouslySetInnerHTML={{
          __html: page.content.rendered,
        }}
      />

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div className="image-modal-overlay" onClick={closeModal}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <img src={selectedImage} alt="Fullscreen View" />
          </div>
        </div>
      )}
    </main>
  );
}

export default DetailedGameDescription;
