import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { SiteDataProvider } from './context/SiteDataContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Issues from './components/Issues';
import Articles from './components/Articles';
import Team from './components/Team';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import ArticlePage from './pages/ArticlePage';
function Home(){return <><Header/><main><Hero/><About/><Issues/><Articles/><Team/></main><Footer/></>}
export default function App(){return <BrowserRouter><SiteDataProvider><Routes>
 <Route path="/" element={<Home/>}/><Route path="/admin/login" element={<AdminLogin/>}/><Route path="/admin" element={<AdminDashboard/>}/><Route path="/articles/:slug" element={<ArticlePage/>}/>
 <Route path="*" element={<Home/>}/>
 </Routes></SiteDataProvider></BrowserRouter>}