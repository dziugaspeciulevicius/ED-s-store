const RoutingConstants = {
  homepage: "/",
  homeWithPagination: "/page/:pageNumber",
  homeWithSearchAndPagination: "/search/:keyword/page/:pageNumber",
  homeWithSearch: "/search/:keyword",
  product: "/product/:id",
  cart: "/cart/:id?",
  shop: "/shop",
  contact: "/contact",
  about: "/about",
  login: "/login",
  register: "/register",
  dashboard: "/profile",
  adminPanel: "/admin",
  userEdit: "/admin/user/:id/edit",
  productEdit: "/admin/product/:id/edit",
  shipping: "/shipping",
  payment: "/payment",
  placeOrder: "/place-order",
  order: "/order/:id",
};

export default RoutingConstants;
