import { useState } from 'react';
import Header from '@/components/header';
import styles from '@/styles/Home.module.css';

export default function Home() {
  const title = 'Mouse Disco';
  const content = 'A simple mouse disco app';

  const [color, setColor] = useState<string>('white');

  const changeColor = (e: any) => {
    const colors = [
      'red',
      'green',
      'blue',
      'yellow',
      'purple',
      'pink',
      'orange',
      'black',
      'gray',
      'teal',
      'cyan',
      'indigo',
      'lime',
      'fuchsia',
      'violet',
    ];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
    e.target.style.backgroundColor = color;

    setTimeout(() => {
      e.target.style.backgroundColor = 'white';
    }, 4000);
  };

  const blocks = [
    {
      blockCount: 60,
    },
  ];

  return (
    <>
      <Header title={title} content={content} />
      <main className={styles.main}>
        <h1 className={styles.title}>{title}</h1>
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
