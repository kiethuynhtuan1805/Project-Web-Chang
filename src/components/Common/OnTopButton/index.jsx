import './OnTopButton.scss';
import { Icon } from '@iconify/react';

export default function OnTopButton() {

    const scrollToTop = () => {
        const duration = 500;
        const start = document.documentElement.scrollTop || document.body.scrollTop;
        const startTime = performance.now();

        function animateScroll(currentTime) {
            const elapsedTime = currentTime - startTime;
            const progress = elapsedTime / duration;
            const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            const amountToScroll = start * (1 - easeInOutQuad(progress));

            window.scrollTo(0, amountToScroll);

            if (elapsedTime < duration) {
                requestAnimationFrame(animateScroll);
            }
        }

        requestAnimationFrame(animateScroll);
    };

    return (
        <Icon icon="iconoir:fast-arrow-top" onClick={scrollToTop} className='OnTopButton' width={36} height={36} />
    )
}