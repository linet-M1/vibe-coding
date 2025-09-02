import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yzftltlrvknfeywlbtlx.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6ZnRsdGxydmtuZmV5d2xidGx4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY3NTk4NTMsImV4cCI6MjA3MjMzNTg1M30.7Qq3YGWI86CRMbhiuvUTpTl6-1BthBHH-FnrDknsvGs';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
