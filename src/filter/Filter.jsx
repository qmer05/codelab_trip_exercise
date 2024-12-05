import "./Filter.css";
import { useEffect, useState } from "react";

const Filter = ({ trips, setFilteredTrips }) => {
  const [categories, setCategories] = useState([]);
  const url = "https://packingapi.cphbusinessapps.dk/packinglist/";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.categories);
        console.log(data);
      });
  }, []);

  function clickHandler(categoryInput) {
    const categoryToUpper = categoryInput.toUpperCase();
    // Filter trips without modifying the original list
    const filteredTrips = trips.filter((trip) => trip.category === categoryToUpper);
    setFilteredTrips(filteredTrips);
  }

  function resetFilter() {
    // Reset to show all trips
    setFilteredTrips(trips);
  }

  return (
    <>
      <div className="dropdown">
        <button onClick={() => myFunction()} className="dropbtn">
          Category
        </button>
        <div id="myDropdown" className="dropdown-content">
          <div className="dropdown_box">
            <a onClick={() => resetFilter()}>
              <strong>Show All</strong>
            </a>
          </div>
          {categories.map((category, index) => (
            <div key={index} className="dropdown_box">
              <a onClick={() => clickHandler(category)}>
                <strong>{category}</strong>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

export default Filter;
