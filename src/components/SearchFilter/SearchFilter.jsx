 import DropDown from "./DropDowns";
 
 const SearchFilterSection = ({ onChangeSearch, value, options1,value1,label1,onChange1 , options2,value2,label2,onChange2 }) => {

  return (

    <div class="search-filter-container">
    <div class="search-bar">
      <ion-icon class="search-icon" name="search-outline"></ion-icon>
      <input    id="search"  type="text" class="search-input" value={value}  onChange={onChangeSearch}/>
    </div>
    <div class="dropdowns">
      <div class="sort-content">
       <DropDown value={value1} options={options1} onChange={onChange1} label={label1}/>
      </div>
      <div class="filter-content">
      <DropDown value={value2} options={options2} onChange={onChange2} label={label2}/>
      </div>
    </div>
  </div>
  )
}



export default SearchFilterSection;