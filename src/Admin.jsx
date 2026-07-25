import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "./api";
import "./Admin.css";

import Swal from "sweetalert2";
import DashboardCharts from "./DashboardCharts";

export default function Admin() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [donations, setDonations] = useState([]);

  const [showCharts, setShowCharts] = useState(false);

  const [stats, setStats] = useState({
    total_amount: 0,

    total_donations: 0,

    approved: 0,

    pending: 0,

    rejected: 0,
  });

  useEffect(() => {
    if (!token) {
      navigate("/admin");

      return;
    }

    loadDashboard();

    loadDonations();
  }, []);

  const loadDashboard = async () => {
    try {
      const res = await api.get(
        "/admin/dashboard",

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setStats(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const loadDonations = async () => {
    try {
      setLoading(true);

      const res = await api.get(
        "/admin/donations",

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setDonations(res.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const approveDonation = async (id) => {
    const result = await Swal.fire({
      title: "Approve Donation?",

      text: "A thank-you email will be sent to the donor.",

      icon: "question",

      showCancelButton: true,

      confirmButtonColor: "#22c55e",

      cancelButtonColor: "#6b7280",

      confirmButtonText: "Approve",
    });

    if (!result.isConfirmed) return;

    try {
      await api.put(
        `/admin/approve/${id}`,

        {},

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      Swal.fire({
        icon: "success",

        title: "Donation Approved",

        text: "Thank-you email sent successfully.",
      });

      loadDashboard();

      loadDonations();
    } catch {
      Swal.fire({
        icon: "error",

        title: "Error",

        text: "Unable to approve donation.",
      });
    }
  };

  const rejectDonation = async (id) => {
    const result = await Swal.fire({
      title: "Reject Donation?",

      icon: "warning",

      showCancelButton: true,

      confirmButtonColor: "#f59e0b",

      confirmButtonText: "Reject",
    });

    if (!result.isConfirmed) return;

    try {
      await api.put(
        `/admin/reject/${id}`,

        {},

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      Swal.fire(
        "Rejected",

        "Donation rejected.",

        "success",
      );

      loadDashboard();

      loadDonations();
    } catch {
      Swal.fire(
        "Error",

        "Unable to reject donation.",

        "error",
      );
    }
  };

  const deleteDonation = async (id) => {
    const result = await Swal.fire({
      title: "Delete Donation?",

      text: "This action cannot be undone.",

      icon: "warning",

      showCancelButton: true,

      confirmButtonColor: "#ef4444",

      confirmButtonText: "Delete",
    });

    if (!result.isConfirmed) return;

    try {
      await api.delete(
        `/admin/delete/${id}`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      Swal.fire(
        "Deleted",

        "Donation deleted successfully.",

        "success",
      );

      loadDashboard();

      loadDonations();
    } catch {
      Swal.fire(
        "Error",

        "Unable to delete donation.",

        "error",
      );
    }
  };

  const logout = () => {
    localStorage.removeItem("token");

    navigate("/admin");
  };

  const [previewImage, setPreviewImage] = useState("");
  
  const [showModal, setShowModal] = useState(false);

  const openPreview = (imageUrl) => {
    setPreviewImage(imageUrl);
    setShowModal(true);
  };

  const closePreview = () => {
    setShowModal(false);
    setPreviewImage("");
  };

  const filteredDonations = donations.filter((d) => {
    return (
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.email.toLowerCase().includes(search.toLowerCase()) ||
      d.transaction_id.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="admin-container">
      <div className="top-bar">
        <div>
          <h1>Donation Admin Dashboard</h1>

          <p>Manage all donation requests</p>
        </div>

        <button className="chart-btn" onClick={() => setShowCharts(true)}>
          📊 Analytics
        </button>

        <button className="logout-btn" onClick={logout}>
          🚪 Logout
        </button>
      </div>

      {/* Dashboard Cards */}

      <div className="dashboard-cards">
        <div className="card total">
          <h2>₹{stats.total_amount}</h2>

          <p>Approved Amount</p>
        </div>

        <div className="card donations">
          <h2>{stats.total_donations}</h2>

          <p>Total Donations</p>
        </div>

        <div className="card approved">
          <h2>{stats.approved}</h2>

          <p>Approved</p>
        </div>

        <div className="card pending">
          <h2>{stats.pending}</h2>

          <p>Pending</p>
        </div>

        <div className="card rejected">
          <h2>{stats.rejected}</h2>

          <p>Rejected</p>
        </div>
      </div>

      {/* Search */}

      <div className="search-box">
        <input
          type="text"
          placeholder="Search by Name, Email or Transaction ID"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Sl No</th>

              <th>Name</th>

              <th>Email</th>

              <th>Amount</th>

              <th>Transaction ID</th>

              <th>Date</th>

              <th>Screenshot</th>

              <th>Status</th>

              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan="9"
                  style={{
                    textAlign: "center",

                    padding: "40px",
                  }}
                >
                  Loading Donations...
                </td>
              </tr>
            ) : filteredDonations.length === 0 ? (
              <tr>
                <td
                  colSpan="9"
                  style={{
                    textAlign: "center",

                    padding: "40px",
                  }}
                >
                  No Donations Found
                </td>
              </tr>
            ) : (
              filteredDonations.map((d, index) => (
                <tr key={d.id}>
                  <td>{index + 1}</td>

                  <td>{d.name}</td>

                  <td>{d.email}</td>

                  <td>₹{d.amount}</td>

                  <td>{d.transaction_id}</td>

                  <td>{new Date(d.created_at).toLocaleString()}</td>

                  <td>
                    <button
                      className="view-btn"
                      onClick={() => openPreview(d.screenshot)}
                    >
                      👁 View
                    </button>
                  </td>

                  <td>
                    <span
                      className={
                        d.status === "Approved"
                          ? "badge approved"
                          : d.status === "Rejected"
                            ? "badge rejected"
                            : "badge pending"
                      }
                    >
                      {d.status}
                    </span>
                  </td>

                  <td>
                    {d.status === "Pending" ? (
                      <>
                        <button
                          className="approve-btn"
                          onClick={() => approveDonation(d.id)}
                        >
                          ✓
                        </button>

                        <button
                          className="reject-btn"
                          onClick={() => rejectDonation(d.id)}
                        >
                          ✕
                        </button>
                      </>
                    ) : (
                      "-"
                    )}

                    <button
                      className="delete-btn"
                      onClick={() => deleteDonation(d.id)}
                    >
                      🗑
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="preview-modal" onClick={closePreview}>
          <div className="preview-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-preview" onClick={closePreview}>
              ×
            </button>

            <img src={previewImage} alt="Donation Screenshot" />
          </div>
        </div>
      )}

      {showCharts && (
        <div className="chart-modal" onClick={() => setShowCharts(false)}>
          <div className="chart-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-chart"
              onClick={() => setShowCharts(false)}
            >
              ✖
            </button>

            <h2>📊 Donation Analytics</h2>

            <DashboardCharts stats={stats} />
          </div>
        </div>
      )}
    </div>
  );
}
