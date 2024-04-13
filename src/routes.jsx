import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Users from './pages/Users'
import CreateUser from './pages/CreateUser'

const RoutersApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Users />} />
                <Route path="/create-view/:session" element={<CreateUser />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutersApp