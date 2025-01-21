'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

interface ConfettiProps {
  id: number;
  left: number;
  emoji: string;
}

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [confetti, setConfetti] = useState<ConfettiProps[]>([]);
  const nextIdRef = useRef(0);

  const createConfettiPiece = (): ConfettiProps => {
    const emojis = ['🌸','🌿', '🍁', '❄️'];
    return {
      id: nextIdRef.current++,
      left: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
    }
  }

  useEffect(() => {
    setIsLoaded(true);

    const initialConfetti = Array.from({ length: 20 }, createConfettiPiece);
    setConfetti(initialConfetti);

    const intervalId = setInterval(() => {
      setConfetti(prevConfetti => {
        const filtered = prevConfetti.filter(piece => piece.id > nextIdRef.current - 100);
        return [...filtered, createConfettiPiece()];
      });
    }, 200);

    return () => {
      clearInterval(intervalId);
    }
  }, []);

  return (
    <div className="bg-dashboard bg-cover bg-no-repeat flex flex-col gap-20 h-screen w-screen justify-center items-center overflow-hidden">
      <div className='fixed inset-0 pointer-events-none overflow-hidden'>
        {confetti.map(({ id, left, emoji }) => (
          <div key={id} className='absolute animate-confettiFall' style={{ left: `${left}px`, top: '-20px' }}>
            {emoji}
          </div>
        ))}
      </div>
      <div>
        <Image
          alt='Stardew valley logo'
          src="https://stardewvalley.net/wp-content/uploads/2017/12/main_logo.png"
          height={700}
          width={700}
        />
        <div className={`absolute top-72 left-[43%] flex justify-center items-center bg-wood-dashboard bg-no-repeat bg-contain text-[#E0A100] text-2xl font-pixelify w-[200px] h-[65px] rotate-12 mb-9 cursor-default ${isLoaded ? 'animate-fall' : 'opacity-0'}`}>Recipes</div>
      </div>
      <div>
        <Link
          className="flex justify-center items-center w-36 h-12 bg-wood-dashboard hover:bg-transparent hover:bg-none bg-contain bg-no-repeat font-pixelify font-semibold text-[#E0A100] hover:text-[#03A60E] hover:border-[#0D7313] hover:border-[4px] transition"
          href="/pages/dashboard"
        >
          Dashboard
        </Link>
      </div>
    </div>
  );
}
