import React, { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { makeTranslator, resolveLanguage } from './i18n.js';
import './styles.css';

const Root = /^\/admin\/?$/.test(location.pathname) ? lazy(()=>import('./admin/AdminApp.jsx')) : App;
let savedLanguage;try{savedLanguage=localStorage.getItem('hdu-language');}catch{}
const loading = makeTranslator(resolveLanguage(location.search,savedLanguage))('loadingMap');
createRoot(document.getElementById('root')).render(<React.StrictMode><Suspense fallback={<main className="bootstrap-state"><p role="status">{loading}</p></main>}><Root /></Suspense></React.StrictMode>);
