import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ucweocybskdhajmisboo.supabase.co'; // من Supabase
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjd2VvY3lic2tkaGFqbWlzYm9vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU5NzEzMzgsImV4cCI6MjA2MTU0NzMzOH0._Ab4jTgUmDB0JDpzqRL6pe24P4Vc770OK9mS94y97c8';            // من Supabase > Settings > API

export const supabase = createClient(supabaseUrl, supabaseKey);
