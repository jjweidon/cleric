'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

type OnboardingHeaderProps = {
  currentStep: 1 | 2 | 3 | 4;
  backLink: string;
};

const ANIMATION_DURATION = 1200;
const PROGRESS_BAR_HEIGHT = '4px';
const PROGRESS_BAR_BG_COLOR = '#D1D5DB';
const PROGRESS_FILL_COLOR = '#3B82F6';
const TOTAL_STEPS = 4;

const styles = {
  keyframes: `
    @keyframes fillProgress {
      from { width: 0%; }
      to { width: 100%; }
    }
  `,
  progressBar: `
    height: ${PROGRESS_BAR_HEIGHT};
    flex: 1;
    background-color: ${PROGRESS_BAR_BG_COLOR};
    overflow: hidden;
    position: relative;
  `,
  progressFill: `
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: ${PROGRESS_FILL_COLOR};
    width: 0;
  `,
  progressFillCompleted: `
    width: 100%;
  `,
  progressFillActive: `
    animation: fillProgress ${ANIMATION_DURATION}ms cubic-bezier(0.42, 0, 0.58, 1) forwards;
  `
};

type ProgressBarProps = {
  isActive: boolean;
  isCompleted: boolean;
};

const ProgressBar = ({ isActive, isCompleted }: ProgressBarProps) => (
  <div className="progress-bar">
    <div className={`progress-fill ${isActive ? 'active' : isCompleted ? 'completed' : ''}`}></div>
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
        <style jsx>{`
          ${styles.keyframes}
          .progress-bar { ${styles.progressBar} }
          .progress-fill { ${styles.progressFill} }
          .progress-fill.completed { ${styles.progressFillCompleted} }
          .progress-fill.active { ${styles.progressFillActive} }
        `}</style>
        <div className="flex w-full max-w-xs gap-1">
          {renderProgressBars()}
        </div>
      </div>
      <div className="w-5"></div> {/* 좌우 대칭을 위한 여백 */}
    </header>
  );
};

export default OnboardingHeader;