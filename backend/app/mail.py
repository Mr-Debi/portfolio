# import smtplib
# from email.mime.text import MIMEText

# from app.config import (
#     MAIL_USERNAME,
#     MAIL_PASSWORD,
#     MAIL_FROM
# )


# def send_thank_you_email(
#     donor_name,
#     donor_email,
#     amount,
#     transaction_id
# ):
#     subject = "Thank You for Your Donation ❤️"

#     # Email-safe structure using nested tables and inline CSS
#     body = f"""
#     <!DOCTYPE html>
#     <html>
#     <head>
#         <meta charset="utf-8">
#     </head>
#     <body style="margin: 0; padding: 0; font-family: Arial, sans-serif;">
#         <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #0f172a; padding: 40px 0;">
#             <tr>
#                 <td align="center">
#                     <!-- Main Container Table -->
#                     <table border="0" cellpadding="0" cellspacing="0" width="600" style="background: #1e293b; border-radius: 20px; color: #ffffff; padding: 40px;">
#                         <tr>
#                             <td>
#                                 <h1 style="color: #ffffff; font-size: 24px; margin-top: 0;">Thank You, {donor_name} ❤️</h1>
                                
#                                 <p style="font-size: 16px; line-height: 1.5; color: #cbd5e1;">Thank you for supporting my work.</p>

#                                 <!-- Details Box -->
#                                 <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background: rgba(255, 255, 255, 0.05); border-radius: 15px; margin: 20px 0;">
#                                     <tr>
#                                         <td style="padding: 20px;">
#                                             <h2 style="font-size: 18px; color: #ffffff; margin-top: 0; margin-bottom: 15px;">Donation Details</h2>
#                                             <p style="margin: 5px 0; color: #cbd5e1;">
#                                                 Donation Amount : <b style="color: #ffffff;">₹{amount}</b>
#                                             </p>
#                                             <p style="margin: 5px 0; color: #cbd5e1;">
#                                                 Transaction ID : {transaction_id}
#                                             </p>
#                                         </td>
#                                     </tr>
#                                 </table>

#                                 <p style="font-size: 16px; line-height: 1.5; color: #cbd5e1;">
#                                     Your contribution helps me build more amazing projects.
#                                 </p>

#                                 <p style="font-size: 16px; line-height: 1.5; color: #cbd5e1;">
#                                     Thank you for being part of this journey.
#                                 </p>

#                                 <br />

#                                 <p style="font-size: 16px; line-height: 1.5; color: #cbd5e1; margin-bottom: 30px;">
#                                     Regards,<br />
#                                     <b style="color: #ffffff;">Debidutta Behera</b>
#                                 </p>

#                                 <hr style="border: none; border-top: 1px solid #334155; margin: 20px 0;" />

#                                 <p style="font-size: 12px; color: #94a3b8; margin-bottom: 0;">This is an automated email.</p>
#                             </td>
#                         </tr>
#                     </table>
#                 </td>
#             </tr>
#         </table>
#     </body>
#     </html>
#     """

#     msg = MIMEText(body, "html")
#     msg["Subject"] = subject
#     msg["From"] = MAIL_FROM
#     msg["To"] = donor_email

#     with smtplib.SMTP("smtp.gmail.com", 587) as server:
#         server.starttls()
#         server.login(MAIL_USERNAME, MAIL_PASSWORD)
#         server.send_message(msg)







# --------------

import smtplib
import ssl

from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

from app.config import (
    MAIL_USERNAME,
    MAIL_PASSWORD,
    MAIL_FROM
)


def send_thank_you_email(
    donor_name,
    donor_email,
    amount,
    transaction_id
):

    subject = "Thank You for Your Donation ❤️"

    body = f"""
    <html>
    <body style="font-family:Arial,sans-serif;background:#f4f4f4;padding:30px;">
        <div style="max-width:600px;margin:auto;background:#ffffff;padding:30px;border-radius:12px;">
            <h2>Thank You, {donor_name} ❤️</h2>

            <p>Thank you for supporting my work.</p>

            <hr>

            <p><b>Donation Amount:</b> ₹{amount}</p>

            <p><b>Transaction ID:</b> {transaction_id}</p>

            <hr>

            <p>
                Your support motivates me to build more projects.
            </p>

            <br>

            <b>Regards</b><br>
            Debidutta Behera
        </div>
    </body>
    </html>
    """

    message = MIMEMultipart("alternative")

    message["Subject"] = subject
    message["From"] = MAIL_FROM
    message["To"] = donor_email

    message.attach(MIMEText(body, "html"))

    try:

        print("========== MAIL DEBUG ==========")
        print("MAIL_USERNAME :", MAIL_USERNAME)
        print("MAIL_FROM     :", MAIL_FROM)
        print("TO            :", donor_email)
        print("================================")

        context = ssl.create_default_context()

        server = smtplib.SMTP(
            "smtp.gmail.com",
            465,
            # 587,
            timeout=30
        )

        server.ehlo()

        server.starttls(context=context)

        server.ehlo()

        server.login(
            MAIL_USERNAME,
            MAIL_PASSWORD
        )

        server.sendmail(
            MAIL_FROM,
            donor_email,
            message.as_string()
        )

        server.quit()

        print("✅ Email Sent Successfully")

    except Exception as e:

        print("❌ EMAIL ERROR")
        print(type(e).__name__)
        print(str(e))

        raise e