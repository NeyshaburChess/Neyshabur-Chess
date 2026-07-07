"use client";
 
import { supabase } from "@/lib/supabaseClient";
 
export default function TestSupabase() {
  const handleTest = async () => {
    const { data, error } = await supabase.from("test").select("*");
    console.log("DATA:", data);
    console.log("ERROR:", error);
  };
 
  return (
    <div style={{ padding: 30 }}>
      <h2>Supabase Test</h2>
      <button onClick={handleTest}>Test Supabase Connection</button>
    </div>
  );
}