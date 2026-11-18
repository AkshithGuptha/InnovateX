import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import './Admin.css';
export default function AdminLogin() {
 const [email,setEmail]=useState(''),[password,setPassword]=useState(''),[busy,setBusy]=useState(false),[message,setMessage]=useState('');
 const navigate=useNavigate();
 const submit=async e=>{e.preventDefault();if(!isSupabaseConfigured){setMessage('Connect Supabase first by adding the VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY environment variables.');return;}setBusy(true);setMessage('');
  const {data,error}=await supabase.auth.signInWithPassword({email,password});
  if(error){setMessage(error.message);setBusy(false);return;}
  const {data:profile,error:profileError}=await supabase.from('admin_profiles').select('role').eq('id',data.user.id).maybeSingle();
  if(profileError||profile?.role!=='admin'){await supabase.auth.signOut();setMessage('This account does not have administrator access.');setBusy(false);return;}
  navigate('/admin',{replace:true});
 };
 return <main className="admin-shell"><section className="admin-login-card">
  <Link className="admin-back" to="/">← Back to InnovateX</Link><span className="admin-eyebrow">PRIVATE WORKSPACE / 01</span>
  <h1>Editorial <span>access.</span></h1><p>Sign in with your authorised administrator account to manage the publication.</p>
  {!isSupabaseConfigured&&<p className="admin-message">Supabase setup is required before administrator sign-in can be used.</p>}<form onSubmit={submit} className="admin-form">
   <label>Email address<input type="email" autoComplete="username" value={email} onChange={e=>setEmail(e.target.value)} required /></label>
   <label>Password<input type="password" autoComplete="current-password" value={password} onChange={e=>setPassword(e.target.value)} required /></label>
   {message&&<p className="admin-message" role="alert">{message}</p>}
   <button className="btn btn-primary" disabled={busy}>{busy?'Signing in…':'Sign in to dashboard'} <span>↗</span></button>
  </form><small>Administrator accounts are provisioned privately. Public registration is disabled.</small>
 </section></main>;
}