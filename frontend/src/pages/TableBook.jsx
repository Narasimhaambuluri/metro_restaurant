import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import Navbar from "./../components/Navbar";
import tableBack from "../images/book-table.jpeg";
import "./pages.css";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import { toast, Bounce } from "react-toastify";
import Footer from "./../components/Footer";

function TableBook() {
  const navigate = useNavigate();
  const [timeSlot, setTimeSlot] = useState("");
  const [locArray, setLocArray] = useState([]);
  const [locDetails, setLocDetails] = useState([]);
  const [locName, setLocName] = useState("");
  const [tableDetails, setTableDetails] = useState("");
  const [bookDate, setBookDate] = useState("");
  const [bookTableType, setBookTableType] = useState("");
  const [bookSlot, setBookSlot] = useState("");
  const [bookMembers, setBookMembers] = useState("");
  const all_slots = new Set([
    "9-10",
    "10-11",
    "11-12",
    "12-13",
    "13-14",
    "14-15",
    "18-19",
    "19-20",
    "20-21",
    "21-22",
    "22-23",
  ]);
  useEffect(() => {
    const token = localStorage.getItem("session_key");
    if (!token) {
      navigate("/login");
    }
  });
  useEffect(() => {
    const fetchLocations = async () => {
      const result = await axios.get("http://localhost:5000/location/all");
      setLocDetails(result.data);
      const updatedLocArray = result.data.map(
        (location) => location.location_name
      );
      setLocArray(updatedLocArray);
    };
    fetchLocations();
  }, []);
  const fetchTables = async (e) => {
    e.preventDefault();
    if (!locName) {
      console.log("Please select a location");
      return;
    }

    if (!bookDate) {
      toast.warn(" Please select a Date", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }
    const selectedDate = new Date(bookDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      toast.warn(" Please select future dates or today", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }
    if (!locArray.includes(locName)) {
      toast.warn("There is no branch in this location", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }
    const result = await axios.post("http://localhost:5000/table", {
      location: locName,
      date: bookDate,
    });
    setTableDetails(result.data);
  };
  const fetchTimeSlots = async (e) => {
    if (!e.target.value) {
      return;
    }
    const table_type = e.target.value;
    setBookTableType(e.target.value);
    const result = await axios.post("http://localhost:5000/table", {
      location: locName,
      date: bookDate,
    });
    if (table_type === "VIP") {
      const vip_booked_set = new Set(result.data.vip_booked);
      const final_vip_slots = [...all_slots].filter(
        (slot) => !vip_booked_set.has(slot)
      );
      setTimeSlot(final_vip_slots);
    } else {
      const premium_booked_set = new Set(result.data.premium_booked);
      const final_premium_slots = [...all_slots].filter(
        (slot) => !premium_booked_set.has(slot)
      );
      setTimeSlot(final_premium_slots);
    }
  };
  const bookTheTable = async (e) => {
    e.preventDefault();
    if (!bookTableType || !bookMembers || !bookSlot) {
      toast.warn(" Please select all fields", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }
    const token = localStorage.getItem("session_key");
    const bookDetails = {
      token: token,
      booked_date: bookDate,
      location_name: locName,
      slot_booked: bookSlot,
      members: bookMembers,
      table_type: bookTableType,
    };
    const result = await axios.post(
      "http://localhost:5000/table/book",
      bookDetails
    );
    window.location.reload();
    toast.success("Table Booked Successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };
  return (
    <div className="bookTable-wrapper">
      <Parallax
        bgImage={tableBack}
        strength={300}
        blur={{ min: -15, max: 15 }}
        bgImageStyle={{
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="book-table">
          <Navbar />
          <div className="book-table-main">
            <h1>Book Your Table</h1>
            <div className="book-field">
              <div className="all-loc">
                <input
                  type="text"
                  list="locationList"
                  placeholder="Enter Branch Name"
                  onChange={(e) => setLocName(e.target.value)}
                />
                <datalist id="locationList">
                  {locDetails.map((location) => {
                    return (
                      <option
                        key={location.location_name}
                        value={location.location_name}
                      ></option>
                    );
                  })}
                </datalist>
              </div>
              <input
  type="date"
  name=""
  id=""
  onChange={(e) => {
    setBookDate(e.target.value);
  }}
  style={{
    padding: "10px 20px",
    backgroundColor: "black",
    color: "white",
    border: "1px solid white",
    borderRadius: "4px",
    appearance: "none",
    WebkitAppearance: "none",
    MozAppearance: "none",
    position: "relative",
    zIndex: "1",
  }}
/>
              <button className="table-search-btn" onClick={fetchTables}>
                <FaSearch />
                <span>Search</span>
              </button>
            </div>
            {tableDetails ? (
              <div className="table-main">
                <div className="table-cards">
                  <div className="table-card">
                    <div className="table-type">Total Tables</div>
                    <div className="table-available">
                      {tableDetails.total_tables}
                    </div>
                  </div>
                  <div className="table-card">
                    <div className="table-type">Premium Tables</div>
                    <div className="table-available">
                      {tableDetails.premiumTables}
                    </div>
                  </div>
                  <div className="table-card">
                    <div className="table-type">VIP Tables</div>
                    <div className="table-available">
                      {tableDetails.vipTables}
                    </div>
                  </div>
                </div>
                <div className="book-form">
                  <select name="" id="" onChange={fetchTimeSlots}>
                    <option value="">Select Table Type</option>
                    <option value="Premium">Premium</option>
                    <option value="VIP">VIP</option>
                  </select>
                  <select
                    name=""
                    id=""
                    onChange={(e) => setBookMembers(e.target.value)}
                  >
                    <option value="">Select members</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <select
                    name=""
                    id=""
                    onChange={(e) => setBookSlot(e.target.value)}
                  >
                    <option value="">Select Time Slot</option>
                    {timeSlot ? (
                      timeSlot.map((slot) => {
                        return (
                          <option value={slot} key={slot}>
                            {slot}
                          </option>
                        );
                      })
                    ) : (
                      <option value="">No time slots available</option>
                    )}
                  </select>
                  <button onClick={bookTheTable}>Book Table</button>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <Footer />
      </Parallax>
    </div>
  );
}

export default TableBook;
