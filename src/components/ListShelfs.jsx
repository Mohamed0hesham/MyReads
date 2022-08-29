import React from "react";
import PropTypes from "prop-types";
import Shelf from "./Shelf";

function ListShelfs({ shelfs }) {
  return shelfs.map((shelf) => {
    return <Shelf key={shelf} shelfName={shelf} />;
  });
}

ListShelfs.propTypes = {
  shelfs: PropTypes.array,
};

export default ListShelfs;
