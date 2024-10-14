// // utils/supabaseClient.js
// // import { createClient } from '@supabase/supabase-js';

// // require('dotenv').config();

// // const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// // const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// // console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
// // console.log('Supabase Anon Key:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

// // if (!supabaseUrl || !supabaseAnonKey) {
// //     throw new Error('supabaseUrl and supabaseAnonKey are required.');
// // }


// // utils/supabaseClient.js
// const { createClient } = require('@supabase/supabase-js');

// require('dotenv').config();

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// if (!supabaseUrl || !supabaseAnonKey) {
//     throw new Error('supabaseUrl and supabaseAnonKey are required.');
// }

// const supabase = createClient(supabaseUrl, supabaseAnonKey);

// module.exports = { supabase };


// // Function to check the database connection
// const checkConnection = async () => {
//     const { data, error } = await supabase
//         .from('users') // Replace with a valid table name
//         .select('*')
//         .limit(1); // Fetch a single record to test the connection

//     if (error) {
//         console.error('Database connection failed:', error.message);
//     } else {
//         console.log('Database connection successful:', data);
//     }
// };

// // Invoke the checkConnection function
// checkConnection();

// // export const supabase = createClient(supabaseUrl, supabaseAnonKey);


// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase URL or Anon Key in environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
