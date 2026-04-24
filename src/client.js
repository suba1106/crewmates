import { createClient } from '@supabase/supabase-js'

const URL = "https://yfvrtmvdtuwscwqgvwoi.supabase.co";
const API_KEY ="sb_publishable_1p-AOUIs9up1lFv0a4cF_A_X80umhEj";

export const supabase = createClient(URL, API_KEY)