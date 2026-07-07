import nodemailer from "nodemailer";
 
export async function POST(req) {
  try {
    const body = await req.json();
 
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "chesskhayam@gmail.com", // ایمیل تو
        pass: "APP_PASSWORD", // رمز اپلیکیشن گوگل (نه رمز اصلی)
      },
    });
 
    await transporter.sendMail({
      from: "Neyshabur Chess <chesskhayam@gmail.com>",
      to: "chesskhayam@gmail.com",
      subject: "ثبت‌نام جدید مسابقات شطرنج",
      html: `
        <h2>ثبت‌نام جدید</h2>
        <p><strong>نام:</strong> ${body.fullName}</p>
        <p><strong>شماره تماس:</strong> ${body.phone}</p>
        <p><strong>تاریخ تولد:</strong> ${body.birthDate}</p>
        <p><strong>شماره فیده:</strong> ${body.fideId}</p>
        <p><strong>کد پیگیری پرداخت:</strong> ${body.trackingCode}</p>
      `,
    });
 
    return Response.json({ ok: true });
  } catch (err) {
    console.log(err);
    return Response.json({ ok: false, error: err.message });
  }
}