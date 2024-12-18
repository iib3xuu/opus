import React from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Stats } from '../components/Stats';

export function Home() {
  return (
    <>
      <Hero />
      <Features />
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Stats />
        </div>
      </section>
    </>
  );
}