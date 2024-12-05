import "./ListViewerTrips.css";

const ListViewerTrips = ({ trips }) => {
  return (
    <>
      {trips.map((trip, index) => (
        <div key={index} className="info_box">
          <p>
            <strong>Name</strong>
          </p>
          <p>{trip.name}</p>
          <p>
            <strong>Start time</strong>
          </p>
          <p>{trip.starttime}</p>
          <p>
            <strong>End time</strong>
          </p>
          <p>{trip.endtime}</p>
          <p>
            <strong>Price</strong>
          </p>
          <p>{trip.price}</p>
          <p>
            <strong>Duration</strong>
          </p>
          <p>{duration(trip.starttime, trip.endtime)}</p>
          <p>
            <strong>Category</strong>
          </p>
          <p>{trip.category}</p>
        </div>
      ))}
    </>
  );
};

function duration(starttime, endtime) {
  const startDate = new Date(starttime);
  const endDate = new Date(endtime);
  const durationMs = endDate - startDate;
  const days = Math.floor(durationMs / (1000 * 60 * 60 * 24));
  return days > 1 ? `${days} days` : `${days} day`;
}

export default ListViewerTrips;
