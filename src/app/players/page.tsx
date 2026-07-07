"use client";
 
import { useState } from "react";
 
export default function NewPlayerPage() {
  const [form, setForm] = useState({
    name: "",
    rating: "",
    city: "",
    bio: "",
  });
 
  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = async () => {
    const res = await fetch("/api/players", {
      method: "POST",
      body: JSON.stringify({
        name: form.name,
        rating: Number(form.rating),
        city: form.city,
        bio: form.bio,
      }),
    });
 
    const result = await res.json();
 
    if (result.error) {
      alert("خطا: " + result.error);
    } else {
      alert("بازیکن با موفقیت ثبت شد");
    }
  };
 
  return (
    <div style={{ padding: 30 }}>
      <h1>ثبت بازیکن جدید</h1>
 
      <input
        name="name"
        placeholder="نام"
        onChange={handleChange}
        style={{ display: "block", marginBottom: 10 }}
      />
 
      <input
        name="rating"
        placeholder="امتیاز"
        onChange={handleChange}
        style={{ display: "block", marginBottom: 10 }}
      />
 
      <input
        name="city"
        placeholder="شهر"
        onChange={handleChange}
        style={{ display: "block", marginBottom: 10 }}
      />
 
      <textarea
        name="bio"
        placeholder="رزومه"
        onChange={handleChange}
        style={{ display: "block", marginBottom: 10 }}
      />
 
      <button onClick={handleSubmit}>ثبت بازیکن</button>
    </div>
  );
}