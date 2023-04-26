function Home() {
  return (
    <div className="homeContainer">
      <h1>Welcome!</h1>
      <div className="homePageInformation">
        <p>
          This webpage is a React application dedicated to the main characters
          of my favorite anime.
        </p>
        <img
          src="../Images/OnePieceCover.jpg"
          alt="Straw Hat crew celebrating their reunion in Wano."
        />
        <p>
          One Piece is an action-adventure anime, where the Straw Hat pirate
          crew goes on crazy and interesting adventures.{" "}
        </p>
      </div>
    </div>
  );
}

export default Home;
