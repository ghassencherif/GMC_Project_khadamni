import React, { useState } from "react";
import { addAnnonce } from "../JS/actions/actionUser";
import { useDispatch, useSelector } from "react-redux";
import "./style/AddAnnonce.css";

function AddAnnonce() {
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  const [newAnnonce, setNewAnnonce] = useState({
    title: "",
    description: "",
    address: "",
    category: "",
    img: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setNewAnnonce({ ...newAnnonce, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form>
        <ul className="form-style-1">
          <li>
            <label>
              Title<span className="required">*</span>
            </label>
            <input
              type="text"
              name="title"
              className="field-divided"
              placeholder="Title"
              onChange={handleChange}
            />
          </li>
          <li>
            <label>
              Description <span className="required">*</span>
            </label>
            <textarea
              name="description"
              id="field5"
              className="field-long field-textarea"
              onChange={handleChange}></textarea>
          </li>
          <li>
            <label>
              Address<span className="required">*</span>
            </label>
            <input
              type="text"
              name="address"
              className="field-divided"
              placeholder="Your address"
              onChange={handleChange}
            />
          </li>
          <li>
            <label>Category</label>
            <select
              name="category"
              className="field-select"
              onChange={handleChange}>
              <option value="">Choose Category</option>
              <option value="5fc21e0645108b00fcd049da">
                Enduit et peinture
              </option>
              <option value="5fc21da745108b00fcd049d5">Plombier</option>
              <option value="5fc21dd945108b00fcd049d6">Etudes</option>
              <option value="5fc21de445108b00fcd049d7">Architecte</option>
              <option value="5fc21df145108b00fcd049d8">Bureau d'etude</option>
              <option value="5fc21dfa45108b00fcd049d9">Topographe</option>
              <option value="5fc21e0645108b00fcd049da">
                Enduit et Peinture
              </option>
              <option value="5fc21e1245108b00fcd049db">Electricité</option>
              <option value="5fc21e1b45108b00fcd049dc">Pisciniste</option>
              <option value="5fc21e3845108b00fcd049dd">Travaux publics</option>
              <option value="5fc21e4445108b00fcd049de">Cuisiniste</option>
              <option value="5fc21e4c45108b00fcd049df">Quincaillerie</option>
              <option value="5fc21e5345108b00fcd049e0">
                Menuiserie aluminium
              </option>
              <option value="5fc21e6245108b00fcd049e1">
                Ponçage et lustrage
              </option>
              <option value="5fc21e8345108b00fcd049e2">
                Faux plafond et placo-plâtre
              </option>
              <option value="5fc21e9745108b00fcd049e3">
                Revêtement et sanitaire
              </option>
              <option value="5fc21ea245108b00fcd049e4">Ferronnerie</option>
              <option value="5fc21eb245108b00fcd049e5">Menuiserie bois</option>
            </select>
          </li>
          <li>
            <label>
              Add Picture<span className="required">*</span>
            </label>
            <input
              type="File"
              name="img"
              className="field-divided"
              onChange={handleChange}
            />
            <li>
              <label>
                Phone Number<span className="required">*</span>
              </label>
              <input
                type="text"
                name="phoneNumber"
                className="field-divided"
                placeholder="Your Number"
                onChange={handleChange}
              />
            </li>
          </li>
          <li>
            <input
              type="submit"
              value="Add"
              onClick={() => dispatch(addAnnonce(newAnnonce, user._id))}
            />
          </li>
        </ul>
      </form>
    </div>
  );
}
export default AddAnnonce;
