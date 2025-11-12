import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from '@/layouts';
import { Home, About, HowItWorks, NewsMedia, Contact, Waitlist, NotFound } from '@/pages';
import { ScrollToTop } from '@/components/common';
import { ROUTES } from '@/constants';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.HOW_IT_WORKS} element={<HowItWorks />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.NEWS_MEDIA} element={<NewsMedia />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path={ROUTES.WAITLIST} element={<Waitlist />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
