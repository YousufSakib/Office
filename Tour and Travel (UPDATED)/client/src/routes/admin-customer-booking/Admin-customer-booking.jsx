import React, { useEffect, useState } from "react";
import "./admin-customer-booking.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { BACKEND_URL, ROWS_PER_TABLE } from "../../../dynamicInfo";
import axios from "axios";
import { getShortMessage } from "../../lib/getShortMessage";
import BookPackageView from "../../components/admin/bookPackage/bookPackageView/bookPackageView";
const getStatusText = (status) => {
  if (status == 0) return "Canceled";
  else if (status == 1) return "Pending";
  else if (status == 2) return "Confirmed";
  else if (status == 3) return "Completed";
};
function AdminCustomerBooking() {
  
  const location = useLocation();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [bookingData, setBookingData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [documentUpdated, setDocumentUpdated] = useState(false);
  const [popupViewId, setPopupViewId] = useState(null);
  const [popupEdit, setPopupEdit] = useState(false);

  useEffect(() => {
    const fetchPackages = async () => {
      setIsLoading(true);
      setError(null);
      const headers = {
        "Content-Type": "application/json",
      };
      const queryParam = new URLSearchParams(location.search);
      queryParam.set("page", currentPage);
      queryParam.set("limit", ROWS_PER_TABLE);
      queryParam.set("isNew", 1);
      navigate(`?${queryParam.toString()}`);
      const URL = `${BACKEND_URL}/api/v1/book-package?${queryParam.toString()}`;

      try {
        const response = await axios.get(URL, { headers });
        setBookingData(response.data.data);
        setTotalPages(response.data.pagination.totalPages);
        setCurrentPage(response.data.pagination.currentPage);
        console.log("****", response.data.data);
      } catch (error) {
        console.error("Error fetching Booking data:", error);
        setError("Error fetching Booking data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPackages();
  }, [currentPage, documentUpdated]);

  const handleDelete = async (BookingId) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this booking?"
    );
    if (confirmation) {
      try {
        const URL = `${BACKEND_URL}/api/v1/book-package/${BookingId}`;
        const response = await axios.delete(URL);

        if (response.status === 204) {
          alert("Successfully deleted.");
          setDocumentUpdated((prev) => !prev);
        } else {
          alert("Something went wrong. Please try again.");
        }
      } catch (error) {
        console.error("Error during deletion:", error);
        alert("Failed to delete the booking. Please try again later.");
      }
    }
  };
  const handleBookingView = (bookingId) => {
    setPopupViewId(bookingId);
  };

  const handleEditingView = () => {};

  return (
    <div className="adminCustomerBookingContainer">
      <h2>Customer Bookings</h2>
      <div className="adminCustomerBookingNew" id="adminCustomerBookingNew">
        <h3>New Bookings</h3>
        <div
          className="adminCustomerBookingTable"
          style={{ overflowX: "auto" }}
        >
          <table>
            <tr>
              <th>Name</th>
              <th>Phone No</th>
              <th>Email</th>
              <th>No of Travelers</th>
              <th>Message</th>
              <th>Status</th>
              <th>View</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            {bookingData.map((row) => (
              <tr key={row.id}>
                <td>{getShortMessage(row.name, 20)}</td>
                <td className="number">{row.phoneNo}</td>
                <td>{getShortMessage(row.email, 20)}</td>
                <td className="number">{row.travellerNo}</td>
                <td>{getShortMessage(row.message, 20)}</td>
                <td>{getStatusText(row.status)}</td>
                <td>
                  <img
                    onClick={(e) => handleBookingView(row.id)}
                    src="/viewAdminPackage.png"
                    alt="view"
                  />
                </td>
                <td>
                  <img src="/editAdminPackage.png" alt="edit" />
                </td>
                <td>
                  <img
                    onClick={(e) => handleDelete(row.id)}
                    src="/deleteAdminPackage.png"
                    alt="delete"
                  />
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
      {popupViewId && (
        <BookPackageView
          data={bookingData.filter((item) => item.id === popupViewId)}
          setPopupViewId={setPopupViewId}
        />
      )}
    </div>
  );
}

export default AdminCustomerBooking;

//status
// 1 for Pending (waiting for confirmation or processing).
// 2 for Confirmed (the booking is confirmed).
// 3 for Completed (the trip or service has been completed).
// 0 for Canceled (the booking was canceled).
