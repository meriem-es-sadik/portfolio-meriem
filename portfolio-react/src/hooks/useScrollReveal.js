import { useEffect } from 'react';

export default function useScrollReveal() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(
      '.skill-card, .timeline-item, .contact-card, .project-card, .about-content, h2, .section-heading'
    );

    revealElements.forEach((el) => {
      el.classList.add('reveal');

      const parent = el.parentElement;
      if (parent) {
        const siblings = Array.from(parent.children).filter(child =>
          child.classList.contains('reveal')
        );
        const index = siblings.indexOf(el);
        if (index > 0) {
          el.style.transitionDelay = `${index * 0.12}s`;
        }
      }
    });

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
