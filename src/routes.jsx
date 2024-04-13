import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Users from './pages/Users'

const RoutersApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Users />} />
                <Route path="/create-view/:session" element={<Users />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutersApp