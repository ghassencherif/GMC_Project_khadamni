import React from "react";
import "./searchbar.css";

function SearchBar(props) {
  return (
    <div className="wrap">
      <div className="search">
        <input
          onChange={props.handleInput}
          type="text"
          className="searchTerm"
          placeholder="What are you looking for?"
        />
        <button type="submit" className="searchButton">
          <span>🔍</span>
        </button>
        <select
          name="category"
          className="field-select"
          onChange={props.handleSelect}>
          <option value="">All</option>
          <option value="Enduit et peinture">Enduit et peinture</option>
          <option value="Plombier">Plombier</option>
          <option value="Etudes">Etudes</option>
          <option value="Architecte">Architecte</option>
          <option value="Bureau d'etude">Bureau d'etude</option>
          <option value="Topographe">Topographe</option>
          <option value="Electricité">Electricité</option>
          <option value="Pisciniste">Pisciniste</option>
          <option value="Travaux publics">Travaux publics</option>
          <option value="Cuisiniste">Cuisiniste</option>
          <option value="Quincaillerie">Quincaillerie</option>
          <option value="Menuiserie aluminium">Menuiserie aluminium</option>
          <option value="Ponçage et lustrage">Ponçage et lustrage</option>
          <option value="Faux plafond et placo-plâtre">
            Faux plafond et placo-plâtre
          </option>
          <option value="Revêtement et sanitaire">
            Revêtement et sanitaire
          </option>
          <option value="Ferronnerie">Ferronnerie</option>
          <option value="Menuiserie bois">Menuiserie bois</option>
        </select>
      </div>
    </div>
  );
}

export default SearchBar;
