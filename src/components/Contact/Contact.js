import './ContactStyles.css';

const Contact = () => {
    return (
        <section>
            <div className="contactBanner">
                <h1> Contact us </h1>
            </div>

            <div className='contactCards'>
                <div>
                    <h3> Our support </h3>
                    <p> Contact-email: support@gmail.com <span className='arrow'> &gt; </span> </p>
                    <p> Products support <span className='arrow'> &gt; </span></p>
                    <p> Warranties <span className='arrow'> &gt; </span></p>
                </div>

                <div>
                    <h3> Online orders </h3>
                    <p> Our store support <span className='arrow'> &gt; </span></p>
                    <p> Frequently questions <span className='arrow'> &gt; </span></p>
                    <p> Contact online-support <span className='arrow'> &gt; </span></p>
                </div>

                <div>
                    <h3> Sales </h3>
                    <p> Reseller <span className='arrow'> &gt; </span></p>
                    <p> Sponsorship <span className='arrow'> &gt; </span></p>
                </div>

                <div>
                    <h3> Social media </h3>
                    <p> Twitter <span className='arrow'> &gt; </span></p>
                    <p> Youtube <span className='arrow'> &gt; </span></p>
                </div>
            </div>
        </section>
    );
};
export default Contact;