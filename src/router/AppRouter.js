import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { ROUTES } from "../utils/constants";
import { useTranslation } from 'react-i18next';
import Index from "../pages/Index";
import Evren from "../pages/Evren";
import Header from "../components/Header";
import Asli from "../pages/Asli";
import Navbar from "../components/Navbar";
import Communication from "../pages/Communication";

const AppRouter = () => {
    const { t } = useTranslation();

    return <BrowserRouter>
        <Header />
        <Navbar />

        <Routes>
            <Route exact path={ROUTES.INDEX} element={<Index />} />
            <Route exact path={ROUTES.EVREN} element={<Evren />} />
            <Route exact path={ROUTES.ASLI} element={<Asli />} />
            <Route exact path={ROUTES.COMMUNICATION} element={<Communication />} />

            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </BrowserRouter >
}
export default AppRouter
