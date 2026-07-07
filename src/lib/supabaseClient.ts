import { createClient } from "@supabase/supabase-js";
 
const supabaseUrl = "https://fxqxmvxlsaiqiwxzcitc.supabase.co";
const supabaseAnonKey =
  "aroundeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4cXhtdnhsc2FpcWl3eHpjaXRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI5MzA1NDEsImV4cCI6MjA5ODUwNjU0MX0.M3PyyGLfNIPedpjapuMKSGmPl7RgOb4vOkP4ETr7vjg";
 
export const supabase = createClient(supabaseUrl, supabaseAnonKey);