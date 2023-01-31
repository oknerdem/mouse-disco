import { colors, blocks } from '@/components/data';
import { BsMouse3Fill } from 'react-icons/bs';
import Header from '@/components/header';
import styles from '@/styles/Home.module.css';

export default function Home() {
  const title = 'Mouse Disco';
  const content = 'A simple mouse disco app';

  const changeColor = (e: any) => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    e.target.style.backgroundColor = randomColor;

    setTimeout(() => {
      e.target.style.backgroundColor = 'white';
    }, 4000);
  };

  return (
    <>
      <Header title={title} content={content} />
      <main className={styles.main}>
        <h1 className={styles.title}>
          <BsMouse3Fill />
          {title}
        </h1>
        <div className={styles.blocks}>
          {blocks.map((block, index) => (
            <div key={index} className={styles.block}>
              {Array(block.blockCount)
                .fill('')
                .map((_, i) => (
                  <div
                    key={i}
                    className={styles.blockItem}
                    onMouseEnter={changeColor}
                  />
                ))}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
