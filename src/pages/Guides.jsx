import ListViewerGuides from "../listviewerGuides/ListViewerGuides";

function Guides({loggedIn }) {
  return (
    <>
      <h1>Guides</h1>
      <p>This is the Guides content area.</p>
      <ListViewerGuides loggedIn={loggedIn} />
    </>
  );
}

export default Guides;
