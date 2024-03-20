import { ReactElement, JSXElementConstructor, ReactNode, PromiseLikeOfReactNode, Key } from 'react';
import Styles from './page.module.css';

export default async function Menu() {
  const getMenus = async () => {
    const response = await fetch('http://localhost:3000/api/menus', {
        next: {revalidate:10}
    })
    return response.json()
  }

  const data = await getMenus()

  return (
    <>
      <div className={Styles.dataMsg}>
        {data?.message}
      </div>
      <main className={Styles.mainContainer}>
        {/* <XmasMenu /> */}

        {/* using custom api */}
        {
          data.menus.map((item: { thumbnail: string | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | PromiseLikeOfReactNode | null | undefined; }, index: Key | null | undefined) => (
              <div className={Styles.menu} key={index}>
                  <img src={item.thumbnail} alt={item.title}/>
                  <div>
                      {item.title}
                  </div>
              </div>
          ))
      }
      </main>
    </>
  );
}
  