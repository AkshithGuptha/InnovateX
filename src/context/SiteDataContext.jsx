import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { isSupabaseConfigured, supabase } from '../lib/supabase';
const Context = createContext(null);
export function SiteDataProvider({ children }) {
  const [data, setData] = useState({ issues: [], articles: [], team: [], settings: null });
  const [loading, setLoading] = useState(true); const [error, setError] = useState('');
  const refresh = async () => {
    if (!isSupabaseConfigured) { setError('The publication database has not been connected yet.'); setLoading(false); return; }
    setLoading(true); setError('');
    const [issues, articles, team, settings] = await Promise.all([
      supabase.from('issues').select('*').eq('published', true).order('published_at', { ascending: false, nullsFirst: false }),
      supabase.from('articles').select('*').eq('published', true).order('published_at', { ascending: false, nullsFirst: false }),
      supabase.from('team_members').select('*').eq('published', true).order('sort_order'),
      supabase.from('site_settings').select('value').eq('key', 'site').maybeSingle(),
    ]);
    const failed = [issues, articles, team, settings].find(x => x.error);
    if (failed) setError(failed.error.message);
    setData({ issues: issues.data || [], articles: articles.data || [], team: team.data || [], settings: settings.data?.value || null });
    setLoading(false);
  };
  useEffect(() => { refresh(); }, []);
  const value = useMemo(() => ({ ...data, loading, error, refresh }), [data, loading, error]);
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
export function useSiteData() { const value = useContext(Context); if (!value) throw new Error('useSiteData must be used within SiteDataProvider'); return value; }