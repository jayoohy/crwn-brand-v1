# CRWN Clothing

CRWN Clothing is a modern e-commerce web application built with React, React Router, Firebase, and styled-components. It features user authentication, product browsing, shopping cart, and checkout functionality.

## Features

- **User Authentication:** Sign up, sign in, and sign out with Firebase Authentication.
- **Product Catalog:** Browse products by categories, with previews and detailed views.
- **Shopping Cart:** Add, remove, and adjust quantities of products in the cart.
- **Checkout:** Review cart items and total price before completing a purchase.
- **Responsive Design:** Styled with Bootstrap and custom CSS for mobile and desktop.

## Project Structure

```
.env.local
.gitignore
eslint.config.js
index.html
package.json
vite.config.js
public/
  _redirects
  css/
    bootstrap.min.css
    styles.css
src/
  App.jsx
  main.jsx
  shop-data.js
  assets/
    crown.svg
    shopping-bag.svg
  components/
    categories-menu.json
    button/
    cart-dropdown/
    cart-icon/
    cart-item/
    category-preview/
    checkout-item/
    collection/
    collection-item/
    form-input/
    product-card/
    sign-in-form/
    sign-up-form/
  contexts/
    cart.context.jsx
    categories.context.jsx
    user.context.jsx
  routes/
    header/
    home/
    shop/
    category/
    categories-preview/
    checkout/
    authentication/
  utils/
    firebase/
      firebase.utils.js
```

### Key Files and Directories

- [`src/App.jsx`](src/App.jsx): Main application routes and layout.
- [`src/main.jsx`](src/main.jsx): Entry point, sets up providers and React Router.
- [`src/contexts/`](src/contexts/): React Contexts for user, cart, and categories state management.
- [`src/routes/`](src/routes/): Route components for different pages (Home, Shop, Category, Checkout, etc).
- [`src/components/`](src/components/): Reusable UI components (buttons, forms, product cards, etc).
- [`src/utils/firebase/firebase.utils.js`](src/utils/firebase/firebase.utils.js): Firebase configuration and helper functions.

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/crwn-clothing.git
   cd crwn-clothing
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Set up Firebase:**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Enable Authentication and Firestore Database.
   - Copy your Firebase config to `.env.local`:
     ```
     VITE_FIREBASE_API_KEY=your_api_key
     VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
     VITE_FIREBASE_PROJECT_ID=your_project_id
     VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     VITE_FIREBASE_APP_ID=your_app_id
     ```

### Running the App

Start the development server:

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```sh
npm run build
```

### Linting

```sh
npm run lint
```

## Code Quality

- Uses ESLint with React and hooks rules ([`eslint.config.js`](eslint.config.js)).
- Organized with React Context for state management.
- Modular component structure.

## License

This project is licensed under the MIT License.

---

**Note:**  
This project is for educational purposes and does not include payment processing or order fulfillment.
