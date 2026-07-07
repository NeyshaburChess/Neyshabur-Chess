import { supabase } from "../../../lib/supabaseClient";
 
export async function POST(req: Request) {
  const body = await req.json();
  const { name, rating, city, bio } = body;
 
  const { data, error } = await supabase
    .from("players")
    .insert([{ name, rating, city, bio }]);
 
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
    });
  }
 
  return new Response(JSON.stringify({ success: true, data }), {
    status: 200,
  });
}