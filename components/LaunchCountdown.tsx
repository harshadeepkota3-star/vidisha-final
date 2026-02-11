import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

interface LaunchCountdownProps {
    onComplete?: () => void;
}

// CONFIGURATION: Set the launch date and time here
// Format: YYYY-MM-DDTHH:mm:ss
export const LAUNCH_DATE = '2026-02-12T10:10:00';

const LaunchCountdown: React.FC<LaunchCountdownProps> = ({ onComplete }) => {
    const calculateTimeLeft = (): TimeLeft | null => {
        const target = new Date(LAUNCH_DATE).getTime();
        const now = new Date().getTime();
        const difference = target - now;

        if (difference <= 0) {
            return null;
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft());
    const [isCelebrating, setIsCelebrating] = useState(false);
    const hasCelebrated = useRef(false);

    useEffect(() => {
        const timer = setInterval(() => {
            const remaining = calculateTimeLeft();
            setTimeLeft(remaining);

            if (remaining === null && !hasCelebrated.current) {
                hasCelebrated.current = true;
                setIsCelebrating(true);
                startCelebration();
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const startCelebration = () => {
        const duration = 5 * 1000;
        const animationEnd = Date.now() + duration;
        const colors = ['#3b0764', '#facc15', '#ffffff', '#7e22ce']; // Brand Colors

        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

        const interval: any = setInterval(function () {
            const timeRemaining = animationEnd - Date.now();

            if (timeRemaining <= 0) {
                clearInterval(interval);
                setIsCelebrating(false);
                if (onComplete) onComplete();
                return;
            }

            const particleCount = 60 * (timeRemaining / duration);

            // Left side "Spectacle" burst
            confetti({
                particleCount,
                spread: 70,
                origin: { x: randomInRange(0, 0.3), y: randomInRange(0.5, 0.8) },
                colors: colors,
                startVelocity: 35,
                zIndex: 100001
            });

            // Right side "Spectacle" burst
            confetti({
                particleCount,
                spread: 70,
                origin: { x: randomInRange(0.7, 1), y: randomInRange(0.5, 0.8) },
                colors: colors,
                startVelocity: 35,
                zIndex: 100001
            });

            // Frequent Center/Top fireworks
            if (timeRemaining % 300 < 150) {
                confetti({
                    particleCount: particleCount * 1.5,
                    spread: 120,
                    origin: { x: randomInRange(0.3, 0.7), y: randomInRange(0.2, 0.4) },
                    colors: colors,
                    startVelocity: 30,
                    gravity: 0.8,
                    zIndex: 100001
                });
            }

            // Continuous side stream (Party Poppers)
            confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                origin: { x: 0, y: 1 },
                colors: colors,
                zIndex: 100001
            });
            confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                origin: { x: 1, y: 1 },
                colors: colors,
                zIndex: 100001
            });
        }, 150);
    };

    const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
        <div className="flex flex-col items-center px-4 md:px-10">
            <span className="text-5xl md:text-8xl font-black text-purple-900 leading-none">
                {value.toString().padStart(2, '0')}
            </span>
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-slate-500 mt-4">
                {label}
            </span>
        </div>
    );

    // If it's passed and not celebrating, it shouldn't be showing anyway (handled by App.tsx)
    // But we need to show the state even if timeLeft is null if we are celebrating.
    const displayTime = timeLeft || { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return (
        <div className="fixed inset-0 z-[100000] bg-white flex items-center justify-center p-6 select-none">
            <div className="max-w-5xl w-full text-center flex flex-col items-center">
                {/* Logo and Branding */}
                <div className="mb-12 flex flex-col items-center">
                    <img
                        src="/logo.png"
                        alt="Vidisha Logo"
                        className="h-24 md:h-32 w-auto object-contain mb-4"
                    />
                    <div className="text-center">
                        <span className="text-4xl md:text-5xl font-black tracking-tighter text-purple-950 block leading-none">Vidisha</span>
                        <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-yellow-600 font-black">Educational Society</span>
                    </div>
                </div>

                <h1 className="text-lg md:text-xl font-black text-purple-900/60 uppercase tracking-[0.5em] mb-16">
                    {isCelebrating ? "Vidisha is Live!" : "Vidisha Launches In.."}
                </h1>

                <div className="flex flex-wrap justify-center gap-y-12">
                    <TimeUnit value={displayTime.days} label="Days" />
                    <TimeUnit value={displayTime.hours} label="Hours" />
                    <TimeUnit value={displayTime.minutes} label="Minutes" />
                    <TimeUnit value={displayTime.seconds} label="Seconds" />
                </div>
            </div>
        </div>
    );
};

export default LaunchCountdown;
