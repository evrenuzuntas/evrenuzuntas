import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { ROUTES } from "../utils/constants";
import { useTranslation } from 'react-i18next';
import Index from "../pages/Index";
import Evren from "../pages/Evren";
import Header from "../components/Header";
import Asli from "../pages/Asli";
import Navbar from "../components/Navbar";
import Connect from "../pages/Connect";
import NotFound from "../pages/NotFound";
import Footer from "../components/Footer";
import Portfolio from "../pages/Portfolio";
import Blog from "../pages/Blog";
import Youtube from "../pages/Youtube";
import Card from "../pages/Card";


const AppRouter = () => {
    const { t } = useTranslation();

    return <BrowserRouter>

        <Header />
        <Navbar />

        <Routes>
            <Route exact path={ROUTES.INDEX} element={<Index />} />
            <Route exact path={ROUTES.EVREN} element={<Evren />} />
            <Route exact path={ROUTES.PORTFOLİO} element={<Portfolio />} />
            <Route exact path={ROUTES.BLOG} element={<Blog />} />
            <Route exact path={ROUTES.CONNECT} element={<Connect />} />
            <Route exact path={ROUTES.YOUTUBE} element={<Youtube />} />
            <Route exact path={ROUTES.NOT_FOUND} element={<NotFound />} />
            <Route exact path={ROUTES.ASLI} element={<Asli />} />
            <Route exact path={ROUTES.CARD} element={<Card />} />

            <Route path="*" element={<Navigate to="404" replace />} />
        </Routes>

        <Footer />

    </BrowserRouter >
}
export default AppRouter
