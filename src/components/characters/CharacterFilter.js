function CharacterFilter({ search, setSearch }) {
  return (
    <div className="filterComponent">
      <input
        type="text"
        placeholder="Search Characters..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
    </div>
  );
}

export default CharacterFilter;
