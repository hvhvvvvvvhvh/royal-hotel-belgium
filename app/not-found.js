import Link from 'next/link';import {Shell} from './components';
export default function NotFound(){return <Shell><section className="not-found"><span className="eyebrow">404</span><h1>We couldn't find that page.</h1><p>Return to the hotel homepage and continue exploring.</p><Link className="gold-btn" href="/">Back to home <span>→</span></Link></section></Shell>}
