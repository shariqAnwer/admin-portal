// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
// import Topbar from "./scenes/global/Topbar";
// import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import Login from "./scenes/login/Login";
import Register from "./scenes/register/Register";
import Homepage from "./scenes/homepage/Homepage";
import UserForm from "./scenes/multiStepForm/UserForm";
import VendorFormData from "./scenes/vendorOnboardingFormDetails/index.jsx";

function App() {
  const [theme, colorMode] = useMode();
  // const [isSidebar, setIsSidebar] = useState(false);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}> 
        <CssBaseline />
        {/* <div className="app" style={{border: "2px solid yellow"}}>
           <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} /> */}
            <Routes>
              <Route path='/' element={<Homepage/>} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path="/vendorForm" element={<UserForm />} /> 
              <Route path="/vendorFormData" element={<VendorFormData />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          {/* </main>
        </div> */}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
