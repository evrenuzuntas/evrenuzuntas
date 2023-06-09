import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { ROUTES } from "../utils/constants";
import { useTranslation } from 'react-i18next';
import Index from "../pages/Index";
import Asli from "../pages/asli";

const AppRouter = () => {
    const { t } = useTranslation();

    return <BrowserRouter>
        <Routes>
            <Route exact path={ROUTES.INDEX} element={<Index />} />
            <Route exact path={ROUTES.ASLI} element={<Asli />} />

            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </BrowserRouter>
}
export default AppRouter
