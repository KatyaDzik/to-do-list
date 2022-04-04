import './Footer.css';

function Footer() {
    return (
        <div className="Footer">
            <input type="button" className='DeleteBtn' value='delete completed tasks'/>
            <input type="button" className='AddBtn' value='+'/>
        </div>
    );
}

export default Footer;
