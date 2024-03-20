import Link from 'next/link';
import Styles from './page.module.css'

export default function Reserve() {
    return (
      <main className='mainContainer'>
        <div className="mainHeadContainer">
          <h1 className={Styles.mainHeader}>Reserve</h1>
          <h5 className={Styles.mainSubHeader}>Please send reservation inquiries to <b className={Styles.email}><i>reservations@mountainmixology.ca</i></b> for the time being.</h5>
        </div>
      </main>
    );
  }
  