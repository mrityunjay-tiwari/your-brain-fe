import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Dashboard } from "./components/ui/dashboard"
import { Signin } from "./components/ui/signIn"
import { Signup } from "./components/ui/signUp"
import { LandingPage } from "./components/ui/landingPage"
import { ShareallPage } from "./components/ui/shareallPage"
import { ShareOnePage } from "./components/ui/shareonePage"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/shareall/:token" element={<ShareallPage />} />
        <Route path="/shareone/:token" element={<ShareOnePage />} />

      </Routes>
      {/* <Dashboard /> */}
      {/* <Signin /> */}
      {/* <Signup /> */}
    </BrowserRouter>
  )
}

export default App
