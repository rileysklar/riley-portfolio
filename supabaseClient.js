import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zcgjplpilvbpqeyzxxcm.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpjZ2pwbHBpbHZicHFleXp4eGNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk3NTIyNzQsImV4cCI6MjAyNTMyODI3NH0._qfMlNjkWOxLUUdHwPz9-EoFEuktaN3itVAupk250fU";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
