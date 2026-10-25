import { ReactNode, useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react';
import { EditorialImage } from './EditorialImage';

interface LineRevealHeadlineProps {
  lines: string[];
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
  delay?: number;
}

/**
 * Reveals editorial headlines line-by-line with a smooth vertical mask.
 */
export function LineRevealHeadline({
  lines,
  className = '',
  as: Tag = 'h2',
  delay = 0,
}: LineRevealHeadlineProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <Tag className={className}>{lines.join(' ')}</Tag>;
  }

  return (
    <Tag className={className} aria-label={lines.join(' ')}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.06em] -mb-[0.06em]">
          <motion.span
            initial={{ y: '105%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              duration: 0.75,
              delay: delay + i * 0.11,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="block"
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

interface EditorialFadeUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Smooth upward fade for labels, paragraphs, and buttons.
 */
export function EditorialFadeUp({
  children,
  delay = 0,
  className = '',
}: EditorialFadeUpProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface MaskedImageRevealProps {
  src: string;
  alt: string;
  aspectClassName?: string;
  className?: string;
  enableParallax?: boolean;
  delay?: number;
}

/**
 * Reveals large editorial photographs with a clip-path curtain mask,
 * subtle initial scale settling, and optional restrained scroll parallax.
 */
export function MaskedImageReveal({
  src,
  alt,
  aspectClassName = 'aspect-[4/3]',
  className = '',
  enableParallax = false,
  delay = 0,
}: MaskedImageRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const yOffset = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion || !enableParallax ? ['0%', '0%'] : ['-4%', '4%']
  );

  return (
    <motion.div
      ref={containerRef}
      initial={
        prefersReducedMotion
          ? { opacity: 1 }
          : { clipPath: 'inset(10% 0% 10% 0%)', opacity: 0 }
      }
      whileInView={
        prefersReducedMotion
          ? { opacity: 1 }
          : { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }
      }
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`relative overflow-hidden bg-[#E9E0DF] ${aspectClassName} ${className}`}
    >
      <motion.div
        style={{ y: yOffset }}
        initial={prefersReducedMotion ? { scale: 1 } : { scale: 1.07 }}
        whileInView={{ scale: 1.02 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{
          duration: 1.15,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="w-full h-full"
      >
        <EditorialImage
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
        />
      </motion.div>
    </motion.div>
  );
}
