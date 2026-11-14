import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase,uploadPublicFile,isSupabaseConfigured } from '../lib/supabase';
import './Admin.css';
const issueBlank={title:'',edition:'',description:'',cover_url:'',pdf_url:'',published:false};
const articleBlank={title:'',slug:'',category:'',excerpt:'',body:'',author:'',read_time:'',image_url:'',published:false};
const memberBlank={name:'',role:'',bio:'',photo_url:'',linkedin_url:'',sort_order:0,published:true};
const settingsBlank={hero_eyebrow:'',hero_title:'',hero_description:'',about_title:'',about_description:'',vision:'',mission:'',contact_email:'',footer_description:'',focus_areas:[{title:'',detail:''},{title:'',detail:''},{title:'',detail:''},{title:'',detail:''}]};
export default function AdminDashboard(){
 const [user,setUser]=useState(null),[section,setSection]=useState('issues'),[records,setRecords]=useState({issues:[],articles:[],team_members:[]});
 const [settings,setSettings]=useState(settingsBlank),[form,setForm]=useState(issueBlank),[editing,setEditing]=useState(null),[busy,setBusy]=useState(false),[notice,setNotice]=useState('');
 const navigate=useNavigate();
 const load=async()=>{
  const [i,a,t,s]=await Promise.all([supabase.from('issues').select('*').order('created_at',{ascending:false}),supabase.from('articles').select('*').order('created_at',{ascending:false}),supabase.from('team_members').select('*').order('sort_order'),supabase.from('site_settings').select('value').eq('key','site').maybeSingle()]);
  if(i.error||a.error||t.error)setNotice((i.error||a.error||t.error).message);
  setRecords({issues:i.data||[],articles:a.data||[],team_members:t.data||[]});if(s.data?.value)setSettings({...settingsBlank,...s.data.value});
 };
 useEffect(()=>{if(!supabase)return undefined;let active=true;supabase.auth.getSession().then(async({data})=>{if(!active)return;if(!data.session){navigate('/admin/login',{replace:true});return;}
  const {data:p}=await supabase.from('admin_profiles').select('role').eq('id',data.session.user.id).maybeSingle();
  if(p?.role!=='admin'){await supabase.auth.signOut();navigate('/admin/login',{replace:true});return;}setUser(data.session.user);await load();});
  const {data:listener}=supabase.auth.onAuthStateChange((_e,session)=>{if(!session)navigate('/admin/login',{replace:true});});
  return()=>{active=false;listener.subscription.unsubscribe();};
 },[]);
 const table=section==='issues'?'issues':section==='articles'?'articles':'team_members',rows=records[table]||[];
 const blank=section==='issues'?issueBlank:section==='articles'?articleBlank:memberBlank;
 const startNew=()=>{setEditing(null);setForm({...blank});setNotice('');};
 const edit=row=>{setEditing(row.id);setForm({...blank,...row});setNotice('');};
 const change=(key,value)=>setForm(current=>({...current,[key]:value}));
 const upload=async(e,field,bucket)=>{const file=e.target.files?.[0];if(!file)return;setBusy(true);setNotice('Uploading…');try{change(field,await uploadPublicFile(file,bucket));setNotice('Upload complete. Save this item to keep the file link.');}catch(err){setNotice(err.message);}setBusy(false);};
 const save=async e=>{e.preventDefault();setBusy(true);setNotice('');const payload={...form};
  if(section==='articles'&&!payload.slug)payload.slug=payload.title.toLowerCase().trim().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  if(payload.published&&!payload.published_at)payload.published_at=new Date().toISOString();
  const result=editing?await supabase.from(table).update(payload).eq('id',editing):await supabase.from(table).insert(payload);
  if(result.error)setNotice(result.error.message);else{setNotice('Saved successfully.');startNew();await load();}setBusy(false);
 };
 const remove=async id=>{if(!window.confirm('Delete this item permanently?'))return;const{error}=await supabase.from(table).delete().eq('id',id);setNotice(error?error.message:'Item deleted.');if(!error)await load();};
 const saveSettings=async e=>{e.preventDefault();setBusy(true);const{error}=await supabase.from('site_settings').upsert({key:'site',value:settings,updated_at:new Date().toISOString()});setNotice(error?error.message:'Homepage content updated.');setBusy(false);};
 const signOut=async()=>{await supabase.auth.signOut();navigate('/admin/login',{replace:true});};
 const field=(key,label,area=false)=><label key={key}>{label}{area?<textarea rows="3" value={form[key]||''} onChange={e=>change(key,e.target.value)}/>:<input value={form[key]||''} onChange={e=>change(key,e.target.value)}/>}</label>;
 if(!isSupabaseConfigured)return <main className="admin-shell"><section className="admin-login-card"><span className="admin-eyebrow">SETUP REQUIRED</span><h1>Connect <span>Supabase.</span></h1><p>Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to the Vercel environment, then redeploy.</p><a className="btn btn-primary" href="/">Return to InnovateX</a></section></main>;
 return <main className="admin-dashboard"><header className="admin-topbar"><a className="logo" href="/">innovate<span>x</span><i>.</i></a><div><span>{user?.email}</span><button className="btn btn-outline" onClick={signOut}>Sign out</button></div></header>
  <div className="admin-layout"><aside className="admin-sidebar"><span className="admin-eyebrow">PUBLICATION CMS</span><h1>Control<br/><span>room.</span></h1>
   {[['issues','Magazine issues'],['articles','Articles'],['team_members','Editorial team'],['settings','Homepage content']].map(([key,label])=><button key={key} className={section===key?'active':''} onClick={()=>{setSection(key);startNew();setNotice('');}}>{label}<span>↗</span></button>)}
  </aside><section className="admin-workspace"><div className="admin-workspace-heading"><div><span className="admin-eyebrow">MANAGE / {section.replace('_',' ').toUpperCase()}</span><h2>{section==='settings'?'Site content':section==='team_members'?'Editorial team':section==='issues'?'Magazine issues':'Articles'}</h2></div>{section!=='settings'&&<button className="btn btn-primary" onClick={startNew}>＋ New {section==='team_members'?'member':section==='issues'?'issue':'article'}</button>}</div>
  {notice&&<p className="admin-notice" role="status">{notice}</p>}
  {section==='settings'?<form className="admin-editor" onSubmit={saveSettings}><h3>Homepage and contact details</h3>
   {['hero_eyebrow','hero_title','hero_description','about_title','about_description','vision','mission','contact_email','footer_description'].map(k=><label key={k}>{k.replaceAll('_',' ')}{k.includes('description')||k==='vision'||k==='mission'?<textarea rows="3" value={settings[k]||''} onChange={e=>setSettings({...settings,[k]:e.target.value})}/>:<input value={settings[k]||''} onChange={e=>setSettings({...settings,[k]:e.target.value})}/>}</label>)}
   <h3>Editorial focus areas</h3>{(settings.focus_areas||[]).map((item,index)=><div className="admin-inline-fields" key={index}><input placeholder="Focus title" value={item.title||''} onChange={e=>setSettings({...settings,focus_areas:settings.focus_areas.map((x,i)=>i===index?{...x,title:e.target.value}:x)})}/><input placeholder="Short description" value={item.detail||''} onChange={e=>setSettings({...settings,focus_areas:settings.focus_areas.map((x,i)=>i===index?{...x,detail:e.target.value}:x)})}/></div>)}
   <button className="btn btn-primary" disabled={busy}>Save homepage content</button></form>
  :<div className="admin-content-grid"><form className="admin-editor" onSubmit={save}><h3>{editing?'Edit item':'Create new item'}</h3>
   {section==='issues'&&<>{field('title','Issue title')}<label>Edition / volume<input value={form.edition||''} onChange={e=>change('edition',e.target.value)} placeholder="Vol. 01 · Autumn 2026"/></label>{field('description','Description',true)}
    <label>Cover image<input type="file" accept="image/*" onChange={e=>upload(e,'cover_url','covers')}/></label>{field('cover_url','Cover image URL')}
    <label>Magazine PDF<input type="file" accept="application/pdf" onChange={e=>upload(e,'pdf_url','magazines')}/></label>{field('pdf_url','PDF URL')}</>}
   {section==='articles'&&<>{field('title','Article title')}<label>URL slug<input value={form.slug||''} onChange={e=>change('slug',e.target.value)} placeholder="generated-from-title"/></label>{field('category','Category')}{field('excerpt','Excerpt',true)}{field('body','Full article',true)}{field('author','Author')}{field('read_time','Reading time')}<label>Article image<input type="file" accept="image/*" onChange={e=>upload(e,'image_url','article-images')}/></label>{field('image_url','Image URL')}</>}
   {section==='team_members'&&<>{field('name','Name')}{field('role','Role')}{field('bio','Short bio',true)}<label>Portrait<input type="file" accept="image/*" onChange={e=>upload(e,'photo_url','team-photos')}/></label>{field('photo_url','Photo URL')}{field('linkedin_url','LinkedIn URL')}<label>Display order<input type="number" value={form.sort_order??0} onChange={e=>change('sort_order',Number(e.target.value))}/></label></>}
   <label className="admin-checkbox"><input type="checkbox" checked={Boolean(form.published)} onChange={e=>change('published',e.target.checked)}/> Publish on website</label>
   <div className="admin-form-actions"><button className="btn btn-primary" disabled={busy}>{busy?'Saving…':editing?'Save changes':'Create item'}</button>{editing&&<button type="button" className="btn btn-outline" onClick={startNew}>Cancel</button>}</div>
  </form><div className="admin-records"><h3>Saved content <span>{rows.length}</span></h3>{!rows.length?<p className="admin-empty">Nothing here yet. Create your first item.</p>:rows.map(row=><article className="admin-record" key={row.id}><div>{(row.cover_url||row.image_url||row.photo_url)&&<img src={row.cover_url||row.image_url||row.photo_url} alt=""/>}<div><strong>{row.title||row.name}</strong><small>{row.edition||row.category||row.role||'Editorial content'} · {row.published?'Published':'Draft'}</small></div></div><div><button onClick={()=>edit(row)}>Edit</button><button className="danger" onClick={()=>remove(row.id)}>Delete</button></div></article>)}</div></div>}
  </section></div></main>;
}