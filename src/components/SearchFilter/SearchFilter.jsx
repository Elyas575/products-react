 const SearchFilterSection = () => {
  return (
    <div class="search-filter-container">
    <div class="search-bar">
      <ion-icon class="search-icon" name="search-outline"></ion-icon>
      <input
        id="search"
        type="text"
        class="search-input"
        placeholder="Search the website..."
      />
    </div>
    <div class="dropdowns">
      <div class="sort-content">
        <label> Sort by: </label>
        <select id="sort-field" class="sort-by-default">
          <option value="Default">Default</option>
          <option value="Title">Title</option>
          <option value="Name">Name</option>
        </select>
      </div>
      <div class="filter-content">
        <label> Filter By: </label>
        <select class="sort-by-filter">
          <option value="filter">Default</option>
        </select>
      </div>
    </div>
  </div>
  )
}



export default SearchFilterSection;