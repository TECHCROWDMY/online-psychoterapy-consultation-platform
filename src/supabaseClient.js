import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lhpqwihkjxcvgbwqjghk.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxocHF3aWhranhjdmdid3FqZ2hrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk2MzE4NzUsImV4cCI6MTk4NTIwNzg3NX0.z67uuqnUSwHNKgoTv6CZbNfMDL2iOUi9yRnQ63Si7YU"
export const supabase = createClient(supabaseUrl, supabaseKey)

