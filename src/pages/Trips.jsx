import ListViewerTrips from "../listviewerTrips/ListViewerTrips";
import Filter from "../filter/Filter";

function Trips({trips, setFilteredTrips, filteredTrips}) {
  return (
    <>
      <h1>Travel info</h1>
      <Filter trips={trips} setFilteredTrips={setFilteredTrips} />
      <ListViewerTrips trips={filteredTrips} />
    </>
  );
}

export default Trips;
