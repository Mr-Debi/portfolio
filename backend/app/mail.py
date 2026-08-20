import requests

from app.config import (
    MAIL_FROM,
)

# Add this to config.py
# BREVO_API_KEY = os.getenv("BREVO_API_KEY")
from app.config import BREVO_API_KEY


def send_thank_you_email(
    donor_name,
    donor_email,
    amount,
    transaction_id
):

    subject = "Thank You for Your Donation ❤️"

    body = f"""
    <html>
    <body style="margin:0;padding:30px;background:#f4f4f4;font-family:Arial,sans-serif;">

        <div style="
            max-width:600px;
            margin:auto;
            background:#ffffff;
            border-radius:12px;
            padding:30px;
            box-shadow:0 5px 15px rgba(0,0,0,.1);
        ">

            <h2 style="color:#2563eb;">
                Thank You, {donor_name} ❤️
            </h2>

            <p>
                Thank you for supporting my work.
            </p>

            <hr>

            <table width="100%" cellpadding="8">
                <tr>
                    <td><b>Donation Amount</b></td>
                    <td>₹{amount}</td>
                </tr>

                <tr>
                    <td><b>Transaction ID</b></td>
                    <td>{transaction_id}</td>
                </tr>
            </table>

            <hr>

            <p>
                Your contribution helps me continue building open-source projects,
                learning new technologies and creating useful applications.
            </p>

            <p>
                Thank you for your support ❤️
            </p>

            <br>

            <b>
                Regards<br>
                Debidutta Behera
            </b>

        </div>

    </body>
    </html>
    """

    headers = {
        "accept": "application/json",
        "api-key": BREVO_API_KEY,
        "content-type": "application/json"
    }

    payload = {
        "sender": {
            "name": "Debidutta Behera",
            "email": MAIL_FROM
        },
        "to": [
            {
                "email": donor_email,
                "name": donor_name
            }
        ],
        "subject": subject,
        "htmlContent": body
    }

    print("========== BREVO MAIL ==========")
    print("TO :", donor_email)
    print("FROM :", MAIL_FROM)
    print("================================")

    response = requests.post(
        "https://api.brevo.com/v3/smtp/email",
        headers=headers,
        json=payload,
        timeout=30
    )

    print("Status :", response.status_code)
    print("Response :", response.text)

    if response.status_code not in (200, 201, 202):
        raise Exception(response.text)

    print("✅ Email Sent Successfully")