import "./ListViewerGuides.css";
import facade from "../util/apiFacade";
import { useState, useEffect } from "react";

const ListViewerGuides = ({ loggedIn }) => {
  const [guides, setGuides] = useState([]);

  useEffect(() => {
    facade.fetchDataGuides().then((data) => setGuides(data));
  }, []);

  return (
    <div>
      {facade.hasUserAccess("admin", loggedIn) ? (
        <div>
          <h2>Data Received from server</h2>
          {guides ? (
            <ul>
              {guides.map((guide) => (
                <div key={guide.id} className="info_box">
                  <p>{guide.firstname}</p>
                  <p>{guide.lastname}</p>
                  <p>{guide.email}</p>
                  <p>{guide.phone}</p>
                </div>
              ))}
            </ul>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      ) : (
        <div>
          <h2>No go, dude!</h2>
        </div>
      )}
    </div>
  );
};

export default ListViewerGuides;
