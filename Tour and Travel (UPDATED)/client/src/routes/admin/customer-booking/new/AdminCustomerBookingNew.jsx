import React, { useEffect, useState } from "react";
import "./adminCustomerBookingNew.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { BACKEND_URL, ROWS_PER_TABLE } from "../../../../../dynamicInfo";
import axios from "axios";
import { getShortMessage } from "../../../../lib/getShortMessage";
import BookPackageView from "../../../../components/admin/bookPackage/bookPackageView/BookPackageView";
import BookPackageEdit from "../../../../components/admin/bookPackage/bookPackageEdit/BookPackageEdit";
const getStatusText = (status) => {
  if (status == 0) return "Canceled";
  else if (status == 1) return "Pending";
  else if (status == 2) return "Confirmed";
  else if (status == 3) return "Completed";
};
function AdminCustomerBookingNew() {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [bookingData, setBookingData] = useState([]);
  const [packageData, setPackageData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [documentUpdated, setDocumentUpdated] = useState(false);
  const [popupViewId, setPopupViewId] = useState(null);
  const [popupEditId, setPopupEditId] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
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
      } catch (error) {
        console.error("Error fetching Booking data:", error);
        setError("Error fetching Booking data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBookings();
  }, [currentPage, documentUpdated]);

  useEffect(() => {
    const fetchPackageHeaders = async () => {
      const headers = {
        "Content-Type": "application/json",
      };
      const URL = `${BACKEND_URL}/api/v1/packages?field=id&field=name&field=profileImg`;
      try {
        const response = await axios.get(URL, { headers });
        setPackageData(response.data.data);
      } catch (error) {
        console.error("Error fetching package data:", error);
      }
    };
    fetchPackageHeaders();
  }, []);

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

  const handleEditingView = (bookingId) => {
    setPopupEditId(bookingId);
  };
  const getPackageName = (packageId, len = 20) => {
    if (packageId === undefined || packageId === null) return "";
    let name = "Loading...";
    const foundObject = packageData.find((item) => item.id === packageId);
    name = foundObject ? foundObject.name : "";
    name = getShortMessage(name, len);
    return name;
  };
  const getPackageProfileImage = (packageId) => {
    if (packageId === undefined || packageId === null) return "";
    const foundObject = packageData.find((item) => item.id === packageId);
    let profileImageUrl = foundObject
      ? `${BACKEND_URL}/uploads/${foundObject.profileImg}`
      : "";
    return profileImageUrl;
  };
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
              <th>Package Name</th>
              <th>Package Image</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
            {bookingData.map((row) => (
              <tr key={row.id}>
                <td>{getShortMessage(row.name, 20)}</td>
                <td className="number">{row.phoneNo}</td>
                <td>{getShortMessage(row.email, 20)}</td>
                <td className="number">{row.travellerNo}</td>
                <td>{getShortMessage(row.message, 20)}</td>
                <td>{getPackageName(row.packageId)}</td>
                <td>
                  <img src={getPackageProfileImage(row.packageId)} alt="" />
                </td>
                <td>{getStatusText(row.status)}</td>
                <td className="actionsImages">
                  <img
                    onClick={(e) => handleBookingView(row.id)}
                    src="/viewAdminPackage.png"
                    alt="view"
                  />
                  <img
                    onClick={(e) => handleEditingView(row.id)}
                    src="/editAdminPackage.png"
                    alt="edit"
                  />

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
          setPopupViewId={setPopupViewId}
          setDocumentUpdated={setDocumentUpdated}
          data={bookingData.filter((item) => item.id === popupViewId)}
          packageName={getPackageName(
            bookingData.find((item) => item.id === popupViewId)?.packageId,
            1000
          )}
        />
      )}
      {popupEditId && (
        <BookPackageEdit
          data={bookingData.filter((item) => item.id === popupEditId)}
          setPopupEditId={setPopupEditId}
          packageData={packageData}
          setDocumentUpdated={setDocumentUpdated}
        />
      )}
    </div>
  );
}

export default AdminCustomerBookingNew;

//status
// 1 for Pending (waiting for confirmation or processing).
// 2 for Confirmed (the booking is confirmed).
// 3 for Completed (the trip or service has been completed).
// 0 for Canceled (the booking was canceled).
