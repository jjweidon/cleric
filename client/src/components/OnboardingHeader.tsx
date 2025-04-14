'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from './OnboardingHeader.module.css';

type OnboardingHeaderProps = {
  currentStep: 1 | 2 | 3 | 4;
  backLink: string;
};

const ANIMATION_DURATION = 1200;
const PROGRESS_BAR_HEIGHT = '4px';
const PROGRESS_BAR_BG_COLOR = '#D1D5DB';
const PROGRESS_FILL_COLOR = '#3B82F6';
const TOTAL_STEPS = 4;

type ProgressBarProps = {
  isActive: boolean;
  isCompleted: boolean;
};

const ProgressBar = ({ isActive, isCompleted }: ProgressBarProps) => (
  <div className={styles.progressBar}>
    <div className={`${styles.progressFill} ${isActive ? styles.active : isCompleted ? styles.completed : ''}`}></div>
  </div>
);

const OnboardingHeader = ({ currentStep, backLink }: OnboardingHeaderProps) => {
  const [prevStep, setPrevStep] = useState(currentStep);
  const [animationStates, setAnimationStates] = useState(
    Array.from({ length: TOTAL_STEPS }, (_, i) => currentStep >= i + 1)
  );

  useEffect(() => {
    if (currentStep !== prevStep) {
      setPrevStep(currentStep);
      const newStates = [...animationStates];
      newStates[currentStep - 1] = true;
      setAnimationStates(newStates);
    }
  }, [currentStep, prevStep]);

  const renderProgressBars = () => 
    Array.from({ length: TOTAL_STEPS }, (_, i) => (
      <ProgressBar
        key={i}
        isActive={currentStep === i + 1}
        isCompleted={animationStates[i] && currentStep !== i + 1}
      />
    ));

  return (
    <header className="p-2 flex items-center sticky top-0 bg-white z-10">
      <Link href={backLink} className="text-gray-600">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
        </svg>
      </Link>
      <div className="flex flex-grow justify-center mx-2">
        <div className="flex w-full max-w-xs gap-1">
          {renderProgressBars()}
        </div>
      </div>
      <div className="w-5"></div> {/* 좌우 대칭을 위한 여백 */}
    </header>
  );
};

export default OnboardingHeader;