import React from "react";
import "./SearchBox.css";

export default function searchBar(props) {
  return (
    <>


      <div class="input-group mb-3 searchBar">
        <input

          onChange={props.handleInput}
          value={props.value}
          type="text"
          className="form-control"
          placeholder="name"
          aria-label="Employee username"
          aria-describedby="button-addon1"

        ></input>


        <div class="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon1"
            onClick={props.handleSearch}
          >

            Search
          </button>
        </div>
      </div>
    </>
  );
}
