# Authentication Web App

## Overview
Welcome to the Authentication Web App! This project is a sample Next.js application that demonstrates user authentication flows using Supabase as the backend. Users can sign up, log in, and reset their passwords using both email/password and Google OAuth.

## Features
- **Sign Up**: New users can create an account using email and password or via Google OAuth.
- **Login**: Existing users can log in using their credentials.
- **Forgot Password**: Users can reset their password if they forget it.

## Tech Stack
- **Next.js**: A React framework for building server-side rendered applications.
- **Supabase**: An open-source backend as a service for authentication and database management.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.

## Installation

### Prerequisites
- Node.js (v12 or higher)
- npm or Yarn

### Clone the Repository
```bash
git clone <repository-url>
cd <repository-folder>
```
### Install Dependencies
```
npm install
```
or
```
yarn install
```
> Check out [the docs for Local Development](https://supabase.com/docs/guides/getting-started/local-development) to also run Supabase locally.

### Environment Variables
Create a ```.env.local``` file in the root directory and add your Supabase credentials:
```
NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>
```
 Both `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` can be found in [your Supabase project's API settings](https://app.supabase.com/project/_/settings/api)
 
### Running the Development Server
Start the application in development mode:
```
npm run dev
```
or
```
yarn dev
```
Visit ```http://localhost:3000``` in your browser.

### Building for Production
To create a production build, run:
```
npm run build
```
or
```
yarn build
```
## Authentication Flows
1. Sign Up
    - Email and Password: Users can sign up with their email and a secure password.
    - Google OAuth: Users can sign up quickly using their Google account. (In progress)
2. Login
    - Users can log in using their email and password or Google account.
3. Forgot Password
    - Users can initiate a password reset process to regain access to their accounts.

## Code Structure
```
app/
  ├── auth/
  │   ├── signup/
  │   │   └── page.tsx          # Sign-up page
  │   ├── login/
  │   │   └── page.tsx          # Login page
  │   |── forgot-password/
  │   |   └── page.tsx          # Forgot password page
  |   └── reset-password/
  │       └── page.tsx          # Reset password page
  └── page.tsx                  # Main index page
lib/                           # Custom libraries or utilities
utils/                         # Helper functions and utilities
```

## Contribution
Feel free to contribute by submitting issues or pull requests. Your feedback and contributions are welcome!

## Contact

For any inquiries or collaboration opportunities, feel free to reach out:

- **LinkedIn:ℹ️** [Vigneshwar Vijayakumar (VV)](https://in.linkedin.com/in/vigneshwar-vijayakumar-58583724b)
- **Email:📧** [Mail me](mailto:vigneshwarjosephite@gmail.com)

## More Supabase examples

- [Next.js Subscription Payments Starter](https://github.com/vercel/nextjs-subscription-payments)
- [Cookie-based Auth and the Next.js 13 App Router (free course)](https://youtube.com/playlist?list=PL5S4mPUpp4OtMhpnp93EFSo42iQ40XjbF)
- [Supabase Auth and the Next.js App Router](https://github.com/supabase/supabase/tree/master/examples/auth/nextjs)

  Happy coding!
