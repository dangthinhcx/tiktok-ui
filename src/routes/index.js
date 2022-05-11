import Home from './pages/Home';
import Following from './pages/Following';

// Khong dang nhap van xem dc
const publichRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
];

// dang nhap moi xem dc
const privateRoutes = {};

export { publichRoutes, privateRoutes };
