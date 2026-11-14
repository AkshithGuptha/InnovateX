import {useEffect,useState} from 'react';
import {Link,useParams} from 'react-router-dom';
import {supabase} from '../lib/supabase';
import './ArticlePage.css';
export default function ArticlePage(){const{slug}=useParams();const[article,setArticle]=useState(null),[loading,setLoading]=useState(true);
 useEffect(()=>{supabase.from('articles').select('*').eq('slug',slug).eq('published',true).maybeSingle().then(({data})=>{setArticle(data);setLoading(false);});},[slug]);
 if(loading)return <main className="article-page"><p>Loading article…</p></main>;
 if(!article)return <main className="article-page"><Link to="/">← Return to InnovateX</Link><h1>Article not found.</h1></main>;
 return <main className="article-page"><Link to="/#articles">← Back to articles</Link><span className="article-category">{article.category}</span><h1>{article.title}</h1><p className="article-page-meta">By {article.author||'InnovateX Editorial'} · {article.read_time}</p>{article.image_url&&<img className="article-page-image" src={article.image_url} alt={article.title}/>}<div className="article-body">{article.body?.split('\n').map((p,i)=><p key={i}>{p}</p>)}</div></main>;
}