import React, { useState } from "react";
import QRCode from "react-qr-code";
import "./DonationPanel.css";

export default function DonationPanel() {
  const [open, setOpen] = useState(false);

  const [step, setStep] = useState(1);

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [amount, setAmount] = useState("");

  const [customAmount, setCustomAmount] = useState("");

  const [transactionId, setTransactionId] = useState("");

  const [screenshot, setScreenshot] = useState(null);

  const [preview, setPreview] = useState("");

  // const API = "http://localhost:8000";
  const API = "https://portfolio-s8zx.onrender.com";

  const UPI_ID = "7978213833@upi";

  const finalAmount = amount === "custom" ? customAmount : amount;

  const qrData = `upi://pay?pa=${UPI_ID}&pn=Debidutta&am=${finalAmount}&cu=INR`;

  const resetForm = () => {
    setStep(1);

    setName("");

    setEmail("");

    setAmount("");

    setCustomAmount("");

    setTransactionId("");

    setScreenshot(null);

    setPreview("");

    setSuccess(false);
  };

  const validateStep1 = () => {
    if (!name.trim()) {
      alert("Enter your name");

      return false;
    }

    if (!email.trim()) {
      alert("Enter your email");

      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Invalid Email");

      return false;
    }

    if (!finalAmount || Number(finalAmount) <= 0) {
      alert("Select Donation Amount");

      return false;
    }

    return true;
  };

  const handleScreenshot = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setScreenshot(file);

    setPreview(URL.createObjectURL(file));
  };

  const submitDonation = async () => {
    if (!transactionId.trim()) {
      alert("Please enter the UPI Transaction ID.");
      return;
    }

    if (!screenshot) {
      alert("Please upload the payment screenshot.");
      return;
    }

    const formData = new FormData();

    formData.append("name", name.trim());
    formData.append("email", email.trim());
    formData.append("amount", finalAmount);
    formData.append("transaction_id", transactionId.trim());
    formData.append("screenshot", screenshot);

    try {
      setLoading(true);

      const response = await fetch(`${API}/api/donations`, {
        method: "POST",
        body: formData,
      });

      // Read response body once
      const result = await response.json().catch(() => null);

      if (!response.ok) {
        console.error("Server Error:", result);

        alert(
          result?.detail ||
            result?.message ||
            `Server Error (${response.status})`,
        );

        return;
      }

      if (result.success) {
        setSuccess(true);

        setTimeout(() => {
          setOpen(false);
          resetForm();
        }, 2500);
      } else {
        alert(result.message || "Unable to submit donation.");
      }
    } catch (error) {
      console.error("Donation Error:", error);

      alert(
        "Unable to connect to the server. Please try again in a few moments.",
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <button className="floating-btn" onClick={() => setOpen(true)}>
        💗 Donate Me
      </button>

      {open && (
        <div className="overlay">
          <div className="donation-card">
            <button
              className="close-btn"
              onClick={() => {
                setOpen(false);
                resetForm();
              }}
            >
              ✕
            </button>

            {/* STEP 1 */}

            {step === 1 && (
              <>
                <h2>Support My Work ❤️</h2>

                <p>
                  Your contribution helps me build more open-source projects.
                </p>

                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <h3>Select Amount</h3>

                <div className="amount-container">
                  {[50, 100, 200, 500].map((item) => (
                    <button
                      key={item}
                      className={amount === item ? "amount selected" : "amount"}
                      onClick={() => {
                        setAmount(item);

                        setCustomAmount("");
                      }}
                    >
                      ₹{item}
                    </button>
                  ))}

                  <button
                    className={
                      amount === "custom" ? "amount selected" : "amount"
                    }
                    onClick={() => setAmount("custom")}
                  >
                    Custom
                  </button>
                </div>

                {amount === "custom" && (
                  <input
                    type="number"
                    placeholder="Enter Amount"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                  />
                )}

                <button
                  className="payment-btn"
                  onClick={() => {
                    if (validateStep1()) {
                      setStep(2);
                    }
                  }}
                >
                  Continue Payment →
                </button>
              </>
            )}

            {/* STEP 2 */}

            {step === 2 && (
              <>
                <h2>Scan & Pay</h2>

                <div className="qr-box">
                  <QRCode value={qrData} size={220} />
                </div>

                <h3>Pay ₹{finalAmount}</h3>

                <p>UPI ID</p>

                {/* <strong>{UPI_ID}</strong> */}

                <button className="action-btn" onClick={() => setStep(3)}>
                  Payment Completed
                </button>
              </>
            )}

            {/* STEP 3 */}

            {step === 3 && !success && (
              <>
                <h2>Verify Payment</h2>

                <input
                  placeholder="UPI Transaction ID"
                  value={transactionId}
                  onChange={(e) => setTransactionId(e.target.value)}
                />

                <label>Upload Screenshot</label>

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleScreenshot}
                />

                {preview && (
                  <img src={preview} alt="preview" className="preview-image" />
                )}

                <button
                  className="action-btn"
                  disabled={loading}
                  onClick={submitDonation}
                >
                  {loading ? "Submitting..." : "Submit Donation"}
                </button>
              </>
            )}

            {/* SUCCESS */}

            {success && (
              <div className="success-box">
                <div className="success-icon">✅</div>

                <h2>Thank You ❤️</h2>

                <p>Your donation has been submitted successfully.</p>

                <small>
                  It will appear in the admin panel after verification.
                </small>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );

  const copyUPI = async () => {
    try {
      await navigator.clipboard.writeText(UPI_ID);

      alert("UPI ID Copied Successfully");
    } catch {
      alert("Unable to copy UPI ID");
    }
  };

  const openUPI = () => {
    window.location.href = qrData;
  };
}
