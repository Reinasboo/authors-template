/**
 * Premium Animation Variants
 * Elite UI/UX Motion Library
 */

export const premiumAnimations = {
  // ============ HERO ANIMATIONS ============
  heroTitle: {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.8,
        ease: 'easeOut',
      },
    }),
  },

  heroSubtitle: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  },

  scrollIndicator: {
    animate: {
      y: [0, 12, 0],
      opacity: [1, 0.5, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  },

  // ============ CARD ANIMATIONS ============
  cardContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  },

  cardItem: {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1], // spring
      },
    },
  },

  cardHover: {
    initial: { y: 0, boxShadow: '0 8px 16px rgba(0,0,0,0.08)' },
    whileHover: {
      y: -8,
      boxShadow: '0 20px 40px rgba(0,0,0,0.16)',
      transition: { duration: 0.3 },
    },
  },

  // ============ BUTTON ANIMATIONS ============
  buttonPrimary: {
    rest: { scale: 1 },
    hover: { scale: 1.04 },
    tap: { scale: 0.98 },
  },

  buttonFill: {
    initial: { backgroundPosition: '200% 0' },
    whileHover: {
      backgroundPosition: '0 0',
      transition: { duration: 0.3 },
    },
  },

  buttonGlow: {
    rest: { boxShadow: '0 0 0 0 rgba(107, 142, 107, 0)' },
    hover: {
      boxShadow: '0 0 20px rgba(107, 142, 107, 0.4)',
      transition: { duration: 0.3 },
    },
  },

  // ============ TEXT ANIMATIONS ============
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  },

  fadeInLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  },

  fadeInRight: {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  },

  // ============ LINE ANIMATIONS ============
  lineDrawIn: {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 2, ease: 'easeInOut' },
    },
  },

  underlineGrow: {
    initial: { scaleX: 0, transformOrigin: 'left' },
    whileHover: {
      scaleX: 1,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  },

  // ============ IMAGE ANIMATIONS ============
  imageZoom: {
    initial: { scale: 1 },
    whileHover: {
      scale: 1.03,
      transition: { duration: 0.4 },
    },
  },

  imageParallax: {
    initial: { y: 0 },
    whileInView: {
      y: [-10, 10],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  },

  // ============ COUNTER ANIMATIONS ============
  counter: {
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  },

  // ============ TESTIMONIAL ANIMATIONS ============
  avatarHalo: {
    animate: {
      boxShadow: [
        '0 0 20px rgba(107, 142, 107, 0.2)',
        '0 0 40px rgba(107, 142, 107, 0.4)',
        '0 0 20px rgba(107, 142, 107, 0.2)',
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  },

  testimonialCard: {
    initial: {
      backgroundColor: 'rgba(245, 241, 234, 0.5)',
    },
    whileHover: {
      backgroundColor: 'rgba(245, 241, 234, 0.8)',
      y: -4,
      boxShadow: '0 12px 24px rgba(0,0,0,0.12)',
      transition: { duration: 0.3 },
    },
  },

  // ============ NAV ANIMATIONS ============
  navLink: {
    initial: { position: 'relative' },
    whileHover: {
      color: '#4A5F4A',
    },
  },

  navUnderline: {
    initial: { scaleX: 0, transformOrigin: 'left' },
    whileHover: {
      scaleX: 1,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  },

  // ============ CONTAINER ANIMATIONS ============
  containerFade: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },

  itemFade: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  },

  // ============ LOADING ANIMATIONS ============
  shimmer: {
    animate: {
      backgroundPosition: ['200% 0', '-200% 0'],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  },

  skeleton: {
    animate: {
      opacity: [0.6, 1, 0.6],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  },

  // ============ PAGE TRANSITION ANIMATIONS ============
  pageEnter: {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3, ease: 'easeIn' },
    },
  },

  // ============ STAGGER PARENT/CHILD ============
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  },

  staggerItem: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  },

  // ============ ROTATE & SCALE ============
  rotateScale: {
    initial: { rotate: -180, scale: 0.8, opacity: 0 },
    animate: {
      rotate: 0,
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] },
    },
  },

  // ============ PULSE ============
  pulse: {
    animate: {
      opacity: [1, 0.6, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  },
};

export default premiumAnimations;
