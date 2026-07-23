import React, { useState } from "react";
import QRCode from "react-qr-code";
import "./DonationPanel.css";

const DonationPanel = () => {

  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [amount, setAmount] = useState("");
  const [custom, setCustom] = useState("");

  const [transactionId, setTransactionId] = useState("");
  const [screenshot, setScreenshot] = useState(null);


  const finalAmount =
    amount === "custom" ? custom : amount;


  const upiID = "7978213833@upi";


  const qrData =
    `upi://pay?pa=${upiID}&pn=Debidutta&am=${finalAmount}&cu=INR`;



  const submitDonation = async () => {
    if (!transactionId || !screenshot) {
      alert("Please enter Transaction ID and upload screenshot.");
      return;
    }

    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("amount", finalAmount);
    formData.append("transaction_id", transactionId);
    formData.append("screenshot", screenshot);

    try {
      const response = await fetch(
        "http://localhost/donation-api/submit_donation.php",
        {
          method: "POST",
          body: formData,
        },
      );

      const data = await response.json();

      if (data.success) {
        alert(data.message);

        setOpen(false);
        setStep(1);

        // Reset form
        setName("");
        setEmail("");
        setAmount("");
        setCustom("");
        setTransactionId("");
        setScreenshot(null);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };



  return (
    <>
      <button className="floating-btn" onClick={() => setOpen(true)}>
        🩷 Donate Me
      </button>

      {open && (
        <div className="overlay">
          <div className="donation-card">
            <button className="close-btn" onClick={() => setOpen(false)}>
              ×
            </button>

            {step === 1 && (
              <>
                <h2>Support My Work ❤️</h2>

                <p>Your small support helps me create more projects.</p>

                <input
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <input
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <h3>Select Donation</h3>

                <div className="amount-container">
                  {[50, 100, 200].map((item) => (
                    <button
                      key={item}
                      className={amount === item ? "amount selected" : "amount"}
                      onClick={() => {
                        setAmount(item);
                        setCustom("");
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
                    ✨ Custom
                  </button>
                </div>

                {amount === "custom" && (
                  <input
                    className="custom-input"
                    type="number"
                    placeholder="Enter Custom Amount"
                    value={custom}
                    onChange={(e) => setCustom(e.target.value)}
                  />
                )}

                <button
                  className="payment-btn"
                  onClick={() => {
                    if (!name || !email || !finalAmount) {
                      alert("Fill all details");
                      return;
                    }

                    setStep(2);
                  }}
                >
                  <span className="barcode"></span>
                  Continue Payment
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <h2>Scan & Pay</h2>

                <div className="qr-box">
                  <QRCode value={qrData} size={220} />
                </div>

                <h3>Pay ₹{finalAmount}</h3>

                <button className="action-btn" onClick={() => setStep(3)}>
                  Payment Completed
                </button>
              </>
            )}

            {step === 3 && (
              <>
                <h2>Verify Payment</h2>

                <input
                  placeholder="UPI Transaction ID"
                  value={transactionId}
                  onChange={(e) => setTransactionId(e.target.value)}
                />

                <label>Upload Payment Screenshot</label>

                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setScreenshot(e.target.files[0])}
                />

                <button className="action-btn" onClick={submitDonation}>
                  Submit Donation
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};


export default DonationPanel;