'use client';
import Link from 'next/link';
import {useState} from 'react';
import {hotel,rooms} from './data';

const nav=[
  ['Rooms & Suites','/rooms'],
  ['Offers','/offers'],
  ['Facilities','/facilities'],
  ['Dining','/restaurant'],
  ['Wellness','/spa'],
  ['Contact','/contact']
];

export function Header(){
  const [open,setOpen]=useState(false);
  return <><div className="topbar"><div className="wrap topbar-in"><span>Brussels · Belgium</span><span>24/7 Reception <b>·</b> +32 2 123 45 67</span></div></div>
  <header className="header"><div className="wrap head-in">
    <Link href="/" className="brand" onClick={()=>setOpen(false)}><span className="crown">♕</span><span><strong>ROYAL BELGIUM</strong><small>HOTEL &amp; SUITES</small></span></Link>
    <button className="hamb" onClick={()=>setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}><i></i><i></i><i></i></button>
    <nav className={open?'nav open':'nav'}>
      {nav.map(([t,h])=><Link key={h} href={h} onClick={()=>setOpen(false)}>{t}</Link>)}
      <Link href="/book" className="nav-book" onClick={()=>setOpen(false)}>Book Now</Link>
    </nav>
  </div></header></>
}

export function Footer(){
 return <footer className="site-footer">
  <section className="footer-cta"><div><span className="eyebrow">PLAN YOUR NEXT ESCAPE</span><h2>Make Brussels yours.</h2><p>Comfortable rooms, thoughtful service and a direct booking experience.</p></div><Link href="/book" className="gold-btn">Check availability <span>→</span></Link></section>
  <div className="footer-main"><div className="wrap footer-grid">
   <div className="footer-about"><div className="brand"><span className="crown">♕</span><span><strong>ROYAL BELGIUM</strong><small>HOTEL &amp; SUITES</small></span></div><p>Timeless elegance, thoughtful service and a comfortable Brussels stay.</p><div className="footer-links"><a href={'mailto:'+hotel.email}>Email us</a><a href={'tel:'+hotel.phone}>Call us</a></div></div>
   <div><h4>EXPLORE</h4><Link href="/rooms">Rooms &amp; Suites</Link><Link href="/offers">Offers</Link><Link href="/facilities">Facilities</Link><Link href="/restaurant">Dining</Link><Link href="/spa">Wellness</Link></div>
   <div><h4>DISCOVER</h4><Link href="/gallery">Gallery</Link><Link href="/events">Events</Link><Link href="/location">Explore Brussels</Link><Link href="/blog">Journal</Link><Link href="/faq">FAQ</Link></div>
   <div><h4>CONTACT</h4><p>{hotel.city}</p><a href={'tel:'+hotel.phone}>{hotel.phone}</a><a href={'mailto:'+hotel.email}>{hotel.email}</a><p>Reception · 24/7</p><Link href="/contact" className="footer-contact-link">Contact the hotel <span>→</span></Link></div>
  </div></div>
  <div className="bottom"><span>© 2026 Royal Belgium Hotel &amp; Suites</span><span><Link href="/contact">Privacy</Link> · <Link href="/contact">Terms</Link> · Cookie Policy</span></div>
 </footer>
}

export function Shell({children}){return <><Header/>{children}<Footer/></>}
export function PageHero({eyebrow,title,text,image}){return <section className="page-hero" style={{backgroundImage:`linear-gradient(90deg,rgba(8,11,16,.86),rgba(8,11,16,.35)),url(${image||'/images/0011.jfif'})`}}><div className="wrap page-hero-in"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1>{text&&<p>{text}</p>}</div></section>}
export function BookingForm({large=false}){const [msg,setMsg]=useState('');function submit(e){e.preventDefault();const f=new FormData(e.currentTarget);if(f.get('out')<=f.get('in')){setMsg('Please choose a check-out date after your check-in date.');return}setMsg('Availability request received. We will show the next booking step here.');}return <form className={large?'booking-form booking-large':'booking-form'} onSubmit={submit}><label>Check-in<input name="in" type="date" required/></label><label>Check-out<input name="out" type="date" required/></label><label>Guests<select name="guests" defaultValue="2"><option>1</option><option>2</option><option>3</option><option>4</option></select></label><label>Rooms<select name="rooms" defaultValue="1"><option>1</option><option>2</option><option>3</option></select></label><button className="gold-btn" type="submit">Check availability <span>→</span></button>{msg&&<p className="form-message">{msg}</p>}</form>}
export function RoomCard({room}){return <article className="room-card"><Link href={'/rooms/'+room.slug} className="room-img" style={{backgroundImage:`url(${room.image})`}}><span>View room</span></Link><div className="card-body"><span className="eyebrow">{room.size} · UP TO {room.guests} GUESTS</span><h3>{room.name}</h3><p>{room.description}</p><div className="room-meta"><span>♢ {room.bed}</span><span>⌁ Wi-Fi</span><span>♧ Breakfast</span></div><div className="room-line"><span>From <strong>€{room.price}</strong> / night</span><Link href={'/rooms/'+room.slug}>Details <b>→</b></Link></div></div></article>}
export function GalleryGrid({items}){const [active,setActive]=useState(null);return <><div className="gallery-grid">{items.map((x,i)=><button key={x+i} className="gallery-item" style={{backgroundImage:`url(${x})`}} onClick={()=>setActive(i)} aria-label={'Open gallery image '+(i+1)}><span>+</span></button>)}</div>{active!==null&&<div className="lightbox" onClick={()=>setActive(null)}><button className="lightbox-close" onClick={()=>setActive(null)}>×</button><img src={items[active]} alt="Royal Belgium Hotel" onClick={e=>e.stopPropagation()}/><button className="lightbox-prev" onClick={e=>{e.stopPropagation();setActive((active-1+items.length)%items.length)}}>←</button><button className="lightbox-next" onClick={e=>{e.stopPropagation();setActive((active+1)%items.length)}}>→</button></div>}</>}
