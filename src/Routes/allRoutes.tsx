import { Navigate } from "react-router-dom";

//Calendar


// Email box
import MailInbox from "../pages/EmailInbox";
// import BasicAction from "../pages/Email/EmailTemplates/BasicAction";
// import EcommerceAction from "../pages/Email/EmailTemplates/EcommerceAction";

//Chat


// Project


//Task

//Transactions


//Crm Pages

//Invoices


// Support Tickets

// //Ecommerce Pages


// NFT Marketplace Pages


// Base Ui


// Advance Ui

// Widgets


//Forms

//Tables


//Icon pages

//Maps


//AuthenticationInner pages
import BasicSignIn from "../pages/AuthenticationInner/Login/BasicSignIn";
import CoverSignIn from "../pages/AuthenticationInner/Login/CoverSignIn";
import BasicSignUp from "../pages/AuthenticationInner/Register/BasicSignUp";
import CoverSignUp from "../pages/AuthenticationInner/Register/CoverSignUp";
import BasicPasswReset from "../pages/AuthenticationInner/PasswordReset/BasicPasswReset";
//pages

import CoverPasswReset from "../pages/AuthenticationInner/PasswordReset/CoverPasswReset";
import BasicLockScreen from "../pages/AuthenticationInner/LockScreen/BasicLockScr";
import CoverLockScreen from "../pages/AuthenticationInner/LockScreen/CoverLockScr";
import BasicLogout from "../pages/AuthenticationInner/Logout/BasicLogout";
import CoverLogout from "../pages/AuthenticationInner/Logout/CoverLogout";
import BasicSuccessMsg from "../pages/AuthenticationInner/SuccessMessage/BasicSuccessMsg";
import CoverSuccessMsg from "../pages/AuthenticationInner/SuccessMessage/CoverSuccessMsg";
import BasicTwosVerify from "../pages/AuthenticationInner/TwoStepVerification/BasicTwosVerify";
import CoverTwosVerify from "../pages/AuthenticationInner/TwoStepVerification/CoverTwosVerify";
import Basic404 from "../pages/AuthenticationInner/Errors/Basic404";
import Cover404 from "../pages/AuthenticationInner/Errors/Cover404";
import Alt404 from "../pages/AuthenticationInner/Errors/Alt404";
import Error500 from "../pages/AuthenticationInner/Errors/Error500";

import BasicPasswCreate from "../pages/AuthenticationInner/PasswordCreate/BasicPasswCreate";
import CoverPasswCreate from "../pages/AuthenticationInner/PasswordCreate/CoverPasswCreate";
import Offlinepage from "../pages/AuthenticationInner/Errors/Offlinepage";

//login
import Login from "../pages/Authentication/Login";
import ForgetPasswordPage from "../pages/Authentication/ForgetPassword";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";

//Charts

//Job pages


// import ApiKey from "../pages/APIKey/index";

// Landing Index
// import OnePage from "../pages/Landing/OnePage";
// import NFTLanding from "../pages/Landing/NFTLanding";
// import JobLanding from "../pages/Landing/Job";

// User Profile
import UserProfile from "../pages/Authentication/user-profile";



// Builder
import Builder from "pages/Builder";
import BuilderDetail from "pages/BuilderDetail";
import ListingDetail from "pages/ListingDetail";

// Users
import Users from "pages/Users";
import UserDetailPage from "pages/Users/UserDetailPage";

// Inspector
import Inspector from "pages/Inspector";

// Revenue
import Refunds from "pages/Revenue/Refund";
import Revenue from "pages/Revenue";

// Support
import SupportUI from "pages/Support";

// Settings
import SettingsUI from "pages/Settings";

// Documents
import Documents from "pages/Documents";
import InspectorDetailPage from "pages/Inspector/InspectorDetailPage";
import Properties from "pages/Properties";
import PropertiesListingDetailPage from "pages/Properties/PropertiesListingDetailPage";
import Dashboard from "pages/Dashboard";






const authProtectedRoutes = [

  // Dashboard
  { path: "/dashboard", component: <Dashboard /> },
  // Builder
  { path: "/builder", component: <Builder /> },
  { path: "/builder-detail", component: <BuilderDetail /> },
  { path: "/listing-detail", component: <ListingDetail />},

  // Users
  {path:"/users", component:<Users />},
  {path:"/user-details", component:<UserDetailPage />},

  // Inspector
  {path:"/inspector", component:<Inspector />},
  {path:"/inspector-details", component:<InspectorDetailPage />},

  // Properties
  {path:"/properties", component:<Properties />},
  {path:"/properties-listing-detail", component:<PropertiesListingDetailPage />},

  //Documents
  { path: "/documents", component: <Documents /> },

  //Settings
  { path: "/settings", component: <SettingsUI /> },

  // Support
  { path: "/support", component: <SupportUI /> },

  //Revenue
  { path: "/revenue", component: <Revenue /> },
  //Refunds

  { path: "/refunds", component: <Refunds /> },


  // apps
  // { path: "/apps-calendar", component: <Calendar /> },
  // { path: "/apps-calendar-month-grid", component: <MonthGrid /> },
  // { path: "/apps-ecommerce-products", component: <EcommerceProducts /> },
  // {
  //   path: "/apps-ecommerce-product-details",
  //   component: <EcommerceProductDetail />,
  // },
  // { path: "/apps-ecommerce-add-product", component: <EcommerceAddProduct /> },
  // { path: "/apps-ecommerce-orders", component: <EcommerceOrders /> },
  // {
  //   path: "/apps-ecommerce-order-details",
  //   component: <EcommerceOrderDetail />,
  // },
  // { path: "/apps-ecommerce-customers", component: <EcommerceCustomers /> },
  // { path: "/apps-ecommerce-cart", component: <EcommerceCart /> },
  // { path: "/apps-ecommerce-checkout", component: <EcommerceCheckout /> },
  // { path: "/apps-ecommerce-sellers", component: <EcommerceSellers /> },
  // {
  //   path: "/apps-ecommerce-seller-details",
  //   component: <EcommerceSellerDetail />,
  // },

  // { path: "/apps-file-manager", component: <FileManager /> },
  // { path: "/apps-todo", component: <ToDoList /> },

  // //Chat
  // { path: "/apps-chat", component: <Chat /> },

  //EMail
  { path: "/apps-mailbox", component: <MailInbox /> },
  // { path: "/apps-email-basic", component: <BasicAction /> },
  // { path: "/apps-email-ecommerce", component: <EcommerceAction /> },

  // //Projects
  // { path: "/apps-projects-list", component: <ProjectList /> },
  // { path: "/apps-projects-overview", component: <ProjectOverview /> },
  // { path: "/apps-projects-create", component: <CreateProject /> },

  // //Task
  // { path: "/apps-tasks-kanban", component: <Kanbanboard /> },
  // { path: "/apps-tasks-list-view", component: <TaskList /> },
  // { path: "/apps-tasks-details", component: <TaskDetails /> },

  // //Crm
  // { path: "/apps-crm-contacts", component: <CrmContacts /> },
  // { path: "/apps-crm-companies", component: <CrmCompanies /> },
  // { path: "/apps-crm-deals", component: <CrmDeals /> },
  // { path: "/apps-crm-leads", component: <CrmLeads /> },

  // //Invoices
  // { path: "/apps-invoices-list", component: <InvoiceList /> },
  // { path: "/apps-invoices-details", component: <InvoiceDetails /> },
  // { path: "/apps-invoices-create", component: <InvoiceCreate /> },

  //Supports Tickets
  // { path: "/apps-tickets-list", component: <ListView /> },
  // { path: "/apps-tickets-details", component: <TicketsDetails /> },

  // //transactions
  // { path: "/apps-crypto-transactions", component: <Transactions /> },
  // { path: "/apps-crypto-buy-sell", component: <BuySell /> },
  // { path: "/apps-crypto-orders", component: <CryproOrder /> },
  // { path: "/apps-crypto-wallet", component: <MyWallet /> },
  // { path: "/apps-crypto-ico", component: <ICOList /> },
  // { path: "/apps-crypto-kyc", component: <KYCVerification /> },

  // // NFT Marketplace
  // { path: "/apps-nft-marketplace", component: <Marketplace /> },
  // { path: "/apps-nft-collections", component: <Collections /> },
  // { path: "/apps-nft-create", component: <CreateNFT /> },
  // { path: "/apps-nft-creators", component: <Creators /> },
  // { path: "/apps-nft-explore", component: <ExploreNow /> },
  // { path: "/apps-nft-item-details", component: <ItemDetails /> },
  // { path: "/apps-nft-auction", component: <LiveAuction /> },
  // { path: "/apps-nft-ranking", component: <Ranking /> },
  // { path: "/apps-nft-wallet", component: <WalletConnect /> },

  // //charts
  // { path: "/charts-apex-line", component: <LineCharts /> },
  // { path: "/charts-apex-area", component: <AreaCharts /> },
  // { path: "/charts-apex-column", component: <ColumnCharts /> },
  // { path: "/charts-apex-bar", component: <BarCharts /> },
  // { path: "/charts-apex-mixed", component: <MixedCharts /> },
  // { path: "/charts-apex-timeline", component: <TimelineCharts /> },
  // { path: "/charts-apex-range-area", component: <RangeArea /> },
  // { path: "/charts-apex-funnel", component: <FunnelCharts /> },
  // { path: "/charts-apex-candlestick", component: <CandlestickChart /> },
  // { path: "/charts-apex-boxplot", component: <BoxplotCharts /> },
  // { path: "/charts-apex-bubble", component: <BubbleChart /> },
  // { path: "/charts-apex-scatter", component: <ScatterCharts /> },
  // { path: "/charts-apex-heatmap", component: <HeatmapCharts /> },
  // { path: "/charts-apex-treemap", component: <TreemapCharts /> },
  // { path: "/charts-apex-pie", component: <PieCharts /> },
  // { path: "/charts-apex-radialbar", component: <RadialbarCharts /> },
  // { path: "/charts-apex-radar", component: <RadarCharts /> },
  // { path: "/charts-apex-polar", component: <PolarCharts /> },
  // { path: "/charts-apex-slope", component: <SlopeCharts /> },

  // { path: "/charts-chartjs", component: <ChartsJs /> },
  // { path: "/charts-echarts", component: <Echarts /> },

  // // Base Ui
  // { path: "/ui-alerts", component: <UiAlerts /> },
  // { path: "/ui-badges", component: <UiBadges /> },
  // { path: "/ui-buttons", component: <UiButtons /> },
  // { path: "/ui-colors", component: <UiColors /> },
  // { path: "/ui-cards", component: <UiCards /> },
  // { path: "/ui-carousel", component: <UiCarousel /> },
  // { path: "/ui-dropdowns", component: <UiDropdowns /> },
  // { path: "/ui-grid", component: <UiGrid /> },
  // { path: "/ui-images", component: <UiImages /> },
  // { path: "/ui-tabs", component: <UiTabs /> },
  // { path: "/ui-accordions", component: <UiAccordions /> },
  // { path: "/ui-modals", component: <UiModals /> },
  // { path: "/ui-offcanvas", component: <UiOffcanvas /> },
  // { path: "/ui-placeholders", component: <UiPlaceholders /> },
  // { path: "/ui-progress", component: <UiProgress /> },
  // { path: "/ui-notifications", component: <UiNotifications /> },
  // { path: "/ui-media", component: <UiMediaobject /> },
  // { path: "/ui-embed-video", component: <UiEmbedVideo /> },
  // { path: "/ui-typography", component: <UiTypography /> },
  // { path: "/ui-lists", component: <UiList /> },
  // { path: "/ui-links", component: <UiLink /> },
  // { path: "/ui-general", component: <UiGeneral /> },
  // { path: "/ui-ribbons", component: <UiRibbons /> },
  // { path: "/ui-utilities", component: <UiUtilities /> },

  // // Advance Ui
  // { path: "/advance-ui-scrollbar", component: <UiScrollbar /> },
  // { path: "/advance-ui-animation", component: <UiAnimation /> },
  // { path: "/advance-ui-swiper", component: <UiSwiperSlider /> },
  // { path: "/advance-ui-ratings", component: <UiRatings /> },
  // { path: "/advance-ui-highlight", component: <UiHighlight /> },

  // // Widgets
  // { path: "/widgets", component: <Widgets /> },

  // // Forms
  // { path: "/forms-elements", component: <BasicElements /> },
  // { path: "/forms-select", component: <FormSelect /> },
  // { path: "/forms-editors", component: <FormEditor /> },
  // { path: "/forms-checkboxes-radios", component: <CheckBoxAndRadio /> },
  // { path: "/forms-masks", component: <Masks /> },
  // { path: "/forms-file-uploads", component: <FileUpload /> },
  // { path: "/forms-pickers", component: <FormPickers /> },
  // { path: "/forms-range-sliders", component: <FormRangeSlider /> },
  // { path: "/forms-layouts", component: <Formlayouts /> },
  // { path: "/forms-validation", component: <FormValidation /> },
  // { path: "/forms-wizard", component: <FormWizard /> },
  // { path: "/forms-advanced", component: <FormAdvanced /> },
  // { path: "/forms-select2", component: <Select2 /> },

  //Tables
  // { path: "/tables-basic", component: <BasicTables /> },
  // { path: "/tables-react", component: <ReactTable /> },

  // //Icons
  // { path: "/icons-remix", component: <RemixIcons /> },
  // { path: "/icons-boxicons", component: <BoxIcons /> },
  // { path: "/icons-materialdesign", component: <MaterialDesign /> },
  // { path: "/icons-feather", component: <FeatherIcons /> },
  // { path: "/icons-lineawesome", component: <LineAwesomeIcons /> },
  // { path: "/icons-crypto", component: <CryptoIcons /> },

  // //Maps
  // { path: "/maps-google", component: <GoogleMaps /> },

  // //Pages
  // { path: "/pages-starter", component: <Starter /> },
  // { path: "/pages-profile", component: <SimplePage /> },
  // { path: "/pages-profile-settings", component: <Settings /> },
  // { path: "/pages-team", component: <Team /> },
  // { path: "/pages-timeline", component: <Timeline /> },
  // { path: "/pages-faqs", component: <Faqs /> },
  // { path: "/pages-gallery", component: <Gallery /> },
  // { path: "/pages-pricing", component: <Pricing /> },
  // { path: "/pages-sitemap", component: <SiteMap /> },
  // { path: "/pages-search-results", component: <SearchResults /> },
  // { path: "/pages-privecy-policy", component: <PrivecyPolicy /> },
  // { path: "/pages-terms-condition", component: <TermsCondition /> },
  // { path: "/pages-blog-list", component: <BlogListView /> },
  // { path: "/pages-blog-grid", component: <BlogGridView /> },
  // { path: "/pages-blog-overview", component: <PageBlogOverview /> },

  //User Profile
  { path: "/profile", component: <UserProfile /> },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: "/",
    exact: true,
    component: <Navigate to="/dashboard" />,
  },
  { path: "*", component: <Navigate to="/dashboard" /> },
  // //Job pages
  // { path: "/apps-job-statistics", component: <Statistics /> },
  // { path: "/apps-job-lists", component: <JobList /> },
  // { path: "/apps-job-grid-lists", component: <JobGrid /> },
  // { path: "/apps-job-details", component: <JobOverview /> },
  // { path: "/apps-job-candidate-lists", component: <CandidateList /> },
  // { path: "/apps-job-candidate-grid", component: <CandidateGrid /> },
  // { path: "/apps-job-application", component: <Application /> },
  // { path: "/apps-job-new", component: <NewJobs /> },
  // { path: "/apps-job-companies-lists", component: <CompaniesList /> },
  // { path: "/apps-job-categories", component: <JobCategories /> },

  //APIkey
  // { path: "/apps-api-key", component: <ApiKey /> },
];

const publicRoutes = [
  // Authentication Page
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login /> },
  { path: "/forgot-password", component: <ForgetPasswordPage /> },
  { path: "/register", component: <Register /> },

  //AuthenticationInner pages
  { path: "/auth-signin-basic", component: <BasicSignIn /> },
  { path: "/auth-signin-cover", component: <CoverSignIn /> },
  { path: "/auth-signup-basic", component: <BasicSignUp /> },
  { path: "/auth-signup-cover", component: <CoverSignUp /> },
  { path: "/auth-pass-reset-basic", component: <BasicPasswReset /> },
  { path: "/auth-pass-reset-cover", component: <CoverPasswReset /> },
  { path: "/auth-lockscreen-basic", component: <BasicLockScreen /> },
  { path: "/auth-lockscreen-cover", component: <CoverLockScreen /> },
  { path: "/auth-logout-basic", component: <BasicLogout /> },
  { path: "/auth-logout-cover", component: <CoverLogout /> },
  { path: "/auth-success-msg-basic", component: <BasicSuccessMsg /> },
  { path: "/auth-success-msg-cover", component: <CoverSuccessMsg /> },
  { path: "/auth-twostep-basic", component: <BasicTwosVerify /> },
  { path: "/auth-twostep-cover", component: <CoverTwosVerify /> },
  { path: "/auth-404-basic", component: <Basic404 /> },
  { path: "/auth-404-cover", component: <Cover404 /> },
  { path: "/auth-404-alt", component: <Alt404 /> },
  { path: "/auth-500", component: <Error500 /> },
  // { path: "/pages-maintenance", component: <Maintenance /> },
  // { path: "/pages-coming-soon", component: <ComingSoon /> },

  // { path: "/landing", component: <OnePage /> },
  // { path: "/nft-landing", component: <NFTLanding /> },
  // { path: "/job-landing", component: <JobLanding /> },

  { path: "/auth-pass-change-basic", component: <BasicPasswCreate /> },
  { path: "/auth-pass-change-cover", component: <CoverPasswCreate /> },
  { path: "/auth-offline", component: <Offlinepage /> },
];

export { authProtectedRoutes, publicRoutes };
