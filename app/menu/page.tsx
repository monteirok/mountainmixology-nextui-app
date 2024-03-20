import XmasMenu from '../components/Menus/XmasMenu'
import Styles from './page.module.css';

export default async function Menu() {
  return (
    <>
      <main className={Styles.menuContainer}>
        <XmasMenu />
      </main>
    </>
  );
}
  