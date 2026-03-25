import Icon from './Icon';

const Footer = ({ onNav }) => {
  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior:'smooth' });

  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div>
            <div className="footer-logo">Rushikesh Jagadale<span>.</span></div>
            <div className="footer-tagline">UI/UX Designer creating meaningful digital experiences that solve real problems.</div>
          </div>
          <div className="fcol">
            <h4>Quick Links</h4>
            {['about','projects','skills','contact'].map(id=>(
              <a key={id} onClick={()=>scrollTo(id)} style={{cursor:'pointer',textTransform:'capitalize'}}>{id}</a>
            ))}
          </div>
          <div className="fcol">
            <h4>Contact</h4>
            <a href="#" style={{display:'flex',alignItems:'center',gap:6}}>
              <Icon name="location" size={12} color="currentColor"/> Pune, India
            </a>
            <a href="tel:+918275572520" style={{display:'flex',alignItems:'center',gap:6}}>
              <Icon name="phone" size={12} color="currentColor"/> 8275572520
            </a>
            <a href="mailto:rushikesh@email.com" style={{display:'flex',alignItems:'center',gap:6}}>
              <Icon name="email" size={12} color="currentColor"/> rushikesh@email.com
            </a>
          </div>
        </div>
        <div className="footer-bot">
          <div className="fcopy">© {new Date().getFullYear()} Rushikesh Jagadale. All rights reserved.</div>
          <div className="fsocials">
            <a href="#">in</a>
            <a href="#">Bē</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
