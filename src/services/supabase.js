import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://uxgjntbwscvjvrvokima.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4Z2pudGJ3c2N2anZydm9raW1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc5MTg4NDksImV4cCI6MjA3MzQ5NDg0OX0.0zUmXFRTs76q9zFsq3EgkW8ycKmRR_FR6naJE6XaOoc";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
